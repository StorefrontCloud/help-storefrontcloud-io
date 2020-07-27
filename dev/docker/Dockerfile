FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN yarn upgrade
RUN yarn install

CMD ["yarn", "docs:dev", "-p", "4000"]
