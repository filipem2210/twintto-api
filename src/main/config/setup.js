const {
  sentryInit,
  sentryRequestHandler,
  sentryErrorHandler
} = require('../loggers/sentry')
const cors = require('../middlewares/cors')
const helmet = require('../middlewares/helmet')
const jsonParser = require('../middlewares/json-parser')
const contentType = require('../middlewares/content-type')
const compression = require('../middlewares/compression')
const pino = require('../loggers/pino')
const morgan = require('../loggers/morgan')

module.exports = app => {
  sentryInit()
  app.use(sentryRequestHandler)
  app.disable('x-powered-by')
  app.use(cors)
  app.use(helmet)
  app.use(jsonParser)
  app.use(contentType)
  app.use(compression)
  app.use(pino)
  app.use(morgan)
  app.use(sentryErrorHandler)
}
