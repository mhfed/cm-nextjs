import { toast } from 'sonner'

export interface ApiResponse<T = unknown> {
  data: T
  message?: string
  status: number
  meta?: {
    page?: number
    limit?: number
    total?: number
  }
}

export interface ErrorResponse {
  message: string
  code?: string
  data?: Record<string, unknown>
  status?: number
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public data?: Record<string, unknown>,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

class ClientHttp {
  private baseURL: string
  private timeout: number
  private defaultHeaders: Record<string, string> = {}

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || ''
    this.timeout = 30000
  }

  private handleError(error: unknown): never {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      toast.error('Không thể kết nối đến server')
      throw new ApiError(0, 'Network Error')
    }

    if (error instanceof Error && error.name === 'AbortError') {
      toast.error('Yêu cầu đã hết thời gian')
      throw new ApiError(408, 'Request Timeout')
    }

    if (error instanceof ApiError) {
      throw error
    }

    toast.error('Đã có lỗi xảy ra')
    throw new ApiError(500, 'Internal Error')
  }

  private async request<T>(url: string, options: RequestInit): Promise<T> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const fullUrl = this.baseURL + url
      const response = await fetch(fullUrl, {
        ...options,
        signal: controller.signal,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...this.defaultHeaders,
          ...options.headers,
        },
      })
      clearTimeout(timeoutId)

      const data = await this.handleResponse<T>(response)
      return data
    } catch (error) {
      clearTimeout(timeoutId)
      return this.handleError(error)
    }
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type')
    const isJson = contentType?.includes('application/json')

    let responseData: ApiResponse<T> | string
    try {
      responseData = isJson ? await response.json() : await response.text()
    } catch (error) {
      console.error('Response parsing error:', error)
      throw new ApiError(500, 'Invalid Response Format')
    }

    if (!response.ok) {
      const errorData = responseData as ErrorResponse
      this.handleHttpError(response.status, errorData.message)
      throw new ApiError(
        response.status,
        errorData.message || 'Unknown Error',
        errorData.data,
        errorData.code
      )
    }

    return (responseData as ApiResponse<T>).data
  }

  private handleHttpError(status: number, message?: string) {
    switch (status) {
      case 400:
        toast.error('Yêu cầu không hợp lệ')
        break
      case 401:
        toast.error('Phiên đăng nhập đã hết hạn')
        break
      case 403:
        toast.error('Bạn không có quyền truy cập')
        break
      case 404:
        toast.error('Không tìm thấy tài nguyên')
        break
      case 422:
        toast.error('Dữ liệu không hợp lệ')
        break
      case 429:
        toast.error('Quá nhiều yêu cầu')
        break
      case 500:
        toast.error('Lỗi hệ thống')
        break
      default:
        toast.error(message || 'Đã có lỗi xảy ra')
    }
  }

  public setAuthToken(token: string): void {
    this.defaultHeaders.Authorization = `Bearer ${token}`
  }

  public clearAuthToken(): void {
    delete this.defaultHeaders.Authorization
  }

  async get<T>(
    url: string,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: 'GET' })
  }

  async post<T, D = unknown>(
    url: string,
    data?: D,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T, D = unknown>(
    url: string,
    data?: D,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async patch<T, D = unknown>(
    url: string,
    data?: D,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(
    url: string,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: 'DELETE' })
  }
}

export const clientHttp = new ClientHttp()
