// TODO: sửa lại file này
import { Product, ProductVariant } from '@/types/product'

export const productCardHelper = {
  // Get current product variant
  getCurrentVariant: (
    product: Product,
    selectedVariant: number
  ): ProductVariant => {
    return product.variants[selectedVariant]
  },

  // Get prices for product
  getPrices: (product: Product) => {
    const { campaign_sale, flash_sale, regular_price, compare_price } = product

    let finalRegularPrice = regular_price

    if (campaign_sale?.regular_price) {
      finalRegularPrice = Number(campaign_sale.regular_price)
    }
    if (flash_sale?.regular_price) {
      finalRegularPrice = Number(flash_sale.regular_price)
    }

    const percent =
      finalRegularPrice < compare_price
        ? 100 - Math.round((finalRegularPrice / compare_price) * 100)
        : 0

    return {
      percent,
      regular_price: finalRegularPrice,
      compare_price,
    }
  },

  // Get tags for product
  getTags: (product: Product): string[] => {
    const tags: string[] = []

    // Add preorder tag
    if (product.preorder && product.addon_note) {
      tags.push('preorder')
    }

    // Add product tags
    if (product.tags.length > 0 && !product.tags.includes('cleandye')) {
      product.tags.forEach((tag) => {
        if (tag !== 'cleandye') {
          tags.push(tag)
        }
      })
    }

    return tags
  },

  // Get review data
  getReviewData: (product: Product) => {
    if (!product.review?.avg) return null

    return {
      rating: Math.round((product.review.avg / 2) * 10) / 10,
      count: product.review.count,
    }
  },

  // Get CoolClub data
  getCoolClubData: (product: Product) => {
    const coolClubSale = product.coolclub_sale
    if (!coolClubSale) return null

    const variants = coolClubSale.variants
    if (!variants || Object.keys(variants).length === 0) return null

    // Get first variant's coolclub price
    const firstVariant = Object.values(variants)[0][0]
    return {
      price: firstVariant?.coolclub_price,
      isEnabled: firstVariant?.coolclub_price < product.regular_price,
    }
  },

  // Format price
  formatPrice: (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price)
  },
}
