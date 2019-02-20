const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })
var cloudinary = require('cloudinary')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const cors = require('cors')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'prod')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { port = process.env.PORT || 3000 } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use('/api', require('./routes'))
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on ${port}`,
    badge: true
  })
}
start()
