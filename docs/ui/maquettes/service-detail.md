# Maquette visuelle — Détail d'un service (/services/[slug])

> **Template :** Page détail d'une catégorie de soins  
> **Utilisation :** Modèle générique pour les 10 catégories (Soins visage, Modelages, etc.)  

---

## 1. Fil d'Ariane

```
Desktop :  Accueil  >  Services  >  Soins Visage
Mobile  :  Accueil  >  Services  >  Soins Visage
```

---

## 2. Bannière de catégorie

### Desktop
```
┌──────────────────────────────────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │  ┌──────────────────────────────────────────────┐    │   │
│  │  │                                              │    │   │
│  │  │         PHOTO D'AMBIANCE                     │    │   │
│  │  │         de la catégorie                      │    │   │
│  │  │         (16:9 ou 2:1)                        │    │   │
│  │  │                                              │    │   │
│  │  │         SOINS VISAGE                         │    │   │ ← h1: 44px #FFFFFF
│  │  │         Révélez votre éclat                  │    │   │    (avec overlay
│  │  │                                              │    │   │     foncé)
│  │  └──────────────────────────────────────────────┘    │   │
│  │                                                      │   │
│  │  Fond: couleur dominante de la catégorie + overlay   │   │
│  │  Radius: 16px                                        │   │
│  │  Hauteur: 400px desktop, 240px mobile                │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘
```

### Mobile
- Hauteur réduite à 240px
- Overlay plus prononcé pour lisibilité
- Titre : 32px, centré

---

## 3. Introduction personnalisée

```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FFFFFF, Padding: 48px 0                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  ❝ "Chaque visage est unique. Je vous propose         │  │ ← Citation
│  │     des soins personnalisés pour révéler votre         │  │    Cormorant Italic
│  │     éclat naturel, dans le respect de votre peau."     │  │    22px #2D2A24
│  │                                                        │  │
│  │  ─── Elodie                                             │  │ ← Inter 14px #8BA888
│  │                                                        │  │
│  │  Max-width: 680px, centré                              │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Liste des prestations

### Desktop
```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #F5EFE8, Padding: 64px 0                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              NOS PRESTATIONS                          │  │ ← h2: 36px #2D2A24
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │                                                │   │  │
│  │  │  Soin visage essentiel                         │   │  │ ← h3: 22px
│  │  │                                                │   │  │
│  │  │  ┌───────┐  ┌───────┐                          │   │  │
│  │  │  │ ⏱ 60min│  │ 💰 65€│                         │   │  │ ← Badges durée/prix
│  │  │  └───────┘  └───────┘                          │   │  │    Fond #FFF ou #E8D5BC
│  │  │                                                │   │  │
│  │  │  Nettoyage en profondeur, gommage doux,        │   │  │ ← Inter 15px #5C5650
│  │  │  masque personnalisé, massage visage aux       │   │  │
│  │  │  huiles essentielles.                           │   │  │
│  │  │                                                │   │  │
│  │  │  ┌────────────────────────────────────┐        │   │  │
│  │  │  │      Réserver ce soin  →           │        │   │  │ ← Bouton primaire
│  │  │  └────────────────────────────────────┘        │   │  │    compact
│  │  └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │                                                │   │  │
│  │  │  Soin INSPIRA:MED anti-âge               🔥   │   │  │ ← Badge "Populaire"
│  │  │                                                │   │  │    rose #F0D6D6
│  │  │  ┌───────┐  ┌───────┐                          │   │  │
│  │  │  │ ⏱ 90min│  │ 💰 95€│                         │   │  │
│  │  │  └───────┘  └───────┘                          │   │  │
│  │  │                                                │   │  │
│  │  │  Protocole correctif avec appareil              │   │  │
│  │  │  INSPIRA:MED. Résultats visibles dès la        │   │  │
│  │  │  1ère séance. 3 séances recommandées.          │   │  │
│  │  │                                                │   │  │
│  │  │  ┌────────────────────────────────────┐        │   │  │
│  │  │  │      Réserver ce soin  →           │        │   │  │
│  │  │  └────────────────────────────────────┘        │   │  │
│  │  └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │                                                │   │  │
│  │  │  Duo visage parent-enfant               🆕    │   │  │ ← Badge "Nouveau"
│  │  │                                                │   │  │    vert #D4E4D0
│  │  │  ┌───────┐  ┌───────┐                          │   │  │
│  │  │  │ ⏱ 45min│  │ 💰 45€│                         │   │  │
│  │  │  └───────┘  └───────┘                          │   │  │
│  │  │  ...                                            │   │  │
│  │  │                                                │   │  │
│  │  │  ┌────────────────────────────────────┐        │   │  │
│  │  │  │      Réserver ce soin  →           │        │   │  │
│  │  │  └────────────────────────────────────┘        │   │  │
│  │  └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │  Chaque carte : fond #FFF, radius 12px, padding 24px  │  │
│  │  Ombre: shadow-sm, border: 1px solid #E8E3DC          │  │
│  │  Espacement entre cartes : 20px                        │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Mobile
- Cartes empilées verticalement (full-width)
- Durée et prix sur la même ligne
- Bouton "Réserver" full-width
- Badges positionnés en haut à droite

