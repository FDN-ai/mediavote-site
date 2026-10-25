# DESIGN-SYSTEM — Media Vote

Version 1 — 22/08/2026. **Tous les ratios de contraste indiqués ont été calculés**, non estimés.

---

## 1. Positionnement visuel

### L'intention
Une identité de **modernité institutionnelle**. Media Vote intervient sur des moments où une organisation prend ses décisions et où une erreur se conteste devant un juge. L'interface doit inspirer le même sérieux qu'un document officiel, avec la clarté d'un outil contemporain.

### Les sept qualités à traduire
Confiance · maîtrise · technologie · précision · accompagnement · clarté · modernité institutionnelle.

### Ce que nous écartons délibérément

| Écarté | Pourquoi |
|---|---|
| Cadenas, boucliers, empreintes digitales | Signalent la sécurité sans jamais la démontrer. Un acheteur averti y voit un aveu de faiblesse |
| Circuits imprimés, réseaux de points, fonds de code | Vocabulaire visuel de la cybersécurité générique, sans rapport avec un vote |
| Dégradés violet-cyan, néons, effets « futuristes » | Vieillissent en dix-huit mois et contredisent l'ancrage depuis 1998 |
| Personnages souriants de banque d'images | Détruisent la crédibilité auprès d'une direction juridique |
| Animations d'apparition sur chaque section | Ralentissent la lecture d'un décideur pressé |
| Glassmorphism, ombres portées épaisses | Effets de mode |

### Ce que nous privilégions
Captures réelles de ProVote® · photographies d'assemblée et d'accompagnement · boîtiers en situation · schémas explicatifs sobres · preuves documentaires · **typographie forte et lisible** · beaucoup de blanc · une grille visible.

> **Le principe directeur.** Sur ce site, le contenu est la démonstration. Le design doit le rendre lisible et hiérarchisé — pas le décorer.

---

## 2. Palette chromatique

### Origine
Extraite du logo Media Vote (`3_Logo_Mediavote.png`) : monogramme anthracite et bleu, dans un anneau en dégradé. Trois couleurs y sont identifiables : anthracite `#23242B`, bleu profond `#003C9C`, bleu clair `#2E90DA`.

Ces valeurs servent de **point de départ**, pas de contrainte. L'anthracite du logo est retenu tel quel ; les bleus sont ajustés pour atteindre les contrastes requis en usage web.

### Tokens

```css
:root {
  /* Encre et neutres */
  --mv-ink:        #14161C;  /* texte principal — 18.08:1 sur blanc */
  --mv-ink-2:      #4A4F5C;  /* texte secondaire — 8.19:1 */
  --mv-ink-3:      #6B7280;  /* texte tertiaire, légendes — 4.83:1 */
  --mv-anthracite: #23242B;  /* fonds sombres — issu du logo */

  /* Bleu de marque */
  --mv-blue:       #0A47A8;  /* couleur d'action — 8.47:1 sur blanc */
  --mv-blue-dark:  #08387F;  /* survol, focus — 11.16:1 */
  --mv-blue-light: #2E90DA;  /* accents graphiques — 3.43:1, jamais du texte */
  --mv-blue-on-dark: #6BB8EE;/* liens sur fond sombre — 8.37:1 sur --mv-ink */

  /* Surfaces */
  --mv-white:      #FFFFFF;
  --mv-surface:    #F5F7FA;  /* sections alternées */
  --mv-surface-blue: #EBF2FC;/* encarts de mise en avant */

  /* Bordures */
  --mv-border:     #D5DAE3;  /* séparateurs décoratifs */
  --mv-border-ui:  #7C8698;  /* champs de formulaire — 3.67:1, requis */

  /* États */
  --mv-success:    #0F7A4F;  /* 5.36:1 */
  --mv-error:      #B3261E;  /* 6.54:1 */
  --mv-warning:    #8A5A00;
}
```

### Contrastes vérifiés

