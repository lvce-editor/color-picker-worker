import * as config from '@lvce-editor/eslint-config'
import * as actions from '@lvce-editor/eslint-plugin-github-actions'

export default [
  ...config.default,
  ...config.recommendedVirtualDom,
  ...actions.default,
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
]
