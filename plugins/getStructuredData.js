export default ({ app }, inject) => {
  /**
   * return structured data depending on the current page and locale
   */
  inject('getStructuredData', () => {
    const { i18n } = app.context
    let url = 'https://www.wattsense.com'
    if (i18n.locale !== 'en') url = `${url}/${i18n.locale}`

    const data = {
      '@context': 'http://schema.org/',
      '@type': 'Organization',
      name: 'Wattsense',
      url,
      logo: 'https://www.wattsense.com/wattsense-logo.png',
      telephone: '+33 4 28 29 83 49',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+33 4 28 29 83 49',
          contactType: 'customer service',
          email: 'contact@wattsense.com',
          availableLanguage: ['French', 'English'],
        },
      ],
      sameAs: [
        'https://www.facebook.com/wattsenseAPI',
        'https://www.linkedin.com/company/wattsense',
        'https://twitter.com/wattsense',
      ],
    }
    return data
  })
}
