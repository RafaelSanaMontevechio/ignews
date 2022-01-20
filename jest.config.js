module.exports = {
  // Ignored files during testing
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

  // Transform all files before running tests
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: { '\\.(css|less|scss|sass)$': 'identity-obj-proxy' },
  // indicates which environment the tests are running
  testEnvironment: 'jsdom',
};
