export default ({ app }, inject) => {
  /**
   * Get meta tags from the params received from Strapi CMS.
   * @param {object} parameters data received from Strapi: Page meta component
   */
  inject('getMeta', (_this, params) => {
    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: params.description,
      },
      {
        property: 'og:title',
        content: params.title,
      },
      {
        property: 'og:description',
        content: params.description,
      },
      {
        property: 'twitter:site',
        content: '@wattsense',
      },
      {
        property: 'twitter:creator',
        content: '@wattsense',
      },
      {
        property: 'og:locale',
        content: _this.$i18n.localeProperties.iso,
      },
    ]
    _this.$i18n.locales.forEach((locale) => {
      if (locale.iso !== _this.$i18n.localeProperties.iso)
        meta.push({
          property: 'og:locale:alternate',
          content: locale.iso,
        })
    })
    if (params.og_image) {
      meta.push({
        property: 'og:image',
        content: process.env.CMS_URL + params.og_image.url,
      })
    }

    return meta
  })
}
