# Page Confirmation — Elodie Esthétique

> **Fichier :** `confirmation.md`
> **Statut :** Brouillon à valider
> **Déclencheur :** Affichée après envoi réussi du formulaire de contact

---

## Contenu principal (centré)

### Icône de succès
✅ *(Cercle vert, fond #E8F5EC)*

### Titre (H1)
**Merci pour votre message !**

### Message personnalisé d'Elodie
> « Je vous répondrai dans les plus brefs délais, généralement sous 24h. »
>
> — Elodie

### Information complémentaire
Un email de confirmation vient de vous être envoyé. *(Pensez à vérifier vos spams si vous ne le voyez pas arriver.)*

---

## Suggestions de navigation

En attendant, découvrez :

| Suggestion | Lien |
|------------|------|
| 🌿 **Soins visage** | → `/services/soins-visage` |
| 🎁 **Carte cadeau** | → `/services/carte-cadeau` |
| 💆 **Modelages évasion** | → `/services/modelages-evasion` |

### CTA principal
**« Retour à l'accueil → »** — Lien vers la page d'accueil *(bouton primaire)*

---

## Variantes de CTA (3)

| Variante | Texte | Lien |
|----------|-------|------|
| **V1 — Retour** | « Retour à l'accueil → » | `/` |
| **V2 — Services** | « Découvrir tous nos soins → » | `/services` |
| **V3 — RDV direct** | « Prendre rendez-vous tout de suite → » | Outil de réservation externe |

---

## Meta

### Title (max 60 caractères)
Message envoyé — Merci ! | Elodie Esthétique Avignon
_(48 caractères)_

### Meta description (150-160 caractères)
Merci pour votre message. Elodie vous répondra sous 24h. En attendant, découvrez nos soins et offrez-vous un moment de bien-être à Avignon.
_(150 caractères)_

---

## Notes pour le développeur

- Aucun index SEO nécessaire (page de confirmation, pas de contenu utile à indexer)
- Balise `noindex` recommandée pour cette page
- Header et footer conservés (navigation complète accessible)
- L'icône de succès peut être animée (scale 0→1 avec rebond) pour renforcer l'effet positif
- Le message doit s'afficher même si l'email n'a pas été envoyé (succès technique du formulaire)
