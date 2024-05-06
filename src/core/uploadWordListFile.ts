import type { Page } from 'playwright'
import { Selector } from './Selector.js'

export const uploadWordListFile = async (page: Page, path: string): Promise<void> => {
  await page.click(Selector.WordListLink)
  await page.click(Selector.ImportCsvLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.click(Selector.OpenWordListLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(path)
  await page.click(Selector.ApplyWordListButton)
}
