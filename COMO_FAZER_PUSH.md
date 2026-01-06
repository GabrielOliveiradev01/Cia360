# Como Fazer Push para o GitHub

## ✅ Solução: Usar HTTPS com Personal Access Token

O remote foi alterado para HTTPS. Agora você precisa criar um **Personal Access Token** no GitHub.

### Passo 1: Criar Personal Access Token

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome para o token (ex: "CIA360 Project")
4. Selecione o escopo: **`repo`** (marca todas as opções de repo)
5. Clique em **"Generate token"**
6. **COPIE O TOKEN** (você só verá ele uma vez!)

### Passo 2: Fazer Push

Execute no terminal:

```bash
cd /Users/macbook/Desktop/CIA360
git push -u origin main
```

Quando pedir:
- **Username**: Seu username do GitHub (ex: `GabrielOliveiradev01`)
- **Password**: Cole o **Personal Access Token** (não sua senha!)

### Passo 3: Verificar se funcionou

```bash
git branch -vv
# Deve mostrar: * main 662152a [origin/main] Atualização: novas logos...
```

---

## 🔐 Alternativa: Configurar SSH (Opcional)

Se preferir usar SSH no futuro:

### 1. Gerar chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
# Pressione Enter para aceitar o local padrão
# Escolha uma senha ou deixe em branco
```

### 2. Copiar chave pública:
```bash
cat ~/.ssh/id_ed25519.pub
# Copie toda a saída
```

### 3. Adicionar no GitHub:
- Acesse: https://github.com/settings/keys
- Clique em **"New SSH key"**
- Cole a chave pública
- Salve

### 4. Testar:
```bash
ssh -T git@github.com
# Deve mostrar: Hi GabrielOliveiradev01! You've successfully authenticated...
```

### 5. Mudar remote para SSH:
```bash
git remote set-url origin git@github.com:GabrielOliveiradev01/Cia360.git
```

---

## ⚠️ Erros Comuns

### "Permission denied (publickey)"
- **Causa**: SSH não configurado
- **Solução**: Use HTTPS com token (veja Passo 1)

### "HTTP 400" ou "RPC failed"
- **Causa**: Token inválido ou expirado
- **Solução**: Gere um novo token

### "fatal: The current branch main has no upstream branch"
- **Causa**: Primeira vez fazendo push
- **Solução**: Use `git push -u origin main` (com `-u`)

---

## 📝 Comandos Úteis

```bash
# Ver status
git status

# Ver commits locais
git log --oneline -5

# Ver remote configurado
git remote -v

# Fazer commit das mudanças atuais
git add .
git commit -m "Descrição das mudanças"
git push -u origin main
```

