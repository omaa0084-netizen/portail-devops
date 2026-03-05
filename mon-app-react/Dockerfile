# Utiliser Node.js 22 (plus récent)
FROM node:22 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Construire l'application
RUN npm run build

# Serveur Nginx
FROM nginx:alpine

# Copier les fichiers construits
COPY --from=build /app/dist /usr/share/nginx/html

# Configuration Nginx pour React Router
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]