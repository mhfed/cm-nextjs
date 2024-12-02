import { Footer } from "@components/layout/main/footer"
import { Navbar } from "@components/layout/main/navbar"
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
} 