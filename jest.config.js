module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  collectCoverageFrom: ['**/src/**/*.js'],
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb'
}
