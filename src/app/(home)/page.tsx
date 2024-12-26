import { HomeHero } from '@/app/(home)/_components/home-hero'
import { ProductCarousel } from '@/components/shared/product-carousel'
import { Container } from '@/components/ui/container'

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Container size='full' className='py-10'>
        <ProductCarousel collectionAlias='san-pham-moi' />
      </Container>
    </>
  )
}
