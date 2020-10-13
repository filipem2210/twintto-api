const pino = require('pino')({
  level: 'debug',
  prettyPrint: {
    levelFirst: true,
    colorize: true
  }
})
const logger = require('pino-http')({ logger: pino })

module.exports = logger
