module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest-circus/runner',
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
