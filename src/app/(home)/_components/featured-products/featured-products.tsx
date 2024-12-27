import { FilterButton } from '@/app/(home)/_components/featured-products/filter-button'
import { ProductCarousel } from '@/components/shared/product-carousel'
import { Container } from '@/components/ui/container'
type FeaturedProductsProps = {
  collectionSeoAlias: string
}
export function FeaturedProducts({
  collectionSeoAlias,
}: FeaturedProductsProps) {
  return (
    <Container size='full' className='space-y-4 py-10'>
      <FilterButton />
      <ProductCarousel collectionSeoAlias={collectionSeoAlias} />
    </Container>
  )
}
