# Mafinco — Site Web

Site vitrine de l'application Mafinco, codé en HTML / CSS / JS vanilla.

---

## 📁 Structure des fichiers

```
site/
├── index.html          ← Page d'accueil
├── pages/
│   ├── fonctionnalites.html
│   ├── avis.html
│   ├── partenaires.html
│   ├── a-propos.html
│   ├── contact.html
│   └── ...
├── css/
│   ├── tokens.css      ← Couleurs, polices, espacements
│   ├── base.css        ← Styles de base
│   └── components.css  ← Composants (navbar, footer, cards…)
└── js/
    └── main.js         ← Interactions (menu, animations…)
```

---

## ✏️ Modifier le contenu (sans coder)

### Changer un texte
1. Ouvre le fichier `.html` de la page à modifier
2. Cherche le texte avec `Ctrl+F` (ou `Cmd+F` sur Mac)
3. Modifie directement le texte entre les balises HTML
4. Exemple : `<h1>Gérez votre argent...</h1>` → remplace juste le texte entre `<h1>` et `</h1>`

### Changer la couleur principale
1. Ouvre `site/css/tokens.css`
2. Ligne 2 : `--blue: #2347E5;`
3. Remplace `#2347E5` par la nouvelle couleur
4. Cette variable est utilisée partout sur le site — un seul changement suffit

### Changer les liens App Store / Google Play
1. Ouvre `site/index.html`
2. Cherche `href="#"` sur les boutons `.btn-store`
3. Remplace `#` par le vrai lien App Store ou Google Play

---

## 🚀 Voir le site en ligne (GitHub Pages)

Le site est automatiquement publié sur GitHub Pages à chaque modification du dossier `site/`.

URL : `https://[username].github.io/mafinco/site/`

---

## 🔄 Modifier depuis GitHub (sans installation)

1. Va sur github.com → ouvre ce repo
2. Clique sur le fichier à modifier
3. Clique sur le crayon ✏️ (en haut à droite)
4. Fais tes modifications
5. Clique sur **"Commit changes"** (bouton vert en bas)
6. Le site se met à jour automatiquement en 1-2 minutes

**Astuce :** Appuie sur `.` (point) depuis la page du repo pour ouvrir VS Code dans le navigateur.
