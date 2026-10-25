# QA-REPORT — Prototype Media Vote

Version 1 — 22/08/2026. **Tous les résultats de ce rapport proviennent de tests réellement exécutés.**
Scripts reproductibles dans `qa/`. Aucun test annoncé n'a été supposé.

---

## 1. Périmètre livré

### Pages entièrement rédigées et développées — 3

| Page | URL | Poids HTML |
|---|---|---|
| Accueil | `/` | 55,1 Ko |
| Assemblées générales | `/solutions/vote-electronique-assemblee-generale/` | 54,3 Ko |
| Démonstration | `/demonstration/` | 22,6 Ko |

### Pages d'attente — 29
URL, `title`, meta description, H1, fil d'Ariane et maillage **figés et conformes au SEO-MAPPING**.
Contenu à produire en Phase 3bis. Elles rendent l'architecture navigable et testable, et garantissent qu'aucun lien du site n'est cassé.

Dont **3 articles** aux URL cibles de la migration — ils prouvent que le schéma de redirection `/fr/vote/<slug>` → `/actualites/<slug>` fonctionne.

**Total : 32 pages générées.**

### Composants réalisés
Header · navigation à sous-menus · menu mobile · fil d'Ariane · hero · bande de réassurance · cartes (solution, mode, secteur, preuve, article) · frise d'accompagnement · accordéon FAQ · bandeaux CTA · bandeau licence · mur de logos · témoignage · formulaire · notes de production · footer · emplacements réservés de visuels.

### Fichiers techniques
`sitemap.xml` (32 URL en `https`), `robots.txt`, favicon et logo SVG dérivés du monogramme.

---

## 2. Tests exécutés

### 2.1 Build — contrôles automatiques

```
32 pages · 599,5 Ko de HTML · 0 erreur · 0 avertissement
```

Le build vérifie à chaque exécution : formulations interdites, H1 unique, `title`, meta description, attributs `alt`, liens internes, pages orphelines, longueurs de `title` et de description.

**Trois erreurs réelles ont été détectées et corrigées** lors du premier build : trois liens vers des articles inexistants sur la page d'accueil. **Huit avertissements** de longueur de `title` et de meta description ont également été corrigés.

> Ce n'est pas un contrôle décoratif : il a trouvé de vrais défauts avant tout test au navigateur.

### 2.2 Rendu et structure — `qa/audit.mjs`

**8 pages × 6 largeurs (320, 375, 768, 1024, 1440, 1920 px) = 48 rendus.**

| Contrôle | Résultat |
|---|---|
| Débordement horizontal | ✅ 0 sur 48 rendus |
| Erreurs et avertissements console | ✅ 0 |
| H1 unique par page | ✅ |
| `<main id="main">` présent | ✅ |
| Lien d'évitement présent | ✅ |
| `lang="fr"` | ✅ |
| Hiérarchie de titres sans saut | ✅ |
| `aria-controls` pointant vers un élément existant | ✅ |
| `aria-expanded` cohérent avec l'état réel | ✅ |
| Champs de formulaire avec `<label>` associé | ✅ |
| Liens internes — 32 URL uniques testées | ✅ toutes en HTTP 200 |

### 2.3 Interactions — `qa/interactions.mjs`

**23 tests, 23 réussis.**

| Domaine | Tests |
|---|---|
| **Clavier** | Lien d'évitement en premier focus · contour de focus 3 px solide · sous-menu ouvert à `Entrée` · `Échap` referme et restitue le focus |
| **FAQ** | Ouverture au clic · ouverture indépendante (deux réponses ouvertes simultanément) · réponse présente dans le DOM même repliée, donc indexable |
| **Menu mobile** | Ouverture · défilement de page bloqué · focus déplacé dans le panneau · `Échap` ferme · focus restitué au bouton déclencheur |
| **Formulaire** | 5 messages d'erreur sur soumission vide · `aria-invalid` posé · focus sur le premier champ en erreur · messages en français · e-mail invalide détecté · **soumission valide n'entraîne aucun envoi simulé** |
| **Case à cocher** | `Espace` au clavier · clic sur le libellé |
| **Sans JavaScript** | Réponses FAQ visibles · sous-menus accessibles · contenu principal rendu |

