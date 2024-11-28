"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { HeroSlider } from "./hero-slider"
import Image from "next/image"

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

      <HeroSlider />
    </div>
  )
} 