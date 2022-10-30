module.exports = {
  moduleNameMapper: {
  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/client/src/__mocks__/fileMock.js",
  '\\.(css|less)$': '<rootDir>/client/src/__mocks__/styleMock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(axios)/)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverage: false,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ["json", "html", "text"],
  coverageDirectory: './coverage/'
  };
