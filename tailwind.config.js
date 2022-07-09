/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm-mobile': '320px',
      // => @media (min-width: 640px) { ... }

      'md-mobile': '390px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'purple': '#735BF2',
        'gray' : '#F5F5F5',
        'gray-black': '#8F9BB3',
        'gray-light': '#EDF1F7'
      }
    },
  },
  plugins: [],
}
