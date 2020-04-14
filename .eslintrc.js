module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsx-a11y',
  ],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', {prefixWithI: 'always'}],
    'react/prop-types': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'indent': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-indent': ['error', 2, {checkAttributes: true, indentLogicalExpressions: true}],
    'arrow-parens': ['error', 'as-needed'],

    // Project specific
    'no-param-reassign': 'off',
  },
};
