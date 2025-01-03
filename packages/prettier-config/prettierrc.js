/** @type {import("prettier").Config} */
module.exports = {
    plugins: ['prettier-plugin-tailwindcss'],
    parser: 'typescript',
    printWidth: 80,
    endOfLine: 'lf',
    trailingComma: 'es5',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    singleAttributePerLine: true,
    bracketSpacing: true,
    bracketSameLine: false,
    overrides: [
      {
        files: '*.md',
        options: {
          parser: 'markdown',
          proseWrap: 'always',
        },
      },
    ],
  }