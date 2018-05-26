FROM node:9

WORKDIR /app

COPY package.json .
RUN yarn install --silent

COPY . .

RUN rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
