export default function ({ $axios, error: nuxtError }) {
  $axios.onError((error) => {
    // if error is comming from strapi, trigger nuxtError
    if (/strapi(\.s)?.site.com/gi.test(error?.config?.url)) {
      return nuxtError({
        statusCode: error.response.status,
        message: error.message,
      })
    }

    // if it's an error from somewhere else, simply return as rejected
    return Promise.reject(error)
  })
}
