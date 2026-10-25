/* ==========================================================================
   MEDIAVOTE — Gabarit HTML
   ========================================================================== */

const { site } = require('./data/site');
const { header, footer, breadcrumbInner, loaderMarkup, heroSrcset, esc } = require('./components');

function jsonLd(page) {
  const blocks = [];
  const schemas = page.schema || [];

  if (schemas.includes('Organization')) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      url: site.baseUrl + '/',
      logo: site.baseUrl + '/assets/img/logo-media-vote.svg',
      foundingDate: site.foundingDate,
      telephone: '+33 1 85 09 27 45',
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.address.street,
        postalCode: site.address.postalCode,
        addressLocality: site.address.city,
        addressCountry: site.address.country
      },
      sameAs: site.social.filter((s) => s.verified).map((s) => s.url)
    });
  }

  if (schemas.includes('WebSite')) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: site.baseUrl + '/',
      inLanguage: 'fr-FR'
    });
  }

  if (schemas.includes('Service') && page.service) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.service.name,
      description: page.description,
      provider: { '@type': 'Organization', name: site.name, url: site.baseUrl + '/' },
      areaServed: 'FR',
      url: site.baseUrl + page.url
    });
  }

  if (schemas.includes('FAQPage') && page.faqItems && page.faqItems.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqItems.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a }
      }))
    });
  }

  if (page.article) {
    const { articleJsonLd } = require('./pages/actualites');
    blocks.push(articleJsonLd(page.article));
  }

  if (schemas.includes('BreadcrumbList') && page.breadcrumb && page.breadcrumb.length > 1) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumb.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: site.baseUrl + (c.url || page.url)
      }))
    });
  }

  return blocks
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`)
    .join('\n  ');
}

/* Le fil d'Ariane se place DANS le hero, en tête du bloc de titre : placé
   avant, il décalait le hero de 50 px, laissait une bande blanche sous le
   header transparent (logo blanc invisible) et se retrouvait lui-même
   masqué par le hero. */
/* Mention sécurité et protection des données (recettage, diapo 6) : une
   phrase par page, hors pages boîtiers. Formulations fournies par Mediavote,
   au passé pour la certification NF 552 (certificat de 2022). */
const TRUST = {
  '/solutions/vote-electronique-assemblee-generale/': 'ProVote® : une solution de vote en ligne dont la protection des données personnelles a été reconnue par la certification NF552 d’AFNOR Certification.',
  '/solutions/vote-conseil-administration/': 'Avec ProVote®, Mediavote associe sécurité du vote électronique, confidentialité des scrutins et respect des exigences du RGPD.',
  '/solutions/elections-cse/': 'Sécurisez vos élections professionnelles avec ProVote®, solution de vote en ligne développée dans une démarche de conformité au RGPD.',
  '/solutions/consultations-referendums/': 'Vote en ligne et RGPD : ProVote® privilégie la confidentialité, l’intégrité et la protection des données des électeurs.',
  '/solutions/': 'Mediavote place la sécurité des élections en ligne au premier plan, avec ProVote®, logiciel ayant obtenu la certification NF552 – Protection des données personnelles.',
  '/modes-de-vote/vote-en-ligne/': 'Vote électronique sécurisé : ProVote® intègre la protection des données personnelles au cœur de sa conception.',
  '/modes-de-vote/vote-hybride/': 'ProVote® s’appuie sur une démarche de sécurité et de protection des données personnelles, reconnue par la certification NF552 obtenue en 2022.',
  '/modes-de-vote/': 'ProVote® : une solution française de vote électronique conçue pour répondre aux exigences de sécurité et de confidentialité des organisations.',
  '/provote/': 'La certification NF552 obtenue par ProVote® en 2022 témoigne de l’engagement de Mediavote en faveur de la protection des données personnelles.',
  '/provote/fonctionnalites/': 'La protection des données dès la conception (Privacy by Design) fait partie des principes évalués par le référentiel NF552, au titre duquel ProVote® version 1 a obtenu sa certification.',
  '/offres/licence-annuelle-provote/': 'ProVote® : une solution française de vote électronique conçue pour répondre aux exigences de sécurité et de confidentialité des organisations.',
  '/offres/accompagnement-sur-mesure/': 'Mediavote place la sécurité des élections en ligne au premier plan, avec ProVote®, logiciel ayant obtenu la certification NF552 – Protection des données personnelles.',
  '/demonstration/': 'Vote électronique sécurisé : ProVote® intègre la protection des données personnelles au cœur de sa conception.',
  '/secteurs/': 'Avec ProVote®, Mediavote associe sécurité du vote électronique, confidentialité des scrutins et respect des exigences du RGPD.',
  '/secteurs/associations-federations/': 'Vote en ligne et RGPD : ProVote® privilégie la confidentialité, l’intégrité et la protection des données des électeurs.',
  '/secteurs/entreprises-mutuelles/': 'Sécurisez vos assemblées générales et élections professionnelles avec ProVote®, solution de vote en ligne développée dans une démarche de conformité au RGPD.',
  '/secteurs/organismes-publics/': 'ProVote® : une solution française de vote électronique conçue pour répondre aux exigences de sécurité et de confidentialité des organisations.',
  '/a-propos/': 'Avec ProVote®, Mediavote associe sécurité du vote électronique, confidentialité des scrutins et respect des exigences du RGPD.',
  '/references/': 'La certification NF552 obtenue par ProVote® en 2022 témoigne de l’engagement de Mediavote en faveur de la protection des données personnelles.',
  '/faq/': 'Vote en ligne et RGPD : ProVote® privilégie la confidentialité, l’intégrité et la protection des données des électeurs.',
  '/contact/': 'Vote électronique sécurisé : ProVote® intègre la protection des données personnelles au cœur de sa conception.'
};
function trustLine(page) {
  const text = TRUST[page.url];
  if (!text) return '';
  return `<div class="container"><p class="cert-line cert-line--trust">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="8" width="8" height="12" rx="1"/><rect x="13.5" y="8" width="8" height="12" rx="1"/><path d="M4.5 11h4M15.5 11h4M12 3v18"/></svg>
      <span>${text} <a href="/securite-conformite/">Sécurité et conformité</a></span>
    </p></div>`;
}

/* Insère la ligne après le hero (première section du corps) */
function withTrust(page, body) {
  const line = trustLine(page);
  if (!line) return body;
  const i = body.indexOf('</section>');
  return i === -1 ? body : body.slice(0, i + 10) + '\n' + line + body.slice(i + 10);
}

function cookieBanner() {
  return `<aside class="cookie" data-cookie hidden aria-label="Cookies">
    <p class="cookie__title">Votre vie privée compte</p>
    <p>Nous respectons vos choix. Autorisez-vous l’utilisation de cookies facultatifs pour nous aider à
      comprendre la fréquentation de notre site et à améliorer nos services&nbsp;?</p>
    <div class="cookie__actions">
      <button class="btn btn--primary" type="button" data-cookie-choice="accept">J’accepte</button>
      <button class="btn btn--secondary" type="button" data-cookie-choice="refuse">Je refuse</button>
    </div>
    <a class="cookie__more" href="/politique-confidentialite/">Politique de confidentialité</a>
  </aside>`;
}

function withBreadcrumb(page, body) {
  if (!page.breadcrumb || page.breadcrumb.length < 2) return { body, outside: '' };
  const crumb = breadcrumbInner(page.breadcrumb);
  const marker = '<div class="hero__title-wrap">';
  const i = body.indexOf(marker);
  if (i === -1) return { body, outside: `<div class="container">${crumb}</div>` };
  const at = i + marker.length;
  return { body: body.slice(0, at) + `\n    <div class="hero__crumb">${crumb}</div>` + body.slice(at), outside: '' };
}

function layout(page, rawBody) {
  const { body, outside } = withBreadcrumb(page, withTrust(page, rawBody));
  const canonical = site.baseUrl + page.url;
  const ogImage = site.baseUrl + (page.ogImage || (page.url.startsWith('/solutions/vote-electronique-assemblee-generale/') ? '/assets/img/og-assemblee-generale.jpg' : '/assets/img/og-default.jpg'));

  return `<!DOCTYPE html>
<html lang="fr" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  ${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow">'}

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${site.name}">
  <meta property="og:locale" content="fr_FR">
  <meta property="og:title" content="${esc(page.ogTitle || page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="author" content="${site.name}">

  <link rel="icon" href="/assets/img/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500&display=swap">
  <link rel="stylesheet" href="/assets/css/main.css">
${page.heroImage ? `
  <link rel="preload" as="image" type="image/avif"
        imagesrcset="${heroSrcset(page.heroImage, 'avif')}" imagesizes="100vw" fetchpriority="high">` : ''}

  ${jsonLd(page)}
</head>
<body>
  <a class="skip-link" href="#main">Aller au contenu principal</a>

${page.loader === false ? '' : loaderMarkup()}

  ${header(page.url)}

  <main id="main">
${outside}
${body}
  </main>

  ${footer()}

  <button class="to-top" type="button" data-to-top aria-label="Revenir en haut de la page" hidden>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg>
  </button>

  ${cookieBanner()}
${site.turnstileSiteKey ? '  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>' : ''}
  <script type="module" src="/assets/js/main.js"></script>
</body>
</html>
`;
}

module.exports = { layout };
