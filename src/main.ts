#!/usr/bin/env node

import { logger } from './logger'
import { initOptions } from './options'
import { generateWordClouds } from './wordclouds'

const options = initOptions()
logger.level = options.logLevel
logger.info('Start')
logger.debug(`options=${JSON.stringify(options)}`)

generateWordClouds(options)
  .then(() => {
    logger.info('End')
  })
  .catch((error: unknown) => {
    logger.fatal(error)
    throw error
  })
