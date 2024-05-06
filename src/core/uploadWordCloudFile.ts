import type { Page } from 'playwright'
import { Selector } from './Selector.js'

export const uploadWordCloudFile = async (page: Page, path: string): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.click(Selector.OpenWordCloudLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(path)
}
