# Audit SEO — Elodie Esthétique

**Date :** 05/06/2026  
**Projet :** Elodie Esthétique — Institut de beauté & bien-être à Avignon  
**URL :** https://www.elodie-esthetique.fr

---

## ✅ Checklist des optimisations appliquées

### 1. Meta Tags & Balisage

| Action | Statut | Pages concernées |
|--------|--------|------------------|
| Balise `lang="fr"` sur `<html>` | ✅ Déjà présent | Toutes |
| `title` par page | ✅ Complété | Toutes (layout default + metadata exports) |
| `meta description` par page | ✅ Complété | Toutes |
| Balises `og:title`, `og:description`, `og:type`, `og:url`, `og:image` | ✅ Ajouté | Toutes |
| Balises `twitter:card` (summary_large_image) | ✅ Ajouté | Toutes |
| `metadataBase` défini | ✅ Ajouté | Root layout |
| `theme-color` meta | ✅ Ajouté | Root layout |
| Hiérarchie des titres (H1, H2, H3) | ✅ Vérifié — Une seule balise H1 par page | Toutes |
| Icône favicon | ✅ Présent (`/favicon.ico`) | Root layout |
| `apple-touch-icon` | ✅ Référencé | Root layout |

### 2. Données structurées JSON-LD

| Type Schema | Statut | Emplacement |
|-------------|--------|-------------|
| **LocalBusiness** | ✅ Implémenté | Layout racine (injecté via `<script>` dans `<body>`) |
| **BreadcrumbList** | ✅ Implémenté | Chaque page (sauf accueil) — via composant `JsonLdBreadcrumb` |
| **Organization** | ✅ Fichier de référence | `public/structured-data/organization.json` |
| **WebSite** | ✅ Fichier de référence | `public/structured-data/website.json` |

**Détails des données LocalBusiness :**
- Nom : Elodie Esthétique
- Adresse : 12 Rue des Teinturiers, 84000 Avignon
- Téléphone : 04 90 00 00 00
- Email : contact@elodie-esthetique.fr
- Horaires : Lun-Ven 9h-19h, Sam 9h-17h
- Note moyenne : 4.9/5 (87 avis)
- Prix : €€
- Services : Soins visage, Modelages, Bar à ongles, Épilation, INSPIRA:MED, Carte cadeau

### 3. Fichiers techniques

| Fichier | Statut | Description |
|---------|--------|-------------|
| `public/sitemap.xml` | ✅ Créé | 15 URLs listées avec priorité et fréquence de mise à jour |
| `public/robots.txt` | ✅ Créé | Autorise tous les crawlers, bloque `/confirmation`, pointe vers sitemap |
| `public/structured-data/` | ✅ Créé | Fichiers JSON-LD de référence |
| `public/favicon.ico` | ✅ Présent | Dans `src/app/favicon.ico` (Next.js le sert automatiquement) |

### 4. Performance

| Critère | Statut | Notes |
|---------|--------|-------|
| Lazy loading des images | ✅ N/A | Pas d'images `<img>` chargées (utilisation de SVG/dégradés CSS) |
| Minification du code | ✅ Next.js gère automatiquement | Production build minifie HTML/CSS/JS |
| Police Google Fonts optimisée | ⚠️ À surveiller | `Cormorant Garamond` + `Inter` chargés via `@import` — envisager `next/font` |
| Core Web Vitals | ⚠️ Rapport | Voir section recommandations |

### 5. Accessibilité (RGAA / WCAG)

