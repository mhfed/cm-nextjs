import { Banner } from '@/app/(home)/_components/banner-with-product/banner'
import { ProductCarousel } from '@/components/common/product-carousel'
import { Container } from '@/components/ui/container'
import { ImageHelper } from '@/lib/helpers/image.helper'
import Link from 'next/link'

const BANNER_SECTIONS = [
  {
    title: 'ĐỒ THU ĐÔNG',
    subtitle: 'Giảm 50% từ sản phẩm thứ 2',
    ctaText: 'KHÁM PHÁ NGAY',
    ctaLink: '/collections/fall-winter',
    image: '/uploads/December2024/mceclip0_31.jpg',
    mobileImage: '/uploads/December2024/mceclip1_30.jpg',
    heading: 'SẢN PHẨM THU ĐÔNG',
    collectionLink: '/collections/do-thu-dong',
    carouselAlias: 'mac-hang-ngay-trang-chu',
  },
  {
    title: 'ĐỒ CHẠY BỘ',
    subtitle: 'Giảm 50% từ sản phẩm thứ 2',
    ctaText: 'KHÁM PHÁ NGAY',
    ctaLink: '/collections/do-chay-bo',
    image: '/uploads/December2024/mceclip12_65.jpg',
    mobileImage: '/uploads/December2024/mceclip1_30.jpg',
    heading: 'SẢN PHẨM CHẠY BỘ',
    collectionLink: '/collections/do-chay-bo',
    carouselAlias: 'do-chay-bo-trang-chu',
  },
  {
    title: 'Quần LÓT',
    subtitle: 'Giảm 50% từ sản phẩm thứ 2',
    ctaText: 'KHÁM PHÁ NGAY',
    ctaLink: '/collections/quan-lot-nam',
    image: '/uploads/December2024/mceclip4_7.jpg"',
    mobileImage: '/uploads/December2024/mceclip1_30.jpg',
    heading: 'SẢN PHẨM QUẦN LÓT',
    collectionLink: '/collections/quan-lot-nam',
    carouselAlias: 'do-lot-trang-chu',
  },
]

export function BannerWithProducts() {
  return (
    <div className='space-y-10'>
      {BANNER_SECTIONS.map((section, index) => (
        <div key={index} className='space-y-10'>
          <Banner
            title={section.title}
            subtitle={section.subtitle}
            ctaText={section.ctaText}
            ctaLink={section.ctaLink}
            image={ImageHelper.getImageUrl(section.image, 'full')}
            mobileImage={ImageHelper.getImageUrl(section.mobileImage, 'full')}
          />
          <Container size='full' className='space-y-4'>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-bold uppercase'>
                {section.heading}
              </h2>
              <Link href={section.collectionLink} className='text-lg underline'>
                Xem thêm
              </Link>
            </div>
            <ProductCarousel collectionSeoAlias={section.carouselAlias} />
          </Container>
        </div>
      ))}
    </div>
  )
}
