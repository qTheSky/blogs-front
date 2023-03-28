import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://blogs-nest-torm.vercel.app',
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  function (config) {
    // Get the token from localStorage
    const token = localStorage.getItem('token')

    // If the token exists, add it to the request headers
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  }
)
