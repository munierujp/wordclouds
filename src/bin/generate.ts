#!/usr/bin/env node

import { logger } from '../logger'
import { initOptions } from '../options'
import { generateWordClouds } from '../wordclouds'

const options = initOptions()
logger.level = options.logLevel
logger.info('Start generate')

generateWordClouds()
  .then(() => {
    logger.info('End generate')
  })
  .catch((error: unknown) => {
    logger.fatal(error)
    throw error
  })
