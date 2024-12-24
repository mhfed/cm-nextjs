export type ApiResponse<T> = {
  data: T
  message?: string
  code?: number
}

export type ErrorResponse = {
  message: string
  code?: number
  data?: unknown
}

export type PaginatedResponse<T> = ApiResponse<{
  items: T[]
  total: number
  page: number
  limit: number
}>
