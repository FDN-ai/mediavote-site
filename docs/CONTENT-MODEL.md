# CONTENT-MODEL — Modèle de contenu et composants

Version 1 — 22/08/2026. Définit les **types de pages**, les **blocs réutilisables** et le **format des fichiers de contenu**.

---

## 1. Principe

Le contenu vit dans des fichiers Markdown, séparés de la présentation. Un fichier par page, éditable sans toucher au HTML.

```
content/
├── home.md
├── solutions/
│   ├── index.md
│   ├── assemblee-generale.md
│   ├── conseil-administration.md
│   ├── elections-cse.md
│   └── consultations-referendums.md
├── modes-de-vote/
│   ├── index.md
│   ├── vote-en-ligne.md
│   ├── vote-par-boitier.md
│   └── vote-hybride.md
├── provote/
│   ├── index.md
│   └── fonctionnalites.md
├── offres/
│   ├── licence-annuelle-provote.md
│   └── accompagnement-sur-mesure.md
├── secteurs/…
├── securite-conformite.md
├── references.md
├── a-propos.md
├── demonstration.md
├── faq.md
├── contact.md
├── legal/…
└── actualites/<slug>.md
```

**Données partagées** dans `content/_data/` : `site.json` (coordonnées, réseaux), `nav.json` (navigation), `faq.json` (questions mutualisées), `references.json` (logos et témoignages).

Un même élément de FAQ ou de témoignage n'est **jamais dupliqué** entre fichiers : il est référencé par identifiant.

---

## 2. Front matter

Chaque fichier de contenu commence par un bloc de métadonnées normalisé.

```yaml
---
url: /solutions/vote-electronique-assemblee-generale
template: solution
priority: P0
status: draft            # draft | review | validated
title: "Vote électronique pour assemblée générale | Media Vote"
description: "Émargement, quorum, pouvoirs, résolutions et résultats…"
h1: "Vote électronique pour vos assemblées générales"
eyebrow: "Assemblées générales"
keyword: "vote électronique assemblée générale"
cta_primary:
  label: "Demander une démonstration AG"
  url: /demonstration
cta_secondary:
  label: "Parler de votre projet"
  url: /contact
breadcrumb: ["Accueil", "Solutions", "Assemblées générales"]
schema: ["Service", "FAQPage", "BreadcrumbList"]
faq: [ag-quorum, ag-pouvoirs, ag-hybride, ag-secret, ag-pv]
related: [/modes-de-vote/vote-en-ligne, /modes-de-vote/vote-par-boitier, …]
validation_refs: [V6.1, V6.8]     # affirmations liées dans CONTENT-VALIDATION.md
og_image: /assets/og/assemblee-generale.jpg
updated: 2026-08-22
---
```

**`status`** pilote la mise en production : aucune page en `draft` n'est publiée.
**`validation_refs`** relie la page aux affirmations du registre. Un contrôle automatisé refuse la publication si une référence est en statut 🔴.

---

## 3. Types de pages

### 3.1 `template: home`

1. Header et navigation
2. Hero — proposition de valeur, CTA principal + secondaire, visuel produit
3. Réassurance immédiate — 3 à 4 preuves courtes
4. Orientation par type de scrutin — 4 cartes solution
5. Les trois modes de vote — 3 cartes
6. Différenciation Media Vote — le territoire éditorial
7. Plateforme ProVote® — capture réelle + bénéfices
8. Déroulement de l'accompagnement — frise J-30 → J0
9. Licence annuelle — bandeau dédié
10. Sécurité et conformité — preuves vérifiées
11. Références — logos ou typologies
12. Typologies d'organisations — 3 cartes secteur
13. Témoignage ou cas client
14. FAQ courte — 5 à 6 questions
15. Actualités — 3 derniers articles
16. CTA final
17. Footer complet

### 3.2 `template: solution` — pages besoin

Hero *(problème + promesse + CTA)* → réponse rapide à l'intention → le scrutin en détail → modes disponibles → fonctionnalités clés → déroulement de l'accompagnement → sécurité → preuves et cas client → prestation vs licence → FAQ spécifique → CTA final

