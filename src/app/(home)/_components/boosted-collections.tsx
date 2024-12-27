import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ImageHelper } from '@/lib/helpers/image-helper'
import Image from 'next/image'
import Link from 'next/link'

type Collection = {
  id: string
  link: string
  image: string
  mobileImage: string
  label: string
  trackingValue: string
  mobileTrackingValue: string
}

export function BoostedCollections() {
  const collections: Collection[] = [
    {
      id: '1',
      link: '/collection/do-thu-dong',
      image: '/uploads/December2024/mceclip6_69.jpg',
      mobileImage: '/uploads/December2024/mceclip6_69.jpg',
      label: 'Đồ thu đông',
      trackingValue: 'bannercat-vitri1',
      mobileTrackingValue: 'mbbannercat-vitri1',
    },
    {
      id: '2',
      link: '/collection/coolmate-activewear',
      image: '/uploads/December2024/mceclip8_20.jpg',
      mobileImage: '/uploads/December2024/mceclip8_20.jpg',
      label: 'Đồ thể thao',
      trackingValue: 'bannercat-vitri2',
      mobileTrackingValue: 'mbbannercat-vitri2',
    },
    {
      id: '3',
      link: '/collection/do-casual',
      image: '/uploads/December2024/mceclip7_50.jpg',
      mobileImage: '/uploads/December2024/mceclip7_50.jpg',
      label: 'Mặc hằng ngày',
      trackingValue: 'bannercat-vitri3',
      mobileTrackingValue: 'mbbannercat-vitri3',
    },
    {
      id: '4',
      link: '/collection/quan-lot-nam',
      image: '/uploads/December2024/mceclip9_67.jpg',
      mobileImage: '/uploads/December2024/mceclip9_67.jpg',
      label: 'Đồ lót nam',
      trackingValue: 'bannercat-vitri4',
      mobileTrackingValue: 'mbbannercat-vitri4',
    },
  ]

  return (
    <Container className='py-8' size='full'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {collections.map((collection) => (
          <Card
            key={collection.id}
            className='group overflow-hidden rounded-lg border-none bg-transparent shadow-none transition-all duration-300'
          >
            <Link
              href={collection.link}
              className='relative block aspect-[3/4] w-full overflow-hidden rounded-lg'
              data-tracking={collection.trackingValue}
              data-mobile-tracking={collection.mobileTrackingValue}
            >
              <picture>
                <source
                  media='(max-width: 768px)'
                  srcSet={ImageHelper.getImageUrl(collection.mobileImage)}
                />
                <Image
                  src={ImageHelper.getImageUrl(collection.image)}
                  alt={collection.label}
                  fill
                  className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                  sizes='(max-width: 768px) 50vw, 25vw'
                  priority={false}
                />
              </picture>
              {/* <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              <div className='absolute inset-x-0 bottom-0 p-4'>
                <h3 className='text-lg font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  {collection.label}
                </h3>
              </div> */}
            </Link>
          </Card>
        ))}
      </div>
    </Container>
  )
}
