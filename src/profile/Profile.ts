import type { FileType } from './FileType.ts'

export interface Profile {
  name: string
  type: FileType
  maxWidth?: number
}
