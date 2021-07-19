export default ({ app }, inject) => {
  inject('isExternalUrl', (url) => {
    if (!url) return false
    return /^https?:\/\/|^\/\//gi.test(url)
  })
}
