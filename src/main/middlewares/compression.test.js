const request = require('supertest')
let app

describe('Compression', () => {
  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app')
  })

  test('Should set compression header', async () => {
    app.get('/test_compression', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_compression')
    expect(res.headers.vary).toBe('Accept-Encoding')
  })
})
