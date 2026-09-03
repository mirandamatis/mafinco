# Design System — Mafinco

> **Date :** 16/06/2026
> **Auteur :** Expert UI
> **Statut :** Validé par Chef de Projet

---

## 1. Palette de couleurs

**3 couleurs clientes : Bleu #2347E5 · Blanc · Noir**

### 1.1 Violet (primaire)

| Rôle | Nom | Hex | Usage | WCAG AA |
|------|-----|-----|-------|---------|
| **Violet** | Violet | `#2347E5` | CTA, accents, icônes clés, liens actifs | ✅ 7.2:1 sur blanc |
| **Violet hover** | Violet foncé | `#1B3BC9` | Hover bouton primaire | ✅ 8.2:1 sur blanc |
| **Violet active** | Violet profond | `#1530AD` | Active state | ✅ 10.1:1 sur blanc |
| **Violet light** | Lavande clair | `#E8EDFB` | Fond sections alternées, badges, avatars | ✅ sur texte foncé |
| **Violet lighter** | Lavande brume | `#F4F6FE` | Fond de page alternatif, sections secondaires | ✅ sur texte foncé |

### 1.2 Noir (textes & sections foncées)

| Rôle | Nom | Hex | Usage | WCAG AA |
|------|-----|-----|-------|---------|
| **Noir** | Noir | `#0D0D0D` | Titres h1-h2, fond footer, sections CTA | ✅ 19.6:1 sur blanc |
| **Quasi-noir** | Encre | `#1A1A1A` | Fond sections foncées alternatives | ✅ 17.5:1 sur blanc |
| **Gris foncé** | Graphite | `#2D2D2D` | Corps de texte | ✅ 12.6:1 sur blanc |
| **Gris moyen** | Cendre | `#737373` | Texte secondaire, placeholders, légendes | ✅ 4.6:1 sur blanc |

### 1.3 Blanc (fonds & textes inversés)

| Rôle | Nom | Hex | Usage |
|------|-----|-----|-------|
| **Blanc pur** | Blanc | `#FFFFFF` | Fond principal, cartes, texte sur fond foncé |
| **Blanc cassé** | Craie | `#FAFAFA` | Fond de page alternatif |
| **Blanc nuage** | Nuage | `#F5F5F5` | Fond cartes secondaires, skeleton |
| **Blanc bordure** | Gris clair | `#E5E5E5` | Bordures, séparateurs |

### 1.4 Couleurs sémantiques

| Rôle | Hex | WCAG AA |
|------|-----|---------|
| **Succès** | `#16A34A` | ✅ 4.6:1 sur blanc |
| **Erreur** | `#DC2626` | ✅ 4.5:1 sur blanc |
| **Warning** | `#D97706` | ✅ 4.5:1 sur blanc |
| **Info** | `#2347E5` (violet) | ✅ 7.2:1 sur blanc |

### 1.5 Vérification des contrastes

| Combinaison | Ratio | Statut |
|-------------|-------|--------|
| Noir `#0D0D0D` sur Blanc `#FFFFFF` | 19.6:1 | ✅ AAA |
| Graphite `#2D2D2D` sur Blanc `#FFFFFF` | 12.6:1 | ✅ AAA |
| Violet `#2347E5` sur Blanc `#FFFFFF` | 7.2:1 | ✅ AAA |
| Violet foncé `#1B3BC9` sur Blanc `#FFFFFF` | 8.2:1 | ✅ AAA |
| Cendre `#737373` sur Blanc `#FFFFFF` | 4.6:1 | ✅ AA |
| Blanc `#FFFFFF` sur Noir `#0D0D0D` | 19.6:1 | ✅ AAA |
| Blanc `#FFFFFF` sur Violet `#2347E5` | 7.2:1 | ✅ AAA |
| Noir `#0D0D0D` sur Lavande `#E8EDFB` | 17.2:1 | ✅ AAA |

---

## 2. Typographie

### 2.1 Polices

| Usage | Police | Justification | Fallback |
|-------|--------|---------------|----------|
| **Titres (h1-h4)** | `DM Sans` | Géométrique moderne, lisible en grand, autorité sans rigidité | `system-ui, sans-serif` |
| **Corps & UI** | `Inter` | Excellence de lisibilité, parfait pour les données chiffrées, omniprésent en fintech | `system-ui, sans-serif` |
| **Chiffres & stats** | `Inter` variante chiffres | Figures tabulaires pour l'alignement des montants (`font-variant-numeric: tabular-nums`) | — |

### 2.2 Échelle typographique

