'use client'
import { Form } from '@/components/form'
import { useAuthFetch } from '@/hooks/useAuthFetch'
import { useLoading } from '@/hooks/useLoading'
import { useRefreshToken } from '@/hooks/useRefreshToken'

export default function LoginPage() {
  const { isLoading, startLoading, finishLoading } = useLoading()
  const authFetch = useAuthFetch()

  const login = async (formData: any) => {
    startLoading()
    await authFetch({
      endpoint: 'login',
      redirectRoute: '/home',
      formData
    })

    finishLoading()
  }
  return (
    <div className='m-[10%] flex flex-col items-center justify-center'>
      <Form
        onSubmit={login}
        title='Welcome to Materio! 👋'
        description={'Please sign-in to your account and start the adventure'}
      >
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input label='Email' name='email' type='text' />
          <Form.Input label='Password' name='password' type='password' icon={true} />
        </div>
        <Form.SubmitButton buttonText='Login' isLoading={isLoading} />
        <Form.Footer description='Forgot your password?' textLink='Recover password' link='/forget_password' />
        <Form.Footer description='Create Account' textLink='Sign In' link='/register' />
      </Form>
    </div>
  )
}
