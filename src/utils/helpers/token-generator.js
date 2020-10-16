const jwt = require('jsonwebtoken')
const { MissingParamError } = require('../errors')

module.exports = class TokenGenerator {
  constructor (secret, privateKey) {
    this.secret = secret
    this.privateKey = privateKey
  }

  async generate (id) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    if (!this.privateKey) {
      throw new MissingParamError('privateKey')
    }
    if (!id) {
      throw new MissingParamError('id')
    }
    return jwt.sign(
      { _id: id },
      {
        key: this.privateKey,
        passphrase: this.secret
      },
      {
        expiresIn: '7d',
        algorithm: 'RS256'
      }
    )
  }
}
