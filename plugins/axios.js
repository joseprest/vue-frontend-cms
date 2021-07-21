export default function ({ $axios, error: nuxtError }) {
  $axios.onError((error) => {
    // if error is comming from strapi, trigger nuxtError
    if (/strapi(\.s)?.wattsense.com/gi.test(error?.config?.url)) {
      return nuxtError({
        statusCode: error.response.status,
        message: error.message,
      })
    }

    // I've to add this because all errors form API were redirecting to 404 page
    return Promise.reject(error)
  })
}
