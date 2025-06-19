import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config({
  extends: [eslint.configs.recommended, importPlugin.flatConfigs.recommended],
  languageOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.?(ts|tsx)',
          '**/*.spec.?(ts|tsx)',
          '**/test-utils.tsx',
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
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    'import/prefer-default-export': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^state$', '^ctx$'],
      },
    ],
  },
});
