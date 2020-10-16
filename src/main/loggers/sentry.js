const Sentry = require('@sentry/node')
const { sentryDsn } = require('../config/env')

const sentryInit = () => Sentry.init({ dsn: sentryDsn })
const sentryRequestHandler = Sentry.Handlers.requestHandler()
const sentryErrorHandler = Sentry.Handlers.errorHandler()

module.exports = { sentryInit, sentryRequestHandler, sentryErrorHandler }
