import { chromium } from 'playwright'
import { logger } from '../logger'
import { generateWordCloud } from './generateWordCloud'
import { profiles } from './profiles'

export const generateWordClouds = async (): Promise<void> => {
  logger.info('Launch browser')
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()
  logger.info('Open https://www.wordclouds.com/')
  await page.goto('https://www.wordclouds.com/')

  for (const profile of profiles) {
    await generateWordCloud(page, profile)
  }

  await browser.close()
}
