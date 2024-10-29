FROM node:18 AS build
 
WORKDIR /app
 
COPY package*.json ./
 
RUN rm -rf node_modules package-lock.json
 
RUN npm install --legacy-peer-deps
 
COPY . .
 
RUN npm run build -- --configuration production
 
RUN ls -R /app/dist
 
FROM nginx:alpine
 
COPY nginx.conf /etc/nginx/conf.d/default.conf
 
COPY --from=build /app/dist/CarCompassWeb/ /usr/share/nginx/html
 
EXPOSE 80
 
CMD ["nginx", "-g", "daemon off;"]
