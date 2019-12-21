FROM node:12.9.1-alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN npm install -g yarn && yarn install

COPY . /app

RUN yarn build:stg

CMD yarn start