# SEO-MAPPING — Matrice page par page

Version 1 — 22/08/2026. Une fiche par page indexable.
**Aucun volume de recherche n'est indiqué** : le dossier client n'en fournit pas et aucun outil n'est connecté. Ils devront être ajoutés depuis Search Console ou un outil SEO avant arbitrage définitif des priorités *(limite déjà signalée dans le fichier client)*.

**Statut de validation** : ✅ prêt · ⏳ contenu à valider (voir `CONTENT-VALIDATION.md`) · 🔴 bloqué

---

## Règles transverses

**Title** — 55 à 60 caractères, mot-clé principal en tête, suffixe `| Media Vote` sauf si la longueur l'interdit.
**Meta description** — 140 à 158 caractères, bénéfice + preuve + incitation. Jamais de troncature.
**H1** — unique, une seule occurrence, distinct du title.
**Hiérarchie** — H1 → H2 → H3, sans saut de niveau. Aucun titre utilisé pour son style.
**Anti-cannibalisation** — deux pages ne visent jamais la même requête principale. En cas de recouvrement, la page propriétaire est nommée dans la fiche.

---

# P0 — Pages prioritaires

---

## 1. Accueil — `/`

| | |
|---|---|
| **Objectif** | Rassurer, orienter vers la bonne solution, déclencher une demande de démonstration |
| **Audience** | Tous décideurs, majoritairement déjà informés de leur besoin |
| **Intention** | Navigationnelle (marque) + commerciale (découverte) |
| **Mot-clé principal** | solution de vote électronique |
| **Requêtes secondaires** | vote électronique professionnel · vote en ligne sécurisé · prestataire vote électronique · Media Vote |
| **H1** | Le vote électronique en toute confiance. |
| **Title** | Vote électronique professionnel et vote en ligne \| Media Vote |
| **Meta description** | Media Vote organise vos assemblées générales, conseils et élections CSE depuis 1998 : plateforme ProVote®, vote en ligne, boîtier ou hybride, chef de projet dédié. |
| **CTA principal** | Demander une démonstration |
| **CTA secondaire** | Parler de votre projet |
| **Pages liées** | Les 4 solutions · les 3 modes · ProVote® · licence · accompagnement · sécurité · références |
| **Preuves nécessaires** | Chiffres (⏳ Q-B1) · logos clients (⏳ Q-B7) · un témoignage nominatif (⏳ Q-B7) |
| **Cannibalisation** | Détient « vote électronique » générique et la requête de marque. Aucune autre page ne les vise |
| **Données structurées** | `Organization` + `WebSite` |
| **Statut** | ⏳ — structure prête, chiffres et preuves en attente |

---

## 2. Assemblées générales — `/solutions/vote-electronique-assemblee-generale`

| | |
|---|---|
| **Objectif** | Page pilier. Couvrir tout le processus d'AG et convertir |
| **Audience** | Directions, secrétariats généraux, associations, fédérations, mutuelles |
| **Intention** | Transactionnelle forte |
| **Mot-clé principal** | vote électronique assemblée générale |
| **Requêtes secondaires** | vote en ligne AG · logiciel assemblée générale · solution vote AG · émargement AG · quorum assemblée générale · AG à distance · AG hybride · procuration AG |
| **H1** | Vote électronique pour vos assemblées générales |
| **Title** | Vote électronique pour assemblée générale \| Media Vote |
| **Meta description** | Émargement, quorum, pouvoirs, résolutions et résultats : Media Vote prépare, teste et pilote votre AG en présentiel, à distance ou en hybride. Démonstration sur demande. |
| **CTA principal** | Demander une démonstration AG |
| **CTA secondaire** | Parler de votre projet d'AG |
| **Pages liées** | Vote en ligne · boîtier · hybride · accompagnement · licence · ProVote® · sécurité · associations · entreprises |
| **Contenu requis** | AG présentiel / distance / hybride · émargement · quorum · pouvoirs et procurations · résolutions · pondération · vote secret ou public · participation · résultats et PV · préparation et répétition · assistance jour J · cadres statutaires · prestation vs licence · FAQ AG |
| **Preuves nécessaires** | Capture d'écran émargement (⏳ Q-C1) · cas client AG (⏳ Q-B7) · jalons J-30→J0 (✅) |
| **Cannibalisation** | **Point de vigilance majeur.** Ne traite pas « comment fonctionne le vote en ligne » — c'est `/modes-de-vote/vote-en-ligne`. Ici : le **besoin AG**. Là-bas : la **modalité** |
| **Données structurées** | `Service` + `FAQPage` + `BreadcrumbList` |
| **Statut** | ⏳ — prioritaire en Phase 3 |

