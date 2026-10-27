# PLAN V2 — Intégration des retours « To Do » et du tunnel de qualification

Document de validation. **Aucune modification du site n'a été faite à ce stade.**
Sauvegarde de la version actuelle : `_backup/site-v1-2026-09-27/` (+ archive `.tar.gz`).

Sources analysées pour ce plan :

| Fichier | Nature |
|---|---|
| `assets/a-integrer/05_divers/to_do.pdf` | Retours structurés (graphique/UX, commercial, dev/SEO) |
| `assets/a-integrer/05_divers/quiz_entree_tunnel_lead.png` | Maquette du configurateur |
| `01_website/03_arborescence/02/Quiz entrée.png` | Même maquette (doublon) |
| `01_website/03_arborescence/02/retour_quizz.pages` | Spécification fonctionnelle du configurateur |
| `01_website/03_arborescence/02/MediaVote_Arbo.png` | **Nouvelle arborescence proposée** |
| `01_website/03_arborescence/02/questions.pdf` | Questions ouvertes côté client |
| `assets/a-integrer/04_logo-mediavote/CERTIFICATION Afnor…pdf` | Certificat NF 552 (expiré 20/05/2023) |
| `01_website/01_brief/visuelsetplaquette…/AG_Exemples et paramétrages_Mediavote.pdf` | Argumentaire + paramétrages boîtiers |
| `01_website/01_brief/Images ProVote AG/` (11 visuels) | Mockups produit ProVote |
| `01_website/01_brief/visuelsetplaquette…/` (7 visuels) | Rendus boîtier HF + bandeaux |
| `assets/a-integrer/03_logos-clients/Licence ProVote/` (22 logos) | Logos clients |
| `01_website/04_youtube/*.webloc` | 1 seule vidéo YouTube |

---

## 1. Retours identifiés

### 1.1 Graphique et UX
- Interface accessible à **tous les publics**, y compris des utilisateurs peu à l'aise
  avec le numérique, sans perdre en crédibilité ni en expertise.

### 1.2 Positionnement commercial
- **Présenter les deux offres à parité** : boîtiers de vote **et** plateforme ProVote®.
  Aujourd'hui le site met ProVote® très en avant et traite le boîtier comme une modalité.
- **Orienter chaque visiteur** vers la solution correspondant à son organisation et à sa
  modalité (présentiel / distanciel / hybride).
- **Créer le tunnel de lead à partir de `quiz_entree_tunnel_lead.png`**, terminé par un CTA
  et le formulaire de prise de contact.
- Enrichir les pages de contexte (AG, CA, CSE, référendums) : contenus explicatifs et
  comparatifs visuels.
- Mettre en avant les différenciateurs : **depuis 1998**, proximité de l'équipe,
  accompagnement humain, sécurité, références clients.
- La demande de démonstration reste l'objectif de conversion principal.

### 1.3 Développement, SEO, technique
- Bonnes pratiques SEO, performance mobile, **sécurisation des formulaires (captcha)**.
- Intégrer les **logos clients**, mais les **classer et organiser bien plus élégamment**.
- Intégrer les **deux vidéos YouTube** (ProVote AG / Boîtiers de vote pour AG)
  aux bons endroits.
- **Ne pas utiliser toutes les photos** fournies — seulement les plus pertinentes.
- Certifications et conformité : **RGPD, AFNOR, signature électronique européenne**
  doivent apparaître. Pour l'AFNOR : *« mettre l'info sans mettre le document »*.
- **Créer une page « Qui sommes-nous »** inspirée et améliorée de
  `media-vote.com/fr/qui-sommes-nous`, avec un bloc sur **Fanny Damon** et
  **Jean-Pierre Leclercq**.

### 1.4 Général
- **AG + CA regroupées** ; les autres types de vote peuvent avoir des pages dédiées.
- Pour chaque type de vote : **ProVote® pour le distanciel, boîtier pour le présentiel**.
- CTA principaux : **Démonstration + Prise de contact**.
- Ajouter la **signature électronique européenne**.
- **« Concept boîtier intégré pour l'achat de boîtiers »**.
- **« Voyons ProVote » : à revoir et améliorer.**

### 1.5 Spécification du configurateur (`retour_quizz`)
Mini-configurateur **en haut de la page d'accueil**, 4 questions en menus déroulants :

1. **Quel vote ?** AG / CA / CSE / Référendum-consultation / Autre élection / Autre vote
2. **Comment voter ?** Présentiel / Hybride / À distance / Je ne sais pas encore
3. **Quelle organisation ?** Entreprise / Association / Fédération / Administration /
   Coopérative / Syndicat / Ordre professionnel / Autre
4. **Combien de votants ?** < 50 / 50-149 / 150-299 / 300-499 / 500-999 / 1 000+

Recommandation affichée **dynamiquement, sans rechargement**. Exemples de règles donnés :

