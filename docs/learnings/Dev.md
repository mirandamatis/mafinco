# Leçons Dev

_Ce fichier est mis à jour automatiquement par @retro-agent après chaque projet._

## Initialisation
- Préférer `pnpm` à `npm` pour les nouveaux projets Next.js (plus rapide)
- Configurer ESLint et Prettier dès le init
- Toujours verifier que `npm run build` passe avant de livrer

## 2026-06-05 — Projet Elodie Esthétique
- Google Fonts doit être chargé via `next/font` et non CSS `@import` pour les performances (LCP, subset, preload)
- Sur Next.js, les polices Google se configurent dans `layout.tsx` avec `import { ... } from 'next/font/google'`
- Vérifier que `tailwind.config.ts` est bien aligné sur `tokens.json` pour éviter la duplication de maintenance
