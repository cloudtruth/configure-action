module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: ['@scaleleap/jest-polly'],
  testEnvironment: 'setup-polly-jest/jest-environment-jsdom',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
  "coverageThreshold": {
    "global": {
      "lines": 100,
      "statements": 100
    }
  },
  "coverageReporters": [
    "json",
    "lcov",
    "html"
  ]
}