| Combinaison | Résultat attendu |
|---|---|
| AG + Hybride + Entreprise + 200 votants | ProVote® + fonctionnalités AG (pouvoirs, quorum, pondération, émargement, résolutions, résultats) |
| AG + Présentiel + Association + 100 votants | ProVote® **ou** boîtiers HF, avec comparaison |
| CSE | **ProVote® uniquement** — les boîtiers HF ne sont pas proposés pour le CSE |

> « Il ne s'agit **pas d'un simple formulaire de contact**. C'est un **outil d'orientation** :
> besoin utilisateur → règles de correspondance → solution(s) recommandée(s) → page
> correspondante. Les combinaisons et règles doivent idéalement être **administrables**. »

---

## 2. Évolutions prévues

### A. Tunnel de qualification — le cœur du chantier

| # | Évolution |
|---|---|
| A1 | Nouveau composant **configurateur**, placé juste sous le hero de l'accueil |
| A2 | Page dédiée **`/trouver-ma-solution/`** (même composant, pleine page) — cible SEO « quelle solution de vote choisir » et destination des campagnes |
| A3 | Moteur de règles externalisé dans **`content/configurateur.json`** : types de vote, modalités, organisations, tranches de votants, et table de correspondance. Modifiable sans toucher au code — et administrable plus tard par le même CMS |
| A4 | Panneau de résultat en deux colonnes, comme la maquette : **« Votre besoin »** (récapitulatif) / **« La solution adaptée »** (recommandation principale + solution alternative) |
| A5 | Liste des **fonctionnalités pertinentes** selon le type de scrutin, alimentée par le même JSON |
| A6 | Bouton **« Comparer les deux solutions »** → nouveau comparatif ProVote® / boîtiers HF |
| A7 | Fin de tunnel : **CTA « Demander une démonstration » + formulaire de contact pré-rempli** avec les 4 réponses (champs cachés + récapitulatif visible), pour que le lead arrive qualifié |
| A8 | **État du configurateur dans l'URL** (`#ag-hybride-entreprise-150`) : résultat partageable, reproductible par le commercial, et mesurable |
| A9 | **Sans JavaScript** : les 4 `<select>` restent des `<select>` natifs dans un `<form>` ; à défaut de JS, affichage d'un tableau de correspondance statique + lien contact. Aucun écran vide |
| A10 | **Accessibilité** : `<fieldset>/<legend>`, libellés liés, navigation clavier complète, résultat annoncé en `aria-live`, focus déplacé sur le résultat, respect de `prefers-reduced-motion` |
| A11 | Bandeau de réassurance sous le configurateur (4 à 5 items) — **formulations à reprendre**, voir §3 |

### B. Rééquilibrage boîtiers / ProVote

| # | Évolution |
|---|---|
| B1 | Accueil : bloc **« Deux solutions, un même accompagnement »** présentant ProVote® et les boîtiers HF à parité |
| B2 | Refonte et enrichissement de **`/modes-de-vote/vote-par-boitier/`** avec le contenu de `AG_Exemples et paramétrages` : paramétrage du calcul (majorité simple, renforcée, personnalisée), pondération, votes anonymes ou nominatifs, chrono, graphes, affichage en % ou en nombre, charte aux couleurs du client, PV automatisé, fonctionnement en onde radio sans dépendance Internet |
| B3 | Nouvelle page **`/comparer-provote-et-boitiers/`** : tableau comparatif honnête (contexte, réseau, logistique, taille, budget indicatif), avec la ligne **CSE = ProVote® uniquement** |
| B4 | Navigation : le boîtier remonte d'un cran, au même niveau que ProVote® |
| B5 | **« Concept boîtier intégré pour l'achat de boîtiers »** → en attente de définition (voir §3, point 6) |

### C. Contenu et pages

| # | Évolution |
|---|---|
| C1 | Nouvelle page **`/qui-sommes-nous/`** — histoire depuis 1998, équipe, méthode, avec bloc **Fanny Damon** et **Jean-Pierre Leclercq**. La page `/a-propos/` actuelle est fusionnée dedans et redirigée (301) pour ne pas cannibaliser |
| C2 | Enrichissement AG, CA, CSE, référendums : ce qui change pour chaque instance, ce que disent les statuts, le déroulé, les pièges |
| C3 | **Regroupement AG + CA** conformément au To Do (voir §3, point 2 : impact SEO à arbitrer) |
| C4 | Refonte du bandeau CTA de bas de page — **« Voyons ProVote® » à revoir** : proposition d'un bandeau plus direct, orienté preuve (« Voyez ProVote® sur votre propre ordre du jour ») |
| C5 | Mur de logos clients repensé : **classement par secteur** (chambres consulaires, santé, public/environnement, entreprises, fédérations et ordres), niveaux de gris au repos, couleur au survol, hauteur optique normalisée |

### D. Preuves, conformité, certifications

