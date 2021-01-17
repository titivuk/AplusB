FROM node:14.15.3

# Create Directory for the Container
WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src

RUN npm ci --quiet && npm run build



FROM node:14.15.3-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

## We just need the build to execute the command
COPY --from=0 /usr/src/app/dist ./dist

CMD [ "node", "/app/dist/index.js" ]
EXPOSE 3333