import axios from 'axios'

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
