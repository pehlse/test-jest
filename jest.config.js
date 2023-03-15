module.exports = {
    globalSetup: '<rootDir>/globalSetups.js',
    testMatch: ['**/(*.)unit.js'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    coverageDirectory: '<rootDir>/tests/unit/coverage',
    globals: {
      'vue-jest': {
        experimentalCSSCompile: false,
      },
    },
  }
  