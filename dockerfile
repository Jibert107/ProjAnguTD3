FROM node:20.18.0 as build

WORKDIR /ProjAnguTD3

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build ProjAnguTD3/dist/tdangular/browser /usr/share/nginx/html

EXPOSE 80