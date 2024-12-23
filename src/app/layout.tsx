import { validateEnv } from '@/lib/env';
import type { Metadata } from 'next';
// import localFont from "next/font/local";
import { Toaster } from 'sonner';
import './globals.css';

// Sử dụng trong app/layout.tsx
if (process.env.NODE_ENV !== 'production') {
  validateEnv();
}

// const geistSans = localFont({
//   src: "../assets/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../assets/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