| # | Évolution |
|---|---|
| D1 | Mention **NF 552 / AFNOR** sans publier le document, avec une formulation exacte (voir §3, point 1) |
| D2 | Bloc **RGPD** : hébergement, durées de conservation, DPO — reste conditionné à Q-B5 |
| D3 | **Signature électronique européenne (eIDAS)** — à ajouter, mais le niveau et le prestataire doivent être précisés (voir §3, point 5) |
| D4 | Le visuel fourni portant le **logo CNIL** ne sera pas utilisé en l'état (voir §3, point 3) |

### E. Visuels et vidéo

| # | Évolution |
|---|---|
| E1 | Sélection de **7 visuels sur 18**, encodés en AVIF/WebP/JPEG sur 4 largeurs par `tools/images.js` |
| E2 | Intégration de la vidéo YouTube en **façade** : vignette locale + lecture au clic, donc **aucun script ni cookie YouTube avant action du visiteur**. Zéro impact sur le chargement initial |
| E3 | Mur de logos : intégration **conditionnée aux autorisations écrites** (voir §3, point 4) |

**Sélection de visuels proposée** (numérotation de la planche contact) :

| N° | Fichier | Emploi |
|---|---|---|
| 03 | `Images ProVote AG/…13_14_55.png` | Mobile, avec compteurs de participation — accueil / ProVote® |
| 07 | `Images ProVote AG/…13_32_45.png` | Desktop, gestion des pouvoirs — page fonctionnalités |
| 06 | `Images ProVote AG/…13_32_08.png` | Tablette verticale, pouvoirs — page AG |
| 14 | `visuelsetplaquette…/BOITIER 123.png` | Boîtier détouré, face — fiche produit boîtier |
| 13 | `visuelsetplaquette…/4_BOITIER 123_Seul.png` | Boîtier en main, fond dégradé — hero boîtier |
| 16 | `…/ChatGPT Image 21 mai 2026, 10_59_11.png` | Boîtier en main, fond clair — comparatif |
| 09 | `…/ChatGPT Image 4 sept. 2026, 13_42_43.png` | Bandeau Accessibilité / Simplicité / Fiabilité — **à reconstruire en HTML** plutôt qu'en image (texte non sélectionnable, non traduisible, non accessible, et illisible sur mobile) |

Écartés : les doublons de mockups (01, 02, 04, 05, 08, 11), le bandeau au logo CNIL (10), les variantes de boîtier redondantes (12, 15, 17, 18).

### F. Formulaires et sécurité

| # | Évolution |
|---|---|
| F1 | **Piège à robots sans service tiers** sur tous les formulaires : champ leurre invisible + horodatage d'ouverture + limitation de cadence. Coût 0 €, aucun cookie, aucun appel externe, aucune gêne pour le visiteur ni pour les lecteurs d'écran |
| F2 | **Captcha optionnel** : Cloudflare Turnstile, gratuit, sans cookie de suivi, moins intrusif que reCAPTCHA. À activer si F1 ne suffit pas — l'ajout se fait en une ligne |
| F3 | Rappel : **la destination d'envoi des formulaires reste non tranchée (Q-B8)**. Tant qu'elle ne l'est pas, l'interface est construite et validée mais **aucun envoi n'est simulé** |

### G. Qualité — inchangé et re-vérifié

SEO (un intent = une page, balisage, `sitemap.xml`), performance (budget de poids par page,
images responsives, zéro dépendance externe), responsive de 320 px à 2560 px,
RGAA/WCAG 2.2 AA, contrôles de build bloquants (phrases interdites, H1 unique, alt,
liens morts). Le configurateur passe les mêmes portes.

---

## 3. Points nécessitant un arbitrage avant intégration

### 1. Certificat AFNOR — formulation
Le document fourni est **le certificat n° 552/0003-1, délivré le 20/05/2022 et valable
jusqu'au 20/05/2023** : il est expiré depuis plus de trois ans. Son périmètre est le
référentiel **« NF Logiciel — Protection des données personnelles » (NF 552)**, associé à
l'ISO/CEI 25051, et porte sur **« PROVOTE, version 1 »**. Ce référentiel certifie la
protection des données personnelles, **pas la sécurité du scrutin**.

Trois formulations possibles, par ordre de prudence :

- **(a) — si le certificat a été renouvelé** :
  « ProVote® est certifié NF Logiciel — Protection des données personnelles (NF 552),
  référentiel AFNOR Certification portant sur la protection des données personnelles. »
- **(b) — s'il n'a pas été renouvelé, mention historique assumée** :
  « ProVote® a obtenu en 2022 la certification NF Logiciel — Protection des données
  personnelles (NF 552) délivrée par AFNOR Certification. »
- **(c) — s'il n'a pas été renouvelé et qu'on ne veut pas dater** : ne rien écrire.

**Je ne peux pas écrire (a) sans preuve d'un certificat en cours de validité** (Q-B3).
Par défaut, je partirai sur **(b)**, qui est exacte et vérifiable. Dites-moi si vous préférez
autre chose.

