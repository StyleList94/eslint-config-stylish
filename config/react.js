import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import reactRules from '../rules/react.js';
import reactHooksRules from '../rules/react-hooks.js';
import jsxA11yRules from '../rules/jsx-a11y.js';

export default tseslint.config({
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooks,
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
    ...reactHooksRules,
    ...jsxA11yRules,
  },
});
