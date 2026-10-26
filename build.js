#!/usr/bin/env node
/* ==========================================================================
   MEDIA VOTE — Générateur statique
   Zéro dépendance. Assemble composants + contenu → HTML statique dans dist/.
   Le site déployé est du HTML/CSS/JS natif : aucun framework, aucun runtime.

   Usage :
     node build.js            build d'aperçu (notes de production visibles)
     node build.js --prod     build de production (notes retirées, contrôles bloquants)
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const PROD = process.argv.includes('--prod');
/* --base=/dossier : site servi dans un sous-répertoire (aperçu GitHub Pages).
   --noindex : aperçu non indexable (robots.txt en Disallow, noindex sur chaque page). */
const BASE = (process.argv.find((a) => a.startsWith('--base=')) || '--base=').slice(7).replace(/\/$/, '');
const NOINDEX = process.argv.includes('--noindex');

const { layout } = require('./src/layout');
const stubs = require('./src/pages/stubs');

/* ------------------------------------------------------------- Utilitaires */

const log = {
  info: (m) => console.log('  ' + m),
  ok: (m) => console.log('  \x1b[32m✓\x1b[0m ' + m),
  warn: (m) => console.log('  \x1b[33m!\x1b[0m ' + m),
  err: (m) => console.log('  \x1b[31m✗\x1b[0m ' + m)
};

const warnings = [];
const errors = [];

function write(urlPath, html) {
  const rel = urlPath === '/' ? 'index.html' : path.join(urlPath.replace(/^\/|\/$/g, ''), 'index.html');
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html, 'utf8');
  return rel;
}

/* --------------------------------------------------- Contrôles qualité build
   Transforme les règles éditoriales en garanties techniques.
   Voir docs/CONTENT-MODEL.md §12                                             */

const FORBIDDEN = [
  { re: /100\s*%\s*s[ée]curis/i, label: '« 100 % sécurisé »' },
  { re: /s[ée]curit[ée]\s+absolue/i, label: '« sécurité absolue »' },
  { re: /inviolable/i, label: '« inviolable »' },
  { re: /leader\s+incontest/i, label: '« leader incontesté »' },
  { re: /\bleader\b/i, label: '« leader »' },
  { re: /r[ée]volutionnaire/i, label: '« révolutionnaire »' },
  { re: /solution\s+unique\s+au\s+monde/i, label: '« solution unique au monde »' },
  { re: /certifi[ée]\s+(par\s+la\s+)?CNIL/i, label: '« certifié CNIL »' },
  { re: /agr[ée]{2}\s+CNIL/i, label: '« agréé CNIL »' },
  { re: /certifi[ée]\s+(norme\s+)?NF\s*552/i, label: '« certifié NF 552 »' },
  { re: /2019-053/, label: 'référence à la délibération CNIL abrogée 2019-053' },
  { re: /100\s*%\s*de\s+nos\s+clients/i, label: '« 100 % de nos clients »' },
  { re: /lorem\s+ipsum/i, label: 'lorem ipsum' }
];

function checkContent(url, html) {
  // On n'inspecte que le contenu publié, pas les notes de production
  const published = html.replace(/<div class="prod-note"[\s\S]*?<\/div>\s*(?=<)/g, '');

  FORBIDDEN.forEach(({ re, label }) => {
    if (re.test(published)) {
      errors.push(`${url} — formulation interdite : ${label}`);
    }
  });

  const h1 = published.match(/<h1[\s>]/g) || [];
  if (h1.length === 0) errors.push(`${url} — aucun H1`);
  if (h1.length > 1) errors.push(`${url} — ${h1.length} H1 (un seul autorisé)`);

  const title = published.match(/<title>([^<]*)<\/title>/);
  if (!title) errors.push(`${url} — aucun <title>`);
  else if (title[1].length > 65) warnings.push(`${url} — title de ${title[1].length} caractères (cible ≤ 60)`);

  const desc = published.match(/<meta name="description" content="([^"]*)"/);
  if (!desc) errors.push(`${url} — aucune meta description`);
  else if (desc[1].length < 120 || desc[1].length > 165) {
    warnings.push(`${url} — meta description de ${desc[1].length} caractères (cible 140–158)`);
  }

  // Images sans alt
  const imgs = published.match(/<img\b[^>]*>/g) || [];
  imgs.forEach((img) => {
    if (!/\salt=/.test(img)) errors.push(`${url} — <img> sans attribut alt`);
  });

  return published;
}

function collectLinks(html) {
  const out = [];
  const re = /href="(\/[^"#]*)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1].split('?')[0]);
  return out;
}

