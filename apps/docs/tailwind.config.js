/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@repo/ui/tailwind.config.js');

module.exports = {
  ...sharedConfig,
    content: [
      './stories/*.{js,ts,jsx,tsx,mdx}', 
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
