import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <Container size='full' className="py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <Link href="/">COOL CLUB</Link>
              <Link href="/">BARISING</Link>
              <Link href="/">COOLXPRINT</Link>
            </div>
            <div className="flex gap-4">
              <Link href="/account">Thẻ thành viên</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/about">Về Coolmate</Link>
              <Link href="/support">CSKH</Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black shadow-sm sticky top-0 z-50">
        <Container size='full' className="py-4">
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

      {/* Banner Section */}
      <div className="relative h-[calc(100vh-140px)]">
        <Image
          src="/images/banner-bg.jpg"
          alt="Fall Winter Collection"
          fill
          priority
          className="object-cover object-center"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Banner Content */}
        <Container size='full' className="relative h-full">
          <div className="h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Fall Winter Collection 2024
              </h1>
              <p className="text-lg text-white mb-8">
                Khám phá bộ sưu tập mới nhất với những thiết kế độc đáo và chất liệu cao cấp
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Khám phá ngay
              </Button>
            </div>
          </div>
        </Container>

        {/* Navigation Arrows */}
        <Container size='full' className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-between">
            <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Image
                src="/images/arrow-left.png"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Image
                src="/images/arrow-right.png"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
