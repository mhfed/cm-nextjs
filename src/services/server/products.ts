import type { Product, ProductQueryParams } from '@/types/product'

export const productService = {
  getProducts: async (params?: ProductQueryParams) => {
    const searchParams = new URLSearchParams()
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) searchParams.append(key, String(value))
      })
    }

    const response = await fetch(
      `${process.env.API_URL}/products?${searchParams}`,
      {
        next: { revalidate: 3600 }, // Cache 1 hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    return response.json() as Promise<Product[]>
  },

  getProductById: async (id: string) => {
    const response = await fetch(`${process.env.API_URL}/products/${id}`, {
      next: { revalidate: 3600 },
    })
    if (!response.ok) return null
    return response.json() as Promise<Product>
  },
}
