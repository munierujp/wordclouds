import { FileType } from './FileType'
import type { Profile } from './Profile'

export const profiles: Profile[] = [
  {
    name: 'pixiv',
    input: 'data/pixiv.wcld2',
    output: 'data/pixiv.png',
    type: FileType.Png
  },
  {
    name: 'tabelog',
    input: 'data/tabelog.wcld2',
    output: 'data/tabelog.jpg',
    type: FileType.Jpg
  },
  {
    name: 'twitter',
    input: 'data/twitter.wcld2',
    output: 'data/twitter.png',
    type: FileType.Png
  },
  {
    name: 'zoom',
    input: 'data/zoom.wcld2',
    output: 'data/zoom.png',
    type: FileType.Png
  }
]
