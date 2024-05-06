import {
  boolean,
  intersection,
  literal,
  partial,
  string,
  type,
  union
} from 'io-ts'
import type { TypeOf } from 'io-ts'
import { LogLevel } from '../logger/index.js'

const Options = intersection([
  type({
    headless: boolean,
    logLevel: union([
      literal(LogLevel.Off),
      literal(LogLevel.Fatal),
      literal(LogLevel.Error),
      literal(LogLevel.Warn),
      literal(LogLevel.Info),
      literal(LogLevel.Debug),
      literal(LogLevel.Trace)
    ])
  }),
  partial({
    profile: string
  })
])
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Options = TypeOf<typeof Options>
export const isOptions = Options.is
