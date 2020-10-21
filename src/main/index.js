const MongoHelper = require('../infra/helpers/mongo-helper')
const { mongoUrl, port } = require('./config/env')
const loggerConfig = require('../main/loggers/config/pino.config')
const logger = require('pino')(loggerConfig)

MongoHelper.connect(mongoUrl)
  .then(() => {
    const app = require('./config/app')

    app.listen(port, () => logger.info(`Server running at http://localhost:${port}`))
  }).catch(logger.error)