---

## 3. Élections CSE — `/solutions/elections-cse`

| | |
|---|---|
| **Objectif** | Couvrir le parcours électoral complet et rassurer sur la conformité |
| **Audience** | DRH, relations sociales, employeurs, organisations syndicales |
| **Intention** | Transactionnelle forte |
| **Mot-clé principal** | vote électronique CSE |
| **Requêtes secondaires** | élections CSE en ligne · logiciel élections CSE · PAP · CERFA élections CSE · second tour CSE · bureau de vote CSE · dépouillement CSE |
| **H1** | Organisez vos élections CSE en ligne, simplement et sereinement |
| **Title** | Vote électronique pour élections CSE \| Media Vote |
| **Meta description** | PAP, convocations, listes, dépouillement par clés chiffrées, CERFA et second tour : Media Vote sécurise vos élections CSE de bout en bout, avec un chef de projet dédié. |
| **CTA principal** | Demander une démonstration CSE |
| **CTA secondaire** | Parler de votre projet CSE |
| **Pages liées** | ProVote® · sécurité · accompagnement · vote en ligne · entreprises · FAQ |
| **Contenu requis** | Cadre juridique (Code du travail, arrêtés, décrets) · PAP · rétroplanning · convocations · authentification multicanale · 4 profils · bureau de vote et clés fragmentées · dépouillement · CERFA · second tour · mix papier/digital · assistance électeurs · FAQ CSE |
| **Preuves nécessaires** | Cas client CSE (⏳) · schéma des clés fragmentées (✅ à produire) |
| **Cannibalisation** | Absorbe `/fr/cse` et `/fr/vote-en-ligne-cse`. Les articles CSE remontent ici |
| **Données structurées** | `Service` + `FAQPage` + `BreadcrumbList` |
| **Statut** | ⏳ |

---

## 4. Vote en ligne — `/modes-de-vote/vote-en-ligne`

| | |
|---|---|
| **Objectif** | Expliquer la modalité à distance et ses usages |
| **Audience** | Organisations avec votants dispersés |
| **Intention** | Transactionnelle forte |
| **Mot-clé principal** | vote en ligne sécurisé |
| **Requêtes secondaires** | plateforme de vote en ligne · logiciel de vote électronique · vote à distance · vote synchrone asynchrone |
| **H1** | Le vote en ligne sécurisé, accessible partout |
| **Title** | Vote en ligne sécurisé pour organisations \| Media Vote |
| **Meta description** | Vote synchrone ou asynchrone, sur ordinateur, tablette ou smartphone, sans téléchargement. ProVote® s'adapte aux règles de votre organisation. Voir une démonstration. |
| **CTA principal** | Voir une démonstration |
| **Pages liées** | ProVote® · licence · AG · CSE · hybride · sécurité |
| **Contenu requis** | Synchrone vs asynchrone · multi-terminaux sans téléchargement · authentification · déroulé électeur · attestations · pour qui · limites honnêtes · FAQ |
| **Cannibalisation** | **Ne traite pas les contraintes propres à l'AG ou au CSE.** Renvoie vers les pages besoin |
| **Statut** | ⏳ |

