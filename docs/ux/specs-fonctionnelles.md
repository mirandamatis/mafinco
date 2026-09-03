# Spécifications fonctionnelles — Mafinco

> **Date :** 16/06/2026
> **Auteur :** Expert UX
> **Statut :** Validé par Chef de Projet

---

## 1. Interactions clés

### 1.1 Navigation

| Élément | Desktop | Mobile |
|---|---|---|
| **Menu principal** | Liens horizontaux dans le header sticky | Menu hamburger (slide-in depuis la droite) |
| **CTA "Télécharger"** | Bouton primaire dans le header — toujours visible | Bouton sticky en bas d'écran + dans le header réduit |
| **Sticky header** | Header fixe au scroll, fond blanc avec légère ombre | Header fixe, logo réduit, seul le CTA reste apparent |
| **Sous-menu CTA** | Dropdown au hover : iOS / Android | Deux boutons empilés dans le menu mobile |

### 1.2 Menu hamburger mobile

```
Comportement :
  - Icône ☰ en haut à droite du header
  - Au clic : tiroir depuis la droite, couvre 80% de l'écran
  - Fond semi-transparent derrière (overlay)
  - Fermeture : clic ✕, clic overlay, swipe gauche, ESC
  - Contenu : Fonctionnalités | Avis | Partenaires | À propos | Contact
  - Bas du menu : deux boutons [App Store] [Google Play]
  - Animations : 0.3s ease-out

Accessibilité :
  - Piège de focus (focus trap) en mode ouvert
  - ESC ferme le menu
  - aria-expanded sur le bouton hamburger
  - role="dialog" sur le tiroir
```

### 1.3 Section "Comment ça marche" (accueil)

```
Comportement :
  - 3 étapes numérotées affichées en ligne (desktop) / empilées (mobile)
  - Animation au scroll : apparition progressive de gauche à droite (desktop)
    ou de bas en haut (mobile) — délai de 0.1s entre chaque étape
  - Chaque étape : numéro ① + icône + titre + description courte (30 mots max)

États :
  - Idle : visible, statique
  - In-viewport (Intersection Observer) : animation d'entrée déclenchée une seule fois
```

### 1.4 Filtres de témoignages (page /avis)

```
Comportement :
  - 3 boutons filtres : [Tous] [Jeune couple] [Épargnants] [Projet immo]
  - Au clic : filtre les cards de témoignages (animation fade + reflow)
  - Filtre actif : style visuel différencié (fond plein vs outline)
  - Par défaut : [Tous] actif

États :
  - loading : spinner au centre de la grille (si chargement distant)
  - empty : "Aucun avis pour ce profil pour l'instant. Voir tous les avis →"
  - error : "Impossible de charger les avis. Réessayer."
```

### 1.5 Formulaire partenaire (/partenaires)

```
Comportement :
  - Validation en temps réel (au blur)
  - Messages d'erreur inline sous chaque champ
  - Bouton "Envoyer" désactivé si formulaire invalide
  - Spinner dans le bouton au submit
  - Redirection vers /confirmation après succès

Champs :
  - Prénom + Nom      : requis, min 2 caractères
  - Email pro         : requis, format email valide
  - Société           : requis, min 2 caractères
  - Type de partenariat : requis, dropdown (Affiliation / Co-branding / API / Autre)
  - Message           : optionnel, max 1 000 caractères
  - Case RGPD         : requise, lien vers /confidentialite
```

### 1.6 Formulaire contact (/contact)

```
Champs :
  - Prénom + Nom  : requis
  - Email         : requis, format email valide
  - Sujet         : requis, dropdown (Support app / Question générale / Presse / Autre)
  - Message       : requis, min 10 car., max 1 000
  - Case RGPD     : requise

Comportement identique au formulaire partenaire.
```

### 1.7 Boutons de téléchargement (CTA principal)

```
Comportement :
  - Toujours deux boutons côte à côte : [App Store] [Google Play]
  - Chaque bouton ouvre un nouvel onglet vers la fiche app correspondante
  - Sur mobile iOS : seul App Store mis en avant, Play Store en secondaire (et vice versa)
    → Détection via User-Agent côté JS, dégradation gracieuse si non détecté

Analytics :
  - Clic sur App Store → événement GA4 : cta_download / store: ios
  - Clic sur Google Play → événement GA4 : cta_download / store: android
  - Position du CTA loguée : hero / section_features / sticky_header / section_final
```

---

## 2. États des composants

### 2.1 États de chargement

| Page / Composant | État loading | Délai max |
|---|---|---|
| **Toutes pages** | Skeleton screen (layout grisé animé) | < 200ms |
| **Images mockup app** | Placeholder flou (blur-up) | < 500ms |
| **Grille avis** | Skeleton cards (3 colonnes grises animées) | < 300ms |
| **Formulaire submit** | Bouton désactivé + spinner dans le bouton | Immédiat |

### 2.2 États vides

| Composant | Comportement |
|---|---|
| **Grille avis filtrés** | Message + CTA [Voir tous les avis] |
| **Section presse** | Section masquée si aucun média (pas de bloc vide visible) |
| **Logos partenaires** | Fallback texte si logo non chargé (alt descriptif) |

