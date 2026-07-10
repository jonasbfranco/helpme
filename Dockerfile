FROM node:24

WORKDIR /app

# Copia apenas os arquivos de dependências primeiro
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
# COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]