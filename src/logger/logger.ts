import { getLogger } from 'log4js'
import { LogLevel } from './LogLevel'

const logger = getLogger()
logger.level = LogLevel.Info
export { logger }
