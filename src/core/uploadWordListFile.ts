import type { Page } from 'playwright'
import { logger } from '../logger/logger.js'
import { Selector } from './Selector.js'

export const uploadWordListFile = async (page: Page, path: string): Promise<void> => {
  logger.debug(`[uploadWordListFile] click ${Selector.WordListLink}`)
  await page.click(Selector.WordListLink)
  logger.debug(`[uploadWordListFile] click ${Selector.ImportCsvLink}`)
  await page.click(Selector.ImportCsvLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  logger.debug(`[uploadWordListFile] click ${Selector.OpenWordListLink}`)
  await page.click(Selector.OpenWordListLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(path)
  logger.debug(`[uploadWordListFile] click ${Selector.WordListApplyButton}`)
  await page.click(Selector.WordListApplyButton)
  logger.debug(`[uploadWordListFile] click ${Selector.WordListCloseButton}`)
  await page.click(Selector.WordListCloseButton)
}