**Règle** : cible **un besoin**, distribue vers les modes et les offres. Ne réécrit jamais le fonctionnement d'un mode de vote.

### 3.3 `template: mode` — pages modalité

Hero modalité → pour qui → comment ça fonctionne → bénéfices concrets → fonctionnalités associées → scénarios d'usage → **quand préférer une autre modalité** → preuves → FAQ → CTA

**Règle** : cible **une technologie**. Ne réécrit pas les contraintes de chaque secteur ou de chaque type de scrutin.

> Le bloc « quand préférer une autre modalité » n'est pas de la modestie commerciale : c'est ce qui rend les deux autres pages crédibles et alimente le maillage latéral.

### 3.4 `template: offre`

Promesse commerciale → critères d'éligibilité → ce que contient l'offre → déroulement → niveaux et options → ce que ça change concrètement → **comparaison avec l'autre offre** → preuves → FAQ → CTA

**Règle** : cible le **modèle d'achat**, pas le type de scrutin. Aucun tarif (D4).

### 3.5 `template: secteur`

Enjeux du secteur → scrutins concernés → contraintes statutaires spécifiques → comment Media Vote y répond → cas client sectoriel → références du secteur → FAQ sectorielle → CTA

**Règle impérative** : apporte **cas, vocabulaire et contraintes du secteur**. Ne duplique jamais la page AG. Un paragraphe qui fonctionnerait à l'identique sur trois pages secteur n'a rien à faire sur aucune.

### 3.6 `template: preuve` — sécurité, références

**Sécurité** : principes → mécanismes techniques → données personnelles → audits → certifications → accessibilité → continuité → FAQ → contact expert
Chaque affirmation est adossée à une source ou marquée en emplacement réservé.

**Références** : chiffres clés → logos par secteur → témoignages → cas clients → CTA

### 3.7 `template: conversion` — démonstration, contact

Promesse → ce qui va se passer → formulaire → réassurance → alternatives de contact
**Pas de navigation secondaire** dans le corps de page : le seul chemin est le formulaire.

### 3.8 `template: article`

Réponse directe (2-3 phrases) → contexte → développement H2/H3 → exemples → lien vers **une seule** page pilier → auteur et date → sources → CTA discret

### 3.9 `template: legal`

Contenu réglementaire, sommaire ancré, date de dernière mise à jour visible.

---

## 4. Composants réutilisables

| Composant | Usage | Variantes | Contenu |
|---|---|---|---|
| `header` | Toutes | transparent sur hero sombre / opaque | `nav.json` |
| `nav-primary` | Toutes | desktop / mobile | `nav.json` |
| `breadcrumb` | Toutes sauf home | — | `breadcrumb` du front matter |
| `hero` | Toutes | home / page / conversion | Front matter + intro |
| `reassurance-bar` | Home, piliers | 3 ou 4 items | `_data/proofs.json` |
| `card-solution` | Home, hubs | avec ou sans icône | Titre, phrase, critère de choix, lien |
| `card-mode` | Home, hub modes | — | Titre, description, « pour qui », lien |
| `card-secteur` | Home, hub secteurs | — | Titre, enjeu, lien |
| `card-proof` | Sécurité, home | fait / chiffre / certification | Libellé, valeur, source, statut de validation |
| `timeline` | Accompagnement, home | horizontale / verticale | Jalons J-30 → J0 |
| `feature-list` | Fonctionnalités, piliers | 2 ou 3 colonnes | Groupes de fonctionnalités |
| `comparison-table` | Hub modes, licence | — | Comparatif honnête |
| `cta-band` | Toutes | primaire / secondaire / sombre | Titre, phrase, 1 ou 2 CTA |
| `faq-accordion` | Piliers, FAQ | — | `faq.json` par identifiants |
| `testimonial` | Home, piliers, références | citation / carte / vidéo | `references.json` |
| `logo-wall` | Home, références | par secteur | `references.json` |
| `case-study` | Piliers, secteurs | — | Contexte, enjeu, dispositif, résultat |
| `news-grid` | Home, actualités | 3 items / grille complète | `actualites/` |
| `form` | Démonstration, contact | démo / contact | Champs déclarés |
| `screenshot` | ProVote®, piliers | pleine largeur / encadrée | `assets/screenshots/` |
| `related-links` | Toutes | — | `related` du front matter |
| `footer` | Toutes | — | `site.json` + `nav.json` |

