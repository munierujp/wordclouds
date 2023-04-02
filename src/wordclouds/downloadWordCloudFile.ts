import type { Page } from 'playwright'
import {
  readFile,
  writeFile
} from '../file'
import { beautifyJson } from '../json'
import { Selector } from './Selector'

export const downloadWordCloudFile = async (page: Page, path: string): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  await page.click(Selector.SaveWordCloudLink)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.SaveButton)
  const download = await downloadPromise
  await download.saveAs(path)
  const json = await readFile(path)
  const beautifiedJson = beautifyJson(json)
  await writeFile(path, beautifiedJson)
}
