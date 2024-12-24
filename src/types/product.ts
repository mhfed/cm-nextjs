export type Product = {
  _id: string
  apply_allowance_inventory: boolean
  id: string
  title: DisplayName
  seo_alias: string
  vendor: string
  tags: Tags
  options: ProductOption[]
  options_value: Array<unknown[] | OptionsValueClass> // TODO: Bổ sung type cho options_value
  images: Image[]
  onsale: boolean
  available: boolean
  collections: string[]
  price: number
  compare_price: number
  preorder: boolean
  pricing: Pricing[]
  is_pricing: boolean
  is_combo: boolean
  display_order: number
  sale_number: number
  is_color_image_option: boolean
  youtube_video: string
  addon_note: string
  review: Review
  coming_soon: boolean
  variants: ProductVariant[]
  percent: number
  regular_price: number
  sizechart: string
  not_random: boolean
  display_name: DisplayName
  display_name_open: string
  modified_date: CreatedAt
  note_collections: string[]
  updated_at: CreatedAt
  created_at: CreatedAt
  addon_note_collection: string
  pricing_policy: PricingPolicy[]
  collection_pricing_policy: unknown[] // TODO: Bổ sung type cho collection_pricing_policy
  flash_sale: null
  campaign_sale: CampaignSale
  deal_sale: null
  coolclub_sale: null
  icon_thumbnail: IconThumbnail
}

export type CampaignSale = {
  _id: string
  product_id: string
  regular_price: string
  from_collection: boolean
  max: number
  variants: { [key: string]: CampaignSaleVariant[] }
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
  product_stoppage: boolean
  product_visibility: boolean
  product_allow_buy_hidden: boolean
  product_exclude_discount: boolean
  product_apply_allowance_inventory: boolean
  available: boolean
  product_title: DisplayName
  active: boolean
  max: number
  max_quantity: number
  discount_percent: number
  flash_sale_type: FlashSaleType
  used?: number
}

export enum FlashSaleType {
  FixedAmount = 'fixed_amount',
}

export enum DisplayName {
  AOSweaterEssentialFleece = 'Áo Sweater Essential Fleece',
}

export type CreatedAt = {
  $date: DateClass
}

export type DateClass = {
  $numberLong: string
}

export type IconThumbnail = {
  id: string
  src: string
}

export type Image = {
  id: string
  src: string
}

export type ProductOption = {
  title: string
  option_id: string
  option_sizechart: string
  values: string[]
  values_map: ValuesMap[]
}

export type ValuesMap = {
  id: number
  value: string
}

export type OptionsValueClass = {
  title: string
  options_id: string
  options: OptionsValueOption[]
  values: Option1[]
}

export type OptionsValueOption = {
  title: Option1
  slug: string
  label: string
  image: Image[]
}

export enum Option1 {
  XámMelange = 'Xám Melange',
  XámNhạt = 'Xám nhạt',
  Đen = 'Đen',
}

export type Pricing = {
  discount_quantity: number
  discount_price: number
}

export type PricingPolicy = {
  _id: string
  product_id: string
  compare_price: number
  product_label: string
  available: boolean
  coupons_applicable: boolean
  pricing_type: string
  conditions: Condition[]
  product_pricing_id: string
  updated_at: CreatedAt
  created_at: CreatedAt
}

export type Condition = {
  quantity: number
  value: number
}

export type Review = {
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
  option1: Option1
  option2: string
  option3: string
  option4: string
  sync_product: SyncProduct[]
  hide: boolean
  pending: number
  based_product_id: null
  product_stoppage: boolean
  product_visibility: boolean
  product_allow_buy_hidden: boolean
  product_exclude_discount: boolean
  product_apply_allowance_inventory: boolean
  available: boolean
  product_title: DisplayName
}

export type SyncProduct = {
  label: string
  value: string
  nhanh_id: string
  item_name: string
  item_category2: string
  item_category: ItemCategory
}

export enum ItemCategory {
  CasualWear = 'CASUAL - WEAR',
}

export type ProductQueryParams = {
  category?: string
  search?: string
  sort?: string
  page?: number
  limit?: number
}

export type Tags =
  | {
      new: string
    }
  | []
