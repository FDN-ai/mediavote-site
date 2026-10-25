/* ==========================================================================
   MEDIAVOTE — Composants V2 : visuels, vidéo, logos, comparatif, configurateur
   Fonctions pures : données → chaîne HTML. Aucune dépendance.
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const cfg = require('../data/configurateur.json');
const F = require('./forms');
const { groupes } = require('../data/references');

const LOGO_DIMS = (() => {
  const p = path.join(__dirname, '../data/logos-dimensions.json');
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
})();

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------------ Icônes
   Tracés au trait, 24 × 24, couleur héritée. Pas de cadenas ni de bouclier :
   on illustre un geste ou un objet, pas une promesse de sécurité.          */
const svg = (d, cls = 'cfg__ico') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const ico = {
  urne: '<path d="M4 11h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Z"/><path d="M8 11 12.5 4l4.5 3-3 4"/><path d="M9 15h6"/>',
  calendrier: '<rect x="3.5" y="5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2"/>',
  batiment: '<path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16M15 21v-9h4a1 1 0 0 1 1 1v8M2.5 21h19M7.5 8h4M7.5 12h4M7.5 16h4"/>',
  personnes: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3.5 19v-1a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1M15.5 13.2a4 4 0 0 1 5 3.8v1"/>',
  assemblee: '<circle cx="12" cy="6.5" r="2.5"/><circle cx="5" cy="10.5" r="2"/><circle cx="19" cy="10.5" r="2"/><path d="M2.5 20v-1.5a3 3 0 0 1 3-3M21.5 20v-1.5a3 3 0 0 0-3-3M7.5 20v-2a4.5 4.5 0 0 1 9 0v2"/>',
  conseil: '<rect x="3.5" y="8" width="17" height="10" rx="1.5"/><path d="M8.5 8V6a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 15.5 6v2M9 13h6"/>',
  cse: '<path d="M5 21V6.5A1.5 1.5 0 0 1 6.5 5h7A1.5 1.5 0 0 1 15 6.5V21M15 21v-9h3.5a1.5 1.5 0 0 1 1.5 1.5V21M3 21h18M8 9h4M8 12.5h4M8 16h4"/>',
  consultation: '<path d="M20 14a2 2 0 0 1-2 2H9l-4 3.5V6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8Z"/><path d="m9 10 2 2 4-4"/>',
  election: '<circle cx="12" cy="7" r="3"/><path d="M6 20v-1.5A4.5 4.5 0 0 1 10.5 14h3a4.5 4.5 0 0 1 4.5 4.5V20"/><path d="m15.5 5.5 1.5 1.5 3-3"/>',
  autre: '<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/><rect x="2.5" y="5.5" width="19" height="13" rx="2"/>',
  salle: '<path d="M3 20h18M5 20v-5M9.5 20v-5M14.5 20v-5M19 20v-5M3 15h18M12 4v4M8.5 11l3.5-3 3.5 3"/>',
  hybride: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2"/>',
  enLigne: '<rect x="3" y="4.5" width="18" height="12" rx="1.5"/><path d="M8.5 20h7M12 16.5V20"/>',
  question: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5.5 5.5"/><path d="M9 9a1.6 1.6 0 1 1 2.3 1.5c-.5.3-.8.7-.8 1.2M10.5 13.6v.1"/>',
  coche: '<circle cx="12" cy="12" r="9"/><path d="m8 12.2 2.8 2.8L16.2 9.5"/>',
  croix: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
  fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  lecture: '<path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" stroke="none"/>',
  cible: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
  reinit: '<path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4.5h4.5"/>',
  urnes: '<rect x="2.5" y="8" width="8" height="12" rx="1"/><rect x="13.5" y="8" width="8" height="12" rx="1"/><path d="M4.5 11h4M15.5 11h4M12 3v18" /> ',
  interlocuteur: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1"/>',
  test: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/>',
  competence: '<path d="M12 3 2.5 7.5 12 12l9.5-4.5L12 3Z"/><path d="M6 9.5V15c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5V9.5"/>',
  journaux: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/>'
};

/* Icône d'une option, avec repli sur l'icône de la question */
const QUESTION_ICON = { vote: 'urne', mode: 'calendrier', organisation: 'batiment', votants: 'personnes' };

