const jestConfig = require('@libs/jest-config-lib');

module.exports = {
  ...jestConfig,
  rootDir: './dist',
  collectCoverageFrom: [
    '<rootDir>/src/**',
    '!src/index.js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/tests/$1',
  },
};
