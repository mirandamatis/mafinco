---
name: website-pipeline
description: Use when the user wants to create a website, build a site, or launch a web project. Implements a 7-phase pipeline: Init → UX → UI → Contenu → Dev → SEO → Retro, with continuous improvement via learnings.
---

# Skill : Pipeline de création de site web

## Déclenchement
Cette skill s'active automatiquement quand l'utilisateur exprime le besoin de créer un site web, une landing page, une application web, ou tout projet de développement web.

## Acteurs

| Agent | Rôle |
|---|---|
| `chef-de-projet` (primary) | Orchestrateur — interagit avec l'utilisateur, délègue, valide |
| `@ux-designer` (subagent) | Architecture, parcours, wireframes |
| `@ui-designer` (subagent) | Design system, maquettes, charte |
| `@developpeur` (subagent) | Implémentation (Next.js ou vanilla) |
| `@redacteur` (subagent) | Contenu éditorial, copy, meta |
| `@seo` (subagent) | SEO technique, performance, accessibilité |
| `@retro-agent` (subagent) | Rétrospective et amélioration continue |

## Système d'apprentissage continu

Chaque agent commence son travail en lisant les leçons des projets précédents dans `docs/learnings/`.

```
docs/learnings/
├── UX.md       ← pièges UX évités, patterns qui marchent
├── UI.md       ← choix de design, retours utilisateur
├── Dev.md      ← problèmes techniques, solutions, stack
├── Contenu.md  ← tons efficaces par type de projet
└── SEO.md      ← optimisations qui ont amélioré les scores
```

Si un fichier `docs/learnings/[domaine].md` existe, l'agent le lit AVANT de commencer son travail et adapte ses livrables en conséquence.

## Phases du pipeline

### Phase 0 — Init
**Acteur :** Chef de projet → utilisateur

Questions à poser à l'utilisateur :
1. Quel est le nom du projet ?
2. Type de site : vitrine, landing page, blog, e-commerce, SaaS ?
3. Objectif principal du site ?
4. Cible / audience ?
5. Pages souhaitées (si déjà connues)
6. Contraintes techniques ou de design ?
7. Deadline éventuelle ?

**Livrable :** `docs/cahier-des-charges.md`

### Phase 1 — UX
**Acteur :** Chef de projet → `@ux-designer`

Le Chef de projet invoque l'agent UX via le Task tool avec le cahier des charges.

**Livrables dans `docs/ux/` :**
- `sitemap.md` — arborescence
- `user-flows.md` — parcours utilisateur
- `wireframes/` — maquettes structurelles
- `specs-fonctionnelles.md` — interactions, états

**Validation :** Chef de projet soumet à l'utilisateur avant phase 2.

### Phase 2 — UI
**Acteur :** Chef de projet → `@ui-designer`

Le Chef de projet invoque l'agent UI via le Task tool avec les livrables UX.

**Livrables dans `docs/ui/` :**
- `design-system.md` — couleurs, typo, espacements
- `charte-graphique.md` — principes directeurs
- `maquettes/` — maquettes visuelles par template
- `tokens.json` — variables CSS/Tailwind

**Validation :** Chef de projet soumet à l'utilisateur avant phase 3.

### Phase 3 — Contenu
**Acteur :** Chef de projet → `@redacteur`

Le Chef de projet invoque l'agent rédacteur via le Task tool avec le sitemap et le brief.

**Livrables dans `docs/contenu/` :**
- Un fichier `[page].md` par page
- Contient : titres, corps, CTA, meta, mots-clés

**Validation :** Chef de projet soumet à l'utilisateur avant phase 4.

### Phase 4 — Développement
**Acteur :** Chef de projet → `@developpeur`

Le Chef de projet invoque l'agent développeur via le Task tool avec l'ensemble des livrables (UX + UI + Contenu).

Décision de stack automatique :
- **Next.js + React + Tailwind** si projet multi-pages, CMS, auth, ou complexité
- **HTML/CSS/JS vanilla** si site simple, landing page, ou pas de backend

**Livrables :**
- Code source complet du site
- README.md avec instructions de démarrage
- Site fonctionnel et responsive

**Validation :** Chef de projet vérifie le rendu avec l'utilisateur.

### Phase 5 — SEO
**Acteur :** Chef de projet → `@seo`

Le Chef de projet invoque l'agent SEO via le Task tool sur le site finalisé.

**Livrables :**
- Meta tags et OG sur toutes les pages
- Données structurées JSON-LD
- `public/sitemap.xml`
- `public/robots.txt`
- `docs/seo/audit.md`

**Validation :** Validation finale avec l'utilisateur.

### Phase 6 — Rétrospective & Amélioration continue
**Acteur :** Chef de projet → `@retro-agent`

Déclenchée après validation de la Phase 5. Le Chef de projet invoque `@retro-agent` via le Task tool.

**Tâches du retro-agent :**
1. Analyser le projet : durée, nombre d'itérations, satisfaction utilisateur, problèmes rencontrés
2. Lire les fichiers agents actuels (`.opencode/agents/*.md`)
3. Suggérer des améliorations concrètes des prompts pour chaque agent
4. Mettre à jour `docs/learnings/[domaine].md` avec les leçons retenues
5. Si pertinent, proposer des améliorations à la skill `website-pipeline`

**Livrables :**
- `docs/retrospectives/[projet]-YYYY-MM-DD.md` — bilan du projet
- Mise à jour de `docs/learnings/*.md`
- Suggestions d'amélioration des prompts

**Validation :** Chef de projet valide et commit les changements.

## Boucles d'itération
À chaque phase, si l'utilisateur demande des modifications :
1. Le Chef de projet identifie le sous-agent concerné
2. Il re-délègue la tâche modifiée via le Task tool
3. Il re-soumet le résultat à l'utilisateur

## Raccourcis
- Si l'utilisateur a déjà un brief détaillé, la Phase 0 peut être accélérée
- Si l'utilisateur fournit déjà du contenu, la Phase 3 est sautée
- Si l'utilisateur a déjà un design system, la Phase 2 est adaptée
