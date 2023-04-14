import { FileType } from './FileType'
import type { Profile } from './Profile'

export const profiles: Profile[] = [
  {
    name: 'anatag-like',
    type: FileType.Png
  },
  {
    name: 'pixiv',
    type: FileType.Png,
    maxWidth: 4096
  },
  {
    name: 'tabelog',
    type: FileType.Jpg
  },
  {
    name: 'twitter',
    type: FileType.Png
  },
  {
    name: 'zoom',
    type: FileType.Png
  }
]