/* ---------------------------------------------------------------- Visuels
   Visuels de contenu produits par tools/visuels.py. Un visuel détouré
   (transparent) n'a pas de variante AVIF : l'encodeur utilisé ne gère pas
   la couche alpha. Il est servi en WebP, avec un PNG en dernier recours.   */
const VISUELS = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/visuels.json'), 'utf8'));
/* Les photos de hero, réutilisées dans un bloc de contenu (tools/images.js) */
VISUELS['hero-accompagnement-scene'] = { file: 'hero-accompagnement', alpha: false, w: 2752, h: 1536, widths: [768, 1280, 1920] };
VISUELS['hero-assemblee-scene'] = { file: 'hero-assemblee', alpha: false, w: 2752, h: 1536, widths: [768, 1280, 1920] };

/* Visuel détouré posé dans le hero des pages produit */
const HERO_ALTS = {
  'provote-mobile': 'ProVote® sur smartphone : écran de vote d’une résolution avec les choix Pour, Contre et Abstention',
  'provote-tablette': 'ProVote® sur tablette : vote d’une résolution avec application du choix aux pouvoirs reçus',
  'boitier-main': 'Boîtier de vote Mediavote tenu en main, avec écran et touches de vote 1, 2 et 3'
};
function heroVisual(name = 'provote-mobile') {
  return `<div class="hero__visual">${picture(name, { alt: HERO_ALTS[name], sizes: '(min-width: 1024px) 26vw, 60vw', lazy: false })}</div>`;
}

function picture(name, { alt = '', sizes = '(min-width: 1024px) 40vw, 90vw', eager = false, lazy = true, cls = '' } = {}) {
  const v = VISUELS[name];
  if (!v) throw new Error(`Visuel inconnu : ${name}`);
  const widths = v.widths;
  const file = v.file || name;
  const set = (ext) => widths.map((w) => `/assets/img/${file}-${w}.${ext} ${w}w`).join(', ');
  const fallback = v.alpha ? 'png' : 'jpg';
  return `<picture${cls ? ` class="${cls}"` : ''}>
      ${v.alpha ? '' : `<source type="image/avif" srcset="${set('avif')}" sizes="${sizes}">`}
      <source type="image/webp" srcset="${set('webp')}" sizes="${sizes}">
      <img src="/assets/img/${file}-${widths[1] || widths[0]}.${fallback}" alt="${esc(alt)}"
           width="${v.w}" height="${v.h}" decoding="async" ${eager ? 'fetchpriority="high"' : lazy ? 'loading="lazy"' : ''}>
    </picture>`;
}

/* Visuel produit dans une colonne de texte.
   Détouré (main qui tient l'appareil) : posé sur un fond dégradé et ancré
   au bord bas du bloc, pour que la main « sorte » du cadre au lieu de
   flotter. Opaque (capture en situation) : plein cadre, bords à bords.   */
function shot(name, { alt, caption, sizes = '(min-width: 1024px) 44vw, 92vw' } = {}) {
  const v = VISUELS[name];
  return `<figure class="product-shot${v.alpha ? '' : ' product-shot--flush'}">
      ${picture(name, { alt, sizes })}
      ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}
    </figure>`;
}

/* ------------------------------------------------------------------- Vidéo
   Façade : une vignette locale et un lien vers YouTube. Aucun script ni
   cookie YouTube n'est chargé avant que le visiteur ne clique. Au clic, le
   script remplace la vignette par le lecteur youtube-nocookie. Sans
   JavaScript, le lien ouvre simplement la vidéo sur YouTube.               */
const VIDEOS = {
  provote: { id: 'LYcZGKb4SE0', titre: 'ProVote® en assemblée générale', legende: 'La plateforme ProVote® présentée en vidéo : le vote en AG, sur tous les écrans.' },
  boitiers: { id: 'VRgyj2rw4GY', titre: 'Les boîtiers de vote en assemblée générale', legende: 'Le vote électronique en assemblée générale avec Mediavote, présenté en vidéo.' }
};

