import React from 'react'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import '@/styles/global.css'
import { SystemThemeScript } from '@/utils/SystemThemeScript'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  description: 'Payload Blank Template with Tailwind CSS v4 and Next.js 15.4',
  title: 'Payload Tailwind v4 Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={`${outfit.variable} ${geistMono.variable}`}>
      <head>
        <SystemThemeScript />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
