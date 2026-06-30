import { gunzip } from 'node:zlib'
import { promisify } from 'node:util'

export const gunzipAsync = promisify(gunzip)
