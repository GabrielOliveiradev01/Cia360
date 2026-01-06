# Como fazer Push para o GitHub

O repositório local está configurado, mas o push precisa ser feito manualmente devido a possíveis problemas de autenticação ou arquivos grandes.

## Opção 1: Push via HTTPS (requer autenticação)

Se você ainda não configurou autenticação no GitHub, você precisará de um Personal Access Token:

1. Vá para: https://github.com/settings/tokens
2. Crie um novo token com permissões `repo`
3. Execute no terminal:

```bash
cd /Users/macbook/Desktop/CIA360
git push -u origin main
```

Quando solicitado, use seu username do GitHub e o token como senha.

## Opção 2: Push via SSH (recomendado)

Se você tem SSH configurado:

1. Altere o remote para SSH:
```bash
cd /Users/macbook/Desktop/CIA360
git remote set-url origin git@github.com:GabrielOliveiradev01/Cia360.git
```

2. Faça o push:
```bash
git push -u origin main
```

## Opção 3: Usar GitHub Desktop ou GitHub CLI

- **GitHub Desktop**: Abra o repositório e clique em "Push origin"
- **GitHub CLI**: Execute `gh repo sync` se você tem o GitHub CLI instalado

## Verificar Status

Para verificar se o push foi bem-sucedido:
```bash
git log --oneline -5
git branch -vv
```

## Nota sobre Arquivos Grandes

Se o erro persistir devido a arquivos grandes (imagens), considere:
- Usar Git LFS (Large File Storage)
- Ou fazer commit apenas dos arquivos de código e adicionar imagens depois

