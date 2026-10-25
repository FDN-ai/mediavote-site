import { chromium } from 'playwright-core';

const BASE = 'http://localhost:4321';
const PAGES = [
  '/', '/solutions/vote-electronique-assemblee-generale/', '/demonstration/',
  '/solutions/', '/modes-de-vote/', '/provote/', '/faq/', '/plan-du-site/'
];
const WIDTHS = [320, 375, 768, 1024, 1440, 1920];

const browser = await chromium.launch({ channel: 'chromium' });
const results = { overflow: [], console: [], a11y: [], links: [] };

for (const url of PAGES) {
  for (const w of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
    const page = await ctx.newPage();
    const msgs = [];
    page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') msgs.push(`${m.type()}: ${m.text()}`); });
    page.on('pageerror', e => msgs.push('pageerror: ' + e.message));
    const resp = await page.goto(BASE + url, { waitUntil: 'networkidle' });
    if (resp.status() !== 200) results.links.push(`${url} → HTTP ${resp.status()}`);

    const o = await page.evaluate(() => ({
      sw: document.documentElement.scrollWidth,
      iw: window.innerWidth,
      culprits: [...document.querySelectorAll('*')]
        .filter(e => e.getBoundingClientRect().right > window.innerWidth + 1)
        .slice(0, 4).map(e => e.tagName + '.' + (e.className.toString().split(' ')[0] || '?'))
    }));
    if (o.sw > o.iw) results.overflow.push(`${url} @${w}px : ${o.sw}px (${o.culprits.join(', ')})`);
    msgs.forEach(m => results.console.push(`${url} @${w}px — ${m}`));
    await ctx.close();
  }
}

// Contrôles d'accessibilité et de structure, une seule largeur
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
for (const url of PAGES) {
  await page.goto(BASE + url, { waitUntil: 'networkidle' });
  const a = await page.evaluate(() => {
    const issues = [];
    if (document.querySelectorAll('h1').length !== 1) issues.push('H1 ≠ 1');
    if (!document.querySelector('main#main')) issues.push('pas de <main id="main">');
    if (!document.querySelector('.skip-link')) issues.push('pas de lien d’évitement');
    if (document.documentElement.lang !== 'fr') issues.push('lang ≠ fr');
    // hiérarchie des titres
    const levels = [...document.querySelectorAll('h1,h2,h3,h4')].map(h => +h.tagName[1]);
    for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i-1] > 1) { issues.push(`saut de titre h${levels[i-1]}→h${levels[i]}`); break; }
    // aria-expanded cohérent
    document.querySelectorAll('[aria-controls]').forEach(b => {
      const p = document.getElementById(b.getAttribute('aria-controls'));
      if (!p) issues.push('aria-controls orphelin: ' + b.getAttribute('aria-controls'));
      else if (b.hasAttribute('aria-expanded') && (b.getAttribute('aria-expanded') === 'true') === p.hidden) issues.push('aria-expanded incohérent');
    });
    // labels de formulaire
    document.querySelectorAll('input, select, textarea').forEach(f => {
      if (f.type === 'hidden') return;
      if (!document.querySelector(`label[for="${f.id}"]`)) issues.push('champ sans label: ' + (f.id || f.name));
    });
    return issues;
  });
  a.forEach(i => results.a11y.push(`${url} — ${i}`));
}

// Vérification de tous les liens internes
await page.goto(BASE + '/plan-du-site/');
const allHrefs = new Set();
for (const url of PAGES) {
  await page.goto(BASE + url);
  const hs = await page.evaluate(() => [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href')));
  hs.forEach(h => allHrefs.add(h.split('#')[0]));
}
for (const h of allHrefs) {
  if (h.startsWith('/assets/')) continue;
  const r = await page.goto(BASE + h, { waitUntil: 'domcontentloaded' });
  if (r.status() !== 200) results.links.push(`${h} → HTTP ${r.status()}`);
}

await browser.close();

const section = (t, arr) => {
  console.log(`\n${t} (${arr.length})`);
  if (!arr.length) console.log('  ✓ aucun');
  else arr.forEach(x => console.log('  ✗ ' + x));
};
section('DÉBORDEMENTS HORIZONTAUX', results.overflow);
section('ERREURS CONSOLE', results.console);
section('ACCESSIBILITÉ / STRUCTURE', results.a11y);
section('LIENS', results.links);
console.log(`\n${PAGES.length} pages × ${WIDTHS.length} largeurs · ${allHrefs.size} liens internes uniques testés\n`);
