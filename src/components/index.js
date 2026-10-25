/* ==========================================================================
   MEDIAVOTE — Composants réutilisables
   Fonctions pures : données → chaîne HTML. Aucune dépendance.
   ========================================================================== */

const { site, nav, footerCols, legalLinks } = require('../data/site');

/* --------------------------------------------------------------- Utilitaires */

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* Marque légère : **gras**, *italique*, [texte](url) */
const rich = (s = '') =>
  String(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*]+)\*/g, '$1<em>$2</em>');

const current = (url, path) => (url === path ? ' aria-current="page"' : '');

/* --------------------------------------------------------------------- Icônes */

const icons = {
  chevronMobile: '<svg class="mobile-nav__chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  chevron: '<svg class="nav__chevron" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chevronLg: '<svg class="faq__chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  phone: '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="16" height="16"><path d="M4.5 3h3l1.5 4-2 1.2a10 10 0 0 0 4.8 4.8L13 11l4 1.5v3a1.5 1.5 0 0 1-1.7 1.5A14 14 0 0 1 3 4.7 1.5 1.5 0 0 1 4.5 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  check: '<svg class="reassurance__icon" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="9.2" stroke="currentColor" stroke-width="1.6"/><path d="m7 11.2 2.6 2.6L15 8.4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 23 10.9 23 14.3V21h-4v-6c0-1.6-.03-3.65-2.22-3.65-2.22 0-2.56 1.73-2.56 3.53V21h-4V9Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.4-.43-5.03a2.6 2.6 0 0 0-1.84-1.85C19.1 4.7 12 4.7 12 4.7s-7.1 0-8.73.42a2.6 2.6 0 0 0-1.84 1.85C1 8.6 1 12 1 12s0 3.4.43 5.03a2.6 2.6 0 0 0 1.84 1.85c1.63.42 8.73.42 8.73.42s7.1 0 8.73-.42a2.6 2.6 0 0 0 1.84-1.85C23 15.4 23 12 23 12ZM9.75 15.35v-6.7L15.5 12l-5.75 3.35Z"/></svg>',

  /* Schémas explicatifs — voir DESIGN-SYSTEM.md §13.
     Aucun cadenas, aucun bouclier : on explique le mécanisme. */
  urnes: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="2.5" y="10.5" width="11" height="17" rx="1.5" stroke="currentColor" stroke-width="1.7"/><rect x="18.5" y="10.5" width="11" height="17" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M5.5 14.5h5M21.5 14.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16 4v24" stroke="currentColor" stroke-width="1.4" stroke-dasharray="2.5 3"/></svg>',
  cles: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="7" cy="9" r="3.6" stroke="currentColor" stroke-width="1.7"/><circle cx="25" cy="9" r="3.6" stroke="currentColor" stroke-width="1.7"/><circle cx="16" cy="24" r="3.6" stroke="currentColor" stroke-width="1.7"/><path d="M9.7 11.4 14 20.6M22.3 11.4 18 20.6M10.6 9h10.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  canaux: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="2.5" y="4.5" width="13" height="9.5" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="m2.5 6 6.5 4.6L15.5 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="19.5" y="18" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M22.5 22.5h4M22.5 25h2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 16v3.5a2 2 0 0 0 2 2h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2.5 3"/></svg>',
  journaux: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 6h24M4 12h24M4 18h24M4 24h24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity=".35"/><circle cx="9" cy="6" r="2.3" stroke="currentColor" stroke-width="1.7"/><circle cx="19" cy="12" r="2.3" stroke="currentColor" stroke-width="1.7"/><circle cx="13" cy="18" r="2.3" stroke="currentColor" stroke-width="1.7"/><circle cx="23" cy="24" r="2.3" stroke="currentColor" stroke-width="1.7"/></svg>',
  assemblee: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="8" r="3.2" stroke="currentColor" stroke-width="1.7"/><circle cx="6.5" cy="14" r="2.6" stroke="currentColor" stroke-width="1.7"/><circle cx="25.5" cy="14" r="2.6" stroke="currentColor" stroke-width="1.7"/><path d="M3 27v-2.5a4 4 0 0 1 4-4h1M29 27v-2.5a4 4 0 0 0-4-4h-1M10 27v-3a6 6 0 0 1 12 0v3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  conseil: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4.5" y="10.5" width="23" height="13" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M10 10.5V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5M12 17h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  cse: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M6 27V9.5A1.5 1.5 0 0 1 7.5 8h9A1.5 1.5 0 0 1 18 9.5V27M18 27V15.5A1.5 1.5 0 0 1 19.5 14h5a1.5 1.5 0 0 1 1.5 1.5V27M3 27h26M9.5 12h5M9.5 16h5M9.5 20h5M21 18h2.5M21 22h2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  consultation: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M27 18.5a2.5 2.5 0 0 1-2.5 2.5H11l-5 4.5V8a2.5 2.5 0 0 1 2.5-2.5h16A2.5 2.5 0 0 1 27 8v10.5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="m11.5 12.8 2.6 2.6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  enLigne: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="2.5" y="6.5" width="19" height="13" rx="1.8" stroke="currentColor" stroke-width="1.7"/><rect x="22.5" y="14.5" width="7" height="12" rx="1.5" stroke="currentColor" stroke-width="1.7"/><path d="M8 23.5h6M24.8 24.5h2.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  boitier: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="9.5" y="6.5" width="13" height="21" rx="2.5" stroke="currentColor" stroke-width="1.7"/><circle cx="13.5" cy="14" r="1.6" stroke="currentColor" stroke-width="1.5"/><circle cx="18.5" cy="14" r="1.6" stroke="currentColor" stroke-width="1.5"/><circle cx="13.5" cy="19.5" r="1.6" stroke="currentColor" stroke-width="1.5"/><circle cx="18.5" cy="19.5" r="1.6" stroke="currentColor" stroke-width="1.5"/><path d="M16 6.5V3M13 4.2 16 3l3 1.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  hybride: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="8" cy="16" r="5.2" stroke="currentColor" stroke-width="1.7"/><circle cx="24" cy="16" r="5.2" stroke="currentColor" stroke-width="1.7"/><path d="M13.2 16h5.6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16 5v4M16 23v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2.5 3"/></svg>',
  interlocuteur: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="11" r="4.5" stroke="currentColor" stroke-width="1.7"/><path d="M7 27v-1.5a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7V27" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  test: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M25.5 8.5v15a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="1.7"/><path d="m11 16 3.2 3.2L21.5 12" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  associations: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16" cy="7.5" r="3.5"/><circle cx="6" cy="15" r="3"/><circle cx="26" cy="15" r="3"/><circle cx="11" cy="24" r="3"/><circle cx="21" cy="24" r="3"/><path d="M13.2 9.6 8.4 13M18.8 9.6 23.6 13M7.6 17.7 9.6 21.5M24.4 17.7 22.4 21.5M14 24h4"/></svg>',
  entreprises: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 28V8.5a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 18 8.5V28M18 28V15h8.5A1.5 1.5 0 0 1 28 16.5V28M2 28h28M8 12h6M8 17h6M8 22h6M22 20h2.5M22 24h2.5"/></svg>',
  publics: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 13 16 5l13 8M5.5 13v13M11.5 13v13M20.5 13v13M26.5 13v13M2 26h28"/></svg>',
  competence: '<svg class="card__icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 4 4 9.5 16 15l12-5.5L16 4Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 12.2V19c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5v-6.8M28 9.5V17" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'
};

