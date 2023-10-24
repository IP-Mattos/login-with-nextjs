'use client'
import { Form } from '@/components/form'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <>
      <Form onSubmit={() => {}} title='Login' description={''}>
        <Form.Input label='Label' name='name' placeholder='Name...' type='text' />
      </Form>
    </>
  )
}
