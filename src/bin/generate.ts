#!/usr/bin/env node

import { logger } from '../logger'
import { generateWordClouds } from '../wordclouds'

logger.info('Start generate')
generateWordClouds()
  .then(() => {
    logger.info('End generate')
  })
  .catch((error: unknown) => {
    logger.fatal(error)
    throw error
  })
