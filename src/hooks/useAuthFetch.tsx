import axios, { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/router'

interface AuthFetchProps {
  endpoint: string
  redirectRoute: string
  formData: any
  options?: AxiosRequestConfig<any>
}

export function useAuthFetch() {
  const router = useRouter()

  const authRotuer = async ({ endpoint, redirectRoute, formData, options }: AuthFetchProps) => {
    try {
      const { data } = await axios.post(`/api/auth/${endpoint}`, formData, options)

      //Show Nitofication

      if (redirectRoute) router.push(redirectRoute)
    } catch (error) {
      console.log(error)
      //       showNotification({
      //         title: 'Error',
      //         message: error.message,
      //         color: 'red',
      //       })
    }
  }
  return authRotuer
}
