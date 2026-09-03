# Wireframe — Services — Catalogue (/services)

---

## Version Desktop (≥ 1024px)

```
┌──────────────────────────────────────────────────────────────────────┐
│ [H]  Logo          Accueil  À propos  Services ▾  Contact  [RDV]   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │  Fil d'Ariane : Accueil > Services                           │  │
│ │  Titre : "Nos soins"                                         │  │
│ │  Sous-titre : "Des prestations sur mesure pour votre bien-être"│  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
│ ┌────────────────────────────────────────────────────────────────┐  │
│ │  SECTION GRILLE DES SERVICES (3 colonnes)                     │  │
│ │                                                                │  │
│ │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │  │
│ │  │   🌿             │  │   💆             │  │   🤰        │ │  │
│ │  │  SOINS VISAGE    │  │  MODELAGES       │  │  MATERNITÉ   │ │  │
│ │  │  Classiques +    │  │  Évasion         │  │  Soins       │ │  │
│ │  │  INSPIRA:MED     │  │                  │  │  maternité   │ │  │
│ │  │  [Découvrir]     │  │  [Découvrir]     │  │  [Découvrir] │ │  │
│ │  └──────────────────┘  └──────────────────┘  └──────────────┘ │  │
│ │                                                                │  │
│ │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │  │
│ │  │   🏋️             │  │   🪒             │  │   💅        │ │  │
│ │  │  REMODELANT      │  │  ÉPILATIONS      │  │  BAR À      │ │  │
│ │  │  Corps           │  │                  │  │  ONGLES     │ │  │
│ │  │  [Découvrir]     │  │  [Découvrir]     │  │  [Découvrir]│ │  │
│ │  └──────────────────┘  └──────────────────┘  └──────────────┘ │  │
│ │                                                                │  │
│ │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │  │
│ │  │   ✋             │  │   👁️             │  │   👰        │ │  │
│ │  │  MAINS & PIEDS  │  │  BEAUTÉ DU       │  │  FUTURE      │ │  │
│ │  │  Soins          │  │  REGARD          │  │  MARIÉE      │ │  │
│ │  │  [Découvrir]     │  │  Extensions cils │  │  Maquillages │ │  │
│ │  │                 │  │  [Découvrir]     │  │  [Découvrir] │ │  │
│ │  └──────────────────┘  └──────────────────┘  └──────────────┘ │  │
│ │                                                                │  │
│ │  ┌─────────────────────────────────────────────────────────┐  │  │
│ │  │                    🎁  CARTE CADEAU                     │  │  │
│ │  │  "Offrez un moment de bien-être à vos proches"          │  │  │
│ │  │  [ En savoir + ]                                        │  │  │
│ │  └─────────────────────────────────────────────────────────┘  │  │
│ │                                                                │  │
│ └────────────────────────────────────────────────────────────────┘  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ [F]  Footer                                                          │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Version Mobile (< 768px)

```
┌──────────────────────────────┐
│ [H] ≡ Logo    [📞] [RDV]    │
├──────────────────────────────┤
│                              │
│  Accueil > Services          │
│                              │
│ ┌────────────────────────┐  │
│ │  "Nos soins"           │  │
│ │  Des prestations sur   │  │
│ │  mesure...             │  │
│ └────────────────────────┘  │
│                              │
│ ┌────────────────────────┐  │
│ │  GRILLE (2 colonnes)   │  │
│ │                        │  │
│ │  ┌──────┐ ┌──────┐    │  │
│ │  │ 🌿  │ │ 💆  │    │  │
│ │  │Visage│ │Model.│    │  │
│ │  └──────┘ └──────┘    │  │
│ │  ┌──────┐ ┌──────┐    │  │
│ │  │ 🤰  │ │ 🏋️  │    │  │
│ │  │Mater.│ │Remod.│    │  │
│ │  └──────┘ └──────┘    │  │
│ │  ┌──────┐ ┌──────┐    │  │
│ │  │ 🪒  │ │ 💅  │    │  │
│ │  │Épil. │ │Ongles│    │  │
│ │  └──────┘ └──────┘    │  │
│ │  ┌──────┐ ┌──────┐    │  │
│ │  │ ✋   │ │ 👁️  │    │  │
│ │  │Mains │ │Regard│    │  │
│ │  └──────┘ └──────┘    │  │
│ │  ┌──────────────────┐ │  │
│ │  │ 👰 Future Mariée │ │  │
│ │  └──────────────────┘ │  │
│ │  ┌──────────────────┐ │  │
│ │  │ 🎁 Carte Cadeau  │ │  │
│ │  └──────────────────┘ │  │
│ └────────────────────────┘  │
│                              │
├──────────────────────────────┤
│ [F] Footer                   │
└──────────────────────────────┘
```

---

## Notes UX

| Élément | Justification |
|---|---|
| **Grille 3 colonnes desktop, 2 colonnes mobile** | Lisibilité maximale des catégories |
| **Icône + nom + description courte** | Aide à scanner rapidement (persona Clara — pressée) |
| **Carte cadeau mise en avant visuellement** | Fort potentiel cross-sell, mérite sa propre carte |
| **Chaque carte = lien vers page dédiée** | Évite la surcharge d'infos sur la page catalogue |
