import axios from 'axios'

export default {
  target: 'static',

  server: {
    host: '0' // default: localhost
  },

  head: {
    title: 'Get linked and start journaling 📚',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ff005c' },
      { name: 'theme-color', content: '#ff005c'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Get linked and start journaling 📚'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Daily journaling, without distraction! An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://uselinked.com/images/logo.png',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://uselinked.com/images/logo.png',
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@uselinked',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'Daily journaling, without distraction! An easy, distraction-free way to record your thoughts, declutter your mind and keep the things you want to remember.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', color: '#ff005c', href: '/safari-pinned-tab.svg' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },

  generate: {
    routes() {
      return axios.get('https://api.github.com/repos/lostdesign/linked/releases?per_page=100').then(res => {
        return res.data.map(download=> {
          return '/download/' + download.name
        })
      })
    }
  },

  css: [
    '@/assets/css/common.css',
    '@/assets/css/strawford.css',
    '@/assets/css/scrollbar.css',
  ],

  plugins: [
    '~/plugins/custom-device-flags.js',
    '~/plugins/glide.js'
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/device',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/sitemap'
  ],

  device: {
    defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/i18n',
    // '@nuxt/image',
    '@lostdesign/nuxt-fathom'
  ],

  fathom: {
    spa: 'history',
    siteId: 'CGHPCEJF',
    includedDomains: [
      'localhost',
      'localhost:3000',
      'uselinked.com'
    ],
  },

  router: {
    middleware: ['fathom']
  },

  axios: {
    baseURL: '/',
  },

  content: {},

  build: {},

  sitemap: {
    hostname: 'https://uselinked.com',
    gzip: true,
  },

  i18n: {
    baseUrl: 'https://uselinked.com',
    vueI18nLoader: true,
    defaultLocale: 'en',
    locales: [
      {code: 'en', iso: 'en-US'},
      {code: 'de', iso: 'de-DE'},
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  }
}
