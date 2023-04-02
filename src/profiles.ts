import { FileType } from './FileType'
import type { Profile } from './Profile'

export const profiles: Profile[] = [
  {
    name: 'pixiv',
    type: FileType.Png
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