### 2.4 Rendu visuel — `qa/shots.mjs`

**15 captures en résolution double**, dans `qa/` : accueil desktop (hero, besoins, modes, méthode, licence, sécurité, footer), accueil mobile (hero, cartes), page AG (desktop hero, émargement, mobile), démonstration (desktop, mobile), menu mobile ouvert.

Chaque capture a été **relue visuellement**, ce qui a permis de détecter deux défauts invisibles aux tests automatiques (voir §3).

### 2.5 Performance — mesures réelles

| Ressource | Poids |
|---|---|
| HTML page d'accueil | 55,1 Ko |
| CSS complet | 39,0 Ko |
| JavaScript | 8,9 Ko |
| **Total page d'accueil** | **102,9 Ko** — cible < 400 Ko ✅ |
| Site complet | 748 Ko |

**Requêtes tierces : 0.** Aucun script externe, aucune police distante, aucune bibliothèque.

> **Note honnête** : les Core Web Vitals (LCP, INP, CLS) **n'ont pas été mesurés en conditions réelles**. Le site n'est pas déployé et ne charge pas encore ses images définitives. Les valeurs seront à mesurer après intégration des captures ProVote® et mise en ligne. Voir §5.

---

## 3. Problèmes détectés et corrigés

Sept défauts réels, tous corrigés et vérifiés.

| # | Problème | Détection | Correction |
|---|---|---|---|
| 1 | Trois liens vers des articles inexistants en page d'accueil | Contrôle de build | Création des trois pages articles aux URL cibles de la migration |
| 2 | Huit `title` ou meta descriptions hors cible | Contrôle de build | Réécriture |
| 3 | **Débordement horizontal de 12 px à 320 px** sur le mur de logos | Test multi-largeurs | Les pistes `1fr` ont un minimum `auto` qui s'élargit sur un mot long (« internationale »). Passage à `minmax(0, 1fr)` sur **toutes** les grilles du site, plus `overflow-wrap: break-word` |
| 4 | Les deux CTA du hero s'empilaient en desktop, la colonne étant 10 px trop étroite | Relecture de capture | Colonne élargie de `1.05fr` à `1.15fr`, gouttière ajustée par palier |
| 5 | **Header collant masquant la cible des ancres** | Test clavier | Ajout de `scroll-padding-top: 88px` |
| 6 | **Message d'erreur fautif** : « Merci de renseigner votre **votre** organisation » | Test de formulaire | Le libellé d'erreur venait du `<label>`. Ajout d'un attribut `data-error-name` explicite par champ |
| 7 | **Chevrons géants dans le menu mobile** — ils occupaient toute la largeur du bouton | Relecture de capture | Le dimensionnement du chevron était enfermé dans la media query desktop ; la règle globale `svg { max-width:100% }` prenait le relais. Déclaration sortie de la media query |

**Correctif de confort ajouté** : CTA en pleine largeur sous 640 px, pour éviter l'effet d'escalier entre deux boutons de largeurs différentes.

> Les défauts **3, 5, 6 et 7 auraient échappé à une simple relecture de code**. Les deux plus visibles — les chevrons et le débordement à 320 px — ne sont apparus qu'à l'écran et au test de largeur.

### Fausses pistes écartées

Deux échecs de test ont été investigués et se sont révélés être des artefacts de l'outil, **non des défauts du site** :
- Un hero apparemment vide — la page était en réalité défilée à 4 489 px par l'outil de capture.
- Une case à cocher qui ne se cochait pas — le clic programmatique arrivait pendant un décalage de mise en page. Vérifié ensuite par les deux gestes réels d'un utilisateur : `Espace` au clavier et clic sur le libellé, tous deux fonctionnels.

---

## 4. Conformité au cahier des charges

