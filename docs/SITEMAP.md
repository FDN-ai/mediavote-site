# SITEMAP — Architecture du site Media Vote

Version 1 — 22/08/2026. Fondé sur `Media-Vote-Architecture-SEO-2026.xlsx`, ajusté par la décision **D1**.
URLs **figées** : toute modification impose de reprendre `SEO-MAPPING.md`, `INTERNAL-LINKING.md` et le plan de redirections.

---

## 1. Principe d'architecture

Trois portes d'entrée, dans cet ordre de priorité :

1. **Par besoin** (`/solutions/…`) — « j'organise une AG », « j'ai des élections CSE ». C'est l'intention dominante et la plus transactionnelle.
2. **Par mode de vote** (`/modes-de-vote/…`) — « je veux du vote en ligne », « je cherche des boîtiers ». Intention technologique, souvent plus avancée.
3. **Par secteur** (`/secteurs/…`) — « je suis une association », « je suis une collectivité ». Intention identitaire, vocabulaire et contraintes propres.

Les trois axes se croisent par le maillage interne, jamais par duplication de contenu. **Une intention transactionnelle = une page propriétaire.**

Trois pages transverses portent la preuve et la conversion : `/securite-conformite`, `/references`, `/demonstration`.

---

## 2. Arborescence complète — 28 pages

```
/                                                       P0  Accueil
│
├── /solutions                                          P1  Hub — entrée par besoin
│   ├── /solutions/vote-electronique-assemblee-generale P0  ★ page pilier
│   ├── /solutions/vote-conseil-administration          P1
│   ├── /solutions/elections-cse                        P0  ★
│   └── /solutions/consultations-referendums            P1
│
├── /modes-de-vote                                      P1  Hub — entrée par modalité
│   ├── /modes-de-vote/vote-en-ligne                    P0
│   ├── /modes-de-vote/vote-par-boitier                 P0
│   └── /modes-de-vote/vote-hybride                     P0
│
├── /provote                                            P0  Plateforme
│   └── /provote/fonctionnalites                        P1
│
├── /offres                                             —   (pas de page, segment d'URL seul)
│   ├── /offres/licence-annuelle-provote                P0  ★ récurrence
│   └── /offres/accompagnement-sur-mesure               P0  ★ différenciation
│
├── /secteurs                                           P1  Hub — entrée par typologie
│   ├── /secteurs/associations-federations              P1
│   ├── /secteurs/entreprises-mutuelles                 P1
│   └── /secteurs/organismes-publics                    P1
│
├── /securite-conformite                                P0  ★ due diligence
├── /references                                         P1  Preuve sociale
├── /a-propos                                           P1  Marque et équipe
├── /demonstration                                      P0  ★ conversion
├── /faq                                                P1
├── /contact                                            P1
│
├── /actualites                                         P1  Hub éditorial
│   └── /actualites/<slug>                              —   ~144 articles migrés
│
└── Pages légales
    ├── /mentions-legales                               P2
    ├── /politique-confidentialite                      P2
    ├── /accessibilite                                  P2
    └── /plan-du-site                                   P2
```

**Note sur `/offres`** : segment d'URL sans page propre. Deux offres ne justifient pas un hub, et un hub `/offres` entrerait en concurrence avec `/solutions`. Les deux pages sont accessibles depuis la navigation, la home et le maillage.

---

## 3. Profondeur et distribution

| Niveau | Pages | Commentaire |
|---|---|---|
| 1 (racine) | 1 | — |
| 2 | 11 | Hubs et pages transverses |
| 3 | 12 | Pages transactionnelles |
| 4 | ~144 | Articles sous `/actualites/` |

**Aucune page commerciale au-delà du niveau 3.** Toute page P0 est atteignable en **2 clics maximum** depuis l'accueil.

---

## 4. État actuel → cible

Le site actuel compte **160 URLs indexées** : 16 pages structurelles et ~144 articles.
Cartographie recoupée par le sitemap XML et par un `map` Firecrawl du 22/08/2026.

### Consolidations décidées

