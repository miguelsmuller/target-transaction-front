#!/bin/bash

# Encontra o arquivo JavaScript que começa com "main" no diretório
mainFileName="$(ls /usr/share/nginx/html/main*.js)"

# Substitui a variável de ambiente $URL_IMAGEM no arquivo
envsubst '$API_URL' < "${mainFileName}" > main.tmp

# Renomeia o arquivo temporário de volta para o nome original
mv main.tmp "${mainFileName}"