### 2. Nouvelle arborescence
`MediaVote_Arbo.png` propose une structure en **5 rubriques** — Vos votes / Nos solutions /
MediaVote / Ressources / Contact-Devis — différente de l'arborescence actuelle du site, que
vous m'aviez demandé de conserver à l'identique.

Ma recommandation : **adopter les intitulés et le regroupement du menu**, mais **conserver
les URL existantes**. On gagne la lisibilité du nouveau schéma sans repartir de zéro sur le
référencement ni sur le plan de redirections. Concrètement, le menu devient :

| Rubrique du schéma | Contenu, URL conservées |
|---|---|
| 1. Vos votes | `/solutions/…` (AG, CA, CSE, référendums, autres) |
| 2. Nos solutions | `/provote/`, `/modes-de-vote/vote-par-boitier/`, `/comparer-provote-et-boitiers/` |
| 3. MediaVote | `/qui-sommes-nous/`, `/references/`, `/securite-conformite/` |
| 4. Ressources | `/actualites/`, `/faq/`, cas clients, guides |
| 5. Contact / Devis | `/contact/`, `/demonstration/` |

Deux différences à trancher : le schéma fait apparaître **« Cas clients »** et
**« Guides & documents »**, qui n'existent pas aujourd'hui — les crée-t-on, et avec quel
contenu réel ? Il affiche aussi un téléphone **01 75 85 53 65** et un e-mail **info@mediavote.com**,
alors que le site utilise **01 47 08 55 13** et **contact@media-vote.com**. Attention au
domaine : `mediavote.com` (sans tiret) n'est pas `media-vote.com`. Lesquelles sont justes ?

### 3. Logo CNIL sur un visuel fourni
Le bandeau `…13_47_30.png` intègre **le logo de la CNIL** dans une carte « RGPD ».
Afficher ce logo laisse entendre une approbation de l'autorité, ce qui va plus loin encore
que la mention « certifié CNIL » que vous m'avez interdit d'écrire. **Je ne l'intégrerai
pas.** Je propose de reconstruire ce bandeau en HTML, sans le logo, avec les trois mêmes
colonnes (Sécurité / Capacité / RGPD).

Ce même visuel affiche « **délai inférieur à 3 secondes pour 10 000 votants** » : c'est une
performance chiffrée, publiable seulement si elle est mesurée et documentée (Q-B2).

### 4. Logos clients — autorisations
22 logos ont été déposés dans un dossier nommé « Licence ProVote », **sans le fichier
`autorisations.txt`** demandé. Je ne publierai aucun logo client sans la liste écrite des
organisations qui ont donné leur accord. Je prépare le composant « mur de logos » et je
l'alimente dès réception. En attendant, le repli anonymisé actuel reste en place.

### 5. Signature électronique européenne
Le To Do demande de l'ajouter, mais trois informations manquent : le **niveau** (simple,
avancée, ou qualifiée au sens eIDAS), le **prestataire de service de confiance** utilisé, et
**à quelle étape** elle intervient (émargement ? procès-verbal ?). Ces trois éléments
changent complètement ce qu'on a le droit d'écrire. Sans eux, je ne peux formuler qu'une
phrase générique, ce qui affaiblirait la page plutôt que de la renforcer.

### 6. « Concept boîtier intégré pour l'achat de boîtiers »
Formulation ambiguë dans le To Do. Trois lectures possibles : (i) vendre les boîtiers en
plus de la location, (ii) un module d'achat en ligne, (iii) une offre « boîtiers + licence ».
La lecture (ii) sortirait du périmètre défini — le site est vitrine, **sans paiement en
ligne**. Merci de préciser.

### 7. Vidéos
Le To Do mentionne **deux** vidéos (ProVote AG et Boîtiers de vote pour AG). **Une seule**
URL a été fournie : `youtube.com/watch?v=LYcZGKb4SE0`. Il me manque la seconde.

### 8. Formulations du bandeau de réassurance de la maquette
La maquette du configurateur contient trois formulations que je ne peux pas reprendre telles
quelles, au regard des règles que vous avez fixées :

| Maquette | Problème | Proposition |
|---|---|---|
| « 100 % sécurisée et conforme » | « 100 % sécurisé » fait partie des formulations explicitement interdites | « Sécurisé et conforme au RGPD » |
| « Résultats fiables et incontestables » | « Incontestables » est une promesse juridique intenable | « Résultats traçables et vérifiables » |
| « Adopté par des centaines d'organisations depuis plus de 20 ans » | Le chiffre n'est pas établi (Q-B1) ; « depuis 1998 » est en revanche vérifié et plus fort | « Au service des organisations depuis 1998 » |
| « Données hébergées en France sur des serveurs sécurisés » | Hébergement non confirmé (Q-B5) | À rétablir dès confirmation ; retiré d'ici là |


---

## 4. Actualités administrables — recommandation CMS

### 4.1 Contraintes de départ
- Le site est **100 % statique** : générateur Node sans dépendance (`build.js`), sortie HTML
  dans `dist/`, aucune base de données, aucun serveur applicatif.
