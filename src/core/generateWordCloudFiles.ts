import { chromium } from 'playwright'
import { logger } from '../logger'
import type { Options } from '../options'
import { profiles } from '../profile'
import { generateWordCloudFile } from './generateWordCloudFile'

export const generateWordCloudFiles = async (options: Options): Promise<void> => {
  logger.info('Launch browser')
  const browser = await chromium.launch({ headless: options.headless })
  const page = await browser.newPage()
  logger.info('Open https://www.wordclouds.com/')
  await page.goto('https://www.wordclouds.com/')

  for (const profile of profiles) {
    await generateWordCloudFile(page, profile)
  }

  logger.info('Close browser')
  await browser.close()
}