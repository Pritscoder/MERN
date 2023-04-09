FROM node:14.17.6
WORKDIR /backs
COPY . .
RUN npm install
WORKDIR /backs/src
EXPOSE 3001
CMD node index.js