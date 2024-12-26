import { ProductCard } from '@/components/shared/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { productService } from '@/services/server/products.server.service'

export async function ProductCarousel() {
  // Server Component - fetch data
  const products = await productService.getProducts({ limit: 10 })

  return (
    <div className='relative'>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className='md:basis-1/2 lg:basis-1/5'
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2' />
        <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2' />
      </Carousel>
    </div>
  )
}
