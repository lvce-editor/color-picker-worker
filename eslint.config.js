import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    ignores: ['**/server/**', '**/e2e/**', '**/memory/**'],
  },
  {
    rules:{
      'jest/no-restricted-jest-methods':'off'
    }
  }
]
