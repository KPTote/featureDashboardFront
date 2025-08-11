# ------------- ETAPA 1: Construcción (builder) -------------
FROM node:18-alpine AS builder

# 1. Configura el directorio de trabajo
WORKDIR /app

# 2. Copia archivos de configuración (package.json, etc.)
COPY package*.json ./

# 3. Instala dependencias (incluyendo devDependencies)
RUN npm install

# 4. Copia todo el código fuente
COPY . .

# 5. Construye la aplicación para producción
RUN npm run build -- --configuration=production

# ------------- ETAPA 2: Servidor web (Nginx) -------------
FROM nginx:alpine

# 1. Copia los archivos construidos desde la etapa builder
COPY --from=builder /app/dist/feature-dashboard /usr/share/nginx/html

# 2. Copia configuración personalizada de Nginx (opcional)
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

# 3. Expone el puerto 80 (HTTP)
EXPOSE 80

# 4. Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
