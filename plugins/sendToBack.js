export default ({ app }, inject) => {
  inject('sendToBack', (formType, formData) => {
    // TODO: send received data to Strapi
    console.log(formType, formData)
  })
}
