"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/images/hero/slide-1.jpg",
    alt: "Hero slide 1"
  },
  // More slides...
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
} 