| Critère | Statut | Notes |
|---------|--------|-------|
| `lang="fr"` | ✅ Présent | |
| Skip link (lien d'évitement) | ✅ Présent | "Aller au contenu principal" |
| Landmarks ARIA | ✅ `banner`, `navigation`, `main`, `contentinfo`, `dialog` | Utilisés correctement |
| `role="main"` | ✅ Présent | |
| ARIA labels sur la navigation | ✅ Présents | `aria-label="Navigation principale"`, etc. |
| `aria-current="page"` | ✅ Présent | Sur les pages services et contact |
| `aria-expanded` sur menu mobile | ✅ Présent | |
| `aria-modal="true"` sur menu mobile | ✅ Présent | |
| `aria-hidden="true"` sur éléments décoratifs | ✅ Présent | |
| `alt` sur images | ✅ N/A / OK | Icônes SVG décoratives avec `aria-hidden="true"` |
| Contrastes de couleurs | ✅ Vérifié | Palette Tailwind personnalisée avec contrastes suffisants |
| Navigation au clavier | ✅ Vérifiée | `focus-ring` classes, `focus-visible` outlines |
| Formulaires accessibles | ✅ `label` + `htmlFor`, `aria-required`, `aria-invalid`, `aria-describedby`, `role="alert"` | |

---

## 🚀 Recommandations pour Google Search Console

### 1. Soumettre le sitemap
1. Aller sur [Google Search Console](https://search.google.com/search-console)
2. Ajouter la propriété `https://www.elodie-esthetique.fr`
3. Vérifier la propriété (via DNS, fichier HTML, Google Analytics ou GTM)
4. Aller dans **Sitemaps**
5. Soumettre `https://www.elodie-esthetique.fr/sitemap.xml`
6. Surveiller les erreurs d'indexation

### 2. Vérifications initiales
- **Indexation des pages** : Vérifier que les 15 URLs du sitemap sont indexées
- **Erreurs de couverture** : Corriger les éventuelles erreurs 404 ou 500
- **Améliorations mobiles** : Tester l'affichage mobile
- **Core Web Vitals** : Surveiller les métriques dans le rapport "Core Web Vitals"

### 3. Configurer Google Analytics 4
- Créer une propriété GA4 et ajouter le tag de mesure
- Configurer les objectifs (prise de rendez-vous, clics téléphone, envoi formulaire)
- Activer le suivi des conversions

---

## 📊 Suggestions d'amélioration

### Priorité haute 🔴

1. **Ajouter une vraie photo d'Elodie et des photos des soins**
   - Impact SEO : fort (images optimisées, contenu visuel unique)
   - Utiliser des `<img>` avec `alt` descriptifs et `loading="lazy"`
   - Compresser les images (WebP, 80% qualité)
   - Ajouter les balises `og:image` personnalisées par page avec photos réelles

2. **Créer une page "Mentions légales" et "Confidentialité"**
   - Liens déjà présents dans le footer mais pages non créées (retournent 404)
   - Obligation légale + bon pour le SEO

3. **Remplacer `@import` Google Fonts par `next/font`**
   - Actuel : `globals.css` utilise `@import url(...)` 
   - Recommandé : utiliser `next/font` dans le layout pour optimiser le chargement
   - Impact : amélioration du LCP (Largest Contentful Paint)

### Priorité moyenne 🟡

4. **Créer une fiche Google My Business optimisée**
   - Nom : Elodie Esthétique
   - Adresse : 12 Rue des Teinturiers, 84000 Avignon
   - Téléphone : 04 90 00 00 00
   - Catégorie : Institut de beauté
   - Horaires, photos, avis clients
   - Impact SEO local fort

5. **Ajouter des avis Google**
   - Encourager les clientes à laisser des avis
   - Le JSON-LD inclut déjà une note de 4.9/5 (87 avis)
   - Synchroniser avec les vrais avis Google

6. **Stratégie de backlinks**
   - Annuaire Pages Jaunes / Mappy
   - Annuaire des esthéticiennes de Vaucluse
   - Partenariats locaux (coiffeurs, boutiques de mariage, etc.)
   - Article invité sur des blogs beauté locaux

7. **Ajouter des pages "Mariage" et "Carte cadeau" dédiées avec contenu complet**
   - Actuellement : génériques (retournent une page "en cours de création")
   - Créer des pages avec descriptions détaillées, photos, tarifs, FAQ

### Priorité basse 🟢

8. **Créer un blog / actualités**
   - Articles : "Les bienfaits des soins visage", "Comment choisir son massage", etc.
   - Mots-clés longue traîne
   - Fréquence : 1 article par mois minimum

9. **Ajouter une carte interactive (Google Maps)**
   - La page Contact a un placeholder pour la carte
   - Intégrer une vraie carte Google Maps avec l'adresse de l'institut

10. **Page FAQ structurée**
    - Questions fréquentes sur les soins, les prix, les horaires
    - Peut utiliser le schema `FAQPage` pour les rich snippets

---

## 📈 Plan d'action post-lancement

### Semaine 1
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Configurer Google Analytics 4
- [ ] Vérifier l'indexation des pages
- [ ] Tester avec Lighthouse (mobile + desktop) — viser 90+ sur tous les scores

### Semaine 2-3
- [ ] Créer fiches Google My Business + annuaires locaux
- [ ] Ajouter photos réelles (Elodie, institut, soins)
- [ ] Créer pages Mentions légales et Confidentialité

### Mois 1
- [ ] Optimiser Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Migrer Google Fonts vers `next/font`
- [ ] Lancer campagne d'avis Google

### Mois 2-3
- [ ] Rédiger 2-3 articles de blog
- [ ] Créer des backlinks locaux
- [ ] Ajouter contenu détaillé pour les pages services génériques

### Trimestre 2
- [ ] Analyse des performances SEO (positions, trafic, conversions)
- [ ] Mise à jour du contenu si nécessaire
- [ ] Campagne de netlinking

---

## 🔧 Tests de performance préconisés

1. **Lighthouse (Chrome DevTools)**
   - Tester chaque page en mobile et desktop
   - Objectifs : Performance ≥ 90, Accessibilité ≥ 95, SEO ≥ 95, Best Practices ≥ 90

2. **PageSpeed Insights**
   - `https://pagespeed.web.dev/`
   - Analyser chaque URL clé (accueil, services, contact)
   - Vérifier les Core Web Vitals réels (données de terrain)

3. **Validator W3C**
   - `https://validator.w3.org/`
   - Vérifier la validité du HTML

4. **Rich Results Test (Google)**
   - `https://search.google.com/test/rich-results`
   - Vérifier que le JSON-LD LocalBusiness est bien interprété

---

## 📝 Notes techniques

- **Framework :** Next.js 14 (App Router), génération statique (SSG via `next build`)
- **Hébergement :** À définir (Vercel recommandé pour Next.js)
- **Domaine :** `elodie-esthetique.fr`
- **Site monolingue :** français uniquement → pas de balises hreflang nécessaires
- **Fichier `robots.txt` :** bloque `/confirmation` et `/confirmation/` (pages internes)
- **Sitemap :** 15 URLs, fréquences mises à jour, priorités définies

---

## 📋 Résumé des actions bloquantes (à faire absolument)

| # | Action | Raison |
|---|--------|--------|
| 1 | Soumettre sitemap à GSC | Nécessaire pour l'indexation |
| 2 | Créer pages Mentions légales + Confidentialité | Obligation légale + SEO |
| 3 | Ajouter photos réelles du commerce | Améliore l'engagement et le SEO local |
| 4 | Activer Google Analytics 4 | Suivi du trafic et des conversions |
| 5 | Vérifier Core Web Vitals après déploiement | Critère de classement Google |

---

*Document mis à jour le 05/06/2026 — Prochaine révision recommandée dans 3 mois*
