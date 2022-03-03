export default {
  target: process.env.TARGET || 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'site',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    scss: ['~assets/sass/partials/_variables.scss'],
  },

  // Google Fonts
  googleFonts: {
    families: {
      Poppins: {
        wght: [300, 400, 500, 600, 700],
        ital: [300, 400, 500, 600, 700],
      },
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    subsets: ['latin-ext', ''],
  },

  router: {
    middleware: ['redirects'],

    scrollBehavior(to) {
      if (to.hash) {
        const element = document.querySelector(to.hash)
        if (element)
          return window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
          })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/getMeta.js',
    '~/plugins/getStructuredData.js',
    '~/plugins/getUrlFromCms.js',
    '~/plugins/getComponentFromCms.js',
    '~/plugins/richTextImageUrls.js',
    '~/plugins/getImageUrlFromCms.js',
    '~/plugins/isEmailValid.js',
    '~/plugins/axios.js',
    '~/plugins/sendFormToBackend.js',
    '~/plugins/isExternalUrl.js',
    { src: '~/plugins/vuelidate.js', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~plugins/onAppReady', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [{ path: '~/components', global: true }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/gtm',
    '@nuxtjs/svg',
    // '@nuxtjs/style-resources',
  ],

  gtm: {
    id: 'GTM-PVCJNK9',
    enabled: process.env.NODE_ENV === 'production',
    debug: process.env.NODE_ENV === 'development',
    pageTracking: true,
    loadScript: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
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
    '@nuxtjs/markdownit',
    // always declare the sitemap module at end of the array
    '@nuxtjs/sitemap',
  ],

  sitemap: () => {
    return {
      hostname: 'https://site.com',
      gzip: true,
      exclude: ['/compatibility?page*'],
      i18n: {
        locales: ['en', 'fr', 'de'],
        routesNameSeparator: '___',
      },
    }
  },

  // For module nuxt/robots
  robots: () => {
    return {
      UserAgent: '*',
      Disallow: [
        '/404',
        '/*.rss',
        '/tag/',
        '/u/',
        '/v1/',
        '/compatibility?page=*',
        '/*?utm*',
      ],
    }
  },

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true, // Support `$md()`
    html: true,
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  i18n: {
    baseUrl: 'https://site.com',
    locales: [
      { code: 'en', iso: 'en' },
      { code: 'fr', iso: 'fr' },
      { code: 'de', iso: 'de' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: ['en', 'fr'],
    },
    seo: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    cache: true,
    hardSource: true,

    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },

  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  env: {
    CMS_URL: process.env.CMS_URL || 'https://strapi.site.com',
    API_ENDPOINT:
      process.env.API_ENDPOINT || 'https://console.site.com/api/website/',
  },
}
