import {
  ProductCard,
  ProductCardSkeleton,
} from '@/components/common/product-card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { productService } from '@/services/server/products.server.service'
import { Suspense } from 'react'

interface ProductCarouselProps {
  collectionSeoAlias: string // Bắt buộc phải có collection alias
  limit?: number
}

function ProductCarouselSkeleton() {
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
          {[1, 2, 3, 4, 5].map((index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/5'>
              <ProductCardSkeleton />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute left-0 top-1/2 -translate-y-1/2' />
        <CarouselNext className='absolute right-0 top-1/2 -translate-y-1/2' />
      </Carousel>
    </div>
  )
}

export function ProductCarousel({
  collectionSeoAlias,
  limit = 10,
}: ProductCarouselProps) {
  return (
    <Suspense key={collectionSeoAlias} fallback={<ProductCarouselSkeleton />}>
      <ProductCarouselContent
        collectionSeoAlias={collectionSeoAlias}
        limit={limit}
      />
    </Suspense>
  )
}

async function ProductCarouselContent({
  collectionSeoAlias,
  limit,
}: ProductCarouselProps) {
  const { products } = await productService.getProductsByCollection(
    collectionSeoAlias,
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
              className='basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5'
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='absolute -left-10 top-1/2 h-10 w-10 -translate-y-1/2 bg-black text-white' />
        <CarouselNext className='absolute -right-10 top-1/2 h-10 w-10 -translate-y-1/2 bg-black text-white' />
      </Carousel>
    </div>
  )
}
