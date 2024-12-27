'use client'
import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from '@/components/extension/carousel'
import { ImageHelper } from '@/lib/helpers/image-helper'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

type BannerSlide = {
  id: string
  image: string
  url: string
  link_target?: string
  heading?: string
  descriptions?: string
  cta_button_text?: string
  info_position?: string
  hidden?: boolean
  active_time?: boolean
  starts_at?: string
  ends_at?: string
}

export function HeroBanner() {
  // Mock data - replace with API call later
  const slides: BannerSlide[] = [
    {
      id: '1',
      image: '/uploads/December2024/Hero_Desktop_YES.jpg',
      url: '/collections/fall-winter',
    },
    {
      id: '2',
      image: '/uploads/December2024/Frame_87658-min.jpg',
      url: '/collections/fall-winter',
    },
  ]

  // Filter valid slides
  const validSlides = slides.filter((slide) => {
    if (slide.hidden) return false
    if (slide.active_time) {
      const now = new Date().getTime()
      const start = slide.starts_at ? new Date(slide.starts_at).getTime() : 0
      const end = slide.ends_at ? new Date(slide.ends_at).getTime() : Infinity
      return now > start && now < end
    }
    return true
  })

  if (!validSlides.length) return null

  return (
    <div className='relative w-full'>
      <Carousel
        carouselOptions={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselNext
          size='icon'
          className='absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2'
        />
        <CarouselPrevious
          size='icon'
          className='absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2'
        />
        <CarouselMainContainer className='h-full'>
          {validSlides.map((slide, index) => (
            <SliderMainItem
              key={slide.id}
              className='relative h-full w-full p-0'
            >
              <div className='h-full w-full'>
                <Image
                  src={ImageHelper.getImageUrl(slide.image, 'full')}
                  alt={`Home banner slide ${index + 1}`}
                  width={1920}
                  height={1080}
                  priority={index === 0}
                  className='object-contain'
                />
              </div>
              <Link
                href={slide.url}
                target={slide.link_target}
                className='relative block h-full w-full'
              />
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2'>
          <CarouselThumbsContainer className='gap-x-1'>
            {validSlides.map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </Carousel>
    </div>
  )
}