function video(key, { legende } = {}) {
  const v = VIDEOS[key];
  return `<figure class="video">
    <a class="video__facade" href="https://www.youtube.com/watch?v=${v.id}" data-video="${v.id}" data-video-title="${esc(v.titre)}">
      ${picture('video-' + v.id, { alt: '', sizes: '(min-width: 1024px) 44vw, 92vw' })}
      <span class="video__play">${svg(ico.lecture, 'video__play-ico')}</span>
      <span class="video__label">Lire la vidéo<span class="visually-hidden"> « ${esc(v.titre)} » (YouTube)</span></span>
    </a>
    <figcaption><strong>${esc(v.titre)}</strong>${esc(legende || v.legende)}
      <span class="video__note">Vidéo hébergée sur YouTube, chargée uniquement au clic.</span></figcaption>
  </figure>`;
}

/* ------------------------------------------------------------ Mur de logos
   Logos en niveaux de gris au repos, couleur au survol ; hauteur optique
   harmonisée par la surface de chaque logo plutôt que par sa hauteur brute
   (un logo carré à la même hauteur qu'un logo étiré paraît énorme).        */
function logoImg(l) {
  const [w, h] = LOGO_DIMS[l.slug] || [240, 96];
  // Surface cible ~ 9 000 px² à l'affichage, bornée en hauteur et en largeur
  const ratio = w / h;
  const dispH = Math.max(34, Math.min(64, Math.round(Math.sqrt(9000 / ratio))));
  const dispW = Math.min(170, Math.round(dispH * ratio));
  return `<li class="logos__item">
      <picture>
        <source type="image/webp" srcset="/assets/img/logos/${l.slug}.webp">
        <img src="/assets/img/logos/${l.slug}.png" alt="${esc(l.nom)}" width="${w}" height="${h}"
             style="width:${dispW}px" loading="lazy" decoding="async">
      </picture>
    </li>`;
}

function logoWall({ condensed = false } = {}) {
  if (condensed) {
    const all = groupes.flatMap((g) => g.logos.filter((l) => l.accueil));
    return `<ul class="logos logos--condensed">${all.map(logoImg).join('')}</ul>`;
  }
  return `<div class="logos-groups">${groupes.map((g) => `
    <section class="logos-group" aria-labelledby="logos-${g.id}">
      <h3 class="logos-group__title" id="logos-${g.id}">${esc(g.titre)} <span>${g.logos.length}</span></h3>
      <ul class="logos">${g.logos.map(logoImg).join('')}</ul>
    </section>`).join('')}
  </div>`;
}

function logoGroup(id) {
  const g = groupes.find((x) => x.id === id);
  return `<div class="logo-panel">
      <p class="logo-panel__title">Ils votent avec Mediavote</p>
      <ul class="logos logos--panel">${g.logos.map(logoImg).join('')}</ul>
      <a class="link-arrow" href="/references/">Toutes nos références</a>
    </div>`;
}

/* Schéma — la clé de dépouillement est fragmentée entre les membres du
   bureau de vote ; il en faut un nombre minimum pour ouvrir l'urne. */
function keySchema() {
  const people = [0, 1, 2, 3, 4].map((i) => {
    const x = 60 + i * 95, on = i < 3;
    return `<g transform="translate(${x} 214)">
        <circle r="30" fill="${on ? '#EBF2FC' : '#F5F7FA'}" stroke="${on ? '#0A47A8' : '#C9CFDA'}" stroke-width="2"/>
        <circle cy="-7" r="8" fill="none" stroke="${on ? '#0A47A8' : '#9AA3B2'}" stroke-width="2"/>
        <path d="M-13 15a13 11 0 0 1 26 0" fill="none" stroke="${on ? '#0A47A8' : '#9AA3B2'}" stroke-width="2"/>
        <g transform="translate(20 20)"><rect x="-9" y="-9" width="18" height="18" rx="5" fill="${on ? '#0A47A8' : '#C9CFDA'}"/>
          <path d="M-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M3 0h4" stroke="#fff" stroke-width="1.6" fill="none"/></g>
        ${on ? `<path d="M0 -34 L${250 - x} ${-118}" stroke="#0A47A8" stroke-width="1.6" stroke-dasharray="4 5" fill="none"/>` : ''}
        <text class="schema__who" y="60" text-anchor="middle" fill="#4A4F5C">Membre ${i + 1}</text>
      </g>`;
  }).join('');
  return `<figure class="schema">
      <svg viewBox="0 0 500 305" role="img" aria-labelledby="schema-cle-t schema-cle-d">
        <title id="schema-cle-t">Clé de dépouillement fragmentée</title>
        <desc id="schema-cle-d">Cinq membres du bureau de vote détiennent chacun un fragment de la clé. Trois fragments réunis suffisent à ouvrir l’urne ; aucun membre ne peut l’ouvrir seul.</desc>
        <g transform="translate(250 64)">
          <rect x="-58" y="-38" width="116" height="80" rx="12" fill="#0B1E3A"/>
          <rect x="-30" y="-50" width="60" height="16" rx="4" fill="#0B1E3A"/>
          <rect x="-22" y="-44" width="44" height="4" rx="2" fill="#6BB8EE"/>
          <path d="M-12 4a8 8 0 1 0 16 0a8 8 0 1 0 -16 0M4 4h16M14 4v8M20 4v6" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          <text class="schema__t1" x="72" y="-2" font-weight="600" fill="#14161C">Urne chiffrée</text>
          <text class="schema__t2" x="72" y="22" fill="#4A4F5C">3 fragments sur 5</text>
        </g>
        ${people}
      </svg>
      <figcaption>Exemple : 5 fragments, 3 requis pour ouvrir l’urne. Le seuil est fixé avec vous.</figcaption>
    </figure>`;
}

