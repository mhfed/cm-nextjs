import { Container } from '@/components/ui/container'
import { ImageHelper } from '@/lib/helpers/image-helper'
import Image from 'next/image'
import Link from 'next/link'

export function SecondBanner() {
  return (
    <Container size='full' className='relative mb-10'>
      <Link href='/collections/fall-winter'>
        <picture>
          <source
            media='(max-width: 768px)'
            srcSet={ImageHelper.getImageUrl(
              '/uploads/October2024/mceclip1_7.jpg',
              'full'
            )}
          />
          <Image
            src={ImageHelper.getImageUrl(
              '/uploads/October2024/mceclip2_54.jpg',
              'full'
            )}
            alt='Fall Winter Collection'
            width={1920}
            height={600}
            className='w-full rounded-2xl md:rounded-3xl'
            priority
            sizes='(max-width: 768px) 50vw, 100vw'
          />
        </picture>
      </Link>
    </Container>
  )
}
