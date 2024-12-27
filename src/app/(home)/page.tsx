import { BoostedCollections } from '@/app/(home)/_components/boosted-collections'
import { FeaturedProducts } from '@/app/(home)/_components/featured-products/'
import { HeroBanner } from '@/app/(home)/_components/hero-banner'
import { SecondBanner } from '@/app/(home)/_components/second-banner'
import { CoolClubAwareness } from './_components/coolclub-awareness'

type HomePageProps = {
  searchParams: {
    featured: string
  }
}
export default function HomePage({ searchParams }: HomePageProps) {
  const collectionSeoAlias = searchParams['featured'] || 'san-pham-moi'
  return (
    <div className='mb-10 space-y-4'>
      <HeroBanner />

      <FeaturedProducts collectionSeoAlias={collectionSeoAlias} />

      <SecondBanner />

      <BoostedCollections />

      <CoolClubAwareness />
    </div>
  )
}
