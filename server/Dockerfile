FROM node:20-alpine

WORKDIR /server

COPY package.json .

COPY . .

EXPOSE 3000

RUN rm -rf node_modules

RUN npm install pm2 -g

RUN npm install

CMD ["pm2-runtime", "index.js"]