**Aucun composant ne duplique du contenu.** Le témoignage affiché sur la home et sur la page AG est **le même enregistrement**, appelé deux fois.

---

## 5. Éléments éditoriaux obligatoires par page

Chaque page livrée en Phase 3 comporte :

- Title SEO et meta description
- H1 unique
- Eyebrow *(sur-titre de section)*
- Hiérarchie H2 / H3 complète
- Paragraphes rédigés — **aucun lorem ipsum**
- Listes lorsque la structure s'y prête
- Microcopy : libellés de champs, aides, mentions
- CTA principal et secondaire
- FAQ spécifique
- Libellés de navigation et de fil d'Ariane
- Textes de formulaire et messages d'erreur
- Message de confirmation
- Textes alternatifs suggérés pour chaque visuel
- Suggestions de preuves et de visuels
- Liens internes recommandés avec ancres

---

## 6. Gestion des contenus non validés

Toute affirmation en attente est **matérialisée dans le contenu**, jamais silencieusement omise ni inventée :

```markdown
:::validation{ref="V5.2" status="attente"}
**Chiffre en attente de confirmation — Q-B1.**
Emplacement réservé : « Plus de X votants accompagnés en 2025 ».
Ne pas publier avant retour client.
:::
```

Au build :
- `status: attente` ou `bloque` → **le bloc n'est pas rendu** en production, et un avertissement est émis.
- En mode aperçu client, le bloc est rendu avec un fond distinctif pour rendre la question visible.

**Le site ne peut donc pas partir en production avec une affirmation non validée** — c'est un garde-fou technique, pas seulement éditorial.

---

## 7. Règles rédactionnelles

**Ton** — professionnel, rassurant, humain, précis, accessible. Expert sans être technocratique. Commercial sans être agressif.

**Forme**
- Phrases courtes. Une idée par phrase.
- Voix active. « Media Vote prépare votre scrutin », pas « votre scrutin est préparé ».
- Le lecteur est « vous ». Media Vote est « nous ».
- Jamais de superlatif non démontré.
- Chaque affirmation importante est suivie de sa preuve ou d'un lien vers elle.
- Un chiffre sans source n'est pas publié.

**Vocabulaire de marque**
- « Media Vote » en deux mots (D2)
- « ProVote® » avec le symbole, à la première occurrence de chaque page
- « la plateforme ProVote® de Media Vote » — jamais « ProVote, la société »
- « scrutin », « assemblée », « votant », « organisation »
- Éviter « client » au profit d'« organisation » dans les pages commerciales

**Interdits** — voir `CONTENT-VALIDATION.md` §8. Contrôle automatisé au build sur la liste des expressions proscrites.

**Longueurs indicatives**
| Type | Mots |
|---|---|
| Home | 900 – 1 300 |
| Page pilier besoin | 1 400 – 2 000 |
| Page mode | 900 – 1 300 |
| Page offre | 800 – 1 200 |
| Page secteur | 700 – 1 000 |
| Sécurité | 1 200 – 1 800 |
| Hub | 300 – 500 |
| Conversion | 250 – 400 |

**Ces longueurs sont des ordres de grandeur, pas des quotas.** Aucun contenu n'est allongé artificiellement. Une page qui répond en 700 mots ne sera pas étirée à 1 400.

---

## 8. Modèle de FAQ

`_data/faq.json` centralise les questions :

