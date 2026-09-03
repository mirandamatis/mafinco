# Charte graphique — Mafinco

> **Date :** 16/06/2026
> **Auteur :** Expert UI
> **Statut :** Validé par Chef de Projet

---

## 1. Principes directeurs

Le design de Mafinco s'articule autour de **4 principes** :

### 1.1 Confiance
- Blanc dominant — fond épuré, respiration visuelle maximale sur un sujet financier
- Noir pour les textes — contraste absolu, lisibilité parfaite
- Espace généreux — le désordre visuel génère de l'anxiété sur un sujet financier
- Données et chiffres mis en avant (les utilisateurs veulent des preuves)

### 1.2 Modernité affirmée
- Violet comme couleur d'action — différenciateur fort dans un secteur dominé par le bleu
- Typographie sans-serif clean, jamais fantaisiste
- Animations sobres et fonctionnelles, jamais décoratives
- Mockups d'app réalistes (pas des maquettes abstraites)

### 1.3 Énergie & optimisme
- Le violet exprime à la fois la confiance (proximité du bleu) et la créativité — parfait pour une app qui "réconcilie" les couples
- Statistiques positives en avant (les couples qui réussissent ensemble)
- Ton visuel chaleureux malgré le sujet financier

### 1.4 Clarté
- Hiérarchie d'information stricte — une idée par section
- CTA unique par page (télécharger l'app)
- Zéro friction visuelle — l'œil sait toujours où aller

---

## 2. Ton visuel

| Dimension | Positionnement |
|-----------|----------------|
| **Style** | Clean, aéré, moderne |
| **Ambiance** | Premium, affirmé, accessible |
| **Palette** | Violet `#2347E5` · Noir `#0D0D0D` · Blanc `#FFFFFF` |
| **Niveau de détail** | Épuré — blanc dominant, accents violet |
| **Inspiration design** | Stripe (blanc + accent fort) + Notion (noir/blanc/moderne) + Revolut (fintech épuré) |
| **Mots-clés** | Confiance, clarté, énergie, couple, modernité financière |

---

## 3. Usage des images et illustrations

### 3.1 Mockups d'application
- Présenter de vrais écrans de l'app (ou des maquettes fidèles)
- Fond de mockup : smartphone en couleur neutre (noir mat ou blanc)
- Ne jamais flotter un mockup sur fond blanc pur — utiliser une légère ombre ou un fond de couleur douce
- Format : portrait 9:19.5 (ratio iPhone/Android moderne)

### 3.2 Illustrations de personas
- Style : illustrations vectorielles minimalistes, personnages stylisés non réalistes
- Palette : utiliser les couleurs du design system (bleu, vert, neutrals)
- Pas de photos de couples — trop générique, risque de stock photo visible
- Format : carrés 1:1 ou paysage 4:3

### 3.3 Photos de couples (si utilisées sur /avis)
- Photos de profil des témoignages : petites, rondes (avatar 48px), style naturel
- Éviter les photos de stock trop lisses — préférer un aspect authentique
- Alternativement : initiales colorées sur fond de couleur

### 3.4 Sources recommandées
- **Illustrations :** Humaaans, Undraw, Storyset (style vectoriel cohérent)
- **Icônes :** Lucide Icons — stroke uniquement, épaisseur 1.5px
- **Mockups device :** Mockuphone, Device Frames (libres de droit)

---

## 4. Rythme visuel

### 4.1 Sections alternées (page /fonctionnalites)
- Alternance fond blanc `#FFFFFF` / fond violet très clair `#F4F6FE` entre les blocs
- Image à gauche puis à droite (desktop), toujours en haut sur mobile
- Espacement identique entre chaque bloc

### 4.2 Sections foncées (CTA, hero secondaire)
- Fond noir `#0D0D0D` avec texte blanc — sections CTA finales
- Ou fond violet `#2347E5` avec texte blanc — hero alternatif, section engagement
- Jamais plus de 2 sections foncées par page

### 4.3 Hiérarchie visuelle
```
[1. Hero — accroche + CTA]          ← Fond blanc #FFFFFF
[2. Preuve sociale / stat]          ← Fond blanc #FFFFFF
[3. "Comment ça marche"]            ← Fond violet très clair #F4F6FE
[4. Fonctionnalités / features]     ← Alternance blanc / #F4F6FE
[5. Témoignages]                    ← Fond blanc #FFFFFF
[6. CTA final]                      ← Fond noir #0D0D0D
```

---

## 5. Adaptation mobile

| Composant | Desktop → Mobile |
|-----------|-----------------|
| **Titres h1** | 52px → 36px |
| **Padding sections** | 96px → 64px |
| **Hero** | Texte gauche + mockup droite → Texte + mockup empilés |
| **Blocs fonctionnalités** | Gauche/droite alternés → empilés (mockup toujours au-dessus) |
| **CTA download** | 2 boutons côte à côte → empilés verticalement |
| **Navigation** | Horizontale → hamburger (slide-in droite) |
| **CTA sticky** | Dans header → barre fixe en bas d'écran |

### Règles tactiles
- Cibles tactiles minimum : 44×44px
- Espacement entre éléments interactifs : 8px minimum
- Boutons full-width sur mobile (< 480px)

---

## 6. Exemple d'application : Card témoignage

```
┌────────────────────────────────────────┐
│  ┌──┐  Léa A.                          │  ← Avatar 40px rond, fond #E8EDFB
│  │LA│  Lyon · Utilisatrice depuis 8 mois│  ← Inter 13px, #737373
│  └──┘  ★★★★★ violet #2347E5           │
│                                        │
│  "On a enfin arrêté de se disputer     │  ← Inter 15px Regular, #0D0D0D
│   sur les courses. L'app nous a        │
│   libérés d'un stress que je ne         │
│   savais même plus nommer."            │
│                                        │
│  Couple avec revenus différents        │  ← Badge #E8EDFB / texte #2347E5
└────────────────────────────────────────┘
```
