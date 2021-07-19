export default function ({ $axios, error: nuxtError }) {
  $axios.onError((error) => {
    // I've to add this because all errors form API were redirecting to 404 page
    return Promise.reject(error)
  })
}
