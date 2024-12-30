import { httpServer } from '@/lib/http/server'
import type { Product } from '@/types/product'

type ProductQueryParams = {
  sort?: string
  random_focus?: boolean
  flatten?: boolean
  limit?: number
  color?: string
  page?: number
  prio?: string
  get_seo_content?: boolean
  [key: string]: unknown
}

type ProductResponse = {
  products: {
    data: Product[]
  }
  is_next_page: boolean
  last_page: number
  current_page: number
  total: number
  htmlSeoContent?: string
  titleDisplay?: string
}

export const productService = {
  getProductsByCollection: async (
    seoAlias: string,
    params?: ProductQueryParams
  ): Promise<ProductResponse> => {
    // Xử lý params
    const queryParams = new URLSearchParams()
    if (params) {
      const {
        sort = 'display_order',
        random_focus = false,
        flatten = true,
        limit = 25,
        color = '',
        get_seo_content = false,
        prio = null,
        ...rest
      } = params

      // Thêm các params cố định
      queryParams.append('sort', sort)
      queryParams.append('random_focus', String(random_focus))
      queryParams.append('flatten', String(flatten))
      queryParams.append('limit', String(limit))
      queryParams.append('color', color)
      queryParams.append('get_seo_content', String(get_seo_content))
      queryParams.append('getall', '0')
      queryParams.append('visibility', 'true')
      if (prio) queryParams.append('prio', prio)

      // Thêm các params khác
      Object.entries(rest).forEach(([key, value]) => {
        if (
          value &&
          ![
            'thumbnail',
            '_',
            'random-focus',
            'random-flatten',
            'show_banner_index',
            'disabled_banner_sale',
          ].includes(key)
        ) {
          queryParams.append(key, String(value))
        }
      })
    }

    try {
      // Sử dụng httpServer thay vì fetch trực tiếp
      const response = await httpServer.get<ProductResponse>(
        `/collections/products/${seoAlias}?${queryParams}`,
        {
          next: { revalidate: 3600 }, // Cache 1 hour
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
          },
        }
      )

      return response
    } catch (error) {
      console.error('Failed to fetch products:', error)
      throw new Error(`Failed to fetch products for collection ${seoAlias}`)
    }
  },
}
