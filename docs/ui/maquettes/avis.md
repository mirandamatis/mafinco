# Maquette visuelle — Avis (`/avis`) — Mafinco

> **Date :** 16/06/2026

---

## Note globale

### Fond : `#F4F6FE` — section en haut de page

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│   ┌──────────────────────────┐   ┌──────────────────────────────┐  │
│   │  ★★★★★                  │   │  App Store  ★★★★★  4.8       │  │
│   │  DM Sans 72px Bold       │   │  Google Play ★★★★★ 4.7       │  │
│   │  #2347E5                 │   │                              │  │
│   │  4.8 / 5                 │   │  Inter 14px #737373          │  │
│   │                          │   │  ★ icônes #2347E5            │  │
│   │  2 400 avis cumulés       │   │                              │  │
│   │  Inter 16px #737373      │   │                              │  │
│   └──────────────────────────┘   └──────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Filtres

### Fond : `#FFFFFF` — sticky au scroll (position relative section)

```
[ Tous ✓ ]   [ Jeune couple ]   [ Épargnants ]   [ Projet immo ]

Filtre actif :
  fond #2347E5, texte #FFFFFF, radius 9999px, padding 8px 20px

Filtre inactif :
  fond transparent, bordure 1px #E5E5E5, texte #2D2D2D, radius 9999px
  hover → fond #E8EDFB, bordure #2347E5

Inter 14px Medium, transition 0.2s
```

---

## Grille de témoignages

### Desktop : 3 colonnes / Tablette : 2 colonnes / Mobile : 1 colonne
### Fond : `#FFFFFF`

```
┌──────────────────────────┐  ┌──────────────────────────┐  ┌──────────────────────────┐
│  ┌──┐  Léa A.            │  │  ┌──┐  Julien M.         │  │  ┌──┐  Camille B.        │
│  │LA│  Lyon, 27 ans       │  │  │JM│  Paris, 36 ans     │  │  │CB│  Bordeaux, 30 ans  │
│  └──┘  Utilisatrice 8 mois│  │  └──┘  Utilisateur 1 an  │  │  └──┘  Utilisatrice 4 mois│
│                           │  │                          │  │                          │
│  ★★★★★                    │  │  ★★★★★                   │  │  ★★★★★                   │
│  #2347E5, 16px            │  │  #2347E5, 16px           │  │  #2347E5, 16px           │
│                           │  │                          │  │                          │
│  "On a enfin arrêté de    │  │  "L'IA nous a trouvé     │  │  "La simulation de prêt  │
│   se disputer sur les     │  │   le PEA parfait.        │  │   m'a montré qu'on       │
│   courses. On voit enfin  │  │   3,2% cette année."     │  │   pouvait emprunter       │
│   où va notre argent."    │  │                          │  │   350k€. Parfait !"      │
│  Inter 15px #2D2D2D       │  │  Inter 15px #2D2D2D      │  │  Inter 15px #2D2D2D      │
│                           │  │                          │  │                          │
│  [Revenus différents]     │  │  [Épargnants]            │  │  [Projet immo]           │
│  badge #E8EDFB #1530AD    │  │  badge #E8EDFB #2347E5   │  │  badge #E8EDFB #1530AD   │
│                           │  │                          │  │                          │
│  card: fond #FFFFFF       │  │  fond #FFFFFF            │  │  fond #FFFFFF            │
│  border 1px #E5E5E5       │  │  border 1px #E5E5E5      │  │  border 1px #E5E5E5      │
│  radius 12px, pad 24px    │  │  radius 12px, pad 24px   │  │  radius 12px, pad 24px   │
└──────────────────────────┘  └──────────────────────────┘  └──────────────────────────┘

Avatar :
  Cercle 40px, fond #E8EDFB, initiales DM Sans 14px SemiBold #2347E5
```

---

## Section "Dans la presse"

### Fond : `#F4F6FE`

```
┌──────────────────────────────────────────────────────────────────────┐
│                  Dans la presse                                      │
│                  DM Sans 28px SemiBold #0D0D0D                      │
│                                                                      │
│  [Le Monde]   [Les Echos]   [BFM Business]   [Capital]             │
│   logos grisés #E5E5E5, hauteur 28px                                │
│   hover : opacité 100%, couleur d'origine                           │
│                                                                      │
│  "Une app qui réconcilie enfin les couples avec l'argent."         │
│  Inter 16px italic #737373 (centré)                                 │
└──────────────────────────────────────────────────────────────────────┘
```

---

## CTA final

```
Fond : #2347E5

"Rejoignez 50 000 couples satisfaits."
DM Sans 36px Bold #FFFFFF

[App Store ↓]    [Google Play ↓]
```

---

## Notes visuelles

| Décision | Justification |
|----------|---------------|
| **Avatars initiales plutôt que photos** | Authenticité > stock photos génériques — les photos de vrais utilisateurs s'ajoutent progressivement |
| **Étoiles vertes** | Cohérence avec le vert d'action/succès du design system |
| **Badges segmentation** | Identification rapide — chaque lecteur trouve "son" type de couple |
| **Filtres pill shape (radius full)** | Style moderne, cohérent avec les apps fintech (Revolut, Finary) |
