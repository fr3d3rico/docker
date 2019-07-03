FROM mongo
EXPOSE 27017

FROM node:carbon
WORKDIR /root/docker_test/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080 27017
CMD ["npm", "start"]
