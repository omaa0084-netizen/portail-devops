# Dockerfile pour Backend (à mettre dans BACKEND/)

FROM node:18

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code backend
COPY . .

# Exposer le port (celui de ton server.js)
EXPOSE 3001

# Lancer le serveur
CMD ["node", "server.js"]