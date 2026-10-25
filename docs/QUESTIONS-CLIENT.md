# QUESTIONS-CLIENT — Refonte du site MEDIA VOTE

Questions dont la réponse **change matériellement** l'architecture, le positionnement, les preuves, le contenu, la direction artistique, le développement ou la mise en production.

Les questions auxquelles le dossier répond déjà **ne figurent pas ici** — elles sont tranchées dans le `PROJECT-BRIEF.md` sous forme d'hypothèses explicites (§11).

---

## A. Bloquantes avant conception

**État au 22/08/2026 : 3 questions sur 4 tranchées.** Q-A1 reste ouverte — elle ne bloque pas l'architecture, mais bloque la rédaction du contenu de conformité et la mise en production.

### Q-A1 — Recommandation CNIL 2026 🔴 **OUVERTE**
La délibération **n° 2019-053 du 25 avril 2019**, citée dans **tous** vos supports commerciaux et sur le site actuel, a été **abrogée par la délibération n° 2026-045 du 19 mars 2026**. La nouvelle recommandation conserve la logique des trois niveaux de risque mais **renforce les exigences d'authentification et de vérifiabilité**.

- ProVote® a-t-il été revu au regard de la recommandation 2026 ?
- Disposez-vous d'une analyse d'écart, même interne ?
- Que pouvons-nous écrire sur le site : conformité à la recommandation 2026, ou simple conception « au regard des recommandations de la CNIL » ?

**Pourquoi c'est bloquant** : la sécurité et la conformité sont l'un des deux piliers du positionnement. Nous ne pouvons pas construire le **contenu** de `/securite-conformite` — ni les blocs de réassurance de la page d'accueil, des pages AG et CSE — sur un texte abrogé.

