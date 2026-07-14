#!/bin/bash

git add .
git status

echo
echo "Escolha o tipo do commit:"
echo "1) Initial commit 🎉 :tada:"
echo "2) Version tag    🔖 :bookmark:"
echo "3) New feature    ✨ :sparkles:"
echo "4) Bugfix         🐛 :bug:"
echo "5) feat"
echo "6) fix"
echo "7) docs"
echo "8) refactor"
echo "9) chore"

read -p "Opção: " opcao

case $opcao in
    1) tipo=":tada:";;
    2) tipo=":bookmark:";;
    3) tipo=":sparkles:";;
    4) tipo=":bug:";;
    5) tipo="feat" ;;
    6) tipo="fix" ;;
    7) tipo="docs" ;;
    8) tipo="refactor" ;;
    9) tipo="chore" ;;
    *) tipo="chore" ;;
esac

read -p "Mensagem: " mensagem

git commit -m "$tipo: $mensagem"

git push -u origin main

echo
echo "✅ Commit enviado com sucesso!"