### 2.3 États d'erreur

| Composant | Erreur | Comportement |
|---|---|---|
| **Formulaire** | Champ invalide | Message rouge inline sous le champ (aria-describedby) |
| **Formulaire** | Envoi échoué | Toast en haut : "Envoi échoué, veuillez réessayer" |
| **Images** | Image non chargée | Placeholder avec fond de couleur + alt texte |
| **Page entière** | Erreur réseau | Page "Problème technique" avec [Réessayer] [Accueil] |

### 2.4 État succès

| Composant | Comportement |
|---|---|
| **Formulaire envoyé** | Redirection vers /confirmation avec message personnalisé selon le formulaire source |
| **Newsletter (si implémentée)** | Message inline success : "Inscription confirmée — vérifiez votre email" |

---

## 3. Contraintes d'accessibilité (RGAA de base)

### 3.1 Structure sémantique

| Règle | Implémentation |
|---|---|
| **Hiérarchie titres** | `h1` unique par page → `h2` sections → `h3` sous-sections |
| **Landmarks ARIA** | `<header>`, `<nav>`, `<main>`, `<footer>` avec rôles appropriés |
| **Liens** | Texte explicite — jamais "cliquez ici". Les liens vers les stores incluent "Télécharger Mafinco sur App Store" |
| **Images** | `alt` obligatoire. `alt=""` si décoratif. Mockups : `alt="Capture de l'interface Mafinco — [description de l'écran]"` |

### 3.2 Formulaires

| Règle | Implémentation |
|---|---|
| **Labels** | Chaque champ a son `<label>` lié (`for` / `id`). Pas de placeholder comme seul label |
| **Erreurs** | Liées au champ via `aria-describedby`. `role="alert"` sur le message d'erreur |
| **Groupes** | `<fieldset>` + `<legend>` pour la case RGPD |

### 3.3 Contrastes

| Règle | Valeur cible |
|---|---|
| **Texte normal** | Ratio ≥ 4.5:1 |
| **Texte large (≥ 18px ou 14px gras)** | Ratio ≥ 3:1 |
| **Composants actifs (bordures, boutons)** | Ratio ≥ 3:1 |

> Note : La palette Bleu foncé (#1B2B5E) + Blanc (#FFFFFF) = ratio 12.6:1 — conforme WCAG AA et AAA.

### 3.4 Navigation clavier

| Règle | Implémentation |
|---|---|
| **Focus visible** | Outline 2px sur tous les interactifs (`:focus-visible`) |
| **Skip link** | "Aller au contenu principal" en premier focusable, invisible jusqu'au focus |
| **Menu mobile** | Focus trap actif quand le tiroir est ouvert |

### 3.5 Mobile / tactile

| Règle | Valeur |
|---|---|
| **Cibles tactiles** | Min 44×44px (boutons App Store, liens navigation, filtres) |
| **Espacement entre cibles** | Min 8px |

---

## 4. Comportements responsive

| Élément | Breakpoint | Changement |
|---|---|---|
| **Navigation** | < 768px | Header horizontal → menu hamburger |
| **CTA download** | < 1024px | Header → sticky bar en bas d'écran |
| **Boutons iOS/Android** | < 480px | Côte à côte → empilés verticalement |
| **Grille avis** | < 1024px | 3 colonnes → 2 colonnes |
| **Grille avis** | < 600px | 2 colonnes → 1 colonne |
| **Section "Comment ça marche"** | < 768px | 3 étapes horizontales → verticales |
| **Blocs fonctionnalités (alternés)** | < 768px | Gauche/droite → empilés (image au-dessus) |
| **Footer** | < 768px | Liens horizontaux → colonnes empilées |
| **Hero** | < 768px | Texte + mockup côte à côte → texte puis mockup |

---

## 5. Tracking & analytics

| Événement | Déclencheur | Paramètres GA4 |
|---|---|---|
| `cta_download` | Clic bouton App Store ou Google Play | store: ios/android, position: hero/header/footer/features |
| `page_view` | Chaque chargement de page | page_path, page_title |
| `form_submit` | Envoi formulaire contact ou partenaire | form_type: contact/partner |
| `form_error` | Tentative de submit invalide | error_field |
| `filter_avis` | Clic sur un filtre de témoignages | filter_value |
| `scroll_depth` | Scroll 25%, 50%, 75%, 100% | page_path, depth |

---

## 6. Performances cibles (impact UX)

| Métrique | Cible | Outil de mesure |
|---|---|---|
| **PageSpeed mobile** | > 85 | Lighthouse / PageSpeed Insights |
| **PageSpeed desktop** | > 90 | Lighthouse |
| **LCP** | < 2.5s | Core Web Vitals |
| **CLS** | < 0.1 | Core Web Vitals |
| **FCP** | ≤ 1.5s (mobile) | Lighthouse |

**Optimisations recommandées :**
- Images WebP + lazy loading natif (`loading="lazy"`)
- Mockups d'app en format optimisé (pas de PNG non compressé)
- Fonts : Inter ou DM Sans via `font-display: swap`
- Webflow : désactiver les animations inutiles sur mobile (prefers-reduced-motion)
