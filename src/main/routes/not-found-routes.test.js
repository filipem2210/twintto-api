const request = require('supertest')
const app = require('../config/app')

describe('Not Found Routes', () => {
  test('Should return Route Not Found if route not found', async () => {
    await request(app)
      .get('/api/not_found_route')
      .send('')
      .expect(404, { error: 'Route not found' })
  })
})
