import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

import baseRules from '../rules/base.js';
import importRules from '../rules/import.js';

export default tseslint.config({
  ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
  extends: [eslint.configs.recommended, importPlugin.flatConfigs.recommended],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    ...baseRules,
    ...importRules,
  },
});
