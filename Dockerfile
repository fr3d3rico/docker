FROM node:carbon
WORKDIR /usr/src/app
COPY package*.js ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]