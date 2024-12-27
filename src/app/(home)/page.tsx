import { FeaturedProducts } from '@/app/(home)/_components/featured-products/'
import { HeroBanner } from '@/app/(home)/_components/hero-banner'

type HomePageProps = {
  searchParams: {
    featured: string
  }
}
export default function HomePage({ searchParams }: HomePageProps) {
  const collectionSeoAlias = searchParams['featured'] || 'san-pham-moi'
  return (
    <>
      <HeroBanner />

      <FeaturedProducts collectionSeoAlias={collectionSeoAlias} />
    </>
  )
}
