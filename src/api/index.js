/**
 * API Wrapper
 *
 * This API wrapper was implemented to allow the axios instance to be
 * re-used across sub wrappers and any future API calls that may be added.
 *
 * The wrapper is designed to call a callback function (defined under the
 * data Object as the `success` or `fail` keys) with the result of the API
 * call. If an API call fails the details are always printed to the console.
 */

import axios from 'axios'

/**
 * Main API call function.
 *
 * @param String method The HTTP method to use (ie: GET, POST, DELETE, PUT)
 * @param String url The web URL to call (no base path defined)
 * @param Object data Data to send to the API along with success/fail callbacks
 */
async function API (method, url, data) {
  // Create axios instance
  let instance = axios.create({})

  // API interceptor before connecting to API
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })

  // API interceptor after connecting to API
  instance.interceptors.response.use(
    async response => {
      if (typeof data.success === 'function') {
        await data.success(response) // Call success callback
      }
      return { error: false, data: response.data || null }
    },
    async e => {
      const errors = (e.response && e.response.data !== undefined && e.response.data.errors !== undefined) ? e.response.data.errors : null
      const status = (e.response && e.response.status !== undefined) ? e.response.status : null

      console.error(`%c💥 API ERROR (${new Date().toLocaleString()}) 💥', 'font-weight:bold`)
      console.error(errors)

      if (typeof data.fail === 'function') {
        await data.fail(errors) // Call fail callback
      }
      return { error: true, data: errors, status: status }
    }
  )

  await instance({
    timeout: 10000,
    method: method,
    url: url,
    data: data.data
  })
}

export default API
