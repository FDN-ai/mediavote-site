# RESOURCE-INVENTORY — Refonte du site MEDIA VOTE

Inventaire exhaustif des ressources disponibles au 22/08/2026, de leur fiabilité et de leur usage prévu.
Aucun fichier source n'a été modifié ni déplacé.

**Légende fiabilité**
- 🟢 **Source primaire** — document produit par Media Vote, exploitable directement (sous réserve d'actualisation).
- 🟡 **Source de travail** — analyse, hypothèse ou recommandation à valider avant publication.
- 🔴 **Source non vérifiée / périmée** — ne pas publier en l'état.

---

## 1. Brief et cadrage — `01_website/01_brief/`

| Fichier | Nature | Informations utiles | Fiabilité | Usage prévu |
|---|---|---|---|---|
| `01_brief_meeting_client.pdf` (+ `.pages`) | Compte rendu structuré de la réunion de cadrage client (takeaways, notes horodatées, action items) | Décision d'architecture « segmenter par besoin puis par utilisateur » ; **stack imposée : 100 % HTML/CSS codé** ; cible B2B **50 à 5 000 votants** ; **~60 % de signature après démo** ; CRM **Zoho** connecté au site ; hébergement **OVH** conservé ; volonté d'augmenter le panier moyen ; positionnement « taille humaine » ; boîtier = ré­flexion de marque en cours ; benchmark demandé (Neovote, i-Périclès, Hypermaster, WeChooz) ; INPI non déposé | 🟢 | Fondation du PROJECT-BRIEF, de l'arborescence, du choix technique et du territoire éditorial |
| `02_orientations_client.pdf` (+ `.pages`) | Note d'intention du client accompagnant l'étude SEO | 7 objectifs formalisés (positionnement, visibilité, structuration par offre/typologie, intention commerciale, **anti-cannibalisation**, architecture évolutive, conversion) ; différenciants à préserver : expertise historique, accompagnement humain, boîtier, en ligne, hybride, **expertise AG** | 🟢 | Objectifs mesurables du projet ; critères de validation de l'arborescence |
| `Mediavote solution de votes AG, CA, CSE.webloc` | Raccourci | `https://www.media-vote.com/fr/` | 🟢 | Site de référence pour l'audit de l'existant et le plan de redirections |

**Note** : les `.pages` sont les sources Apple Pages des PDF ; contenu identique, non ré-exploité.

---

## 2. Documents produit et commerciaux — `01_website/02_docs_mediavote/`

| Fichier | Nature | Informations utiles | Fiabilité | Usage prévu |
|---|---|---|---|---|
| `ProVote® by Mediavote_AG.pdf` | Plaquette de présentation AG/CA (~17 slides) | Synchrone/asynchrone ; multi-terminaux ; émargement automatisé ; PV automatisé ; packs **Licence** vs **Prestation** ; options de vote (quorum automatisé, pouvoirs et limitation de pouvoirs, collèges, majorité absolue/qualifiée/relative, bulletin secret/nominatif, exclusion de vote, ajout de vote en séance, graphes) ; élections uninominale/plurinominale/liste/hors liste ; émargement (simple, multiple, signature digitale, case à cocher, sortie de séance) ; rapports XLS et PDF ; espace documents ; accès Président en lecture seule ; titulaire/suppléant ; performance annoncée (<2 s pour 1 000 votants, <3 s pour 10 000) ; « développement par des polytechniciens spécialisés en cybersécurité » ; hébergement France ; aucun cookie ; coffre-fort numérique | 🟢 pour les **fonctionnalités**, 🟡 pour les **chiffres et allégations de sécurité** | Source principale des pages `/solutions/.../assemblee-generale`, `/provote`, `/provote/fonctionnalites`, `/offres/accompagnement-sur-mesure` |
| `ProVote® CSE by Mediavote.pdf` | Plaquette CSE (33 slides), la plus détaillée du corpus | Cadre juridique CSE (art. L. 2314-4 s. et R. 2314-2 s. du Code du travail, arrêtés 2007/2019, décrets 2019-1345 et 2020-1545) ; PAP et rétroplanning automatisés ; CERFA généré ; **4 profils** (électeur, organisateur RH, administrateur = chef de projet Media Vote, bureau de vote) ; **clés de dépouillement fragmentées** (≥ 3, seuil paramétrable) ; scellement des urnes ; **authentification multicanale** (SMS, e-mail, code DÉFI, courrier — 2 canaux minimum) ; 4 niveaux de chiffrement ; séparation urne d'émargement / urne de bulletins ; réplication sur 2 datacenters ; journaux d'audit détaillés ; contrôle d'intégrité par HASH toutes les 5 min ; mot de passe 10 caractères non stocké, 5 tentatives/30 min ; **audit OPPIDA** (CESTI agréé ANSSI, accrédité COFRAC) — audit de code + tests d'intrusion, 8 scénarios ; **NF 552** ; **RGAA** ; **mix papier/digital** ; formules de hotline (8h-18h, 24/24 5j, 24/7) avec délai max annoncé 15 min ; formation filmée du bureau de vote ; déconnexion auto à 20 min | 🟢 pour le **fonctionnel et le juridique**, 🔴 pour les mentions **NF 552 / CNIL / RGAA** telles que formulées (voir CONTENT-VALIDATION) | Source principale de `/solutions/elections-cse`, `/securite-conformite`, `/offres/accompagnement-sur-mesure` |
| `Licence Annuelle_ProVote®.pdf` | Fiche commerciale de la licence annuelle | Critères d'éligibilité (>200 votants, >8 CA/an, >4 AG/an, multi-sites, rationalisation budget) ; **3 niveaux Essentielle / Avancée / Premium** avec matrice de fonctionnalités (résolution, élection, délégation de pouvoir, émargement, espace documents, assistance admin) ; **grille tarifaire complète 50 €→790 €/mois par tranche de votants** ; engagement 12 mois ; formation **820 € HT** unique, jusqu'à 5 utilisateurs ; sessions illimitées ; « jusqu'à 100 000 participants en asynchrone » ; 4 scénarios narratifs (présentiel, 40 % distanciel, grève/intempéries, imprévu) ; **« Depuis 25 ans »** | 🟢 pour la **structure de l'offre**, 🔴 pour les **tarifs** (décision projet : ne pas publier) et pour **« 25 ans »** et **« 100 000 participants »** | Source de `/offres/licence-annuelle-provote` ; **tarifs exclus de la version publique** |
| `Gestion de votre projet ProVote®.pdf` | Méthodologie d'accompagnement (10 slides) | **Jalons J-30 / J-15 / J-5 / J0** ; kit gestion de projet en 4 documents (brief, matrice votants, matrice votes, rétroplanning) ; test systématique jusqu'à 20 personnes ; **accès Pilotage** multi-utilisateur en lecture seule (scrutateurs, huissier, avocat) ; chef de projet à double compétence juridique + numérique ; présence physique ou visio en synchrone ; gestion des aléas en séance ; « **création en 1998**, plus de 25 ans » ; « **plus de 100 000 votants par an** » ; « tarifs préférentiels en commandes groupées » | 🟢 pour la **méthode** (meilleur actif différenciant du corpus), 🔴 pour les **chiffres** | Colonne vertébrale de `/offres/accompagnement-sur-mesure` et du bloc « Déroulement » de la page d'accueil |
| `Etude concurence.xlsx` | Étude concurrentielle qualitative (1 feuille) | 9 concurrents notés et hiérarchisés ; segmentation en **3 marchés** (boîtier présentiel / plateforme en ligne-hybride / solution complète avec accompagnement humain) ; priorité 1 : Hypermaster, Votebox, SDTI, Gedivote, Kercia, Neovote ; priorité 2 : i-Périclès, Voteer, assemblee-generale.com ; **différenciant identifié : boîtier radio ne nécessitant pas Internet + chef de projet sur place + gestion pouvoirs/pondérations + restitutions XLS/PDF** | 🟡 (analyse, sans volumes de recherche ni sources datées) | Positionnement, différenciation, arguments de la page d'accueil et des pages `/modes/` |

---

## 3. Architecture SEO — `01_website/03_arborescence/`

| Fichier | Nature | Informations utiles | Fiabilité | Usage prévu |
|---|---|---|---|---|
| `Media-Vote-Architecture-SEO-2026.xlsx` | **Document le plus structurant du corpus.** 6 feuilles : Synthèse, Architecture SEO, Maillage interne, Redirections, Templates de contenu, Backlog éditorial, Sources et limites | **26 pages** dont 12 P0 ; matrice complète par page (priorité, URL, intention, audience, mot-clé principal et secondaires, H1, rôle, CTA, liens internes, action de migration, indexation) ; **24 liens internes contextuels avec ancres** ; **16 redirections 301** ; 6 templates éditoriaux avec règle anti-cannibalisation ; **12 sujets de backlog** ; décisions validées : *Media Vote = marque / ProVote® = plateforme*, *CTA = demander une démonstration*, *licence P0 sans prix publics*, *boîtier = conserver la prestation, isoler la future vente* ; points marqués **« À valider » (actualités)** et **« Critique — Client + juridique » (sécurité)** | 🟡 — document de travail explicitement présenté comme tel ; les volumes de recherche et positions **ne sont pas fournis** | **Base directe des livrables Phase 2** (SITEMAP, SEO-MAPPING, INTERNAL-LINKING, CONTENT-MODEL, NAVIGATION), après arbitrage des écarts listés au §6 |

---

## 4. Identité graphique — `02_branding/`

| Fichier | Nature | Informations utiles | Fiabilité | Usage prévu |
|---|---|---|---|---|
| `3_Logo_Mediavote.png` | Logo RGB, 847 × 817 px, fond transparent | Monogramme **M + V** inscrit dans un anneau ouvert. Palette extraite : anthracite **#23242B**, bleu profond **#003C9C → #0A47A8**, bleu clair **#2E90DA → #3CB4E4** ; construction en dégradés et en biseaux | 🟢 (fichier officiel) | Base chromatique du design system. **Résolution insuffisante et format inadapté pour un header web** → dérivation SVG nécessaire à partir du vectoriel |
| `logo_OK.ai` / `logo_OK.eps` | Logo vectoriel | Sources vectorielles du même logo | 🟢 | **Source à convertir en SVG optimisé** (header, favicon, Open Graph) |

**Manques identifiés** : pas de charte graphique, pas de logo horizontal, pas de version monochrome, pas de favicon, pas de police de marque définie, pas de photothèque, **aucune capture d'écran de ProVote®**.

---

## 5. Contenus et médias externes

| Ressource | Nature | Informations utiles | Fiabilité | Usage prévu |
|---|---|---|---|---|
| `https://www.media-vote.com/fr/` | Site actuel | H1 actuel « Le vote numérique sécurisé en toute simplicité » ; navigation en 9 entrées principales + 6 secondaires ; **chiffres affichés : 600+ AG/CA/CSE, 350 000 votants/an, 2 000 votants synchrones, 50 000 asynchrones, « 25 ans »** ; packs Prestation et Licence ; témoignage attribué « Jeunes Agriculteurs » | 🟡 — site publié mais chiffres non sourcés et incohérents entre pages | Audit de l'existant, plan de redirections, réutilisation encadrée des contenus |
| `sitemap.xml` (site actuel) | Sitemap XML | **160 URLs** : 16 pages structurelles + **~144 articles** sous `/fr/vote/…`, avec `lastmod` jusqu'au 28/03/2026. Sitemap déclaré en **`http://`** et non `https://` | 🟢 (donnée technique) | **Actif SEO majeur** : le plan de redirections du fichier client ne couvre que 16 URLs sur 160. Voir QUESTIONS-CLIENT Q-B4 |
| `robots.txt` (site actuel) | Robots | `Disallow:` vide, sitemap déclaré en http | 🟢 | À reconstruire proprement |
| `/fr/nos-references` | Page références | ~105 organisations citées par secteur : Amnesty International, UNICEF, Secours Catholique, Sanofi, Valeo, Klepierre, GL Events, SPIE Batignolles, Crédit Mutuel, HAS, Ministère de l'Éducation nationale, CESE, Convention Citoyenne pour le Climat, Agences de l'eau, CCI Paris IdF, FFF, FSPF, ADMR, Mutualité Française… | 🟡 — publiés aujourd'hui, mais **droit d'usage des logos non documenté** | Preuve sociale de `/references` et de la page d'accueil, **après validation des autorisations** |
| `/fr/qui-sommes-nous` | Page entreprise | **Création 1998** ; valeurs (réactivité, accompagnement, fiabilité technique, sur-mesure et confidentialité) ; **Fanny Damon**, responsable des opérations (interfaces, ergonomie, UX ; formation communication numérique et psychologie cognitive) ; **Jean-Pierre Leclercq**, directeur commercial (25 ans d'audiovisuel et d'outils de communication à distance) | 🟢 pour l'histoire et l'équipe | Base de `/a-propos` et du récit de marque |
| `Certificat NF 552 n° 552/0003-1` (publié sur le site actuel) | Certificat AFNOR / INFOCERT | Titulaire **MEDIAVOTE**, produit **PROVOTE version 1**, référentiel **NF LOGICIEL PROTECTION DES DONNÉES PERSONNELLES (NF552 V1.0)** + ISO/CEI 25051:2014. Émis le **20/05/2022**, **valable jusqu'au 20/05/2023** | 🔴 **Périmé sur le document public et de portée différente de l'usage qui en est fait** | **Blocage publication** — voir CONTENT-VALIDATION §1 |
| `MEDIAVOTE - YouTube.webloc` | Chaîne YouTube `@mediavote7787` | Contenus vidéo existants (à inventorier avec le client) | 🟡 — contenu non audité | Vidéos de démonstration, témoignages, page `/demonstration` |
| `https://www.neovote.com/` | Concurrent | Positionnement institutionnel fort : références d'État, CNIL-2 et CNIL-3, ANSSI, ISO 27001, HSM EAL5+, garantie assurantielle chiffrée, témoignages CGT et MEDEF, temps de réponse annoncé | 🟡 (site tiers) | Benchmark : niveau de preuve à atteindre, sans copier le registre régalien |
| `https://www.wechooz.fr/` | Concurrent | CTA « Demander une démo » dominant ; **6 500 clients** ; témoignages vidéo (Accor, Keyrus, Alan) ; double positionnement juridique + technologique ; ressources et livres blancs ; structure de page répétée « titre → texte → visuel → bénéfices → Découvrir » | 🟡 (site tiers) | Benchmark conversion et modèle de page |
| CNIL — délibération **n° 2026-045 du 19 mars 2026** | Source réglementaire primaire | **Abroge les délibérations n° 2010-371 et n° 2019-053 du 25 avril 2019.** Conserve la logique des 3 niveaux de risque, renforce authentification et vérifiabilité. Les scrutins déjà en préparation pour 2026 peuvent rester sous la version 2019 | 🟢 (Légifrance / CNIL) | **Impacte tous les documents Media Vote**, qui citent uniquement la délibération abrogée |
| AFNOR / INFOCERT — référentiel NF552 | Source primaire | NF552 = **« NF Logiciel Protection des Données Personnelles »**, certification de conformité RGPD du logiciel, adossée à ISO/CEI 25051 | 🟢 | Reformulation obligatoire : NF 552 atteste de la **protection des données**, pas de la sécurité du scrutin |

---

## 6. Contradictions et informations à confirmer

| # | Sujet | Constat | Impact | Traitement |
|---|---|---|---|---|
| C1 | **Ancienneté** | « 22 ans » (plaquette AG) vs « 25 ans » (licence, gestion de projet) vs « 24 ans » (site) vs « création en 1998 » | Chiffre affiché sur la page d'accueil et dans la marque | Retenir la **date d'origine, pas la durée** : « depuis 1998 ». Hypothèse de travail assumée |
| C2 | **Volume de votants** | « plus de 100 000 votants/an » (gestion de projet) vs « 350 000 votants/an » (site) | Preuve chiffrée majeure de la home | **Bloquant** avant publication — QUESTIONS-CLIENT Q-B1 |
| C3 | **Capacité technique** | « 2 000 synchrones / 50 000 asynchrones » (site) vs « jusqu'à 100 000 participants en asynchrone » (licence) vs « <3 s pour 10 000 votants » (plaquette AG) | Argument de scalabilité, opposable en avant-vente | **Bloquant** avant publication — Q-B2 |
| C4 | **NF 552** | Présenté comme preuve de **sécurité du vote** (« Sécuriser le vote ▪ Certifié norme 552 »), alors que le référentiel porte sur la **protection des données personnelles**. Certificat public **expiré depuis le 20/05/2023**, sur « ProVote version 1 » | Risque juridique et réputationnel direct | **Bloquant** — CONTENT-VALIDATION §1 |
| C5 | **CNIL** | Tous les documents s'appuient sur la délibération **2019-053, abrogée le 19/03/2026** | Argument de conformité obsolète face à des acheteurs avertis | **Bloquant** — Q-A1 |
| C6 | **RGAA** | « conforme à une grande majorité des 106 points » — formulation non conforme au RGAA, qui impose un taux de conformité et une déclaration d'accessibilité | Ne peut pas être publié tel quel | Reformuler ou supprimer — Q-B3 |
| C7 | **Boîtier** | Mode de vote et savoir-faire historique **vs** projet de nouvelle activité de vente/location, avec réflexion de marque distincte en cours | Structure la page `/modes/vote-par-boitier` | **Hypothèse retenue** : présenter le boîtier comme **mode de vote et prestation**, sans offre de vente/location. Conforme à la décision « conserver la prestation, isoler la future vente » |
| C8 | **Tarifs licence** | Grille détaillée dans le document commercial **vs** décision « page P0 **sans prix publics** » | — | Décision projet validée : **pas de tarifs publiés**. Le document reste un support d'avant-vente |
| C9 | **Marque** | « Mediavote » (documents, logo, e-mails) vs « Media Vote » (fichier d'architecture SEO, brief) | Cohérence de marque sur tout le site | **Bloquant léger** — Q-A3 |
| C10 | **Périmètre de migration** | Le plan de redirections client couvre 16 URLs ; le sitemap en compte **160** | Perte de trafic massive en cas d'oubli des ~144 articles | À traiter en Phase 2 — Q-B4 |
| C11 | **Arborescence** | Écarts entre le fichier SEO client et l'arborescence de la mission : `/modes-de-vote` vs `/modes`, `/media-vote` vs `/a-propos`, `/secteurs/*` en 3 pages vs hub `/secteurs`, absence de `/solutions/vote-conseil-administration` dans la mission | Structure d'URL définitive | Arbitrage proposé en Phase 2, décision client requise — Q-A2 |
| C12 | **Témoignages** | Un seul témoignage attribué repéré (« Jeunes Agriculteurs »), sans nom ni fonction ; le brief demande un dispositif d'avis clients | Bloc « Témoignage » de la home | Prévoir l'emplacement, contenu à collecter — Q-B5 |

---

## 7. Ressources manquantes pour terminer le projet

| Manque | Criticité | Conséquence si non fourni |
|---|---|---|
| Captures d'écran réelles de ProVote® (électeur, administrateur, résultats, émargement) | 🔴 Bloquant Phase 5 | Le parti pris visuel repose sur le produit réel ; sans captures, aucune preuve visuelle possible |
| Photographies d'accompagnement, d'assemblée, de boîtiers | 🔴 Bloquant Phase 5 | Retour aux clichés de banque d'images explicitement proscrits |
| Logo vectoriel exploitable en SVG + favicon | 🟠 Important | Dérivable des fichiers `.ai`/`.eps` fournis |
| Certificat NF 552 en cours de validité | 🔴 Bloquant publication | Mention à retirer |
| Autorisations d'usage des logos clients | 🟠 Important | Bloc « Références » à remplacer par des typologies anonymisées |
| Destination technique des formulaires (endpoint Zoho, e-mail, service tiers) | 🟠 Important | Formulaires livrés en interface non raccordée et documentés |
| Mentions légales à jour, politique de confidentialité, hébergeur, DPO | 🔴 Bloquant mise en production | Pages légales incomplètes |
| Export Search Console (URLs, clics, impressions, backlinks) | 🔴 Bloquant migration | Redirections à l'aveugle sur 144 articles |
| Accès OVH / DNS / propriété du domaine | 🟠 Important à la mise en production | — |

---

## 8. Synthèse de l'inventaire

- **13 fichiers sources** exploitables, **0 fichier modifié**.
- Le corpus est **très riche sur le fonctionnel et la méthode**, et **faible sur la preuve chiffrée et visuelle**.
- Le meilleur actif différenciant du dossier n'est pas la technologie : c'est la **méthode d'accompagnement documentée (J-30 → J0, kit projet, test systématique, accès Pilotage, gestion des aléas en séance)**. C'est le seul élément qu'aucun concurrent audité ne détaille à ce niveau.
- Le principal risque du projet est **la conformité des allégations** (NF 552, CNIL, RGAA, chiffres), pas la production.
