import axios from 'axios'
import { getSession } from 'next-auth/react'

export function getAPIClient() {
  const api = axios.create({
    baseURL: `${String(process.env.API_URL)}`,
    validateStatus: () => true
  })

  api.interceptors.request.use(async (request) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const session: any = await getSession()

    if (session && session?.token) {
      request.headers.Authorization = `Bearer ${session.token}`
    }
    return request
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error?.response?.data?.message === 'Unauthorized') {
        const urlTo = '/auth/login?errorAuth=true'
        window.location.href = urlTo
        return
      }
    }
  )

  return api
}
