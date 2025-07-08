import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

import reactHooksRules from '../rules/react-hooks.js';

export default tseslint.config({
  plugins: {
    'react-hooks': reactHooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    ...reactHooksRules,
  },
});
