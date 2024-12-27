'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ImageHelper } from '@/lib/helpers/image-helper'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const transactionsFake = [
  { id: '1', content: 'Anh T. vừa nhận được 50 Cool Xu từ đơn hàng' },
  { id: '2', content: 'Chị H. vừa đổi 100 Cool Xu lấy voucher 50k' },
  { id: '3', content: 'Anh T. vừa nhận được 50 Cool Xu từ đơn hàng' },
  { id: '4', content: 'Chị H. vừa đổi 100 Cool Xu lấy voucher 50k' },
  { id: '5', content: 'Anh T. vừa nhận được 50 Cool Xu từ đơn hàng' },
  { id: '6', content: 'Chị H. vừa đổi 100 Cool Xu lấy voucher 50k' },
]

export function CoolClubAwareness() {
  // TODO: remove this after implementing login logic
  const isLoggedIn = true

  return (
    <Container size='full' className='mb-10'>
      <div className="rounded-2xl max-md:bg-[#F3EFFF] md:rounded-3xl md:bg-[url('https://media.coolmate.me/image/December2024/mceclip6_94.jpg')] md:bg-cover md:bg-center md:bg-no-repeat md:px-20 md:pb-10 md:pt-12">
        <div className='mx-auto w-full'>
          <div className='md:flex md:gap-6'>
            {/* Left Section */}
            <div className='max-md:rounded-2xl max-md:bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_12.94%,rgba(207,212,248,0.809286)_65.23%,#7B88EC_103.31%)] max-md:px-7 max-md:py-9 md:w-2/3 md:rounded-lg'>
              <h2 className='text-cm-black-80 mb-4 text-base font-bold md:mb-5 md:text-xl 2xl:text-2xl'>
                <span>ĐẶC QUYỀN DÀNH CHO</span> <br className='md:hidden' />
                <span className='text-blue-600'>285.000</span>
                <span> THÀNH VIÊN COOL</span>
                <span className='rounded bg-black px-1 pb-[0.5px] pt-[1px] text-white md:px-2 md:py-1'>
                  CLUB
                </span>
              </h2>

              <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4'>
                {[
                  {
                    mobile: '/image/December2024/mceclip0_98.jpg',
                    desktop: '/image/December2024/mceclip15.jpg',
                  },
                  {
                    mobile: '/image/December2024/mceclip0_57.jpg',
                    desktop: '/image/December2024/mceclip16.jpg',
                  },
                  {
                    mobile: '/image/December2024/mceclip2_54.jpg',
                    desktop: '/image/December2024/mceclip17.jpg',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <picture className='w-full'>
                      <source
                        media='(max-width: 768px)'
                        srcSet={ImageHelper.getImageUrl(item.mobile)}
                      />
                      <Image
                        src={ImageHelper.getImageUrl(item.desktop)}
                        alt={`CoolClub benefit ${index}`}
                        width={267}
                        height={200}
                        className='w-full rounded-2xl md:max-w-[267px] md:rounded-3xl'
                      />
                    </picture>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className='gradient-border max-md:rounded-b-2xl max-md:bg-[#F3EFFF] max-md:pb-6 max-md:pt-4 md:w-1/3 md:pl-8 2xl:pl-12'>
              <h3 className='text-cm-black-80 mb-3 text-center text-lg font-bold md:mb-4 md:text-xl 2xl:text-3xl'>
                HOẠT ĐỘNG GẦN ĐÂY
              </h3>

              {/* Marquee Section */}
              <div className='text-cm-black-80 relative overflow-hidden rounded-lg bg-transparent pb-4 text-sm md:text-base'>
                {[0, 1].map((row) => (
                  <div
                    key={row}
                    className='mb-1 flex gap-3 overflow-hidden md:mb-2'
                  >
                    <div className={`animate-marquee-${row} flex gap-3`}>
                      {transactionsFake.map((transaction) => (
                        <span
                          key={transaction.id}
                          className='whitespace-nowrap'
                        >
                          {transaction.content}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className='text-center'>
                {!isLoggedIn ? (
                  <Button
                    onClick={() => {
                      /* Add login logic */
                    }}
                    className='inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-opacity-90'
                  >
                    GIA NHẬP COOLCLUB NGAY
                    <ArrowRight className='h-4 w-4' />
                  </Button>
                ) : (
                  <Link
                    href='/page/coolclub-chuong-trinh-khach-hang-than-thiet-cua-coolmate?itm_source=awareness'
                    className='inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white hover:bg-opacity-90'
                  >
                    KHÁM PHÁ COOLCLUB
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee0 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee1 {
          0% {
            transform: translateX(40px);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-0 {
          animation: marquee0 20s linear infinite;
        }
        .animate-marquee-1 {
          animation: marquee1 20s linear infinite;
        }
        .gradient-border {
          position: relative;
        }
        @media (min-width: 768px) {
          .gradient-border::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 3px;
            height: 100%;
            background-image: linear-gradient(
              to bottom,
              transparent,
              #c0c0c0 50%,
              transparent
            );
          }
        }
      `}</style>
    </Container>
  )
}
