import type { Page } from 'playwright'
import { downloadImageFile } from './downloadImageFile'
import { downloadWordCloudFile } from './downloadWordCloudFile'
import type { Profile } from './Profile'
import { uploadWordCloudFile } from './uploadWordCloudFile'
import { uploadWordListFile } from './uploadWordListFile'

export const generateWordCloud = async (page: Page, profile: Profile): Promise<void> => {
  console.log(`Start generating word cloud for ${profile.name}`)
  console.log(`Upload ${profile.input} file`)
  await uploadWordCloudFile(page, profile.input)
  console.log('Upload data/words.csv file')
  await uploadWordListFile(page, 'data/words.csv')
  console.log(`Download ${profile.output} file`)
  await downloadImageFile(page, profile)
  console.log(`Download ${profile.input} file`)
  await downloadWordCloudFile(page, profile.input)
  console.log(`End generating word cloud for ${profile.name}`)
}
