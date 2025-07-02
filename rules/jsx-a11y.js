// @ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export default {
  'jsx-a11y/anchor-has-content': ['error', { components: ['Link'] }],
  'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
  'jsx-a11y/control-has-associated-label': [
    'error',
    {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      depth: 5,
    },
  ],
  'jsx-a11y/label-has-associated-control': [
    'error',
    {
      labelComponents: ['Label'],
      labelAttributes: [],
      controlComponents: ['Input'],
      assert: 'either',
      depth: 25,
    },
  ],
  'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
};
