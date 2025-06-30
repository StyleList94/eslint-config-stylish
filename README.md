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

- [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars): `error`
- [`no-console`](https://eslint.org/docs/latest/rules/no-console): `warn`
- [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign): `error` (options for Next.js SSR Props)

`import`

- [`import/export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md): `off`
- [`import/extensions`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md): `error`
  - disallow extensions after `js`, `jsx`, `ts`, and `tsx`
  - `ignorePackages` is set to `true`
- [`import/newline-after-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md): `error`
- [`import/no-cycle`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md): `off` (due to performance issues)
- [`import/no-extraneous-dependencies`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md):`error`
  - set `devDependencies` for testing (default)
  - project-specific overrides may be required
- [`import/no-self-import`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md): `error`
- [`import/no-unresolved`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md): `off`
- [`import/order`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md): `error`
  - sort by the groups `type`,`builtin`,`external`,`internal`,`parent`,`sibling`, `index`,
  - set `newlines-between` to `always-and-inside-groups`
  - in TypeScript, add the `@/components/**` pattern (after the `internal` group)
- [`import/prefer-default-export`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md): `error`

`react`

- [`react/button-has-type`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md): `error`
- [`react/destructuring-assignment`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md): `error`
- [`react/display-name`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md): `off`
- [`react/function-component-definition`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md): `error`
  - `namedComponents` set to `arrow-function`, `function-declaration`
  - `unnamedComponents` set to `arrow-function`
- [`react/jsx-curly-brace-presence`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md): `error` (`never` for `props`, `children`)
- [`react/jsx-curly-newline`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md): `error` (`consistent` for `multiline`, `singleline`)
- [`react/jsx-equals-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md): `error`
- [`react/jsx-filename-extension`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md): `warn` (`.js`, `.jsx`, `.tsx`)
- [`react/jsx-first-prop-new-line`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md): `error`
- [`react/jsx-fragments`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md): `error` (`syntax` mode)
- [`react/jsx-indent`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md): `error` (2 spaces indentation)
- [`react/jsx-no-constructed-context-values`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md): `error`
- [`react/jsx-no-script-url`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md): `error` (also applies to `Link` component)
- [`react/jsx-no-target-blank`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md): `error`
- [`react/jsx-no-useless-fragment`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md): `error`
- [`react/jsx-one-expression-per-line`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md): `error` (allows single child)
- [`react/jsx-props-no-multi-spaces`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md): `error`
- [`react/jsx-tag-spacing`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md): `error` (`beforeSelfClosing` only `always` Everything else `never`)
- [`react/jsx-wrap-multilines`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md): `error` (all properties are set to `parens-new-line`)
- [`react/no-invalid-html-attribute`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md): `error`
- [`react/no-namespace`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md): `error`
- [`react/no-this-in-sfc`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md): `error`
- [`react/no-unstable-nested-components`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md): `error`
- [`react/no-unused-prop-types`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md): `error`
- [`react/prop-types`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md): `off` (almost all projects use the TypeScript)
- [`react/require-default-props`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md) `off` (same as above)
- [`react/self-closing-comp`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md): `error`
- [`react/style-prop-object`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md): `error`
- [`react/void-dom-elements-no-children`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md): `error`

`react-hooks`

- `react-hooks/rules-of-hooks`: `error`
- `react-hooks/exhaustive-deps`: `warn`

`jsx-a11y`

- [`jsx-a11y/anchor-has-content`](https://github.com/infofarmer/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md): `error` (include `Link` component)
- [`jsx-a11y/aria-role`](https://github.com/infofarmer/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md): `error` (apply non-DOM)
- [`jsx-a11y/control-has-associated-label`](https://github.com/infofarmer/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md): `error` (override `depth` to 5)
- [`jsx-a11y/label-has-associated-control`](https://github.com/infofarmer/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md): `error`
  - add `Label` component to `labelComponents` option
  - add `Input` component to `controlComponents` option
  - set `assert` to `either`
  - set `depth` to the maximum value(25)
- [`jsx-a11y/no-autofocus`](https://github.com/infofarmer/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md): `error` (apply non-DOM)

`@typescript-eslint`

- [`@typescript-eslint/no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string/): `error` (ignore from `Error`, `RegExp`, `URL`, `URLSearchParams`, `ReactNode`, `ArrayBuffer`)
- [`@typescript-eslint/no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression/): `error` (ignore "shorthand" arrow functions)
- [`@typescript-eslint/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type/): `error` (allow interfaces with single extends)
- [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises/): `error` (ignore `void` expressions and IIFEs)
- [`@typescript-eslint/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises/): `error` (ignore when a Promise is returned from a function typed as returning `void`)
- [`@typescript-eslint/no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars/): `error`
  - ignore arguments pattern: `/^_/`
  - ignore variables pattern: `/^_/`
  - ignore rest siblings
- [`@typescript-eslint/prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors/): `error` (allow throwing values typed as `unknown`)
- [`@typescript-eslint/restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions/): `error` (allow number )
- [`@typescript-eslint/unbound-method`](https://typescript-eslint.io/rules/unbound-method/): `error` (ignore static)
