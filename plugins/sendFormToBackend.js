export default ({ app, $axios }, inject) => {
  inject('sendFormToBackend', async (endpoint, data) => {
    return await $axios
      .post(`${process.env.API_ENDPOINT}${endpoint}`, data)
      .then((res) => res.data)
      .catch((err) => {
        throw err.response
      })
  })
}
