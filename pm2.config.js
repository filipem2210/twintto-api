module.exports = {
  apps: [{
    name: 'twintto',
    script: './src/main/index.js',
    watch: true,
    ignore_watch: ['node_modules'],
    instances: 0,
    exec_mode: 'cluster'
  }]
}
