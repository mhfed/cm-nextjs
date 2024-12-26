import { ProductCard } from '@/components/shared/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { productService } from '@/services/server/products.server.service'

interface ProductCarouselProps {
  collectionAlias: string // Bắt buộc phải có collection alias
  limit?: number
}

export async function ProductCarousel({
  collectionAlias,
  limit = 10,
}: ProductCarouselProps) {
  // Fetch data từ collection
  const { products } = await productService.getProductsByCollection(
    collectionAlias,
    {
      limit,
      random_focus: true,
      flatten: true,
    }
  )

  if (!products?.data?.length) {
    return null
  }

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
          {products.data.map((product) => (
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
