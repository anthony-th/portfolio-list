/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx, js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['Yesteryear', 'regular'],
        vasek: ['Vasek-Italic', 'regular'],
        roboto: ['Roboto-regular', 'regular']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
      },
    },
  },
  plugins: [],
};
