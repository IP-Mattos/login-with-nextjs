import NotificationContext from '@/context/NotificationContext'
import axios, { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { NextResponse, NextRequest } from 'next/server'

interface AuthFetchProps {
  endpoint: string
  redirectRoute?: string
  formData?: any
  options?: AxiosRequestConfig<any>
}

export function useAuthFetch() {
  const { showNotification } = useContext(NotificationContext)
  const router = useRouter()

  const authRouter = async ({ endpoint, formData, redirectRoute, options }: AuthFetchProps) => {
    try {
      const response: any = await axios.post(`http://localhost:4000/api/v1/auth/${endpoint}`, formData)
      const refreshToken = response.headers.get('refreshtoken')
      console.log(refreshToken)
      showNotification({
        msj: response.data.message,
        open: true,
        status: 'success'
      })
      console.log(NextRequest)
      if (redirectRoute) router.push(redirectRoute)
    } catch (error: any) {
      showNotification({
        msj: error.response.data.message as string,
        open: true,
        status: 'error'
      })
      console.log(error)
    }
  }

  return authRouter
}
