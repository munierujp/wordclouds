import type { FileType } from './FileType.js'

export interface Profile {
  name: string
  type: FileType
  maxWidth?: number
}
