const site = {
  url: 'https://arcana.network',
  title: 'The Storage and Privacy Stack for Ethereum dApps — Arcana Network',
  description:
    'The decentralized storage layer for Ethereum. A privacy stack for apps on EVM compatible chains. Identity, Authentication, Access Control, KMS, and Storage.',
  image: 'https://arcana.network/cover-image.jpeg',
  keywords: ['decentralised storage', 'ethereum'].join(', '),
}

export default {
  target: 'static',

  env: process.env,

  head: {
    title: 'Arcana Network',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },

      // Primary meta tags
      { hid: 'title', name: 'title', content: site.title },
      { hid: 'description', name: 'description', content: site.description },
      { hid: 'keywords', name: 'keywords', content: site.keywords },

      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: site.url },
      { hid: 'og:title', property: 'og:title', content: site.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: site.description,
      },
      { hid: 'og:image', property: 'og:image', content: site.image },

      // Twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:url', property: 'twitter:url', content: site.url },
      { hid: 'twitter:title', property: 'twitter:title', content: site.title },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: site.description,
      },
      { hid: 'twitter:image', property: 'twitter:image', content: site.image },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
    script: (() => {
      const tags = []

      if (process.env.BTW_SO_ENABLED === 'true') {
        tags.push({
          hid: 'btw-widget', async: true, defer: true, id: 'btw-widget',
          'data-project-code': process.env.BTW_SO_PROJECT_CODE,
          'data-iframe-domain': 'https://app.btw.so',
          'data-conversations-domain': 'https://conversations.btw.so',
          'data-events-domain': 'https://events.btw.so',
          'data-events-secret': process.env.BTW_SO_EVENTS_SECRET,
          src: 'https://conversations.btw.so/widget/dist/btw.js'
        })
      }

      return tags
    })()
  },

  css: ['~/assets/css/normalize.css', '~/assets/css/styles.css'],

  plugins: [],

  components: ['~/components', '~/components/lib'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content', '@nuxtjs/gtm'],

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID,
    enabled: process.env.NODE_ENV === 'production',
    debug: process.env.NODE_ENV === 'development',
    pageTracking: true,
    pageViewEventName: 'page-view',
  },

  axios: {},

  content: {},

  build: {
    postcss: {
      order: 'presetEnvAndCssnanoLast',
      preset: {
        stage: 0,
      },
      plugins: {
        'postcss-import': true,
        'postcss-url': true,
        'postcss-preset-env': {
          stage: 0,
        },
        cssnano: { preset: 'default' },
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: [500, 600, 700],
      Sora: [300, 400, 600, 700],
    },
    display: 'block',
    prefetch: true,
    preconnect: true,
    preload: true,
  },
}
