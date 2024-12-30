````markdown
# API Documentation

## Endpoints

- /api/products
- /api/cart
- /api/auth

## Authentication

- JWT tokens
- Refresh token flow
- Error handling

## Response Format

```typescript
interface ApiResponse<T> {
  data: T
  error?: string
  meta?: {
    page: number
    limit: number
    total: number
  }
}
```
````
