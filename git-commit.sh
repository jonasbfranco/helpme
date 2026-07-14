#!/bin/bash

git add .
git status

echo
echo "Escolha o tipo do commit:"
echo "1) feat"
echo "2) fix"
echo "3) docs"
echo "4) refactor"
echo "5) chore"

read -p "Opção: " opcao

case $opcao in
    1) tipo="feat" ;;
    2) tipo="fix" ;;
    3) tipo="docs" ;;
    4) tipo="refactor" ;;
    5) tipo="chore" ;;
    *) tipo="chore" ;;
esac

read -p "Mensagem: " mensagem

git commit -m "$tipo: $mensagem"

git push -u origin main

echo
echo "✅ Commit enviado com sucesso!"