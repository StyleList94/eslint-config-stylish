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
- `eslint-import-resolver-typescript`: v3 or later (if you use TypeScript)

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

- [`array-callback-return`](https://eslint.org/docs/latest/rules/array-callback-return): `error` (set `allowImplicit` to `true`)
- [`arrow-body-style`](https://eslint.org/docs/latest/rules/arrow-body-style): `error`
- [`block-scoped-var`](https://eslint.org/docs/latest/rules/block-scoped-var): `error`
- [`camelcase`](https://eslint.org/docs/latest/rules/camelcase): `error`
  - does not check property names, ES2015 imports, global variables
  - allows `unstable_` and `experimental_` prefixes
- [`class-methods-use-this`](https://eslint.org/docs/latest/rules/class-methods-use-this): `error`
- [`consistent-return`](https://eslint.org/docs/latest/rules/consistent-return): `error`
- [`curly`](https://eslint.org/docs/latest/rules/curly): `error` (`multi`, `consistent`)
- [`default-case`](https://eslint.org/docs/latest/rules/default-case): `error` (Ignore with _skip default_ comment)
- [`default-case-last`](https://eslint.org/docs/latest/rules/default-case-last): `error`
- [`default-param-last`](https://eslint.org/docs/latest/rules/default-param-last): `error`
- [`dot-notation`](https://eslint.org/docs/latest/rules/dot-notation): `error`
- [`eqeqeq`](https://eslint.org/docs/latest/rules/eqeqeq): `error`
  - always use `===` and `!==`
  - ignore `null`
- [`func-names`](https://eslint.org/docs/latest/rules/func-names): `warn` (as needed)
- [`grouped-accessor-pairs`](https://eslint.org/docs/latest/rules/grouped-accessor-pairs): `error`
- [`guard-for-in`](https://eslint.org/docs/latest/rules/guard-for-in): `error`
- [`max-classes-per-file`](https://eslint.org/docs/latest/rules/max-classes-per-file): `error` (1 class per file)
- [`new-cap`](https://eslint.org/docs/latest/rules/new-cap): `error`
  - allows uppercase-started functions to be called without new operators.
  - disables checks on object properties
- [`no-alert`](https://eslint.org/docs/latest/rules/no-alert): `warn`
- [`no-array-constructor`](https://eslint.org/docs/latest/rules/no-array-constructor): `error`
- [`no-await-in-loop`](https://eslint.org/docs/latest/rules/no-await-in-loop): `error`
- [`no-caller`](https://eslint.org/docs/latest/rules/no-caller): `error`
- [`no-console`](https://eslint.org/docs/latest/rules/no-console): `warn`
- [`no-constructor-return`](https://eslint.org/docs/latest/rules/no-constructor-return): `error`
- [`no-continue`](https://eslint.org/docs/latest/rules/no-continue): `error`
- [`no-div-regex`](https://eslint.org/docs/latest/rules/no-div-regex): `error`
- [`no-else-return`](https://eslint.org/docs/latest/rules/no-else-return): `error` (disallow `else if` blocks after a return too)
- [`no-empty-function`](https://eslint.org/docs/latest/rules/no-empty-function): `error` (allow `arrowFunctions`, `functions`, `methods`)
- [`no-eval`](https://eslint.org/docs/latest/rules/no-eval): `error`
- [`no-extend-native`](https://eslint.org/docs/latest/rules/no-extend-native): `error`
- [`no-extra-bind`](https://eslint.org/docs/latest/rules/no-extra-bind): `error`
- [`no-extra-label`](https://eslint.org/docs/latest/rules/no-extra-label): `error`
- [`no-implied-eval`](https://eslint.org/docs/latest/rules/no-implied-eval): `error`
- [`no-inner-declarations`](https://eslint.org/docs/latest/rules/no-inner-declarations): `error`
- [`no-iterator`](https://eslint.org/docs/latest/rules/no-iterator): `error`
- [`no-label-var`](https://eslint.org/docs/latest/rules/no-label-var): `error`
- [`no-labels`](https://eslint.org/docs/latest/rules/no-labels): `error`
- [`no-lone-blocks`](https://eslint.org/docs/latest/rules/no-lone-blocks): `error`
- [`no-lonely-if`](https://eslint.org/docs/latest/rules/no-lonely-if): `error`
- [`no-loop-func`](https://eslint.org/docs/latest/rules/no-loop-func): `error`
- [`no-multi-assign`](https://eslint.org/docs/latest/rules/no-multi-assign): `error`
- [`no-multi-str`](https://eslint.org/docs/latest/rules/no-multi-str): `error`
- [`no-nested-ternary`](https://eslint.org/docs/latest/rules/no-nested-ternary): `error`
- [`no-new`](https://eslint.org/docs/latest/rules/no-new): `error`
- [`no-new-func`](https://eslint.org/docs/latest/rules/no-new-func): `error`
- [`no-new-wrappers`](https://eslint.org/docs/latest/rules/no-new-wrappers): `error`
- [`no-object-constructor`](https://eslint.org/docs/latest/rules/no-object-constructor): `error`
- [`no-octal-escape`](https://eslint.org/docs/latest/rules/no-octal-escape): `error`
- [`no-param-reassign`](https://eslint.org/docs/latest/rules/no-param-reassign): `error` (ignore to reducer, contexts, request, response, state)
- [`no-plusplus`](https://eslint.org/docs/latest/rules/no-plusplus): `error` (allows in `for` loops)
- [`no-promise-executor-return`](https://eslint.org/docs/latest/rules/no-promise-executor-return): `error`
- [`no-proto`](https://eslint.org/docs/latest/rules/no-proto): `error`
- [`no-redeclare`](https://eslint.org/docs/latest/rules/no-redeclare): `error`
- [`no-restricted-exports`](https://eslint.org/docs/latest/rules/no-restricted-exports): `error` (disallow `default`, `then` exports)
- [`no-restricted-globals`](https://eslint.org/docs/latest/rules/no-restricted-globals): `error` (`isFinite`, `isNaN`)
- [`no-restricted-properties`](https://eslint.org/docs/latest/rules/no-restricted-properties): `error` (`isFinite`, `isNaN`, `__defineGetter__`, `__defineSetter__`)
- [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax): `error` (`WithStatement`, `LabeledStatement`)
- [`no-return-assign`](https://eslint.org/docs/latest/rules/no-return-assign): `error` (disallow all assignments)
- [`no-script-url`](https://eslint.org/docs/latest/rules/no-script-url): `error`
- [`no-self-compare`](https://eslint.org/docs/latest/rules/no-self-compare): `error`
- [`no-sequences`](https://eslint.org/docs/latest/rules/no-sequences): `error`
- [`no-shadow`](https://eslint.org/docs/latest/rules/no-shadow): `error`
- [`no-template-curly-in-string`](https://eslint.org/docs/latest/rules/no-template-curly-in-string): `error`
- [`no-throw-literal`](https://eslint.org/docs/latest/rules/no-throw-literal): `error`
- [`no-undef-init`](https://eslint.org/docs/latest/rules/no-undef-init): `error`
- [`no-unneeded-ternary`](https://eslint.org/docs/latest/rules/no-unneeded-ternary): `error` (disallows the conditional expression as a default assignment pattern too)
- [`no-unreachable-loop`](https://eslint.org/docs/latest/rules/no-unreachable-loop): `error`
- [`no-unused-expressions`](https://eslint.org/docs/latest/rules/no-unused-expressions): `error`
- [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels): `error`
- [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars): `error`
  - ignore after used arguments
  - ignore pattern: `/^_/`
  - ignore rest siblings
- [`no-use-before-define`](https://eslint.org/docs/latest/rules/no-use-before-define): `error`
- [`no-useless-computed-key`](https://eslint.org/docs/latest/rules/no-useless-computed-key): `error`
- [`no-useless-concat`](https://eslint.org/docs/latest/rules/no-useless-concat): `error`
- [`no-useless-constructor`](https://eslint.org/docs/latest/rules/no-useless-constructor): `error`
- [`no-useless-rename`](https://eslint.org/docs/latest/rules/no-useless-rename): `error`
- [`no-useless-return`](https://eslint.org/docs/latest/rules/no-useless-return): `error`
- [`no-var`](https://eslint.org/docs/latest/rules/no-var): `error`
- [`no-void`](https://eslint.org/docs/latest/rules/no-void): `error` (allows the void operator as a statement)
- [`object-shorthand`](https://eslint.org/docs/latest/rules/object-shorthand): `error` (ignore constructors, avoid quotes)
- [`one-var`](https://eslint.org/docs/latest/rules/one-var): `error` (requires multiple variable declarations per scope)
- [`operator-assignment`](https://eslint.org/docs/latest/rules/operator-assignment): `error`
- [`prefer-arrow-callback`](https://eslint.org/docs/latest/rules/prefer-arrow-callback): `error`
- [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const): `error` (ignore variables that are read between the declaration and the first assignment)
- [`prefer-destructuring`](https://eslint.org/docs/latest/rules/prefer-destructuring): `error`
  - `VariableDeclarator`: set `false` to array, `true` to object
  - `AssignmentExpression`: set `true` to array, `false` to object
  - set `true` to `enforceForRenamedProperties`
- [`prefer-exponentiation-operator`](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator): `error`
- [`prefer-numeric-literals`](https://eslint.org/docs/latest/rules/prefer-numeric-literals): `error`
- [`prefer-object-spread`](https://eslint.org/docs/latest/rules/prefer-object-spread): `error`
- [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors): `error` (allow empty reject)
- [`prefer-regex-literals`](https://eslint.org/docs/latest/rules/prefer-regex-literals): `error` (disallow redundant wrapping)
- [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params): `error`
- [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread): `error`
- [`prefer-template`](https://eslint.org/docs/latest/rules/prefer-template): `error`
- [`radix`](https://eslint.org/docs/latest/rules/radix): `error`
- [`symbol-description`](https://eslint.org/docs/latest/rules/symbol-description): `error`
- [`unicode-bom`](https://eslint.org/docs/latest/rules/unicode-bom): `error` (never)
- [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof): `error` (require string literals)
- [`vars-on-top`](https://eslint.org/docs/latest/rules/vars-on-top): `error`
- [`yoda`](https://eslint.org/docs/latest/rules/yoda): `error`

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

- [`@typescript-eslint/class-methods-use-this`](https://typescript-eslint.io/rules/class-methods-use-this/): `error` (extends `class-methods-use-this`)
- [`@typescript-eslint/consistent-return`](https://typescript-eslint.io/rules/consistent-return/): `error` (extends `consistent-return`)
- [`@typescript-eslint/default-param-last`](https://typescript-eslint.io/rules/default-param-last): `error` (extends `default-param-last`)
- [`@typescript-eslint/dot-notation`](https://typescript-eslint.io/rules/dot-notation): `error` (extends `dot-notation`)
- [`@typescript-eslint/no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string/): `error` (ignore from `Error`, `RegExp`, `URL`, `URLSearchParams`, `ReactNode`, `ArrayBuffer`)
- [`@typescript-eslint/no-confusing-void-expression`](https://typescript-eslint.io/rules/no-confusing-void-expression/): `error` (ignore "shorthand" arrow functions)
- [`@typescript-eslint/no-empty-function`](https://typescript-eslint.io/rules/no-empty-function): `error` (extends `no-empty-function`)
- [`@typescript-eslint/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type/): `error` (allow interfaces with single extends)
- [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises/): `error` (ignore `void` expressions and IIFEs)
- [`@typescript-eslint/no-loop-func`](https://typescript-eslint.io/rules/no-loop-func): `error` (extends `no-loop-func`)
- [`@typescript-eslint/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises/): `error` (ignore when a Promise is returned from a function typed as returning `void`)
- [`@typescript-eslint/no-shadow`](https://typescript-eslint.io/rules/no-shadow): `error` (extends `no-shadow`)
- [`@typescript-eslint/no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars/): `error` (extends `no-unused-vars`)
- [`@typescript-eslint/no-use-before-define`](https://typescript-eslint.io/rules/no-use-before-define): `error` (extends `no-use-before-define`)
- [`@typescript-eslint/no-useless-constructor`](https://typescript-eslint.io/rules/no-useless-constructor): `error` (extends `no-useless-constructor`)
- [`@typescript-eslint/only-throw-error`](https://typescript-eslint.io/rules/only-throw-error): `error` (extends `no-throw-literal`)
- [`@typescript-eslint/prefer-destructuring`](https://typescript-eslint.io/rules/prefer-destructuring): `error` (extends `prefer-destructuring`)
- [`@typescript-eslint/prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors/): `error` (allow throwing values typed as `unknown`)
- [`@typescript-eslint/require-await`](https://typescript-eslint.io/rules/require-await): `off`
- [`@typescript-eslint/restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions/): `error` (allow number)
- [`@typescript-eslint/unbound-method`](https://typescript-eslint.io/rules/unbound-method/): `error` (ignore static)
