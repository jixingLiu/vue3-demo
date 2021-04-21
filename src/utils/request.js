import axios from 'axios'
import { message as Message } from 'ant-design-vue';
import { pickBy, identity } from 'lodash-es'


// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // todo 去除查询为空的数据
    if (config.method === 'get') {
      const params = config.params
      config.params = pickBy(config.params, identity)
      // RecursiveParameters(params)
    }
    if (config.method === 'post' || config.method === 'put' || config.method === 'patch') {
      const body = config.body
      config.body = pickBy(config.body, identity)
    }
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data || response.data
    if (response.status === 200 || response.status === 201 || response.status === 202 || response.status === 203 || response.status === 205) {
      return res
    }
  },
  error => {
    if (error && error.response) {
      const message = error.response.data.message
      console.log('error.response', error.response)
      console.log('message', message)

      const hasToken = getToken()

      switch (error.response.status) {
        case 401:
          if (hasToken) {
            setTimeout(() => {
              removeToken()
              location.reload()
            }, 4)
          }
          console.log('456123 :>> ', 456123)
          Message.error(message)
          break
        case 400:
        case 403:
        case 404:
        case 409:
        case 422:
          Message({
            message: message,
            type: 'error',
            duration: 5 * 1000
          })
          break
        case 500:
          Message({
            message: '服务器异常,请稍后重试',
            type: 'error',
            duration: 5 * 1000
          })
          break
      }
    } else {
      Message.error({
        message: '网络异常，请重试',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