---

## 5. Vote par boîtier — `/modes-de-vote/vote-par-boitier`

| | |
|---|---|
| **Objectif** | Valoriser un savoir-faire que peu d'acteurs conservent |
| **Audience** | Organisateurs de scrutins en présentiel |
| **Intention** | Transactionnelle forte |
| **Mot-clé principal** | boîtier de vote électronique |
| **Requêtes secondaires** | boîtier vote assemblée générale · vote sans internet · boîtier de vote AG · vote en salle |
| **H1** | Le vote par boîtier, fiable même sans Internet |
| **Title** | Boîtier de vote électronique pour assemblée \| Media Vote |
| **Meta description** | Boîtiers radio autonomes, résultats affichés en séance, pondération des voix et chef de projet sur place. Media Vote équipe vos assemblées en présentiel depuis 1998. |
| **CTA principal** | Demander une démonstration boîtier |
| **Pages liées** | AG · hybride · accompagnement · références |
| **Contenu requis** | Fonctionnement radio · **autonomie sans Internet** (⏳ Q-B10) · déroulé en séance · pondération et pouvoirs · résultats immédiats · restitutions XLS/PDF · chef de projet sur place · quand le préférer au vote en ligne |
| **Preuves nécessaires** | Photos de boîtiers en situation (⏳ Q-C2) · confirmation technique radio (⏳ Q-B10) |
| **Cannibalisation** | Absorbe deux articles boîtier. **Aucune offre de vente ni de location** — décision D3 |
| **Statut** | ⏳ |

---

## 6. Vote hybride — `/modes-de-vote/vote-hybride`

| | |
|---|---|
| **Objectif** | Page stratégique nouvelle. L'hybride est revendiqué mais n'a aucune page aujourd'hui |
| **Audience** | Organisations avec public présent **et** distant |
| **Intention** | Transactionnelle |
| **Mot-clé principal** | vote hybride assemblée générale |
| **Requêtes secondaires** | AG hybride · assemblée générale présentiel et distanciel · vote mixte |
| **H1** | Réunissez tous vos votants, sur place comme à distance |
| **Title** | Vote hybride : AG en présentiel et à distance \| Media Vote |
| **Meta description** | Une seule assemblée, deux publics : votants en salle et à distance comptés ensemble, quorum consolidé en temps réel et résultats unifiés. Étudions votre dispositif. |
| **CTA principal** | Étudier mon dispositif hybride |
| **Pages liées** | AG · vote en ligne · boîtier · ProVote® · accompagnement |
| **Contenu requis** | Ce qu'est réellement l'hybride · unification des votes et du quorum · émargement des deux publics · scénarios (grève, intempéries, absence de dernière minute) · rôle du chef de projet · matériel · FAQ |
| **Cannibalisation** | Ne réécrit ni la page en ligne ni la page boîtier — traite leur **articulation** |
| **Statut** | ⏳ |

---

## 7. Plateforme ProVote® — `/provote`

| | |
|---|---|
| **Objectif** | Positionner ProVote® comme la plateforme **de** Media Vote (décision D5) |
| **Audience** | Décideurs, futurs administrateurs |
| **Intention** | Produit / marque |
| **Mot-clé principal** | ProVote Media Vote |
| **Requêtes secondaires** | plateforme de vote électronique · application de vote en ligne · logiciel de vote |
| **H1** | ProVote®, la plateforme qui s'adapte à vos règles |
| **Title** | ProVote®, la plateforme de vote de Media Vote \| Media Vote |
| **Meta description** | ProVote® gère résolutions, élections, émargement, quorum et pouvoirs selon les statuts de votre organisation. Accessible sans téléchargement, sur tout terminal. |
| **CTA principal** | Découvrir ProVote® en démonstration |
| **Pages liées** | Fonctionnalités · licence · sécurité · AG · CSE |
| **Contenu requis** | Ce qu'est ProVote® et son rapport à Media Vote · principes · accessibilité sans installation · adaptation aux statuts · profils et accès Pilotage · restitutions · deux façons de l'utiliser (accompagné / licence) |
| **Preuves nécessaires** | **Captures d'écran indispensables** (⏳ Q-C1) |
| **Cannibalisation** | Vise la requête produit. La requête générique « logiciel de vote » appartient à `/modes-de-vote/vote-en-ligne` |
| **Données structurées** | `SoftwareApplication` |
| **Statut** | ⏳ — dépend des captures |

