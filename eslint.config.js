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
  {
    // The pinned application supplies its own Node runtime.
    files: ['.github/workflows/integration.yml'],
    rules: { 'github-actions/node-version-file': 'off', 'github-actions/on': 'off' },
  },
  {
    // The application runner supplies mutable API objects to these scenarios.
    files: ['packages/e2e-integration/src/**/*.ts'],
    rules: { '@typescript-eslint/prefer-readonly-parameter-types': 'off' },
  },
])
