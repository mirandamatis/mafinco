---
name: deploy-automation
description: Use when the user wants to deploy a site, set up CI/CD, configure a domain, or automate releases. Works with Vercel, Netlify, and GitHub Pages.
---

# Skill : Deploy Automation

Déploiement automatisé du site sur Vercel, Netlify ou GitHub Pages.

## Déclenchement
- "Déploie le site"
- "Mets en place le CI/CD"
- "Configure le domaine"
- "Automatise le déploiement"

## Prérequis
- Le site est finalisé (buildable)
- Un repo GitHub avec le code source
- Compte Vercel / Netlify (selon le choix)

## Choix du provider

### Vercel (recommandé pour Next.js)
- Déploiement automatique depuis GitHub
- Preview deployments sur chaque PR
- Analytics, Edge Functions, ISR
- Domaine personnalisé + SSL auto

### Netlify (recommandé pour sites statiques)
- Déploiement automatique depuis GitHub
- Netlify Forms, Functions, Redirects
- Split testing
- Domaine personnalisé + SSL auto

### GitHub Pages (gratuit, basique)
- Déploiement depuis `main` ou `gh-pages`
- Domaine personnalisé possible
- Pas de backend

## Configuration

### 1. Fichier de build
Vérifier que le projet build correctement :
```bash
npm run build   # Next.js
# ou rien pour HTML statique
```

### 2. Fichier de configuration du provider

**Vercel :** `vercel.json` (généré automatiquement par create-next-app)
```json
{
  "framework": "nextjs"
}
```

**Netlify :** `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404
```

**GitHub Pages :** GitHub Actions workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 3. Domaine personnalisé (optionnel)
- Acheter le domaine (Namecheap, Cloudflare, ou registrar)
- Configurer les DNS (CNAME vers le provider)
- Activer HTTPS (automatique sur Vercel/Netlify)
- Redirections : www → non-www ou l'inverse

### 4. Post-déploiement
- Vérifier que le site est accessible
- Tester les formulaires si présents
- Vérifier les redirects
- Vérifier le SSL
- Soumettre le sitemap à Google Search Console
- Configurer Analytics si pas déjà fait

## Règles
- Demander à l'utilisateur quel provider il préfère (ou suggérer selon le projet)
- Ne jamais toucher aux DNS sans validation utilisateur
- Documenter les URLs de production et preview
- Garder les tokens et secrets hors du repo
