#!/bin/bash

# Script para configurar Git e fazer push

echo "=== Configurando Git ==="
echo ""

# Configurar email e nome
git config user.email "gabriel_19@yahoo.com"
git config user.name "GabrielOliveiradev01"

echo "✅ Email e nome configurados"
echo ""

# Verificar remote
echo "=== Remote atual ==="
git remote -v
echo ""

# Perguntar qual método usar
echo "Escolha o método:"
echo "1) SSH (precisa configurar chave SSH primeiro)"
echo "2) HTTPS com Token (mais rápido)"
read -p "Digite 1 ou 2: " metodo

if [ "$metodo" = "1" ]; then
    echo ""
    echo "=== Configurando SSH ==="
    echo "1. Gerando chave SSH..."
    ssh-keygen -t ed25519 -C "gabriel_19@yahoo.com" -f ~/.ssh/id_ed25519 -N ""
    
    echo ""
    echo "2. Sua chave pública é:"
    echo "---"
    cat ~/.ssh/id_ed25519.pub
    echo "---"
    echo ""
    echo "3. Copie a chave acima e adicione em: https://github.com/settings/keys"
    echo "4. Depois pressione Enter para continuar..."
    read
    
    echo "5. Testando conexão SSH..."
    ssh -T git@github.com
    
    echo ""
    echo "6. Fazendo push..."
    git push -u origin main
    
elif [ "$metodo" = "2" ]; then
    echo ""
    echo "=== Configurando HTTPS ==="
    git remote set-url origin https://github.com/GabrielOliveiradev01/Cia360.git
    
    echo "✅ Remote alterado para HTTPS"
    echo ""
    echo "Agora você precisa:"
    echo "1. Criar um Personal Access Token em: https://github.com/settings/tokens"
    echo "2. Quando pedir senha, use o TOKEN (não sua senha)"
    echo ""
    echo "Fazendo push..."
    git push -u origin main
else
    echo "Opção inválida!"
fi

echo ""
echo "=== Verificando resultado ==="
git branch -vv