---

## 8. Licence annuelle ProVote® — `/offres/licence-annuelle-provote`

| | |
|---|---|
| **Objectif** | **Priorité économique** : développer le revenu récurrent |
| **Audience** | Organisations avec plusieurs scrutins par an |
| **Intention** | Transactionnelle forte |
| **Mot-clé principal** | licence annuelle vote en ligne |
| **Requêtes secondaires** | licence logiciel vote électronique · abonnement vote en ligne · vote en ligne illimité · gérer ses votes en autonomie |
| **H1** | La licence ProVote® pour organiser vos scrutins en autonomie |
| **Title** | Licence annuelle ProVote® : vos scrutins en autonomie \| Media Vote |
| **Meta description** | Plusieurs AG, CA ou consultations par an ? La licence annuelle ProVote® vous rend autonome, avec formation, assistance et sessions illimitées. Parlons de votre besoin. |
| **CTA principal** | Demander une démonstration de la licence |
| **Pages liées** | ProVote® · fonctionnalités · CA · AG · accompagnement · démonstration |
| **Contenu requis** | Critères d'éligibilité · ce que contient la licence · 3 niveaux **par différences fonctionnelles** · formation (⏳ Q-B9) · assistance · autonomie vs accompagnement · ROI qualitatif sans chiffres · FAQ |
| **Cannibalisation** | Vise l'intention « modèle d'achat », pas la modalité de vote |
| **Contrainte** | **Aucun tarif** — décision D4 |
| **Statut** | ⏳ |

---

## 9. Accompagnement sur mesure — `/offres/accompagnement-sur-mesure`

| | |
|---|---|
| **Objectif** | **Page de différenciation centrale.** Rendre visible le meilleur actif du dossier |
| **Audience** | Organisations souhaitant déléguer ; prescripteurs |
| **Intention** | Transactionnelle / réassurance |
| **Mot-clé principal** | prestataire vote électronique assemblée générale |
| **Requêtes secondaires** | accompagnement scrutin · chef de projet vote électronique · organiser une AG clé en main · choisir un prestataire de vote |
| **H1** | Un chef de projet dédié, de la préparation aux résultats |
| **Title** | Accompagnement de vos scrutins par un chef de projet \| Media Vote |
| **Meta description** | Réunion de lancement, paramétrage, test en conditions réelles, présence le jour J : Media Vote pilote votre scrutin de J-30 à la restitution des résultats. |
| **CTA principal** | Confier mon scrutin à Media Vote |
| **Pages liées** | AG · CSE · boîtier · sécurité · références · démonstration |
| **Contenu requis** | **Jalons J-30 / J-15 / J-5 / J0** · kit projet en 4 documents · test systématique jusqu'à 20 personnes · accès Pilotage (huissier, avocat, scrutateurs) · double compétence juridique et numérique du chef de projet · gestion des aléas en séance · assistance électeurs · urgences · prestation vs licence |
| **Preuves nécessaires** | Photos d'accompagnement (⏳ Q-C2) · schéma de la frise (✅ à produire) |
| **Cannibalisation** | Absorbe l'article « comment choisir mon prestataire », dont l'intention est transactionnelle |
| **Statut** | ✅ **contenu entièrement disponible** — la seule page P0 sans dépendance de validation |

---

## 10. Sécurité et conformité — `/securite-conformite`

