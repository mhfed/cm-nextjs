import { HomeHero } from '@/app/(home)/_components/home-hero'
import { TestButton } from '@/app/(home)/_components/test-button'
import { ProductCarousel } from '@/components/shared/product-carousel'
import { Container } from '@/components/ui/container'

type SearchParams = {
  collectionAlias: string
}
export default function HomePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  return (
    <>
      <HomeHero />

      <Container size='full' className='space-y-4 py-10'>
        <TestButton />
        <ProductCarousel
          collectionAlias={searchParams.collectionAlias || 'san-pham-moi'}
        />
      </Container>
    </>
  )
}
