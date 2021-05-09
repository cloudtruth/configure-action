//
// Copyright (C) 2021 CloudTruth, Inc.
//

import * as core from '@actions/core'
import fetch, {RequestInit} from 'node-fetch'

interface Configuration {
  environmentValue: {
    parameterValue: string
  }
  isSecret: boolean
  keyName: string
}

async function request<TResponse>(
  url: string,
  config: RequestInit
): Promise<TResponse> {
  const response = await fetch(url, config)
  const raw = await response.json()
  if (raw['errors']) {
    throw new Error(raw['errors'][0])
  }
  const project = raw['data']['viewer']['organization']['project']
  if (!project) {
    throw new Error(`Project "${core.getInput('project')}" not found.`)
  }
  const nodes = project['parameters']['nodes']
  if (!nodes.length) {
    core.warning(`Project "${core.getInput('project')}" has no parameters.`)
  }
  return nodes
}

function inject(response: Configuration[]): void {
  const overwrite = core.getInput('overwrite') || false
  for (const entry of response) {
    const {environmentValue, isSecret, keyName} = entry
    if (!environmentValue) {
      throw new Error(
        `Environment "${core.getInput('environment')}" not found.`
      )
    }
    if (keyName in process.env && !overwrite) {
      throw new Error(
        `The environment variable "${keyName}" already exists and cannot be overwritten.`
      )
    }

    if (isSecret) {
      core.info(`Declaring "${keyName}" as a secret.`)
      core.setSecret(environmentValue.parameterValue)
    }

    core.info(`Setting environment variable "${keyName}"`)
    core.exportVariable(keyName, environmentValue.parameterValue)
  }
}

export async function run(): Promise<void> {
  const token = core.getInput('token')
  const project = core.getInput('project')
  const environment = core.getInput('environment')
  const server = core.getInput('server') || 'api.cloudtruth.com'

  try {
    core.debug(
      `Requesting https://${server}/graphql project="${project}" environment="${environment}"`
    )

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        query: `
        query Extract {
          viewer {
            organization {
              project(name: "${project}") {
                parameters {
                  nodes {
                    environmentValue(environmentName: "${environment}") {
                      parameterValue
                    }
                    isSecret
                    keyName
                  }
                }
              }
            }
          }
        }`
      })
    }

    const response = await request<Configuration[]>(
      `https://${server}/graphql`,
      requestOptions
    )
    inject(response)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
