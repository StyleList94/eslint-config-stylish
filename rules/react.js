// @ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export default {
  'react/boolean-prop-naming': [
    'off',
    {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    },
  ],
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],
  'react/destructuring-assignment': ['error', 'always'],
  'react/display-name': 'off',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: ['arrow-function', 'function-declaration'],
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'consistent',
      singleline: 'consistent',
    },
  ],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': [
    'warn',
    {
      extensions: ['.js', '.jsx', '.tsx'],
    },
  ],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-indent': ['error', 2],
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to', 'href'],
      },
    ],
  ],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    },
  ],
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'react/no-invalid-html-attribute': 'error',
  'react/no-namespace': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/self-closing-comp': 'error',
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
};
