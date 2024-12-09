'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, X } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  size: string;
  quantity: number;
}

export function CartMini() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

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
  }));

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link href='/cart' className='relative'>
            <ShoppingCart className='w-6 h-6 text-white' />
            <span className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
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
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-medium'>{cartItems.length} sản phẩm</h3>
            <Link href='/cart' className='text-blue-600 hover:underline'>
              Xem tất cả
            </Link>
          </div>

          <div className='space-y-4 max-h-[460px] overflow-y-auto scrollbar-thin'>
            {cartItems.map((item) => (
              <div key={item.id} className='flex gap-4'>
                <div className='w-24 h-24 bg-gray-100 rounded-lg overflow-hidden'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='w-full h-full object-cover'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='flex-1'>
                  <div className='flex justify-between'>
                    <div>
                      <h4 className='text-sm line-clamp-2'>{item.name}</h4>
                      <p className='text-sm text-gray-500 mt-1'>{item.size}</p>
                      <div className='flex items-center gap-2 mt-1'>
                        <span className='font-medium'>
                          {item.price.toLocaleString()}đ
                        </span>
                        <span className='text-sm text-gray-500 line-through'>
                          {item.originalPrice.toLocaleString()}đ
                        </span>
                      </div>
                      <p className='text-sm mt-1'>x{item.quantity}</p>
                    </div>
                    <button className='text-gray-400 hover:text-gray-600 h-4'>
                      <X className='w-4 h-4' />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