**Ce que nous faisons en attendant** : la Phase 2 se poursuit (la page existe dans l'architecture quelle que soit la réponse). Le contenu de conformité est rédigé avec des emplacements réservés, marqués `<!-- À VALIDER : réf. V1.5 -->` dans le code. Aucune allégation n'est publiée sans preuve.

---

### Q-A2 — Arborescence : trois arbitrages d'URL ✅ **TRANCHÉE le 22/08/2026**
> **Réponse : recommandation retenue.** Hub `/modes-de-vote` avec enfants `/modes-de-vote/<slug>` ; `/a-propos` ; hub `/secteurs` + 3 pages. → Décision **D1** du `PROJECT-BRIEF.md`.
Votre fichier `Media-Vote-Architecture-SEO-2026.xlsx` et l'arborescence de la mission divergent sur trois points. Ces URLs doivent être figées avant la rédaction et le plan de redirections.

| Sujet | Option 1 (fichier SEO) | Option 2 (mission) | Notre recommandation |
|---|---|---|---|
| Hub des modes | `/modes-de-vote` avec enfants `/modes/…` | `/modes/…` sans hub | **Option 1 corrigée** : hub `/modes-de-vote` et enfants `/modes-de-vote/vote-en-ligne`. Un parent et ses enfants doivent partager le même segment |
| Page entreprise | `/media-vote` | `/a-propos` | **`/a-propos`** : plus lisible en navigation, sans perte SEO (la requête de marque est portée par la home) |
| Secteurs | 3 pages sans hub | Hub `/secteurs` | **Hub `/secteurs` + 3 pages** : le hub capte les requêtes comparatives et structure le maillage |

Confirmez-vous ces trois arbitrages ?

**Pourquoi c'est bloquant** : chaque URL conditionne le mapping SEO, le maillage interne et le plan de redirections. Un changement après la rédaction impose de tout reprendre.

---

### Q-A3 — Orthographe de la marque ✅ **TRANCHÉE le 22/08/2026**
> **Réponse : « Media Vote »**, en deux mots, dans tous les textes du site. Logo et domaine inchangés. → Décision **D2**.
Vos documents écrivent « **Mediavote** » (logo, e-mails, plaquettes). Votre fichier d'architecture SEO et le brief écrivent « **Media Vote** ».

Quelle graphie retenons-nous pour l'ensemble des textes du site : **Mediavote** ou **Media Vote** ?

**Pourquoi c'est bloquant** : la graphie apparaît des centaines de fois, dans les titres, les métadonnées, les données structurées et le nom de domaine perçu. La cohérence de marque se décide avant la rédaction, pas après. *(Le logo reste inchangé dans les deux cas.)*

---

### Q-A4 — Boîtiers : périmètre commercial ✅ **TRANCHÉE le 22/08/2026**
> **Réponse : prestation uniquement.** Mode de vote et savoir-faire d'assemblée, sans offre de vente ni de location. Emplacement d'une future page produit réservé dans l'architecture. → Décision **D3**.
Votre brief mentionne une réflexion en cours : le boîtier doit-il rester sous la marque Mediavote ou passer sous une marque dédiée, et une activité de vente/location doit-elle être développée ?

Pour cette version du site, confirmez-vous que le boîtier est présenté **uniquement comme mode de vote et prestation d'assemblée**, sans offre de vente ni de location ?

**Pourquoi c'est bloquant** : cela détermine s'il faut une page `/modes-de-vote/vote-par-boitier` (prestation) ou deux pages (prestation + produit), avec des intentions de recherche et des CTA différents. C'est une décision d'architecture, pas de contenu. *(Notre hypothèse de travail : prestation uniquement.)*

---

## B. Nécessaires avant publication
*La conception et le développement avancent. La mise en ligne, non.*

### Q-B1 — Volumétrie : quel chiffre publions-nous ? 🔴
Trois chiffres contradictoires circulent :
- « plus de **100 000 votants par an** » — document *Gestion de votre projet*
- « **350 000 votants/an** » — site actuel
- « **600 AG/CA/CSE** » — site actuel, millésime 2023

Nous avons besoin de **trois chiffres, un seul de chaque, avec l'année de référence** :
1. Nombre de votants sur la dernière année complète ;
2. Nombre de scrutins organisés — en précisant si c'est annuel ou cumulé depuis 1998 ;
3. Nombre d'organisations clientes.

**Pourquoi c'est nécessaire** : ces chiffres sont le principal élément de réassurance de la page d'accueil. Nous n'en publierons aucun sans confirmation écrite.

---

### Q-B2 — Capacité technique 🔴
Le site annonce « 2 000 votants synchrones / 50 000 asynchrones ». La fiche licence annonce « jusqu'à **100 000 participants en asynchrone** ». La plaquette AG annonce « résultats en moins de 3 secondes pour 10 000 votants ».

Quelles sont les valeurs exactes, et à quelle date ont-elles été mesurées ou éprouvées ?

**Pourquoi c'est nécessaire** : ces chiffres sont opposables en appel d'offres. Publier la valeur haute sans base engage votre responsabilité ; publier la valeur basse vous ferme des dossiers.

---

### Q-B3 — Certificat NF 552 🔴
Le certificat publié sur votre site (**n° 552/0003-1**, produit « PROVOTE version 1 ») a été émis le **20/05/2022** et était **valable jusqu'au 20/05/2023**.

- Disposez-vous d'un certificat en cours de validité ?
- Si oui, pouvez-vous nous le transmettre (numéro, version certifiée, date d'échéance) ?
- Si non, une démarche de renouvellement est-elle engagée, et à quelle échéance ?

Second point, distinct : NF 552 est le référentiel « **NF Logiciel Protection des Données Personnelles** », qui atteste de la conformité **RGPD du logiciel**. Vos supports le présentent comme une preuve de **sécurisation du vote** (rubrique « Sécuriser le vote ▪ Certifié norme 552 »). Nous corrigerons cette présentation sur le site.

**Pourquoi c'est nécessaire** : sans certificat valide, aucune mention de NF 552 ne sera publiée. C'est une allégation directement opposable par un concurrent ou un acheteur public.

---

### Q-B4 — Audit OPPIDA : est-il réalisé ? 🟠
Deux pages de votre plaquette CSE présentent OPPIDA et ses prestations, mais les huit scénarios de test y sont rédigés **au futur** (« Tests seront réalisés »), ce qui ressemble à un cadrage ou un devis plutôt qu'à un rapport livré.

- L'audit de code et les tests d'intrusion ont-ils été **réalisés** ?
- Si oui : à quelle date, sur quelle version de ProVote®, et pouvez-vous nous fournir une attestation ou une synthèse publiable ?
- Ces tests sont-ils **récurrents** ? À quelle fréquence ?

**Pourquoi c'est nécessaire** : c'est votre argument de sécurité le plus solide face à Neovote. Correctement daté, il vaut plus que toutes les mentions de certification. Non daté, il ne peut pas être publié.

---

### Q-B5 — Hébergement des données 🟠
Vos documents indiquent « hébergement en France » et « réplication sur deux datacenters avec triple réplication locale », sans nommer l'hébergeur.

- Quel est l'hébergeur de **ProVote®** (à distinguer d'OVH, qui héberge le **site vitrine**) ?
- Où sont physiquement situés les datacenters ?
- Quelles sont les **durées de conservation** des données de scrutin après clôture ?
- Qui est votre **DPO** ou référent données personnelles ?

**Pourquoi c'est nécessaire** : ce sont les quatre questions posées en due diligence par tout acheteur public ou grande organisation. Elles alimentent `/securite-conformite` et la politique de confidentialité, obligatoire avant mise en production.

---

### Q-B6 — Accessibilité de ProVote® 🟠
Votre plaquette CSE indique « conforme à une grande majorité des 106 points » du RGAA. Cette formulation n'est pas conforme à la méthode RGAA, qui impose un **taux de conformité chiffré** issu d'un audit et une **déclaration d'accessibilité publiée**.

- Un audit RGAA de ProVote® a-t-il été réalisé ? Par qui, à quelle date, avec quel taux ?
- Existe-t-il une déclaration d'accessibilité publiable ?

**Pourquoi c'est nécessaire** : l'accessibilité est un critère d'attribution dans les marchés publics — un segment où vous avez déjà des références (Agences de l'eau, HAS, Éducation nationale, CESE). Une revendication mal formulée est plus risquée qu'une absence de revendication. *(À défaut, nous valoriserons votre « mode accompagné » de guidage pas à pas de l'électeur, qui est un vrai atout d'usage.)*

