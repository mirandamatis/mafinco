# Phase 4 — Dev : Notes par page — Mafinco

> Référence rapide pour l'intégration Webflow page par page.
> Pour le setup global : [webflow-setup.md](webflow-setup.md)

---

## `/` — Accueil

### Sections dans l'ordre
1. Navbar (Symbol)
2. Hero — 2 colonnes desktop, 1 colonne mobile
3. "Comment ça marche" — fond `#F4F6FE`, 3 étapes avec connecteurs
4. "4 Fonctionnalités" — grille 4→2→1
5. "Pour chaque couple" — 3 persona cards
6. "Avis aperçu" — extrait 3 cards + lien
7. CTA Final — fond `#2347E5`
8. Footer (Symbol)

### Points d'attention
- **Hero mockup :** PNG/WebP transparent, max 600px wide, shadow via CSS (`filter: drop-shadow(...)`)
- **Étoiles rating :** SVG inline (pas emoji), couleur `#2347E5`
- **Connecteurs timeline "comment ça marche" :** ligne `2px dashed #E5E5E5` entre les cercles, masquée sur mobile
- **CTA store buttons :** classe `.btn--dark`, attributs `data-cta-store="ios"` et `data-cta-store="android"` pour le tracking GA4

---

## `/fonctionnalites` — Fonctionnalités

### Sections dans l'ordre
1. Navbar
2. Hero — fond `#FFFFFF`, centré
3. Feature 1 (texte gauche, mockup droite) — fond `#FFFFFF`
4. Feature 2 (mockup gauche, texte droite) — fond `#F4F6FE`
5. Feature 3 (texte gauche, mockup droite) — fond `#FFFFFF`
6. Feature 4 (mockup gauche, texte droite) — fond `#F4F6FE`
7. Logos partenaires — fond `#FFFFFF`
8. CTA Final — fond `#2347E5`
9. Footer

### Points d'attention
- **Alternance texte/mockup :** sur mobile les deux colonnes s'empilent, mockup toujours EN DESSOUS du texte
- **Disclaimer IA :** balise `<small>` ou `<p class="disclaimer">`, Inter 12px, `#737373`, italic — obligatoire sur Feature 4
- **Badges "Fonctionnalité X" :** `background: #E8EDFB`, `color: #1530AD`, radius 9999px, Inter 12px SemiBold

---

## `/avis` — Avis

### Sections dans l'ordre
1. Navbar
2. Note globale — fond `#F4F6FE`
3. Filtres — sticky position au scroll dans la section
4. Grille témoignages — 3→2→1 colonnes
5. Section Presse — fond `#F4F6FE`
6. CTA Final — fond `#2347E5`
7. Footer

### Points d'attention
- **Avis en CMS Webflow :** créer la collection `avis`, lier la grille à la collection
- **Filtres :** utiliser `data-segment` sur les cards et `.filter-btn[data-segment]` — script dans [webflow-setup.md](webflow-setup.md)
- **Filtre actif :** classe `.active` = fond `#2347E5`, texte `#FFFFFF`
- **Logos presse :** SVG grisés (`filter: grayscale(100%) opacity(60%)`), couleur au hover
- **Avatars :** cercle 40px, fond `#E8EDFB`, initiales DM Sans 14px SemiBold `#2347E5`

---

## `/partenaires` — Partenaires

### Sections dans l'ordre
1. Navbar
2. Hero B2B — fond `#2347E5`
3. Stats traction — fond `#FFFFFF`, 5 cards
4. Modèles partenariat — fond `#F4F6FE`, 3 cards
5. Logos partenaires — fond `#FFFFFF`
6. Formulaire — fond `#F4F6FE`
7. Footer

### Points d'attention
- **Hero fond `#2347E5` :** texte `#FFFFFF`, CTA fond `#FFFFFF` texte `#2347E5`
- **Count-up stats :** attribut `data-count="50000"` sur le chiffre, `data-suffix="+"` — script dans [webflow-setup.md](webflow-setup.md)
- **Formulaire partenaire :** champ select "Type de partenariat" avec les 4 options — redirect `/confirmation?source=partenaire`
- **Note dans le footer :** le hero fond bleu doit avoir `padding-top: 72px` (hauteur navbar) si navbar transparente

