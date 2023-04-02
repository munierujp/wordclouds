import { chromium } from 'playwright'
import { generateWordCloud } from './generateWordCloud'
import { profiles } from './profiles'

export const generateWordClouds = async (): Promise<void> => {
  console.log('Start generating word clouds')
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://www.wordclouds.com/')

  for (const profile of profiles) {
    await generateWordCloud(page, profile)
  }

  await browser.close()
  console.log('End generating word clouds')
}
