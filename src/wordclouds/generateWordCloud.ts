import type { Page } from 'playwright'
import { logger } from '../logger'
import type { Profile } from '../profile'
import { downloadImageFile } from './downloadImageFile'
import { downloadWordCloudFile } from './downloadWordCloudFile'
import { uploadWordCloudFile } from './uploadWordCloudFile'
import { uploadWordListFile } from './uploadWordListFile'

export const generateWordCloud = async (page: Page, profile: Profile): Promise<void> => {
  logger.info(`Start generating word cloud for ${profile.name}`)
  logger.info(`Upload ${profile.name}.wcld2 file`)
  await uploadWordCloudFile(page, `data/${profile.name}.wcld2`)
  logger.info('Upload data/words.csv file')
  await uploadWordListFile(page, 'data/words.csv')
  logger.info(`Download ${profile.name}.${profile.type} file`)
  await downloadImageFile(page, profile)
  logger.info(`Download ${profile.name}.wcld2 file`)
  await downloadWordCloudFile(page, `data/${profile.name}.wcld2`)
  logger.info(`End generating word cloud for ${profile.name}`)
}
