# PROJECT-BRIEF — Refonte du site MEDIA VOTE

Brief consolidé issu de l'audit des ressources (voir `RESOURCE-INVENTORY.md`).
Version 1 — 22/08/2026 — **à valider (Validation 1)**.

---

## 0. Décisions validées

Arbitrages tranchés avec le client le **22/08/2026**. Ils sont désormais opposables à toute la suite du projet.

| # | Décision | Portée |
|---|---|---|
| **D1** | **Arborescence retenue** : hub `/modes-de-vote` avec enfants `/modes-de-vote/<slug>` (cohérence parent-enfant) ; `/a-propos` plutôt que `/media-vote` ; hub `/secteurs` réel + 3 pages sectorielles | URLs figées — base du SEO-MAPPING, du maillage interne et du plan de redirections |
| **D2** | **Graphie de marque : « Media Vote »**, en deux mots, dans tous les textes, titres, métadonnées et données structurées. Le logo et le nom de domaine restent inchangés. « ProVote® » conserve sa graphie et sa marque déposée | Rédaction, métadonnées, JSON-LD |
| **D3** | **Boîtiers : prestation uniquement.** Mode de vote et savoir-faire d'assemblée, avec accompagnement. Aucune offre de vente ni de location présentée. L'architecture réserve la place d'une future page produit sans la créer | `/modes-de-vote/vote-par-boitier` |
| **D4** | *(issue du fichier SEO client)* **Aucun tarif publié**, y compris pour la licence annuelle | `/offres/licence-annuelle-provote` |
| **D5** | *(issue du fichier SEO client)* **Media Vote = marque ; ProVote® = plateforme.** Jamais l'inverse | Tout le site |

**Reste ouvert** : **Q-A1 — recommandation CNIL 2026**. Cette question ne bloque pas l'architecture (la page `/securite-conformite` existe dans tous les cas) mais bloque **la rédaction de son contenu de conformité et la mise en production**. La Phase 2 se poursuit sous l'hypothèse **H10** : aucune allégation de conformité publiée sans preuve, emplacements réservés dans le code.

---

## 1. L'entreprise en une page

**Media Vote** est une société française créée en **1998**, basée **9 rue Sédillot, 75007 Paris**, spécialisée dans le **vote électronique professionnel**. Elle édite et exploite **ProVote®**, sa plateforme de vote en ligne, et opère également le **vote par boîtier** en présentiel.

Media Vote ne vend pas seulement un logiciel : elle **organise des scrutins**. Un chef de projet dédié prépare, paramètre, teste et pilote chaque assemblée, en présentiel ou à distance.

**Équipe identifiée** : Fanny Damon (responsable des opérations, interfaces et UX), Jean-Pierre Leclercq (directeur commercial).
**Contact public** : 01 47 08 55 13 — contact@media-vote.com

**Relation de marque — règle absolue**
> **Media Vote est la marque.** ProVote® est **sa plateforme**. ProVote® ne doit jamais apparaître comme la marque mère, ni comme une entité autonome. Formulation de référence : *« ProVote®, la plateforme de vote électronique de Media Vote. »*

---

## 2. Marché et concurrence

**Segment cible** : organisations de **50 à 5 000 votants**, avec des besoins statutaires spécifiques. En dessous, le besoin est marginal ; au-dessus, les acteurs à forte capacité (Neovote, Kercia) dominent avec des tarifs hors de portée d'une partie du marché.

Le marché se décompose en **trois terrains concurrentiels distincts** :

| Terrain | Concurrents | Position de Media Vote |
|---|---|---|
| **A. Vote par boîtier en présentiel** | Hypermaster, Votebox, SDTI, i-Périclès, Gedivote | Présent, avec un boîtier **radio ne nécessitant pas Internet** |
| **B. Plateforme de vote en ligne / hybride** | Kercia, Neovote, Gedivote, Voteer, assemblee-generale.com | Présent avec ProVote® |
| **C. Solution complète avec accompagnement humain le jour J** | Hypermaster, Votebox, SDTI, Gedivote | **C'est ici que Media Vote doit être perçue comme référence** |

