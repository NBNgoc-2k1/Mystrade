/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown: '#936464',
        'dark-grey': '#474747',
        teal: '#649393',
        white: '#FFFFFF',
        'light-silver': '#F5F5F5',
        'dark-silver': '#D9D9D9',
        'placeholder':'#979797'
      }
    },
  },
  plugins: [],
}