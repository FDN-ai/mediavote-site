# CONTENT-VALIDATION — Registre des affirmations à confirmer

Toute affirmation destinée à être publiée sur le site doit figurer ici avec un statut.
**Aucune affirmation au statut 🔴 ou 🟠 ne sera publiée sans confirmation écrite de Media Vote.**

**Statuts**
- 🟢 **Publiable** — vérifiable par une source primaire disponible aujourd'hui.
- 🟡 **Publiable reformulé** — le fond est exact, la formulation actuelle ne l'est pas.
- 🟠 **En attente** — vraisemblable, mais aucune preuve dans le dossier.
- 🔴 **Bloqué** — preuve absente, périmée, ou allégation juridiquement risquée.

**Colonne « Formulation de repli »** : ce qui sera écrit sur le site tant que la preuve n'est pas fournie.

---

## 1. Certifications et labels

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V1.1 | « **Certifié norme NF 552** » | Plaquette CSE, fiche licence, site actuel | 🔴 | Le certificat **n° 552/0003-1** publié sur le site actuel est **valable jusqu'au 20/05/2023**. Il porte sur « PROVOTE **version 1** ». Aucun certificat postérieur n'est fourni. Publier « certifié NF 552 » sans certificat en cours de validité est une allégation inexacte, opposable par un concurrent comme par un acheteur public | **Aucune mention de NF 552** jusqu'à fourniture du certificat en cours. Le bloc « Certifications » de `/securite-conformite` est construit avec un emplacement réservé |
| V1.2 | NF 552 présenté comme preuve de **sécurité du vote** (rubrique « Sécuriser le vote ▪ Certifié norme 552 ») | Plaquette CSE p. 4 | 🔴 | **Erreur de périmètre.** NF552 = « **NF Logiciel Protection des Données Personnelles** », adossée à ISO/CEI 25051:2014. Elle atteste de la **conformité RGPD du logiciel**, pas de la sécurité ni de la sincérité du scrutin. Cette confusion est reprise telle quelle dans plusieurs documents | Si le certificat est renouvelé : « ProVote® est certifié **NF 552 – Logiciel de protection des données personnelles** (AFNOR Certification / INFOCERT), référentiel qui atteste de la conformité du logiciel au RGPD. » Rattaché à la section **Données personnelles**, jamais à la section **Sécurité du scrutin** |
| V1.3 | « Certifié CNIL » / « certifié par la CNIL » | — | 🔴 | **Interdit.** La CNIL publie des recommandations et des référentiels ; elle ne certifie pas les solutions de vote. Formulation absente des documents Media Vote, mais fréquente sur le marché — inscrite ici comme garde-fou permanent | Jamais employée, sous aucune variante |
| V1.4 | « **CNIL N2** » / « recommandations niveau 2 » | Plaquette CSE, site actuel | 🟡 | Le niveau de risque N2 reste une notion valide sous la nouvelle recommandation, mais **le niveau applicable dépend du scrutin, pas du prestataire**. Un système ne « détient » pas un niveau : il est conçu pour permettre à un responsable de traitement d'atteindre le niveau requis | « ProVote® est conçu pour permettre l'organisation de scrutins relevant du **niveau 2** de la recommandation CNIL. L'analyse de risque reste réalisée par l'organisation responsable du traitement, avec l'appui de Media Vote. » |
| V1.5 | Conformité à la **délibération n° 2019-053 du 25 avril 2019** | Tous les documents Media Vote | 🔴 | Cette délibération a été **abrogée** par la **délibération n° 2026-045 du 19 mars 2026**, qui adopte une nouvelle recommandation (authentification et vérifiabilité renforcées ; logique des 3 niveaux conservée ; scrutins déjà en préparation pour 2026 pouvant rester sous la version 2019). **Tous les supports Media Vote citent la version abrogée** | Référence à la **délibération n° 2026-045 du 19 mars 2026** uniquement, et seulement après confirmation par Media Vote que ProVote® répond aux exigences renforcées. À défaut : mention factuelle du cadre applicable, sans revendication de conformité |
| V1.6 | Conformité au **RGS** (art. 9 de l'ordonnance n° 2005-1516) | Plaquette CSE p. 7 | 🟠 | Mention suivie d'un « XX » dans le document source, signe d'une note laissée en suspens. Aucune attestation jointe | Non publiée |
| V1.7 | « **Système expertisé par un expert informatique indépendant assermenté** » | Plaquette CSE p. 7 | 🟠 | Aucun nom, date ni rapport. Formulation valorisante mais invérifiable en l'état | Non publiée sans identité de l'expert et date |
| V1.8 | **Certification ISO 27001** | — | 🔴 | **Non revendiquée par Media Vote.** Kercia l'affiche. Ne jamais l'emprunter, même par analogie | — |

---

## 2. Audits et tests de sécurité

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V2.1 | « Media Vote **audité par OPPIDA** » | Plaquette CSE p. 9-10 | 🟠 | Argument fort et crédible : OPPIDA est un CESTI agréé ANSSI et accrédité COFRAC. **Mais les deux slides décrivent les prestations d'OPPIDA en général, pas un rapport daté portant sur ProVote®.** Les 8 scénarios de test sont présentés au futur (« Tests seront réalisés »), ce qui suggère un **devis ou un cadrage**, pas un audit livré | **Date, périmètre et version auditée requis.** Si confirmé : « ProVote® a fait l'objet d'un audit de code et de tests d'intrusion réalisés par OPPIDA, CESTI agréé ANSSI et accrédité COFRAC, en [mois/année]. » Sinon : non publié |
| V2.2 | « Test d'intrusion », « test de robustesse » | Plaquette AG | 🟠 | Aucune date, aucun périmètre, aucun opérateur | « Des tests d'intrusion et de robustesse sont réalisés périodiquement » — **uniquement si une périodicité réelle est confirmée** |
| V2.3 | « 4 niveaux différents de cryptage » | Plaquette CSE p. 7 | 🟡 | Formulation marketing sans contenu technique vérifiable. Un acheteur DSI y verra un signal négatif | Remplacer par des faits décrivables : chiffrement des communications, chiffrement des données de vote, clés de dépouillement fragmentées, scellement des urnes. À faire valider techniquement |
| V2.4 | « Clés de dépouillement fragmentées, ≥ 3 membres, seuil paramétrable » | Plaquette CSE p. 23 | 🟢 | Décrit précisément et de façon cohérente (partage de secret). **Excellent élément de preuve, sous-exploité aujourd'hui** | Publiable tel quel, avec un schéma explicatif |
| V2.5 | « Séparation stricte urne d'émargement / urne de bulletins » | Plaquette CSE p. 7 | 🟢 | Exigence de référentiel, correctement énoncée | Publiable |
| V2.6 | « Contrôle d'intégrité par comparaison de HASH toutes les 5 minutes » | Plaquette CSE p. 8 | 🟢 | Précis et vérifiable en démonstration | Publiable |
| V2.7 | « Journaux d'audit » (liste des 6 catégories d'événements) | Plaquette CSE p. 8 | 🟢 | Détaillé et conforme aux attentes des référentiels | Publiable |
| V2.8 | « Authentification multi-facteurs / double canal (SMS, e-mail, code DÉFI, courrier) » | Plaquette CSE p. 16 | 🟢 | Excellent : cohérent avec les exigences renforcées d'authentification de la recommandation 2026 | Publiable, à mettre en avant |
| V2.9 | « Réplication sur deux datacenters avec triple réplication locale » | Plaquette CSE p. 7 | 🟠 | Doit être confirmé par l'hébergeur actuel et rester cohérent avec la localisation annoncée | À confirmer avec le nom de l'hébergeur |
| V2.10 | « Aucun cookie » (ProVote®) | Plaquette AG | 🟡 | Différenciant réel s'il est exact. À confirmer par un test | À vérifier avant publication ; formulation « aucun cookie de mesure d'audience ni de traçage » si nuance nécessaire |

