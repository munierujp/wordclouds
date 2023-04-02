import { chromium } from 'playwright'
import { logger } from '../logger'
import { profiles } from '../profile'
import { generateWordCloud } from './generateWordCloud'

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
