module.exports = {
  bail: true,
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  setupFilesAfterEnv: ['@scaleleap/jest-polly'],
  testEnvironment: 'setup-polly-jest/jest-environment-jsdom',
  testMatch: ['**/*.test.ts'],
  testRunner: "jest-jasmine2",
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
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "coverageReporters": [
    "json",
    "lcov",
    "html"
  ]
}
