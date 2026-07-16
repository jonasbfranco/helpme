#!/bin/bash

docker compose up -d && echo "Docker sendo executado" || echo "Erro ao executar docker"

echo "Aguardando o PostgreSQL..."

until docker compose exec postgres pg_isready -U docker >/dev/null 2>&1; do
    sleep 2
done

echo "PostgreSQL pronto."

docker compose exec node npx prisma migrate dev


## Ou

## Se você ainda está modelando o banco e não quer criar migrations toda hora:

## ## docker compose exec node npx prisma db push

## Ele apenas sincroniza o banco com o schema.

## Depois gere o client:

##  ## docker compose exec node npx prisma generate