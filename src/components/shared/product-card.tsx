'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { productHelper } from '@/lib/helpers/product.helper'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import Image from 'next/image'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)

  if (!product?.display_name) return null

  const currentVariant = productHelper.getCurrentVariant(
    product,
    selectedVariant
  )
  const prices = productHelper.getPrices(product)
  const tags = productHelper.getTags(product)
  const review = productHelper.getReviewData(product)
  const coolClub = productHelper.getCoolClubData(product)

  return (
    <Card className='relative'>
      <CardContent className='p-0'>
        {/* Free Shipping Badge */}
        {product.regular_price >= 200000 && (
          <Badge className='absolute right-2 top-2 bg-blue-600'>
            FREE SHIP
          </Badge>
        )}

        {/* Product Tags */}
        {tags.map((tag) => (
          <Badge key={tag} className='absolute left-2 top-2'>
            {tag}
          </Badge>
        ))}

        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger asChild>
            <div className='group relative aspect-square overflow-hidden'>
              {/* Main Image */}
              <Image
                src={`https://media3.coolmate.me${product.images[0].src}`}
                alt={product.display_name}
                className='object-cover'
                fill
                sizes='(max-width: 768px) 50vw, 25vw'
              />

              {/* Hover Image */}
              {product.images[1] && (
                <Image
                  src={`https://media3.coolmate.me${product.images[1].src}`}
                  alt={`${product.display_name} hover`}
                  className='absolute inset-0 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                  fill
                  sizes='(max-width: 768px) 50vw, 25vw'
                />
              )}
            </div>
          </HoverCardTrigger>

          {/* Color Options */}
          <HoverCardContent className='w-fit'>
            <div className='flex gap-2'>
              {currentVariant?.option1 && (
                <Badge
                  variant='outline'
                  className='cursor-pointer hover:bg-primary hover:text-primary-foreground'
                >
                  {currentVariant.option1}
                </Badge>
              )}
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Product Info */}
        <div className='p-4'>
          <h3 className='font-medium'>{product.display_name}</h3>

          {/* Prices */}
          <div className='mt-1 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              {prices.compare_price > prices.regular_price && (
                <del className='text-sm text-muted-foreground'>
                  {productHelper.formatPrice(prices.compare_price)}
                </del>
              )}
              <span className='font-semibold'>
                {productHelper.formatPrice(prices.regular_price)}
              </span>
              {prices.percent > 0 && (
                <Badge variant='destructive'>-{prices.percent}%</Badge>
              )}
            </div>

            {/* Reviews */}
            {review && (
              <div className='flex items-center gap-1'>
                <span>{review.rating}</span>
                <span className='text-sm text-muted-foreground'>
                  ({review.count})
                </span>
              </div>
            )}
          </div>

          {/* CoolClub Price */}
          {coolClub?.isEnabled && (
            <div className='mt-2 text-sm text-muted-foreground'>
              Giá CoolClub: {productHelper.formatPrice(coolClub.price)}
            </div>
          )}

          {/* Color variants */}
          <div className='mt-3 flex gap-2'>
            {product.variants.map((variant, index) => (
              <button
                key={variant.id}
                className={cn(
                  'z-10 h-4 w-4 rounded-full border',
                  selectedVariant === index &&
                    'ring-2 ring-primary ring-offset-2'
                )}
                style={{ backgroundColor: variant.option1 }}
                onClick={() => setSelectedVariant(index)}
              />
            ))}
          </div>
        </div>

        {/* Promotion Badge */}
        {product.addon_note && (
          <div className='absolute bottom-0 left-0 right-0 bg-[#c7f72c] py-2 text-center font-bold'>
            {product.addon_note}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
