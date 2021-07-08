module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue',
      './assets/**/*.svg',
      './assets/**/*.css'
    ]
  },
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