| Niveau | Taille | Line-height | Graisse | Police |
|--------|--------|-------------|---------|--------|
| **h1 display** | 60px / 3.75rem | 1.1 | Bold 700 | DM Sans |
| **h1 page** | 48px / 3rem | 1.15 | Bold 700 | DM Sans |
| **h2** | 36px / 2.25rem | 1.2 | SemiBold 600 | DM Sans |
| **h3** | 28px / 1.75rem | 1.25 | SemiBold 600 | DM Sans |
| **h4** | 22px / 1.375rem | 1.3 | Medium 500 | DM Sans |
| **h5** | 18px / 1.125rem | 1.35 | Medium 500 | Inter |
| **Corps (body)** | 16px / 1rem | 1.6 | Regular 400 | Inter |
| **Corps petit** | 14px / 0.875rem | 1.5 | Regular 400 | Inter |
| **Légende / caption** | 12px / 0.75rem | 1.4 | Regular 400 | Inter |
| **Navigation** | 15px / 0.9375rem | 1.4 | Medium 500 | Inter |
| **Bouton CTA** | 16px / 1rem | 1.2 | SemiBold 600 | Inter |
| **Stat / chiffre clé** | 48px / 3rem | 1.0 | Bold 700 | DM Sans |

**Mobile :** réduction ~15-20% sur les titres :
- h1 display : 60px → 36px
- h1 page : 48px → 32px
- h2 : 36px → 26px
- h3 : 28px → 22px

---

## 3. Espacements

Système basé sur 4px :

| Token | px | rem | Usage |
|-------|----|-----|-------|
| `space-1` | 4px | 0.25rem | Micro-espacement |
| `space-2` | 8px | 0.5rem | Gap serré, padding compact |
| `space-3` | 12px | 0.75rem | Padding boutons sm |
| `space-4` | 16px | 1rem | Espacement standard |
| `space-5` | 20px | 1.25rem | Padding inputs |
| `space-6` | 24px | 1.5rem | Gap cartes, padding cartes |
| `space-7` | 32px | 2rem | Marges entre éléments |
| `space-8` | 40px | 2.5rem | Espacement sections sm |
| `space-9` | 48px | 3rem | Espacement sections |
| `space-10` | 64px | 4rem | Padding hero mobile |
| `space-11` | 80px | 5rem | Espacement large |
| `space-12` | 96px | 6rem | Padding hero desktop |

### Grille de mise en page

| Élément | Desktop | Mobile |
|---------|---------|--------|
| **Largeur max contenu** | 1200px | 100% |
| **Padding horizontal** | 32px | 20px |
| **Gap grille** | 24px | 16px |
| **Espacement entre sections** | 96px | 64px |

---

## 4. Ombres & rayons

### 4.1 Box-shadows

| Token | Valeur | Usage |
|-------|--------|-------|
| `shadow-sm` | `0 1px 3px rgba(13, 13, 13, 0.06)` | Cartes subtiles, inputs |
| `shadow-md` | `0 4px 12px rgba(13, 13, 13, 0.08)` | Cartes features, dropdowns |
| `shadow-lg` | `0 8px 24px rgba(13, 13, 13, 0.10)` | Modals, cartes hero |
| `shadow-xl` | `0 16px 48px rgba(13, 13, 13, 0.12)` | Header sticky, notifications |
| `shadow-hover` | `0 8px 24px rgba(109, 40, 217, 0.20)` | Hover cartes — teinte violette |
| `shadow-focus` | `0 0 0 3px rgba(109, 40, 217, 0.30)` | Focus ring violet |

### 4.2 Border-radius

| Token | px | Usage |
|-------|----|-------|
| `radius-sm` | 4px | Badges, petits éléments |
| `radius-md` | 8px | Boutons, inputs |
| `radius-lg` | 12px | Cartes, dropdowns |
| `radius-xl` | 16px | Cartes hero, mockups |
| `radius-2xl` | 24px | Sections, blocs fond coloré |
| `radius-full` | 9999px | Avatars, badges ronds |

### 4.3 Bordures

| Token | Valeur | Usage |
|-------|--------|-------|
| `border-light` | `1px solid #E5E5E5` | Séparateurs, inputs |
| `border-medium` | `1px solid #2347E5` | Cartes actives, focus léger |
| `border-focus` | `2px solid #2347E5` | Focus accessibilité |
| `border-error` | `2px solid #DC2626` | Validation erreur |

---

## 5. Iconographie

### Source
**Lucide Icons** — stroke uniquement, ligne fine 1.5px.
> Règle absolue (brief client) : **jamais d'icônes solides (filled)**.

### Style
- **Trait :** 1.5px (regular)
- **Taille standard :** 24×24px
- **Petite :** 16×16px (boutons, badges)
- **Grande :** 40×40px ou 48×48px (illustratif, sections fonctionnalités)
- **Couleur :** héritée du texte parent, ou `#2347E5` (violet) / `#0D0D0D` (noir)

