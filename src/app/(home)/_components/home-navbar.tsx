import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"

export function HomeNavbar() {
  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      <Container size="full" className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://www.coolmate.me/images/logo-coolmate-new.svg"
              alt="Coolmate"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Main Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/outlet" className="text-red-600 font-medium">
              OUTLET -50%
            </Link>
            <Link href="/products" className="text-white hover:text-gray-300">SẢN PHẨM</Link>
            <Link href="/underwear" className="text-white hover:text-gray-300">ĐỒ LÓT</Link>
            <Link href="/sportswear" className="text-white hover:text-gray-300">ĐỒ THỂ THAO</Link>
            <Link href="/daily" className="text-white hover:text-gray-300">MẶC HÀNG NGÀY</Link>
            <Link href="/custom" className="text-white hover:text-gray-300">SẢN XUẤT RIÊNG</Link>
            <Link href="/care-share" className="text-white hover:text-gray-300">CARE & SHARE</Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Image
                src="/images/search-icon.png"
                alt="Search"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <Link href="/account/login">
              <Image
                src="/images/user-icon.png"
                alt="Account"
                width={24}
                height={24}
              />
            </Link>
            <Link href="/cart" className="relative">
              <Image
                src="/images/cart-icon.png"
                alt="Cart"
                width={24}
                height={24}
              />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  )
} 