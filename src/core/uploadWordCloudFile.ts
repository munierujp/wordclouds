import type { Page } from 'playwright'
import { logger } from '../logger/logger.ts'
import { Selector } from './Selector.ts'

export const uploadWordCloudFile = async (page: Page, path: string): Promise<void> => {
  logger.debug(`[uploadWordCloudFile] click ${Selector.FileMenuLink}`)
  await page.click(Selector.FileMenuLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  logger.debug(`[uploadWordCloudFile] click ${Selector.OpenWordCloudLink}`)
  await page.click(Selector.OpenWordCloudLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(path)
}
