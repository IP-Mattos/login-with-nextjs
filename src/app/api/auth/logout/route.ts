import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('auth_cookie')

  return NextResponse.json(
    {
      message: 'Log Out Success'
    },
    {
      status: 200
    }
  )
}
