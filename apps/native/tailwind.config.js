import { theme, plugins } from '@repo/ui/tailwind';

module.exports = {
  content: [
    // Ensure this points to your source code
    './app/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      ...theme.extend
    },
  },
  plugins: [
    ...plugins
  ],
};