/* ----------------------------------------------- Quelle solution, quel vote
   Tableau du document d'arborescence : ProVote® couvre tous les scrutins,
   les boîtiers tous sauf les élections CSE.                                */
const COMPAT = [
  { vote: 'Assemblée générale', provote: true, boitier: true },
  { vote: 'Conseil d’administration', provote: true, boitier: true },
  { vote: 'Élections CSE', provote: true, boitier: false },
  { vote: 'Référendum, consultation', provote: true, boitier: true },
  { vote: 'Autres élections', provote: true, boitier: true }
];

const yes = `${svg(ico.coche, 'compat__ico compat__ico--yes')}<span class="visually-hidden">Oui</span>`;
const no = `${svg(ico.croix, 'compat__ico compat__ico--no')}<span class="visually-hidden">Non</span>`;

function compatTable({ caption = 'Quelle solution pour quel vote ?' } = {}) {
  return `<div class="compat" role="region" aria-label="${esc(caption)}" tabindex="0">
    <table class="compat__table">
      <caption class="visually-hidden">${esc(caption)}</caption>
      <thead><tr><th scope="col">Type de vote</th><th scope="col">Vote en ligne — ProVote®</th><th scope="col">Vote par boîtiers HF</th></tr></thead>
      <tbody>${COMPAT.map((r) => `<tr><th scope="row">${r.vote}</th><td>${r.provote ? yes : no}</td><td>${r.boitier ? yes : no}</td></tr>`).join('')}</tbody>
    </table>
  </div>`;
}

/* Comparatif détaillé ProVote® / boîtiers — /modes-de-vote/ */
const COMPARE_ROWS = [
  ['Où sont vos votants', 'En salle, à distance, ou les deux à la fois', 'Réunis en salle'],
  ['Ce que le votant utilise', 'Son ordinateur, sa tablette ou son smartphone — sans rien installer', 'Un boîtier individuel remis à l’entrée de la salle'],
  ['Réseau', 'Une connexion Internet pour chaque votant', 'Aucune : les boîtiers communiquent par radio'],
  ['Durée du vote', 'En temps réel pendant la séance, ou sur une période de plusieurs jours', 'En temps réel, pendant la séance'],
  ['Affichage des résultats', 'Dès la clôture de chaque vote, exportables en PDF et Excel', 'À l’écran de la salle dès la clôture, graphes aux couleurs de votre organisation'],
  ['Émargement, pouvoirs, quorum', 'Intégrés à la plateforme', 'Poids des votes et droits de vote paramétrés boîtier par boîtier'],
  ['Types de scrutin', 'Tous, y compris les élections CSE', 'Tous, sauf les élections CSE'],
  ['Accompagnement', 'Chef de projet dédié, test avant le jour J', 'Chef de projet dédié, installation et assistance le jour J']
];

