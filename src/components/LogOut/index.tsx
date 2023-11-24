'use client'

import { useAuthFetch } from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'
import { SubmitButton } from '../form/components/SubmitButton'

const LogoutButton = () => {
  const { isLoading, startLoading, finishLoading } = useLoading()
  const authFetch = useAuthFetch()

  const handleLogout = async () => {
    startLoading()
    await authFetch({
      endpoint: 'logout',
      redirectRoute: '/'
    })
    finishLoading()
  }

  return (
    <div onClick={handleLogout}>
      <SubmitButton buttonText='Log Out' isLoading={isLoading} />
    </div>
  )
}

export default LogoutButton