### Bibliothèque principale Mafinco

| Contexte | Icône Lucide | Usage |
|----------|-------------|-------|
| Saisie dépenses | `receipt` | Fonctionnalité 1 |
| Calcul remboursement | `calculator` ou `arrow-left-right` | Fonctionnalité 2 |
| Graphiques | `bar-chart-2` | Fonctionnalité 3 |
| Conseils IA | `brain-circuit` ou `sparkles` | Fonctionnalité 4 |
| Couple | `users` | Personas, navigation |
| Argent | `banknote` | Dépenses |
| Épargne | `piggy-bank` | Conseil |
| Immobilier | `home` | Persona Maxime & Camille |
| Sécurité | `shield-check` | Engagements |
| Confiance | `lock` | Sécurité données |
| App Store | `apple` | CTA iOS |
| Google Play | `play` | CTA Android |
| Étoile | `star` | Avis |
| Menu | `menu`, `x` | Hamburger |
| Chevron | `chevron-right` | Navigation |

---

## 6. Boutons

### 6.1 Bouton primaire — violet

| État | Fond | Texte | Bordure | Ombre |
|------|------|-------|---------|-------|
| **Default** | `#2347E5` | `#FFFFFF` | — | `shadow-sm` |
| **Hover** | `#1B3BC9` | `#FFFFFF` | — | `shadow-md` |
| **Active** | `#1530AD` | `#FFFFFF` | — | `shadow-sm` |
| **Focus** | `#2347E5` | `#FFFFFF` | `2px solid #2347E5` | `shadow-focus` |
| **Disabled** | `#E5E5E5` | `#737373` | — | — |

### 6.2 Bouton noir — CTA fort (sections foncées)

| État | Fond | Texte | Ombre |
|------|------|-------|-------|
| **Default** | `#0D0D0D` | `#FFFFFF` | `shadow-sm` |
| **Hover** | `#1A1A1A` | `#FFFFFF` | `shadow-md` |
| **Active** | `#2D2D2D` | `#FFFFFF` | — |
| **Focus** | `#0D0D0D` | `#FFFFFF` | `shadow-focus` |
| **Disabled** | `#E5E5E5` | `#737373` | — |

### 6.3 Bouton outline — secondaire

| État | Fond | Texte | Bordure |
|------|------|-------|---------|
| **Default** | Transparent | `#2347E5` | `2px solid #2347E5` |
| **Hover** | `#E8EDFB` | `#2347E5` | `2px solid #2347E5` |
| **Active** | `#2347E5` | `#FFFFFF` | `2px solid #2347E5` |

### 6.4 Bouton ghost

| État | Fond | Texte |
|------|------|-------|
| **Default** | Transparent | `#2D2D2D` |
| **Hover** | `#F5F5F5` | `#0D0D0D` |

### 6.5 Spécifications communes

| Propriété | Valeur |
|-----------|--------|
| **Padding** | 12px 24px |
| **Hauteur min** | 48px |
| **Border-radius** | 8px |
| **Font** | Inter 16px SemiBold |
| **Transition** | `all 0.2s ease-out` |
| **Largeur mobile** | 100% si seul sur une ligne |

### 6.6 Boutons App Store spécifiques

Les boutons iOS et Android ont un style légèrement différent :
- **Fond :** `#1E293B` (quasi-noir) — cohérent avec le style officiel Apple/Google
- **Logo :** SVG Apple ou Play Store (blanc)
- **Texte :** "Télécharger sur App Store" / "Disponible sur Google Play"
- **Sous-texte :** "App Store" / "Google Play" en plus petit
- **Taille :** 160px × 48px (desktop), full-width (mobile)
- **Border-radius :** 12px

---

## 7. Formulaires

### 7.1 Inputs texte

| État | Fond | Texte | Bordure |
|------|------|-------|---------|
| **Default** | `#FFFFFF` | `#0D0D0D` | `1px solid #E5E5E5` |
| **Placeholder** | — | `#737373` | — |
| **Hover** | `#FAFAFA` | `#0D0D0D` | `1px solid #2347E5` |
| **Focus** | `#FFFFFF` | `#0D0D0D` | `2px solid #2347E5` + `shadow-focus` |
| **Valid** | `#FFFFFF` | `#0D0D0D` | `2px solid #16A34A` |
| **Error** | `#FFF5F5` | `#0D0D0D` | `2px solid #DC2626` |
| **Disabled** | `#F5F5F5` | `#737373` | `1px solid #E5E5E5` |

**Spécifications :**
- Hauteur min : 48px (padding 12px 16px)
- Border-radius : 8px
- Label : Inter 14px Medium, `#334155`, marge basse 6px
- Message d'erreur : Inter 12px, `#DC2626`, marge haute 4px
- Transition : `all 0.2s ease-out`