| Combinaison | Ratio | Conformité |
|---|---|---|
| `--mv-ink` sur blanc | **18,08:1** | AAA |
| `--mv-ink-2` sur blanc | **8,19:1** | AAA |
| `--mv-ink-3` sur blanc | **4,83:1** | AA |
| `--mv-blue` sur blanc | **8,47:1** | AAA |
| Blanc sur `--mv-blue` | **8,47:1** | AAA |
| Blanc sur `--mv-anthracite` | **15,46:1** | AAA |
| `--mv-blue-on-dark` sur `--mv-ink` | **8,37:1** | AAA |
| `--mv-ink` sur `--mv-surface` | **16,85:1** | AAA |
| `--mv-blue` sur `--mv-surface-blue` | **7,52:1** | AAA |
| `--mv-border-ui` sur blanc | **3,67:1** | AA composants |
| `--mv-error` sur blanc | **6,54:1** | AA |

> **Deux règles absolues.**
> `--mv-blue-light` (3,43:1) ne porte **jamais** de texte. Il sert aux accents graphiques, aux traits, aux illustrations.
> `--mv-border` (1,40:1) ne délimite **jamais** un champ de formulaire. Les champs utilisent `--mv-border-ui`.

### Répartition
Environ **80 % de neutres**, 15 % de bleu de marque, 5 % d'accent clair. Le bleu marque l'action et la hiérarchie — il ne remplit pas les fonds.

---

## 3. Typographie

### Choix
**Une seule famille : Inter.** Open source, disponible en variable, excellente lisibilité aux petites tailles, chiffres tabulaires, jeu diacritique français complet.

Une seule police, c'est un choix de sobriété institutionnelle — et une requête réseau de moins.

```css
--mv-font: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
           Roboto, "Helvetica Neue", Arial, sans-serif;
```

**Chargement** — fichiers WOFF2 **auto-hébergés** (jamais Google Fonts : requête tierce, dépendance externe, enjeu RGPD), `font-display: swap`, préchargement du poids 400 et 600 utilisés au-dessus de la ligne de flottaison. Deux fichiers maximum.

### Échelle — base 16 px, ratio 1,25 fluide

| Rôle | Taille mobile → desktop | Graisse | Interlignage | Interlettrage |
|---|---|---|---|---|
| `display` — H1 de home | 34 → 60 px | 700 | 1,05 | −0,02em |
| `h1` | 30 → 44 px | 700 | 1,1 | −0,015em |
| `h2` | 25 → 34 px | 650 | 1,2 | −0,01em |
| `h3` | 21 → 25 px | 600 | 1,3 | 0 |
| `h4` | 18 → 20 px | 600 | 1,4 | 0 |
| `body-lg` — chapô | 18 → 20 px | 400 | 1,6 | 0 |
| `body` | 17 → 17 px | 400 | 1,65 | 0 |
| `small` — légendes | 15 px | 400 | 1,5 | 0 |
| `eyebrow` | 13 px | 650 | 1,2 | **0,08em**, majuscules |

```css
--mv-text-h1: clamp(1.875rem, 1.2rem + 3vw, 2.75rem);
--mv-text-h2: clamp(1.5625rem, 1.15rem + 1.9vw, 2.125rem);
--mv-text-body: 1.0625rem;   /* 17px */
```

### Règles
- **Corps de texte à 17 px**, pas 16. Audience de décideurs, souvent au-delà de 45 ans.
- **Largeur de lecture : 68 caractères maximum** (`max-width: 68ch`).
- Les titres sont en **anthracite**, jamais en bleu. Le bleu signale l'action.
- L'eyebrow en majuscules porte `letter-spacing: 0.08em` — sans quoi il devient illisible.
- **Jamais de texte justifié.**
- Chiffres en `font-variant-numeric: tabular-nums` dans les tableaux.

---

## 4. Grille et espacements

### Grille
12 colonnes, gouttière 24 px, conteneur `max-width: 1200px`, marges latérales 20 px (mobile) → 40 px (desktop).

