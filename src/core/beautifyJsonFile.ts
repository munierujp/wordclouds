import { readFile } from '../file/readFile.js'
import { writeFile } from '../file/writeFile.js'
import { beautifyJson } from '../json/beautifyJson.js'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path)
  const beautifiedJson = beautifyJson(json)
  await writeFile(path, beautifiedJson)
}
