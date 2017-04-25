module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true
  },

  plugins: ['vue'],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  parser: 'babel-eslint',

  rules: {
      'indent': [2, 4, { 'SwitchCase': 1 }],
      'func-names': [2, 'never'],
      'arrow-parens': [2, 'as-needed'],
      'arrow-body-style': [0, 'as-needed'],
      'no-useless-escape': [0],
      'no-useless-computed-key': [0]
  }
}