//
// Copyright (C) 2021 CloudTruth, Inc.
//

import * as core from '@actions/core'
import {Api} from './gen/Api'
import {validate as uuidValidate} from 'uuid'
import {PaginatedParameterList, Project} from './gen/data-contracts'
import {HttpResponse} from './gen/http-client'

require('isomorphic-fetch')

type SecurityDataType = {apikey: string}

export function api(): Api<SecurityDataType> {
  const api = new Api<SecurityDataType>({
    baseUrl: core.getInput('server') || 'https://api.cloudtruth.io',
    customFetch: fetch,
    securityWorker: (securityData: SecurityDataType | null) => {
      if (securityData) {
        return {
          headers: {
            ['Authorization']: 'Api-Key ' + securityData.apikey
          },
          keepalive: true
        }
      }
    }
  })
  api.setSecurityData({apikey: core.getInput('apikey')})
  return api
}

function inject(response: HttpResponse<PaginatedParameterList>): void {
  const overwrite = core.getInput('overwrite') || false
  for (const entry of response.data.results!) {
    const values = Object.values(entry.values)
    const valueRecord = values[0]!
    const effectiveValue = valueRecord?.value
    const isSecret = entry.secret
    const parameterName = entry.name

    if (effectiveValue != null) {
      if (parameterName in process.env && !overwrite) {
        throw new Error(`The environment variable "${parameterName}" already exists and cannot be overwritten.`)
      }

      if (isSecret) {
        core.info(`Declaring "${parameterName}" as a secret.`)
        core.setSecret(effectiveValue)
      }

      core.info(`Setting environment variable "${parameterName}"`)
      core.exportVariable(parameterName, effectiveValue)
    } else {
      core.warning(`Ignoring unset value for parameter "${parameterName}" (GitHub Actions does not support unsetting).`)
    }
  }
}

async function resolve_environment_id(environment_name_or_id: string, api: Api<SecurityDataType>): Promise<string> {
  if (!environment_name_or_id) {
    throw new Error(`No environment name or id was specified.`)
  }

  if (uuidValidate(environment_name_or_id)) {
    // we look it up to make sure the id is good and we have permission to use it
    try {
      const response = await api.environmentsRetrieve(environment_name_or_id)
      return response.data.id
    } catch (error: HttpResponse<Project, any> | any) {
      throw new Error(`Environment "${environment_name_or_id}": ${error.error.detail}`)
    }
  }

  const response = await api.environmentsList({name: environment_name_or_id})
  if (response.data.count == 1) {
    const result = response.data.results!
    return result[0].id
  }

  throw new Error(`Environment "${environment_name_or_id}": Not found.`)
}

async function resolve_project_id(project_name_or_id: string, api: Api<SecurityDataType>): Promise<string> {
  if (!project_name_or_id) {
    throw new Error(`No project name or id was specified.`)
  }

  if (uuidValidate(project_name_or_id)) {
    // we look it up to make sure the id is good and we have permission to use it
    try {
      const response = await api.projectsRetrieve(project_name_or_id)
      return response.data.id
    } catch (error: HttpResponse<Project, any> | any) {
      throw new Error(`Project "${project_name_or_id}": ${error.error.detail}`)
    }
  }

  const response = await api.projectsList({name: project_name_or_id})
  if (response.data.count == 1) {
    const result = response.data.results!
    return result[0].id
  }
  throw new Error(`Project "${project_name_or_id}": Not found.`)
}

export async function run(): Promise<void> {
  try {
    const client = api()
    const project_id = await resolve_project_id(core.getInput('project'), client)
    const environment_id = await resolve_environment_id(core.getInput('environment'), client)

    for (let page = 1; ; ++page) {
      core.debug(`Requesting parameter values for project='${project_id}' environment='${environment_id}' page=${page}`)
      const response = await client.projectsParametersList({
        projectPk: project_id,
        environment: environment_id,
        page: page
      })
      inject(response)
      if (response.data.next == null) {
        if (page == 1 && response.data.count == 0) {
          core.warning(`Project ${core.getInput('project')} has no parameters.`)
        }
        break
      }
    }
  } catch (error: any) {
    core.setFailed(error.message || error.error.detail)
  }
}
