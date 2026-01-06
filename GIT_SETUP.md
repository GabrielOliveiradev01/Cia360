# Configuração do Git e Push para GitHub

Execute os seguintes comandos no terminal para fazer push do código para o repositório:

## Passo a Passo

### 1. Inicializar o repositório Git
```bash
cd /Users/macbook/Desktop/CIA360
git init
```

### 2. Adicionar o remote do GitHub
```bash
git remote add origin https://github.com/GabrielOliveiradev01/Cia360.git
```

### 3. Adicionar todos os arquivos
```bash
git add .
```

### 4. Fazer o commit inicial
```bash
git commit -m "Initial commit: CIA360 landing page with blog"
```

### 5. Renomear branch para main
```bash
git branch -M main
```

### 6. Fazer push para o GitHub
```bash
git push -u origin main
```

## Nota Importante

Se o repositório no GitHub já tiver conteúdo, você pode precisar fazer pull primeiro:

```bash
git pull origin main --allow-unrelated-histories
```

Ou, se preferir forçar o push (cuidado: isso sobrescreve o conteúdo remoto):

```bash
git push -u origin main --force
```

## Verificar Status

Para verificar o status do repositório:
```bash
git status
```

Para verificar o remote configurado:
```bash
git remote -v
```

