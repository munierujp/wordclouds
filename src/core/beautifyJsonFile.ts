import {
  readFile,
  writeFile
} from '../file/index.js'
import { beautifyJson } from '../json/index.js'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path)
  const beautifiedJson = beautifyJson(json)
  await writeFile(path, beautifiedJson)
}
