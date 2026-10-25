# NAVIGATION — Structure, libellés et comportements

Version 1 — 22/08/2026.

---

## 1. Principe

La navigation du site actuel comporte **9 entrées principales et 6 secondaires**, mélangeant besoins (« Assemblée Générale », « CSE »), secteurs (« Sociétés », « Associations & Fédérations », « Fonctions publiques ») et offres (« Licence ProVote ») **au même niveau**. C'est exactement ce que le brief client qualifie de « confus et peu intuitif ».

La navigation cible applique la décision d'architecture : **besoin d'abord, mode ensuite, secteur en dernier** — avec une hiérarchie visible plutôt que juxtaposée.

**5 entrées principales**, au lieu de 15. Un menu se lit en une seconde ou il ne se lit pas.

---

## 2. Header

```
[Logo Media Vote]   Solutions ▾   Modes de vote ▾   ProVote® ▾   Ressources ▾   À propos
                                            01 47 08 55 13   [Demander une démonstration]
```

**Composition**
- Logo à gauche, lien vers `/`, `alt="Media Vote — accueil"`.
- 5 entrées, dont 4 avec sous-menu.
- Téléphone en clair, cliquable (`tel:`). Une partie des prospects appelle plutôt que de remplir un formulaire.
- CTA principal en bouton contrasté, présent sur toutes les pages.
- Header **sticky** avec réduction de hauteur au défilement.

### Sous-menus

**Solutions ▾** — *entrée par besoin*
| Libellé | URL |
|---|---|
| Assemblées générales | `/solutions/vote-electronique-assemblee-generale` |
| Conseils d'administration | `/solutions/vote-conseil-administration` |
| Élections CSE | `/solutions/elections-cse` |
| Consultations et référendums | `/solutions/consultations-referendums` |
| — | — |
| *Voir toutes les solutions* | `/solutions` |

**Modes de vote ▾**
| Libellé | URL |
|---|---|
| Vote en ligne | `/modes-de-vote/vote-en-ligne` |
| Vote par boîtier | `/modes-de-vote/vote-par-boitier` |
| Vote hybride | `/modes-de-vote/vote-hybride` |
| — | — |
| *Comparer les modes de vote* | `/modes-de-vote` |

**ProVote® ▾** — *plateforme et offres*
| Libellé | URL |
|---|---|
| La plateforme ProVote® | `/provote` |
| Fonctionnalités | `/provote/fonctionnalites` |
| Licence annuelle | `/offres/licence-annuelle-provote` |
| Accompagnement sur mesure | `/offres/accompagnement-sur-mesure` |
| Sécurité et conformité | `/securite-conformite` |

**Ressources ▾**
| Libellé | URL |
|---|---|
| Références clients | `/references` |
| Actualités et conseils | `/actualites` |
| Questions fréquentes | `/faq` |
| Secteurs d'activité | `/secteurs` |

**À propos** — lien direct vers `/a-propos`, sans sous-menu.

---

## 3. Décisions de navigation et justifications

| Décision | Raison |
|---|---|
| **Les deux offres sous « ProVote® »** | La licence et l'accompagnement sont deux façons d'utiliser la même plateforme. Les regrouper avec ProVote® rend le choix lisible. Un menu « Offres » séparé ferait doublon avec « Solutions » |
| **Sécurité sous « ProVote® »** | Elle qualifie la plateforme. En entrée principale, elle occuperait une place disproportionnée pour une audience minoritaire — mais décisive, d'où sa présence dans un sous-menu et son lien depuis toutes les pages |
| **Secteurs sous « Ressources »** | Le brief demande « besoin d'abord, utilisateur ensuite ». Mettre les secteurs en entrée principale reproduirait l'erreur du site actuel |
| **Pas d'entrée « Contact »** | Le CTA du header couvre l'intention. `/contact` reste dans le footer et lié depuis les pages. Une entrée « Contact » consommerait une place au profit d'une page à faible valeur commerciale |
| **Téléphone visible** | Segment B2B où l'appel direct est fréquent. Le retirer coûterait des contacts |
| **CTA unique dans le header** | « Demander une démonstration ». Deux boutons dans un header en affaiblissent un |

---

## 4. Navigation mobile

**Déclenchement** : bouton hamburger à droite, `aria-label="Ouvrir le menu"`, cible tactile ≥ 44 × 44 px.

**Panneau plein écran** :

