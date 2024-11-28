import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel"
import { ProductCard } from "@components/shared/product-card"
import { Product } from "@/types/product"

const dummyProducts: Product= 
  {
    id: "1",    
    name: "Áo khoác thể thao Fleece Track Jacket Premium",
    price: 699000,
    rating: 4.8,
    reviewCount: 5,
    isFreeShipping: true,
    isPromotion: true,
    variants: [
      {
        color: "Black",
        colorCode: "#000000",
        images: [
          "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/November2024/24CMCW.KM005_-_Reu_7.JPG",
          "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/October2024/24CMCW.CM001_-_BE_4.JPG"
        ],
        sizes: ["S", "M", "L", "XL"]
      },
      {
        color: "Navy",
        colorCode: "#1B263B",
        images: [
          "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/November2024/24CMCW.HD001_-_Den_6.JPG",
          "https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/November2024/24CMCW.HD001_-DEN_10.jpg"
        ],
        sizes: ["S", "M", "L", "XL"]
      }
    ]
  }

export function ProductCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array(10).fill(dummyProducts).map((product, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
} 