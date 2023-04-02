import type { Page } from 'playwright'
import { Selector } from './Selector'

export const uploadWordListFile = async (page: Page, filePath: string): Promise<void> => {
  await page.click(Selector.WordListLink)
  await page.click(Selector.ImportCsvLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.click(Selector.OpenWordListLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(filePath)
}
