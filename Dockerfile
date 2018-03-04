FROM node:carbon
WORKDIR /root/docker_test/src/app
COPY /root/docker_test/package*.js ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]