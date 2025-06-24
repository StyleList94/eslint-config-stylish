# eslint-config-stylish

Stylish ESLint configuration for Front-end Engineers.

## Getting Started

Requirements:

- `eslint`: v9 or later
- `@eslint/js`: v9 or later
- `eslint-plugin-import`: v2 or later
- `eslint-plugin-jsx-a11y`: v6 or later
- `eslint-plugin-react`: v7 or later
- `eslint-plugin-react-hooks`: v5 or later
- `typescript-eslint`: v8 or later (if you use TypeScript)
- `eslint-import-resolver-typescript`: v2 or later (if you use TypeScript)

```bash
pnpm add -D \
  eslint-config-stylish \
  eslint @eslint/js \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  typescript-eslint \
  eslint-import-resolver-typescript
```

## Features

- **Base**: Recommended ESLint rules, import/export rules
- **React**: Customized rules for React, JSX a11y
- **TypeScript**: Adds TypeScript-specific linting rules and configurations.

## Usage

set up your `eslint.config.js` file like this

### Base

```js
import { defineConfig } from 'eslint/config';
import stylish from 'eslint-config-stylish';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: [stylish],
  },
  /* */
]);
```

### React

```js
import { defineConfig } from 'eslint/config';
import stylishReact from 'eslint-config-stylish/react';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,tsx}'],
    extends: [stylishReact],
  },
  /* */
]);
```

### TypeScript

```js
import { defineConfig } from 'eslint/config';
import stylishTypeScript from 'eslint-config-stylish/typescript';

export default defineConfig([
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    extends: [stylishTypeScript],
  },
  /* */
]);
```

## Rules

- `js`: [recommend](https://eslint.org/docs/latest/rules/#recommended-rules)
- `import`: [recommended](https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules)
- `react`: [recommended](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules)
- `jsx-a11y`: [recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules)
- `@typescript-eslint` [strict type checked](https://typescript-eslint.io/rules/?=strict)

### Customized rules

`js`

- `no-unused-vars`: `error`
- `no-console`: `warn`
- `no-param-reassign`: `error` (options for Next.js SSR Props)

`import`

- `import/extensions`: `error` (add options)
- `import/export`: `off`
- `import/newline-after-import`: `error`
- `import/no-cycle`: `off` (due to performance issues)
- `import/no-extraneous-dependencies`:`error` (add options for testing)
- `import/no-self-import`: `error`
- `import/no-unresolved`: `off`
- `import/order`: `error` (add group options)
- `import/prefer-default-export`: `error`

`react`

- `react/button-has-type`: `error`
- `react/display-name`: `off`
- `react/function-component-definition` `error` (add options)
- `react/jsx-filename-extension` `warn` (add options for extensions)
- `react/prop-types`: `off` (almost all projects use the TypeScript)
- `react/require-default-props` `off` (same as above)

`react-hooks`

- `react-hooks/rules-of-hooks`: `error`
- `react-hooks/exhaustive-deps`: `warn`

`jsx-a11y`

- `jsx-a11y/label-has-associated-control`: `error` (add options)

`@typescript-eslint`

- `@typescript-eslint/explicit-module-boundary-types`: `off`
- `@typescript-eslint/no-base-to-string`: `error` (add option for ignored type names)
- `@typescript-eslint/no-confusing-void-expression`: `error` (add option to ignore arrow shorthand)
- `@typescript-eslint/no-empty-interface`: `off`
- `@typescript-eslint/no-empty-object-type`: `error` (add option to allow interfaces with single extends)
- `@typescript-eslint/no-floating-promises`: `off`
- `@typescript-eslint/no-misused-promises`: `error` (add option to check void return)
- `@typescript-eslint/no-unsafe-call`: `off`
- `@typescript-eslint/no-unused-vars`: `error` (add option for patterns)
- `@typescript-eslint/prefer-promise-reject-errors`: `error` (add options to allow throwing unknown)
- `@typescript-eslint/restrict-template-expressions`: `error` (add option to allow number )
- `@typescript-eslint/return-await`: `off`
- `@typescript-eslint/unbound-method`: `off` (add option to ignore static)
