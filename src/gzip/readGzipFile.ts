import { readFile } from 'node:fs/promises'
import { gunzipAsync } from './gunzipAsync.ts'

export const readGzipFile = async (path: string): Promise<Buffer<ArrayBuffer>> => {
  const buffer = await readFile(path)
  return await gunzipAsync(buffer)
}
