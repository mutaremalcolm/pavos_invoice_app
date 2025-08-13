module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'revert',
        'perf',
        'nit',
        'housekeeping',
        'setup'
      ],
    ],
    'scope-enum': [
      2,
      'always',
      ['yourscope1', 'yourscope2', 'yourscope3'], // Customize your allowed scopes here
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};