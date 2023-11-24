import React, { useEffect } from 'react'

export function useRefreshToken() {
  //@ts-ignore

  const Token = async () => {
    const refreshResponse = await fetch('http://127.0.0.1:4000/api/v1/auth/refresh-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    const refreshData = await refreshResponse.json()

    return refreshData
  }

  return Token
}