| | |
|---|---|
| **Objectif** | Passer la due diligence sans surpromettre |
| **Audience** | DSI, juristes, acheteurs publics, DPO |
| **Intention** | Réassurance |
| **Mot-clé principal** | sécurité vote électronique |
| **Requêtes secondaires** | conformité CNIL vote électronique · RGPD vote en ligne · hébergement données de vote · confidentialité du vote |
| **H1** | Sécurité, confidentialité et conformité de vos scrutins |
| **Title** | Sécurité et conformité du vote électronique \| Media Vote |
| **Meta description** | Séparation des urnes, clés de dépouillement fragmentées, authentification multicanale, journaux d'audit et hébergement en France : comment Media Vote protège vos scrutins. |
| **CTA principal** | Échanger avec un expert |
| **Pages liées** | ProVote® · CSE · AG · FAQ · contact |
| **Contenu requis** | Principes du secret et de la sincérité · séparation des urnes (✅) · clés fragmentées (✅) · scellement (✅) · authentification multicanale (✅) · journaux d'audit (✅) · contrôle d'intégrité HASH (✅) · hébergement (⏳ Q-B5) · RGPD et durées (⏳) · audits (⏳ Q-B4) · certifications (🔴 Q-B3) · accessibilité (⏳ Q-B6) · cadre CNIL (🔴 Q-A1) |
| **Cannibalisation** | Page propriétaire unique de toutes les requêtes de sécurité. Aucune autre page ne développe le sujet — elles y renvoient |
| **Statut** | 🔴 — **la seule page P0 réellement bloquée.** Six éléments dépendent de Q-A1, Q-B3, Q-B4, Q-B5, Q-B6. Structure et contenus ✅ rédigeables ; blocs de preuve en emplacement réservé |

---

## 11. Démonstration — `/demonstration`

| | |
|---|---|
| **Objectif** | **Page de conversion.** Aucune équivalente aujourd'hui |
| **Audience** | Prospects qualifiés |
| **Intention** | Conversion |
| **Mot-clé principal** | démonstration ProVote |
| **Requêtes secondaires** | démo vote électronique · tester une solution de vote · essai vote en ligne |
| **H1** | Découvrez ProVote® avec votre propre cas d'usage |
| **Title** | Demander une démonstration de ProVote® \| Media Vote |
| **Meta description** | Une démonstration personnalisée de 30 à 45 minutes, construite sur votre scrutin réel : vos résolutions, vos règles de quorum, vos pouvoirs. Sans engagement. |
| **CTA principal** | Planifier ma démonstration *(formulaire)* |
| **Pages liées** | ProVote® · licence · AG · CSE · sécurité |
| **Contenu requis** | Ce que vous verrez · durée et déroulé · qui vous recevra · sur vos propres données · aucun engagement · formulaire court · réassurance (RGPD, pas de démarchage abusif) |
| **Formulaire** | Organisation · nom · e-mail · téléphone · type de scrutin *(liste)* · nombre approximatif de votants *(tranches)* · échéance *(liste)* · message libre optionnel. **8 champs, 4 obligatoires** |
| **Cannibalisation** | Aucune — intention unique |
| **Statut** | ⏳ — dépend de la destination du formulaire (Q-B8) |

---

## 12. Hub Solutions — `/solutions`

| | |
|---|---|
| **Objectif** | Orienter par besoin |
| **Intention** | Exploration commerciale |
| **Mot-clé principal** | solutions de vote électronique |
| **Requêtes secondaires** | solution de scrutin · logiciel de vote professionnel · types de votes en entreprise |
| **H1** | Des solutions de vote adaptées à chaque type de scrutin |
| **Title** | Solutions de vote électronique par type de scrutin \| Media Vote |
| **Meta description** | Assemblées générales, conseils d'administration, élections CSE, consultations : chaque scrutin a ses règles. Media Vote adapte la plateforme et l'accompagnement. |
| **CTA principal** | Trouver ma solution |
| **Contenu requis** | 4 cartes solution avec critère de choix explicite · tableau comparatif des besoins · renvoi vers les modes |
| **Cannibalisation** | **Vigilance** : reste court et distributeur. Ne développe aucun besoin — sinon il cannibalise ses propres enfants |
| **Statut** | ✅ |

