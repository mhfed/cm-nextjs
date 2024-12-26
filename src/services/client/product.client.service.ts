import { clientHttp } from '@/lib/http/client'
import { PaginatedResponse } from '@/types/api'
import type { Product } from '@/types/product'

export const productService = {
  getProducts: async (params?: {
    page?: number
    limit?: number
    category?: string
  }) => {
    return clientHttp.get<PaginatedResponse<Product>>('/products', params)
  },

  getProductById: async (id: string) => {
    return clientHttp.get<Product>(`/products/${id}`)
  },

  //   searchProducts: async (query: string) => {
  //     return clientHttp.get<Product[]>('/products/search', {
  //       params: { q: query },
  //     });
  //   },
}
