module.exports = {
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketLine: false,
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  useTabs: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  quoteProps: 'consistent',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.{json,css,yml,md}',
      options: { singleQuote: false },
    },
  ],
};
