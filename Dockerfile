FROM node:21-alpine
WORKDIR /portfolio
COPY package*.json ./
RUN ls
RUN npm -v
RUN npm install
COPY . .
RUN ls
RUN npm run build
EXPOSE 443
ENTRYPOINT ["npm", "start", "--", "-p", "443"]