---

# P1 — Pages secondaires

---

## 13. Conseils d'administration — `/solutions/vote-conseil-administration`

**Intention** transactionnelle · **Mot-clé** vote électronique conseil administration · **Secondaires** vote CA en ligne · logiciel de vote CA · délibération à distance
**H1** Sécurisez les votes de vos conseils d'administration
**Title** Vote électronique pour conseil d'administration | Media Vote
**Meta** Conseils réguliers, votes à bulletin secret, délibérations à distance : ProVote® gère vos CA tout au long de l'année, en séance ou en consultation écrite.
**CTA** Découvrir ProVote® pour vos CA · **Liens** licence · vote en ligne · AG · sécurité
**Contenu** Fréquence des CA et intérêt de la licence · synchrone et asynchrone · secret · pouvoirs · consultation écrite · PV
**Cannibalisation** L'argument récurrence renvoie à la licence, il ne la remplace pas · **Statut** ⏳

---

## 14. Consultations et référendums — `/solutions/consultations-referendums`

**Intention** transactionnelle · **Mot-clé** vote électronique référendum consultation · **Secondaires** référendum entreprise en ligne · consultation électronique des salariés · sondage sécurisé
**H1** Consultations et référendums en ligne sécurisés
**Title** Consultation et référendum en ligne sécurisés | Media Vote
**Meta** Consulter salariés, adhérents ou administrés avec un scrutin sécurisé, anonyme et opposable — sans la lourdeur d'une assemblée générale.
**CTA** Parler de votre projet · **Liens** vote en ligne · sécurité · ProVote®
**Cannibalisation** Couvre les scrutins hors AG et CSE, sans diluer les pages prioritaires · **Statut** ⏳

---

## 15. Hub Modes de vote — `/modes-de-vote`

**Intention** comparative · **Mot-clé** vote en ligne ou boîtier · **Secondaires** choisir son mode de vote · présentiel distanciel hybride
**H1** Choisissez le mode de vote adapté à votre organisation
**Title** Vote en ligne, boîtier ou hybride : comment choisir | Media Vote
**Meta** En ligne, par boîtier ou hybride : trois modalités, trois usages. Comparez selon vos votants, votre lieu, votre calendrier et vos contraintes de réseau.
**CTA** Comparer les modes de vote
**Contenu** Tableau comparatif honnête · arbre de décision · 3 cartes
**Cannibalisation** Détient l'intention **comparative** ; les pages filles détiennent les intentions transactionnelles · **Statut** ✅

---

## 16. Fonctionnalités ProVote® — `/provote/fonctionnalites`

**Intention** informationnelle commerciale · **Mot-clé** fonctionnalités logiciel vote électronique · **Secondaires** émargement électronique · quorum automatique · gestion des procurations · pondération des voix
**H1** Toutes les fonctionnalités nécessaires à votre scrutin
**Title** Fonctionnalités de ProVote® : émargement, quorum, pouvoirs | Media Vote
**Meta** Résolutions, élections, émargement avec signature, calcul du quorum, pouvoirs, collèges, pondération et exports : le détail des fonctionnalités de ProVote®.
**CTA** Voir les fonctionnalités en action
**Contenu** Par famille : votes · élections · émargement · votants et pouvoirs · quorum et majorités · documents · profils · restitutions
**Preuves** Captures (⏳ Q-C1) · vérification fonctionnalité par fonctionnalité en démonstration (⏳ V6.1) · **Statut** ⏳

---

## 17. Hub Secteurs — `/secteurs`

