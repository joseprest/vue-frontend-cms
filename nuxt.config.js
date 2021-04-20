const langDir = 'lang'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website-nuxtjs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;1,600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: 'hooper/dist/hooper.css', lang: 'css' },
    { src: '~/assets/sass/app.scss', lang: 'sass' },
  ],
  /*
   ** So we can use our .scss file globally in the Nuxt app
   */
  styleResources: {
    scss: ['~assets/sass/app.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/getUrlFromCms.js',
    '~/plugins/getImageUrlFromCms.js',
    {
      src: '~/plugins/vue-scroll-reveal.js',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/markdownit',
    // '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', name: 'En', iso: 'en-US', file: 'en.js' },
          { code: 'fr', name: 'Fr', iso: 'fr-FR', file: 'fr.js' },
          { code: 'de', name: 'De', iso: 'de-DE', file: 'de.js' },
        ],
        langDir,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-lazy-load',
      { directiveOnly: true, defaultImage: '/imgs/empty.gif' },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },

  server: {
    port: 8080,
  },

  env: {
    CMS_URL: process.env.CMS_URL || 'http://localhost:1337',
  },
}
