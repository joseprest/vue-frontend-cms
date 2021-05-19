import axios from 'axios'

const SERVER = process.env.SERVER
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
   * Subscribe email to Communication Protocols
   * @param  {string} email
   * @return {Promise}
   */
  subscribeToCommunicationProtocols(email) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/subscribe`, {
          email,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Subscribe email to Newsletter
   * @param  {string} email
   * @return {Promise}
   */
  subscribeToNewsletter(email) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/newsletter`, {
          email,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Send request to sales
   * @param  {string} name
   * @param  {string} email
   * @param  {string} phone
   * @param  {string} company
   * @param  {string} selected_country
   * @param  {string} project
   * @param  {string} comments
   * @return {Promise}
   */
  sendRequestSales(
    name,
    email,
    phone,
    company,
    // eslint-disable-next-line camelcase
    selected_country,
    project,
    comments
  ) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/requestsales`, {
          name,
          email,
          phone,
          company,
          country: selected_country,
          project,
          comments,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Send request to prices
   * @param  {string} product
   * @param  {string} segment
   * @param  {string} name
   * @param  {string} email
   * @param  {string} phone
   * @param  {string} company
   * @param  {string} selected_country
   * @param  {string} comments
   * @return {Promise}
   */
  sendRequestPrices({
    product,
    segment,
    name,
    email,
    phone,
    company,
    // eslint-disable-next-line camelcase
    selected_country,
    comments,
  }) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/requestprices`, {
          product,
          segment,
          name,
          email,
          phone,
          company,
          country: selected_country,
          comments,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Send request to Hub
   * @param  {string} name
   * @param  {string} email
   * @param  {string} phone
   * @param  {string} company
   * @return {Promise}
   */
  sendRequestHub(name, email, phone, company) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/requesthub`, {
          name,
          email,
          phone,
          company,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Subscribe email to Newsletter
   * @param  {string} name
   * @param  {string} email
   * @param  {string} company
   * @param  {string} message
   * @return {Promise}
   */
  sendContactMessage(name, email, company, message) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${SERVER}/contact`, {
          name,
          email,
          company,
          message,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Send request to a demo
   * @param  {string} product
   * @param  {string} name
   * @param  {string} email
   * @param  {string} phone
   * @param  {string} company
   * @param  {string} lang
   * @return {Promise}
   */
  requestDemo({ product, name, email, phone = '', company = '', lang = 'en' }) {
    return new Promise((resolve, reject) => {
      if (!this.isEmailValid(email)) {
        reject(new Error('Invalid e-mail address'))
        throw new Error('Invalid e-mail address')
      }

      axios
        .post(`${SERVER}/requestdemo`, {
          product,
          name,
          email,
          phone,
          company,
          lang,
        })
        .then((resp) => {
          resolve(resp.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  /**
   * Send request be a partner
   * @param  {string} name
   * @param  {string} email
   * @param  {string} phone
   * @param  {string} company
   * @param  {string} lang
   * @return {Promise}
   */
  requestPartner({ name, email, phone = '', company = '', lang = 'en' }) {
    return axios
      .post(`${SERVER}/requestpartner`, {
        name,
        email,
        phone,
        company,
        lang,
      })
      .then((resp) => resp.data)
      .catch((err) => {
        throw err
      })
  },

  /**
   * Send request gateway feature
   * @param  {string} name
   * @param  {string} email
   * @param  {string} lang
   * @return {Promise}
   */
  requestGateway({ name, email, lang = 'en' }) {
    return axios
      .post(`${SERVER}/requestgateway`, {
        name,
        email,
        lang,
      })
      .then((resp) => resp.data)
      .catch((err) => {
        throw err
      })
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
        .get(`${CONSOLE_API}/equipmentChecker`, { params })
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
