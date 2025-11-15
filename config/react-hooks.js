import { defineConfig } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';

import reactHooksRules from '../rules/react-hooks.js';

export default defineConfig({
  plugins: {
    'react-hooks': reactHooks,
    'react-you-might-not-need-an-effect': reactYouMightNotNeedAnEffect,
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
