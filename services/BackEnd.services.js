import axios from 'axios'

const CURRENCY_API = process.env.CURRENCY_API
const CURRENCY_KEY = process.env.CURRENCY_API_KEY
const CONSOLE_API = process.env.CONSOLE_API

export default {
  /**
   * Check if e-mail is valid
   * @param  {[type]}  email [description]
   * @return {Boolean}       [description]
   */
  isEmailValid(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email !== null && emailRegex.test(email)
  },

  /**
   * Get current visitor's IP data - language, currency, etc.
   * Cache the data in localStorage.ipdata
   * @returns {Promise}
   */
  getIPData() {
    return new Promise((resolve, reject) => {
      const localStorageIPData = localStorage.getItem('ipdata')
      if (localStorageIPData != null)
        return resolve(JSON.parse(localStorageIPData))

      axios
        .get(`${CURRENCY_API}?api-key=${CURRENCY_KEY}`)
        .then((resp) => {
          localStorage.setItem('ipdata', JSON.stringify(resp.data))
          resolve(resp.data)
        })
        .catch((err) => reject(err.response))
    })
  },

  equipmentChecker({ term = null, protocols = null, page = null }) {
    return new Promise((resolve, reject) => {
      const params = removeNullableObjects({ term, page, protocols })
      axios
        .get(`${process.env.API_ENDPOINT}equipmentChecker`, { params })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Request equipment for compatibility
   * @param  {string} email
   * @param  {string} info
   * @return {Promise}
   */
  requestEquipment(email, info) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      if (!info) {
        reject(new Error('Device model is not specified'))
        throw new Error('Device model is not specified')
      }

      axios
        .post(`${CONSOLE_API}/requestEquipment`, {
          user: email,
          info,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}

function removeNullableObjects(object) {
  const obj = { ...object }
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
  return obj
}
