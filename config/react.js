import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';

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
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        depth: 2,
      },
    ],
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
});