/* ---------------------------------------------------------------- Composants */

function header(path) {
  const navItems = nav.map((item) => {
    if (!item.children) {
      return `<li class="nav__item"><a class="nav__link" href="${item.url}"${current(item.url, path)}>${item.label}</a></li>`;
    }
    const sub = item.children
      .map((c) =>
        c.separator
          ? '<li aria-hidden="true"><div class="nav__submenu-sep"></div></li>'
          : `<li${c.isAll ? ' class="nav__submenu-all"' : ''}><a href="${c.url}"${current(c.url, path)}>${c.label}</a></li>`
      )
      .join('');
    return `<li class="nav__item">
            <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="${item.id}">${item.label}${icons.chevron}</button>
            <ul class="nav__submenu" id="${item.id}">${sub}</ul>
          </li>`;
  }).join('');

  return `<header class="site-header">
    <a class="site-logo" href="/" aria-label="Mediavote — accueil">
      ${logoSvg()}
      <span class="visually-hidden">Mediavote — accueil</span>
    </a>

    <nav class="nav" aria-label="Navigation principale">
      <ul class="nav__list">${navItems}</ul>
    </nav>

    <div class="site-header__actions">
      <a class="header-phone" href="${site.phoneHref}">${icons.phone}<span>${site.phone}</span></a>
      <a class="btn btn--primary" href="/demonstration/">Demander une démonstration</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Ouvrir le menu"><i></i><i></i></button>
    </div>
</header>

${mobileNav(path)}`;
}

