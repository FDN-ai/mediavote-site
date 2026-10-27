# Rubrique Actualités — Decap CMS

Les articles sont des fichiers Markdown dans `content/actualites/`. L'interface `/admin/`
(Decap CMS, open source) permet de les créer, modifier, prévisualiser et publier sans
toucher au code. Le site se reconstruit automatiquement.

## 1. Rédiger en local, dès maintenant (sans GitHub)

```bash
npm run cms
```

puis ouvrir **http://localhost:4400/admin/**. Le bouton « Se connecter » ouvre directement
l'interface (mode local). Chaque enregistrement écrit le fichier dans `content/actualites/`
et reconstruit le site : l'article est visible sur http://localhost:4400/actualites/ quelques
secondes plus tard. Les images ajoutées vont dans `public/assets/img/actualites/`.

Un article enregistré sans être publié reste en brouillon (visible en local, signalé « Brouillon »,
jamais mis en ligne en production).

## 2. Rédiger depuis GitHub (dépôt `FDN-ai/mediavote-site`, compte Mediavote)

Le dépôt contient les sources du site. À chaque modification sur la branche `main`, l'action
`.github/workflows/pages.yml` reconstruit le site et le publie sur GitHub Pages.

Pour que `/admin/` puisse se connecter à GitHub depuis le navigateur, il faut un **serveur de
connexion OAuth** (GitHub l'exige ; GitHub Pages ne peut pas l'héberger). **Fait le 27/10/2026** :
le serveur tourne sur le Cloudflare de Mediavote (`https://mediavote-admin-auth.fanny-damon-5c6.workers.dev`,
worker `mediavote-admin-auth`) et l'application OAuth « Mediavote — administration du site » existe
sur le compte GitHub `FDN-ai`. Vérifié le 27/10/2026 en ligne : connexion GitHub depuis `/admin/`,
création d'un brouillon (branche `cms/actualites/…` + pull request dans le dépôt), suppression du
brouillon. Les deux étapes ci-dessous ne sont à refaire que si l'un des deux comptes change :

### a. Créer l'application OAuth sur GitHub

GitHub → *Settings* → *Developer settings* → *OAuth Apps* → *New OAuth App* :

| Champ | Valeur |
|---|---|
| Application name | Mediavote — administration du site |
| Homepage URL | https://fdn-ai.github.io/mediavote-site/ |
| Authorization callback URL | `https://<nom-du-worker>.workers.dev/callback` (adresse obtenue à l'étape b) |

Noter le **Client ID** et générer un **Client secret**.

### b. Déployer le serveur de connexion (Cloudflare Worker, gratuit)

Le code est dans `tools/decap-oauth-worker/`. Avec un compte Cloudflare (gratuit) :

```bash
cd tools/decap-oauth-worker
npx wrangler login
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
npx wrangler deploy
```

La commande affiche l'adresse du worker (`https://….workers.dev`). La reporter :
- dans `public/admin/config.yml` → `base_url`
- dans l'application OAuth GitHub → *Authorization callback URL* = cette adresse + `/callback`

Ensuite, **https://fdn-ai.github.io/mediavote-site/admin/** → « Se connecter avec GitHub ».
Chaque rédacteur doit avoir un compte GitHub et un accès en écriture au dépôt.

## 3. Circuit de publication

1. **Enregistrer** : l'article est un brouillon, dans l'onglet *Workflow* de l'administration.
2. **Prêt pour relecture** : une autre personne peut le relire et le modifier.
3. **Publier** : le fichier est ajouté à `main`, le site se reconstruit (une à deux minutes).

Les contrôles du site s'appliquent : une formulation interdite (« certifié CNIL », « 100 % sécurisé »),
un titre trop long ou un lien cassé **font échouer la construction** et l'article n'est pas mis en ligne.
L'échec apparaît dans l'onglet *Actions* du dépôt GitHub, avec la phrase en cause.

## 4. Passer sur le GitHub de Mediavote

À la fin du travail : créer le dépôt chez Mediavote, y pousser le contenu de celui-ci, puis
remplacer `repo:` dans `public/admin/config.yml`, l'URL de l'application OAuth et `--base=` dans
le workflow (ou le retirer pour une mise en ligne sur le domaine `media-vote.com`).

## 5. Champs d'un article

`title`, `date`, `category`, `description` (chapô, 60 à 170 caractères, aussi utilisé comme
description pour Google), `image` et `image_alt` (facultatifs), `draft`, `body` (Markdown :
titres 2 et 3, listes, liens, citations, images, tableaux).
