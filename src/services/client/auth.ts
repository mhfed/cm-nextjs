import { http } from '../http';
import type { LoginDto, RegisterDto, AuthResponse } from '@/types/auth';

export const authService = {
  login: async (data: LoginDto) => {
    const response = await http.post<AuthResponse>('/auth/login', data);
    // Có thể xử lý token ở đây (lưu vào localStorage, cookie...)
    return response;
  },

  register: async (data: RegisterDto) => {
    return http.post<AuthResponse>('/auth/register', data);
  },

  logout: async () => {
    // Xử lý clear token
    return http.post('/auth/logout');
  },

  forgotPassword: async (email: string) => {
    return http.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, password: string) => {
    return http.post('/auth/reset-password', { token, password });
  },
};