---

### Q-B7 — Logos clients et témoignages 🟠
Votre page `/nos-references` affiche une centaine d'organisations, dont Amnesty International, UNICEF, Sanofi, Valeo, le Ministère de l'Éducation nationale, la HAS et le CESE.

- Disposez-vous d'**autorisations écrites** d'usage de ces logos ? Si oui, pour lesquelles ?
- Pouvons-nous obtenir **2 à 4 témoignages nominatifs** (nom, fonction, organisation, accord écrit) ?
- Pouvons-nous construire **un cas client détaillé et chiffré** — idéalement une AG hybride ou une élection CSE ?

**Pourquoi c'est nécessaire** : un témoignage nominatif convertit ; un logo anonyme non. À défaut d'autorisations, nous basculerons sur des typologies anonymisées, ce qui est nettement moins efficace.

---

### Q-B8 — Destination des formulaires 🟠
Le brief indique que **Zoho CRM** est connecté au site actuel.

- Souhaitez-vous que les formulaires alimentent directement Zoho (webhook / Web-to-Lead) ?
- Si oui, pouvez-vous fournir l'endpoint et les identifiants de champs ?
- Sinon, quelle destination : adresse e-mail de réception, ou service de formulaire tiers ?
- Faut-il un accusé de réception automatique au prospect ?

**Pourquoi c'est nécessaire** : sans réponse, nous livrons l'interface complète et documentons les options de raccordement — mais **le site ne peut pas être mis en ligne**, un formulaire qui n'envoie rien étant pire que pas de formulaire.

---

### Q-B9 — Formation de la licence : incluse ou facturée ? 🟡
Votre fiche licence annonce « Formation complète des utilisateurs, jusqu'à 5 utilisateurs » comme élément inclus, puis mentionne en bas de grille « Formation en ligne / support / compte admin : **820 € HT coût unique** ». La plaquette AG parle de « formation action 1,5 jour » et le site actuel de « formation admin de 4 heures ».

Quelle est la réalité : durée, format, et la formation est-elle incluse ou facturée en sus ?

**Pourquoi c'est nécessaire** : c'est un argument central de la page licence et une objection classique. Une contradiction visible fragilise toute la page.

---

### Q-B10 — Boîtier radio sans Internet 🟡
L'étude concurrentielle identifie comme différenciant « le boîtier **radio ne nécessitant pas Internet** ».

- Est-ce exact ?
- Le boîtier fonctionne-t-il en autonomie complète (radiofréquence, sans connexion), y compris pour le dépouillement et l'affichage des résultats ?
- Quelle est la portée, le nombre maximal de boîtiers, l'autonomie ?

