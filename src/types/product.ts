export type Product = {
  _id: string
  apply_allowance_inventory: boolean
  id: string
  title: string
  seo_alias: string
  vendor: string
  tags: string[]
  options: ProductOption[]
  images: ProductImage[]
  onsale: boolean
  available: boolean
  collections: string[]
  price: number
  compare_price: number
  preorder: boolean
  pricing: ProductPricing[]
  is_pricing: boolean
  is_combo: boolean
  display_order: number
  sale_number: number
  is_color_image_option: boolean
  youtube_video: string
  addon_note: string
  review: ProductReview
  coming_soon: boolean
  variants: ProductVariant[]
  percent: number
  regular_price: number
  sizechart: string
  not_random: boolean
  display_name: string
  display_name_open: string
  modified_date: string
  note_collections: string[]
  updated_at: string
  created_at: string
  addon_note_collection: string
  pricing_policy: PricingPolicy[]
  flash_sale: FlashSale | null
  campaign_sale: CampaignSale | null
  deal_sale: null
  coolclub_sale: CoolClubSale | null
  icon_thumbnail: ProductImage
}
// TODO: sửa lại type
export type FlashSale = {
  _id: string
  product_id: string
  regular_price: string
  from_collection: boolean
  max: number
  variants: Record<string, CampaignSaleVariant[]>
  max_regular_price: string
  flash_sale_id: string
}
// TODO: sửa lại type
export type CoolClubSale = {
  _id: string
  product_id: string
  coolclub_price: string
  variants: Record<string, CampaignSaleVariant[]>
}

export type ProductImage = {
  id: string
  src: string
  hide: boolean
}

export type ProductOption = {
  title: string
  option_id: string
  option_sizechart: string
  values: string[]
  values_map: {
    id: number
    value: string
  }[]
}

export type ProductPricing = {
  discount_quantity: number
  discount_price: number
}

export type ProductReview = {
  count: number
  avg: number
  ratingValue: number
  ratingCount: number
  reviewCount: number
  bestRating: number
  worstRating: number
}

export type ProductVariant = {
  _id: string
  id: string
  product_id: string
  title: string
  regular_price: number
  compare_price: number
  quantity: number
  option1: string
  option2: string
  option3: string
  option4: string
  hide: boolean
  pending: number
  available: boolean
  product_title: string
}

export type PricingPolicy = {
  _id: string
  product_id: string
  compare_price: number
  product_label: string
  available: boolean
  coupons_applicable: boolean
  pricing_type: string
  conditions: {
    quantity: number
    value: number
  }[]
  product_pricing_id: string
  updated_at: string
  created_at: string
}

export type CampaignSale = {
  _id: string
  product_id: string
  regular_price: string
  from_collection: boolean
  max: number
  variants: Record<string, CampaignSaleVariant[]>
  max_regular_price: string
  flash_sale_id: string
}

export type CampaignSaleVariant = {
  _id: string
  id: string
  product_id: string
  title: string
  regular_price: string
  compare_price: number
  quantity: number
  hide: boolean
  pending: number
  available: boolean
  product_title: string
  active: boolean
  max: number
  max_quantity: number
  discount_percent: number
  flash_sale_type: 'fixed_amount'
  used?: number
}
