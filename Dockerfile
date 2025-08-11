FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production --base-href ./

FROM nginx:alpine
# Copia los archivos al root de Nginx (no en subdirectorio)
COPY --from=builder /app/dist/feature-dashboard/browser /usr/share/nginx/html
# Elimina archivos por defecto de Nginx
RUN rm /usr/share/nginx/html/{50x.html,index.html}
# Copia configuración personalizada
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
