import { generateWordCloudFiles } from './core/generateWordCloudFiles.js'
import { logger } from './logger/logger.js'
import { initOptions } from './options/initOptions.js'

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