| Palier | Largeur | Colonnes utiles |
|---|---|---|
| `sm` | < 640 px | 1 |
| `md` | ≥ 640 px | 2 |
| `lg` | ≥ 1024 px | 3 |
| `xl` | ≥ 1280 px | 3 à 4 |

**Mobile-first strict.** Les media queries n'utilisent que `min-width`.

### Échelle d'espacement — base 4 px

```css
--mv-space-1: 4px;    --mv-space-6:  32px;
--mv-space-2: 8px;    --mv-space-8:  48px;
--mv-space-3: 12px;   --mv-space-10: 64px;
--mv-space-4: 16px;   --mv-space-12: 96px;
--mv-space-5: 24px;   --mv-space-16: 128px;
```

**Rythme vertical des sections** : 64 px (mobile) → 96 px (tablette) → 128 px (desktop).
La respiration entre sections est le principal levier de perception « premium ». Ne pas la réduire pour faire tenir plus de contenu.

---

## 5. Rayons et ombres

```css
--mv-radius-sm: 4px;    /* champs, badges */
--mv-radius:    8px;    /* boutons, cartes */
--mv-radius-lg: 12px;   /* grandes cartes, encarts */
--mv-radius-full: 999px;/* pastilles */
```

Rayons **modérés**. Au-delà de 12 px, l'interface prend un ton grand public qui contredit le positionnement.

```css
--mv-shadow-sm: 0 1px 2px rgba(20,22,28,.06);
--mv-shadow:    0 2px 8px rgba(20,22,28,.08);
--mv-shadow-md: 0 8px 24px rgba(20,22,28,.10);
```

Ombres **discrètes et froides**, dérivées de l'encre. Une carte au repos n'a pas d'ombre : elle est délimitée par une bordure. L'ombre apparaît au survol — elle signale l'interactivité, elle ne décore pas.

---

## 6. Boutons

### Primaire
Fond `--mv-blue`, texte blanc, rayon 8 px, padding `14px 28px`, graisse 600, taille 17 px.

| État | Traitement |
|---|---|
| Repos | `--mv-blue`, sans ombre |
| Survol | `--mv-blue-dark` + `--mv-shadow-sm`, transition 150 ms |
| Focus visible | Contour 3 px `--mv-blue-dark`, décalé de 2 px |
| Actif | `--mv-blue-dark`, translation `1px` vers le bas |
| Désactivé | `--mv-ink-3` sur `--mv-surface`, `cursor: not-allowed`, `aria-disabled` |

### Secondaire
Fond transparent, texte `--mv-blue`, bordure 1,5 px `--mv-blue`. Au survol : fond `--mv-surface-blue`.

### Tertiaire
Lien fléché : texte `--mv-blue`, soulignement à 2 px, chevron `→` décalé de 4 px au survol.

### Sur fond sombre
Bouton primaire inversé : fond blanc, texte `--mv-anthracite`. Bouton secondaire : bordure blanche, texte blanc.

### Règles
- **Cible tactile ≥ 44 × 44 px**, y compris sur les liens fléchés.
- Un seul bouton primaire visible par section d'écran.
- Le libellé indique la destination. Jamais « Cliquez ici », jamais « En savoir plus » isolé.
- Un bouton qui ouvre un nouvel onglet le signale — icône + mention en lecteur d'écran.

---

## 7. Liens

**Dans le corps de texte** — `--mv-blue`, souligné par `text-decoration-thickness: 1px` et `text-underline-offset: 3px`. Au survol : `--mv-blue-dark`, soulignement à 2 px.

**Le soulignement n'est jamais supprimé dans le contenu rédactionnel.** La couleur seule ne suffit pas à signaler un lien pour un utilisateur daltonien.

**Dans la navigation et les cartes** — pas de soulignement au repos, apparition au survol et au focus.

**Sur fond sombre** — `--mv-blue-on-dark` (8,37:1).

---

## 8. Cartes

