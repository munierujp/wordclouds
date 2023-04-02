import type { Page } from 'playwright'
import { Selector } from './Selector'

export const uploadWordCloudFile = async (page: Page, filePath: string): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.click(Selector.OpenWordCloudLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(filePath)
}
