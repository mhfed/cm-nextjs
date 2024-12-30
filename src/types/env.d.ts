declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Public ENV
      NEXT_PUBLIC_APP_URL: string
      NEXT_PUBLIC_SITE_URL: string
      NEXT_PUBLIC_API_URL: string

      // Media URLs
      NEXT_PUBLIC_MEDIA_URL: string
      NEXT_PUBLIC_MEDIA_CDN_URL: string
      NEXT_PUBLIC_MEDIA_MANAGER_URL: string
      NEXT_PUBLIC_MEDIA_CLOUDFLARE: string
      // Feature Flags
      NEXT_PUBLIC_DEBUG: string
      NEXT_PUBLIC_ENABLE_CART: string
      NEXT_PUBLIC_ENABLE_SEARCH: string
      NEXT_PUBLIC_CART_LAYOUT: string
      NEXT_PUBLIC_SHOW_PRODUCT_BELOW_CART: string
      NEXT_PUBLIC_CANONICAL_URL: string

      // Campaign Flags
      NEXT_PUBLIC_CAMP_DOUBLE_DAY_ENABLED: string
      NEXT_PUBLIC_START_CAMPAIGN: string
      NEXT_PUBLIC_END_CAMPAIGN: string

      // Analytics
      NEXT_PUBLIC_GOOGLE_PLACES_API_KEY: string

      // Private ENV (từ .env.local)
      APP_ENV: string
      APP_KEY: string
      APP_DEBUG: string
      APP_LOG_LEVEL: string

      // API URLs
      API_URL: string
      API_URL_V2: string
      API_URL_V3: string
      API_URL_V4: string
      API_TOKEN: string

      // Redis
      REDIS_HOST: string
      REDIS_PASSWORD: string
      REDIS_PORT: string

      // Mail
      MAIL_HOST: string
      MAIL_PORT: string
      MAIL_USERNAME: string
      MAIL_PASSWORD: string
      MAIL_FROM_ADDRESS: string

      // Payment
      VNP_TMNCODE: string
      VNP_HASHSECRET: string
      VNP_URL: string

      // Other configs
      PAGINATION: string
      TOKEN_PRODUCT_PREVIEW: string
      SECRET_KEY_CHAIPAY: string
      GOONG_ACCESS_TOKEN: string

      // Feature flags (server-side)
      ENABLE_PRODUCT_FEEDBACK: string
      USE_SMS: string
      PAYMENT_FLEX: string
      TIME_OUT_PAYMENT_FLEX: string
      TIME_OUT_PAYMENT_FLEX_CONFIRM: string

      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

export {}
