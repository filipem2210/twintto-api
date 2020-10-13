module.exports = router => {
  router.use('*', (req, res) => { if (!req.route) res.status(404).json({ error: 'Route not found' }) })
}
