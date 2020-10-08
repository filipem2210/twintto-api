module.exports = (req, res, next) => {
  res.set('content-security-policy', "default-src 'self';base-uri 'self';block-all-mixed-content;font-src 'self' https: data:;frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")
  res.set('x-dns-prefetch-control', 'off')
  res.set('expect-ct', 'max-age=0')
  res.set('x-frame-options', 'SAMEORIGIN')
  res.set('strict-transport-security', 'max-age=15552000; includeSubDomains')
  res.set('x-download-options', 'noopen')
  res.set('x-content-type-options', 'nosniff')
  res.set('x-permitted-cross-domain-policies', 'none')
  res.set('referrer-policy', 'no-referrer')
  res.set('x-xss-protection', '0')
  next()
}
