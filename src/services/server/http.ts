import { headers } from 'next/headers';

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: number;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

class HttpServer {
  private baseURL: string;

  constructor() {
    this.baseURL = process.env.API_URL || '';
  }

  private async getHeaders(): Promise<HeadersInit> {
    const headersList = headers();
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Forward important headers
      cookie: headersList.get('cookie') || '',
      'user-agent': headersList.get('user-agent') || '',
      'x-forwarded-for': headersList.get('x-forwarded-for') || '',
    };
  }

  private async request<T>(url: string, options: RequestInit = {}): Promise<T> {
    const fullUrl = this.baseURL + url;
    const headers = await this.getHeaders();

    const response = await fetch(fullUrl, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
      cache: options.cache || 'force-cache',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data as T;
  }

  async get<T>(
    url: string,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: 'GET' });
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
    });
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
    });
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
    });
  }

  async delete<T>(
    url: string,
    options: Omit<RequestInit, 'body' | 'method'> = {}
  ): Promise<T> {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }
}

export const httpServer = new HttpServer();
