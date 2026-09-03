---
name: landing-page-optimizer
description: Use when the user wants a high-converting landing page, sales page, or single-page site. Implements CRO best practices, A/B testing setup, and conversion tracking.
---

# Skill : Landing Page Optimizer

Pipeline resserré pour landing pages avec focus conversion.

## Déclenchement
- "Je veux une landing page"
- "Crée une page de vente / capture"
- "Site one-page avec formulaire"

## Différences avec le pipeline standard
Le pipeline standard (website-pipeline) est allégé : pas de sitemap multi-pages, pas de CMS.

## Phases

### 1. Objectif & Conversion
Définir l'objectif unique de la page :
- Objectif principal (inscription, achat, lead, téléchargement)
- Indicateur de conversion (taux, CTR, formulaire)
- Audience cible et trafic source (Google Ads, réseaux sociaux, direct)

**Livrable :** `docs/landing/brief-conversion.md`

### 2. Structure & Copy (UX + Contenu fusionnés)
- **Above the fold** : accroche, sous-titre, CTA principal
- **Problème → Solution** : section douleur / bénéfice
- **Preuve sociale** : témoignages, chiffres, logos clients
- **Arguments** : caractéristiques / avantages
- **FAQ** : objections courantes
- **CTAs** : primaire + secondaire + de sortie
- **Footer** : mentions légales, confiance

**Livrable :** `docs/landing/copy.md`

### 3. Design System minimum
- Palette réduite (1-2 couleurs + neutre)
- Une typo (max 2 graisses)
- Composants : hero, section, formulaire, témoignage, footer

**Livrable :** `docs/landing/design-tokens.json`

### 4. Développement
- **HTML/CSS/JS vanilla** (pas de Next.js pour une landing)
- Mobile-first
- Formulaire fonctionnel (Netlify Forms, Formspree, ou endpoint)
- Tracking : Google Analytics / Meta Pixel (optionnel)

### 5. Optimisation conversion
- Ajouter les micro-interactions (hover, transitions)
- Vérifier les temps de chargement (< 2s)
- Ajouter les meta OG pour le partage
- Configurer un A/B test si pertinent

### 6. Déploiement
- Vercel ou Netlify (déploiement rapide)
- Domaine personnalisé (optionnel)
- Redirect www → non-www
