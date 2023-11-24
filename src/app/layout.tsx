import { NotificationProvider } from '@/context/NotificationContext'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

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
        <NotificationProvider>
          <main className='min-h-screen '>
            <div className='p-4 top-0 font-bold text-2xl'>M {'>'} Materio</div>

            {children}
          </main>
        </NotificationProvider>
      </body>
    </html>
  )
}
