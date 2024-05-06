import { cliOptions } from './cliOptions.js'
import { createOptions } from './createOptions.js'
import type { Options } from './Options.ts'

export const initOptions = (): Options => {
  return createOptions(cliOptions)
}
