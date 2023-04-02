import type { Page } from 'playwright'
import { Selector } from './Selector'

export const downloadWordCloudFile = async (page: Page, filePath: string): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.SaveWordCloudLink)
  const download = await downloadPromise
  await download.saveAs(filePath)
}
