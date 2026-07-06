import { FileType } from './FileType.ts'
import type { Profile } from './Profile.ts'

export const profiles: Profile[] = [
  // {
  //   name: 'google-slides-dark',
  //   type: FileType.Png
  // },
  // {
  //   name: 'google-slides-light',
  //   type: FileType.Png
  // },
  {
    name: 'square',
    type: FileType.Png
  },
  {
    name: 'tabelog',
    type: FileType.Jpg,
    maxWidth: 980
  },
  {
    name: 'x',
    type: FileType.Png
  },
  // {
  //   name: 'zoom',
  //   type: FileType.Png
  // }
]
