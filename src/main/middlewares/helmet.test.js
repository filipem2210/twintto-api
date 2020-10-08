const request = require('supertest')
let app

describe('Helmet', () => {
  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app')
  })

  test('Should set security headers', async () => {
    app.get('/test_headers', (req, res) => {
      res.send('')
    })

    const res = await request(app).get('/test_headers')
    expect(res.headers['content-security-policy']).toBe("default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")
    expect(res.headers['x-dns-prefetch-control']).toBe('off')
    expect(res.headers['expect-ct']).toBe('max-age=0')
    expect(res.headers['x-frame-options']).toBe('SAMEORIGIN')
    expect(res.headers['strict-transport-security']).toBe('max-age=15552000; includeSubDomains')
    expect(res.headers['x-download-options']).toBe('noopen')
    expect(res.headers['x-content-type-options']).toBe('nosniff')
    expect(res.headers['x-permitted-cross-domain-policies']).toBe('none')
    expect(res.headers['referrer-policy']).toBe('no-referrer')
    expect(res.headers['x-xss-protection']).toBe('0')
  })
})
