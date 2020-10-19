const { adapt } = require('../adapters/express-router-adapter')
const LoginRouterComposer = require('../composers/login-router-composer')
const rateLimiter = require('../middlewares/rate-limiter')

module.exports = router => {
  router.post('/login', rateLimiter, adapt(LoginRouterComposer.compose()))
}
