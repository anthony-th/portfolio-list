/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        yesteryear: ['Yesteryear', 'regular'],
        vasek: ['Vasek-Italic', 'regular'],
        roboto: ['Roboto-regular', 'regular'],
        raleway: ['Raleway-Regular', 'regular']
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
      },
      backgroundImage: {
        'homepage': "url('/images/bg.webp')",
      }
    },
  },
  plugins: [],
};
