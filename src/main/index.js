const MongoHelper = require('../infra/helpers/mongo-helper')
const { mongoUrl, port } = require('./config/env')
const logger = require('pino')({
  level: 'info',
  prettyPrint: {
    levelFirst: true,
    colorize: true
  }
})

MongoHelper.connect(mongoUrl)
  .then(() => {
    const app = require('./config/app')

    app.listen(port, () => logger.info(`Server running at http://localhost:${port}`))
  }).catch(logger.error)
