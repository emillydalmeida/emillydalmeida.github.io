#!/bin/bash

# Script para deploy manual no GitHub Pages
echo "🚀 Iniciando deploy manual..."

# Build do projeto
echo "📦 Building project..."
npm run build

# Verificar se a pasta out foi criada
if [ ! -d "out" ]; then
  echo "❌ Erro: Pasta 'out' não foi criada. Verifique o build."
  exit 1
fi

# Criar branch gh-pages se não existir
git checkout --orphan gh-pages 2>/dev/null || git checkout gh-pages

# Limpar branch gh-pages
git rm -rf . 2>/dev/null || true

# Copiar arquivos da pasta out
cp -r out/* .
cp out/.nojekyll . 2>/dev/null || echo "" > .nojekyll

# Fazer commit e push
git add .
git commit -m "Deploy: $(date)"
git push origin gh-pages --force

# Voltar para main
git checkout main

echo "✅ Deploy concluído! Visite: https://emillydalmeida.github.io"
