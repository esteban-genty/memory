# Build de l'application
FROM node:18 AS build

WORKDIR /app

# Copie des fichiers package.json / lock pour installation des deps
COPY package*.json ./
RUN npm install

# Copie du reste du projet
COPY . .

# Build de l'app Vite
RUN npm run build

# Serveur NGINX pour la version production
FROM nginx:alpine

# Copie le build dans le dossier de NGINX
COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
