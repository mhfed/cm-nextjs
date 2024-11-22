import { Button } from '@components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Link href="/">COOL CLUB</Link>
            <Link href="/">BARISING</Link>
            <Link href="/">COOLXPRINT</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/">Thẻ thành viên</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Về Coolmate</Link>
            <Link href="/">CSKH</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-black shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
              <Link href="/" className="text-red-600 font-medium">
                OUTLET -50%
              </Link>
              <Link href="/" className="text-white hover:text-gray-600">SẢN PHẨM</Link>
              <Link href="/" className="text-white hover:text-gray-600">ĐỒ LÓT</Link>
              <Link href="/" className="text-white hover:text-gray-600">ĐỒ THỂ THAO</Link>
              <Link href="/" className="text-white hover:text-gray-600">MẶC HÀNG NGÀY</Link>
              <Link href="/" className="text-white hover:text-gray-600">SẢN XUẤT RIÊNG</Link>
              <Link href="/" className="text-white hover:text-gray-600">CARE & SHARE</Link>
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
              <Link href="/account">
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
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative h-[calc(100vh-140px)]">
        {/* Background Image */}
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
        <div className="relative h-full flex items-center px-8 md:px-20">
          <div className="max-w-2xl">
            <Image src="https://media3.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2024/Hero_Banner_-_Desktop_SL_SSS.jpg" alt="Banner Content" fill priority className="object-cover object-center"/>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between">
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
      </div>
      <Button>Click me</Button>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}
