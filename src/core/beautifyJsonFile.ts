import {
  readFile,
  writeFile
} from '../file'
import { beautifyJson } from '../json'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path)
  const beautifiedJson = beautifyJson(json)
  await writeFile(path, beautifiedJson)
}
