# Template page détail service — Elodie Esthétique

> **Fichier :** `service-detail-template.md`
> **Usage :** Template générique pour chaque page `/services/[slug]`
> **Slugs prévus :** soins-visage, inspira-med, modelages-evasion, autour-de-la-maternite, soins-remodelant-corps, epilations, bar-a-ongles, mains-et-pieds, beaute-du-regard, la-future-mariee, carte-cadeau

---

## Champs à personnaliser pour chaque service

| Champ | Valeur à remplir |
|-------|------------------|
| **[NOM_CATEGORIE]** | Ex: Soins visage, Modelages évasion… |
| **[SLUG]** | Ex: soins-visage, modelages-evasion… |
| **[TITRE_H1]** | Ex: Révélez votre éclat naturel |
| **[ACCROCHE]** | Ex: Des soins sur mesure pour une peau lumineuse |
| **[INTRODUCTION]** | Citation personnalisée d'Elodie sur ce soin |
| **[COULEUR_BANNIERE]** | Couleur dominante pour la bannière + overlay |
| **[ICONE]** | Emoji ou icône représentative |
| **[META_TITLE]** | Max 60 caractères |
| **[META_DESCRIPTION]** | 150-160 caractères |

---

## Structure de la page

### 1. Fil d'Ariane
```
Accueil  >  Services  >  [NOM_CATEGORIE]
```

---

### 2. Bannière de catégorie

**Titre H1 :** [NOM_CATEGORIE]
**Sous-titre :** [ACCROCHE]
**Visuel :** Photo d'ambiance de la catégorie (format 16:9 ou 2:1)
**Overlay :** Dégradé foncé pour lisibilité

---

### 3. Introduction personnalisée

> « [INTRODUCTION — 2 à 3 phrases qui parlent de la passion d'Elodie pour ce soin, en langage chaleureux et personnel] »
>
> — Elodie

*Texte additionnel possible (optionnel) :* [1-2 phrases pour contextualiser le soin, à qui il s'adresse, pourquoi il est spécial]

---

### 4. Liste des prestations

<!-- Repeter ce bloc pour chaque prestation de la categorie -->

#### [Nom de la prestation]

| Durée | Prix |
|-------|------|
| ⏱ [XX min] | 💰 À partir de [XX]€ *(ou « Sur devis »)* |

**Description :** [2-3 phrases décrivant le déroulé du soin, ses bienfaits, les produits utilisés.]

**[Badge optionnel : 🔥 Populaire / 🆕 Nouveau / ✨ Coup de cœur]**

**CTA :** « Réserver ce soin → »

---

*Exemple de bloc :*

#### Soin visage essentiel

| Durée | Prix |
|-------|------|
| ⏱ 60 min | 💰 À partir de 65 € |

**Description :** Nettoyage en profondeur, gommage doux, masque personnalisé, massage visage aux huiles essentielles. Le soin idéal pour un coup d'éclat.

**CTA :** « Réserver ce soin → »

---

### 5. Contre-indications

> **⚠️ Contre-indications**
>
> Ce soin est déconseillé en cas de :
> - Allergie cutanée active
> - Grossesse (1er trimestre)
> - Plaies ouvertes, coups de soleil, irritations
> - Traitement médical en cours (consultez votre médecin)
>
> *En cas de doute, n'hésitez pas à me contacter avant de réserver.*

*(Adapter les contre-indications en fonction du soin)*

---

### 6. Témoignages spécifiques à la catégorie

> « [Témoignage de 2-3 phrases spécifique à ce soin] »
>
> — **[Prénom] [Initiale]., cliente depuis [X] ans** ★★★★★

*(Optionnel : 1 à 2 témoignages supplémentaires)*

---

### 7. CTA final

**Titre H3 :** Vous avez une question sur ce soin ?

| CTA | Type |
|-----|------|
| « Prendre rendez-vous → » | Primaire |
| « Me contacter → » | Secondaire |

### Variantes de CTA (3)

| Variante | Texte |
|----------|-------|
| **V1 — RDV** | « Réserver ce soin → » |
| **V2 — Contact** | « Une question ? Contactez-moi → » |
| **V3 — Offrir** | « Offrir ce soin en carte cadeau → » *(si applicable)* |

---

## Meta (template)

### Title (max 60 caractères)
[NOM_CATEGORIE] — Elodie Esthétique | Institut beauté Avignon

### Meta description (150-160 caractères)
Découvrez nos soins [NOM_CATEGORIE] à l'institut Elodie Esthétique à Avignon. [ACCROCHE]. Prestations sur mesure, cadre apaisant. Prenez rendez-vous en ligne.

---

## Mots-clés principaux

**[NOM_CATEGORIE] Avignon**, [mot-clé secondaire], [mot-clé soin spécifique], Elodie Esthétique

---

## Contre-indications génériques (à adapter)

### Soins visage
- Allergie cutanée active
- Traitement dermatologique en cours (consultez votre médecin)
- Coups de soleil, plaies ouvertes
- Intervention esthétique récente (moins de 15 jours)

### Soins corps / Modelages
- Grossesse (1er trimestre) — sauf modelage adapté
- Fièvre, infection
- Problèmes veineux importants (sur avis médical)
- Opération chirurgicale récente

### Épilations
- Peau irritée, coups de soleil
- Varices (zones concernées)
- Prise d'antibiotiques photosensibilisants
- Peeling ou laser récent

### Soins ongles / Mains / Pieds
- Mycoses actives
- Plaies, coupures ouvertes
- Allergie aux produits (résine, colle)

### Beauté du regard
- Conjonctivite, orgelet
- Allergie connue à la colle
- Opération des yeux récente
- Saison allergique (pollen) — précaution

### Maternité
- Grossesse à risque — sur avis médical
- 1er trimestre (certains soins déconseillés)
- Allaitement — prévenir pour adapter les produits

---

## Notes pour le développeur

- Les 10 pages de détail suivent cette même structure
- Seules les données changent : nom, description, prix, témoignages, contre-indications
- Les badges (🔥 Populaire / 🆕 Nouveau) sont optionnels et configurables
- La section contre-indications peut être masquée si non applicable
- Le CTA « Offrir ce soin en carte cadeau » n'apparaît que si le soin est éligible
