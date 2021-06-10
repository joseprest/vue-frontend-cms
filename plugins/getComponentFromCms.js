export default ({ app }, inject) => {
  inject('getComponentFromCms', (...parameters) => {
    return parameters[0].replace('.', '-').trim()
  })
}
