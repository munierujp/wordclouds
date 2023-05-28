import { logger } from '../logger'

export const handleError = (error: unknown): void => {
  logger.fatal(error)
  throw error
}
