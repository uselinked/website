const defaultTheme = require('tailwindcss/defaultTheme')

console.log(...defaultTheme.fontFamily.sans)


module.exports = {
  content: ['./**/*.vue'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pink': '#D1014C',
        'bright-pink': '#FF005C',
        'secondary-black': '#222'
      },
      spacing: {
        '128': '32rem'
      }
    },
    fontFamily: {
      'sans': 'Strawford',
      'display': 'Strawford',
      'body': 'Strawford',
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
