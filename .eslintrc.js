module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    'require-jsdoc': 0,
    'prettier/prettier': 'error',
    'no-invalid-this': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': 'error',
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/named': 2,
    'import/default': 2,
    'import/export': 2,
    'import/order': [
      2,
      {
        groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
