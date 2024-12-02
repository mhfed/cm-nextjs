# Base stage for both dev and prod
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# Development stage
FROM base AS dev
RUN npm install
COPY . .
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "run", "dev"]

# Builder stage for production
FROM base AS builder
RUN npm install
# Tạo thư mục public nếu chưa có
RUN mkdir -p public
COPY . .
RUN npm run build

# Production stage
FROM base AS prod
ENV NODE_ENV=production
# Tạo thư mục cần thiết
RUN mkdir -p public
RUN mkdir -p .next
# Copy package files và cài đặt dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --production
# Copy các file build
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
EXPOSE 4000
ENV PORT=4000
CMD ["npm", "start"]