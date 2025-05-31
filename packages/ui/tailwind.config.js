
/** @type {import('tailwindcss').Config} */
const theme = {
    extend: {},
  };
const plugins = [];

export {
    theme,
    plugins,
}

export default {
  content: [
    // Ensure this points to your source code
    './app/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    ...theme
  },
  plugins: [
    ...plugins,
  ],
};