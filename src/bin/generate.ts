#!/usr/bin/env node

import { generateWordClouds } from '../generateWordClouds'

console.log('Start generate script')
generateWordClouds()
  .then(() => {
    console.log('End generate script')
  })
  .catch((error: unknown) => {
    console.error(error)
    throw error
  })
