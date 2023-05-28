import { generateWordCloudFiles } from './core'
import { logger } from './logger'
import { initOptions } from './options'
import { handleError } from './util'

const options = initOptions()
logger.level = options.logLevel
logger.info('Start')
logger.debug(`options=${JSON.stringify(options)}`)

generateWordCloudFiles(options)
  .then(() => {
    logger.info('End')
  })
  .catch(handleError)
