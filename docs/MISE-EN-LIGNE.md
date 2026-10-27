# Mise en ligne sur www.media-vote.com

État au 27/10/2026 : le site est construit et publié automatiquement par GitHub Actions depuis le dépôt
`FDN-ai/mediavote-site` (compte GitHub de Mediavote), en **aperçu non indexable** sous
`https://fdn-ai.github.io/mediavote-site/`. La mise en production consiste à brancher le nom de domaine :
aucune modification du site n'est nécessaire.

## Comptes et services (tous gratuits)

| Service | Compte | Rôle |
|---|---|---|
| GitHub | `FDN-ai` (Mediavote) | Sources du site, construction et hébergement (GitHub Pages), articles enregistrés par `/admin/` |
| Cloudflare | Fanny.damon@media-vote.com | Serveur de connexion de `/admin/` (worker `mediavote-admin-auth`) ; peut aussi porter le DNS |
| Zoho CRM | Mediavote | Réception des formulaires du site (formulaire web « Site web Mediavote — prise de contact ») |

## Étapes, dans l'ordre

1. **DNS** (chez le registrar de media-vote.com, ou Cloudflare si le domaine y est rapatrié) :
   - `www` → enregistrement **CNAME** vers `fdn-ai.github.io`
   - apex `media-vote.com` → enregistrements **A** vers `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub Pages redirige l'apex vers `www`)
   - Chez Cloudflare, laisser ces enregistrements en « DNS only » (nuage gris) le temps que GitHub
     délivre le certificat.
2. **Dans le dépôt** : créer le fichier `public/CNAME` contenant une seule ligne, `www.media-vote.com`,
   et le pousser sur `main`. Le workflow détecte ce fichier et construit alors le site de production
   (à la racine du domaine, indexable, `sitemap.xml` et `robots.txt` définitifs).
3. **GitHub → Settings → Pages** : vérifier que « Custom domain » affiche `www.media-vote.com`, attendre
   la vérification DNS, cocher **Enforce HTTPS** quand le certificat est émis (quelques minutes à
   quelques heures).
4. **Zoho CRM** → Formulaires web → « Site web Mediavote — prise de contact » → détails : remplacer l'URL
   de redirection par `https://www.media-vote.com/merci/` (docs/FORMULAIRES.md).
5. **GitHub → Settings → Developer settings → OAuth Apps → « Mediavote — administration du site »** :
   remplacer la Homepage URL par `https://www.media-vote.com/`. L'URL de retour
   (`…workers.dev/callback`) ne change pas.
6. **Basculer l'ancien site** : une fois `https://www.media-vote.com/` servi par GitHub Pages, arrêter
   l'ancien hébergement. Les anciennes adresses listées dans `docs/SEO-MAPPING.md` sont déjà redirigées
   par le nouveau site.
7. **Vérifier** : `https://www.media-vote.com/` (accueil), `/admin/` (connexion GitHub), un envoi de
   formulaire de test (titre « TEST SITE — à supprimer », puis le supprimer dans Zoho), Google Search
   Console (envoyer `https://www.media-vote.com/sitemap.xml`).

## Revenir en arrière

Supprimer `public/CNAME` et le pousser : le site redevient un aperçu non indexable sous
`fdn-ai.github.io/mediavote-site/`, et le DNS peut être remis sur l'ancien hébergement.

## Qui fait quoi au quotidien

- **Articles Actualités** : l'équipe Mediavote, depuis `https://www.media-vote.com/admin/` (docs/CMS.md).
- **Textes des pages, visuels, nouvelles pages** : modification des sources du dépôt (docs/CONTENT-MODEL.md),
  chaque `git push` sur `main` reconstruit et publie le site en une à deux minutes.
- **Formulaires** : les prospects arrivent dans Zoho CRM, module Prospects, source « Site Web Mediavote ».
