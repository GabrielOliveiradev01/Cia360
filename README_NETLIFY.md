# 🚀 Deploy na Netlify - Guia Rápido

## ✅ Arquivos Criados para Deploy

1. **`netlify.toml`** - Configuração do Netlify
2. **`public/_redirects`** - Redirecionamentos para React Router funcionar
3. **`.nvmrc`** - Versão do Node.js (18)
4. **`.netlifyignore`** - Arquivos a ignorar no deploy
5. **`DEPLOY.md`** - Guia completo de deploy

## 📋 Checklist Pré-Deploy

- [x] Build testado localmente (`npm run build`)
- [x] Arquivo `netlify.toml` configurado
- [x] Arquivo `public/_redirects` criado
- [x] Todas as imagens na pasta `public`
- [x] React Router configurado
- [x] Dependências instaladas

## 🎯 Deploy Rápido (3 passos)

### 1. Conecte ao Git
```bash
git add .
git commit -m "Preparado para deploy Netlify"
git push origin main
```

### 2. No Netlify Dashboard
1. Acesse [app.netlify.com](https://app.netlify.com)
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Conecte seu repositório (GitHub/GitLab/Bitbucket)
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Clique em **"Deploy site"**

### 3. Pronto! 🎉
O site estará no ar em alguns minutos.

## 🔧 Configurações Automáticas

O arquivo `netlify.toml` já configura:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ Redirecionamentos para React Router
- ✅ Versão do Node.js: 18

## 📁 Estrutura de Imagens

Todas as imagens devem estar em `public/`:
- ✅ `public/logo.png` e `public/logo-branca.png`
- ✅ `public/imagemobrigado.jpeg`
- ✅ `public/Nossas obras/` (todas as imagens das obras)
- ✅ `public/Parceiros/` (todos os logos)

## ⚠️ Importante

- As imagens do blog (Unsplash) são URLs externas e funcionarão normalmente
- O arquivo `_redirects` garante que rotas como `/blog` e `/blog/:slug` funcionem
- O build já foi testado e está funcionando ✅

## 🐛 Troubleshooting

**Problema:** Página 404 em rotas
- **Solução:** Verifique se `public/_redirects` existe e contém `/* /index.html 200`

**Problema:** Imagens não carregam
- **Solução:** Verifique se os caminhos começam com `/` (ex: `/logo.png`)

**Problema:** Build falha
- **Solução:** Verifique os logs no Netlify e execute `npm install` localmente

## 📞 Suporte

Se tiver problemas, verifique:
1. Logs de build no Netlify Dashboard
2. Console do navegador para erros
3. Arquivo `DEPLOY.md` para instruções detalhadas



