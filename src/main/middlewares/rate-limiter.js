const { RateLimiterRedis } = require('rate-limiter-flexible')
const redisClient = require('../../infra/helpers/redis-client')

const rateLimiterConfig = {
  storeClient: redisClient,
  keyPrefix: '@twintto_rateLimiter',
  points: 5,
  duration: 60 * 15,
  blockDuration: 60 * 15
}

const rateLimiter = new RateLimiterRedis(rateLimiterConfig)

module.exports = (req, res, next) => {
  rateLimiter.consume(req.ip)
    .then(() => {
      next()
    })
    .catch(() => {
      res.status(429).json({ error: 'Too many accounts created or login attempts from this IP, please try again after 15 minutes' })
    })
}
