# Maquette visuelle — Contact (`/contact`) — Mafinco

> **Date :** 16/06/2026

---

## En-tête de page

### Fond : `#F4F6FE`

```
Fil d'Ariane : Accueil > Contact
Inter 13px #737373

Parlons-en
DM Sans 48px Bold #0D0D0D

Une question, un problème ? On répond sous 72h ouvrables.
Inter 18px #737373
```

---

## Section principale : 2 colonnes (desktop)

### Fond : `#FFFFFF`

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  ┌──────────────────────────────┐   ┌──────────────────────────┐   │
│  │  FORMULAIRE                  │   │  INFOS                   │   │
│  │  max-width : 520px           │   │                          │   │
│  │                              │   │  📧 hello@mafinco.fr    │   │
│  │  Prénom *   Nom *            │   │  Inter 16px #2347E5      │   │
│  │  [──────────][──────────]    │   │  font-weight 500         │   │
│  │                              │   │                          │   │
│  │  Email *                     │   │  Réponse sous 72h        │   │
│  │  [──────────────────────]    │   │  ouvrables               │   │
│  │                              │   │  Inter 14px #737373      │   │
│  │  Sujet *                     │   │                          │   │
│  │  [▼ Support / Question /     │   │  ─────────────────────   │   │
│  │     Presse / Autre]          │   │                          │   │
│  │                              │   │  Retrouvez-nous :        │   │
│  │  Message *                   │   │  Inter 14px Medium       │   │
│  │  [──────────────────────]    │   │  #2D2D2D                 │   │
│  │  [──────────────────────]    │   │                          │   │
│  │  [──────────────────────]    │   │  [IG] [TikTok] [LI]      │   │
│  │  min-height 120px            │   │  icônes 24px #2D2D2D     │   │
│  │                              │   │  hover → #2347E5         │   │
│  │  ☐ Politique confid.         │   │                          │   │
│  │                              │   │  ─────────────────────   │   │
│  │  [──────────────────────]    │   │                          │   │
│  │  Envoyer mon message →       │   │  Partenariat ?           │   │
│  │  fond #2347E5 texte #FFFFFF  │   │  → /partenaires          │   │
│  │  radius 8px, height 48px     │   │  Inter 14px #2347E5      │   │
│  │  full-width                  │   │  hover : underline #2347E5│   │
│  └──────────────────────────────┘   └──────────────────────────┘   │
│                                                                      │
│  Inputs : fond #FFFFFF, border 1px #E5E5E5, radius 8px, h 48px     │
│  Labels : Inter 14px Medium #2D2D2D, margin-bottom 6px              │
│  Focus   : border 2px #2347E5 + shadow-focus                        │
│  Erreur  : border 2px #DC2626, fond #FFF5F5                         │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Mobile (< 768px) — colonne unique

```
┌──────────────────────────────────┐
│ INFOS (en premier sur mobile)    │
│ 📧 hello@mafinco.fr             │
│ Réponse sous 72h                │
│ [IG] [TikTok] [LI]              │
│                                  │
│ FORMULAIRE (en dessous)          │
│ (champs full-width)              │
└──────────────────────────────────┘
```

---

## Notes visuelles

| Décision | Justification |
|----------|---------------|
| **Email + délai en premier** | Transparence = confiance sur un produit financier |
| **Formulaire full-width mobile** | Confort de saisie sur petit écran |
| **Lien "Partenariat ?" dans le panneau infos** | Redirection douce vers /partenaires sans encombrer le formulaire |
