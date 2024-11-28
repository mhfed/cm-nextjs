import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ProductCard } from "@/components/shared/product-card"
import { Product } from "@/types/product"

interface ProductCarouselProps {
  products: Product[]
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="sm:basis-1/2 lg:basis-1/4">
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
} 