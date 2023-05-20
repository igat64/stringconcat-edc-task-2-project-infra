FROM node:18-alpine

WORKDIR /srv

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENTRYPOINT ["npm", "run"]
CMD ["start"]
