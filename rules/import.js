// @ts-check

export const importOrderOptions = {
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
};

/** @type {import('eslint').Linter.RulesRecord} */
export default {
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
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        '**/__mocks__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
        '**/test-utils.?(js|tsx)',
        '**/jest.config.js',
        '**/jest.setup.js',
        '**/vitest.config.{js,ts,mjs,mts}',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
        '**/rollup.config.js',
        '**/rollup.config.*.js',
        'eslint.config.*',
        '**/__mocks__/**',
      ],
    },
  ],
  'import/no-self-import': 'error',
  'import/no-unresolved': 'off',
  'import/order': [
    'error',
    {
      ...importOrderOptions,
    },
  ],
  'import/prefer-default-export': 'error',
};
