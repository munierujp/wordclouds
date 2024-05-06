import { generateWordCloudFiles } from './core/index.js'
import { logger } from './logger/index.js'
import { initOptions } from './options/index.js'

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
