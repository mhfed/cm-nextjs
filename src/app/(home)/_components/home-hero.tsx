import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function HomeHero() {
  return (
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
      <Container size="full" className="relative h-full">
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
      <Container size="full" className="absolute bottom-8 left-0 right-0">
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
  )
} 