- Le brief exclut tout back-end inventé et toute surface d'attaque inutile.
- Besoin exprimé : **créer, modifier, prévisualiser, publier** sans toucher au code.
- Les rédacteurs ne sont pas techniques.

### 4.2 Recommandation : un CMS « Git » — **Decap CMS**
Un CMS Git n'ajoute **aucun serveur** : c'est une interface d'édition (une page `/admin/`)
qui écrit les articles sous forme de fichiers texte dans le dépôt du site. Chaque
publication déclenche une reconstruction automatique du site statique. Le site public
reste exactement aussi rapide et aussi sûr qu'aujourd'hui.

J'ai retenu **Decap CMS** (ex-Netlify CMS, open source, maintenu dans l'UE) plutôt que son
successeur **Sveltia CMS**, plus moderne, pour une seule raison : Decap propose
**aujourd'hui** le circuit **brouillon → relecture → publication**, alors que Sveltia le
documente encore comme à venir. Les deux utilisent le même format de configuration :
basculer de l'un à l'autre plus tard est une opération de quelques minutes.

### 4.3 Fonctionnement pour le rédacteur
1. Il ouvre `www.media-vote.com/admin/` et se connecte.
2. **Actualités → Nouvel article** : titre, date, catégorie, image, chapô, corps de texte
   (éditeur riche : intertitres, listes, liens, citations), titre et description pour
   Google avec **compteur de caractères**.
3. **Aperçu en direct** à droite de l'écran, rendu avec les vraies feuilles de style du site.
4. **Enregistrer** → l'article est en **brouillon**, invisible du public.
   **Publier** → le site se reconstruit et l'article est en ligne en une à deux minutes.
5. Modifier ou dépublier suit le même chemin. **Tout est historisé** : n'importe quelle
   version antérieure peut être restaurée.

**Garde-fou éditorial** : la reconstruction exécute les contrôles de qualité du site
(formulations interdites comme « certifié CNIL » ou « 100 % sécurisé », texte alternatif
des images, titre unique). Si un article les enfreint, **il n'est pas publié** et le site
reste sur sa version précédente. Le rédacteur est prévenu par e-mail de l'échec ; le message
d'erreur, rédigé en français clair, cite la phrase en cause.

### 4.4 Architecture et coûts

| Brique | Rôle | Coût |
|---|---|---|
| Decap CMS | Interface d'édition `/admin/` | **0 €** — open source (licence MIT) |
| GitHub, dépôt privé | Stockage des articles et de l'historique | **0 €** |
| Cloudflare Pages | Reconstruction et hébergement du site | **0 €** — offre gratuite, 500 constructions par mois, bande passante non plafonnée |
| Cloudflare Worker | Connexion sécurisée des rédacteurs à GitHub | **0 €** — offre gratuite |
| Nom de domaine | Déjà détenu par Media Vote | inchangé |
| **Total récurrent** | | **0 € / mois** |
| Mise en place | Configuration, gabarit d'aperçu, contrôles, documentation rédacteur | **1 à 1,5 jour** de travail, réalisé dans le cadre de ce chantier |

Les offres gratuites citées sont celles publiées par les éditeurs ; **elles sont à
reconfirmer au moment de la mise en production**, les éditeurs pouvant les modifier.

**Contrepartie à connaître** : chaque rédacteur doit disposer d'un **compte GitHub**
(gratuit, créé une fois). C'est la seule friction de cette solution. Il ne verra jamais de
code — seulement l'interface d'édition.

**Données** : le dépôt (GitHub) et l'hébergement (Cloudflare) relèvent de sociétés
américaines. Les articles sont des contenus publics, sans donnée personnelle ; ce point ne
concerne pas ProVote®, dont l'hébergement est distinct.

### 4.5 Alternatives étudiées et écartées

| Solution | Pourquoi je ne la recommande pas en premier |
|---|---|
| **WordPress** (classique ou « headless ») | Réintroduit un serveur PHP et une base de données à maintenir, mettre à jour et protéger. Contraire au brief, et première cible des attaques automatisées |
| **Sanity, Prismic, Storyblok** (CMS hébergés) | Excellente ergonomie et **connexion par simple e-mail**, sans compte GitHub. Mais le contenu vit chez un tiers, et l'on passe à une offre payante dès quelques rédacteurs. **C'est le bon choix si le compte GitHub est rédhibitoire pour vos rédacteurs** — dites-le-moi et je chiffre cette option précisément |
| **Sveltia CMS** | Techniquement supérieur à Decap ; écarté pour l'instant uniquement faute de circuit brouillon/relecture. Bascule possible plus tard sans refonte |

### 4.6 Ce que le même outil permettra ensuite, sans surcoût
- **Rendre administrables les règles du configurateur** (`content/configurateur.json`) —
  réponse directe à la demande de `retour_quizz`.
- Gérer les **cas clients** et la **FAQ** si vous les ouvrez à l'édition.
- **Importer les 144 articles existants** (`/fr/vote/…`) : chantier distinct, à cadrer.