function mobileNav(path) {
  const items = nav.map((item, i) => {
    if (!item.children) {
      return `<li><a class="mobile-nav__link" href="${item.url}"${current(item.url, path)}>${item.label}</a></li>`;
    }
    const sub = item.children
      .filter((c) => !c.separator)
      .map((c) => `<li><a href="${c.url}"${current(c.url, path)}>${c.label}</a></li>`)
      .join('');
    return `<li>
        <button class="mobile-nav__toggle" type="button" aria-expanded="false" aria-controls="m-sub-${i}">
          <span>${item.label}</span>${icons.chevronMobile}
        </button>
        <ul class="mobile-nav__sub" id="m-sub-${i}">${sub}</ul>
      </li>`;
  }).join('');

  return `<div class="mobile-nav" id="mobile-nav" hidden>
  <div class="mobile-nav__bd mobile-nav__close" role="presentation"></div>
  <div class="mobile-nav__panel">
    <div class="mobile-nav__inner">
      <div class="mobile-nav__head">
        <a class="site-logo" href="/" aria-label="Mediavote — accueil">${logoSvg()}</a>
        <button class="iconbtn mobile-nav__close" type="button" aria-label="Fermer le menu">${icons.close}</button>
      </div>
      <div class="mobile-nav__body">
        <nav aria-label="Navigation principale (menu)">
          <ul class="mobile-nav__list">${items}</ul>
        </nav>
      </div>
      <div class="mobile-nav__foot">
        <a class="btn btn--on-dark" href="/demonstration/">Demander une démonstration</a>
        <div class="mobile-nav__contact">
          <a href="${site.phoneHref}">${site.phone}</a>
          <a href="mailto:${site.email}">${site.email}</a>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

function loaderMarkup() {
  return `<div class="mv-loader">
  <div class="mv-loader__mark">${logoSvg()}</div>
  <div class="mv-loader__track"><div class="mv-loader__fill"></div></div>
</div>`;
}

/* Logo — dérivé du monogramme M+V du logo fourni.
   Version aplatie sans dégradé : lisible à 32 px (voir DESIGN-SYSTEM.md §15). */
/* Le logo officiel Mediavote, extrait de 02_branding/logo_OK.ai.
   Le SVG d'origine pesait 103 Ko : le fichier Illustrator contient des
   dégradés rasterisés qui ne se compressent pas. Rendu en WebP alpha à
   640 px, il tombe à 4 Ko sans perte visible — repli PNG pour les rares
   navigateurs sans WebP. */
function logoSvg() {
  return `<picture>
    <source type="image/webp" srcset="/assets/img/logo-media-vote-blanc.webp">
    <img src="/assets/img/logo-media-vote-blanc.png" alt="" width="640" height="103" decoding="async">
  </picture>`;
}

function footer() {
  const cols = footerCols.map((col) => `<div>
      <h2 class="site-footer__title">${col.title}</h2>
      <ul>${col.links.map((l) => `<li><a href="${l.url}">${l.label}</a></li>`).join('')}</ul>
    </div>`).join('');

  const social = site.social.map((s) =>
    `<a href="${s.url}" aria-label="${s.name} (nouvel onglet)" target="_blank" rel="noopener">${icons[s.icon]}</a>`
  ).join('');

  return `<footer class="site-footer">
  <div class="container">

    <div class="site-footer__cta">
      <div>
        <span class="eyebrow">Passons à la pratique</span>
        <p data-lines="Parlons de|votre prochain|scrutin"></p>
        <p class="site-footer__cta-lead">
          Assemblée générale, conseil d’administration, élection, élection CSE ou consultation&nbsp;:
          que souhaitez-vous organiser&nbsp;? Notre équipe de chefs de projet vous présentera le
          fonctionnement du système le plus adapté à votre besoin&nbsp;: ProVote® ou boîtiers de vote
          avec émargement digital.
        </p>
      </div>
      <div class="site-footer__cta-actions inview" data-delay="75">
        <a class="btn btn--xl btn--on-dark" href="/demonstration/">
          Demander une démonstration ${icons.arrow}
        </a>
        <a class="btn btn--xl btn--secondary" href="/contact/">Parler de votre projet</a>
        <p class="btn-note">Démonstration de 30 à 45 minutes, en visioconférence. Sans engagement.
          Vous n’êtes pas encore fixé(e) sur la solution la plus adaptée à votre besoin&nbsp;?
          <a href="/#configurateur">Trouvez-la en 4 questions</a>.</p>
      </div>
    </div>

    <div class="site-footer__cols">
      <div class="site-footer__brand">
        <a class="site-logo" href="/" aria-label="Mediavote — accueil">${logoSvg()}</a>
        <p>Spécialiste du vote électronique professionnel depuis 1998. ProVote®, la plateforme qui s’adapte à vos statuts.</p>
        <address>
          <a href="${site.phoneHref}">${site.phone}</a><br>
          <a href="mailto:${site.email}">${site.email}</a><br>
          <span class="site-footer__muted">${site.address.street}, ${site.address.postalCode} ${site.address.city}</span>
        </address>
        <div class="site-footer__social">${social}</div>
      </div>
      ${cols}
    </div>

    <div class="site-footer__bottom">
      <span>© ${new Date().getFullYear()} Mediavote. Tous droits réservés.</span>
      <div class="site-footer__legal">
        ${legalLinks.map((l) => `<a href="${l.url}">${l.label}</a>`).join('')}
      </div>
    </div>
  </div>
</footer>`;
}

function breadcrumbInner(trail) {
  if (!trail || trail.length < 2) return '';
  const items = trail.map((c, i) => {
    const last = i === trail.length - 1;
    return last
      ? `<li aria-current="page">${c.label}</li>`
      : `<li><a href="${c.url}">${c.label}</a></li>`;
  }).join('');
  return `<nav class="breadcrumb" aria-label="Fil d’Ariane"><ol>${items}</ol></nav>`;
}

function sectionHead({ eyebrow, title, lead, center, level = 2 }) {
  return `<div class="section-head${center ? ' section-head--center' : ''}">
    ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
    <h${level}>${rich(title)}</h${level}>
    ${lead ? `<p class="lead">${rich(lead)}</p>` : ''}
  </div>`;
}

function placeholder({ label, ref, minHeight }) {
  return `<div class="placeholder"${minHeight ? ` style="min-height:${minHeight}"` : ''} role="img" aria-label="Emplacement réservé : ${esc(label)}">
    <span class="placeholder__label">${esc(label)}</span>
    <span class="placeholder__ref">${esc(ref)}</span>
  </div>`;
}

function card({ icon, title, text, meta, link, linkLabel, variant = '' }) {
  return `<article class="card ${variant}">
    ${icon ? icons[icon] || '' : ''}
    <h3>${rich(title)}</h3>
    ${text ? `<p>${rich(text)}</p>` : ''}
    ${meta ? `<p class="card__meta">${rich(meta)}</p>` : ''}
    ${link ? `<div class="card__foot"><a class="link-arrow card__link" href="${link}">${linkLabel || 'En savoir plus'}</a></div>` : ''}
  </article>`;
}

function timeline(steps) {
  return `<ol class="timeline">${steps.map((s) => `<li class="timeline__item">
      <span class="timeline__step">${s.step}</span>
      <h3>${rich(s.title)}</h3>
      <p>${rich(s.text)}</p>
      ${s.deliverable ? `<span class="timeline__deliverable"><em>Vous recevez :</em> ${rich(s.deliverable)}</span>` : ''}
    </li>`).join('')}</ol>`;
}

function faq(items, idPrefix = 'faq') {
  return `<div class="faq">${items.map((item, i) => {
    const id = `${idPrefix}-${i}`;
    return `<div class="faq__item">
      <h3 class="faq__question">
        <button class="faq__button" type="button" aria-expanded="false" aria-controls="${id}">
          <span>${rich(item.q)}</span>${icons.chevronLg}
        </button>
      </h3>
      <div class="faq__panel" id="${id}" role="region"><p>${rich(item.a)}</p></div>
    </div>`;
  }).join('')}</div>`;
}

function ctaBand({ eyebrow, title, text, primary, secondary, note }) {
  return `<section class="cta-band">
    <div class="container">
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
      <h2>${rich(title)}</h2>
      ${text ? `<p class="lead">${rich(text)}</p>` : ''}
      <div class="btn-group">
        <a class="btn btn--xl btn--primary" href="${primary.url}">${primary.label}${icons.arrow}</a>
        ${secondary ? `<a class="btn btn--xl btn--secondary" href="${secondary.url}">${secondary.label}</a>` : ''}
      </div>
      ${note ? `<p class="btn-note">${rich(note)}</p>` : ''}
    </div>
  </section>`;
}

function testimonial(t) {
  if (!t || !t.consent) return '';
  return `<figure class="testimonial">
    <blockquote><p>«&nbsp;${rich(t.quote)}&nbsp;»</p></blockquote>
    <figcaption><strong>${esc(t.author)}</strong>${esc(t.role)}${t.org ? `, ${esc(t.org)}` : ''}${t.context ? ` — ${esc(t.context)}` : ''}</figcaption>
  </figure>`;
}

function prodNote(html) {
  return `<div class="prod-note" data-prod-note>${html}</div>`;
}

/* Plaque de fond du hero.
   Trois formats servis par ordre de poids croissant (AVIF, WebP, JPEG) et
   quatre largeurs : le navigateur ne télécharge qu'un seul fichier, adapté
   à son écran. Le visuel du hero d'accueil pèse 37 Ko en AVIF à 1920 px,
   contre 279 Ko dans le même cadrage en JPEG.

   alt="" : le visuel est décoratif. Il passe sous un voile navy à 42-80 %
   d'opacité et ne porte aucune information — c'est le titre qui la porte. */
const HERO_WIDTHS = [768, 1280, 1920, 2560];

function heroSrcset(name, ext) {
  return HERO_WIDTHS.map((w) => `/assets/img/${name}-${w}.${ext} ${w}w`).join(', ');
}

function heroPlate(name = 'hero-accueil', { eager = false } = {}) {
  return `<div class="hero__plate">
  <div class="hero__plate-inner">
    <picture>
      <source type="image/avif" srcset="${heroSrcset(name, 'avif')}" sizes="100vw">
      <source type="image/webp" srcset="${heroSrcset(name, 'webp')}" sizes="100vw">
      <img src="/assets/img/${name}-1280.jpg" srcset="${heroSrcset(name, 'jpg')}" sizes="100vw"
           alt="" width="2752" height="1536" decoding="async"
           ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>
    </picture>
  </div>
  <div class="hero__veil"></div>
</div>`;
}

/* Liste numérotée — signature du système de design */
function numList(items) {
  return `<ul class="numlist">${items.map((it, i) => `<li>
    <a href="${it.link}">
      <span class="numlist__idx">${String(i + 1).padStart(2, '0')}</span>
      <span class="numlist__body">
        <h3>${rich(it.title)}</h3>
        ${it.text ? `<p>${rich(it.text)}</p>` : ''}
        ${it.meta ? `<span class="numlist__meta">${rich(it.meta)}</span>` : ''}
      </span>
      <span class="numlist__arrow">${icons.arrow}</span>
    </a>
  </li>`).join('')}</ul>`;
}

/* Mots surdimensionnés — 4 mots, le 3e en encre */
function ghostHeading(words, label) {
  return `<h2 class="ghost-h"${label ? ` aria-label="${esc(label)}"` : ''}>
    <span class="ghost-row"><span class="ghost-w">${esc(words[0])}</span><span class="ghost-w">${esc(words[1])}</span></span>
    <span class="ghost-row"><span class="ghost-w ghost-w--ink">${esc(words[2])}</span><span class="ghost-w">${esc(words[3])}</span></span>
  </h2>`;
}

/* Vignettes du carrousel du hero — schémas, pas de photos */
function thumbScene(i) {
  const g = [
    '<rect x="12" y="14" width="32" height="28" rx="4"/><path d="M19 24h18M19 32h11" stroke-linecap="round"/>',
    '<circle cx="20" cy="20" r="6"/><circle cx="36" cy="20" r="6"/><circle cx="28" cy="36" r="6"/><path d="M24.5 25 27 31M31.5 25 29 31M26 20h4" stroke-linecap="round"/>',
    '<path d="M14 40V16l14-6 14 6v24"/><path d="M22 40V28h12v12" stroke-linecap="round"/>'
  ][i];
  return `<svg viewBox="0 0 56 56" width="56" height="56" aria-hidden="true"><rect width="56" height="56" fill="rgba(255,255,255,.10)"/><g fill="none" stroke="#ffffff" stroke-opacity=".85" stroke-width="2">${g}</g></svg>`;
}

/* Vignette de la carte chiffre du hero */
function miniScene() {
  return `<svg viewBox="0 0 60 80" width="60" height="80" aria-hidden="true">
    <rect width="60" height="80" fill="rgba(255,255,255,.08)"/>
    <rect x="12" y="16" width="36" height="48" rx="4" fill="none" stroke="#ffffff" stroke-opacity=".5"/>
    <path d="M20 40h20M20 48h13" stroke="#ffffff" stroke-opacity=".45" stroke-width="2" stroke-linecap="round"/>
    <circle cx="30" cy="28" r="6" fill="none" stroke="#6BB8EE" stroke-width="2"/>
    <path d="m27 28 2 2 4-4.5" stroke="#6BB8EE" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

const media = require('./media');
const forms = require('./forms');

module.exports = {
  ...media,
  forms,
  esc, rich, icons, logoSvg,
  header, mobileNav, loaderMarkup, footer, breadcrumbInner, sectionHead,
  placeholder, card, timeline, faq, ctaBand, testimonial, prodNote,
  heroPlate, heroSrcset, HERO_WIDTHS, numList, ghostHeading, thumbScene, miniScene
};
