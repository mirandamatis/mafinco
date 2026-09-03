# Maquette visuelle — Accueil (`/`) — Mafinco

> **Template :** Landing page app mobile
> **Inspiration :** Revolut (épuré/moderne) + Finary (UX premium)
> **Ambiance :** Blanc dominant, Navy profond, accents verts — confiance & croissance

---

## 1. Header / Navigation

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│ ░░ fond #FFFFFF — hauteur 72px — shadow-sm au scroll ░░░░░░░░░░░░░░ │
│ ░░  [Mafinco]  Fonctionnalités  Avis  Partenaires  À propos      ░░ │
│    DM Sans Bold                 Inter 15px Medium                    │
│    #2347E5                      #2D2D2D                              │
│                                                ┌──────────────────┐  │
│                                                │  Télécharger ↓  │  │
│                                                └──────────────────┘  │
│                                                fond #2347E5 texte blanc│
└──────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌──────────────────────────────────┐
│ ░░ #FFFFFF — hauteur 60px ░░░░░░ │
│ ░░  [Mafinco]            [☰]  ░░ │
│      DM Sans Bold #2347E5        │
└──────────────────────────────────┘
```

---

## 2. Hero Section

### Desktop (fond #FFFFFF, section pleine hauteur ~100vh)
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ┌───────────────────────────────┐   ┌────────────────────────────┐ │
│  │                               │   │                            │ │
│  │  Gérez votre argent           │   │   [MOCKUP SMARTPHONE]      │ │
│  │  à deux, enfin                │   │   fond : shadow-xl         │ │
│  │  simplement.                  │   │   radius : 24px            │ │
│  │                               │   │                            │ │
│  │  DM Sans 60px Bold #0D0D0D   │   │   Écran affiché :          │ │
│  │                               │   │   Dashboard couple         │ │
│  │  70% des couples déclarent    │   │   • Solde commun : 847€    │ │
│  │  que l'argent est une source  │   │   • Thomas doit 47€ à Léa  │ │
│  │  de tension.                  │   │   • Graphique mois         │ │
│  │  Inter 18px #737373          │   │                            │ │
│  │                               │   └────────────────────────────┘ │
│  │  ┌────────────────┐  ┌──────┐ │                                   │
│  │  │  App Store ↓  │  │ Play │ │                                   │
│  │  │  #0D0D0D       │  │  ↓  │ │                                   │
│  │  └────────────────┘  └──────┘ │                                   │
│  │  160×48px chacun, radius 12px │                                   │
│  │                               │                                   │
│  │  ★★★★★ 4.8 · 2 400 avis      │                                   │
│  │  Inter 14px #737373          │                                   │
│  └───────────────────────────────┘                                   │
└──────────────────────────────────────────────────────────────────────┘
```

### Mobile (fond #FFFFFF)
```
┌──────────────────────────────────┐
│                                  │
│  Gérez votre argent              │
│  à deux, enfin                   │
│  simplement.                     │
│  DM Sans 36px Bold #0D0D0D      │
│                                  │
│  Inter 16px #737373 :           │
│  70% des couples...              │
│                                  │
│  ┌──────────────────────────┐   │
│  │   [MOCKUP APP — 280px]   │   │
│  │   shadow-lg, radius 20px  │   │
│  └──────────────────────────┘   │
│                                  │
│  ★★★★★ 4.8 · 2 400 avis        │
│                                  │
│  ┌────────────────────────────┐ │
│  │     App Store ↓            │ │
│  │     #0D0D0D full-width     │ │
│  └────────────────────────────┘ │
│  ┌────────────────────────────┐ │
│  │     Google Play ↓          │ │
│  └────────────────────────────┘ │
└──────────────────────────────────┘
```

---

## 3. Section "Comment ça marche"

### Fond : `#F4F6FE` — padding 96px desktop / 64px mobile

