import { cliOptions } from './cliOptions.ts'
import { createOptions } from './createOptions.ts'
import type { Options } from './Options.ts'

export const initOptions = (): Options => {
  return createOptions(cliOptions)
}
