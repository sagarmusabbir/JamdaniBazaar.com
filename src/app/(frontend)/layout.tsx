import React from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/global.css'
import { SystemThemeScript } from '@/utils/SystemThemeScript'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
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
    <html lang="en">
      <head>
        <SystemThemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
