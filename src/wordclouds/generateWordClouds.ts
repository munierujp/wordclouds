import { chromium } from 'playwright'
import { profiles } from '../profiles'
import { generateWordCloud } from './generateWordCloud'

export const generateWordClouds = async (): Promise<void> => {
  console.log('Start generating word clouds')
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://www.wordclouds.com/')

  for (const profile of profiles) {
    await generateWordCloud(page, profile)
  }

  await browser.close()
  console.log('End generating word clouds')
}
