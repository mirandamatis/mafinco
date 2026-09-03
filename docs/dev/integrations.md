# Phase 4 — Dev : Intégrations tierces — Mafinco

---

## 1. Google Analytics 4

### Installation
Dans **Webflow → Project Settings → Integrations → Google Analytics** :
- Coller l'ID de mesure : `G-XXXXXXXXXX` (à créer dans GA4)

### Événements personnalisés à configurer

| Événement GA4 | Déclencheur | Paramètres |
|--------------|-------------|-----------|
| `cta_appstore_click` | Clic bouton App Store | `{ location: "hero" | "cta_final" | "nav" }` |
| `cta_playstore_click` | Clic bouton Google Play | `{ location: "hero" | "cta_final" | "nav" }` |
| `form_submit_contact` | Envoi formulaire contact | `{ form_type: "contact" }` |
| `form_submit_partenaire` | Envoi formulaire partenaire | `{ form_type: "partenaire" }` |
| `feature_click` | Clic "Voir toutes les fonctionnalités" | `{ from: "accueil" }` |
| `avis_filter` | Clic filtre avis | `{ segment: "jeune_couple" | "epargnants" | "projet_immo" }` |
| `press_kit_download` | Clic téléchargement kit presse | — |

### Script événements (à coller en Custom Code → Before </body>)
```html
<script>
  // CTA App Store / Play Store
  document.querySelectorAll('[data-cta-store]').forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', btn.dataset.ctaStore === 'ios' ? 'cta_appstore_click' : 'cta_playstore_click', {
        location: btn.dataset.ctaLocation || 'unknown'
      });
    });
  });

  // Filtres avis
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'avis_filter', { segment: btn.dataset.segment });
    });
  });
</script>
```

---

## 2. Hotjar (ou Microsoft Clarity — gratuit)

### Clarity (recommandé pour démarrer — gratuit)
1. Créer un projet sur clarity.microsoft.com
2. Copier le script de tracking
3. Coller dans **Webflow → Project Settings → Custom Code → Head**

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","XXXXXXXXX");
</script>
```

### Pages prioritaires à analyser
- `/` — heatmap hero + scroll depth
- `/fonctionnalites` — engagement sur chaque feature block
- `/partenaires` — funnel formulaire B2B

---

## 3. Brevo (email marketing + transactionnel)

### Configuration
1. Créer un compte Brevo (ex-Sendinblue)
2. Vérifier le domaine `mafinco.fr` (SPF + DKIM)
3. Créer les templates emails :
   - **Template 1 :** Confirmation contact général
   - **Template 2 :** Confirmation demande partenaire
   - **Template 3 :** Notification interne (hello@mafinco.fr)

### Connexion Webflow Forms → Brevo
Via **Zapier** ou **Make** (Integromat) :
- Trigger : "Webflow Form Submit"
- Action : "Brevo — Add contact to list" + "Send transactional email"

### Listes Brevo à créer
| Liste | Source | Usage |
|-------|--------|-------|
| `prospects-grand-public` | Form contact général | Newsletter + nurturing |
| `prospects-partenaires` | Form partenaire | Suivi commercial B2B |
| `waitlist-app` | CTA téléchargement (si app non dispo) | Lancement |

---

## 4. reCAPTCHA v3

### Installation
Dans **Webflow → Project Settings → Integrations → reCAPTCHA** :
- Site key : `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` (créer sur console.google.com)
- Version : v3 (invisible, score-based)
- Seuil de score : 0.5 (bloquer si score < 0.5)

> Webflow gère reCAPTCHA v3 nativement sur tous les formulaires une fois la clé configurée.

---

## 5. Open Graph & partage social

Dans **Webflow → Page Settings** pour chaque page :

### Accueil
```
OG Title:       Mafinco — Gérez votre argent à deux, enfin simplement
OG Description: L'app de gestion budgétaire pour couples. Suivi des dépenses, remboursement auto, conseils IA.
OG Image:       /assets/og-accueil.png (1200×630px)
Twitter Card:   summary_large_image
```

### Fonctionnalités
```
OG Title:       Fonctionnalités Mafinco — Suivi, remboursement auto, graphiques et IA
OG Image:       /assets/og-fonctionnalites.png
```

### Template OG Image
- Fond : #2347E5
- Logo Mafinco blanc centré
- Tagline en Inter blanc
- Dimensions : 1200×630px
- Créer avec Figma ou Canva, exporter en PNG

---

## 6. App Store / Play Store — Liens de téléchargement

À remplacer dès que les stores sont publiés :

```javascript
const STORE_LINKS = {
  ios:     'https://apps.apple.com/fr/app/mafinco/idXXXXXXXXX',
  android: 'https://play.google.com/store/apps/details?id=fr.mafinco.app'
};

// En attendant : brancher sur une waitlist Brevo
const WAITLIST_URL = 'https://mafinco.fr/waitlist';
```

Tous les boutons App Store / Google Play doivent pointer vers ces constantes pour une mise à jour centralisée.

---

## 7. Checklist de mise en ligne

### Avant publication

- [ ] Domaine `mafinco.fr` connecté dans Webflow (DNS + SSL)
- [ ] GA4 ID configuré et testé (DebugView)
- [ ] Clarity configuré et premier enregistrement reçu
- [ ] reCAPTCHA v3 activé — tester les deux formulaires
- [ ] Emails Brevo testés (envoi + réception confirmation)
- [ ] Lien App Store réel (ou redirection waitlist temporaire)
- [ ] OG images créées et chargées (toutes les pages)
- [ ] 404 custom configurée dans Project Settings
- [ ] Redirect `/confirmation` testé depuis les deux formulaires
- [ ] Robots.txt : `/confidentialite`, `/mentions-legales` → noindex
- [ ] Sitemap.xml généré par Webflow → soumis à Google Search Console

### Après publication

- [ ] Google Search Console : vérification domaine + soumission sitemap
- [ ] Test PageSpeed Insights (cible > 90 mobile)
- [ ] Test RGPD : bandeau cookies présent et fonctionnel
- [ ] Test formulaires en production (vrai email reçu)
- [ ] Test liens App Store / Google Play
