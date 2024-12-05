//
// Copyright (C) 2021 CloudTruth, Inc.
//

import {syncConfig} from './run'

export async function run(): Promise<void> {
  await syncConfig()
}
