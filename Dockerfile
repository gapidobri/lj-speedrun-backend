FROM node:16-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 1337

ENTRYPOINT [ "npm", "start" ]