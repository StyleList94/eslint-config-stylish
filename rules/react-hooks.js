// @ts-check

import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';

/** @type {import('eslint').Linter.RulesRecord} */
export default {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
  ...reactYouMightNotNeedAnEffect.configs.recommended.rules,
};
