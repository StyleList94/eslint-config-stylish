import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

import typescriptRules from '../rules/typescript.js';
import { importOrderOptions } from '../rules/import.js';

export default tseslint.config({
  extends: [
    tseslint.configs.strictTypeChecked,
    importPlugin.flatConfigs.typescript,
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    ...typescriptRules,

    'import/order': [
      'error',
      {
        ...importOrderOptions,
        pathGroups: [
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
  },
});
