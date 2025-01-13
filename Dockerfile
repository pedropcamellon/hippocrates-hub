FROM node:20-alpine

RUN apk add --no-cache openssl

WORKDIR /app

# Install dependencies
# COPY package.json package-lock.json ./
COPY package.json pnpm-lock.yaml ./
COPY next.config.js tailwind.config.ts tsconfig.json ./
RUN pnpm install

# Locales
COPY messages ./messages

# Prisma setup
COPY .env.docker ./.env

COPY prisma ./prisma
RUN npx prisma generate
RUN npx prisma migrate dev --name init

CMD ["pnpm", "run", "dev"]