**Enseignement stratégique** : très peu d'acteurs couvrent A **et** B **et** C. Media Vote les couvre tous les trois. C'est cette **continuité** — même équipe, même plateforme, du présentiel au distanciel — qui constitue le socle du positionnement.

**Ce que fait Neovote et que nous ne devons pas imiter** : la surenchère régalienne (références d'État, garanties assurantielles chiffrées, vocabulaire technique dense). Ce registre est crédible pour des scrutins nationaux ; il est intimidant et hors sujet pour une fédération de 800 adhérents.

**Ce que fait WeChooz et que nous devons faire mieux** : le CTA « Demander une démo » omniprésent, les témoignages vidéo nominatifs, la structure de page répétable, les ressources téléchargeables.

---

## 3. Objectifs du site

Objectifs formalisés par le client, par ordre de priorité :

1. **Générer des demandes de démonstration qualifiées.** C'est la métrique principale : environ **60 % des prospects signent après démonstration**. Le site n'a pas à vendre — il a à faire demander une démo.
2. **Améliorer le référencement naturel** sur les requêtes à forte intention commerciale, et être correctement lu par les moteurs conversationnels.
3. **Structurer l'offre** autour des besoins puis des typologies de clients, en éliminant la cannibalisation entre pages.
4. **Renforcer la crédibilité** par la preuve : références, certifications vérifiées, méthode documentée, témoignages.
5. **Soutenir la montée en gamme** : attirer des organisations plus importantes, justifier un panier moyen supérieur par une image plus contemporaine.
6. **Développer le revenu récurrent** : donner à la **licence annuelle ProVote®** une visibilité qu'elle n'a pas aujourd'hui.

**Ce que le site n'est pas** : pas d'espace client, pas de login, pas de compte utilisateur, pas d'API, pas de paiement, pas de transaction, pas de CMS en v1. Les seuls éléments dynamiques sont les **formulaires**, la **FAQ**, la **navigation** et les **actualités**.

---

## 4. Audiences

| Audience | Qui | Ce qu'elle cherche | Objection principale | Page d'entrée |
|---|---|---|---|---|
| **Direction / secrétariat général** d'association, fédération, mutuelle | Décide et signe | Que l'AG se déroule sans incident et sans contestation | « Est-ce que quelqu'un sera là si ça dérape le jour J ? » | `/solutions/…assemblee-generale` |
| **DRH / relations sociales** | Organise les élections CSE | Conformité, respect du calendrier, syndicats rassurés | « Est-ce que le scrutin est juridiquement inattaquable ? » | `/solutions/elections-cse` |
| **Responsable administratif / office manager** | Utilisera l'outil | Un outil qu'il peut piloter sans compétence technique | « Vais-je savoir m'en servir ? » | `/offres/licence-annuelle-provote` |
| **DSI / juriste / acheteur public** | Valide ou bloque | Hébergement, RGPD, audits, accessibilité, réversibilité | « Où sont les preuves ? » | `/securite-conformite` |
| **Prescripteur** (huissier, avocat, expert-comptable) | Recommande | Traçabilité, accès de contrôle, restitutions opposables | « Puis-je suivre et attester le scrutin ? » | `/offres/accompagnement-sur-mesure` |

**Fait déterminant issu du brief** : *la majorité des prospects connaissent déjà leur besoin en arrivant sur le site* (bouche-à-oreille, recherche ciblée). Le site n'a donc pas à évangéliser — il doit **confirmer une crédibilité et déclencher un contact**. Cela oriente toute la conception : les preuves montent haut dans les pages, l'accès à la démonstration reste permanent, l'argumentation pédagogique redescend vers les actualités et la FAQ.

---

## 5. Positionnement et territoire éditorial

**Territoire retenu**
> **La technologie sécurise le vote. L'équipe Media Vote sécurise le projet.**

C'est l'axe le plus défendable du dossier : la technologie est comparable d'un acteur à l'autre, la méthode ne l'est pas. Il est directement adossé à des preuves documentées (kit projet, jalons J-30 → J0, test systématique, accès Pilotage, présence en séance).

**Les six piliers du discours**

| Pilier | Preuve disponible dans le dossier |
|---|---|
| Expertise historique | Création en 1998 ; spécialisation continue sur AG, CA et votes professionnels |
| Maîtrise de tous les formats de scrutin | Résolutions, élections uninominales, plurinominales, de liste, hors liste, collèges, majorités absolue/qualifiée/relative |
| Adaptation aux règles de chaque organisation | Pouvoirs et limitation de pouvoirs, titulaire/suppléant, exclusions de vote, pondération, quorum paramétrable |
| Accompagnement humain | Chef de projet unique à double compétence juridique et numérique, présent en séance |
| Continuité des modes de vote | En ligne, boîtier, hybride — même plateforme, même équipe |
| Expertise spécifique AG | Émargement, quorum, pouvoirs, résolutions, PV — traités de bout en bout |

**Ton** : professionnel, rassurant, humain, précis, accessible. Expert sans être technocratique. Commercial sans être agressif. Moderne sans vocabulaire artificiellement futuriste.

**Interdits éditoriaux** : « solution révolutionnaire », « leader incontesté », « sécurité absolue », « 100 % sécurisé », « technologie inviolable », « solution unique au monde ». *À noter : « 100 % sécurisé » figure aujourd'hui sur le site actuel et dans les documents commerciaux — c'est un point de correction, pas une reprise.*

**H1 de travail retenu** : « Le vote électronique en toute confiance. »
Le fichier SEO client propose « Media Vote, le vote électronique en toute confiance ». Une variante intégrant l'accompagnement sera proposée en Phase 3, retenue seulement si elle est plus claire, plus différenciante et mieux alignée SEO.

---

## 6. Offres à valoriser

**Par besoin** — Assemblées générales *(prioritaire)*, Conseils d'administration, Élections CSE, Consultations et référendums.

**Par mode de vote** — Vote en ligne, Vote par boîtier, Vote hybride.
> *Réserve explicite* : le boîtier est présenté comme **mode de vote et savoir-faire**. Aucune offre de vente ou de location de boîtiers ne sera présentée comme une activité commerciale établie sans confirmation écrite du client.

**Plateforme et accompagnement** — ProVote® ; accompagnement sur mesure ; chef de projet dédié ; préparation et paramétrage ; tests et répétitions ; assistance opérationnelle ; suivi du scrutin ; restitution des résultats.

**Offre récurrente** — **Licence annuelle ProVote®**, en 3 niveaux (Essentielle, Avancée, Premium), sessions illimitées, formation incluse, assistance dédiée. **Visible sur la page d'accueil et dans la navigation principale. Sans tarifs publiés.**

---

## 7. Conversion

**CTA principal** : « Demander une démonstration »
**CTA secondaire** : « Parler de votre projet »

Principes retenus :
- La démonstration est **le** levier de conversion. Elle doit être atteignable depuis n'importe quelle page, sans être répétée à chaque section.
- Un CTA de header persistant + un bandeau de conversion en milieu de page longue + un bloc final. Pas de pop-up, pas de bandeau flottant intrusif.
- Le formulaire de démonstration doit être **court** et adapté à un décideur pressé. Chaque champ ajouté réduit le taux de complétion : les champs de qualification fine relèvent du rappel commercial, pas du formulaire.
- Les CTA sont **contextualisés** par page (« Demander une démonstration AG », « Voir la licence en démonstration ») tout en restant reconnaissables.

---

## 8. Architecture cible (base de travail)

Fondée sur le fichier `Media-Vote-Architecture-SEO-2026.xlsx`, ajustée à l'arborescence de la mission. **Arbitrages tranchés le 22/08/2026 — voir §0 Décisions validées.**

```
/                                                    Accueil
/solutions                                           Hub besoins
  /solutions/vote-electronique-assemblee-generale     ★ page pilier
  /solutions/vote-conseil-administration
  /solutions/elections-cse                            ★
  /solutions/consultations-referendums
/modes-de-vote                                       Hub modes
  /modes-de-vote/vote-en-ligne
  /modes-de-vote/vote-par-boitier
  /modes-de-vote/vote-hybride
/provote                                             Plateforme
  /provote/fonctionnalites
/offres/licence-annuelle-provote                     ★ récurrence
/offres/accompagnement-sur-mesure                    ★ différenciation
/securite-conformite                                 ★ due diligence
/secteurs                                            Hub secteurs
  /secteurs/associations-federations
  /secteurs/entreprises-mutuelles
  /secteurs/organismes-publics
/references
/a-propos
/demonstration                                       ★ conversion
/faq
/actualites
/contact
/mentions-legales  /politique-confidentialite  /accessibilite
```

**Principe d'architecture** : entrée par **besoin**, puis par **mode**, puis par **secteur**. Une intention transactionnelle = une page propriétaire. Les pages secteur apportent vocabulaire, contraintes et cas propres — jamais une redite de la page AG.

---

## 9. Choix technique proposé

**HTML / CSS / JavaScript natifs, sans framework, avec un pré-processing minimal de composants.**

Ce choix n'est pas une préférence : il est **imposé par le brief client** (« site 100 % codé en HTML/CSS ») et il est le bon pour ce projet.

| Critère | Justification |
|---|---|
| Performance | Aucun runtime JS à charger. Core Web Vitals excellents par construction |
| SEO | HTML servi directement, aucune dépendance au rendu JavaScript |
| Maintenance | Le client a explicitement souffert de blocs préfabriqués obsolètes et de certificats non renouvelés |
| Sécurité | Surface d'attaque quasi nulle, aucune dépendance tierce à patcher |
| Pérennité | Du HTML statique fonctionne encore dans dix ans |
| Déploiement | Fichiers statiques sur OVH, hébergement conservé |

**Précision technique nécessaire** : un site de ~26 pages avec header, footer, navigation, cartes et bandeaux CTA identiques **ne peut pas** être maintenu en dupliquant le HTML 26 fois. Le contrat « HTML/CSS » sera donc respecté **sur le livrable** : un générateur statique minimal (script Node sans dépendance, ou Eleventy) assemble des partiels et du contenu Markdown, et **produit du HTML statique pur** dans `dist/`. Le site déployé est du HTML/CSS/JS natif ; le dépôt reste maintenable. Aucun framework front, aucune hydratation, aucune dépendance dans le livrable.

**JavaScript strictement limité à** : menu mobile, accordéons de FAQ, validation de formulaire, et rien d'autre. Progressive enhancement : tout le contenu reste lisible sans JS.

**Hébergement** : OVH, conservé. **Alerte à prévoir sur l'expiration du certificat SSL et du domaine** — demande explicite du client, motivée par des interruptions passées.

---

## 10. Contraintes et exigences

**Développement** : HTML sémantique ; CSS structuré à variables ; responsive mobile-first ; navigation clavier complète et focus visibles ; contrastes AA minimum ; `prefers-reduced-motion` respecté ; images optimisées, dimensionnées et différées quand pertinent ; métadonnées complètes ; Open Graph ; données structurées (`Organization`, `SoftwareApplication`, `BreadcrumbList`, `FAQPage`) ; sitemap XML ; robots.txt ; canoniques ; fil d'Ariane ; formulaires étiquetés avec messages d'erreur compréhensibles ; protection antispam (honeypot + time-trap, sans CAPTCHA) ; politique de cookies proportionnée aux outils réellement utilisés.

**Interdictions** : aucune API ni back-end inventé. Si les formulaires n'ont pas de destination validée, l'interface est construite et **les options de raccordement sont documentées**, sans simuler un envoi fonctionnel.

**Antispam et cookies** : sans outil de mesure décidé, le site part **sans cookie non essentiel et sans bandeau**. Un bandeau ne sera ajouté que si le client impose un outil qui le rend obligatoire. C'est cohérent avec l'argument produit « aucun cookie » de ProVote®.

---

## 11. Hypothèses de travail retenues

Ces hypothèses permettent d'avancer. Elles sont **explicites et réversibles** ; leur infirmation par le client est traitée en Phase 2 sans reprise structurelle.

| # | Hypothèse | Fondement | Coût si infirmée |
|---|---|---|---|
| H1 | L'ancienneté s'exprime **« depuis 1998 »**, jamais en nombre d'années | Élimine la contradiction 22/24/25 ans et ne vieillit pas | Nul |
| H2 | ~~Hypothèse~~ → **Décision D3** : le **boîtier** est présenté comme mode de vote et prestation, sans offre de vente/location | Décision client du 22/08/2026 | Ajout d'une page produit ultérieure, sans reprise structurelle |
| H3 | **Aucun tarif** n'est publié, y compris pour la licence | Décision validée au fichier SEO | Nul |
| H4 | ~~Hypothèse~~ → **Décision D2** : la marque s'écrit **« Media Vote »** en corps de texte, le logo restant inchangé | Décision client du 22/08/2026 | — |
| H5 | Les **hubs** `/solutions`, `/modes-de-vote` et `/secteurs` sont des pages réelles, pas de simples menus | Maillage interne et couverture d'intentions comparatives | Nul |
| H6 | Le site est **monolingue français** en v1 | Aucune version anglaise dans le sitemap actuel | Ajout ultérieur de `hreflang` |
| H7 | La **licence** occupe une entrée de navigation principale sous « Offres » | Priorité économique déclarée | Nul |
| H8 | Les **~144 articles** existants sont migrés sous `/actualites/<slug>` avec redirection 301 individuelle | Actif SEO majeur | Aucun — le contraire coûterait cher |
| H9 | Le formulaire est livré **non raccordé**, avec trois options documentées (endpoint Zoho, service de formulaire statique, script mail serveur) | Aucun endpoint fourni | Nul |
| H10 | Aucune mention de **NF 552, CNIL ou RGAA** n'est publiée tant que les preuves 2026 ne sont pas fournies ; les pages sont construites avec des emplacements réservés | Certificat expiré, délibération abrogée | Nul, réversible en une édition |

---

## 12. Risques du projet

| Risque | Gravité | Traitement |
|---|---|---|
| Publication d'allégations de conformité invalides (NF 552 expiré, CNIL 2019 abrogée) | 🔴 Critique | Blocage éditorial jusqu'à preuve — CONTENT-VALIDATION |
| Perte de trafic à la migration (144 articles non redirigés) | 🔴 Critique | Export Search Console exigé avant mise en production |
| Absence de captures produit et de photos réelles | 🟠 Élevée | Bloque la direction artistique définie (Phase 4) |
| Chiffres de preuve incohérents publiés en home | 🟠 Élevée | Aucun chiffre publié sans confirmation écrite |
| Logos clients utilisés sans autorisation | 🟠 Élevée | Repli sur des typologies anonymisées |
| Marque non déposée à l'INPI | 🟡 Moyenne | Hors périmètre du site, signalé au client |
| Sitemap et liens en `http://` sur le site actuel | 🟡 Moyenne | Corrigé nativement par la refonte |

---

## 13. Prochaines étapes

1. **Validation 1** — ce brief, l'arborescence et les questions bloquantes *(vous êtes ici)*.
2. **Phase 2** — `SITEMAP.md`, `SEO-MAPPING.md`, `INTERNAL-LINKING.md`, `CONTENT-MODEL.md`, `NAVIGATION.md`.
3. **Phase 3** — `content/home.md` et `content/assemblees-generales.md`.
4. **Phase 4** — `DESIGN-SYSTEM.md`.
5. **Validation 2**, puis **Phase 5** — prototype et développement.
6. **Validation 3**, puis QA et `QA-REPORT.md`.
