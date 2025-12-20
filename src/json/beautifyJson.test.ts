import { describe, it, type TestContext } from 'node:test'
import { beautifyJson } from './beautifyJson.ts'

describe('beautifyJson', () => {
  it('returns beautified JSON', (t: TestContext) => {
    const actual = beautifyJson('{"string":"string","number":1}')
    t.assert.strictEqual(actual, `{
  "string": "string",
  "number": 1
}`)
  })
})
