// @ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export default {
  'array-callback-return': ['error', { allowImplicit: true }],
  'block-scoped-var': 'error',
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [],
    },
  ],
  'consistent-return': [
    'error',
    {
      treatUndefinedAsUnspecified: false,
    },
  ],
  curly: ['error', 'multi', 'consistent'],
  'default-case': ['error', { commentPattern: '^skip default$' }],
  'default-case-last': 'error',
  'default-param-last': 'error',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'error',
  'max-classes-per-file': ['error', 1],
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-await-in-loop': 'error',
  'no-caller': 'error',
  'no-console': 'warn',
  'no-constructor-return': 'error',
  'no-div-regex': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-implied-eval': 'error',
  'no-inner-declarations': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-object-constructor': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsForRegex: [
        '^acc(?:umulator)?$',
        '^ctx$',
        '^context$',
        '^^req(?:uest)?$',
        '^res(?:ponse)?$',
        '^state$',
        '^staticContext$',
      ],
    },
  ],
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: ['default', 'then'],
    },
  ],
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      name: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
  ],
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
  ],
  'no-restricted-syntax': ['error', 'WithStatement', 'LabeledStatement'],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-shadow': 'error',
  'no-template-curly-in-string': 'error',
  'no-throw-literal': 'error',
  'no-undef-init': 'error',
  'no-unreachable-loop': [
    'error',
    {
      ignore: [],
    },
  ],
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
  'no-use-before-define': 'error',
  'no-useless-constructor': 'error',
  'no-var': 'error',
  'no-void': ['error', { allowAsStatement: true }],
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  radix: 'error',
  'symbol-description': 'error',
  'valid-typeof': ['error', { requireStringLiterals: true }],

  /* Stylistic */

  'arrow-body-style': 'error',
  camelcase: [
    'error',
    {
      properties: 'never',
      ignoreDestructuring: false,
      ignoreImports: true,
      ignoreGlobals: true,
      allow: ['^unstable_', '^experimental_'],
    },
  ],
  'dot-notation': 'error',
  'func-names': ['warn', 'as-needed', { generators: 'as-needed' }],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      properties: false,
    },
  ],
  'no-continue': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-multi-str': 'error',
  'no-nested-ternary': 'error',
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-rename': 'error',
  'no-useless-return': 'error',
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'prefer-arrow-callback': 'error',
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
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
  'prefer-exponentiation-operator': 'error',
  'prefer-numeric-literals': 'error',
  'prefer-object-spread': 'error',
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],
  'prefer-template': 'error',
  'unicode-bom': ['error', 'never'],
  'vars-on-top': 'error',
  yoda: 'error',
};
