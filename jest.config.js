module.exports = {
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  testMatch: ['<rootDir>/**/__tests__/**/*.js?(x)', '<rootDir>/src/**/?(*.)(spec|test).js?(x)'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '/src[/](.+)': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx'],
};
