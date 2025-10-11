import { defineConfig } from "eslint/config";
import reactHooks from 'eslint-plugin-react-hooks';

import reactHooksRules from '../rules/react-hooks.js';

export default defineConfig({
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
