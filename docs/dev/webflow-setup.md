# Phase 4 — Dev : Configuration Webflow — Mafinco

> **Plateforme :** Webflow (CMS + Hosting)
> **Plan recommandé :** CMS Plan (14$/mois) → upgrade Business si > 1 000 items CMS

---

## 1. Création du projet

1. Nouveau projet Webflow → "Blank Site"
2. Nom du projet : `mafinco`
3. Subdomain de staging : `mafinco.webflow.io`
4. Domaine custom en prod : `mafinco.fr`

---

## 2. Variables CSS globales (Design Tokens)

Dans **Webflow Designer → Style Manager → Variables**, créer :

```css
/* Couleurs — Bleu */
--color-blue:        #2347E5;
--color-blue-hover:  #1B3BC9;
--color-blue-active: #1530AD;
--color-blue-light:  #E8EDFB;
--color-blue-lighter:#F4F6FE;

/* Couleurs — Noir */
--color-black:       #0D0D0D;
--color-black-soft:  #1A1A1A;
--color-black-muted: #2D2D2D;
--color-black-mid:   #737373;

/* Couleurs — Blanc */
--color-white:       #FFFFFF;
--color-white-chalk: #FAFAFA;
--color-white-cloud: #F5F5F5;
--color-white-border:#E5E5E5;

/* Couleurs sémantiques */
--color-success:     #16A34A;
--color-error:       #DC2626;
--color-warning:     #D97706;

/* Typography */
--font-heading: 'DM Sans', sans-serif;
--font-body:    'Inter', sans-serif;

/* Radius */
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  12px;
--radius-xl:  16px;
--radius-2xl: 24px;
--radius-full:9999px;

/* Spacing (base 4px) */
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-6:  24px;
--space-8:  32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

---

## 3. Polices Google Fonts

Dans **Project Settings → Fonts → Add Google Fonts** :

1. **DM Sans** — weights : 400, 500, 600, 700
2. **Inter** — weights : 400, 500, 600

> Ne pas coller le `<link>` Google Fonts en dur dans le `<head>` — Webflow le gère via l'interface.

---

## 4. Icônes — Lucide Icons

Webflow ne supporte pas nativement Lucide. Deux options :

**Option A — Embed SVG inline (recommandé)**
- Télécharger les SVG depuis lucide.dev
- Les coller en tant qu'éléments "Embed" dans Webflow
- Avantage : couleur CSS contrôlable via `currentColor`

**Option B — Lucide CDN via Custom Code**
Dans **Project Settings → Custom Code → Head** :
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```
Puis dans les pages, remplacer les icônes par `<i data-lucide="receipt"></i>` et appeler `lucide.createIcons()` en fin de body.

> Règle absolue : stroke uniquement, `stroke-width: 1.5`, jamais fill.

---

## 5. Structure des pages Webflow

| Slug Webflow | Page |
|-------------|------|
| `/` | Accueil |
| `/fonctionnalites` | Fonctionnalités |
| `/avis` | Avis |
| `/partenaires` | Partenaires |
| `/a-propos` | À propos |
| `/contact` | Contact |
| `/presse` | Presse |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |
| `/confirmation` | Page de confirmation (masquée du menu) |
| `/404` | Page 404 (définie dans Project Settings) |

---

## 6. Navbar — Composant global

Créer en tant que **Symbol** réutilisable sur toutes les pages.

```
Structure DOM :
nav.navbar
  ├── div.navbar__logo  → "Mafinco" (DM Sans Bold, color: var(--color-blue))
  ├── div.navbar__links
  │     ├── a.nav-link → "Fonctionnalités" → /fonctionnalites
  │     ├── a.nav-link → "Avis" → /avis
  │     ├── a.nav-link → "Partenaires" → /partenaires
  │     └── a.nav-link → "À propos" → /a-propos
  └── a.btn.btn--primary → "Télécharger ↓" → ancre #download

States :
  nav-link : color #2D2D2D · hover : color #2347E5 · transition 0.2s
  .navbar--scrolled : box-shadow: 0 1px 3px rgba(0,0,0,0.08)

Mobile (< 768px) :
  Afficher hamburger [☰], masquer links + CTA
  Menu drawer plein écran : fond #FFFFFF, liens DM Sans 20px
```

---

## 7. Footer — Composant global

Créer en tant que **Symbol**.

```
Structure :
footer.footer  (bg: #0D0D0D)
  ├── div.footer__top
  │     ├── div.footer__brand
  │     │     ├── span.logo → "Mafinco" (blanc)
  │     │     └── p.tagline → "L'app financière des couples modernes."
  │     ├── div.footer__col → Produit (liens internes)
  │     ├── div.footer__col → Entreprise (liens internes)
  │     └── div.footer__col → Légal (liens légaux)
  └── div.footer__bottom
        ├── p → "© 2026 Mafinco SAS · Tous droits réservés"
        └── div.footer__social → [IG] [TikTok] [LI]

Couleurs :
  Fond : #0D0D0D
  Texte : #FAFAFA
  Liens : #737373 → hover : #FFFFFF
  Séparateur : 1px solid #2D2D2D
```

