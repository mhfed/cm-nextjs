import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ProductCarousel } from '@components/product-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { MainNav } from "@/components/navigation-menu"
import TopBar from '@components/top-bar';
import TopBarPromotion from '@components/top-bar-promotion';
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon, UserIcon, ShoppingCartIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <TopBarPromotion />
      {/* Main Navigation */}
      <nav className="bg-black shadow-sm sticky top-0 z-50">
        <Container size='full' className="">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://www.coolmate.me/images/logo-coolmate-new.svg"
                alt="Coolmate"
                width={70}
                height={50}
                priority
              />
            </Link>

            {/* Main Menu */}
            <MainNav />

            {/* Right Menu */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <Link href="/account/login">
                <UserIcon className="w-6 h-6 text-white" />
              </Link>
              <Link href="/cart" className="relative">
                <ShoppingCartIcon className="w-6 h-6 text-white" />
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
            <Button variant="outline" className="w-12 h-12 rounded-full flex items-center justify-center">
              <ArrowLeftIcon className="w-6 h-6" />
            </Button>
            <Button variant="outline" className="w-12 h-12 rounded-full flex items-center justify-center">
              <ArrowRightIcon className="w-6 h-6" />
            </Button>
          </div>
        </Container>
        <Container size='full' className="py-10">
          <ProductCarousel/>
        </Container>
      </div>
    </div>
  );
}
