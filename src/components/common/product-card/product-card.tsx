'use client'

import {
  ProductCardProvider,
  useProductCardContext,
} from '@/components/common/product-card/context'
import { productCardHelper } from '@/components/common/product-card/helper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { cn } from '@/lib/utils'
import { Product } from '@/types/product'
import Image from 'next/image'
import React, { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  console.log('🚀 ~ ProductCard ~ product:', product)

  return (
    <ProductCardProvider product={product}>
      <Card className='relative border-none shadow-none'>
        <CardContent className='p-0'>
          <ProductCardHeader />

          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <ProductCardThumbnail />
            </HoverCardTrigger>

            {/* Size Options */}
            <HoverCardContent className='mx-auto' sideOffset={-100}>
              <SizeVariants />
            </HoverCardContent>
          </HoverCard>

          <ProductCardInfo />
        </CardContent>
      </Card>
    </ProductCardProvider>
  )
}

// ==============================
// Color Variants
// ==============================
const ColorVariants = () => {
  const { product, selectedVariant, setSelectedVariant } =
    useProductCardContext()
  const [showAllVariants, setShowAllVariants] = useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = React.useState(6)

  React.useEffect(() => {
    const calculateVisibleCount = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      // Each variant button is 24px (w-6) + 4px margin
      const itemWidth = 28
      const newVisibleCount = Math.floor(containerWidth / itemWidth)
      setVisibleCount(Math.max(1, newVisibleCount - 1)) // -1 to leave space for the "+" button
    }

    calculateVisibleCount()
    window.addEventListener('resize', calculateVisibleCount)
    return () => window.removeEventListener('resize', calculateVisibleCount)
  }, [])

  return (
    <div ref={containerRef} className='mt-2 gap-2 overflow-x-auto p-1'>
      {(showAllVariants
        ? product.variants
        : product.variants.slice(0, visibleCount)
      ).map((variant, index) => (
        <button
          key={variant.id}
          className={cn(
            'z-10 mr-1 h-4 w-6 rounded-full border',
            selectedVariant === index && 'ring-1 ring-black ring-offset-2'
          )}
          style={{ backgroundColor: variant.option1 }}
          onClick={() => setSelectedVariant(index)}
        />
      ))}
      {!showAllVariants && product.variants.length > visibleCount && (
        <Button
          variant='ghost'
          size='icon'
          className='h-4 w-4 rounded-full'
          onClick={() => setShowAllVariants(true)}
        >
          +{product.variants.length - visibleCount}
        </Button>
      )}
    </div>
  )
}

// ==============================
// Size Variants
// ==============================
const SizeVariants = () => {
  const { product, selectedVariant } = useProductCardContext()
  const currentVariant = productCardHelper.getCurrentVariant(
    product,
    selectedVariant
  )

  return (
    <div className='flex gap-2'>
      {currentVariant?.option2 && (
        <Badge
          variant='outline'
          className='cursor-pointer hover:bg-primary hover:text-primary-foreground'
        >
          {currentVariant.option2}
        </Badge>
      )}
    </div>
  )
}

// ==============================
// Product Card Header
// ==============================
const ProductCardHeader = () => {
  const { product } = useProductCardContext()
  const tags = productCardHelper.getTags(product)
  const review = productCardHelper.getReviewData(product)
  return (
    <>
      {/* Reviews */}
      {review && (
        <div className='absolute left-2 top-2 z-10 flex items-center gap-1'>
          <span>{review.rating}</span>
          <span className='text-sm text-muted-foreground'>
            ({review.count})
          </span>
        </div>
      )}
      {/* Free Shipping Badge */}
      {product.regular_price >= 200000 && (
        <Badge className='absolute right-2 top-2 z-10 bg-blue-600'>
          FREE <br /> SHIP
        </Badge>
      )}

      {/* Product Tags */}
      {tags.map((tag) => (
        <Badge key={tag} className='absolute left-2 top-2 z-10'>
          {tag}
        </Badge>
      ))}
    </>
  )
}

// ==============================
// Product Card Thumbnail
// ==============================
const ProductCardThumbnail = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { product } = useProductCardContext()

  return (
    <div
      ref={ref}
      className='group relative aspect-[4/5] overflow-hidden'
      {...props}
    >
      {/* Main Image */}
      <Image
        src={`https://media3.coolmate.me${product.images[0].src}`}
        alt={product.display_name}
        className='rounded-lg object-cover'
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

      {/* Thumbnail Icon */}
      {product.icon_thumbnail &&
        !product.icon_thumbnail.hide &&
        product.icon_thumbnail.src && (
          <div className='absolute bottom-0 left-0 w-full'>
            <Image
              src={`https://media3.coolmate.me${product.icon_thumbnail.src}`}
              alt='Thumbnail icon'
              width={85}
              height={85}
              className='w-full object-contain'
            />
          </div>
        )}
    </div>
  )
})
ProductCardThumbnail.displayName = 'ProductCardThumbnail'

// ==============================
// Product Card Info
// ==============================
const ProductCardInfo = () => {
  const { product } = useProductCardContext()

  const prices = productCardHelper.getPrices(product)
  const coolClub = productCardHelper.getCoolClubData(product)
  return (
    <div className=''>
      {/* Color variants */}
      <ColorVariants />

      <h3 className='line-clamp-2 text-sm font-medium'>
        {product.display_name}
      </h3>

      {/* Prices */}
      <div className='mt-1 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          {prices.compare_price > prices.regular_price && (
            <del className='text-sm text-muted-foreground'>
              {productCardHelper.formatPrice(prices.compare_price)}
            </del>
          )}
          <span className='text-sm font-bold'>
            {productCardHelper.formatPrice(prices.regular_price)}
          </span>
          {prices.percent > 0 && (
            <Badge variant='destructive'>-{prices.percent}%</Badge>
          )}
        </div>
      </div>

      {/* CoolClub Price */}
      {coolClub?.isEnabled && (
        <div className='mt-2 text-sm text-muted-foreground'>
          Giá CoolClub: {productCardHelper.formatPrice(coolClub.price)}
        </div>
      )}
      {/* Promotion Badge */}
      {product.addon_note && (
        <div className='line-clamp-1 text-xs italic text-primary'>
          {product.addon_note}
        </div>
      )}
    </div>
  )
}
