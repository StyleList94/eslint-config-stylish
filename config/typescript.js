import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [tseslint.configs.strictTypeChecked],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/return-await': 'off',
  },
});
