export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'uselinked',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css',
    '~/assets/css/editor.css',
    '~/assets/fonts/inter/inter.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Router config
  router: {
    middleware: ['fathom']
  },

  // Script tags
  script: [
    // Fathom Analytics
    {
      src: 'https://cdn.usefathom.com/script.js',
      'data-site': 'CGHPCEJF',
      defer: true
    }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-svg-loader',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en-US.js'
          },
          {
            code: 'de',
            file: 'de-DE.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
