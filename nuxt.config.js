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
    '~/plugins/getComponentFromCms.js',
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true, // recommended
        },
      },
    ],
    [
      'nuxt-lazy-load',
      { directiveOnly: true, defaultImage: '/imgs/empty.gif' },
    ],
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en' },
      { code: 'fr', iso: 'fr-FR' },
      { code: 'de', iso: 'de' },
    ],
    defaultLocale: 'en',
    paths: {
      en: '/resources/customer-stories/:slug',
      fr: '/ressources/experiences-client/:slug',
      de: '/ressourcen/kundengeschichten/:slug',
    },
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },

  server: {
    port: process.env.PORT || 8080,
  },

  env: {
    CMS_URL: process.env.CMS_URL || 'http://localhost:1337',
  },
}
