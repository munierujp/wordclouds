import { writeFile } from 'node:fs/promises'
import { gzipAsync } from './gzipAsync.ts'

export const writeGzipFile = async (path: string, text: string): Promise<void> => {
  const buffer = Buffer.from(text, 'utf8')
  const zippedBuffer = await gzipAsync(buffer)
  await writeFile(path, zippedBuffer)
}
