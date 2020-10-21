const pinoConfig = require('./config/pino.config')
const pino = require('pino')(pinoConfig)
const logger = require('pino-http')({ logger: pino })

module.exports = logger
