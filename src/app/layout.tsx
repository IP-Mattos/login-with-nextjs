import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auth NextJs 13',
  description: 'Login con NextJS 13'
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='min-h-screen flex flex-col items-center justify-center'>{children}</main>
      </body>
    </html>
  )
}
