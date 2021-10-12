export default {
  target: 'static',

  head: {
    title: 'Arcana Network',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
  },

  css: ['~/assets/css/normalize.css', '~/assets/css/styles.css'],

  plugins: [],

  components: ['~/components', '~/components/lib'],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
  ],

  modules: ['@nuxtjs/axios', '@nuxt/content'],

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