```
Desktop :
┌──────────────────────────────────────────────────────────────────────┐
│                  Comment ça marche ?                                 │
│                  DM Sans 36px SemiBold #2347E5                      │
│                                                                      │
│  ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐│
│  │  [①]              │  │  [②]              │  │  [③]              ││
│  │  cercle #2347E5   │  │  cercle #2347E5   │  │  cercle #2347E5   ││
│  │  40px DM Sans     │  │  40px DM Sans     │  │  40px DM Sans     ││
│  │                   │  │                   │  │                   ││
│  │  Saisissez        │  │  L'app calcule    │  │  Investissez      ││
│  │  vos dépenses     │  │  automatiquement  │  │  ensemble         ││
│  │  communes         │  │  qui doit quoi    │  │  grâce à l'IA     ││
│  │                   │  │                   │  │                   ││
│  │  Inter 15px       │  │  Inter 15px       │  │  Inter 15px       ││
│  │  #2D2D2D          │  │  #2D2D2D          │  │  #2D2D2D          ││
│  └───────────────────┘  └───────────────────┘  └───────────────────┘│
│            ——————————————————————————————                            │
│                   ligne pointillée #E5E5E5 reliant les cercles       │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 4. Section "4 Fonctionnalités"

### Fond : `#FFFFFF` — 4 cards en grille 4 colonnes desktop, 2 colonnes tablette, 1 colonne mobile

```
┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│               │  │               │  │               │  │               │
│  ┌──────────┐ │  │  ┌──────────┐ │  │  ┌──────────┐ │  │  ┌──────────┐ │
│  │ [receipt]│ │  │  │[calc.]   │ │  │  │[bar-chart│ │  │  │[sparkles]│ │
│  │ 48px     │ │  │  │48px      │ │  │  │  48px    │ │  │  │ 48px     │ │
│  │ fond     │ │  │  │fond      │ │  │  │  fond    │ │  │  │  fond    │ │
│  │ #E8EDFB  │ │  │  │#E8EDFB   │ │  │  │  #E8EDFB │ │  │  │  #E8EDFB │ │
│  │ r-12px   │ │  │  │r-12px    │ │  │  │  r-12px  │ │  │  │  r-12px  │ │
│  └──────────┘ │  │  └──────────┘ │  │  └──────────┘ │  │  └──────────┘ │
│               │  │               │  │               │  │               │
│  Saisie       │  │  Calcul auto  │  │  Graphiques   │  │  Conseils IA  │
│  dépenses     │  │               │  │               │  │               │
│  DM Sans 18px │  │  DM Sans 18px │  │  DM Sans 18px │  │  DM Sans 18px │
│  SemiBold     │  │  SemiBold     │  │  SemiBold     │  │  SemiBold     │
│  #0D0D0D      │  │  #0D0D0D      │  │  #0D0D0D      │  │  #0D0D0D      │
│               │  │               │  │               │  │               │
│  Inter 14px   │  │  Inter 14px   │  │  Inter 14px   │  │  Inter 14px   │
│  #737373      │  │  #737373      │  │  #737373      │  │  #737373      │
│               │  │               │  │               │  │               │
│  Card : fond  │  │  fond #FFFFFF │  │  fond #FFFFFF │  │  fond #FFFFFF │
│  #FFFFFF      │  │  shadow-md    │  │  shadow-md    │  │  shadow-md    │
│  shadow-md    │  │  radius 16px  │  │  radius 16px  │  │  radius 16px  │
│  radius 16px  │  │  padding 32px │  │  padding 32px │  │  padding 32px │
└───────────────┘  └───────────────┘  └───────────────┘  └───────────────┘

                       [Voir toutes les fonctionnalités →]
                        Inter 15px Medium #2347E5
                        soulignement au hover : 2px #2347E5
```

---

## 5. Section "Pour quel couple ?"

### Fond : `#F4F6FE` — 3 cards

```
┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│                   │  │                   │  │                   │
│  ┌─────────────┐  │  │  ┌─────────────┐  │  │  ┌─────────────┐  │
│  │ illustration│  │  │  │ illustration│  │  │  │ illustration│  │
│  │ couple 1    │  │  │  │ couple 2    │  │  │  │ couple 3    │  │
│  │ 120×120px   │  │  │  │ 120×120px   │  │  │  │ 120×120px   │  │
│  └─────────────┘  │  │  └─────────────┘  │  │  └─────────────┘  │
│                   │  │                   │  │                   │
│  [Revenus diff.  ]│  │  [Épargnants     ]│  │  [Projet immo    ]│
│  badge #E8EDFB    │  │  badge #E8EDFB    │  │  badge #E8EDFB    │
│  texte #1530AD    │  │  texte #1530AD    │  │  texte #1530AD    │
│                   │  │                   │  │                   │
│  Léa & Thomas     │  │  Sarah & Julien   │  │  Maxime & Camille │
│  DM Sans 18px     │  │  DM Sans 18px     │  │  DM Sans 18px     │
│  SemiBold #0D0D0D │  │  SemiBold #0D0D0D │  │  SemiBold #0D0D0D │
│                   │  │                   │  │                   │
│  "Plus jamais de  │  │  "Notre IA nous   │  │  "Simulation de   │
│  tensions sur     │  │  a trouvé le PEA  │  │  prêt : 350k€     │
│  les dépenses"    │  │  parfait"         │  │  en 2 minutes"    │
│  Inter 14px       │  │  Inter 14px       │  │  Inter 14px       │
│  #737373 italic   │  │  #737373 italic   │  │  #737373 italic   │
│                   │  │                   │  │                   │
│  Card : #FFFFFF   │  │  #FFFFFF          │  │  #FFFFFF          │
│  border #E5E5E5   │  │  border #E5E5E5   │  │  border #E5E5E5   │
│  radius 16px      │  │  radius 16px      │  │  radius 16px      │
└───────────────────┘  └───────────────────┘  └───────────────────┘
```

