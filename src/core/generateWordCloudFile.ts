import type { Page } from 'playwright'
import { logger } from '../logger/index.js'
import type { Profile } from '../profile'
import { beautifyJsonFile } from './beautifyJsonFile.js'
import { downloadImageFile } from './downloadImageFile.js'
import { downloadWordCloudFile } from './downloadWordCloudFile.js'
import { resizeImageFile } from './resizeImageFile.js'
import { uploadWordCloudFile } from './uploadWordCloudFile.js'
import { uploadWordListFile } from './uploadWordListFile.js'

const OUTPUT_DIRECTORY = 'data'
const WORD_LIST_FILE_NAME = 'words.csv'

export const generateWordCloudFile = async (page: Page, profile: Profile): Promise<void> => {
  const wordCloudFileName = `${profile.name}.wcld2`

  logger.info(`Upload ${wordCloudFileName}`)
  await uploadWordCloudFile(page, `${OUTPUT_DIRECTORY}/${wordCloudFileName}`)

  logger.info(`Upload ${WORD_LIST_FILE_NAME}`)
  await uploadWordListFile(page, `${OUTPUT_DIRECTORY}/${WORD_LIST_FILE_NAME}`)

  const imageFileName = `${profile.name}.${profile.type}`

  logger.info(`Download ${imageFileName}`)
  await downloadImageFile(page, `${OUTPUT_DIRECTORY}/${imageFileName}`, profile.type)

  if (profile.maxWidth !== undefined) {
    logger.info(`Resize ${imageFileName}`)
    await resizeImageFile(`${OUTPUT_DIRECTORY}/${imageFileName}`, profile.maxWidth)
  }

  logger.info(`Download ${wordCloudFileName}`)
  await downloadWordCloudFile(page, `${OUTPUT_DIRECTORY}/${wordCloudFileName}`)

  logger.info(`Beautify ${wordCloudFileName}`)
  await beautifyJsonFile(`${OUTPUT_DIRECTORY}/${wordCloudFileName}`)
}
