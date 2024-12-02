"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="grid gap-4">
      <div className="aspect-square relative">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={cn(
              "aspect-square relative rounded-lg overflow-hidden",
              selectedImage === i && "ring-2 ring-primary"
            )}
          >
            <Image
              src={image}
              alt={`Product image ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 