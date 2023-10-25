'use client'
import { Form } from '@/components/form'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <>
      <Form onSubmit={() => {}} title='Login' description={'Login to page'}>
        <div className='my-[10px] flex flex-col gap-4'>
          <Form.Input label='Email' name='email' placeholder='Email...' type='text' />
          <Form.Input label='Password' name='password' placeholder='Password...' type='password' />
        </div>
        <Form.SubmitButton buttonText='Login' />
        <Form.Footer description='Forgot your password?' textLink='Recover password' link='/forget_password' />
        <Form.Footer description='Create Account' textLink='Sign In' link='/register' />
      </Form>
    </>
  )
}
