import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppWrapper } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  title: 'Nextjs14',
  description: 'Generated by create next app and shows how to develop a new app using Nextjs 14',
  openGraph: {
    title: 'Nextjs14',
    description: 'Generated by create next app and shows how to develop a new app using Nextjs 14',
    url: 'https://nextjs14.vercel.app/',
    images: [
      {
        url: '/docker-logo.png',
        width: 800,
        height: 600,
        alt: 'Generated by create next app',
        // type: 'image/png',
        // secureUrl: 'https://nextjs14.vercel.app/og-image.jpg'
      }
    ],
    siteName: 'Nextjs14',
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