---

## 5. Section "Contre-indications"

### Desktop / Mobile
```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FFFFFF, Padding: 48px 0                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  ⚠️  Contre-indications                               │  │ ← h4: Inter 18px
│  │                                                        │  │    SemiBold #C4944A
│  │  Soins déconseillés en cas de :                        │  │
│  │  • Allergie cutanée active                             │  │ ← Inter 14px #5C5650
│  │  • Grossesse (1er trimestre)                           │  │
│  │  • Plaies ouvertes, coups de soleil                    │  │
│  │  • Traitement médical en cours (consultez votre        │  │
│  │    médecin)                                            │  │
│  │                                                        │  │
│  │  Fond: #FFF8F0 (ambre très clair)                      │  │
│  │  Border: 1px solid #E8D5BC                             │  │
│  │  Radius: 8px, padding: 20px                            │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## 6. Témoignages spécifiques à la catégorie

### Desktop
```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #FDF8F3, Padding: 48px 0                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              ELLES ONT ESSAYÉ                        │  │ ← h2
│  │                                                        │  │
│  │  ┌────────────────────────────────────────────────┐   │  │
│  │  │ ❝ "Le soin INSPIRA:MED a transformé ma peau   │   │  │
│  │  │ en 3 séances. Je suis bluffée par les          │   │  │ ← Citation + nom
│  │  │ résultats !"                                   │   │  │
│  │  │ — Claire F. ★ ★ ★ ★ ★                         │   │  │
│  │  └────────────────────────────────────────────────┘   │  │
│  │                                                        │  │
│  │  Fond: #FFF, radius 12px, padding 24px                 │  │
│  │  Max-width: 600px, centré                              │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Mobile
- Même contenu, pleine largeur
- Padding 20px

---

## 7. CTA final

```
┌──────────────────────────────────────────────────────────────┐
│  Fond: #2D2A24, Padding: 56px 0                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │  Vous avez une question sur ce soin ?                  │  │ ← h3: 28px #FDF8F3
│  │                                                        │  │
│  │  ┌─────────────────────┐  ┌──────────────────────┐    │  │
│  │  │ Prendre rendez-vous │  │   Me contacter        │    │  │ ← 2 CTA
│  │  └─────────────────────┘  └──────────────────────┘    │  │    Primaire + Secondaire
│  │                                                        │  │
│  │  Desktop : côte à côte, Mobile : stack vertical        │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

---

## 8. Animations suggérées

| Élément | Animation |
|---------|-----------|
| **Bannière** | Parallax doux (facteur 0.3) au scroll |
| **Introduction** | Fade-in + translateY |
| **Cartes prestations** | Apparition stagger 150ms depuis le bas |
| **Badges** | Scale (1.1→1) à l'apparition |
| **Hover cartes** | Soulèvement -3px, ombre renforcée |
| **Bouton "Réserver"** | Transition background + arrow slide |
| **Contre-indications** | Slide-in depuis la droite ou fade |

---

## 9. État responsive

| Section | Desktop | Mobile |
|---------|---------|--------|
| **Bannière** | Hauteur 400px, overlay subtil | Hauteur 240px, overlay plus fort |
| **Introduction** | Max-width 680px centré | Pleine largeur |
| **Prestations** | Cartes avec padding 24px | Cartes full-width, padding 16px |
| **Durée/prix** | Côte à côte | Côte à côte (réduit) |
| **CTA final** | 2 boutons côte à côte | 2 boutons empilés |
