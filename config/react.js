import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

import reactRules from '../rules/react.js';
import jsxA11yRules from '../rules/jsx-a11y.js';

export default tseslint.config({
  plugins: {
    react: reactPlugin,
    'jsx-a11y': jsxA11y,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  languageOptions: {
    ...reactPlugin.configs.flat.recommended.languageOptions,
    ...jsxA11y.flatConfigs.recommended.languageOptions,
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat['jsx-runtime'].rules,
    ...jsxA11y.flatConfigs.recommended.rules,

    ...reactRules,
    ...jsxA11yRules,
  },
});
