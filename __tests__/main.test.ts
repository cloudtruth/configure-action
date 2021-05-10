//
// Copyright (C) 2021 CloudTruth, Inc.
//

import * as core from '@actions/core'
import * as process from 'process'
import mockedEnv, {RestoreFn} from 'mocked-env'
import {run} from '../src/main'

describe('configure-action tests', () => {
  beforeAll(() => {
    require('dotenv').config()
  })

  let restoreEnv: RestoreFn

  beforeEach(() => {
    restoreEnv = mockedEnv({
      CTTEST_NOT_A_SECRET: undefined,
      CTTEST_TOTALLY_A_SECRET: undefined,
      CTTEST_HAS_NO_OVERRIDE: undefined,
      'cttest.not.posix': undefined,
      INPUT_TOKEN: process.env['CLOUDTRUTH_TOKEN'],
      INPUT_PROJECT: 'cloudtruth/configure-action',
      INPUT_ENVIRONMENT: 'default'
    })
  })

  afterEach(() => {
    restoreEnv()
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
    process.env['INPUT_ENVIRONMENT'] = 'override'
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

  it('fails properly with an unknown project name', async () => {
    process.env['INPUT_PROJECT'] = 'not_a_real_project_name'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Project "not_a_real_project_name" not found.`)
  })

  it('fails properly with an unknown environment name', async () => {
    process.env['INPUT_ENVIRONMENT'] = 'no_such_environment'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Environment "no_such_environment" not found.`)
  })

  it('fails properly with a bad token', async () => {
    process.env['INPUT_TOKEN'] = 'decafc0ffee'
    const spyFailed = jest.spyOn(core, 'setFailed')
    await run()
    expect(spyFailed).toHaveBeenCalledWith(`Not Authenticated`)
  })
})
