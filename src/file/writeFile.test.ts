import fs from 'node:fs'
import {
  afterEach,
  describe,
  expect,
  it,
  jest
} from '@jest/globals'
import { writeFile } from './writeFile.js'

jest.mock('node:fs', () => ({
  promises: {
    writeFile: jest.fn<typeof fs.promises.writeFile>()
  }
}))

describe('writeFile', () => {
  const writeFileMock = jest.mocked(fs.promises.writeFile)

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('calls fs.promises.writeFile()', async () => {
    const data = 'test data'
    writeFileMock.mockResolvedValue()
    const path = 'test.txt'

    await expect(writeFile(path, data)).resolves.toBeUndefined()
    expect(writeFileMock).toHaveBeenCalledWith(path, data)
  })
})