/* Préfixe les URL absolues internes (href, src, srcset, JSON embarqué) par BASE.
   Ne touche qu'aux attributs et aux chaînes JSON, jamais au texte. */
let KNOWN = new Set();
function rebase(html) {
  const known = KNOWN;
  const fix = (u) => {
    if (!u.startsWith('/') || u.startsWith('//') || u.startsWith(BASE + '/')) return u;
    const first = u.slice(1).split(/[/?#"]/)[0];
    return (u === '/' || u.startsWith('/#') || u.startsWith('/?') || known.has(first)) ? BASE + u : u;
  };
  return html
    .replace(/\b(href|src|action|content)="(\/[^"]*)"/g, (m, a, u) => (a === 'content' && !/^\/assets\//.test(u)) ? m : `${a}="${fix(u)}"`)
    .replace(/\b(srcset|imagesrcset)="([^"]*)"/g, (m, a, v) => `${a}="${v.split(',').map((p) => { const t = p.trim().split(/\s+/); t[0] = fix(t[0]); return t.join(' '); }).join(', ')}"`)
    .replace(/(&quot;|")(\/(?:solutions|modes-de-vote|secteurs|offres|provote|demonstration|contact|assets|actualites)\/[^"&]*)(&quot;|")/g, (m, q1, u, q2) => q1 + fix(u) + q2);
}

/* ----------------------------------------------------------------- Assets */

function buildAssets() {
  const cssFiles = ['tokens.css', 'base.css', 'layout.css', 'components.css', 'v2.css'];
  const css = cssFiles
    .map((f) => {
      const p = path.join(ROOT, 'styles', f);
      return `/* ===== ${f} ===== */\n` + fs.readFileSync(p, 'utf8');
    })
    .join('\n\n');

  const cssDir = path.join(DIST, 'assets/css');
  fs.mkdirSync(cssDir, { recursive: true });
  fs.writeFileSync(path.join(cssDir, 'main.css'), css, 'utf8');

  const jsDir = path.join(DIST, 'assets/js');
  fs.mkdirSync(jsDir, { recursive: true });
  let js = fs.readFileSync(path.join(ROOT, 'scripts/main.js'), 'utf8');
  if (BASE) js = js.replace("'/demonstration/?'", `'${BASE}/demonstration/?'`).replace('"/modes-de-vote/#comparatif"', `"${BASE}/modes-de-vote/#comparatif"`);
  fs.writeFileSync(path.join(jsDir, 'main.js'), js, 'utf8');
  if (BASE) {
    // Chemins absolus de la configuration et de la page d'administration
    for (const f of ['admin/index.html', 'admin/config.yml']) {
      const fp = path.join(DIST, f);
      if (fs.existsSync(fp)) fs.writeFileSync(fp, fs.readFileSync(fp, 'utf8').replace(/(["' ])\/(assets|admin)\//g, `$1${BASE}/$2/`), 'utf8');
    }
  }

  // Copie de public/ — logo officiel, favicons, futurs visuels
  const PUBLIC = path.join(ROOT, 'public');
  let copied = 0;
  const copyDir = (from, to) => {
    if (!fs.existsSync(from)) return;
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
      const src = path.join(from, entry.name);
      const dst = path.join(to, entry.name);
      if (entry.isDirectory()) copyDir(src, dst);
      else { fs.copyFileSync(src, dst); copied++; }
    }
  };
  copyDir(PUBLIC, DIST);
  log.ok(`public/ copié — ${copied} fichier(s)`);

  const kb = (n) => (n / 1024).toFixed(1) + ' Ko';
  log.ok(`CSS assemblé — ${kb(Buffer.byteLength(css))}`);
  log.ok(`JS copié — ${kb(fs.statSync(path.join(ROOT, 'scripts/main.js')).size)}`);
}

/* ---------------------------------------------------------- Fichiers racine */

function buildRootFiles(urls) {
  const { site } = require('./src/data/site');

  const sitemap =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .filter((u) => !u.noindex)
      .map(
        (u) =>
          `  <url>\n    <loc>${site.baseUrl}${u.url}</loc>\n` +
          `    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>\n` +
          `    <priority>${u.url === '/' ? '1.0' : u.priority === 'P0' ? '0.8' : '0.6'}</priority>\n  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  if (NOINDEX) {
    fs.writeFileSync(path.join(DIST, 'robots.txt'), 'User-agent: *\nDisallow: /\n', 'utf8');
  } else {
    fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8');
    fs.writeFileSync(
      path.join(DIST, 'robots.txt'),
      `# ${site.name}\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /merci/\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`,
      'utf8'
    );
  }
  fs.writeFileSync(path.join(DIST, 'feed.xml'), require('./src/pages/actualites').feed(), 'utf8');

  // Redirections 301 — voir docs/SITEMAP.md §5
  const htaccess = fs.existsSync(path.join(ROOT, 'src/redirects.txt'))
    ? fs.readFileSync(path.join(ROOT, 'src/redirects.txt'), 'utf8')
    : '';
  if (htaccess) fs.writeFileSync(path.join(DIST, '.htaccess'), htaccess, 'utf8');

  log.ok(`sitemap.xml — ${urls.filter((u) => !u.noindex).length} URLs`);
  log.ok('robots.txt');
  if (htaccess) log.ok('.htaccess — redirections 301');
}

/* -------------------------------------------------------------------- Build */

function build() {
  console.log('\n\x1b[1mMEDIA VOTE — build ' + (PROD ? 'PRODUCTION' : 'aperçu') + '\x1b[0m\n');

  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  // Pages rédigées
  const written = [];
  const allLinks = new Set();

  const pages = [
    require('./src/pages/home'),
    require('./src/pages/assemblee-generale'),
    require('./src/pages/demonstration'),
    ...require('./src/pages/content/hubs'),
    ...require('./src/pages/content/modes'),
    ...require('./src/pages/content/solutions'),
    ...require('./src/pages/content/offres'),
    ...require('./src/pages/content/divers'),
    ...require('./src/pages/actualites').pages,
    require('./src/pages/merci')
  ];

  // Pages d'attente — seulement celles qui ne sont pas encore rédigées
  const done = new Set(pages.map((p) => p.page.url));
  stubs.filter((s) => !done.has(s.url)).forEach((s) => pages.push(stubs.render(s)));
  // Premiers segments d'URL connus, pour le préfixage en sous-répertoire (--base)
  KNOWN = new Set([...pages.map((p) => p.page.url.slice(1).split('/')[0]).filter(Boolean), 'assets', 'admin', 'feed.xml', 'llms.txt', 'sitemap.xml', 'robots.txt']);

  pages.forEach(({ page, body }) => {
    let html = layout(page, body);

    if (PROD) {
      // Les notes de production ne partent jamais en ligne
      html = html.replace(/<div class="prod-note"[\s\S]*?<\/div>\s*(?=<|$)/g, '');
    }

    if (NOINDEX) html = html.replace(/<meta name="robots" content="[^"]*">/, '<meta name="robots" content="noindex, nofollow">');
    checkContent(page.url, html);
    collectLinks(html).forEach((l) => allLinks.add(l));
    if (BASE) html = rebase(html);

    const rel = write(page.url, html);
    written.push({ url: page.url, priority: page.priority, noindex: page.noindex, size: Buffer.byteLength(html) });
    log.ok(`${page.url.padEnd(52)} ${(Buffer.byteLength(html) / 1024).toFixed(1)} Ko`);
  });

  buildAssets();
  buildRootFiles(written);

  /* --- Vérification des liens internes --- */
  const builtUrls = new Set(written.map((w) => w.url));
  const assetPrefixes = ['/assets/', '/feed.xml', '/admin/', '/llms.txt'];
  const broken = [...allLinks].filter(
    (l) => !builtUrls.has(l) && !assetPrefixes.some((p) => l.startsWith(p))
  );
  broken.forEach((l) => errors.push(`lien interne cassé : ${l}`));

  /* --- Pages orphelines --- */
  const linked = new Set([...allLinks]);
  written.forEach((w) => {
    if (w.url !== '/' && !w.noindex && !linked.has(w.url)) warnings.push(`page sans lien entrant : ${w.url}`);
  });

  /* --- Rapport --- */
  console.log('');
  if (warnings.length) {
    console.log('\x1b[33m  Avertissements (' + warnings.length + ')\x1b[0m');
    warnings.forEach((w) => log.warn(w));
    console.log('');
  }
  if (errors.length) {
    console.log('\x1b[31m  Erreurs (' + errors.length + ')\x1b[0m');
    errors.forEach((e) => log.err(e));
    console.log('');
    if (PROD) {
      console.log('\x1b[31m  Build de production interrompu.\x1b[0m\n');
      process.exit(1);
    }
  }

  const total = written.reduce((a, w) => a + w.size, 0);
  console.log(
    `  \x1b[1m${written.length} pages\x1b[0m · ${(total / 1024).toFixed(1)} Ko de HTML · ` +
      `${errors.length} erreur(s) · ${warnings.length} avertissement(s)\n`
  );
}

build();
