import {
  readFile,
  writeFile
} from '../file'
import { beautifyJson } from './beautifyJson'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path)
  const beautified = beautifyJson(json)
  await writeFile(path, beautified)
}