| Exigence | État | Précision |
|---|---|---|
| HTML sémantique | ✅ | `header`, `nav`, `main`, `section`, `article`, `footer`, `address` |
| CSS structuré à variables | ✅ | 4 fichiers, tokens centralisés |
| JavaScript limité aux interactions utiles | ✅ | 8,9 Ko, quatre fonctions seulement |
| Responsive mobile-first | ✅ | `min-width` uniquement, testé de 320 à 1920 px |
| Accessibilité clavier | ✅ | Testé, 12 contrôles |
| Focus visibles | ✅ | Contour 3 px vérifié à l'exécution |
| Contrastes suffisants | ✅ | Calculés, non estimés — `DESIGN-SYSTEM.md` §2 |
| `prefers-reduced-motion` | ✅ | Implémenté |
| Images optimisées et différées | ⏳ | **Aucune image réelle** — visuels non fournis (Q-C1, Q-C2) |
| Dimensions réservées | ✅ | Emplacements à hauteur fixe, CLS structurellement nul |
| Core Web Vitals | ⏳ | **Non mesurés** — voir §5 |
| Métadonnées complètes | ✅ | `title`, description, canonique, robots |
| Open Graph | ✅ | Type, site, locale, title, description, url, image, Twitter card |
| Données structurées | ✅ | `Organization`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList` |
| Sitemap XML | ✅ | 32 URL, en `https` |
| Robots.txt | ✅ | |
| URL canoniques | ✅ | Auto-référentes |
| Fil d'Ariane | ✅ | Sur toutes les pages internes, avec `BreadcrumbList` |
| Titres H1/H2/H3 | ✅ | Vérifié automatiquement |
| FAQ accessible | ✅ | Testée, fonctionnelle sans JavaScript |
| Formulaires étiquetés | ✅ | Vérifié automatiquement |
| Messages d'erreur compréhensibles | ✅ | En français, testés |
| Protection antispam | ✅ | Honeypot + horodatage, sans CAPTCHA |
| Politique de cookies proportionnée | ✅ | **Aucun cookie, donc aucun bandeau** |
| Aucune API inventée | ✅ | Formulaire livré non raccordé, options documentées |

---

## 5. Limites connues

**À énoncer clairement plutôt qu'à masquer.**

1. **Aucun visuel réel.** Les captures ProVote® et les photographies ne sont pas fournies (Q-C1, Q-C2). Le site affiche des emplacements réservés explicitement identifiés. **La direction artistique définie repose sur le produit réel** — en l'état, la promesse visuelle n'est pas tenue.

2. **Core Web Vitals non mesurés.** Le poids est excellent (102,9 Ko pour l'accueil) et le CLS structurellement nul, mais LCP et INP ne se mesurent qu'en conditions réelles, avec les images définitives. À faire après déploiement.

3. **Polices non intégrées.** Le design system prévoit Inter auto-hébergée. Les fichiers WOFF2 ne sont pas encore embarqués : le rendu actuel utilise la police système de repli. Sans conséquence sur la mise en page, mais le rendu final différera légèrement.

4. **Formulaire non raccordé.** Interface, validation et messages complets ; **la soumission n'envoie rien et ne le simule pas**. Message explicite affiché à l'utilisateur, renvoyant vers le téléphone et l'e-mail. Dépend de Q-B8.

5. **29 pages sur 32 sont des pages d'attente.** Structure et métadonnées figées, contenu à rédiger.

6. **Audit d'accessibilité formel non réalisé.** Les contrôles automatiques et manuels sont conformes, mais un audit RGAA complet — avec taux de conformité — reste à mener avant de publier `/accessibilite`.

7. **Aucune donnée de Search Console.** Les priorités P0/P1 reposent sur la valeur commerciale déclarée et l'analyse concurrentielle, pas sur des volumes mesurés (Q-C8).

8. **Redirections non écrites.** Le plan est arrêté (`SITEMAP.md` §5) mais le fichier `.htaccess` reste à produire après le crawl exhaustif.

9. **Logo dérivé, non officiel.** Le SVG du header est une reconstitution du monogramme, aplatie pour rester lisible en favicon. **À remplacer par un export depuis `logo_OK.ai`.**

---

## 6. Informations encore à obtenir

Reprise de `QUESTIONS-CLIENT.md`, par ordre d'urgence.

| Réf. | Sujet | Bloque |
|---|---|---|
| **Q-A1** | Position face à la recommandation CNIL 2026 | Le contenu de `/securite-conformite/` |
| **Q-B3** | Certificat NF 552 en cours de validité | Toute mention de certification |
| **Q-B4** | Audit OPPIDA : réalisé ? date, périmètre | L'argument de sécurité le plus fort |
| **Q-B1 / Q-B2** | Chiffres de volumétrie et de capacité | Les preuves chiffrées de la page d'accueil |
| **Q-B5** | Hébergeur, localisation, durées de conservation, DPO | Réassurance et politique de confidentialité |
| **Q-B7** | Autorisations de logos et témoignages nominatifs | Le bloc références et le bloc témoignage |
| **Q-B8** | Destination des formulaires | **La mise en production** |
| **Q-B9** | Formation de la licence : incluse ou facturée ? | La page licence |
| **Q-B10** | Boîtier radio sans Internet | Le principal différenciant |
| **Q-C1 / Q-C2** | Captures ProVote® et photographies | **La qualité visuelle du site** |
| **Q-C6** | Mentions légales à jour | La mise en production |
| **Q-C8** | Export Search Console | **La bascule** |

---

## 7. Étapes avant mise en production

### Bloquantes

1. Raccorder le formulaire à une destination validée et **tester un envoi réel de bout en bout** (Q-B8).
2. Obtenir l'export Search Console et **produire la table de redirections complète des 160 URL** (Q-C8).
3. Rédiger les mentions légales et la politique de confidentialité à jour (Q-B5, Q-C6).
4. Trancher les affirmations en statut 🔴 de `CONTENT-VALIDATION.md`, ou les retirer définitivement.
5. Rédiger les 29 pages restantes, ou décider d'un lancement progressif — les pages d'attente ne peuvent pas être publiées.
6. Intégrer les captures ProVote® et les photographies (Q-C1, Q-C2).
7. Remplacer le logo dérivé par l'export officiel.

### Nécessaires

8. Intégrer les fichiers WOFF2 d'Inter, auto-hébergés.
9. Produire les images Open Graph (1200 × 630) des pages P0.
10. Mesurer les Core Web Vitals en conditions réelles.
11. Réaliser l'audit RGAA formel et publier `/accessibilite` avec un taux réel.
12. Configurer la surveillance d'expiration SSL et de domaine — **demande explicite du brief**, motivée par des interruptions passées.
13. Tester les 160 redirections : code 301, cible atteinte, aucune chaîne.
14. Vérifier que les PDF indexés (`/files/provote-by-mediavote-ag_*.pdf`) sont dépubliés ou corrigés — ils portent des mentions bloquées.
15. Vérifier les liens de réseaux sociaux (LinkedIn à confirmer).

### Recommandées

16. Décider de la mesure d'audience (Q-C7). Recommandation : solution sans cookie, pour éviter tout bandeau.
17. Déposer la marque à l'INPI — hors périmètre, mais la visibilité accrue augmente l'exposition.
18. Mettre en place un test de non-régression automatisé au déploiement, en réutilisant `qa/audit.mjs`.

---

## 8. Reproduire ces tests

```bash
node build.js
cd dist && python3 -m http.server 4321 &
node qa/audit.mjs
node qa/interactions.mjs
node qa/shots.mjs
```

Les scripts requièrent `playwright-core`, installé hors du projet : **le livrable déployé n'a aucune dépendance.**

---

## 9. En résumé

Le prototype est **fonctionnel, testé et conforme** sur tout ce qui relève de notre maîtrise : structure, accessibilité, responsive, performance, interactions, contrôles éditoriaux.

Sept défauts réels ont été trouvés et corrigés, dont quatre qu'une relecture de code n'aurait pas détectés.

Ce qui manque ne relève pas du développement mais des **preuves et des visuels** : sans les captures ProVote®, le site décrit un produit que le visiteur ne verra jamais ; sans les réponses aux questions bloquantes, il ne peut pas être mis en ligne.

**Le site est prêt à recevoir ces éléments. Il n'est pas prêt à être publié sans eux.**