```
[✕ Fermer]

  Solutions                            ▾
  Modes de vote                        ▾
  ProVote®                             ▾
  Ressources                           ▾
  À propos

  ─────────────────────────────────────
  [ Demander une démonstration ]
  📞 01 47 08 55 13
  ✉ contact@media-vote.com
```

**Comportements**
- Accordéons repliés à l'ouverture, un seul déplié à la fois.
- Défilement de la page bloqué pendant l'ouverture.
- Focus déplacé sur le premier élément à l'ouverture, restitué au bouton à la fermeture.
- Focus **piégé** dans le panneau tant qu'il est ouvert.
- Fermeture par `Échap`, par le bouton, ou par clic hors panneau.
- CTA et coordonnées **en bas**, atteignables au pouce.

---

## 5. Accessibilité

| Exigence | Mise en œuvre |
|---|---|
| Structure sémantique | `<header>` > `<nav aria-label="Navigation principale">` > `<ul>` |
| Sous-menus | `<button aria-expanded="false" aria-controls="…">` — un bouton, pas un lien |
| Ouverture au clavier | `Entrée` ou `Espace`. **Jamais au survol seul** |
| Parcours | `Tab` traverse tous les éléments dans l'ordre visuel |
| Fermeture | `Échap` ferme le sous-menu et rend le focus au bouton |
| Focus | Contour visible ≥ 2 px, contraste ≥ 3:1, **jamais supprimé** |
| Page courante | `aria-current="page"` + repère visuel non chromatique |
| Lien d'évitement | « Aller au contenu principal », premier élément focusable |
| Sans JavaScript | Les sous-menus s'affichent dépliés — **toute la navigation reste utilisable** |
| Contraste | ≥ 4,5:1 pour le texte, ≥ 3:1 pour les bordures de boutons |
| Mouvement | Transitions désactivées sous `prefers-reduced-motion` |

**Le survol ouvre le sous-menu sur desktop pointeur**, avec un délai de fermeture de 200 ms pour éviter les fermetures accidentelles. Mais le clavier et le clic restent les chemins de référence.

---

## 6. Fil d'Ariane

Sur toutes les pages sauf l'accueil, sous le header.

```
Accueil › Solutions › Assemblées générales
```

- `<nav aria-label="Fil d'Ariane">` + `<ol>`.
- Élément courant non cliquable, `aria-current="page"`.
- Données structurées `BreadcrumbList`.
- Séparateurs en CSS (`::after`), invisibles aux lecteurs d'écran.

**Cas des pages sans parent réel**

| Page | Fil d'Ariane |
|---|---|
| `/offres/licence-annuelle-provote` | Accueil › ProVote® › Licence annuelle |
| `/offres/accompagnement-sur-mesure` | Accueil › ProVote® › Accompagnement sur mesure |
| `/securite-conformite` | Accueil › Sécurité et conformité |
| `/demonstration` | Accueil › Démonstration |
| `/actualites/<slug>` | Accueil › Actualités › *Titre* |

Les pages `/offres/…` rattachent leur fil d'Ariane à ProVote®, cohérent avec la navigation, alors que leur URL utilise `/offres/`. Écart assumé : le fil d'Ariane sert la **compréhension**, l'URL sert la **lisibilité**.

---

## 7. Footer

Quatre colonnes sur desktop, empilées sur mobile.

| Solutions | Modes et plateforme | Ressources | Media Vote |
|---|---|---|---|
| Assemblées générales | Vote en ligne | Références clients | À propos |
| Conseils d'administration | Vote par boîtier | Actualités | Contact |
| Élections CSE | Vote hybride | Questions fréquentes | Demander une démonstration |
| Consultations et référendums | Plateforme ProVote® | Secteurs d'activité | Sécurité et conformité |
| | Licence annuelle | | |
| | Accompagnement sur mesure | | |

**Bande basse**
```
Media Vote — 9 rue Sédillot, 75007 Paris
01 47 08 55 13 · contact@media-vote.com
[LinkedIn] [YouTube]

© 2026 Media Vote · Mentions légales · Politique de confidentialité · Accessibilité · Plan du site
```

**Notes**
- Adresse en `<address>` avec microdonnées `PostalAddress`.
- Réseaux sociaux : liens réels uniquement. La chaîne YouTube existe ; **vérifier LinkedIn et Facebook avant publication** — le site actuel affiche Facebook, à confirmer comme actif.
- Le footer met délibérément en avant `/offres/licence-annuelle-provote` et `/demonstration`.
- **Pas de newsletter tant que le dispositif n'est pas décidé** (Q-C5). Un champ qui n'aboutit nulle part détruit la confiance.

