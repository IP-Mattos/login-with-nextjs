import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get('refreshToken')

    if (!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    const res = await fetch('http://localhost:4000/api/v1/auth/refresh-token', {
      method: 'POST',
      credentials: 'include'
    })

    const data = await res.json()
    console.log(data)
    if (!data.isAuthorized) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/home'
}