---

## 3. Hébergement, données et RGPD

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V3.1 | « Hébergement des données **en France** » | Plaquettes AG et CSE | 🟠 | Affirmation constante dans les documents, mais **aucun hébergeur nommé**. Un acheteur public demandera le nom et la localisation exacte | « Données hébergées en France » **seulement** après confirmation écrite du nom de l'hébergeur et des sites. Sinon non publié |
| V3.2 | « Solution 100 % française — développement et hébergement » | Plaquette AG | 🟡 | « 100 % » est une formulation absolue à éviter | « ProVote® est développé et hébergé en France » |
| V3.3 | « Données de vote stockées dans un **coffre-fort numérique** » | Plaquette AG | 🟠 | Expression commerciale sans définition technique. Un coffre-fort numérique est une notion normée (NF Z42-020) | Décrire le mécanisme réel (chiffrement, scellement, séparation des urnes) plutôt que d'employer le terme |
| V3.4 | Conformité **RGPD** (Règlement UE 2016/679) | Plaquettes | 🟡 | La conformité RGPD est une **obligation légale**, pas un avantage concurrentiel. La revendiquer comme argument affaiblit le discours | Traitée en section « Données personnelles » : rôles responsable de traitement / sous-traitant, durées de conservation, sous-traitants, droits des personnes. Un DPA doit exister |
| V3.5 | Durées de conservation des données de scrutin | — | 🟠 | **Absentes de tout le corpus.** Question systématique en due diligence | À obtenir, puis publier |
| V3.6 | Identité du **DPO** ou du référent données | — | 🟠 | Absente | Requise pour la politique de confidentialité |
| V3.7 | « Privacy by design / by default » | Site actuel | 🟡 | Slogan sans démonstration | À remplacer par des mécanismes concrets, ou supprimé |

