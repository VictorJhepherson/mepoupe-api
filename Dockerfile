FROM node:15.12.0 AS build

WORKDIR /usr/app
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]