```json
{
  "ag-quorum": {
    "q": "Comment le quorum est-il calculé pendant une assemblée générale ?",
    "a": "ProVote® calcule le quorum automatiquement…",
    "tags": ["ag", "quorum"],
    "pages": ["/solutions/vote-electronique-assemblee-generale", "/faq"],
    "validation": null
  }
}
```

**Règles**
- Une question n'existe qu'une fois, affichée sur plusieurs pages.
- Chaque réponse est **autoportante** : compréhensible hors contexte, pour les moteurs conversationnels.
- Réponse en 40 à 90 mots. Plus long : cela relève d'un article.
- Les questions viennent des **objections réelles** identifiées en avant-vente, pas d'une liste inventée.
- `FAQPage` généré uniquement sur les pages affichant réellement les questions.

---

## 9. Modèle de références

`_data/references.json` :

```json
{
  "logos": [
    { "name": "…", "sector": "public", "logo": "…", "authorized": false }
  ],
  "testimonials": [
    { "id": "…", "quote": "…", "author": "…", "role": "…",
      "org": "…", "date": "…", "consent": false, "sector": "…" }
  ]
}
```

**`authorized` et `consent` valent `false` par défaut.** Le build n'affiche que les entrées à `true`. Sans autorisation confirmée (Q-B7), le mur de logos bascule automatiquement sur des typologies anonymisées.

---

## 10. Médias

| Type | Format | Contrainte |
|---|---|---|
| Captures ProVote® | WebP + JPEG de repli | `width`/`height` déclarés, `loading="lazy"` hors hero |
| Photos | WebP + JPEG | Idem, `alt` descriptif obligatoire |
| Logos clients | SVG ou PNG transparent | Hauteur normalisée, `alt` = nom de l'organisation |
| Icônes | SVG inline | `aria-hidden="true"` si décoratif |
| Schémas | SVG | Alternative textuelle ou description longue |
| Open Graph | JPEG 1200×630 | Une image par page P0 |

**Textes alternatifs** — rédigés dans le fichier de contenu, jamais laissés au développement. Une image décorative reçoit `alt=""`.

---

## 11. Formulaires

### Démonstration
| Champ | Type | Obligatoire |
|---|---|---|
| Organisation | texte | ✅ |
| Nom et prénom | texte | ✅ |
| E-mail professionnel | e-mail | ✅ |
| Téléphone | tél | — |
| Type de scrutin | liste | ✅ |
| Nombre approximatif de votants | liste de tranches | — |
| Échéance | liste | — |
| Message | zone de texte | — |

### Contact
Nom · e-mail · organisation · sujet · message. **5 champs, 4 obligatoires.**

**Règles communes** — `<label>` visible et lié à chaque champ · messages d'erreur explicites en français, à côté du champ · erreurs annoncées via `aria-live` · antispam par honeypot + horodatage, **sans CAPTCHA** · consentement RGPD explicite avec lien vers la politique de confidentialité · page de confirmation `/merci` en `noindex`.

**Sans destination validée (Q-B8)** : le formulaire est livré complet et fonctionnel côté interface, mais la soumission est **désactivée** avec un message clair. Aucune simulation d'envoi réussi.

---

## 12. Contrôles automatisés au build

| Contrôle | Effet si échec |
|---|---|
| Front matter complet | Build en échec |
| Title ≤ 60 caractères | Avertissement |
| Meta description 140–158 caractères | Avertissement |
| H1 unique par page | Build en échec |
| Hiérarchie de titres sans saut | Avertissement |
| Expressions interdites (§8 du registre) | **Build en échec** |
| `validation_refs` en statut 🔴 | **Build en échec en mode production** |
| `alt` manquant sur une image non décorative | Build en échec |
| Lien interne cassé | Build en échec |
| Lien interne vers une URL redirigée | Avertissement |
| Page sans lien entrant | Avertissement |
| `status: draft` en production | **Build en échec** |

> Ces contrôles transforment les règles éditoriales en garanties techniques. C'est ce qui permet de tenir la promesse « aucune affirmation non validée en ligne » sur la durée, y compris après notre intervention.
