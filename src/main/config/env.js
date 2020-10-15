module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://twintto:twintto@twintto_db:27017/twintto?authSource=admin',
  tokenSecret: process.env.SECRET_KEY || 'Tvv1ntT0',
  port: process.env.APP_PORT || 5858
}
