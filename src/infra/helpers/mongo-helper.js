const { MongoClient } = require('mongodb')

module.exports = {
  async connect (uri, dbName) {
    this.uri = uri
    this.dbName = dbName
    this.client = await MongoClient.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    this.db = await this.client.db(this.dbName)
  },

  async disconnect () {
    await this.client.close()
  },

  async getDb () {
    if (!this.client.isConnected()) {
      await this.connect(this.uri, this.dbName)
    }
    return this.db
  }
}