---

## `/a-propos` — À propos

### Sections dans l'ordre
1. Navbar
2. Hero — fond `#F4F6FE`
3. Histoire & Timeline — fond `#FFFFFF`
4. Équipe — fond `#F4F6FE`, 3 cards
5. Engagements — fond `#2347E5`
6. CTA Final — fond `#FFFFFF`
7. Footer

### Points d'attention
- **Timeline desktop :** flex-row avec `::before` pseudo-élément `2px dashed #E5E5E5` — sur mobile passer en flex-column
- **Cercles timeline :** 48px, fond `#2347E5`, chiffre DM Sans 18px Bold `#FFFFFF`
- **Liens LinkedIn :** s'ouvrir dans `_blank`, icône `external-link` Lucide 16px inline
- **Section Engagements fond `#2347E5` :** icônes `#FFFFFF`, titres `#FFFFFF`, descriptions `#E5E5E5` (légèrement atténué)

---

## `/contact` — Contact

### Sections dans l'ordre
1. Navbar
2. En-tête — fond `#F4F6FE`
3. 2 colonnes : formulaire + infos — fond `#FFFFFF`
4. Footer

### Points d'attention
- **2 colonnes desktop :** `grid-template-columns: 1fr 1fr` → mobile : `1fr`, infos EN PREMIER sur mobile
- **Champ Sujet :** `<select>` avec options Support / Question / Presse / Autre
- **Validation HTML5 :** `required` sur tous les champs marqués *, `type="email"` sur email
- **Focus state :** border `2px solid #2347E5` + `box-shadow: 0 0 0 3px rgba(35,71,229,0.15)`
- **Erreur state :** border `2px solid #DC2626`, fond `#FFF5F5`, message `color: #DC2626`
- **Redirect :** `/confirmation?source=contact`

---

## `/presse` — Presse

### Sections dans l'ordre
1. Navbar
2. Hero — fond `#F4F6FE`
3. Chiffres clés — fond `#FFFFFF`, grille 3 colonnes
4. Boilerplate — fond `#F4F6FE`
5. Revue de presse — fond `#FFFFFF`, citations
6. Kit média — fond `#F4F6FE`, bouton téléchargement
7. Contact presse — fond `#FFFFFF`
8. Footer

### Points d'attention
- **Bouton kit presse :** lien vers un fichier ZIP hébergé sur Webflow Assets ou Dropbox (URL à fournir par l'équipe)
- **Tracking GA4 :** `data-cta-store` remplacé par `data-track="press_kit_download"` sur ce bouton

---

## `/mentions-legales` et `/confidentialite`

### Recommandations communes
- **Layout :** max-width 720px, centré, padding généreux
- **Typography :** Inter 16px `#2D2D2D`, line-height 1.8
- **Titres :** DM Sans SemiBold `#0D0D0D` — H2 24px, H3 18px
- **Tableau :** border `1px solid #E5E5E5`, header `background: #F4F6FE`
- **SEO :** `<meta name="robots" content="noindex">` sur les deux pages (Webflow Page Settings)
- **Dernière MAJ :** visible en haut de page, format "Dernière mise à jour : juin 2026"

---

## `/confirmation` — Page de confirmation

### Configuration
- Page masquée du menu (décocher "Include in navigation")
- Script `?source=` pour adapter le message (voir [webflow-setup.md](webflow-setup.md))
- Boutons store avec `data-cta-location="confirmation"`

---

## `/404` — Page 404

### Configuration
Dans **Webflow → Project Settings → SEO → 404 Page** : sélectionner la page 404 créée.

### Structure
1. Navbar (Symbol)
2. Section centrée — fond `#FFFFFF`
   - Illustration SVG (télécharger sur undraw.co, teinte `#2347E5`)
   - H1 : "Oups, cette page ne partage pas les dépenses..."
   - Sous-titre : "On dirait que vous avez trouvé le seul endroit sur Mafinco où l'argent ne s'équilibre pas."
   - 2 boutons : "Retour à l'accueil" (`.btn--primary`) + "Voir les fonctionnalités" (`.btn--outline`)
3. Footer (Symbol)
