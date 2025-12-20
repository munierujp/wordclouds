import { generateWordCloudFiles } from './core/generateWordCloudFiles.ts'
import { logger } from './logger/logger.ts'
import { initOptions } from './options/initOptions.ts'

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
