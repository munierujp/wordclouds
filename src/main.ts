#!/usr/bin/env node

import { generateWordCloudFiles } from './core'
import { logger } from './logger'
import { initOptions } from './options'

const options = initOptions()
logger.level = options.logLevel
logger.info('Start')
logger.debug(`options=${JSON.stringify(options)}`)

generateWordCloudFiles(options)
  .then(() => {
    logger.info('End')
  })
  .catch((error: unknown) => {
    logger.fatal(error)
    throw error
  })
