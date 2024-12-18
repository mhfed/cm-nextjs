'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { cn } from '@/lib/utils';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // const [selectedVariant, setSelectedVariant] = useState(0);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return <h1>ProductCard {product.display_name}</h1>;

  return (
    <Card className='group relative'>
      <CardContent className='p-0'>
        {/* Free Shipping Badge */}
        {product.regular_price >= 200000 ? (
          <Badge className='absolute right-2 top-2 bg-blue-600'>
            FREE SHIP
          </Badge>
        ) : null}

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className='relative aspect-square overflow-hidden'>
              <Image
                src={
                  product.variants[selectedVariant].images[currentImageIndex]
                }
                alt={product.name}
                className='h-full w-full object-cover transition-all hover:scale-105'
                onMouseEnter={() => {
                  if (product.variants[selectedVariant].images.length > 1) {
                    setCurrentImageIndex(1);
                  }
                }}
                onMouseLeave={() => setCurrentImageIndex(0)}
                width={100}
                height={100}
              />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className='w-fit'>
            <div className='flex gap-2'>
              {product.variants[selectedVariant].sizes.map((size) => (
                <Badge
                  key={size}
                  variant='outline'
                  className='cursor-pointer hover:bg-primary hover:text-primary-foreground'
                >
                  {size}
                </Badge>
              ))}
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Product Info */}
        <div className='p-4'>
          <h3 className='font-medium'>{product.name}</h3>
          <div className='mt-1 flex items-center justify-between'>
            <p className='font-semibold'>
              {new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.price)}
            </p>
            {product.rating && (
              <div className='flex items-center gap-1'>
                <span>{product.rating}</span>
                <span className='text-sm text-muted-foreground'>
                  ({product.reviewCount})
                </span>
              </div>
            )}
          </div>

          {/* Color variants */}
          <div className='mt-3 flex gap-2'>
            {product.variants.map((variant, index) => (
              <button
                key={variant.colorCode}
                className={cn(
                  'h-4 w-4 rounded-full border z-10',
                  selectedVariant === index &&
                    'ring-2 ring-primary ring-offset-2'
                )}
                style={{ backgroundColor: variant.colorCode }}
                onClick={() => setSelectedVariant(index)}
              />
            ))}
          </div>
        </div>

        {/* Promotion Badge */}
        {product.addon_note_collection && (
          <div className='absolute bottom-0 left-0 right-0 bg-[#c7f72c] py-2 text-center font-bold'>
            MUA 1 TẶNG 1
          </div>
        )}
      </CardContent>
    </Card>
  );
}
