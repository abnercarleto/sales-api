FROM node:9

WORKDIR /app

COPY package.json .
RUN npm install --quiet

COPY . .
