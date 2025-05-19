import type { Page } from 'playwright'
import { FileType } from '../profile/FileType.js'
import { Selector } from './Selector.js'

export const downloadImageFile = async (page: Page, path: string, type: FileType): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  await page.click(Selector.SaveImageLink)
  await page.click(type === FileType.Jpg ? Selector.FileTypeJpgButton : Selector.FileTypePngButton)
  await page.click(Selector.SaveButton)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.DownloadButton)
  const download = await downloadPromise
  await download.saveAs(path)
  await page.click(Selector.CloseButton)
}
