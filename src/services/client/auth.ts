import { clientHttp } from '@/services/client/http';
import type { LoginDto, RegisterDto, AuthResponse } from '@/types/auth';

export const authService = {
  login: async (data: LoginDto) => {
    const response = await clientHttp.post<AuthResponse>('/auth/login', data);
    // Có thể xử lý token ở đây (lưu vào localStorage, cookie...)
    return response;
  },

  register: async (data: RegisterDto) => {
    return clientHttp.post<AuthResponse>('/auth/register', data);
  },

  logout: async () => {
    // Xử lý clear token
    return clientHttp.post('/auth/logout');
  },

  forgotPassword: async (email: string) => {
    return clientHttp.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, password: string) => {
    return clientHttp.post('/auth/reset-password', { token, password });
  },
};
