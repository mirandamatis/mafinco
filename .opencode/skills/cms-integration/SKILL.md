---
name: cms-integration
description: Use when the user needs a CMS, wants editable content, or wants Sanity/Strapi/WordPress integrated. Sets up content models, admin dashboard, and content queries.
---

# Skill : CMS Integration

Intégration d'un CMS headless (Sanity, Strapi) au pipeline de création.

## Déclenchement
- "Ajoute un CMS"
- "Je veux pouvoir éditer le contenu"
- "Configure Sanity / Strapi"
- "Backend éditorial"

## Choix du CMS

### Sanity (recommandé pour Next.js)
- Studio configuré en code (JS/TS)
- GROQ queries
- Real-time collaboration
- Asset pipeline (images自动优化)
- Free tier généreux

### Strapi (auto-hébergé)
- Self-hosted sur Render/Railway
- REST + GraphQL
- Admin UI complet
- Roles & permissions
- Plugin marketplace

## Phases

### 1. Modèles de contenu
Définir les schémas :

**Sanity (`sanity/schemas/`) :**
```js
export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'content', title: 'Contenu', type: 'blockContent' },
    { name: 'seo', title: 'SEO', type: 'seo' },
  ],
}
```

**Strapi (`src/api/page/content-types/page/schema.json`) :**
```json
{
  "kind": "collectionType",
  "attributes": {
    "title": { "type": "string" },
    "slug": { "type": "uid", "targetField": "title" },
    "content": { "type": "richtext" }
  }
}
```

### 2. Initialisation du projet

**Sanity :**
```bash
npm create sanity@latest -- --project <projectId> --dataset production
```

**Strapi :**
```bash
npx create-strapi-app@latest my-cms --quickstart
```

### 3. Intégration front-end
- Sanity : `@sanity/client` + `@portabletext/react`
- Strapi : `fetch` REST API ou Apollo GraphQL
- SSR/SSG pour le rendu des pages
- Revalidation (ISR) pour les mises à jour

### 4. Configuration éditeurs
- Ajouter des comptes utilisateurs
- Configurer les rôles (éditeur, admin)
- Personnaliser le studio (logo, thème, structure)
- Configurer les previews (visionneuse du rendu)

### 5. Déploiement du CMS
- Sanity : déjà hébergé (gratuit)
- Strapi : déploiement Render / Railway + DB PostgreSQL
- Variables d'environnement : API tokens, project ID

## Règles
- Ne pas exposer les tokens d'API dans le code
- Toujours utiliser des variables d'environnement
- Le CMS doit être optionnel : le site fonctionne sans
- Documenter comment les éditeurs peuvent modifier le contenu
