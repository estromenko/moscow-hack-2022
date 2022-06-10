module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/strict',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/indent': 'off',
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent': 'off',
    'react/display-name': ['warn', { ignoreTranspilerName: true }],
    'react/default-props-match-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'error',
    'react/no-set-state': 'off',
    'react/button-has-type': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'no-undef-init': 'off',
    'no-undef': 'off',
    'no-empty': 'off',
    'no-alert': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-confusing-arrow': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'prefer-arrow-callback': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'indent': 'off',
    'max-len': ['error', { code: 120, ignorePattern: 'className=".*"' }],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'eqeqeq': ['error', 'always'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true, endOfLine: 'off' }],
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'quotes': ['error', 'single', { allowTemplateLiterals: true }],
      },
    },
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.test.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/*.spec.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
