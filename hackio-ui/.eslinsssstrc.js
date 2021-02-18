module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended'
  ],
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
