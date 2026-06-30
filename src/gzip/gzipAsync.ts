import { gzip } from 'node:zlib'
import { promisify } from 'node:util'

export const gzipAsync = promisify(gzip)
