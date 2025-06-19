# eslint-config-stylish

Stylish ESLint configuration for Front-end Engineers.

## Features

- **Base**: Recommended ESLint rules, import/export rules
- **React**: Customized rules for React, JSX a11y
- **TypeScript**: Adds TypeScript-specific linting rules and configurations.

## Installation

Requirements:

- `eslint`: v9 or later
- `eslint-plugin-import`: v2 or later
- `eslint-plugin-jsx-a11y`: v6 or later
- `eslint-plugin-react`: v7 or later
- `eslint-plugin-react-hooks`: v5 or later
- `typescript-eslint`: v8 or later

```bash
pnpm add -D \
  eslint-config-stylish \
  eslint typescript-eslint \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

## Usage

set up your `eslint.config.js` file like this

### Base

```js
import { defineConfig } from 'eslint/config';
import stylishConfig from 'eslint-config-stylish';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: [stylishConfig],
  },
  /* */
]);
```

### React

```js
import { defineConfig } from 'eslint/config';
import stylishReactConfig from 'eslint-config-stylish/react';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,tsx}'],
    extends: [stylishReactConfig],
  },
  /* */
]);
```

### TypeScript

```js
import { defineConfig } from 'eslint/config';
import stylishTypeScriptConfig from 'eslint-config-stylish/typescript';

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
    extends: [stylishTypeScriptConfig],
  },
  /* */
]);
```

## Rules

### ESLint

Includes all [recommended rules](https://eslint.org/docs/latest/rules/#recommended-rules).

Customized rules:

- `no-unused-vars`
- `no-console`
- `no-param-reassign`

### Import

Includes all [recommended rules](https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules).

Customized rules:

- `import/extensions`
- `import/newline-after-import`
- `import/no-cycle`
- `import/no-extraneous-dependencies`
- `import/no-self-import`
- `import/no-unresolved`
- `import/order`
- `import/prefer-default-export`

### React and JSX a11y

Recommended rules:

- [React](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules)
- [JSX a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules)

Customized rules:

- `jsx-a11y/label-has-associated-control`
- `react/button-has-type`
- `react/display-name`
- `react/function-component-definition`
- `react/jsx-filename-extension`
- `react/prop-types`
- `react/require-default-props`
- `react-hooks/rules-of-hooks`
- `react-hooks/exhaustive-deps`

### TypeScript ESLint

Includes all [strict rules](https://typescript-eslint.io/rules/?=strict).

Customized rules:

- `@typescript-eslint/explicit-module-boundary-types`
- `@typescript-eslint/no-empty-interface`
- `@typescript-eslint/no-floating-promises`
- `@typescript-eslint/no-misused-promises`
- `@typescript-eslint/no-unsafe-call`
- `@typescript-eslint/return-await`
