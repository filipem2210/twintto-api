module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://twintto_db:27017/twintto',
  tokenSecret: process.env.TOKEN_SECRET || 'secret',
  port: process.env.PORT || 5858
}
