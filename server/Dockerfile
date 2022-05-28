FROM ubuntu:bionic

RUN apt-get update -y && apt-get install -y build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN npm install pm2 -g

WORKDIR /app
COPY package.json .
RUN npm i

COPY . .

# CMD ["node", "server.js"]
ENTRYPOINT ["./entrypoint.sh"]