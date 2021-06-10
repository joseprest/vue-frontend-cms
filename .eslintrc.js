module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'import/extensions': [2, 'always'],
    'vue/no-v-html': [0],
    // 'max-len': [1, 80, { ignoreComments: true, ignoreUrls: true }],
  },
}
