FROM node:carbon
WORKDIR /root/docker_test/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]