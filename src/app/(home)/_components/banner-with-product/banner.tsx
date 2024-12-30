import { Container } from '@/components/ui/container'
import { ArrowRight } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'

type BannerProps = {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  image: string
  mobileImage: string
}

export function Banner({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  mobileImage,
}: BannerProps) {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Container cho ảnh */}
      <div className='relative aspect-[16/6] w-full md:aspect-[19/6]'>
        <picture>
          <source media='(max-width: 768px)' srcSet={mobileImage} />
          <Image
            src={image}
            alt={title}
            fill
            priority
            className='object-cover'
            sizes='100vw'
          />
        </picture>
      </div>

      {/* Overlay content */}
      <Container
        size='full'
        className='absolute inset-0 flex flex-col justify-center p-6 md:p-12'
      >
        <div className='max-w-xl'>
          {/* Title */}
          <h1 className='mb-2 text-4xl font-bold text-white md:text-6xl'>
            {title}
          </h1>

          {/* Subtitle */}
          <p className='mb-6 text-lg text-white md:text-xl'>{subtitle}</p>

          {/* CTA Button */}
          <Link
            href={ctaLink}
            className='inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600 md:text-lg'
          >
            {ctaText}
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </div>
      </Container>
    </div>
  )
}
