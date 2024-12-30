'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, X } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import Image from 'next/image'

interface CartItem {
  id: string
  name: string
  image: string
  price: number
  originalPrice: number
  size: string
  quantity: number
}

export function CartMini() {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Mock data - replace with real data later
  const cartItems: CartItem[] = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    name: `Áo phao dày Ultrawarm Puffer có mũ Rêu ${index + 1}`,
    image:
      'https://media3.coolmate.me/cdn-cgi/image/width=160,height=181,quality=80/uploads/November2024/24CMCW.KM005-Reu-1_7.jpg',
    price: 672000,
    originalPrice: 790000,
    size: '3XL',
    quantity: 1,
  }))

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300) // Delay before closing
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link href='/cart' className='relative'>
            <ShoppingCart className='h-6 w-6 text-white' />
            <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white'>
              {cartItems.length}
            </span>
          </Link>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className='w-[400px] p-0'
        align='end'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='p-4'>
          <div className='mb-4 flex items-center justify-between'>
            <h3 className='font-medium'>{cartItems.length} sản phẩm</h3>
            <Link href='/cart' className='text-blue-600 hover:underline'>
              Xem tất cả
            </Link>
          </div>

          <div className='scrollbar-thin max-h-[460px] space-y-4 overflow-y-auto'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex gap-4'>
                <div className='h-24 w-24 overflow-hidden rounded-lg bg-gray-100'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='h-full w-full object-cover'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='flex-1'>
                  <div className='flex justify-between'>
                    <div>
                      <h4 className='line-clamp-2 text-sm'>{item.name}</h4>
                      <p className='mt-1 text-sm text-gray-500'>{item.size}</p>
                      <div className='mt-1 flex items-center gap-2'>
                        <span className='font-medium'>
                          {item.price.toLocaleString()}đ
                        </span>
                        <span className='text-sm text-gray-500 line-through'>
                          {item.originalPrice.toLocaleString()}đ
                        </span>
                      </div>
                      <p className='mt-1 text-sm'>x{item.quantity}</p>
                    </div>
                    <button className='h-4 text-gray-400 hover:text-gray-600'>
                      <X className='h-4 w-4' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
