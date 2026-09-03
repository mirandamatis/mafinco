# Brief complet — Projet Mafinco

---

## 1. Le projet

**Mafinco** est une application mobile de gestion de budget partagé pour couples.

**Problème central :** le manque de transparence financière dans les couples génère des tensions récurrentes (70% des couples français selon Cofidis 2025).

**4 briques fonctionnelles :**
- Saisie des dépenses partagées
- Calcul automatique des remboursements
- Graphiques de visualisation
- Conseils d'investissement IA

**Stade actuel :** idée / MVP
**Marché géographique :** France (lancement initial), Europe ensuite

---

## 2. Le modèle économique

**Monétisation principale : affiliation bancaire**, selon 3 déclencheurs par persona :

| Persona | Profil | Produit affilié | Commission estimée |
|--------|--------|-----------------|-------------------|
| Léa & Thomas | 28 ans, revenus différents | Compte joint Boursorama / Sumeria | 30 à 80€ |
| Sarah & Julien | 34 ans, mariés, épargnants | PEA ou assurance-vie Fortuneo / Nalo / Yomoni | 50 à 300€ |
| Maxime & Camille | 31 ans, projet immobilier | Courtier Meilleurtaux / Pretto, simulation prêt | 500 à 1 500€ |

---

## 3. La cible

**Âge :** 20 à 55 ans — cœur de cible : 22 à 45 ans, couples cohabitants, utilisateurs de smartphones, sensibles aux frictions financières.

**Estimation SAM France :** 2,8 millions de couples → 8,4 millions d'euros/mois

**4 profils cibles :**
1. Jeunes couples en appartement (20–35 ans)
2. Couples avec revenus différents
3. Couples qui épargnent ou investissent
4. Couples digitaux déjà sur néobanques

---

## 4. La concurrence

### Concurrents directs (faibles)

- **2Split** — iOS uniquement, pas d'Android, pas d'agrégation bancaire, aucune traction publique. Prix : 2,99€/mois ou 14,99€/an.
- **Couple Count** — Android uniquement, pas d'iOS, prix opaque, produit très basique. Origine française.

> Aucun leader sur le créneau "budget couple" — opportunité réelle, mais signal d'alerte (pourquoi personne n'a percé depuis 10 ans ?).

### Concurrents indirects (solides)

- **Tricount** — 17M+ utilisateurs, gratuit, ponctuel (voyages/coloc), racheté par Bunq en 2022, UX vieillissante
- **Bankin'** — 1M+ actifs hebdo France, agrégation DSP2, mais individuel. Frictions récurrentes connexion bancaire.
- **Finary** — 1M+ actifs iOS France, 149,99€/an, UX excellente, mais patrimonial individuel

### Différenciation Mafinco — 3 piliers
1. Conseils d'investissement personnalisés via IA
2. Partenariats bancaires (compte, crédit, épargne)
3. Positionnement conseil et patrimonial, pas seulement calculateur

---

## 5. Le site internet (CDC validé)

### 3 objectifs non négociables
1. **Acquisition** — SEO, pub, bouche-à-oreille
2. **Conversion** — téléchargements iOS et Android
3. **Crédibilité partenaires** — banques, institutions financières

### Stack technique recommandée
- **CMS :** Webflow (no-code, SEO natif, responsive)
- **Hébergement :** Webflow Hosting
- **Domaine :** mafinco.fr
- **Analytics :** GA4 + Google Search Console
- **Heatmaps :** Hotjar ou Clarity
- **Email marketing :** Brevo
- **Sécurité formulaires :** reCAPTCHA v3 ou honeypot

### 9 pages — Phase 1

| Page | Objectif |
|------|----------|
| `/` | Accueil — capter, comprendre, convertir en 10 secondes. CTA above the fold obligatoire. |
| `/fonctionnalites` | Détail des 5 fonctionnalités, visuels alternés gauche/droite |
| `/avis` | Preuve sociale, cards en grille, note globale visible en haut |
| `/partenaires` | Page B2B, ton professionnel, formulaire dédié, chiffres de traction |
| `/a-propos` | Histoire, équipe, mission, timeline |
| `/contact` | Formulaire simple, réponse auto 72h |
| `/presse` | Phase 2 (selon traction) |
| `/mentions-legales` | RGPD |
| `/confidentialite` | RGPD |

### Performances cibles
- PageSpeed mobile > 85 / desktop > 90
- LCP < 2,5 secondes
- CLS < 0,1

### Mots-clés SEO prioritaires
- "gestion budget couple"
- "application dépenses partagées"
- "partage dépenses couple application"
- "remboursement couple"
- "conseils investissement couple"
- "application finance couple France"

### KPIs à J+90
- CTR vers les stores > 8%
- Taux de rebond < 55%
- Durée moyenne page accueil > 45 secondes
- Leads formulaire > 20/mois
- Inscrits newsletter > 200

### Budget & planning
- **Budget :** 6 000 à 15 600€
- **Planning :** 9 à 13 semaines

---

## 6. Identité visuelle

**Positionnement design :** entre Revolut (moderne, épuré) et Linxo (rassurant, professionnel) → design premium accessible.

| Élément | Choix |
|---------|-------|
| Palette | Bleu foncé (confiance) + Vert (croissance) + Blanc |
| Typographie | Inter, DM Sans ou Poppins (sans-serif moderne) |
| Icônes | Stroke uniquement, jamais solides |
| Ton visuel | Aéré, espacé, blanc dominant, animations sobres et fonctionnelles |

---

## 7. Données marché (à citer dans les contenus)

- **70%** des couples déclarent que l'argent est une source d'inquiétude *(Cofidis, fév. 2025, n=1 008)*
- **65%** des couples français utilisent des outils de suivi de budget *(même source)*
- **50%** des Français en couple partagent les dépenses à 50/50 *(Le Figaro, fév. 2026, n=861)*
- **68%** des Français gèrent leurs finances via mobile en 2024
- **14,3 millions** de couples en France, dont **9,1 millions** en cohabitation
- Marché mondial des apps budgétaires : **247,21M$** (2025) → **421,87M$** (2035), TCAC 5,49%