### 4.7 Préalables à l'intégration
1. **Votre validation** de la solution.
2. Un **compte GitHub** au nom de Media Vote, propriétaire du dépôt.
3. Savoir **où le site sera hébergé en production** : si Media Vote tient à son hébergeur
   actuel, la reconstruction peut y déposer le site automatiquement, sans Cloudflare Pages.

---

## 5. Ordre d'exécution proposé

1. Configurateur + moteur de règles + formulaire pré-rempli (A)
2. Rééquilibrage boîtiers / ProVote® et comparatif (B)
3. Page Qui sommes-nous, enrichissement des pages de contexte, bandeau CTA (C)
4. Visuels, vidéo en façade, protection anti-robots des formulaires (E, F)
5. Mentions de conformité, selon vos arbitrages (D)
6. CMS Actualités — **uniquement après votre validation du §4**
7. Recette complète : 3 largeurs, clavier, sans JavaScript, poids des pages, contrôles de build

---

## 6. Arbitrages reçus — 27/09/2026

| Point | Décision d'Alexis | Conséquence |
|---|---|---|
| 1. AFNOR | **OK formulation (b)** | « ProVote® a obtenu en 2022 la certification NF Logiciel — Protection des données personnelles (NF 552) délivrée par AFNOR Certification. » Document non publié |
| 2. Visuel au logo CNIL | **Ne pas refaire** | Visuel écarté, non reconstruit |
| 3. Arborescence | **Conserver l'arborescence actuelle** ; `MediaVote_Arbo.png` était une première proposition. **Pas de « Cas clients » ni de « Guides »** | URL et menu actuels conservés ; ajouts limités à `/qui-sommes-nous/`, `/trouver-ma-solution/`, `/comparer-provote-et-boitiers/` |
| 4. Coordonnées | **Suivre celles du site** | 01 47 08 55 13 · contact@media-vote.com |
| 5. Logos clients | **Afficher les logos** | Autorisation de publication donnée par Alexis ; tracée dans `CONTENT-VALIDATION.md` |
| 6. Seconde vidéo | **Fournie** | `VRgyj2rw4GY` — « AG Votes électroniques MEDIAVOTE ». Publiée sur la chaîne personnelle « Fanny Nomad », pas sur la chaîne MEDIAVOTE : si ce compte la retire, l'intégration cesse de fonctionner. À republier idéalement sur la chaîne officielle |
| 7. Signature électronique européenne | **Pas encore connu** | Rien n'est écrit sur ce sujet d'ici là |
| 8. Achat de boîtiers | **Pas pour l'instant** | Non traité |
| 9. Formulations de la maquette | **OK** | Reformulations du §3.8 appliquées |
| CMS | **Question : créer notre propre CMS sous `/admin` ?** | En attente de décision — voir la réponse en conversation |

---

## 7. Réalisé — 27/09/2026

Écarts avec le plan du §2, décidés pour respecter l'arbitrage n° 3 (arborescence conservée) :

- **Aucune nouvelle URL.** Le configurateur est sur l'accueil et sur `/modes-de-vote/` (au lieu de
  `/trouver-ma-solution/`) ; le comparatif est sur `/modes-de-vote/#comparatif` (au lieu de
  `/comparer-provote-et-boitiers/`) ; « Qui sommes-nous » remplace le contenu de `/a-propos/`,
  dont le libellé de menu devient « Qui sommes-nous ».
- **AG et CA restent deux pages**, reliées l'une à l'autre.
- **Visuels retenus** (5, au lieu de 7) : `provote-mobile` (n° 04, détouré), `provote-tablette` (n° 08, détouré),
  `provote-mobile-scene` (n° 03), `provote-pouvoirs-paysage` (n° 07), `boitier-main` (n° 14, détouré).
  Écartés : les rendus de boîtier n° 13 et n° 16, dont le fond « transparent » est un damier incrusté
  dans l'image, les doublons, et les trois bandeaux texte.
- **Règle hybride** : ProVote® recommandé, boîtiers en alternative pour la salle — conforme à la maquette
  du configurateur et au contenu existant du site.

| Élément | Où |
|---|---|
| Configurateur (4 questions, règles en JSON, résultat sans rechargement, lien partageable, formulaire de fin) | Accueil, `/modes-de-vote/` — `src/data/configurateur.json`, `src/components/media.js`, `scripts/main.js` |
| Deux solutions à parité | Accueil (bloc « Deux solutions, un même accompagnement ») |
| Comparatif ProVote® / boîtiers + « Quelle solution pour quel vote ? » | `/modes-de-vote/#comparatif` |
| Bloc « Quelle solution pour ce scrutin ? » | AG, CA, CSE (ProVote® seul), consultations |
| Page boîtier enrichie (plaquette AG) + vidéo | `/modes-de-vote/vote-par-boitier/` |
| Vidéos en façade (aucun cookie avant le clic) | AG (les deux), ProVote® (ProVote), boîtier (boîtiers) |
| Écrans ProVote® réels à la place des emplacements vides | Accueil, AG (pouvoirs), hero des pages offre |
| Qui sommes-nous (histoire, clients, équipe avec portraits, valeurs) | `/a-propos/` |
| Logos clients classés en 4 familles | `/references/` (complet), accueil et Qui sommes-nous (sélection de 12) |
| Mention AFNOR et bloc RGPD | Accueil (sécurité), `/securite-conformite/` |
| Protection anti-robots, champs communs, pré-remplissage | Tous les formulaires — `docs/FORMULAIRES.md` |
| Bandeau de pied de page « Voyez ProVote® » réécrit | Toutes les pages : « Parlons de votre prochain scrutin » |

