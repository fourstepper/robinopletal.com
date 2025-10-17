# Build stage
FROM node:22-alpine AS build

# Install security updates and dependencies
RUN apk update && apk upgrade --no-cache && \
    adduser -D svelteuser

USER svelteuser
WORKDIR /app

# Copy package files first for better layer caching
COPY --chown=svelteuser:svelteuser package*.json ./

# Install dependencies
RUN npm ci --omit=dev --ignore-scripts && \
    npm cache clean --force

# Copy source code
COPY --chown=svelteuser:svelteuser . .

# Install dev dependencies and build
RUN npm ci --ignore-scripts && \
    npm run build && \
    npm prune --production

# Production stage
FROM node:22-alpine

# Install security updates, dumb-init, and create user
RUN apk update && apk upgrade --no-cache && \
    apk add --no-cache dumb-init && \
    adduser -D svelteuser

USER svelteuser
WORKDIR /app

# Copy built artifacts and production dependencies from build stage
COPY --chown=svelteuser:svelteuser --from=build /app/build ./build
COPY --chown=svelteuser:svelteuser --from=build /app/node_modules ./node_modules
COPY --chown=svelteuser:svelteuser --from=build /app/package.json ./

# Expose port
EXPOSE 8080

# Environment variables
ENV HOST=0.0.0.0 \
    PORT=8080 \
    NODE_ENV=production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:8080', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application with dumb-init
CMD ["dumb-init", "node", "build/index.js"]
