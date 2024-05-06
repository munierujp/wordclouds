import { generateWordCloudFiles } from './core/index.js'
import { logger } from './logger/index.js'
import { initOptions } from './options/index.js'

try {
  const options = initOptions()
  logger.level = options.logLevel
  logger.info('Start')
  logger.debug(`options=${JSON.stringify(options)}`)
  await generateWordCloudFiles(options)
  logger.info('End')
} catch (error) {
  logger.fatal(error)
  throw error
}
