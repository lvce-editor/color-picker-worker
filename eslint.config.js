import { defineConfig } from 'eslint/config'
import * as config from '@lvce-editor/eslint-config'

export default defineConfig([
  ...config.default,
  ...config.recommendedVirtualDom,
  ...config.recommendedActions,
  {
    ignores: ['**/server/**', '**/memory/**'],
  },
  {
    rules: {
      '@cspell/spellchecker': 'off',
    },
  },
  {
    files: ['**/test/**/*.ts'],
    rules: {
      'virtual-dom/prefer-merge-class-names': 'off',
    },
  },
])