---

## 8. Libellés — vocabulaire figé

Ces libellés sont **identiques partout** : navigation, fil d'Ariane, footer, liens contextuels, plan du site.

| Page | Libellé de navigation | Libellé long |
|---|---|---|
| `/solutions/vote-electronique-assemblee-generale` | Assemblées générales | Vote électronique pour assemblées générales |
| `/solutions/vote-conseil-administration` | Conseils d'administration | Vote en conseil d'administration |
| `/solutions/elections-cse` | Élections CSE | Vote électronique pour élections CSE |
| `/solutions/consultations-referendums` | Consultations et référendums | Consultations et référendums en ligne |
| `/modes-de-vote/vote-en-ligne` | Vote en ligne | Le vote en ligne sécurisé |
| `/modes-de-vote/vote-par-boitier` | Vote par boîtier | Le vote par boîtier en présentiel |
| `/modes-de-vote/vote-hybride` | Vote hybride | Le vote hybride |
| `/provote` | La plateforme ProVote® | ProVote®, la plateforme de Media Vote |
| `/provote/fonctionnalites` | Fonctionnalités | Fonctionnalités de ProVote® |
| `/offres/licence-annuelle-provote` | Licence annuelle | La licence annuelle ProVote® |
| `/offres/accompagnement-sur-mesure` | Accompagnement sur mesure | L'accompagnement Media Vote |
| `/securite-conformite` | Sécurité et conformité | Sécurité et conformité |
| `/secteurs` | Secteurs d'activité | Nos secteurs d'activité |
| `/references` | Références clients | Références et témoignages |
| `/a-propos` | À propos | Qui sommes-nous |
| `/demonstration` | Demander une démonstration | Demander une démonstration |
| `/faq` | Questions fréquentes | Questions fréquentes |
| `/actualites` | Actualités | Actualités et conseils |
| `/contact` | Contact | Nous contacter |

**« ProVote® »** porte le symbole dans les libellés de navigation. Dans le corps de texte, à la première occurrence de chaque page seulement.

---

## 9. CTA — règles d'emploi

| CTA | Emploi | Style |
|---|---|---|
| **Demander une démonstration** | Header (permanent), hero de la home, bandeaux, fin des pages piliers | Bouton primaire |
| **Parler de votre projet** | Alternative en hero, pages moins matures | Bouton secondaire |
| Variantes contextuelles *(« Demander une démonstration AG », « Voir la licence en démonstration »)* | Pages besoin et offres | Bouton primaire |
| **Comparer les modes de vote**, **Trouver ma solution**, **Étudier mon besoin** | Hubs | Bouton secondaire ou lien fléché |
| **Échanger avec un expert** | Sécurité et conformité | Bouton secondaire |

**Règles**
- Un seul CTA primaire visible par section d'écran.
- Jamais deux bandeaux CTA consécutifs.
- Sur une page pilier : hero, un bandeau en milieu de page, un bloc final. **Trois occasions, pas huit.**
- Verbe à l'infinitif ou à la première personne. Jamais « Cliquez ici », jamais « En savoir plus » seul.
- Tout CTA indique où il mène.

---

## 10. Comportements JavaScript

Le JavaScript de navigation se limite à :

1. Ouverture et fermeture du menu mobile *(avec piège de focus)*
2. Ouverture et fermeture des sous-menus desktop au clic et au clavier
3. Réduction du header au défilement
4. Marquage de la page courante

**Total estimé : moins de 4 Ko non minifiés.**
**Sans JavaScript, la navigation reste entièrement fonctionnelle** — les sous-menus s'affichent dépliés. Ce n'est pas une dégradation théorique : c'est testé en QA.

---

## 11. Contrôles avant mise en production

- [ ] Toutes les entrées mènent à une page existante en 200.
- [ ] Aucun lien de navigation vers une URL redirigée.
- [ ] Navigation complète au clavier, sans piège de focus hors menu mobile.
- [ ] `Échap` ferme tous les sous-menus.
- [ ] `aria-expanded` reflète l'état réel.
- [ ] Contraste vérifié sur tous les états : normal, survol, focus, actif.
- [ ] Menu mobile testé sur iOS et Android, à 320 px de large.
- [ ] Fil d'Ariane cohérent avec `BreadcrumbList` sur chaque page.
- [ ] Navigation utilisable JavaScript désactivé.
- [ ] Libellés strictement identiques entre header, footer, fil d'Ariane et plan du site.
- [ ] Aucun lien vers une page en statut `draft` ou 🔴.
