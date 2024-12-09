import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
