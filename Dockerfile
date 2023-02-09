# Elejimos la imagen de node
FROM node:19.2-alpine3.16

RUN npm install -g nodemon
RUN npm install -g typescript
RUN npm install -g ts-node

#Entramos en la carpeta /app
WORKDIR /app

# Copiamos el package.json
COPY package*.json ./

# Copiamos el resto de archivos
COPY . .

# Instalamos las dependencias de producción
RUN npm install

CMD ["npm", "run", "dev"]