declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_SITE_URL: string;
      API_URL: string;
      JWT_SECRET: string;
      NODE_ENV: 'development' | 'production' | 'test';
      // Thêm các env khác vào đây
    }
  }
}

export {};
