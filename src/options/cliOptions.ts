import { LogLevel } from '../logger'
import type { CLIOption } from './CLIOption'
import { OptionType } from './OptionType'

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
