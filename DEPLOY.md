# Deploy na Netlify

## Pré-requisitos

1. Conta no Netlify (gratuita)
2. Repositório Git (GitHub, GitLab ou Bitbucket)

## Passos para Deploy

### Opção 1: Deploy via Netlify CLI

1. Instale o Netlify CLI globalmente:
```bash
npm install -g netlify-cli
```

2. Faça login no Netlify:
```bash
netlify login
```

3. Inicialize o site:
```bash
netlify init
```

4. Faça o build e deploy:
```bash
npm run build
netlify deploy --prod
```

### Opção 2: Deploy via GitHub/GitLab (Recomendado)

1. **Faça commit e push do código:**
```bash
git add .
git commit -m "Preparado para deploy Netlify"
git push origin main
```

2. **No Netlify Dashboard:**
   - Acesse [app.netlify.com](https://app.netlify.com)
   - Clique em "Add new site" > "Import an existing project"
   - Conecte seu repositório Git
   - Configure:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Clique em "Deploy site"

3. **Configurações automáticas:**
   - O arquivo `netlify.toml` já está configurado
   - O arquivo `public/_redirects` garante que o React Router funcione corretamente

## Configurações Importantes

### Variáveis de Ambiente (se necessário)
Se precisar adicionar variáveis de ambiente:
- Vá em Site settings > Environment variables
- Adicione as variáveis necessárias

### Domínio Personalizado
- Vá em Site settings > Domain management
- Adicione seu domínio personalizado

## Verificações Pós-Deploy

1. ✅ Teste todas as rotas (`/`, `/blog`, `/blog/:slug`)
2. ✅ Verifique se as imagens estão carregando
3. ✅ Teste o scroll suave e navegação
4. ✅ Verifique responsividade mobile

## Troubleshooting

### Problema: Página 404 ao acessar rotas diretamente
**Solução:** O arquivo `public/_redirects` já resolve isso. Se persistir, verifique se o arquivo está na pasta `public`.

### Problema: Imagens não carregam
**Solução:** Verifique se todas as imagens estão na pasta `public` e os caminhos começam com `/`.

### Problema: Build falha
**Solução:** 
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar
- Verifique os logs de build no Netlify

## Estrutura de Arquivos para Deploy

```
CIA360/
├── netlify.toml          # Configuração do Netlify
├── public/
│   ├── _redirects        # Redirecionamentos para React Router
│   ├── logo.png
│   ├── logo-branca.png
│   ├── imagemobrigado.jpeg
│   ├── Nossas obras/     # Imagens das obras
│   └── Parceiros/        # Logos dos parceiros
├── src/
└── package.json
```

## Comandos Úteis

```bash
# Build local para testar
npm run build

# Preview do build local
npm run preview

# Deploy manual (produção)
netlify deploy --prod

# Deploy manual (preview)
netlify deploy
```

