FROM node:20-alpine as builder

ENV NODE_ENV build

USER node

# WORKDIR /home/node/core
# COPY core/*.json ./
# RUN npm ci

WORKDIR /home/node/backend

COPY backend/*.json ./
RUN npm ci

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist/ ./dist/

CMD ["node", "dist/backend/src/main.js"]