# Coolmate E-commerce Frontend 2025

Version 2025 của website coolmate.me được xây dựng với Next.js 14, TypeScript và Tailwind CSS cùng các công nghệ mới nhất...

## 🚀 Tính năng chính

- 🛍️ **E-commerce Features**

  - Quản lý giỏ hàng với Zustand
  - Product Gallery với Embla Carousel
  - Responsive Navigation Menu
  - User Authentication
  - Rewards & Membership System
  - Tìm kiếm sản phẩm
  - Filters và Sorting
  - Checkout Process
  - ... updating

- 💅 **UI/UX**
  - Shadcn/ui Components
  - Tailwind CSS cho styling
  - Responsive Design (Desktop/Mobile)
  - Custom Carousel Components
  - Loading States & Animations
  - Toast Notifications
  - Form Validation
  - ... updating

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn/ui
- **State Management:** Zustand
- **Carousel:** Embla Carousel
- **Icons:** Lucide Icons
- **Container:** Docker
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **HTTP Client:** Axios
- **Testing:** Jest & React Testing Library

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js 20.x
- Docker và Docker Compose
- Git

### Sử dụng Docker (Recommended)

```bash
# Clone repository
git clone <repository-url>
cd coolmate-frontend

# Development Mode
docker compose --profile dev up --build

# Production Mode
docker compose --profile prod up --build

# Chạy ở chế độ detached
docker compose --profile dev up -d  # cho development
docker compose --profile prod up -d # cho production

# Xem logs
docker compose --profile dev logs -f
docker compose --profile prod logs -f

# Dừng containers
docker compose --profile dev down
docker compose --profile prod down
```

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start

# Run tests
npm test

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── product/           # Product pages
│   ├── cart/              # Cart pages
│   └── layout.tsx         # Root layout
├── components/
│   ├── extension/         # Extended components (Carousel etc.)
│   ├── layout/           # Layout components
│   │   ├── navigation-menu.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── cart-mini.tsx
│   │   └── user-menu.tsx
│   ├── shared/           # Shared components
│   └── ui/               # UI components (shadcn)
├── lib/                   # Utilities
├── store/                # State management
│   ├── cart-store.ts
│   └── user-store.ts
├── types/                # TypeScript types
└── styles/               # Global styles
```

## 🧩 Key Components

### Navigation

- **MainNav**: Desktop navigation menu với mega menu
- **MobileNav**: Mobile navigation với drawer
- **CartMini**: Mini cart drawer
- **UserMenu**: User profile và authentication menu

### Product

- **ProductGallery**: Image gallery với thumbnails
- **ProductCarousel**: Carousel cho related products
- **ProductCard**: Card hiển thị sản phẩm

### Cart

- **CartMini**: Mini cart preview
- **CartSummary**: Cart totals và checkout
- **CartList**: List of cart items

## 📝 Coding Guidelines

### Quy tắc đặt tên

- Tên Components/Functions/Hooks/Variables: camelCase (VD: function userProfile)
- Đối với Constants: UPPER_SNAKE_CASE (VD: AUTH_TYPES)
- Tên Files/Folders: kebab-case (VD: auth-service.ts)

### TypeScript

- Sử dụng strict mode
- ❗ Luôn định nghĩa type/interface cho props, state và API responses
- ✅ Export types/interfaces trong file riêng (types/)
- ➡️ Sử dụng type inference khi có thể
- ⚠️ Tránh sử dụng any, trừ khi quá bế tắc

### Components

- Sử dụng functional components
- Mỗi component một file, một file không nên dài quá 300 dòng
- Props interface đặt ở đầu file cho mỗi component
- Tách logic phức tạp vào custom hooks
- Mỗi component một file riêng

### Styling

- Luôn luôn sử dụng <strong>tailwindcss</strong> cho styles, không style inline hay các cách khác, sẽ khó maintain và tăng bundle size
- Tuân thủ design system
- Responsive first approach (mobile first) ưu tiên làm mobile trước
- Tái sử dụng utility classes

### State Management

- Zustand cho global state
- React Query cho server state
- Local state cho UI-only state

## 🔧 Development Tools

### VSCode Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- PostCSS Language Support
- GitLens
- Error Lens

### Chrome Extensions

- React Developer Tools
- Redux DevTools
- Responsive Viewer
- Web Vitals

## 🚀 Deployment

### Production Build

```bash
# Build production
npm run build

# Start production server
npm start
```

### Docker Production

```bash
docker compose --profile prod up --build
```

## 👥 Team Workflow

### Git Workflow (dùng git rebase không dùng git merge)

1. Tạo nhánh tính năng từ develop
2. Commit thay đổi theo quy ước conventional commits
3. Tạo Pull Request vào develop
4. Review code
5. Merge vào develop
6. Triển khai lên môi trường staging
7. Merge vào main để đưa lên production

### Code Review Process

- Yêu cầu review trước khi merge
- Tuân thủ template Pull Request
- Kiểm tra ảnh hưởng về hiệu năng
- Xác nhận thiết kế responsive
- Kiểm tra các trường hợp đặc biệt

### Communication

- Họp standup hàng ngày
- Họp đồng bộ kỹ thuật hàng tuần
- Thảo luận review code trong các PR
- Tài liệu kỹ thuật trong Notion

## 🧪 Testing

### Unit Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

### E2E Testing (chưa cần ngay, cần nghiên cứu thêm)

```bash
# Run Cypress tests
npm run cypress

# Open Cypress UI
npm run cypress:open
```

## 📈 Performance Monitoring (sử dụng self hosting)

- Google Analytics
- Error tracking với Sentry
- Performance monitoring với Web Vitals

## 📚 Documentation

Chi tiết về components và API có thể được tìm thấy trong:

- `/docs` - Technical documentation
- Storybook - Component documentation

## 🤝 Contributing

1. Fork repository
2. Tạo nhánh tính năng (`git checkout -b feature/tinh-nang-moi`)
3. Commit thay đổi (`git commit -m 'feat: Thêm tính năng mới'`)
4. Đẩy lên nhánh (`git push origin feature/tinh-nang-moi`)
5. Tạo Merge Request

## 📄 License

MIT License - see LICENSE.md

## 👏 Credits

- Design System: [Shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide Icons](https://lucide.dev/)
- Carousel: [Embla Carousel](https://www.embla-carousel.com/)
