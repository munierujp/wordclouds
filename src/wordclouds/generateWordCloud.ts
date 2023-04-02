import type { Page } from 'playwright'
import type { Profile } from '../Profile'
import { downloadImageFile } from './downloadImageFile'
import { downloadWordCloudFile } from './downloadWordCloudFile'
import { uploadWordCloudFile } from './uploadWordCloudFile'
import { uploadWordListFile } from './uploadWordListFile'

export const generateWordCloud = async (page: Page, profile: Profile): Promise<void> => {
  console.log(`Start generating word cloud for ${profile.name}`)
  console.log(`Upload ${profile.name}.wcld2 file`)
  await uploadWordCloudFile(page, `data/${profile.name}.wcld2`)
  console.log('Upload data/words.csv file')
  await uploadWordListFile(page, 'data/words.csv')
  console.log(`Download ${profile.name}.${profile.type} file`)
  await downloadImageFile(page, profile)
  console.log(`Download ${profile.name}.wcld2 file`)
  await downloadWordCloudFile(page, `data/${profile.name}.wcld2`)
  console.log(`End generating word cloud for ${profile.name}`)
}
