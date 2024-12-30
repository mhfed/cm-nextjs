import { validateEnv } from '@/lib/config/env'
import type { Metadata } from 'next'
// import localFont from "next/font/local";
import { Toaster } from 'sonner'
import './globals.css'
import { pangea, criteriaCF } from '@/lib/utils/font'

// Sử dụng trong app/layout.tsx
if (process.env.NODE_ENV !== 'production') {
  validateEnv()
}

export const metadata: Metadata = {
  title: 'Coolmate - Thời trang nam',
  description: 'Coolmate - Nâng tầm trải nghiệm mua sắm thời trang nam',
  keywords: 'thời trang nam, coolmate, áo nam, quần nam',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://coolmate.me'
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://coolmate.me',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${pangea.variable} ${criteriaCF.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
