# ─── Stage 1: deps ────────────────────────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile --ignore-scripts

# ─── Stage 2: builder ─────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ─── Stage 3: runner (distroless — smallest possible) ─────────────────────────
FROM gcr.io/distroless/nodejs20-debian12 AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# Distroless runs as nonroot (uid 65532) by default
COPY --from=builder /app/public            ./public
COPY --from=builder /app/.next/standalone  ./
COPY --from=builder /app/.next/static      ./.next/static

EXPOSE 3000

CMD ["server.js"]
