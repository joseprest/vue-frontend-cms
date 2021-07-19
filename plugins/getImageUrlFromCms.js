export default ({ app }, inject) => {
  /**
   * Get URL image from image object from Strapi CMS.
   * @param {object|array} imageObject Image object from Strapi. If it's an array, it will get first object
   * @param {string|null} size Size to be use (thumbnail, small, medium, large). Null means it will without format
   * @param {boolean} emptyImageIfSizeIsNull If informed size doesn't exist, return empty image
   */
  inject(
    'getImageUrlFromCms',
    (imageObject, size = null, emptyImageIfSizeIsNull = true) => {
      let image = imageObject
      if (Array.isArray(image)) {
        image = imageObject[0]
      }

      if (size) {
        if (Object.keys(image?.formats || {}).includes(size)) {
          image = image.formats[size]
        } else if (emptyImageIfSizeIsNull) {
          return require('@/assets/imgs/empty.gif')
        }
      }

      // if there's no image, return empty image
      if (image === undefined) return require('@/assets/imgs/empty.gif')

      const finalSource = image.url
      return finalSource?.substr(0, 5) === 'https'
        ? finalSource
        : `${process.env.CMS_URL}${finalSource}`
      // return `http://localhost:1337${finalSource}`
    }
  )
}
