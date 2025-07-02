// @ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export default {
  'class-methods-use-this': 'off',
  'consistent-return': 'off',
  'default-param-last': 'off',
  'dot-notation': 'off',
  'no-empty-function': 'off',
  'no-loop-func': 'off',
  'no-redeclare': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'prefer-destructuring': 'off',
  '@typescript-eslint/class-methods-use-this': [
    'error',
    {
      ignoreOverrideMethods: true,
      ignoreClassesThatImplementAnInterface: true,
    },
  ],
  '@typescript-eslint/consistent-return': [
    'error',
    {
      treatUndefinedAsUnspecified: false,
    },
  ],
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': 'error',
  '@typescript-eslint/no-base-to-string': [
    'error',
    {
      ignoredTypeNames: [
        'Error',
        'RegExp',
        'URL',
        'URLSearchParams',
        'ReactNode',
        'ArrayBuffer',
      ],
    },
  ],
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: true,
    },
  ],
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
        'private-constructors',
        'protected-constructors',
        'decoratedFunctions',
        'overrideMethods',
      ],
    },
  ],
  '@typescript-eslint/no-empty-object-type': [
    'error',
    { allowInterfaces: 'with-single-extends' },
  ],
  '@typescript-eslint/no-floating-promises': [
    'error',
    { ignoreVoid: true, ignoreIIFE: true },
  ],
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false,
    },
  ],
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  '@typescript-eslint/prefer-promise-reject-errors': [
    'error',
    {
      allowThrowingUnknown: true,
      allowEmptyReject: true,
    },
  ],
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
    },
  ],
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
};
