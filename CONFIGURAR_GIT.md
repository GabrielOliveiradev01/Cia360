# Configurar Git Push - Passo a Passo

## Opção 1: Configurar SSH (Recomendado)

### Passo 1: Gerar chave SSH
Execute no terminal:

```bash
ssh-keygen -t ed25519 -C "gabriel_19@yahoo.com"
```

- Pressione **Enter** para aceitar o local padrão (`~/.ssh/id_ed25519`)
- Escolha uma senha ou pressione **Enter** para deixar em branco
- Pressione **Enter** novamente para confirmar

### Passo 2: Copiar chave pública
Execute:

```bash
cat ~/.ssh/id_ed25519.pub
```

**COPIE** toda a saída (começa com `ssh-ed25519` e termina com `gabriel_19@yahoo.com`)

### Passo 3: Adicionar no GitHub
1. Acesse: https://github.com/settings/keys
2. Clique em **"New SSH key"**
3. **Title**: Digite um nome (ex: "MacBook Pro")
4. **Key**: Cole a chave que você copiou
5. Clique em **"Add SSH key"**

### Passo 4: Testar conexão
Execute:

```bash
ssh -T git@github.com
```

Se aparecer algo como: `Hi GabrielOliveiradev01! You've successfully authenticated...` ✅

### Passo 5: Fazer push
```bash
cd /Users/macbook/Desktop/CIA360
git push -u origin main
```

---

## Opção 2: Usar HTTPS com Token (Mais Rápido)

### Passo 1: Mudar para HTTPS
```bash
cd /Users/macbook/Desktop/CIA360
git remote set-url origin https://github.com/GabrielOliveiradev01/Cia360.git
```

### Passo 2: Criar Personal Access Token
1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: Digite "CIA360 Project"
4. **Expiration**: Escolha um prazo (ex: 90 dias)
5. Marque o escopo: **`repo`** (todas as opções de repo)
6. Clique em **"Generate token"**
7. **COPIE O TOKEN** (você só verá ele uma vez!)

### Passo 3: Fazer push
```bash
git push -u origin main
```

Quando pedir:
- **Username**: `GabrielOliveiradev01`
- **Password**: Cole o **TOKEN** (não sua senha do GitHub!)

---

## Verificar se funcionou

```bash
git branch -vv
```

Deve mostrar algo como:
```
* main 662152a [origin/main] Atualização: novas logos...
```

---

## Se ainda não funcionar

Execute estes comandos para verificar:

```bash
# Ver remote configurado
git remote -v

# Ver status
git status

# Ver commits locais
git log --oneline -5
```