---

## 4. Accessibilité

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V4.1 | « ProVote® CSE est **conforme à une grande majorité des 106 points** du RGAA » | Plaquette CSE p. 11 | 🔴 | **Formulation non conforme au RGAA**, qui impose un **taux de conformité chiffré** issu d'un audit et une **déclaration d'accessibilité publiée**. « Une grande majorité » n'a aucune valeur. De plus, le RGAA cité (version 2019/2021) n'est plus la version courante | Non publiée. Si un audit RGAA existe : « ProVote® a fait l'objet d'un audit RGAA en [date], taux de conformité [X] %. Déclaration d'accessibilité : [lien]. » Sinon : « L'accessibilité des interfaces de vote est un chantier suivi par Media Vote » — sans chiffre |
| V4.2 | Accessibilité du **site vitrine** lui-même | — | 🟢 | Sous notre maîtrise. Cible : **RGAA / WCAG 2.2 niveau AA** | Engagement tenu et documenté dans `QA-REPORT.md` et sur une page `/accessibilite` |
| V4.3 | « Mode accompagné, guidage pas à pas de l'électeur » | Plaquette CSE | 🟢 | Fonctionnalité concrète et différenciante, bien plus convaincante qu'une revendication RGAA floue | Publiable, à valoriser |

---

## 5. Chiffres et volumétrie

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V5.1 | Ancienneté : **22 / 24 / 25 ans** | 3 sources contradictoires | 🟡 | Contradiction directe entre supports | **« Depuis 1998 »** — factuel, non contradictoire, ne vieillit pas. Cohérent avec « création en 1998 » du document de gestion de projet |
| V5.2 | « **Plus de 100 000 votants par an** » vs « **350 000 votants/an** » | Gestion de projet vs site actuel | 🔴 | Écart d'un facteur 3,5. Publier le chiffre haut sans base est un risque ; publier le bas dévalorise | **Un seul chiffre, sourcé, avec année de référence.** Ex. : « Plus de X votants accompagnés en 2025. » Aucun chiffre publié à défaut |
| V5.3 | « **600 AG / CA / CSE** réalisés » | Site actuel (millésime 2023) | 🟠 | Chiffre daté, périmètre inconnu (cumul ou annuel ?) | À actualiser et préciser : « Plus de X scrutins organisés depuis 1998 » ou « X scrutins par an » |
| V5.4 | Capacité : **2 000 synchrones / 50 000 asynchrones** vs **100 000 asynchrones** | Site vs fiche licence | 🔴 | Contradiction. Chiffre potentiellement opposable en avant-vente ou en appel d'offres | Une seule valeur, confirmée techniquement |
| V5.5 | « < 2 s pour 1 000 votants, < 3 s pour 10 000 votants » (délai dernier vote → résultats) | Plaquette AG | 🟠 | Précis et crédible, mais sans protocole de mesure ni date | À confirmer, avec les conditions de mesure |
| V5.6 | « **60 % de signature après démonstration** » | Brief de réunion | 🟢 (interne) / 🔴 (public) | Donnée commerciale interne. **Ne se publie pas** : elle parle du taux de closing, pas du bénéfice client | Usage interne uniquement — elle justifie la stratégie de conversion, elle n'est pas un argument de site |
| V5.7 | « 100 % de nos clients atteignent leur quorum » | Titre d'article du site actuel | 🔴 | Allégation absolue invérifiable | À ne pas reprendre. Article à réécrire lors de la migration |
| V5.8 | Nombre de clients / d'organisations accompagnées | — | 🟠 | ~105 organisations listées sur `/nos-references`, sans total revendiqué | À obtenir |
| V5.9 | Taux de satisfaction | — | 🟠 | **Aucune donnée dans le corpus.** Le brief demande une campagne d'avis clients | Bloc prévu dans la maquette, contenu à collecter |
| V5.10 | Délai maximal de réponse de l'assistance : **15 min** | Plaquette CSE p. 29 | 🟡 | Assorti d'un « selon forfait souscrit » | Publiable **avec** la condition, ou non publié. Ne jamais afficher un engagement de service sans son périmètre |

