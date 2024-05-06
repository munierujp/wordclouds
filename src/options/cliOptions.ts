import { LogLevel } from '../logger/LogLevel.js'
import type { CLIOption } from './CLIOption.js'
import { OptionType } from './OptionType.js'

export const cliOptions: CLIOption[] = [
  {
    name: 'headless',
    description: 'Use headless mode',
    type: OptionType.Boolean,
    required: false,
    default: true
  },
  {
    name: 'log-level',
    description: 'Log level to show',
    type: OptionType.String,
    required: false,
    choices: [
      LogLevel.Off,
      LogLevel.Fatal,
      LogLevel.Error,
      LogLevel.Warn,
      LogLevel.Info,
      LogLevel.Debug,
      LogLevel.Trace
    ],
    default: LogLevel.Info
  },
  {
    name: 'profile',
    description: 'Profile to use',
    type: OptionType.String,
    required: false
  }
]
