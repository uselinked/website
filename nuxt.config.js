import axios from 'axios'

const create = async (feed, args) => {
  const [ feedType, source, language, title, description ] = args;
  const { $content } = require('@nuxt/content')
  const posts = await $content(`${source}/${language}`).sortBy('date', 'desc').fetch()

  feed.options = {
    title,
    description,
    link: `https://uselinked.com/${source}-${language}.${feedType}`,
  }

  posts.forEach(post => {
    feed.addItem({
      title: post.title,
      link: `https://uselinked.com/${source}/${post.slug}`,
      id: `https://uselinked.com/${source}/${post.slug}`,
      description: post.description,
      content: post.bodyPlainText,
      published: new Date(post.createdAt),
      author: [
        {
          name: 'Andre Weller',
          email: 'social@uselinked.com',
        },
      ],
    })
  })

  return feed
}

export default {
  target: 'static',

  server: {
    host: '0' // default: localhost
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ff005c' },
      { name: 'theme-color', content: '#ff005c'},
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@uselinked',
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@uselinked',
      },
      {
        hid: 'og:email',
        property: 'og:email',
        content: 'social@uselinked.com',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'uselinked',
      }
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

  privateRuntimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },

  generate: {
    routes() {
      return axios({
        method: 'GET',
        url: 'https://api.github.com/repos/lostdesign/linked/releases?per_page=100',
        headers: {
          Authorization: 'Bearer ' + process.env.GITHUB_TOKEN
        }
      })
        .then(res => {
          return res.data.map(download=> {
            return '/download/' + download.name
          })
        }
      )
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
    '@nuxtjs/feed',
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
  },

  feed: [
    // data: [ feedType, source, language, title, description ];
    {
      path: '/articles-en.xml',
      type: 'rss2',
      create,
      cacheTime: 1000 * 60 * 15,
      data: ['xml', 'articles', 'en', 'linkeds articles', 'Everything about the development and news of linked.']
    },
    {
      path: '/articles-de.xml',
      type: 'rss2',
      create,
      cacheTime: 1000 * 60 * 15,
      data: ['xml', 'articles', 'de', 'linkeds Artikel', 'Alles über die Entwicklung und Neuigkeiten von linked.']
    },
    {
      path: '/articles-en.json',
      type: 'json1',
      create,
      cacheTime: 1000 * 60 * 15,
      data: ['json', 'articles', 'en', 'linkeds articles', 'Everything about the development and news of linked.']
    },
    {
      path: '/articles-en.json',
      type: 'json1',
      create,
      cacheTime: 1000 * 60 * 15,
      data: ['json', 'articles', 'de', 'linkeds Artikel', 'Alles über die Entwicklung und Neuigkeiten von linked.']
    }
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { time, words, minutes } = require('reading-time')(document.text)

        document.readingTime = time
        document.readingWords = words
        document.readingMinutes = minutes
        document.bodyPlainText = document.text
      }
    }
  }
}