**Pourquoi c'est nécessaire** : si c'est exact, c'est votre argument le plus fort face aux plateformes en ligne pures — une AG dans une salle sans réseau exploitable. Il mérite d'être central sur `/modes-de-vote/vote-par-boitier` et cité en page d'accueil.

---

## C. Facultatives ou améliorables plus tard

### Q-C1 — Captures d'écran de ProVote® 🟠
Le brief prévoyait leur transmission. Nous avons besoin de **6 à 10 captures réelles**, en haute définition, sur données fictives : écran d'accueil électeur, écran de vote sur résolution, vote par liste, émargement avec signature, tableau de résultats, accès Pilotage.

*Sans elles, la direction artistique — qui repose sur le produit réel plutôt que sur des visuels de cybersécurité génériques — ne peut pas être appliquée. Nous construirons des emplacements dimensionnés en attendant.*

### Q-C2 — Photographies 🟠
Photos d'assemblée en séance, de boîtiers, de l'équipe, du chef de projet en situation. Même en l'absence de shooting professionnel, **des photos réelles moyennes valent mieux que des banques d'images**, explicitement écartées.

### Q-C3 — Logo vectoriel et déclinaisons 🟡
Nous dériverons un SVG optimisé et un favicon depuis `logo_OK.ai`. Existe-t-il une **version horizontale** (monogramme + nom) et une **version monochrome** ? Existe-t-il une charte graphique, même sommaire ?

### Q-C4 — Vidéos 🟡
Votre chaîne YouTube `@mediavote7787` contient des contenus. Lesquels souhaitez-vous intégrer, et où : page démonstration, page ProVote®, témoignages ?

### Q-C5 — Actualités : rythme de publication 🟡
Votre blog compte environ **144 articles**. Quel rythme de publication visez-vous après la refonte ? Cela détermine si le hub `/actualites` doit rester statique en v1 ou justifier un CMS léger en v2.

### Q-C6 — Mentions légales 🟡
Le site actuel dispose de mentions légales. Sont-elles à jour (raison sociale, capital, RCS, directeur de publication, hébergeur) ? Une politique de confidentialité existe-t-elle ?

### Q-C7 — Mesure d'audience 🟡
Souhaitez-vous conserver un outil d'analytics ? Si oui, lequel ? **Notre recommandation** : une solution sans cookie (Plausible, Matomo en mode exempté) — pas de bandeau de consentement, cohérent avec l'argument « aucun cookie » de ProVote®, et conforme aux lignes directrices CNIL sur l'exemption de consentement.

### Q-C8 — Search Console 🔴 *(pour la mise en production)*
Pouvez-vous nous donner accès à la **Google Search Console** du domaine, ou exporter les 12 derniers mois (URLs, clics, impressions, positions) ?

*Votre sitemap déclare **160 URLs**, dont ~144 articles. Le plan de redirections de votre fichier SEO n'en couvre que 16. Sans cet export, nous redirigerions à l'aveugle 90 % de vos URLs indexées.* Classé en C parce que non bloquant aujourd'hui — mais **bloquant absolu le jour de la bascule**.

### Q-C9 — Accès OVH et DNS 🟡
Qui détient les accès OVH ? Souhaitez-vous que nous préparions la configuration DNS, les redirections `.htaccess` et la surveillance d'expiration SSL et de domaine demandée dans le brief ?

### Q-C10 — Dépôt de marque INPI 🟢
Le brief recommande le dépôt de « Mediavote » à l'INPI. Hors périmètre du site, mais nous le signalons : une refonte qui augmente votre visibilité augmente aussi votre exposition.

---

## Récapitulatif

| Priorité | Questions | Effet |
|---|---|---|
| **A — Bloquantes avant conception** | ~~Q-A2~~ ✅ · ~~Q-A3~~ ✅ · ~~Q-A4~~ ✅ · **Q-A1 ouverte** | Phase 2 débloquée ; contenu de conformité en attente |
| **B — Avant publication** | Q-B1 → Q-B10 | Conception et développement possibles, mise en ligne bloquée |
| **C — Améliorables** | Q-C1 → Q-C10 | Qualité du rendu final ; Q-C8 bloquante le jour de la bascule |

**Prochaine réponse attendue** : **Q-A1** (CNIL 2026), puis la section B en parallèle de la Phase 2.
