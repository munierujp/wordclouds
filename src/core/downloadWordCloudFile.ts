import type { Page } from 'playwright'
import { Selector } from './Selector.js'

export const downloadWordCloudFile = async (page: Page, path: string): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  await page.click(Selector.SaveWordCloudLink)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.SaveButton)
  const download = await downloadPromise
  await download.saveAs(path)
}
