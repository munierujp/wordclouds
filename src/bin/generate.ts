#!/usr/bin/env node

import { generateWordClouds } from '../generateWordClouds'

console.log('Start generate')
generateWordClouds()
  .then(() => {
    console.log('End generate')
  })
  .catch((error: unknown) => {
    console.error(error)
    throw error
  })
