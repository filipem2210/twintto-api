module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb'
}
