const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.vue'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'linked': {
          DEFAULT: '#FF005C',
          '50': '#FFB8D1',
          '100': '#FFA3C4',
          '200': '#FF7AAA',
          '300': '#FF5290',
          '400': '#FF2976',
          '500': '#FF005C',
          '600': '#C70048',
          '700': '#8F0034',
          '800': '#57001F',
          '900': '#1F000B'
        },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
