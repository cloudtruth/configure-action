//
// Copyright (C) 2021 - 2024 CloudTruth, Inc.
//
import fetchMock from 'jest-fetch-mock'
fetchMock.enableMocks()
import {TextEncoder, TextDecoder} from 'util'
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof globalThis.TextDecoder

import * as core from '@actions/core'
import * as process from 'process'
import {jest, expect} from '@jest/globals'

import {run} from '../src/run'
import {unitTestApiKey, setupRequestMocks} from './mocks/requests'

function resetEnvVars() {
  delete process.env['CTTEST_NOT_A_SECRET']
  delete process.env['CTTEST_TOTALLY_A_SECRET']
  delete process.env['CTTEST_HAS_NO_OVERRIDE']
  delete process.env['cttest.not.posix']
  delete process.env['CTTEST_HAS_NO_VALUE']
}

let getInputMock: jest.SpiedFunction<typeof core.getInput>

describe('configure-action tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    setupRequestMocks()
    // Comment the following line to see log output
    getInputMock = jest.spyOn(core, 'getInput')

    // redefine the mockImplementation in tests as needed
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'default'
        default:
          return ''
      }
    })
  })

  afterEach(() => {
    fetchMock.mockClear()
    resetEnvVars()
  })

  it('configures the default environment', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'default'
        case 'testing_rest_api_page_size':
          return '3'
        default:
          return ''
      }
    })
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    const spySetFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spySetFailed).not.toHaveBeenCalled()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenNthCalledWith(1, 'CTTEST_NOT_A_SECRET', 'not_a_secret_default')
    expect(spySetEnvvar).toHaveBeenNthCalledWith(2, 'CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenNthCalledWith(3, 'CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenNthCalledWith(4, 'cttest.not.posix', 'not.posix.default')
    expect(spySetEnvvar).not.toHaveBeenCalledWith('CTTEST_HAS_NO_VALUE', expect.anything())
  })

  it('allows for ids instead of names', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return '46266d6b-e430-42e2-a5fb-e7187ef3611c'
        case 'environment':
          return '1ec45f01-02d2-4046-a9d3-404be4327602'
        default:
          return ''
      }
    })
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    const spySetFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spySetFailed).not.toHaveBeenCalled()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.default')
  })

  it('prevents overwriting existing environment variables', async () => {
    process.env['CTTEST_NOT_A_SECRET'] = 'foo'
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith(
      'The environment variable "CTTEST_NOT_A_SECRET" already exists and cannot be overwritten.'
    )
    delete process.env['CTTEST_NOT_A_SECRET']
  })

  it('configures the override environment', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'staging'
        case 'override':
          return 'true'
        default:
          return ''
      }
    })
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    const spySetFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spySetFailed).not.toHaveBeenCalled()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.override')
  })

  it('configures the override environment using a tag', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'staging'
        case 'override':
          return 'true'
        case 'tag':
          return 'tag-one'
        default:
          return ''
      }
    })
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    const spySetFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spySetFailed).not.toHaveBeenCalled()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_override_tag_one')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.override')
  })

  it('warns if the project has no parameters', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'empty'
        case 'environment':
          return 'default'
        default:
          return ''
      }
    })
    const spyWarn = jest.spyOn(core, 'warning')
    await run()
    expect(spyWarn).toHaveBeenCalled()
  })

  it('fails properly with an unknown project id', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return '39c58d99-ca5f-4802-8c2e-f3c060d57934'
        case 'environment':
          return 'default'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Project "39c58d99-ca5f-4802-8c2e-f3c060d57934": Not found.`)
  })

  it('fails properly with an unknown project name', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'not_a_real_project_name'
        case 'environment':
          return 'default'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Project "not_a_real_project_name": Not found.`)
  })

  it('fails properly with an unknown environment id', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return '39c58d99-ca5f-4802-8c2e-f3c060d57934'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Not found.`)
  })

  it('fails properly with an unknown environment name', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'no_such_environment'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Not found.`)
  })

  it('fails properly with an unknown tag name', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return unitTestApiKey
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'default'
        case 'tag':
          return 'not_a_real_tag_name'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith('Tag `not_a_real_tag_name` could not be found in environment `default`.')
  })

  it('fails properly with a bad token', async () => {
    getInputMock.mockImplementation(name => {
      switch (name) {
        case 'apikey':
          return 'decafc0ffee'
        case 'server':
          return 'https://localhost:8000'
        case 'project':
          return 'cloudtruth/configure-action'
        case 'environment':
          return 'default'
        default:
          return ''
      }
    })
    const spyFailed = jest.spyOn(core, 'setFailed').mockImplementation(() => {})
    await run()
    expect(spyFailed).toHaveBeenCalledWith('Incorrect authentication credentials.')
  })
})
