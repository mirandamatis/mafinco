# Maquette visuelle — Services — Catalogue (/services)

> **Template :** Page catalogue des services  
> **Objectif :** Donner une vue d'ensemble de l'offre en un coup d'œil  

---

## 1. Fil d'Ariane

```
Desktop :  Accueil  >  Services
Mobile  :  Accueil  >  Services
```

---

## 2. Hero de page

```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FDF8F3, Padding: 64px 0 desktop / 40px 0 mobile   │
│                                                              │
│                    Nos soins                                 │ ← h1: 44px / 32px mobile
│                                                              │
│   Des prestations sur mesure pour votre bien-être           │ ← h4: Inter 18px #5C5650
│                                                              │
│  ─── ─── ─── ─── ─── ─── ─── ─── ─── ───                   │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Grille des services

### Desktop (≥ 1024px) — 3 colonnes

```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FFFFFF, Padding: 64px 0                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │  │ ← Grille 3 colonnes
│  │  │  🌿 Icône    │  │  💆 Icône    │  │  🤰 Icône │  │  │    Gap: 24px
│  │  │  SOINS       │  │  MODELAGES   │  │  AUTOUR DE │  │  │
│  │  │  VISAGE      │  │  ÉVASION     │  │  LA        │  │  │
│  │  │              │  │              │  │  MATERNITÉ │  │  │
│  │  │ Classiques + │  │ Massages     │  │ Soins post-│  │  │
│  │  │ INSPIRA:MED  │  │ bien-être    │  │ partum     │  │  │
│  │  │              │  │              │  │            │  │  │
│  │  │ [Découvrir →]│  │ [Découvrir →]│  │ [Découvrir]│  │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘  │  │
│  │                                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │  │
│  │  │  🏋️ Icône   │  │  🪒 Icône   │  │  💅 Icône │  │  │
│  │  │  REMODELANT  │  │  ÉPILATIONS  │  │  BAR À     │  │  │
│  │  │  CORPS       │  │              │  │  ONGLES    │  │  │
│  │  │              │  │              │  │            │  │  │
│  │  │ Soins minceur│  │ Femme & homme│  │ Pose &     │  │  │
│  │  │ & remodelage │  │              │  │ vernis     │  │  │
│  │  │              │  │              │  │            │  │  │
│  │  │ [Découvrir →]│  │ [Découvrir →]│  │ [Découvrir]│  │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘  │  │
│  │                                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │  │
│  │  │  ✋ Icône    │  │  👁️ Icône   │  │  👰 Icône │  │  │
│  │  │  MAINS &     │  │  BEAUTÉ DU   │  │  LA FUTURE │  │  │
│  │  │  PIEDS       │  │  REGARD      │  │  MARIÉE    │  │  │
│  │  │              │  │              │  │            │  │  │
│  │  │ Soin des     │  │ Extensions   │  │ Forfait    │  │  │
│  │  │ mains/pieds  │  │ de cils      │  │ mariage    │  │  │
│  │  │              │  │              │  │ complet    │  │  │
│  │  │ [Découvrir →]│  │ [Découvrir →]│  │ [Découvrir]│  │  │
│  │  └──────────────┘  └──────────────┘  └────────────┘  │  │
│  │                                                        │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Détail d'une carte de service
```
┌────────────────────┐
│    🌿 (icône)      │ ← 48×48px, couleur #8BA888 (sauge)
│                    │
│  SOINS VISAGE      │ ← h3: 22px #2D2A24
│                    │    Cormorant Garamond SemiBold
│  Classiques +      │ ← Inter 14px #5C5650
│  INSPIRA:MED       │
│                    │
│  ┌─────────────┐   │
│  │ Découvrir → │   │ ← Bouton ghost #5C5650
│  └─────────────┘   │
│                    │
│  Fond: #FFF        │
│  Radius: 12px      │
│  Padding: 32px 24px│
│  Ombre: shadow-sm  │
│  Hover: Y: -4px    │
│         shadow-hover│
└────────────────────┘
```

### Mobile (< 768px) — 2 colonnes puis 1 colonne
```
┌──────────────────────────────────┐
│  ┌──────────────┐ ┌──────────┐  │
│  │  🌿 Visage   │ │ 💆 Model│  │ ← 2 colonnes
│  │  [Découvrir] │ │ [Découv.]│  │    Gap: 16px
│  └──────────────┘ └──────────┘  │
│  ┌──────────────┐ ┌──────────┐  │
│  │  🤰 Maternité│ │ 🏋️ Remod│  │
│  │  [Découvrir] │ │ [Découv.]│  │
│  └──────────────┘ └──────────┘  │
│  ┌──────────────┐ ┌──────────┐  │
│  │  🪒 Épilation│ │ 💅 Ongles│  │
│  │  [Découvrir] │ │ [Découv.]│  │
│  └──────────────┘ └──────────┘  │
│  ┌──────────────┐ ┌──────────┐  │
│  │  ✋ Mains     │ │ 👁️ Regard│  │
│  │  & Pieds     │ │         │  │
│  │  [Découvrir] │ │ [Découv.]│  │
│  └──────────────┘ └──────────┘  │
│  ┌──────────────────────────┐   │
│  │  👰 Future Mariée        │   │ ← Full-width si 9e
│  │  [Découvrir]             │   │
│  └──────────────────────────┘   │
└──────────────────────────────────┘
```

**Note :** En dessous de 480px, la grille passe en 1 colonne (cartes full-width).

---

## 4. Section Carte cadeau (mise en avant)

```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FDF8F3, Padding: 48px 0                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │                                                │   │  │
│  │  │     🎁  CARTE CADEAU                          │   │  │ ← h3: 22px
│  │  │                                                │   │  │    #2D2A24
│  │  │     Offrez un moment de bien-être              │   │  │
│  │  │     à vos proches                              │   │  │
│  │  │                                                │   │  │
│  │  │     À partir de 30€, valable 1 an              │   │  │ ← Inter 14px #5C5650
│  │  │                                                │   │  │
│  │  │     ┌──────────────────────────────────┐       │   │  │
│  │  │     │   Offrir une carte cadeau →      │       │   │  │ ← Bouton accent
│  │  │     └──────────────────────────────────┘       │   │  │    rose #D4A0A0
│  │  │                                                │   │  │
│  │  │     Fond: #FFF, radius: 16px, shadow-md        │   │  │
│  │  │     Padding: 32px, centré                      │   │  │
│  │  └────────────────────────────────────────────────┘   │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## 5. Animations suggérées

| Élément | Animation |
|---------|-----------|
| **Grille de services** | Cartes apparaissent avec fade-in + translateY, stagger 80ms, depuis le bas |
| **Carte cadeau** | Apparition élargie (scale 0.95→1 + fade) |
| **Hover cartes** | Soulèvement -4px, ombre renforcée, transition 0.3s ease-out |
| **Hover bouton** | Background color transition 0.2s |

---

## 6. État responsive — grille

| Breakpoint | Colonnes | Gap | Padding carte |
|------------|----------|-----|---------------|
| ≥ 1024px | 3 | 24px | 32px 24px |
| 768-1023px | 2 | 20px | 24px 20px |
| 480-767px | 2 | 16px | 20px 16px |
| < 480px | 1 | — | 20px 16px |
