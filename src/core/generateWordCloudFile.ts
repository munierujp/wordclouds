import type { Page } from 'playwright'
import { logger } from '../logger'
import type { Profile } from '../profile'
import { beautifyJsonFile } from './beautifyJsonFile'
import { downloadImageFile } from './downloadImageFile'
import { downloadWordCloudFile } from './downloadWordCloudFile'
import { resizeImageFile } from './resizeImageFile'
import { uploadWordCloudFile } from './uploadWordCloudFile'
import { uploadWordListFile } from './uploadWordListFile'

export const generateWordCloudFile = async (page: Page, profile: Profile): Promise<void> => {
  logger.info(`Upload ${profile.name}.wcld2 file`)
  await uploadWordCloudFile(page, `data/${profile.name}.wcld2`)
  logger.info('Upload words.csv file')
  await uploadWordListFile(page, 'data/words.csv')
  logger.info(`Download ${profile.name}.${profile.type} file`)
  await downloadImageFile(page, profile)

  if (profile.maxWidth !== undefined) {
    logger.info(`Resize ${profile.name}.${profile.type} file`)
    await resizeImageFile(`data/${profile.name}.${profile.type}`, profile.maxWidth)
  }

  logger.info(`Download ${profile.name}.wcld2 file`)
  await downloadWordCloudFile(page, `data/${profile.name}.wcld2`)
  logger.info(`Beautify ${profile.name}.wcld2 file`)
  await beautifyJsonFile(`data/${profile.name}.wcld2`)
}
