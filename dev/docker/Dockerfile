FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD ["yarn", "docs:dev", "-p", "4000"]
