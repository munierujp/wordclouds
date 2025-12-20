import {
  readFile,
  writeFile
} from 'node:fs/promises'
import { beautifyJson } from '../json/beautifyJson.ts'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path, 'utf8')
  const beautifiedJson = beautifyJson(json)
  await writeFile(path, beautifiedJson)
}
