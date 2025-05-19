import type { Page } from 'playwright'
import { logger } from '../logger/logger.js'
import { Selector } from './Selector.js'

export const downloadWordCloudFile = async (page: Page, path: string): Promise<void> => {
  logger.debug(`[downloadWordCloudFile] click ${Selector.FileMenuLink}`)
  await page.click(Selector.FileMenuLink)
  logger.debug(`[downloadWordCloudFile] click ${Selector.SaveWordCloudLink}`)
  await page.click(Selector.SaveWordCloudLink)
  const downloadPromise = page.waitForEvent('download')
  logger.debug(`[downloadWordCloudFile] click ${Selector.SaveButton}`)
  await page.click(Selector.SaveButton)
  const download = await downloadPromise
  await download.saveAs(path)
}
