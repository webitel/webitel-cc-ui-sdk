module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: [
    '/node_modules/(?!@webitel/ui-sdk/src|webitel-sdk).+\\.js$',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/unit/mocks/fileMock.js',
  },
  reporters: ['default', 'bamboo-jest-reporter'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    'src/filters/**/*.{js,vue}',
    'src/mixins/**/*.{js,vue}',
    'src/modules/**/*.{js,vue}',
    'src/scripts/**/*.{js,vue}',
    'src/store/**/*.{js,vue}',
    'src/package/**/*.{js,vue}',
    '!src/**/index.js', // No need to cover bootstrap file
  ],
  setupFiles: [
    './tests/config/config.js',
    './src/plugins/webitel-ui.js',
    // './src/components/index.js',
    // './src/directives/index.js',
  ],
  // setupFilesAfterEnv: ['./tests/config/jest.config.js'],
};
