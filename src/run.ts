//
// Copyright (C) 2021 CloudTruth, Inc.
//

import * as core from '@actions/core'
import {Api} from './gen/Api'
import {LIB_VERSION} from './version'
import {validate as uuidValidate} from 'uuid'
import {PaginatedParameterList} from './gen/data-contracts'
import {HttpResponse} from './gen/http-client'

const USER_AGENT = `configure-action/${LIB_VERSION}`

export const configurefetch = async (
  url: RequestInfo | URL,
  /* istanbul ignore next */
  {headers, ...options}: RequestInit = {}
): Promise<Response> => {
  return fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      ...headers
    },
    ...options
  })
}

type SecurityDataType = {apikey: string}

export function createApiClient(): Api<SecurityDataType> {
  const api = new Api<SecurityDataType>({
    baseUrl: core.getInput('server') || 'https://api.cloudtruth.io',
    customFetch: configurefetch,
    securityWorker: (securityData: SecurityDataType | null) => {
      return {
        headers: {
          ['Authorization']: `Api-Key ${securityData?.apikey}`
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
  for (const entry of response.data.results ?? []) {
    const values = Object.values(entry.values)
    const valueRecord = values[0]
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
      core.info(`Ignoring unset value for parameter "${parameterName}" (GitHub Actions does not support unsetting).`)
    }
  }
}

async function resolveProjectId(projectNameOrId: string, api: Api<SecurityDataType>): Promise<string> {
  if (uuidValidate(projectNameOrId)) {
    // we look it up to make sure the id is good and we have permission to use it
    try {
      const response = await api.projectsRetrieve(projectNameOrId)
      return response.data.id
    } catch (error: unknown) {
      if (
        error instanceof Object &&
        'error' in error &&
        error.error instanceof Object &&
        'detail' in error.error &&
        typeof error.error.detail === 'string'
      ) {
        throw new Error(`Project "${projectNameOrId}": ${error.error.detail}`)
      }
    }
  }

  const response = await api.projectsList({name: projectNameOrId})
  if (response.data.count === 1) {
    const result = response.data.results
    if (!result) {
      throw new Error(`Project "${projectNameOrId}": Not found.`)
    }
    return result[0].id
  }
  throw new Error(`Project "${projectNameOrId}": Not found.`)
}

export async function run(): Promise<void> {
  try {
    const client = createApiClient()
    const projectId = await resolveProjectId(core.getInput('project', {required: true}), client)
    const environment = core.getInput('environment', {required: true})
    const tag = core.getInput('tag') || undefined

    for (let page = 1; ; ++page) {
      let pageSize = undefined
      if (process.env.TESTING_REST_API_PAGE_SIZE) {
        pageSize = parseInt(process.env.TESTING_REST_API_PAGE_SIZE)
      }
      const response = await client.projectsParametersList({
        projectPk: projectId,
        environment, // can be name or id
        tag,
        page,
        // eslint-disable-next-line camelcase
        page_size: pageSize
      })
      inject(response)
      if (response.data.next == null) {
        if (page === 1 && response.data.count === 0) {
          core.warning(`Project ${core.getInput('project')} has no parameters.`)
        }
        break
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
    if (
      error instanceof Object &&
      'error' in error &&
      error.error instanceof Object &&
      'detail' in error.error &&
      typeof error.error.detail === 'string'
    ) {
      core.setFailed(error.error.detail)
    }
    core.setFailed(`Unknown error`)
  }
}
