FROM node:16-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --network-timeout 1000000

COPY . .

RUN yarn build

EXPOSE 1337

ENTRYPOINT [ "yarn", "start" ]