**Structure** : fond blanc, bordure 1 px `--mv-border`, rayon 12 px, padding 24 → 32 px.

**Composition type** : icône ou eyebrow → titre H3 → description 2-3 lignes → *critère de choix en italique* → lien fléché.

**Survol** : bordure `--mv-blue-light`, `--mv-shadow-md`, élévation de 2 px. Transition 180 ms.

**Carte entièrement cliquable** — le lien enveloppe le titre, et une pseudo-classe étend la zone cliquable à la carte. Le lecteur d'écran n'annonce **qu'un seul lien**.

```css
.card__link::after { content: ""; position: absolute; inset: 0; }
```

**Variantes** : `card--solution` (icône), `card--mode` (mention « pour qui »), `card--proof` (valeur en display + source en `small`), `card--article` (image 16:9, dimensions déclarées).

---

## 9. Formulaires

**Champ** — hauteur 48 px, padding `12px 16px`, bordure 1,5 px `--mv-border-ui` *(3,67:1 — requis pour les composants d'interface)*, rayon 4 px, fond blanc, texte 17 px.

| État | Traitement |
|---|---|
| Focus | Bordure `--mv-blue` + contour 3 px décalé de 1 px |
| Erreur | Bordure `--mv-error` + message sous le champ, précédé d'une icône |
| Désactivé | Fond `--mv-surface`, texte `--mv-ink-3` |

**Label** — toujours **visible**, au-dessus du champ, 15 px, graisse 600, `--mv-ink-2`. Jamais de placeholder en guise de label : il disparaît à la saisie et n'est pas restitué correctement.

**Champ obligatoire** — astérisque `--mv-error` + `aria-required="true"` + légende « Les champs marqués d'un astérisque sont obligatoires » en tête de formulaire.

**Messages d'erreur** — en français, explicites, à côté du champ, liés par `aria-describedby`, annoncés via `aria-live="polite"`.

| Champ | Message |
|---|---|
| E-mail | « Cette adresse e-mail ne semble pas valide. Vérifiez qu'elle contient un @ et un nom de domaine. » |
| Obligatoire vide | « Merci de renseigner votre [nom du champ]. » |
| Téléphone | « Ce numéro ne semble pas valide. Format attendu : 01 23 45 67 89. » |
| Consentement | « Merci de confirmer votre accord pour être recontacté. » |

**Antispam** — honeypot masqué (`aria-hidden`, hors flux, jamais `display:none` seul) + horodatage de soumission. **Aucun CAPTCHA** : barrière d'accessibilité, et le volume ne le justifie pas.

**Confirmation** — page `/merci` en `noindex`, avec message explicite, délai de réponse annoncé, et lien de retour.

---

## 10. Accordéons — FAQ

**Structure** — `<h3><button aria-expanded="false" aria-controls="…">` puis panneau `<div id="…" role="region">`.

- Bouton pleine largeur, texte aligné à gauche, chevron à droite pivotant de 180°.
- Séparateur 1 px `--mv-border` entre les items.
- **Ouverture indépendante** : plusieurs questions peuvent être ouvertes simultanément. Un accordéon qui referme la question précédente frustre l'utilisateur qui compare deux réponses.
- Le contenu est présent dans le HTML même replié — indexable et lisible sans JavaScript.
- **Sans JavaScript, tous les panneaux sont ouverts.**
- Transition de hauteur 200 ms, supprimée sous `prefers-reduced-motion`.

---

## 11. Navigation

Voir `NAVIGATION.md` pour la structure et les libellés. Traitement visuel :

**Header** — hauteur 80 px → 64 px au défilement, fond blanc, bordure basse 1 px `--mv-border` apparaissant au défilement. Logo à 36 px de hauteur.

**Entrées** — 17 px, graisse 500, `--mv-ink`. Au survol et sur la page courante : `--mv-blue` + trait 2 px sous l'entrée. La page courante porte aussi `aria-current="page"` — le repère n'est pas uniquement chromatique.

**Sous-menus** — panneau blanc, `--mv-shadow-md`, rayon 8 px, padding 16 px, apparition en 120 ms sans effet de translation.

**Menu mobile** — panneau plein écran, fond blanc, entrées à 20 px, accordéons, CTA et coordonnées en bas.

---

## 12. Footer

Fond `--mv-anthracite`, texte blanc (15,46:1), liens `--mv-blue-on-dark`.
Quatre colonnes → une colonne sous 768 px. Titres de colonne en eyebrow. Séparateur 1 px `rgba(255,255,255,.15)` avant la bande basse. Logo en version monochrome blanche.

---

## 13. Iconographie

**Style** — trait, 1,5 px, extrémités arrondies, grille 24 × 24, sans remplissage. Cohérent avec la sobriété typographique.

**Format** — SVG inline, `currentColor`, `aria-hidden="true"` si décoratif, `role="img"` + `<title>` si porteur de sens.

**Interdits** — icônes de cadenas, bouclier, empreinte, œil. Pour la sécurité, on **explique le mécanisme**, on ne l'illustre pas par un pictogramme.

**Alternatives retenues** : deux urnes séparées pour la séparation des urnes · une clé fragmentée en trois pour les clés de dépouillement · deux enveloppes divergentes pour le double canal · une frise horodatée pour les journaux d'audit.

> Ces schémas ne sont pas des icônes décoratives : ils **expliquent**. Un schéma qui montre pourquoi trois personnes doivent réunir leurs clés vaut plus qu'un cadenas.

---

## 14. Style photographique

### Direction
Photographies **réelles**, jamais de banque d'images. Lumière naturelle, cadrages larges ou détails précis, pas de pose. Traitement homogène : contraste modéré, saturation légèrement réduite, dominante froide discrète.

### Sujets recherchés
Salle d'assemblée en séance · boîtiers en situation, sur une table ou remis à l'entrée · émargement sur tablette · chef de projet au travail, écran visible · mains, documents, détails · l'équipe Media Vote, sans pose corporate.

### Traitement
Ratio 16:9 en pleine largeur, 4:3 en carte. `width` et `height` déclarés. WebP avec repli JPEG. `loading="lazy"` sauf pour le hero. Voile anthracite à 60 % d'opacité lorsque du texte est superposé — et le contraste est **vérifié**, jamais supposé.

### Captures de ProVote®
Le matériau visuel le plus important du site. Données fictives cohérentes et crédibles — jamais « Test 1, Test 2 ». Encadrées d'une bordure 1 px `--mv-border` et d'une ombre `--mv-shadow-md`, sans habillage de navigateur factice. Détourage éventuel sur les zones significatives.

> **Dépendance critique.** Sans ces captures (Q-C1), la direction artistique définie ici n'est pas applicable. La solution de repli — des schémas d'interface stylisés — est nettement inférieure et doit rester temporaire.

---

## 15. Logo

**Fichiers à produire** depuis `logo_OK.ai` :

| Version | Usage |
|---|---|
| SVG monogramme + nom, horizontal | Header, footer |
| SVG monogramme seul | Favicon, contextes réduits |
| SVG monochrome blanc | Footer, fonds sombres |
| PNG 512 px transparent | Réseaux, Open Graph |
| ICO / PNG 32 et 180 px | Favicon, icône iOS |

**Règles** — zone de protection égale à la hauteur du monogramme. Taille minimale : 32 px (monogramme), 120 px de large (version horizontale). Ne jamais déformer, recolorer, contourner ni ajouter d'ombre. Sur fond sombre : version monochrome blanche.

**Attention** : le logo fourni comporte des dégradés. En SVG, ils sont conservés en grand format ; en favicon, une **version aplatie** est nécessaire — les dégradés sont illisibles à 32 px.

---

## 16. États interactifs — règles générales

| État | Règle |
|---|---|
| Survol | Changement de couleur ou d'élévation, jamais de déplacement supérieur à 2 px |
| Focus | **Contour 3 px, décalé de 2 px, contraste ≥ 3:1.** Jamais `outline: none` sans remplacement |
| Focus clavier seul | `:focus-visible` pour ne pas afficher le contour au clic souris |
| Actif | Assombrissement + translation d'1 px |
| Chargement | Indicateur textuel + `aria-busy`, jamais un spinner seul |
| Désactivé | Contraste réduit + `aria-disabled`, jamais un élément simplement invisible |

**Transitions** — 120 à 200 ms, `ease-out`. Aucune animation au défilement. Aucun parallaxe.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 17. Règles responsive

| Élément | Mobile | Desktop |
|---|---|---|
| Grille de cartes | 1 colonne | 2 à 4 colonnes |
| Frise J-30 → J0 | Verticale | Horizontale |
| Tableaux | Défilement horizontal dans un conteneur `tabindex="0"` et `role="region"` avec libellé | Pleine largeur |
| Header | Hamburger | Navigation complète |
| Hero | Texte au-dessus du visuel | Deux colonnes |
| Footer | Colonnes empilées | 4 colonnes |
| Espacement de section | 64 px | 128 px |

**Points de contrôle** : 320 px (minimum absolu), 375, 768, 1024, 1440, 1920.
**Aucun débordement horizontal à 320 px** — vérification obligatoire en QA.
**Zoom à 200 %** sans perte de contenu ni de fonctionnalité.

---

## 18. Règles d'accessibilité

**Cible : RGAA / WCAG 2.2 niveau AA.**

| Exigence | Mise en œuvre |
|---|---|
| Contraste texte | ≥ 4,5:1 — vérifié, §2 |
| Contraste composants et focus | ≥ 3:1 — `--mv-border-ui`, contours de focus |
| Information par la couleur seule | Interdit — toujours un second signal : soulignement, icône, texte |
| Structure de titres | H1 unique, hiérarchie sans saut |
| Repères ARIA | `header`, `nav`, `main`, `footer`, `aside` |
| Lien d'évitement | Premier élément focusable |
| Langue | `lang="fr"` sur `<html>` |
| Images | `alt` rédigé dans le contenu ; `alt=""` si décoratif |
| Formulaires | Label visible, erreurs explicites, `aria-live` |
| Clavier | Tout accessible, ordre logique, aucun piège hors modale |
| Mouvement | `prefers-reduced-motion` respecté |
| Zoom | 200 % sans perte |
| Sans JavaScript | Navigation, FAQ et contenu restent accessibles |

**Page `/accessibilite`** — déclaration portant sur **le site vitrine**, avec taux de conformité issu d'un audit réel. À ne pas confondre avec l'accessibilité de ProVote®, qui relève de Q-B6 et n'est pas de notre ressort.

---

## 19. Performance

| Cible | Valeur |
|---|---|
| LCP | < 1,8 s |
| INP | < 150 ms |
| CLS | **0** |
| Poids d'une page | < 400 Ko, images comprises |
| JavaScript total | < 8 Ko non minifié |
| Requêtes tierces | **0** |

**Moyens** — CSS critique inline, reste en différé · 2 fichiers de police maximum, auto-hébergés, préchargés · images WebP dimensionnées, `loading="lazy"` hors hero · SVG inline · aucune bibliothèque · aucun script tiers sans décision explicite (Q-C7).

**CLS à zéro** : toute image, tout média et tout encart de dimension fixe déclare ses dimensions. C'est une exigence, pas un objectif.

---

## 20. Ce que ce système ne fait pas

Il ne prévoit **ni thème sombre** (aucun besoin exprimé, doublerait le coût de QA), **ni bibliothèque de composants exhaustive** (les 20 composants de `CONTENT-MODEL.md` suffisent), **ni animation de marque** (le budget de performance est mieux investi ailleurs), **ni système de design tokens multi-marques** (une seule marque).

Chaque élément ajouté devra répondre à un besoin réel du contenu — pas à une envie de complétude.