---

## 6. Offres, fonctionnalités et tarifs

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V6.1 | Fonctionnalités ProVote® AG (quorum, pouvoirs, collèges, majorités, émargement, exports…) | Plaquette AG | 🟢 | Décrites avec précision et cohérence entre supports | Publiables. **À vérifier une par une en démonstration avant mise en ligne** de `/provote/fonctionnalites` |
| V6.2 | Fonctionnalités ProVote® CSE (PAP, CERFA, clés, profils, second tour, mix papier) | Plaquette CSE | 🟢 | Idem | Publiables après vérification |
| V6.3 | Contenu exact des **3 niveaux de licence** (Essentielle / Avancée / Premium) | Fiche licence | 🟡 | La matrice est claire, mais elle date. La licence évolue | À reconfirmer avant publication. Publier les **différences fonctionnelles**, pas les tarifs |
| V6.4 | **Tarifs** de la licence (50 € → 790 €/mois) et formation (820 € HT) | Fiche licence | 🔴 | **Décision projet : aucun tarif public.** Publier une grille figerait la négociation et exposerait la politique tarifaire aux concurrents | Non publiés. Formulation : « Trois niveaux selon vos besoins, votre contexte et votre budget. Tarification sur demande » |
| V6.5 | « Formation incluse, jusqu'à 5 utilisateurs par session » | Fiche licence | 🟡 | Le mot « incluse » est contredit par la ligne tarifaire « formation : 820 € HT coût unique » | **Contradiction à trancher** : la formation est-elle incluse ou facturée ? |
| V6.6 | « Formation action avec accompagnement pour la 1re AG (1,5 jour) » | Plaquette AG | 🟡 | vs « formation admin de 4 heures » sur le site actuel | À harmoniser |
| V6.7 | « Sessions de vote illimitées » | Fiche licence | 🟠 | À confirmer : illimité en nombre de sessions mais plafonné en votants (grille par tranche) | « Nombre de sessions illimité, dans la limite du nombre de votants souscrit » si exact |
| V6.8 | Délais d'accompagnement **J-30 / J-15 / J-5 / J0** | Gestion de projet | 🟢 | Le meilleur actif du corpus. Assorti de « les délais peuvent être raccourcis, Media Vote gère les urgences » | Publiable, à mettre en scène |
| V6.9 | « Présence physique du chef de projet pour AG synchrone » | Plaquette AG | 🟡 | Inclus dans le pack Prestation, mais périmètre géographique et conditions inconnus | Préciser : systématique ? sur demande ? France entière ? |
| V6.10 | « Tarifs préférentiels en commandes groupées » | Gestion de projet | 🟠 | Argument commercial sans définition | Non publié sans modalités |
| V6.11 | Boîtier **radio ne nécessitant pas Internet** | Étude concurrentielle | 🟢 (technique) / 🟠 (source) | **Différenciant le plus fort du dossier face aux plateformes en ligne pures.** Mais la source est une analyse, pas un document produit Media Vote | À confirmer par Media Vote, puis à placer en argument central de `/modes/vote-par-boitier` |
| V6.12 | Vente ou location de boîtiers comme offre commerciale | Brief | 🔴 | Explicitement en cours d'arbitrage, y compris sur la marque porteuse | **Non présentée.** Le boîtier existe comme mode de vote et prestation, pas comme produit à vendre |