function compareTable() {
  return `<div class="compat compat--wide" role="region" aria-label="Comparatif ProVote® et boîtiers de vote" tabindex="0">
    <table class="compat__table compat__table--text">
      <caption class="visually-hidden">Comparatif ProVote® et boîtiers de vote HF</caption>
      <thead><tr><th scope="col"><span class="visually-hidden">Critère</span></th>
        <th scope="col">${svg(ico.enLigne, 'compat__head-ico')} ProVote®<small>Vote en ligne</small></th>
        <th scope="col">${svg(ico.salle, 'compat__head-ico')} Boîtiers HF<small>Vote en salle</small></th></tr></thead>
      <tbody>${COMPARE_ROWS.map(([k, a, b]) => `<tr><th scope="row">${k}</th><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody>
    </table>
  </div>`;
}

/* ------------------------------------------ Les deux solutions, à parité
   Même gabarit, même poids visuel pour ProVote® et les boîtiers.          */
function solutionCard(key, { cible } = {}) {
  const s = cfg.solutions[key];
  return `<article class="solcard solcard--${key}"><div class="solcard__in">
    <div class="solcard__media">${picture(s.visuel, { alt: s.visuelAlt, sizes: '(min-width: 1024px) 22vw, 60vw' })}</div>
    <div class="solcard__body">
      <span class="solcard__kicker">${key === 'provote' ? 'Vote en ligne, à distance ou hybride' : 'Vote en salle'}</span>
      <h3 class="solcard__name">${s.nom}</h3>
      <p class="solcard__pitch">${s.accroche}</p>
      <p>${s.description}</p>
      <ul class="checklist">${s.points.map((p) => `<li>${svg(ico.coche, 'checklist__ico')}${p}</li>`).join('')}</ul>
      <a class="btn btn--xl btn--primary solcard__cta" href="${s.url}"><span>${s.cta}<span data-cible>${cible ? ` ${cible}` : ''}</span></span>${svg(ico.fleche, '')}</a>
    </div>
  </div></article>`;
}

function solutionPair() {
  return `<div class="solpair">
    ${solutionCard('provote')}
    <span class="solpair__or" aria-hidden="true">ou</span>
    ${solutionCard('boitier')}
  </div>`;
}

/* Bloc « Quelle solution pour ce scrutin ? » — pages AG, CA, CSE, consultations */
function scrutinSolutions(voteId) {
  const opt = cfg.questions[0].options.find((o) => o.id === voteId);
  const cse = voteId === 'cse';
  const p = cfg.solutions.provote;
  const b = cfg.solutions.boitier;
  return `<div class="scrutin-sol${cse ? ' scrutin-sol--single' : ''}">
    <article class="scrutin-sol__item">
      <div class="scrutin-sol__media">${picture(p.visuel, { alt: p.visuelAlt, sizes: '(min-width: 1024px) 14vw, 40vw' })}</div>
      <div>
        <span class="scrutin-sol__when">${svg(ico.enLigne, 'scrutin-sol__ico')}${cse ? 'Pour toutes vos élections CSE' : 'Votants à distance ou en hybride'}</span>
        <h3>ProVote®</h3>
        <p>${cse
          ? 'Le vote électronique de vos élections professionnelles, du premier au second tour, avec dépouillement par clés chiffrées.'
          : 'Chacun vote depuis son ordinateur, sa tablette ou son smartphone. Les votes en salle et à distance sont réunis dans un résultat unique.'}</p>
        <a class="link-arrow" href="${p.url}">Découvrir ProVote® pour ${opt.cible}</a>
      </div>
    </article>
    ${cse ? `<aside class="scrutin-sol__note">
        ${svg(ico.salle, 'scrutin-sol__ico')}
        <p><strong>Et les boîtiers de vote&nbsp;?</strong> Ils ne sont pas proposés pour les élections CSE.
        Pour vos assemblées et vos conseils en salle, <a href="${b.url}">découvrez nos boîtiers HF</a>.</p>
      </aside>` : `<article class="scrutin-sol__item">
      <div class="scrutin-sol__media">${picture(b.visuel, { alt: b.visuelAlt, sizes: '(min-width: 1024px) 14vw, 40vw' })}</div>
      <div>
        <span class="scrutin-sol__when">${svg(ico.salle, 'scrutin-sol__ico')}Tous les votants réunis en salle</span>
        <h3>Boîtiers de vote HF</h3>
        <p>Un boîtier par participant, sans dépendance à Internet. Les résultats s’affichent à l’écran dès la clôture de chaque vote.</p>
        <a class="link-arrow" href="${b.url}">Découvrir les boîtiers HF</a>
      </div>
    </article>`}
  </div>`;
}

/* --------------------------------------------------------- Configurateur
   Outil d'orientation en 4 questions (spécification retour_quizz).
   Le HTML porte les questions ; le résultat est calculé côté navigateur à
   partir des règles embarquées en JSON — aucun serveur, aucun rechargement.

   Sans JavaScript, les questions restent lisibles et le tableau
   « Quelle solution pour quel vote ? » prend le relais du calcul.          */
function optionIcon(q, o) {
  return svg(ico[o.icone] || ico[QUESTION_ICON[q.id]]);
}

function step(q) {
  return `<fieldset class="cfg__step" data-step="${q.id}">
      <legend class="cfg__legend">
        <span class="cfg__num" aria-hidden="true"><span class="cfg__num-n">${q.numero}</span>${svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>', 'cfg__num-ok')}</span>
        <span class="cfg__q"><span class="visually-hidden">Question ${q.numero} sur 4 : </span>${esc(q.question)}</span>
      </legend>
      <button class="cfg__value" type="button" aria-expanded="true" aria-controls="cfg-opts-${q.id}" data-placeholder="Choisir une réponse">
        <span class="cfg__value-text">Choisir une réponse</span>
        <svg class="cfg__chev" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="cfg__opts" id="cfg-opts-${q.id}">
        ${q.options.map((o) => `<label class="cfg__opt">
          <input type="radio" name="${q.id}" value="${o.id}">
          ${optionIcon(q, o)}
          <span class="cfg__lbl">${esc(o.label)}${o.aide ? `<small>${esc(o.aide)}</small>` : ''}</span>
        </label>`).join('')}
      </div>
    </fieldset>`;
}

/* Données embarquées : seulement ce dont le navigateur a besoin */
function clientData() {
  const data = {
    questions: cfg.questions,
    solutions: cfg.solutions,
    fonctionnalites: cfg.fonctionnalites,
    regles: cfg.regles
  };
  // </script> ne peut pas apparaître dans un bloc JSON inline
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function configurateur({ id = 'configurateur', headingLevel = 2 } = {}) {
  const h = `h${headingLevel}`;
  return `<section class="cfg" id="${id}" aria-labelledby="${id}-title">
  <div class="container">
    <header class="cfg__head">
      <span class="eyebrow">Trouvez votre solution</span>
      <${h} class="cfg__title" id="${id}-title">Trouvez la solution de vote <span>adaptée à votre besoin</span></${h}>
      <p class="lead">Quatre questions pour identifier la solution Mediavote adaptée à votre organisation et à votre scrutin. Moins d’une minute, sans laisser vos coordonnées.</p>
    </header>

    <form class="cfg__form cfg__panel" data-cfg novalidate>
      <div class="cfg__steps">
        ${cfg.questions.map(step).join('')}
      </div>

      <div class="cfg__actions">
        <div class="cfg__meta">
          <p class="cfg__count" data-cfg-count aria-hidden="true"><strong>0</strong> réponse sur 4</p>
          <button class="cfg__reset" type="reset">${svg(ico.reinit, '')}Réinitialiser</button>
        </div>
        <button class="btn btn--xl btn--primary cfg__submit" type="submit">Voir la solution adaptée${svg(ico.fleche, '')}</button>
        <p class="cfg__error" role="alert" data-cfg-error></p>
      </div>
    </form>

    <div class="cfg__nojs">
      <p><strong>Le calcul de la recommandation nécessite JavaScript.</strong> En attendant, voici la règle générale&nbsp;:
      ProVote® pour les votants à distance ou en hybride, les boîtiers pour un vote en salle.
      <a href="/contact/">Parlez-nous de votre projet</a>, nous vous orientons.</p>
      ${compatTable()}
    </div>

    <p class="visually-hidden" role="status" data-cfg-status></p>
    <div class="cfg__result" id="${id}-resultat" data-cfg-result hidden></div>

    <div class="cfg__lead" id="${id}-contact" data-cfg-lead hidden>
      <div class="cfg__lead-intro">
        <span class="eyebrow">Dernière étape</span>
        <h3 class="cfg__lead-title">Échangeons sur votre projet</h3>
        <p>Laissez-nous vos coordonnées&nbsp;: un expert Mediavote vous recontacte avec une proposition
        adaptée à votre scrutin. Vos réponses au questionnaire sont jointes à votre demande —
        vous n’aurez pas à les répéter.</p>
        <ul class="cfg__recap" data-cfg-recap aria-label="Vos réponses"></ul>
        <p class="cfg__lead-alt">Vous préférez voir la solution en action&nbsp;?
          <a class="link-arrow" href="/demonstration/" data-cfg-demo>Demander une démonstration</a></p>
      </div>
      <form class="form cfg__lead-form" data-validate novalidate>
        <p class="form__legend">Les champs marqués d’un astérisque (<span class="form__required" aria-hidden="true">*</span>) sont obligatoires.</p>
        ${F.field({ id: 'l-nom', name: 'nom', label: 'Nom et prénom', errorName: 'vos nom et prénom', required: true, autocomplete: 'name' })}
        ${F.field({ id: 'l-org', name: 'organisation', label: 'Votre organisation', errorName: 'le nom de votre organisation', required: true, autocomplete: 'organization' })}
        ${F.field({ id: 'l-mail', name: 'email', label: 'E-mail professionnel', errorName: 'votre adresse e-mail professionnelle', type: 'email', required: true, autocomplete: 'email' })}
        ${F.field({ id: 'l-tel', name: 'telephone', label: 'Téléphone', errorName: 'votre numéro de téléphone', type: 'tel', autocomplete: 'tel', hint: 'Facultatif — utile si vous préférez être rappelé.' })}
        ${F.field({ id: 'l-echeance', name: 'echeance', label: 'Échéance de votre scrutin', errorName: 'l’échéance de votre scrutin', type: 'select', options: F.ECHEANCES })}
        ${F.field({ id: 'l-msg', name: 'message', label: 'Précisions', type: 'textarea', hint: 'Facultatif — vos contraintes, vos questions, votre calendrier.' })}
        <input type="hidden" name="source" value="configurateur">
        <input type="hidden" name="vote" data-cfg-field="vote">
        <input type="hidden" name="mode" data-cfg-field="mode">
        <input type="hidden" name="type_organisation" data-cfg-field="organisation">
        <input type="hidden" name="votants" data-cfg-field="votants">
        <input type="hidden" name="recommandation" data-cfg-field="recommandation">
        ${F.antiBot('l')}
        ${F.consent('l')}
        <button class="btn btn--xl btn--primary" type="submit">Être recontacté par un expert${svg(ico.fleche, '')}</button>
        <p class="form__hint" role="status" aria-live="polite" data-form-status></p>
      </form>
    </div>

    <template data-cfg-tpl="provote">${solutionCard('provote')}</template>
    <template data-cfg-tpl="boitier">${solutionCard('boitier')}</template>

  </div>

  <div class="cfg__trust">
    <ul class="container">
      ${cfg.reassurance.map((r) => `<li>${svg(ico[r.icone], 'cfg__trust-ico')}<span><strong>${esc(r.titre)}</strong>${esc(r.texte)}</span></li>`).join('')}
    </ul>
  </div>

  <script type="application/json" id="cfg-data">${clientData()}</script>
  <script type="application/json" id="cfg-icons">${clientIcons()}</script>
</section>`;
}

/* Icônes exposées au navigateur pour le rendu du résultat */
function clientIcons() {
  const pick = ['coche', 'fleche', 'urne', 'calendrier', 'batiment', 'personnes', 'assemblee', 'conseil', 'cse', 'consultation', 'election', 'autre', 'salle', 'hybride', 'enLigne', 'question'];
  return JSON.stringify(Object.fromEntries(pick.map((k) => [k, ico[k]])));
}

module.exports = {
  picture, shot, heroVisual, logoGroup, keySchema, video, logoWall, compatTable, compareTable, solutionCard, solutionPair,
  scrutinSolutions, configurateur, clientIcons, VIDEOS, ico, svg
};
