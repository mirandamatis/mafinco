# Sitemap — Mafinco

> **Date :** 16/06/2026
> **Auteur :** Expert UX
> **Statut :** Validé par Chef de Projet

---

## Arborescence complète

```
┌── Accueil (/)                                    [SEO : 100]
│   Capter, comprendre, convertir en 10 secondes
│
├── Fonctionnalités (/fonctionnalites)             [SEO : 95]
│   Détail des 4 briques + conseils IA
│
├── Avis (/avis)                                   [SEO : 80]
│   Preuve sociale — témoignages couples
│
├── Partenaires (/partenaires)                     [SEO : 75]
│   Page B2B — banques, courtiers, institutions
│
├── À propos (/a-propos)                           [SEO : 65]
│   Mission, équipe, histoire, transparence
│
├── Contact (/contact)                             [SEO : 60]
│   Formulaire simple — utilisateurs & presse
│
├── Presse (/presse)                               [SEO : 50] ← Phase 2
│   Kit médias, communiqués, logos
│
├── Mentions légales (/mentions-legales)           [SEO : 15]
│
├── Politique de confidentialité (/confidentialite) [SEO : 15]
│
└── Pages fonctionnelles
    ├── 404 (/404)
    └── Confirmation (/confirmation)
```

---

## Navigation principale (header)

```
[Logo Mafinco]  |  Fonctionnalités  |  Avis  |  Partenaires  |  À propos  |  [Télécharger l'app ▼]
                                                                              └─ iOS  └─ Android
```

**Note :** Le CTA "Télécharger l'app" est un bouton primaire toujours visible — c'est le seul objectif de conversion.

---

## Navigation secondaire (footer)

```
[Logo]  |  Fonctionnalités  |  Avis  |  Partenaires  |  À propos  |  Contact  |  Presse
         Mentions légales  |  Confidentialité  |  © 2026 Mafinco
```

---

## Détail des pages

### 1. Accueil (`/`)
- **Objectif :** Capter l'attention, expliquer la valeur en < 10s, pousser au téléchargement
- **Sections :**
  - Hero : accroche forte + stat clé (70% des couples) + CTA iOS/Android + visuel app
  - Section "Comment ça marche" (3 étapes animées)
  - Section "4 fonctionnalités" (icônes + descriptions courtes, lien vers /fonctionnalites)
  - Section preuves sociales (note globale + 2 témoignages, lien vers /avis)
  - Section "Pour quel couple ?" (3 cartes personas cliquables)
  - Section CTa finale : double bouton App Store / Google Play
  - Footer

### 2. Fonctionnalités (`/fonctionnalites`)
- **Objectif :** Convaincre par le détail — montrer que l'app répond à tous les cas
- **Sections :**
  - Hero page : titre + sous-titre + CTA
  - Blocs alternés gauche/droite (visuel mockup + texte) pour chaque fonctionnalité :
    1. Saisie des dépenses partagées
    2. Calcul automatique des remboursements
    3. Graphiques de visualisation
    4. Conseils d'investissement IA
  - Section "Compatible avec votre banque" (logos banques partenaires)
  - CTA final téléchargement

### 3. Avis (`/avis`)
- **Objectif :** Lever les derniers freins par la preuve sociale
- **Sections :**
  - Note globale en haut (ex. 4.8/5 — App Store + Google Play)
  - Filtres par profil (Jeune couple / Épargnants / Projet immo)
  - Grille de témoignages (cards avec photo, prénom, situation, note, verbatim)
  - Section "Dans la presse" (logos médias + citations)
  - CTA téléchargement

### 4. Partenaires (`/partenaires`)
- **Objectif :** Crédibiliser auprès des banques et institutions, générer des leads B2B
- **Ton :** Professionnel, chiffré, orienté ROI partenaire
- **Sections :**
  - Hero B2B : "Touchez 14 millions de couples français"
  - Chiffres de traction (utilisateurs, engagement, segments)
  - Modèles de partenariat (affiliation, co-branding, intégration API)
  - Logos partenaires existants
  - Formulaire dédié (nom, entreprise, email, type de partenariat, message)
  - CTA "Prendre rendez-vous"

### 5. À propos (`/a-propos`)
- **Objectif :** Humaniser la marque, créer la confiance
- **Sections :**
  - Mission & vision ("Réconcilier les couples avec leur argent")
  - Histoire de la création (timeline)
  - Équipe fondatrice (photos, rôles, LinkedIn)
  - Engagements (sécurité des données, RGPD, pas de vente de données)
  - CTA téléchargement

### 6. Contact (`/contact`)
- **Objectif :** Point de contact universel — support, presse, partenariats
- **Sections :**
  - Formulaire (nom, email, sujet dropdown, message)
  - Infos : email direct + délai de réponse (72h)
  - Liens vers FAQ (Phase 2) et réseaux sociaux

### 7. Presse (`/presse`) — Phase 2
- **Objectif :** Faciliter le travail des journalistes
- **Contenu :** Kit presse téléchargeable, logos, communiqués, contact presse

### 8-9. Pages légales
- Mentions légales + politique de confidentialité (conformité RGPD, DSP2)

---

## Pages fonctionnelles

### 404
- Illustration couple perdu / finances confuses
- Message : "Oups, cette page ne partage pas les dépenses correctement..."
- 2 CTA : [Accueil] [Voir les fonctionnalités]

### Confirmation
- Post-envoi formulaire : message de remerciement + délai de réponse

---

## Relations entre pages

| Page | Liens entrants | Liens sortants |
|---|---|---|
| Accueil | — | Toutes pages + App Store/Play Store |
| Fonctionnalités | Accueil, Menu, Avis | Accueil, CTA Download |
| Avis | Accueil, Menu | Fonctionnalités, CTA Download |
| Partenaires | Menu, Footer | Contact |
| À propos | Menu, Footer | Contact, Fonctionnalités |
| Contact | Partenaires, À propos, Footer | Confirmation |

---

## Note mobile-first

Le site est conçu **mobile-first** — la majorité du trafic viendra du mobile (publicité Instagram/TikTok, recherche Google mobile). Le CTA "Télécharger" doit être permanent en sticky header sur mobile. Les boutons App Store et Google Play sont **toujours affichés ensemble**, jamais l'un sans l'autre.
