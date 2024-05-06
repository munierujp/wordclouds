import {
  describe,
  expect,
  it
} from '@jest/globals'
import { beautifyJson } from './beautifyJson.js'

describe('beautifyJson', () => {
  it('returns beautified JSON', async () => {
    const actual = beautifyJson('{"string":"string","number":1}')

    expect(actual).toBe(`{
  "string": "string",
  "number": 1
}`)
  })
})
