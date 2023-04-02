import type { Page } from 'playwright'
import { FileType } from './FileType'
import type { Profile } from './Profile'
import { Selector } from './Selector'

export const generateWordCloud = async (page: Page, profile: Profile): Promise<void> => {
  // TODO: Update `wordList` of `.wcld2` file using `words.csv`

  // Upload `.wcld2` file
  await page.click(Selector.FileMenuLink)
  const fileChooserPromise = page.waitForEvent('filechooser')
  await page.click(Selector.OpenWordCloudLink)
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(profile.input)

  // Download image file
  await page.click(Selector.FileMenuLink)
  await page.click(Selector.SaveImageLink)
  await page.click(profile.type === FileType.Jpg ? Selector.JpgButton : Selector.PngButton)
  await page.click(Selector.SaveButton)
  const downloadPromise = page.waitForEvent('download')
  await page.click(Selector.DownloadButton)
  const download = await downloadPromise
  await download.saveAs(profile.output)
}
