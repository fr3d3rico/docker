FROM node:carbon
WORKDIR /root/src/app
COPY package*.js ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]