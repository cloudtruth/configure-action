//
// Copyright (C) 2021 CloudTruth, Inc.
//
// NOTE: to record against a localhost you need to combine the root-ca crt and key into a pem
//

import * as core from '@actions/core'
import * as process from 'process'
import {api, run} from '../src/run'
import {jestPollyConfigService} from '@scaleleap/jest-polly'

// coverage for main.ts (which calls run())
require('../src/main')

jestPollyConfigService.config = {
  secrets: [process.env.CLOUDTRUTH_API_KEY]
}

process.env.INPUT_APIKEY = process.env.CLOUDTRUTH_API_KEY
process.env.INPUT_SERVER = 'https://localhost:8000'

async function setup() {
  // helper to seed the test environment
  const client = api()

  let default_environment = (await client.environmentsList({name: process.env.INPUT_ENVIRONMENT!})).data.results![0]
  let staging_environment = (await client.environmentsList({name: 'staging'})).data.results![0]
  let empty_project = (await client.projectsCreate({name: 'empty'})).data
  let test_project = (await client.projectsCreate({name: process.env.INPUT_PROJECT!})).data

  let CTTEST_NOT_A_SECRET = (
    await client.projectsParametersCreate(test_project.id, {name: 'CTTEST_NOT_A_SECRET', secret: false})
  ).data
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_NOT_A_SECRET.id, projectPk: test_project.id},
    {environment: default_environment.id, static_value: 'not_a_secret_default', dynamic: false}
  )
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_NOT_A_SECRET.id, projectPk: test_project.id},
    {environment: staging_environment.id, static_value: 'not_a_secret_override', dynamic: false}
  )

  let CTTEST_TOTALLY_A_SECRET = (
    await client.projectsParametersCreate(test_project.id, {name: 'CTTEST_TOTALLY_A_SECRET', secret: true})
  ).data
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_TOTALLY_A_SECRET.id, projectPk: test_project.id},
    {environment: default_environment.id, static_value: 'totally_a_secret_default', dynamic: false}
  )
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_TOTALLY_A_SECRET.id, projectPk: test_project.id},
    {environment: staging_environment.id, static_value: 'totally_a_secret_override', dynamic: false}
  )

  let CTTEST_HAS_NO_OVERRIDE = (
    await client.projectsParametersCreate(test_project.id, {name: 'CTTEST_HAS_NO_OVERRIDE', secret: false})
  ).data
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_HAS_NO_OVERRIDE.id, projectPk: test_project.id},
    {environment: default_environment.id, static_value: 'has_no_override_default', dynamic: false}
  )

  let CTTEST_NOT_POSIX = (
    await client.projectsParametersCreate(test_project.id, {name: 'cttest.not.posix', secret: false})
  ).data
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_NOT_POSIX.id, projectPk: test_project.id},
    {environment: default_environment.id, static_value: 'not.posix.default', dynamic: false}
  )
  await client.projectsParametersValuesCreate(
    {parameterPk: CTTEST_NOT_POSIX.id, projectPk: test_project.id},
    {environment: staging_environment.id, static_value: 'not.posix.override', dynamic: false}
  )

  let CTTEST_HAS_NO_VALUE = (
    await client.projectsParametersCreate(test_project.id, {name: 'CTTEST_HAS_NO_VALUE', secret: false})
  ).data
}

describe('configure-action tests', () => {
  beforeAll(async () => {
    if (process.env.SETUP == 'setup') {
      await setup()
    }
  })

  beforeEach(() => {
    delete process.env.CTTEST_NOT_A_SECRET
    delete process.env.CTTEST_TOTALLY_A_SECRET
    delete process.env.CTTEST_HAS_NO_OVERRIDE
    delete process.env.CTTEST_HAS_NO_VALUE
    delete process.env['cttest.not.posix']

    process.env.INPUT_PROJECT = 'cloudtruth/configure-action'
    process.env.INPUT_ENVIRONMENT = 'default'
  })

  it('configures the default environment', async () => {
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    await run()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.default')
    expect(spySetEnvvar).not.toHaveBeenCalledWith('CTTEST_HAS_NO_VALUE', expect.anything())
  })

  it('allows for ids instead of names', async () => {
    const client = api()
    let test_project = (await client.projectsList({name: process.env.INPUT_PROJECT!})).data.results![0]
    process.env.INPUT_PROJECT = test_project.id
    let default_environment = (await client.environmentsList({name: process.env.INPUT_ENVIRONMENT!})).data.results![0]
    process.env.INPUT_ENVIRONMENT = default_environment.id
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    await run()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.default')
  })

  it('prevents overwriting existing environment variables', async () => {
    process.env['CTTEST_NOT_A_SECRET'] = 'foo'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(
      'The environment variable "CTTEST_NOT_A_SECRET" already exists and cannot be overwritten.'
    )
  })

  it('configures the override environment', async () => {
    const spySetEnvvar = jest.spyOn(core, 'exportVariable')
    const spySetSecret = jest.spyOn(core, 'setSecret')
    process.env['INPUT_ENVIRONMENT'] = 'staging'
    process.env['INPUT_OVERRIDE'] = 'true'
    await run()
    expect(spySetSecret).toHaveBeenCalledWith('totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_NOT_A_SECRET', 'not_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_TOTALLY_A_SECRET', 'totally_a_secret_override')
    expect(spySetEnvvar).toHaveBeenCalledWith('CTTEST_HAS_NO_OVERRIDE', 'has_no_override_default')
    expect(spySetEnvvar).toHaveBeenCalledWith('cttest.not.posix', 'not.posix.override')
  })

  it('warns if the project has no parameters', async () => {
    process.env['INPUT_PROJECT'] = 'empty'
    const spyWarn = jest.spyOn(core, 'warning')
    await run()
    expect(spyWarn).toHaveBeenCalled()
  })

  it('fails properly with project never set', async () => {
    delete process.env['INPUT_PROJECT']
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`No project name or id was specified.`)
  })

  it('fails properly with an unknown project id', async () => {
    process.env['INPUT_PROJECT'] = '39c58d99-ca5f-4802-8c2e-f3c060d57934'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Project "39c58d99-ca5f-4802-8c2e-f3c060d57934": Not found.`)
  })

  it('fails properly with an unknown project name', async () => {
    process.env['INPUT_PROJECT'] = 'not_a_real_project_name'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Project "not_a_real_project_name": Not found.`)
  })

  it('fails properly with environment never set', async () => {
    delete process.env['INPUT_ENVIRONMENT']
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`No environment name or id was specified.`)
  })

  it('fails properly with an unknown environment id', async () => {
    process.env['INPUT_ENVIRONMENT'] = '39c58d99-ca5f-4802-8c2e-f3c060d57934'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Environment "39c58d99-ca5f-4802-8c2e-f3c060d57934": Not found.`)
  })

  it('fails properly with an unknown environment name', async () => {
    process.env['INPUT_ENVIRONMENT'] = 'no_such_environment'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Environment "no_such_environment": Not found.`)
  })

  it('fails properly with a bad token', async () => {
    process.env['INPUT_APIKEY'] = 'decafc0ffee'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Incorrect authentication credentials.`)
  })
})