Recette : `qa/v2-interactions.mjs` (32/32) et `qa/v2-audit.mjs` (32 pages × 3 largeurs, 0 problème).
Sauvegarde de la version précédente : `_backup/site-v1-2026-09-27/`.

---

## 8. Révision design — 27/09/2026 (soir)

Suite aux captures de `assets/a-integrer/06_debrief/01_screenshot/` :

| Défaut signalé ou constaté | Correction |
|---|---|
| Image du hero d'accueil arrêtée à mi-hauteur | L'image du `<picture>` n'était pas dimensionnée : elle couvre désormais toute la plaque (`object-fit: cover`) |
| Bouton noir et bouton illisible sur fond sombre (bandeau AG) | Système de boutons piloté par le contexte : bleu sur fond clair, blanc sur fond sombre. Plus aucun bouton noir |
| Bouton blanc sur blanc dans le pied de page | Même correction (la règle des liens du pied de page l'emportait) |
| Quiz lourd et désaligné | Refonte : un panneau, 4 colonnes de hauteur de tête identique, segments de progression, coche sur le choix retenu, pied de panneau (compteur, réinitialisation, bouton). Grille 2×2 de 768 à 1199 px, accordéon sous 768 px |
| Logo peu lisible au chargement | Logo blanc officiel (`logo_OK_white.ai`) sur tous les fonds sombres : rideau de chargement, header, menu mobile, pied de page. Logotype recadré : 24 px de haut au lieu de 12 px visibles |
| **Constaté en revue** : bande blanche en haut des 31 pages intérieures (logo et menu invisibles, fil d'Ariane masqué) | Le fil d'Ariane est placé dans le hero, en blanc |
| 14 emplacements vides | Remplacés par des écrans ProVote®, des photos de salle, un schéma de la clé fragmentée et les logos du secteur |
| Visuels flottants | Détourés ancrés au bord bas de leur bloc ; captures opaques bord à bord |
| Retour en haut | Bouton fixe en bas à droite, visible après 1,5 écran, souris et clavier |

Autres corrections de la revue : pied de page à 5 colonnes alignées, titres mobiles réduits
(« accompagnement » débordait), liste numérotée pleine largeur sur mobile, flèches des liens
attachées au dernier mot, heros étroits alignés à gauche, formulaires alignés en haut, blocs
sombres consécutifs sur la page CSE, schéma lisible sur mobile, boutons des cartes étroites.

Contrôles : `qa/v2-design.mjs` (contraste calculé de chaque bouton et lien, boutons noirs,
images, logo, débordement — 32 pages × 2 largeurs), `qa/v2-audit.mjs`, `qa/v2-interactions.mjs`.

---

## 9. Débrief Mediavote du 09/10/2026 — intégré le 24/10/2026

Sources : `01_website/05_debrief_mediavote/01/debrief_mediavote.pdf`, `V01_Recettage site Mediavote.pptx`
(23 diapositives), 9 médias. Sauvegarde préalable : `_backup/site-v2-2026-10-24/`.
Aperçu local : http://localhost:4400/ (configuration `media-vote-v3`). Non publié sur GitHub, en attente de validation.

| Demande | Réalisé |
|---|---|
| Vocabulaire juridique | Textes fournis intégrés tels quels (participation, émargement, formats d'AG, démonstration, contact, pied de page). Formulations familières reprises ailleurs : « pas de la mode », « honnêtement », « plaquette », « quand il le peut », « Prenez la main », « ne remplissez pas un ticket », « le jour où cela compte », « fait le plus progresser » |
| Médias du recettage | Émargement AG : fenêtre de signature sur liste de présence + rapport d'émargement signé. Quorum : signature sur smartphone. Résultats : tableau « quorum atteint ». Accès Pilotage (/provote/) et bloc ProVote® de l'accueil : tableau de bord AG. Achat de boîtiers : remise boîtier + signature tablette, rapport statistique |
| Mégabannière | Pictogramme `3_Logo_Mediavote` à la place du boîtier dans la carte « 1998 » |
| Page d'achat de boîtiers | `/offres/achat-boitiers-de-vote/` — texte fourni, formation-action 3 h 30, FAQ, devis. Menu « Modes de vote », pied de page, plan du site. Renvois depuis la licence (« l'autre voie vers l'autonomie »), le bandeau licence de l'accueil et la page boîtier (section « prestation ou acquisition ») |
| Logo | Header 2 rem (au lieu de 1,5), pied de page 2,1 rem, rideau de chargement 4,25 rem |
| Puces | 118 puces sans ponctuation finale, majuscule initiale (toutes pages) |
| Téléphone | 01 85 09 27 45 partout (texte, lien tel:, données structurées) |
| Marque | « Media Vote » → « Mediavote » (153 occurrences), logo et données structurées compris |
| Sécurité / RGPD | Une mention par page hors boîtiers (21 pages), formulations fournies, certification NF 552 toujours datée 2022 |
| Cookies | Bandeau discret en bas à gauche, non bloquant, choix mémorisé, événement `mv:consent` pour un futur outil de mesure. **Aucun cookie n'est posé aujourd'hui** : le bandeau prépare la mesure d'audience (Q-C7) |
| Captcha | Cloudflare Turnstile intégré, inactif sans clé — `docs/FORMULAIRES.md` |
| SEO | Images Open Graph créées (elles manquaient : 3 liens morts), `og:image` dédiée à la page AG, `llms.txt` pour les moteurs IA, `meta author`, FAQ et Service en données structurées sur la nouvelle page |
| « Watermarks Claude » | Aucune mention dans le site généré. La seule était la ligne de co-signature des commits du dépôt GitHub : elle sera omise à la prochaine publication |

---

## 10. Rubrique Actualités administrable — Decap CMS (24/10/2026)

Validé par Alexis le 24/10/2026, sur son GitHub (`rockandberg`) dans un premier temps ; transféré le 27/10/2026 sur le compte GitHub de Mediavote (`FDN-ai`).

| Élément | Où |
|---|---|
| Articles en Markdown (titre, date, catégorie, chapô, image, brouillon, corps) | `content/actualites/*.md` |
| Lecture, conversion Markdown → HTML (zéro dépendance), tri, brouillons exclus en production | `src/articles.js` |
| Index `/actualites/`, pages article, cartes, flux RSS `/feed.xml`, données structurées `Article` | `src/pages/actualites.js` |
| Accueil : bloc « Ressources » alimenté par les 3 derniers articles publiés | `src/pages/home.js` |
| Interface d'administration Decap CMS, aperçu stylé, champs en français | `public/admin/` |
| Mode rédaction local sans GitHub (`npm run cms` → http://localhost:4400/admin/) | `tools/dev.js` |
| Construction + mise en ligne automatiques sur GitHub Pages | `.github/workflows/pages.yml`, options `--base` et `--noindex` de `build.js` |
| Serveur de connexion GitHub (à déployer une fois, gratuit) | `tools/decap-oauth-worker/`, procédure dans `docs/CMS.md` |

Les trois articles présents reprennent des contenus déjà rédigés et validés sur le site
(pages AG, accompagnement, Qui sommes-nous) ; ils sont modifiables ou remplaçables depuis l'interface.


---

## 11. Formulaires raccordés au Zoho CRM de Mediavote (26/10/2026)

Formulaire web Zoho « Site web Mediavote — prise de contact » (module Prospects) créé dans le CRM du
client, à la demande d'Alexis et sans modifier l'existant. Les trois formulaires du site (contact,
démonstration, fin du configurateur) y envoient directement leurs données ; captcha Zoho vérifié côté
serveur ; page `/merci/` après envoi. Détail et correspondance des champs : `docs/FORMULAIRES.md`.

---

## 12. Remise sur les comptes Mediavote (27/10/2026)

| Élément | État |
|---|---|
| Dépôt GitHub | `FDN-ai/mediavote-site` (copie complète, historique inclus, par « Import repository » depuis `rockandberg/mediavote-site`) |
| Site d'aperçu | https://fdn-ai.github.io/mediavote-site/ — GitHub Pages, source « GitHub Actions », non indexable tant que `public/CNAME` n'existe pas |
| Administration | https://fdn-ai.github.io/mediavote-site/admin/ — connexion GitHub via le worker Cloudflare `mediavote-admin-auth` (compte Cloudflare Mediavote) et l'app OAuth « Mediavote — administration du site » (compte GitHub FDN-ai) ; brouillon de test créé puis supprimé |
| Zoho CRM | Formulaire web inchangé (mêmes jetons) ; URL de redirection → `https://fdn-ai.github.io/mediavote-site/merci/`, emplacement `https://fdn-ai.github.io` ajouté. Aucun prospect de test envoyé (en attente d'accord explicite) |
| Mise en production | Procédure `docs/MISE-EN-LIGNE.md` : DNS + fichier `public/CNAME`, le workflow bascule seul en mode production |
| Reste à faire par Mediavote/Alexis | Inviter `rockandberg` comme collaborateur du dépôt (Settings → Collaborators) pour les corrections depuis ce poste ; supprimer les aperçus `rockandberg` quand ils ne servent plus |

