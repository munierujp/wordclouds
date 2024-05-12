import assert from 'node:assert'
import {
  describe,
  it
} from 'node:test'
import { beautifyJson } from './beautifyJson.js'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
describe('beautifyJson', () => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  it('returns beautified JSON', () => {
    const actual = beautifyJson('{"string":"string","number":1}')
    assert.strictEqual(actual, `{
  "string": "string",
  "number": 1
}`)
  })
})
