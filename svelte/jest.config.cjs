const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!svelte-material-icons)"
  ],
  moduleFileExtensions: ['ts', 'js', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '^\\$lib(.*)$': '<rootDir>/src/lib$1',
    '^\\$app(.*)$': '<rootDir>/.svelte-kit/runtime/app$1',
  },
}

module.exports = config
