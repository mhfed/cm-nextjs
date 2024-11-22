# Coolmate Next.js Project

Clone của website CM được xây dựng bằng Next.js và Docker.

## Yêu cầu hệ thống

- Docker và Docker Compose
- Node.js 20.x (nếu muốn chạy không qua Docker)

## Chạy ứng dụng với Docker

1. **Clone project**
```bash
git clone <repository-url>
cd coolmate-nextjs
```

2. **Khởi động với Docker**
```bash
# Build và chạy container
docker-compose up --build

# Hoặc chạy ở chế độ detached
docker-compose up -d
```

Ứng dụng sẽ chạy tại [http://localhost:3000](http://localhost:3000)

3. **Các lệnh Docker hữu ích**
```bash
# Xem logs
docker-compose logs -f

# Dừng container
docker-compose down

# Xóa container và volume
docker-compose down -v
```

## Docker Commands

```bash
# Development Mode
docker compose --profile dev up --build

# Production Mode
docker compose --profile prod up --build

# Chạy ở chế độ detached
docker compose --profile dev up -d  # cho development
docker compose --profile prod up -d # cho production

# Xem logs
docker compose --profile dev logs -f  # cho development
docker compose --profile prod logs -f # cho production

# Dừng containers
docker compose --profile dev down
docker compose --profile prod down
```

## Chạy ứng dụng không dùng Docker

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build và chạy production
npm run build
npm start
```

## Cấu trúc project

```
.
├── src/
│   ├── app/          # Next.js app router
│   ├── components/   # React components
│   └── ...
├── public/           # Static files
├── Dockerfile        # Docker configuration
├── docker-compose.yml
└── ...
```

## Công nghệ sử dụng

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)

## Tác giả

- Tên tác giả
- Email/Liên hệ

## License

MIT
