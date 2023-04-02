import type { Page } from 'playwright'
import { FileType } from './FileType'
import type { Profile } from './Profile'
import { Selector } from './Selector'

export const downloadImageFile = async (page: Page, profile: Profile): Promise<void> => {
  await page.click(Selector.FileMenuLink)
  await page.click(Selector.SaveImageLink)
  await page.click(profile.type === FileType.Jpg ? Selector.JpgButton : Selector.PngButton)
  await page.click(Selector.SaveButton)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.DownloadButton)
  const download = await downloadPromise
  await download.saveAs(`data/${profile.name}.${profile.type}`)
}
