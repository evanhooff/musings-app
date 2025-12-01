module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
       'serif': ['Glass Antiqua', 'Georgia'],
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      fontFamily: ['hover', 'focus'],
    }
  }
}