**Intention** exploration sectorielle · **Mot-clé** vote électronique par secteur
**H1** Le vote électronique adapté à votre type d'organisation
**Title** Solutions de vote par type d'organisation | Media Vote
**Meta** Associations et fédérations, entreprises et mutuelles, organismes publics : chaque statut impose ses règles de vote. Découvrez notre approche par secteur.
**CTA** Étudier mon besoin · **Statut** ✅

---

## 18-20. Pages secteur

| Page | Mot-clé principal | H1 | Title |
|---|---|---|---|
| `/secteurs/associations-federations` | vote électronique association | Le vote électronique adapté aux associations et fédérations | Vote électronique pour association et fédération \| Media Vote |
| `/secteurs/entreprises-mutuelles` | vote électronique entreprise | Des votes fiables pour vos instances d'entreprise | Vote électronique pour entreprises et mutuelles \| Media Vote |
| `/secteurs/organismes-publics` | vote électronique secteur public | Des scrutins sécurisés pour les organismes publics | Vote électronique pour le secteur public \| Media Vote |

**Règle commune, impérative** : chaque page apporte **enjeux, vocabulaire, contraintes statutaires et cas propres** à son secteur. **Aucune ne réécrit la page AG.** En cas de doute, la page secteur renvoie vers la page besoin.
**Contenu type** : enjeux du secteur · scrutins concernés · contraintes statutaires spécifiques · comment Media Vote y répond · cas client · références du secteur · FAQ sectorielle
**Statut** ⏳ — dépend des références par secteur (Q-B7)

---

## 21. Références — `/references`

**Intention** réassurance · **Mot-clé** références Media Vote · **Secondaires** clients ProVote · avis Media Vote · retours d'expérience vote électronique
**H1** Ils font confiance à Media Vote pour leurs scrutins
**Title** Références et témoignages clients | Media Vote
**Meta** Associations, fédérations, mutuelles, entreprises et organismes publics : découvrez les organisations qui confient leurs scrutins à Media Vote depuis 1998.
**CTA** Organiser ma démonstration
**Contenu** Logos par secteur · témoignages nominatifs · cas clients · chiffres clés
**Preuves** 🔴 **Bloquée sur les autorisations de logos** (Q-B7). Repli : typologies anonymisées
**Statut** ⏳

---

## 22. À propos — `/a-propos`

**Intention** navigationnelle / marque · **Mot-clé** Media Vote entreprise · **Secondaires** entreprise vote électronique France · qui est Media Vote
**H1** Media Vote, expert du vote professionnel depuis 1998
**Title** Qui sommes-nous : Media Vote, expert du vote depuis 1998 | Media Vote
**Meta** Créée en 1998, Media Vote conçoit ProVote® et accompagne les organisations dans leurs scrutins. Une équipe à taille humaine, joignable et présente le jour J.
**CTA** Rencontrer notre équipe
**Contenu** Histoire depuis 1998 · ce qui n'a pas changé · l'équipe nommée · valeurs · pourquoi la proximité est un choix · complémentarité humain/technologie
**Angle** C'est ici que se joue l'argument « taille humaine » du brief. Une page corporate générique serait une occasion manquée · **Statut** ⏳

---

## 23. FAQ — `/faq`

**Intention** informationnelle + réassurance · **Mot-clé** questions vote électronique · **Secondaires** le vote électronique est-il légal · comment fonctionne le vote en ligne · le vote électronique est-il sécurisé
**H1** Toutes vos questions sur le vote électronique
**Title** FAQ : questions fréquentes sur le vote électronique | Media Vote
**Meta** Légalité, sécurité, anonymat, procurations, quorum, accessibilité, tarifs : les réponses aux questions que se posent les organisations avant de franchir le pas.
**CTA** Poser une autre question
**Structure** Par thèmes : cadre légal · sécurité et anonymat · organisation pratique · fonctionnalités · offres · accompagnement
**Note** Cible aussi les moteurs conversationnels. Chaque réponse doit être **autoportante** et lisible hors contexte
**Données structurées** `FAQPage` · **Statut** ⏳

