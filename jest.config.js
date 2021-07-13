module.exports = {
  bail: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: ['@scaleleap/jest-polly'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!src/gen/**"
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
