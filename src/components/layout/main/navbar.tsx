import { Container } from "@/components/ui/container"
import { MainNav } from "@components/layout/main/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "./search-bar"
import { UserMenu } from "./user-menu"

export function Navbar() {
  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      <Container size="full">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://www.coolmate.me/images/logo-coolmate-new.svg"
              alt="Coolmate"
              width={70}
              height={50}
              priority
            />
          </Link>

          <MainNav />
          
          <div className="flex items-center gap-4">
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </Container>
    </nav>
  )
} 