---

## 7. Références, témoignages et logos

| # | Affirmation | Source | Statut | Analyse | Formulation de repli |
|---|---|---|---|---|---|
| V7.1 | Logos et noms clients (Amnesty International, UNICEF, Sanofi, Valeo, HAS, Ministère de l'Éducation nationale, CESE, Convention Citoyenne pour le Climat, Crédit Mutuel, FFF…) | `/nos-references` | 🟠 | Publiés aujourd'hui, mais **aucune autorisation d'usage documentée**. Les organisations publiques et les grandes marques encadrent strictement l'usage de leur logo | **Liste écrite des logos autorisés** requise. À défaut : typologies anonymisées (« une fédération sportive nationale », « un organisme public de santé ») |
| V7.2 | Témoignage « Un outil simple qui fait gagner du temps — Jeunes Agriculteurs » | Site actuel | 🟠 | Sans nom, sans fonction, sans date. Un témoignage non attribué convainc peu | Nom, fonction, organisation, date et accord écrit — ou non publié |
| V7.3 | Cas clients (articles « étude de cas » du site actuel) | Site actuel | 🟠 | Existent mais anonymisés et non chiffrés | Un cas client nommé et chiffré vaut mieux que dix anonymes |
| V7.4 | « Présent en France **et en Europe** » | Site actuel | 🟠 | Aucun élément dans le corpus | Non publié sans référence hors France |

---

## 8. Formulations interdites — liste de contrôle

À vérifier avant chaque mise en ligne. Aucune de ces expressions ne doit apparaître :

| Interdit | Raison | Remplacement |
|---|---|---|
| « certifié CNIL », « certifié par la CNIL », « agréé CNIL » | La CNIL ne certifie pas | « conçu au regard de la recommandation CNIL » |
| « 100 % sécurisé », « sécurité absolue », « inviolable » | Invérifiable — *présent aujourd'hui sur le site et dans les documents* | Décrire les mécanismes réels |
| « leader », « leader incontesté », « n° 1 » | Invérifiable | « spécialiste du vote professionnel depuis 1998 » |
| « solution révolutionnaire », « unique au monde » | Vide de sens | Décrire ce qui est réellement spécifique |
| « certifié NF 552 » | Certificat expiré depuis le 20/05/2023 | Rien, tant qu'un certificat valide n'est pas fourni |
| « conforme à la délibération 2019-053 » | Délibération abrogée le 19/03/2026 | Référence à la délibération 2026-045 après validation |
| « conforme RGAA » sans taux | Non conforme à la méthode RGAA | Taux d'audit et déclaration, ou rien |
| « 100 % de nos clients… » | Absolu invérifiable | Un cas client chiffré |
| « développé par des polytechniciens » | Argument d'autorité non vérifiable et daté | « développé en France avec des ingénieurs spécialisés en sécurité informatique » — si exact |

---

## 9. Tableau de bord

| Catégorie | 🟢 | 🟡 | 🟠 | 🔴 | Total |
|---|---|---|---|---|---|
| Certifications et labels | 0 | 1 | 2 | 5 | 8 |
| Audits et sécurité | 5 | 2 | 3 | 0 | 10 |
| Hébergement et RGPD | 0 | 3 | 4 | 0 | 7 |
| Accessibilité | 2 | 0 | 0 | 1 | 3 |
| Chiffres | 0 | 3 | 4 | 3 | 10 |
| Offres et fonctionnalités | 3 | 4 | 3 | 2 | 12 |
| Références | 0 | 0 | 4 | 0 | 4 |
| **Total** | **10** | **13** | **20** | **11** | **54** |

**Lecture** : 11 affirmations bloquent une publication, 20 attendent une preuve. La production du site n'est pas bloquée — la **mise en production l'est**. Les pages concernées seront construites avec des emplacements réservés, identifiés dans le code par un commentaire `<!-- À VALIDER : réf. Vx.x -->`.

**Les trois blocages les plus urgents**
1. **V1.1 / V1.2** — NF 552 : certificat expiré et périmètre mal présenté.
2. **V1.5** — CNIL : conformité revendiquée sur un texte abrogé depuis mars 2026.
3. **V5.2 / V5.4** — chiffres de volumétrie contradictoires d'un facteur 3,5.

---

## 10. Mises à jour du 27/09/2026 — intégration des retours « To Do »

Décisions d'Alexis Rollemberg consignées dans `docs/PLAN-V2.md` §6. Les lignes des sections 1 à 7
ci-dessus restent inchangées pour la traçabilité ; ce tableau fait foi pour leur état actuel.

| Réf. | Nouvel état | Formulation publiée | Source de la décision |
|---|---|---|---|
| V1.1 / V1.2 | 🟡 publiée, datée | « ProVote® a obtenu **en 2022** la certification NF Logiciel — Protection des données personnelles (NF 552) délivrée par AFNOR Certification. » Rattachée au bloc données personnelles ; document non publié | Arbitrage n° 1. Certificat fourni = n° 552/0003-1, valable du 20/05/2022 au 20/05/2023 |
| V6.11 | 🟢 publiée | « Les boîtiers communiquent par radio, sans dépendance à Internet » | Documents Media Vote : `AG_Exemples et paramétrages` (« Fonctionne en onde radio »), `MediaVote_Arbo.png` et maquette du configurateur (« sans dépendance Internet ») |
| V7.1 | 🟢 publiée | 21 logos (22 fichiers, l'URPS étant fournie deux fois), classés en quatre familles | Arbitrage n° 5 : publication autorisée par Alexis. Liste dans `src/data/references.js` |
| V3.x (RGPD) | 🟡 publiée, générale | « Sécurisé et conforme au RGPD » ; « Le traitement des données de vos votants s'inscrit dans le cadre du RGPD » | Arbitrage n° 9. Hébergeur, localisation, durées et DPO toujours non publiés (Q-B5) |
| Nouveau — V8.1 | ⚪ non publiée | Signature électronique européenne (eIDAS) | Arbitrage n° 7 : niveau, prestataire et étape inconnus |
| Nouveau — V8.2 | 🔴 écartée | Visuel « Sécurité / Capacité / RGPD » portant le **logo de la CNIL** et la mention « inférieur à 3 secondes pour 10 000 votants » | Arbitrage n° 2 : visuel non utilisé et non reconstruit |
| Nouveau — V8.3 | 🟢 publiée | Les boîtiers de vote ne sont pas proposés pour les élections CSE | Tableau « Quelle solution pour quel vote ? » de `MediaVote_Arbo.png` et spécification `retour_quizz` |
| Nouveau — V8.4 | 🟡 publiée | Paramétrages boîtier : majorités simple, renforcée ou personnalisée ; poids et droits de vote par boîtier ; anonyme ou nominatif ; votes en amont consolidés ; affichages optionnels | `AG_Exemples et paramétrages_Mediavote.pdf`. Les mentions « 100 % fiable / interactif / ergonomique » de la plaquette sont reformulées sans pourcentage |
| Nouveau — V8.5 | 🟡 à vérifier | Vidéo `VRgyj2rw4GY` présentée comme « Les boîtiers de vote en assemblée générale » | Intitulé repris du To Do ; la vidéo est publiée sur la chaîne personnelle « Fanny Nomad » et n'a pas été visionnée lors de l'intégration |
| Nouveau — V8.6 | 🟢 publiée | Profils de Fanny Damon et Jean-Pierre Leclercq, portraits compris | Page « Qui sommes-nous » du site actuel |

Reformulations de la maquette du configurateur (arbitrage n° 9) : « 100 % sécurisée et conforme » →
« Sécurisé et conforme au RGPD » ; « Résultats fiables et incontestables » → « Résultats traçables et
vérifiables » ; « Adopté par des centaines d'organisations depuis plus de 20 ans » → « Depuis 1998 — au
service des organisations » ; « Données hébergées en France » → retirée, remplacée par « Développé en France ».
