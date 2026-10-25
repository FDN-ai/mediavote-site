/* ==========================================================================
   Actualités — index et pages article, générés depuis content/actualites/
   (fichiers Markdown écrits dans /admin/ par Decap CMS).
   ========================================================================== */

const C = require('../components');
const { site } = require('../data/site');
const { readArticles, dateFr } = require('../articles');

const articles = readArticles();

/* Carte d'article : image si l'auteur en a mis une, sinon vignette typographique */
function articleCard(a) {
  return `<article class="card card--article${a.draft ? ' card--draft' : ''}">
    <a class="card__cover" href="${a.url}" tabindex="-1" aria-hidden="true">
      ${a.image ? `<img src="${a.image}" alt="" loading="lazy" decoding="async">` : `<span class="card__cover-type">${C.esc(a.category)}</span>`}
    </a>
    <p class="card__meta card__meta--top">${C.esc(a.category)}${a.date ? ` · <time datetime="${a.date}">${dateFr(a.date)}</time>` : ''}${a.draft ? ' · <strong>Brouillon</strong>' : ''}</p>
    <h3>${C.esc(a.title)}</h3>
    ${a.description ? `<p>${C.esc(a.description)}</p>` : ''}
    <div class="card__foot"><a class="link-arrow card__link" href="${a.url}">Lire l’article</a></div>
  </article>`;
}

/* ---------------------------------------------------------------- Index */
const index = {
  page: {
    url: '/actualites/', heroImage: 'hero-accueil',
    title: 'Actualités et conseils sur le vote électronique | Mediavote',
    description: 'Réglementation, organisation de scrutins, retours d’expérience et bonnes pratiques : les analyses de Mediavote sur le vote électronique professionnel.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Actualités', url: '/actualites/' }]
  },
  body: `
<section class="hero hero--page">
  ${C.heroPlate('hero-accueil', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Ressources</span>
      <h1 style="margin-top:var(--mv-space-4)">Conseils et actualités du vote électronique</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">Réglementation, organisation pratique, retours d’expérience&nbsp;: nos analyses pour préparer votre prochain scrutin.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${articles.length
      ? `<div class="grid grid--3">${articles.map(articleCard).join('')}</div>`
      : `<p class="lead">Les premiers articles sont en préparation. En attendant, <a href="/faq/">consultez nos questions fréquentes</a>.</p>`}
    <p style="margin-top:var(--mv-space-10)"><a class="link-arrow" href="/feed.xml">S’abonner au flux RSS</a></p>
  </div>
</section>
`
};

/* ------------------------------------------------------------- Articles */
function articlePage(a) {
  const page = {
    url: a.url, heroImage: 'hero-accueil',
    title: `${a.title} | Mediavote`.length <= 65 ? `${a.title} | Mediavote` : a.title,
    description: a.description || `${a.title} — un article Mediavote sur le vote électronique professionnel.`,
    priority: 'P2',
    schema: ['BreadcrumbList'],
    noindex: a.draft,
    article: a,
    ogImage: a.image || undefined,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Actualités', url: '/actualites/' }, { label: a.title, url: a.url }]
  };
  const others = articles.filter((o) => o.url !== a.url).slice(0, 3);
  const body = `
<section class="hero hero--page hero--article">
  ${C.heroPlate('hero-accueil', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">${C.esc(a.category)}</span>
      <h1 style="margin-top:var(--mv-space-4)">${C.esc(a.title)}</h1>
      ${a.description ? `<p class="lead" style="margin-top:var(--mv-space-5)">${C.esc(a.description)}</p>` : ''}
      <p class="article__meta">${a.date ? `<time datetime="${a.date}">Publié le ${dateFr(a.date)}</time> · ` : ''}${a.readingMinutes} min de lecture${a.draft ? ' · <strong>Brouillon — non publié</strong>' : ''}</p>
    </div>
  </div>
</section>

<article class="section">
  <div class="container container--narrow article">
    ${a.image ? `<figure class="article__cover"><img src="${a.image}" alt="${C.esc(a.imageAlt)}" decoding="async"></figure>` : ''}
    ${a.html}
    <footer class="article__foot">
      <p>Un scrutin à organiser&nbsp;? <a class="link-arrow" href="/demonstration/">Demandez une démonstration</a></p>
    </footer>
  </div>
</article>

${others.length ? `<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'À lire aussi', title: 'D’autres articles' })}
    <div class="grid grid--3">${others.map(articleCard).join('')}</div>
  </div>
</section>` : ''}
`;
  return { page, body };
}

/* Données structurées Article (lues par layout.js) */
function articleJsonLd(a) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    inLanguage: 'fr-FR',
    image: a.image ? site.baseUrl + a.image : undefined,
    author: { '@type': 'Organization', name: site.name, url: site.baseUrl + '/' },
    publisher: { '@type': 'Organization', name: site.name, url: site.baseUrl + '/' },
    mainEntityOfPage: site.baseUrl + a.url
  };
}

/* Flux RSS */
function feed() {
  const items = articles.filter((a) => !a.draft).map((a) => `  <item>
    <title>${C.esc(a.title)}</title>
    <link>${site.baseUrl}${a.url}</link>
    <guid>${site.baseUrl}${a.url}</guid>
    ${a.date ? `<pubDate>${new Date(a.date + "T12:00:00Z").toUTCString()}</pubDate>` : ''}
    <description>${C.esc(a.description)}</description>
  </item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>${site.name} — Actualités du vote électronique</title>
  <link>${site.baseUrl}/actualites/</link>
  <description>Réglementation, organisation de scrutins et bonnes pratiques du vote électronique professionnel.</description>
  <language>fr-FR</language>
${items}
</channel></rss>
`;
}

module.exports = { pages: [index, ...articles.map(articlePage)], articles, articleCard, articleJsonLd, feed };
