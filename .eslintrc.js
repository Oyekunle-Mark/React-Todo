module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'comma-dangle': 0,
    'quotes': 0,
    'arrow-parens': 0,
    'react/prefer-stateless-function': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0
  },
};
