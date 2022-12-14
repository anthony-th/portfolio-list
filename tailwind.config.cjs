/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './index.html',
    './src/**/*.{jsx, js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['Yesteryear', 'regular'],
        vasek: ['Vasek-Italic', 'regular']
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
  },
  plugins: [],
};
