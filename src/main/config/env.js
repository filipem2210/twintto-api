require('dotenv').config()
const fs = require('fs')
const privateKey = fs.readFileSync('./private.pem')

module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://twintto:twintto@twintto_db:27017/twintto?authSource=admin',
  tokenSecret: process.env.SECRET_KEY || 'Tvv1ntT0',
  port: process.env.APP_PORT || 5858,
  sentryDsn: process.env.SENTRY_DSN,
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT || 6379,
  privateKey
}