---

## 6. Section "Avis" (aperçu)

### Fond : `#FFFFFF`

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│              ★★★★★ 4.8 / 5 · 2 400 avis                           │
│              DM Sans 48px Bold #2347E5 (chiffre)                    │
│              Inter 16px #737373 (texte)                             │
│                                                                      │
│  ┌──────────────────────────┐  ┌──────────────────────────┐        │
│  │ [LA] Léa A.              │  │ [JM] Julien M.           │        │
│  │ avatar #E8EDFB           │  │ avatar #E8EDFB           │        │
│  │ ★★★★★ #2347E5           │  │ ★★★★★ #2347E5           │        │
│  │                          │  │                          │        │
│  │ "On a arrêté de se       │  │ "L'IA nous a trouvé      │        │
│  │  disputer sur les        │  │  le PEA parfait."        │        │
│  │  courses !"              │  │                          │        │
│  │ Inter 15px #2D2D2D       │  │ Inter 15px #2D2D2D       │        │
│  │                          │  │                          │        │
│  │ card: #FFFFFF            │  │ card: #FFFFFF            │        │
│  │ border #E5E5E5 1px       │  │ border #E5E5E5 1px       │        │
│  │ radius 12px, padding 24px│  │ radius 12px, padding 24px│        │
│  └──────────────────────────┘  └──────────────────────────┘        │
│                                                                      │
│                       [Voir tous les avis →]                        │
│                        Inter 15px Medium #2347E5                    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 7. CTA Final

### Fond : `#2347E5` (section foncée — radius 24px ou fond full-bleed)

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│           Rejoignez 50 000 couples qui gèrent mieux                 │
│           leur argent.                                               │
│           DM Sans 36px Bold #FFFFFF                                 │
│                                                                      │
│    ┌──────────────────────┐    ┌──────────────────────┐            │
│    │   App Store ↓        │    │   Google Play ↓      │            │
│    │   #FFFFFF texte       │    │   #FFFFFF texte       │            │
│    │   fond #FFFFFF/20%    │    │   fond #FFFFFF/20%    │            │
│    │   radius 12px         │    │   radius 12px         │            │
│    └──────────────────────┘    └──────────────────────┘            │
│                                                                      │
│         Gratuit · Sans carte bancaire · RGPD · DSP2                 │
│         Inter 14px #E5E5E5                                          │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 8. Footer

### Fond : `#2347E5`

```
┌──────────────────────────────────────────────────────────────────────┐
│ [Mafinco]           Fonctionnalités  Avis  Partenaires  À propos   │
│  DM Sans Bold       Contact  Mentions légales  Confidentialité      │
│  #FFFFFF                                                             │
│                                                                      │
│  [App Store]  [Google Play]      © 2026 Mafinco                    │
│  icônes #2347E5                  Inter 12px #E5E5E5                │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Notes visuelles clés

| Décision | Justification |
|----------|---------------|
| **Blanc dominant** | Réduit l'anxiété financière — clarté = confiance |
| **Navy #2347E5 pour les titres et le footer** | Autorité, premium, cohérence financière |
| **Vert #2347E5 uniquement pour les actions et les étoiles** | Le vert = "go", croissance — réservé aux CTA et validations |
| **Mockup d'app en héro** | Montre le produit immédiatement — réduit le risque perçu |
| **Statistique 70% dans le hero** | Chiffre fort = ancrage émotionnel immédiat |
| **Boutons store en dark** | Cohérence avec les guidelines Apple/Google |
