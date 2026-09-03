# Wireframe — Avis (`/avis`) — Mafinco

> **Date :** 16/06/2026 | **Breakpoints :** Desktop 1440px / Mobile 375px

---

## DESKTOP

```
┌─────────────────────────────────────────────────────────────────┐
│ HEADER (sticky)                                                  │
│ [Logo Mafinco]  Fonctionnalités  Avis  Partenaires  À propos   │
│                                             [Télécharger l'app ▼]│
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ NOTE GLOBALE                                                     │
│  Fil d'Ariane : Accueil > Avis                                 │
│                                                                  │
│  ┌──────────────────────┐  ┌──────────────────────────────┐    │
│  │  ★★★★★              │  │  ★★★★★  App Store (iOS)       │    │
│  │  4.8 / 5             │  │  4.8 · 1 847 notes           │    │
│  │  2 400 avis cumulés  │  │                              │    │
│  │                      │  │  ★★★★★  Google Play          │    │
│  │  "Ce que pensent     │  │  4.7 · 553 notes             │    │
│  │  les couples"        │  │                              │    │
│  └──────────────────────┘  └──────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ FILTRES                                                          │
│  [Tous ✓]  [Jeune couple]  [Épargnants]  [Projet immo]         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ GRILLE TÉMOIGNAGES (3 colonnes)                                 │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ [Photo] Léa A.  │  │ [Photo] Julien M│  │ [Photo] Camille │ │
│  │ Lyon, 27 ans    │  │ Paris, 36 ans   │  │ Bordeaux, 30 ans│ │
│  │ ★★★★★           │  │ ★★★★★           │  │ ★★★★★           │ │
│  │ "On a arrêté de │  │ "L'IA nous a    │  │ "La simulation  │ │
│  │ se disputer sur │  │ trouvé le PEA   │  │ de prêt m'a     │ │
│  │ les courses. On │  │ parfait. 3,2%   │  │ montré qu'on    │ │
│  │ voit enfin où   │  │ de rendement    │  │ pouvait emprunter│ │
│  │ part l'argent." │  │ cette année."   │  │ 350k€. Parfait!"│ │
│  │ Utilisateur     │  │ Utilisateur     │  │ Utilisateur     │ │
│  │ depuis 8 mois   │  │ depuis 1 an     │  │ depuis 4 mois   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                  │
│  [... 6 autres cards sur 2 lignes supplémentaires ...]          │
│                                                                  │
│                    [Voir plus d'avis ↓]                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ DANS LA PRESSE                                                   │
│  [Logo média 1]  [Logo média 2]  [Logo média 3]  [Logo média 4] │
│  "Citation extraite de l'article..."                            │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ CTA FINAL                                                        │
│  "Rejoignez 50 000 couples satisfaits."                         │
│              [App Store ↓]         [Google Play ↓]              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ FOOTER                                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## MOBILE (375px)

```
┌─────────────────────────┐
│ HEADER (sticky)         │
│ [Logo]              [☰] │
└─────────────────────────┘

┌─────────────────────────┐
│ NOTE GLOBALE            │
│ ★★★★★ 4.8/5            │
│ 2 400 avis cumulés      │
│                         │
│ App Store ★ 4.8         │
│ Google Play ★ 4.7       │
└─────────────────────────┘

┌─────────────────────────┐
│ FILTRES (scroll H.)     │
│ [Tous] [Jeune] [Éparg.] │
│ [Immo]   →              │
└─────────────────────────┘

┌─────────────────────────┐
│ GRILLE (1 colonne)      │
│ ┌─────────────────────┐ │
│ │ Léa A. — Lyon ★★★★★ │ │
│ │ "On a arrêté de se  │ │
│ │ disputer sur les    │ │
│ │ courses..."         │ │
│ └─────────────────────┘ │
│ [cards suivantes...]    │
│ [Voir plus ↓]           │
└─────────────────────────┘

┌─────────────────────────┐
│ PRESSE (logos 2x2)      │
│ [Logo] [Logo]           │
│ [Logo] [Logo]           │
└─────────────────────────┘

┌─────────────────────────┐
│ CTA                     │
│ [  App Store ↓  ]       │
│ [  Google Play ↓]       │
└─────────────────────────┘
```

---

## États des filtres

| État | Comportement |
|---|---|
| **Filtre actif** | Fond plein (couleur primaire) + texte blanc |
| **Filtre inactif** | Outline + texte couleur primaire |
| **Transition** | Fade out/in des cards (200ms) |
| **Résultat vide** | Message : "Aucun avis pour ce profil. [Voir tous les avis]" |
| **Loading** | Skeleton cards (grille grisée animée) |
