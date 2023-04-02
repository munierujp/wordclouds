import { FileType } from './FileType'
import type { Profile } from './Profile'

export const profiles: Profile[] = [
  {
    name: 'pixiv',
    input: 'data/pixiv.wcld2',
    type: FileType.Png
  },
  {
    name: 'tabelog',
    input: 'data/tabelog.wcld2',
    type: FileType.Jpg
  },
  {
    name: 'twitter',
    input: 'data/twitter.wcld2',
    type: FileType.Png
  },
  {
    name: 'zoom',
    input: 'data/zoom.wcld2',
    type: FileType.Png
  }
]
