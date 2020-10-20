require('dotenv').config()
const fs = require('fs')
const privateKey = fs.readFileSync('./private.pem')

module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://twintto:twintto@twintto_db:27017/twintto?authSource=admin',
  tokenSecret: process.env.SECRET_KEY || 'Tvv1ntT0',
  port: process.env.APP_PORT || 5858,
  redisHost: process.env.REDIS_HOST || '127.0.0.1',
  redisPort: process.env.REDIS_PORT || 6379,
  sentryDsn: process.env.SENTRY_DSN,
  privateKey
}
