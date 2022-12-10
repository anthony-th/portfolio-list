/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    './src/**/*.{html,jsx,js}',
    './index.html',
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
}
