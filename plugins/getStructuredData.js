export default ({ app }, inject) => {
  /**
   * return structured data depending on the current page and locale
   */
  inject('getStructuredData', () => {
    const { i18n } = app.context
    let url = 'https://www.site.com'
    if (i18n.locale !== 'en') url = `${url}/${i18n.locale}`

    const data = {
      '@context': 'http://schema.org/',
      '@type': 'Organization',
      name: 'Wattsense',
      url,
      logo: 'https://www.site.com/site-logo.png',
      telephone: '+33 4 28 29 83 49',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33 4 28 29 83 49',
          contactType: 'customer service',
          email: 'contact@site.com',
          availableLanguage: ['French', 'English'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/siteAPI',
        'https://www.linkedin.com/company/site',
        'https://twitter.com/site',
      ],
    }
    return data
  })
}
