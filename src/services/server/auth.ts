import { cookies } from 'next/headers';
import type { AuthResponse } from '@/types/auth';

export const authService = {
  validateToken: async (token: string) => {
    const response = await fetch(`${process.env.API_URL}/auth/validate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });
    return response.json() as Promise<AuthResponse>;
  },

  // Các hàm xử lý auth khác ở server-side
  refreshToken: async () => {
    const cookieStore = cookies();
    const refreshToken = cookieStore.get('refresh_token');

    if (!refreshToken) {
      throw new Error('No refresh token');
    }

    const response = await fetch(`${process.env.API_URL}/auth/refresh`, {
      headers: {
        Cookie: `refresh_token=${refreshToken.value}`,
      },
    });
    return response.json() as Promise<AuthResponse>;
  },
};
