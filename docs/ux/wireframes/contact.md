# Wireframe — Contact (`/contact`) — Mafinco

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
│ EN-TÊTE DE PAGE                                                  │
│  Fil d'Ariane : Accueil > Contact                               │
│  Titre : "Parlons-en"                                           │
│  Sous-titre : "Une question, un problème ? On répond sous 72h." │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SECTION PRINCIPALE : 2 colonnes                                 │
│                                                                  │
│  ┌─────────────────────────────┐  ┌─────────────────────────┐  │
│  │  FORMULAIRE                 │  │  INFOS                  │  │
│  │                             │  │                         │  │
│  │  Prénom + Nom *             │  │  📧 hello@mafinco.fr    │  │
│  │  [_________]  [_________]  │  │                         │  │
│  │                             │  │  Réponse sous 72h       │  │
│  │  Email *                    │  │  ouvrables              │  │
│  │  [_______________________] │  │                         │  │
│  │                             │  │  ─────────────────────  │  │
│  │  Sujet *                   │  │  Retrouvez-nous sur :   │  │
│  │  [▼ Sélectionner...]       │  │                         │  │
│  │   - Support app             │  │  [Instagram]            │  │
│  │   - Question générale       │  │  [TikTok]               │  │
│  │   - Presse                  │  │  [LinkedIn]             │  │
│  │   - Autre                   │  │                         │  │
│  │                             │  │  ─────────────────────  │  │
│  │  Message *                  │  │  Partenariat ?          │  │
│  │  [_______________________] │  │  → /partenaires         │  │
│  │  [_______________________] │  │                         │  │
│  │  [_______________________] │  │                         │  │
│  │                             │  │                         │  │
│  │  ☐ J'accepte la politique  │  │                         │  │
│  │    de confidentialité      │  │                         │  │
│  │                             │  │                         │  │
│  │  [ Envoyer mon message ]    │  │                         │  │
│  └─────────────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ FOOTER                                                           │
│ [Logo]  Fonctionnalités | Avis | Partenaires | À propos         │
│         Mentions légales | Confidentialité | © 2026 Mafinco     │
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
│ Accueil > Contact       │
│                         │
│ Parlons-en              │
│ Réponse sous 72h        │
└─────────────────────────┘

┌─────────────────────────┐
│ FORMULAIRE              │
│                         │
│ Prénom *                │
│ [___________________]   │
│                         │
│ Nom *                   │
│ [___________________]   │
│                         │
│ Email *                 │
│ [___________________]   │
│                         │
│ Sujet *                 │
│ [▼ Sélectionner...]     │
│                         │
│ Message *               │
│ [___________________]   │
│ [___________________]   │
│                         │
│ ☐ Politique confid.    │
│                         │
│ [ Envoyer ]             │
└─────────────────────────┘

┌─────────────────────────┐
│ INFOS                   │
│ 📧 hello@mafinco.fr    │
│ Réponse sous 72h        │
│                         │
│ [Instagram] [TikTok]    │
│ [LinkedIn]              │
└─────────────────────────┘
```

---

## États

| État | Comportement |
|---|---|
| **Champ invalide** | Bordure rouge + message d'erreur inline sous le champ |
| **Envoi en cours** | Bouton désactivé + spinner |
| **Succès** | Redirection vers /confirmation |
| **Erreur serveur** | Toast : "Envoi échoué, veuillez réessayer" + bouton [Réessayer] |
