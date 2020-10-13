const router = require('express').Router()
const fg = require('fast-glob')

module.exports = app => {
  app.use('/api', router)
  fg.sync('**/src/main/routes/**routes.js').forEach(file => require(`../../../${file}`)(router))
  app.use((req, res) => { res.status(404).json({ error: 'Route not found' }) })
}
