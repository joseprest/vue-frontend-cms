export default ({ app }, inject) => {
  /**
   * Get meta tags from the params received from Strapi CMS.
   * @param {object} parameters data received from Strapi: Page meta component
   */
  inject('getMeta', (params) => {
    const { i18n } = app.context
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
        content: '@site',
      },
      {
        property: 'twitter:creator',
        content: '@site',
      },
      {
        property: 'og:locale',
        content: i18n.localeProperties.iso,
      },
    ]
    i18n.locales.forEach((locale) => {
      if (locale.iso !== i18n.localeProperties.iso)
        meta.push({
          property: 'og:locale:alternate',
          content: locale.iso,
        })
    })
    if (params.og_image) {
      meta.push({
        property: 'og:image',
        content: params.og_image.url,
      })
    }

    return meta
  })
}
