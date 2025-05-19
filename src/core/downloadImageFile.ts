import type { Page } from 'playwright'
import { logger } from '../logger/logger.js'
import { FileType } from '../profile/FileType.js'
import { Selector } from './Selector.js'

export const downloadImageFile = async (page: Page, path: string, type: FileType): Promise<void> => {
  logger.debug(`[downloadImageFile] click ${Selector.FileMenuLink}`)
  await page.click(Selector.FileMenuLink)
  logger.debug(`[downloadImageFile] click ${Selector.SaveImageLink}`)
  await page.click(Selector.SaveImageLink)
  const fileTypeButton = type === FileType.Jpg ? Selector.FileTypeJpgButton : Selector.FileTypePngButton
  logger.debug(`[downloadImageFile] click ${fileTypeButton}`)
  await page.click(fileTypeButton)
  logger.debug(`[downloadImageFile] click ${Selector.SaveButton}`)
  await page.click(Selector.SaveButton)
  const downloadPromise = page.waitForEvent('download')
  logger.debug(`[downloadImageFile] click ${Selector.DownloadButton}`)
  await page.click(Selector.DownloadButton)
  const download = await downloadPromise
  await download.saveAs(path)
  logger.debug(`[downloadImageFile] click ${Selector.CloseButton}`)
  await page.click(Selector.CloseButton)
}
