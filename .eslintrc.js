module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    camelcase: 'off',
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'no-restricted-imports': ['off'],
  },
}
