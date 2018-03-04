FROM node:carbon
WORKDIR /root/docker_test/src/app
COPY package*.js .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]