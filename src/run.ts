//
// Copyright (C) 2021 CloudTruth, Inc.
//

import * as core from '@actions/core'
import * as github from '@actions/github'
import {Api} from './gen/Api'
import {LIB_VERSION} from './version'
import {validate as uuidValidate} from 'uuid'
import {PaginatedParameterList, Project, ProjectsParametersListParams} from './gen/data-contracts'
import {HttpResponse} from './gen/http-client'

import fetch from 'isomorphic-fetch'
import {env} from 'process'

const USER_AGENT = `configure-action/${LIB_VERSION}`

export const configurefetch = (
  url: RequestInfo,
  /* istanbul ignore next */
  {headers, ...options}: RequestInit = {}
) => {
  return fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      ...headers
    },
    ...options
  })
}

type SecurityDataType = {apikey: string}

export function api(): Api<SecurityDataType> {
  const api = new Api<SecurityDataType>({
    baseUrl: core.getInput('server') || 'https://api.cloudtruth.io',
    customFetch: configurefetch,
    securityWorker: (securityData: SecurityDataType | null) => {
      return {
        headers: {
          ['Authorization']: 'Api-Key ' + securityData!.apikey
        },
        keepalive: true
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

async function resolve_project_id(project_name_or_id: string, api: Api<SecurityDataType>): Promise<string> {
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
    const project_id = await resolve_project_id(core.getInput('project', {required: true}), client)
    const environment = core.getInput('environment', {required: true})
    const tag = core.getInput('tag') || undefined

    for (let page = 1; ; ++page) {
      core.debug(
        `Requesting parameter values for project='${project_id}' environment='${environment}' tag='${tag}' page=${page}`
      )
      let page_size = undefined
      if (process.env.TESTING_REST_API_PAGE_SIZE) {
        page_size = parseInt(process.env.TESTING_REST_API_PAGE_SIZE)
      }
      const response = await client.projectsParametersList({
        projectPk: project_id,
        environment: environment, // can be name or id
        tag: tag,
        page: page,
        page_size: page_size
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
