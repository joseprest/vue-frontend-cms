export default ({ app }, inject) => {
  inject('getComponentFromCms', (...parameters) => {
    const cmsComponent = parameters[0]
    switch (cmsComponent) {
      case 'footer.links':
        return 'footer-list'

      default:
        return cmsComponent
          .replace('.', '-')
          .replace('index-components', 'index')
    }
  })
}
