# Site Media Vote — refonte

Site vitrine B2B statique. **HTML / CSS / JavaScript natifs, zéro dépendance dans le livrable.**

## Démarrer

```bash
node build.js          # build d'aperçu (notes de production visibles)
node build.js --prod   # build de production (notes retirées, contrôles bloquants)
cd dist && python3 -m http.server 4321
```

Le site généré se trouve dans `dist/` : des fichiers statiques, déployables tels quels sur OVH.

## Organisation

| Dossier | Rôle |
|---|---|
| `docs/` | Documents de cadrage — audit, brief, architecture, SEO, design system, QA |
| `content/` | Contenus rédactionnels de référence (Markdown annoté) |
| `src/` | Composants, gabarit, données et pages |
| `styles/` | Système CSS — tokens, base, layout, composants |
| `scripts/` | JavaScript d'interaction (menu, FAQ, formulaires) |
| `qa/` | Scripts de test et captures de validation |
| `dist/` | **Généré** — ne pas éditer à la main |

## Contrôles automatiques au build

Le build échoue si :
- une formulation interdite apparaît (« 100 % sécurisé », « certifié CNIL », « certifié NF 552», référence à la délibération CNIL abrogée 2019-053…) ;
- une page n'a pas exactement un H1, un `<title>` ou une meta description ;
- une image n'a pas d'attribut `alt` ;
- un lien interne pointe vers une page inexistante.

Il avertit si un title dépasse 60 caractères ou si une meta description sort de la fourchette 140–158.

Ces contrôles traduisent en garanties techniques les règles de `docs/CONTENT-VALIDATION.md`.

## Tests

```bash
cd dist && python3 -m http.server 4321 &   # le serveur doit tourner
node qa/audit.mjs          # débordements, console, structure, liens — 8 pages × 6 largeurs
node qa/interactions.mjs   # clavier, menu, FAQ, formulaire, rendu sans JavaScript
node qa/shots.mjs          # captures de validation dans qa/
```

Ces scripts requièrent `playwright-core` ; ils sont volontairement **hors du périmètre du site**
et n'ajoutent aucune dépendance au livrable déployé.

## État

Voir `docs/QA-REPORT.md` pour le détail des tests, des limites connues et des étapes
restant avant mise en production.
