import type { FileType } from './FileType'

export interface Profile {
  name: string
  input: string
  output: string
  type: FileType
}
