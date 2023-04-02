import { readFile } from './readFile'
import { writeFile } from './writeFile'

export const beautifyJsonFile = async (path: string): Promise<void> => {
  const json = await readFile(path)
  const parsed: unknown = JSON.parse(json)
  const beautified = JSON.stringify(parsed, undefined, 2)
  await writeFile(path, beautified)
}
