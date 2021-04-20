export default ({ app }, inject) => {
  /**
   * Get URL from passed object. If multiple parameters are informed, it will get the object from first value (by optional chaining)
   * ex: getUrlFromCms(data) -> data
   * ex: getUrlFromCms(data, 'header', 'url') -> data?.header?.url || undefined
   */
  inject('getUrlFromCms', (...parameters) => {
    const [source, ...properties] = parameters
    if (!properties || properties.length === 0) {
      return `${process.env.CMS_URL}${source}`
    }

    const finalSource = properties.reduce(
      (object, property) => object?.[property] ?? undefined,
      source
    )
    return `${process.env.CMS_URL}${finalSource}`
  })
}
