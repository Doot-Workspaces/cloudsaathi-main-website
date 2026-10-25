FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
COPY server.production.mjs ./
ENV NODE_ENV=production PORT=3000
EXPOSE 3000
CMD ["node", "server.production.mjs"]
