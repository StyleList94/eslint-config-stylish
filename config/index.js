import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

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
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    'no-console': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^state$', '^ctx$'],
      },
    ],
    'no-unused-vars': 'error',

    'import/export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.?(js|ts|tsx)',
          '**/*.spec.?(js|ts|tsx)',
          '**/test-utils.?(js|tsx)',
          '**/__mocks__/**',
          'eslint.config.*',
        ],
      },
    ],
    'import/no-self-import': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/prefer-default-export': 'error',
  },
});