| Problème constaté | Pages actuelles | Cible |
|---|---|---|
| **Double page AG** — cannibalisation directe | `/fr/assemblee-generale` + `/fr/vote-ag` | `/solutions/vote-electronique-assemblee-generale` |
| **Double page CSE** — cannibalisation directe | `/fr/cse` + `/fr/vote-en-ligne-cse` | `/solutions/elections-cse` |
| **Double page licence** — cannibalisation directe | `/fr/licence-provote` + `/fr/licence-vote-en-ligne-provote` | `/offres/licence-annuelle-provote` |
| **Page orpheline** de typologie | `/fr/type-vote` | `/modes-de-vote` |
| **Page AG en réalité consacrée au boîtier** | `/fr/vote/vote-electronique-assemblees-generales` | `/modes-de-vote/vote-par-boitier` |

> **Trois doublons transactionnels** se cannibalisaient sur les trois requêtes les plus commerciales du site. C'est le principal gain SEO de la refonte, avant même toute création de contenu.

### Pages créées

`/solutions` · `/solutions/vote-conseil-administration` · `/solutions/consultations-referendums` · `/modes-de-vote` · `/modes-de-vote/vote-hybride` · `/provote` · `/provote/fonctionnalites` · `/offres/accompagnement-sur-mesure` · `/secteurs` · `/secteurs/entreprises-mutuelles` · `/demonstration` · `/faq` · `/accessibilite` · `/plan-du-site` · `/politique-confidentialite`

**15 pages nouvelles**, dont 6 en P0. Deux comblent des trous béants : `/demonstration` (aucune landing de conversion aujourd'hui) et `/modes-de-vote/vote-hybride` (l'hybride est un différenciant revendiqué, sans page dédiée).

---

## 5. Plan de redirections

### 5.1 Pages structurelles — 16 redirections

| Ancienne URL | Nouvelle URL | Type | Contrôle |
|---|---|---|---|
| `/fr/` | `/` | 301 | Signaux de la home |
| `/fr` | `/` | 301 | Variante sans slash |
| `/fr/assemblee-generale` | `/solutions/vote-electronique-assemblee-generale` | 301 | Page AG principale |
| `/fr/vote-ag` | `/solutions/vote-electronique-assemblee-generale` | 301 | **Corrige le fichier client**, qui l'envoyait vers `/secteurs/entreprises-mutuelles`. Le contenu et le title sont clairement AG — vérifier les backlinks avant bascule |
| `/fr/cse` | `/solutions/elections-cse` | 301 | Fusion |
| `/fr/vote-en-ligne-cse` | `/solutions/elections-cse` | 301 | Fusion |
| `/fr/vote-en-ligne` | `/modes-de-vote/vote-en-ligne` | 301 | Mode ≠ besoin |
| `/fr/vote-par-boitier` | `/modes-de-vote/vote-par-boitier` | 301 | — |
| `/fr/type-vote` | `/modes-de-vote` | 301 | **Absente du fichier client** |
| `/fr/licence-provote` | `/offres/licence-annuelle-provote` | 301 | — |
| `/fr/licence-vote-en-ligne-provote` | `/offres/licence-annuelle-provote` | 301 | **Absente du fichier client** |
| `/fr/associations-federations` | `/secteurs/associations-federations` | 301 | — |
| `/fr/fonctions-publiques` | `/secteurs/organismes-publics` | 301 | — |
| `/fr/qui-sommes-nous` | `/a-propos` | 301 | Autorité de marque |
| `/fr/nos-references` | `/references` | 301 | Backlinks |
| `/fr/actualites` | `/actualites` | 301 | — |
| `/fr/contact` | `/contact` | 301 | — |
| `/fr/mentions-legales` | `/mentions-legales` | 301 | — |
| `/fr/vote-electronique-ag-cadre-legal-obligations` | `/actualites/vote-electronique-ag-cadre-legal-obligations` | 301 | Article à la racine, mis à jour le 28/03/2026 — **absent du fichier client** |

### 5.2 Articles — ~144 redirections

**Règle générale** : `/fr/vote/<slug>` → `/actualites/<slug>`, slug conservé à l'identique.

Trois exceptions, où l'article est en réalité une page commerciale déguisée :

| Ancienne URL | Nouvelle URL | Raison |
|---|---|---|
| `/fr/vote/vote-electronique-assemblees-generales` | `/modes-de-vote/vote-par-boitier` | Contenu et meta description consacrés au boîtier |
| `/fr/vote/vote-par-boitier-pour-assemblee-generale-comment-cela-se-passe` | `/modes-de-vote/vote-par-boitier` | Décrit la prestation boîtier, pas un sujet éditorial |
| `/fr/vote/comment-choisir-mon-prestataire-de-vote-electronique-pour-une-assemblee-generale` | `/offres/accompagnement-sur-mesure` | Intention « choisir un prestataire » = transactionnelle |

