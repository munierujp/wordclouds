import fs from 'node:fs'

export const writeFile = async (path: string, data: string): Promise<void> => {
  await fs.promises.writeFile(path, data)
}