---

## 8. Boutons — Classes utilitaires

```css
/* Primaire */
.btn--primary {
  background: #2347E5;
  color: #FFFFFF;
  border-radius: 8px;
  height: 48px;
  padding: 0 24px;
  font: 500 15px 'Inter';
  transition: background 0.2s;
}
.btn--primary:hover { background: #1B3BC9; }
.btn--primary:active { background: #1530AD; }

/* Noir */
.btn--dark {
  background: #0D0D0D;
  color: #FFFFFF;
  border-radius: 12px;
  height: 48px;
  padding: 0 24px;
}

/* Outline */
.btn--outline {
  background: transparent;
  border: 2px solid #2347E5;
  color: #2347E5;
  border-radius: 8px;
  height: 48px;
}
.btn--outline:hover { background: #E8EDFB; }

/* Ghost */
.btn--ghost {
  background: transparent;
  color: #2347E5;
  border: none;
}
.btn--ghost:hover { background: #F4F6FE; }
```

---

## 9. Formulaires — Configuration Webflow Forms

### Formulaire Contact (`/contact`)
- **Form name :** `contact-general`
- **Redirect after submit :** `/confirmation?source=contact`
- **Email notification :** hello@mafinco.fr
- **reCAPTCHA v3 :** activé (voir section Intégrations)

### Formulaire Partenaire (`/partenaires`)
- **Form name :** `contact-partenaire`
- **Redirect after submit :** `/confirmation?source=partenaire`
- **Email notification :** hello@mafinco.fr
- **Champs spécifiques :** Société, Type de partenariat (select)

### Page Confirmation (`/confirmation`)
Script en head pour adapter le message selon `?source=` :
```html
<script>
  const p = new URLSearchParams(window.location.search);
  const src = p.get('source');
  document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('confirm-title');
    const sub   = document.getElementById('confirm-sub');
    if (src === 'partenaire') {
      title.textContent = "Votre demande a été reçue !";
      sub.textContent   = "Notre équipe vous contactera sous 48h ouvrables.";
    } else {
      title.textContent = "Votre message a bien été envoyé !";
      sub.textContent   = "Nous vous répondrons sous 72h ouvrables.";
    }
  });
</script>
```

---

## 10. CMS Collections

### Collection : Avis (`/avis`)

| Champ | Type | Obligatoire |
|-------|------|-------------|
| `nom` | Texte | ✅ |
| `localisation` | Texte | ✅ |
| `age` | Nombre | ✅ |
| `duree-utilisation` | Texte | |
| `note` | Nombre (1-5) | ✅ |
| `titre-avis` | Texte | ✅ |
| `texte-avis` | Rich Text | ✅ |
| `segment` | Option (Jeune couple / Épargnants / Projet immo) | ✅ |
| `initiales-avatar` | Texte (2 chars) | ✅ |
| `ordre-affichage` | Nombre | |

### Collection : Articles presse (`/presse`)

| Champ | Type |
|-------|------|
| `media` | Texte |
| `date` | Date |
| `citation` | Texte |
| `url-article` | URL |
| `logo-media` | Image |

---

## 11. Animations & Interactions Webflow

### Scroll animations (Webflow IX2)
- **Hero subtitle :** fade-up 0.4s, delay 0.1s au load
- **Feature cards :** stagger fade-up 0.3s, déclenché à 20% du viewport
- **Stats (partenaires) :** count-up via script custom (voir ci-dessous)
- **Timeline (a-propos) :** fade-in left/right en alternance

### Count-up stats (partenaires)
```html
<script>
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = +e.target.dataset.count;
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        e.target.textContent = Math.floor(current).toLocaleString('fr-FR') + (e.target.dataset.suffix || '');
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
</script>
```

### Filtres Avis (JavaScript)
```javascript
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const segment = btn.dataset.segment;
    document.querySelectorAll('.avis-card').forEach(card => {
      card.style.display =
        (segment === 'tous' || card.dataset.segment === segment) ? 'flex' : 'none';
    });
  });
});
```

---

## 12. Responsive — Breakpoints Webflow

| Breakpoint | Largeur | Config Webflow |
|-----------|---------|---------------|
| Desktop (base) | ≥ 1280px | Par défaut |
| Tablette | 992–1279px | Tablet |
| Mobile paysage | 768–991px | Mobile Landscape |
| Mobile portrait | < 768px | Mobile Portrait |

Règles critiques :
- Grille 4 colonnes → 2 → 1 (feature cards)
- Navbar links masqués < 768px → hamburger
- Section 2 colonnes contact/partenaires → 1 colonne
- Typography : réduire H1 de 60px → 36px sur mobile

---

## 13. Performance

- **Images :** Format WebP, lazy loading activé (attribut `loading="lazy"`)
- **Mockup app :** PNG transparent ou WebP, max 800px wide, < 200ko
- **Logos partenaires :** SVG inline ou WebP < 20ko chacun
- **Fonts :** `font-display: swap` (Webflow le gère nativement)
- **LCP cible :** < 2,5s · **CLS cible :** < 0,1 · **FID cible :** < 100ms