### 5.3 Fichiers PDF indexés

`/files/provote-by-mediavote-ag_*.pdf` est **indexé par les moteurs**. À conserver à l'identique ou à rediriger vers `/provote`. À arbitrer : ces PDF portent des mentions listées en 🔴 dans `CONTENT-VALIDATION.md` (NF 552, CNIL 2019). **Recommandation : les dépublier ou les remplacer par des versions corrigées.**

### 5.4 Règles techniques

- **`http://` → `https://`** systématique. Le sitemap actuel et les canoniques déclarent `http` : c'est une perte de signal et un risque de contenu dupliqué.
- **`media-vote.com` → `www.media-vote.com`** (ou l'inverse), une seule forme canonique.
- Suppression du préfixe `/fr/` — site monolingue (H6). Si une version anglaise est envisagée, elle prendra `/en/` sans réintroduire `/fr/`.
- **Aucune redirection massive vers la home.** Une URL sans équivalent va vers son hub thématique.
- Suppression des slashes finaux, redirection 301 des variantes.
- Chaînes de redirection interdites : toute ancienne URL pointe **directement** vers sa cible finale.

### 5.5 Avant la bascule — obligatoire

1. Crawl exhaustif du site actuel (Firecrawl ou Screaming Frog) et gel de la liste.
2. Export Search Console 12 mois : URLs, clics, impressions, positions — **Q-C8, bloquante**.
3. Export des backlinks. Toute URL recevant un lien externe doit conserver une cible.
4. Table de correspondance complète, une ligne par URL, **validée avant mise en ligne**.
5. Test automatisé des 160 redirections : code 301, cible atteinte, absence de chaîne.
6. Conservation du `.htaccess` de redirections **au minimum 12 mois**.

> **Sans l'export Search Console, ~144 URLs seraient redirigées à l'aveugle.** C'est le principal risque de la migration.

---

## 6. Indexation

| Pages | Indexation | Canonique |
|---|---|---|
| Toutes les pages commerciales et éditoriales | `index, follow` | Auto-référente |
| `/mentions-legales`, `/politique-confidentialite`, `/accessibilite` | `index, follow` | Auto-référente |
| `/plan-du-site` | `index, follow` | Auto-référente |
| Pages de confirmation de formulaire | `noindex, follow` | — |
| Pagination `/actualites/page/N` | `index, follow` | Auto-référente |

**Pages légales indexées** : elles portent des signaux de confiance et sont consultées en due diligence. Le `noindex` évoqué dans le fichier client n'apporte rien.

### `robots.txt` cible

```
User-agent: *
Allow: /
Disallow: /merci/

Sitemap: https://www.media-vote.com/sitemap.xml
```

### `sitemap.xml`

Généré à la construction, en **`https://`**, avec `lastmod` réel par page. Deux fichiers si le volume le justifie : pages et articles.

---

## 7. Extensibilité

L'architecture accueille sans refonte :

| Évolution | Emplacement prévu |
|---|---|
| Page produit boîtier *(si D3 évolue)* | `/offres/boitiers-de-vote` |
| Nouveaux secteurs | `/secteurs/<slug>` |
| Nouveaux types de scrutins | `/solutions/<slug>` |
| Cas clients détaillés | `/references/<slug>` |
| Guides et livres blancs | `/ressources/<slug>` |
| Version anglaise | `/en/` + `hreflang` |
| Pages locales | `/vote-electronique-<ville>` — *déconseillé sans implantation réelle* |

---

## 8. Ce que l'architecture refuse volontairement

- **Pas de page par croisement besoin × secteur** (« AG pour association », « AG pour mutuelle »). C'est le piège classique : des dizaines de pages faibles et redondantes qui se cannibalisent. Le croisement se traite dans le corps des pages secteur et par le maillage.
- **Pas de page par ville.** Sans implantation réelle, c'est du contenu artificiel.
- **Pas de page « vote électronique »** générique en plus de la home. Elle cannibaliserait l'accueil.
- **Pas de page « prix »**, conformément à D4.
- **Pas de hub `/offres`** — deux offres ne le justifient pas.
