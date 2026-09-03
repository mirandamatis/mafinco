---
name: accessibilite-rgaa
description: Use when the user needs accessibility compliance, RGAA audit, or WCAG conformance. Use when the site must be accessible to people with disabilities.
---

# Skill : Accessibilité RGAA

Audit et correction d'accessibilité selon le Référentiel Général d'Amélioration de l'Accessibilité (RGAA 4.1).

## Déclenchement
- "Rends le site accessible"
- "Conformité RGAA / WCAG"
- "Audit d'accessibilité"
- "Le site doit être accessible aux handicapés"

## Contexte
Le RGAA est le standard français d'accessibilité numérique, basé sur WCAG 2.1 niveau AA.

## Phases

### 1. Audit automatique
Lancer les outils d'audit :

```bash
# axe DevTools (via navigateur)
# Lighthouse Accessibility
# Wave Evaluation Tool
# Validateur HTML W3C
```

Compiler les résultats dans `docs/accessibilite/audit-auto.md`.

**Vérifications automatiques :**
- Contraste des couleurs
- `alt` textes sur les images
- Structure des titres (un H1, hiérarchie logique)
- Labels de formulaires
- Langue du document (`lang` attribute)
- ARIA roles valides

### 2. Audit manuel
Vérifications qui nécessitent un humain :

- Navigation au clavier (Tab, Enter, Escape, flèches)
- Ordre de focus logique
- Compréhension des messages d'erreur
- Alternatives textuelles pertinentes (pas de "image" générique)
- Transcripts pour vidéos/audios
- Valeurs des boutons et liens explicites

**Livrable :** `docs/accessibilite/audit-manuel.md`

### 3. Corrections
Corriger les problèmes par priorité :

**Blocant (à corriger impérativement) :**
- Contraste insuffisant
- Images sans `alt`
- Formulaires sans label
- Navigation impossible au clavier
- Pièges au clavier (focus bloqué)

**Important :**
- Structure de titres incorrecte
- Liens non explicites ("Cliquez ici")
- Absence de `lang`
- Landmarks ARIA manquants

**Amélioration :**
- Skip links (lien d'évitement)
- Agrandissement de texte jusqu'à 200%
- Animations réduites (prefers-reduced-motion)

### 4. Déclaration d'accessibilité
Générer la déclaration légale obligatoire en France :

**Fichier :** `public/accessibilite/declaration.md`

```markdown
# Declaration d'accessibilite

[Organisation] s'engage a rendre son site internet accessible...
Date de la declaration : JJ/MM/AAAA
Taux de conformite : XX%
```

**Contenu obligatoire :**
- État de conformité (totalement / partiellement / non conforme)
- Résultats des tests
- Contenus non accessibles
- Dispositifs de remontée d'information
- Voie de recours (Défenseur des droits)

### 5. Page d'accessibilité
Ajouter une page `/accessibilite` accessible depuis le footer contenant :
- La déclaration d'accessibilité
- Les moyens de contact en cas de problème
- Les adaptations disponibles

## Critères RGAA 4.1 (schéma)

| Thème | Nb critères | Priorité |
|---|---|---|
| Images | 9 | Haute |
| Cadres | 2 | Haute |
| Couleurs | 3 | Haute |
| Multimédia | 6 | Haute |
| Tableaux | 9 | Moyenne |
| Liens | 4 | Haute |
| Scripts | 10 | Haute |
| Éléments obligatoires | 6 | Haute |
| Structuration | 14 | Haute |
| Présentation | 11 | Moyenne |
| Formulaires | 21 | Haute |
| Navigation | 6 | Haute |
| Consultation | 13 | Moyenne |

## Règles
- Viser le niveau AA (106 critères)
- Ne jamais casser le design pour l'accessibilité — adapter
- Tester avec un vrai lecteur d'écran (NVDA, VoiceOver)
- Documenter les dérogations (contrainte technique justifiée)