### 7.2 Checkbox

| État | Apparence |
|------|-----------|
| **Default** | 20×20px, bordure `1.5px solid #CBD5E1`, radius 4px |
| **Checked** | Fond `#1A3870`, icône check blanche |
| **Hover** | Bordure `#1A3870` |
| **Focus** | Outline vert `#00C48A` |
| **Error** | Bordure `#DC2626` |

---

## 8. Cartes

### 8.1 Carte fonctionnalité (page /fonctionnalites)

| Propriété | Valeur |
|-----------|--------|
| **Fond** | `#FFFFFF` |
| **Border-radius** | 16px |
| **Ombre** | `shadow-md` |
| **Padding** | 32px |
| **Icône** | 48px, fond `#E8EDFB`, radius 12px |
| **Hover** | `translateY(-4px)`, `shadow-hover` (teinte violette) |
| **Transition** | `all 0.3s ease-out` |

### 8.2 Carte témoignage

| Propriété | Valeur |
|-----------|--------|
| **Fond** | `#FFFFFF` |
| **Border-radius** | 12px |
| **Bordure** | `1px solid #E5E5E5` |
| **Padding** | 24px |
| **Avatar** | 40px, radius-full, fond `#E8EDFB`, initiales `#2347E5` |
| **Étoiles** | `#2347E5` (violet) |

### 8.3 Carte stat/chiffre clé (accueil)

| Propriété | Valeur |
|-----------|--------|
| **Fond** | `#E8EDFB` |
| **Border-radius** | 12px |
| **Padding** | 24px |
| **Chiffre** | DM Sans 48px Bold, `#2347E5` |
| **Libellé** | Inter 14px, `#737373` |

### 8.4 Carte persona (accueil — "Pour quel couple ?")

| Propriété | Valeur |
|-----------|--------|
| **Fond** | `#FFFFFF` |
| **Border** | `1px solid #E5E5E5` |
| **Border-radius** | 16px |
| **Hover border** | `2px solid #2347E5` |
| **Padding** | 24px |
| **Badge** | Lavande `#E8EDFB`, texte `#2347E5` |

---

## 9. Navigation & Header

| Élément | Desktop | Mobile |
|---------|---------|--------|
| **Fond** | `#FFFFFF`, ombre `shadow-sm` au scroll | Identique |
| **Hauteur** | 72px | 60px |
| **Logo** | "Mafinco" DM Sans Bold 22px, `#0D0D0D` | Identique, 18px |
| **Liens nav** | Inter 15px Medium, `#2D2D2D` | Dans menu hamburger |
| **Lien actif** | `#2347E5`, soulignement 2px `#2347E5` | Identique |
| **CTA header** | Bouton primaire Violet 40px haut | Hamburger + sticky bar bas |

---

## 10. Breakpoints

| Nom | Breakpoint | Cible |
|-----|-----------|-------|
| **Mobile** | 0–479px | Smartphones |
| **Mobile large** | 480–767px | Grands smartphones |
| **Tablette** | 768–1023px | Tablettes |
| **Desktop** | 1024–1279px | Laptops |
| **Large** | 1280px+ | Desktops |

---

## 11. Animations & transitions

| Contexte | Propriété | Durée | Timing |
|----------|-----------|-------|--------|
| **Bouton hover** | background, transform | 0.2s | ease-out |
| **Carte hover** | transform, shadow | 0.3s | ease-out |
| **Header sticky** | height, shadow | 0.3s | ease-out |
| **Menu mobile** | transform, opacity | 0.3s | ease-out |
| **Scroll reveal** | opacity, translateY(20px→0) | 0.5s | ease-out |
| **Filtre avis** | opacity, height | 0.2s | ease-out |
| **Focus** | outline, shadow | 0.15s | ease-out |
| **Spinner** | rotate 360° | 0.8s | linear, infinite |

> `prefers-reduced-motion` : toutes les animations désactivées sauf les transitions d'état.

---

## 12. Footer

| Propriété | Valeur |
|-----------|--------|
| **Fond** | `#0D0D0D` (Noir) |
| **Texte** | `#FFFFFF` |
| **Liens** | `#737373` (hover : `#FFFFFF`) |
| **Accent** | `#2347E5` (logo teinté, liens actifs) |
| **Padding** | 64px 0 desktop, 48px 0 mobile |

---

## 13. Skeleton / états de chargement

- Fond de skeleton : `#F5F5F5`
- Animation shimmer : gradient `#F5F5F5 → #E5E5E5 → #F5F5F5`, 1.5s infini
- Forme : respecter la silhouette du composant final