---

## 24. Actualités — `/actualites`

**Intention** informationnelle · **Mot-clé** actualité vote électronique · **Secondaires** conseils assemblée générale · réglementation vote en ligne
**H1** Conseils et actualités du vote électronique
**Title** Actualités et conseils sur le vote électronique | Media Vote
**Meta** Réglementation, organisation de scrutins, retours d'expérience et bonnes pratiques : les analyses de Media Vote sur le vote électronique professionnel.
**CTA** Recevoir nos actualités *(si newsletter validée)*
**Contenu** Grille d'articles · filtres par catégorie (AG · CSE · réglementation · pratique · cas clients) · pagination
**Règle stricte** Aucun article ne vise une requête transactionnelle détenue par une page commerciale. Tout article remonte vers **une seule** page pilier · **Statut** ✅

---

## 25. Contact — `/contact`

**Intention** conversion / navigationnelle · **Mot-clé** contact Media Vote · **Secondaires** devis vote électronique · téléphone Media Vote
**H1** Parlons de votre prochain scrutin
**Title** Contacter Media Vote | Media Vote
**Meta** Une question, un projet de scrutin, une demande de devis : l'équipe Media Vote vous répond. Téléphone, e-mail ou formulaire, au choix.
**CTA** Envoyer ma demande
**Contenu** Formulaire court · téléphone et e-mail en clair · adresse · délai de réponse annoncé · orientation vers `/demonstration`
**Statut** ⏳ — dépend de Q-B8

---

# P2 — Pages légales

| Page | H1 | Title | Note |
|---|---|---|---|
| `/mentions-legales` | Mentions légales | Mentions légales \| Media Vote | ⏳ À jour ? (Q-C6) |
| `/politique-confidentialite` | Politique de confidentialité | Politique de confidentialité \| Media Vote | ⏳ Dépend de Q-B5 et Q-C7 |
| `/accessibilite` | Déclaration d'accessibilité | Accessibilité du site \| Media Vote | ✅ Concerne **le site**, pas ProVote® |
| `/plan-du-site` | Plan du site | Plan du site \| Media Vote | ✅ |

---

# Modèle d'article — `/actualites/<slug>`

**Title** `<Titre de l'article> | Media Vote` — 60 caractères max
**H1** Titre de l'article, distinct du title si nécessaire
**Structure** Réponse directe en 2-3 phrases · contexte · développement en H2/H3 · exemples · **lien vers une seule page pilier** · auteur et date · sources · CTA discret
**Données structurées** `Article` + `BreadcrumbList`
**Règle anti-cannibalisation** Un article traite la **longue traîne informationnelle**. Dès qu'il vise une requête transactionnelle, il devient une page commerciale ou il est fusionné.

---

# Synthèse

| Statut | Pages | Détail |
|---|---|---|
| ✅ Prêtes à rédiger | 5 | `/solutions` · `/modes-de-vote` · `/secteurs` · `/actualites` · `/offres/accompagnement-sur-mesure` |
| ⏳ Rédigeables, preuves en attente | 18 | Structure et argumentation possibles ; blocs de preuve réservés |
| 🔴 Bloquées | 1 | `/securite-conformite` |
| P2 légales | 4 | Dépendent des informations client |

**Point notable** : `/offres/accompagnement-sur-mesure` est la seule page P0 dont **tout le contenu est disponible et vérifié** aujourd'hui. C'est aussi la page de différenciation la plus forte. Elle peut être rédigée et développée immédiatement, sans attendre aucune validation.

**Volumes de recherche** : absents du dossier. Les priorités P0/P1 reposent sur la valeur commerciale déclarée et l'analyse concurrentielle, non sur des volumes mesurés. À confirmer dès l'accès Search Console (Q-C8).
