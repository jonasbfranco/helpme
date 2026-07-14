#!/bin/bash
# apagar arquivos disco externo quando usado no macOS
find . -name "._*" -delete && echo "Arquivos removidos" || echo "Erro ao remover arquivos"