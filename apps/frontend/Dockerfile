FROM node:18-alpine AS base

# Prepare the frontend to run
FROM base AS nothing
RUN apk add --no-cache libc6-compat
WORKDIR /app
