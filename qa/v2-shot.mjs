/* Capture ciblée : node qa/v2-shot.mjs <url> <largeur> <sélecteur|full> <fichier> [actions-js]
   Le rideau de chargement et le verrou de défilement sont neutralisés. */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright/node_modules/playwright-core');
const [url, w, sel, out, js] = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +w < 700 ? 812 : 1000 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
const errors = [];
p.on('pageerror', e => errors.push(e.message));
p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
await p.goto((process.env.MV_BASE || 'http://localhost:4321') + url, { waitUntil: 'networkidle' });
await p.waitForTimeout(1700);
await p.addStyleTag({ content: 'html{scroll-behavior:auto!important} .site-header{position:absolute!important}' });
if (js) { await p.evaluate(js); await p.waitForTimeout(600); }
if (sel === 'full') await p.screenshot({ path: out, fullPage: true });
else {
  const l = p.locator(sel).first();
  await l.evaluate(e => e.scrollIntoView({ block: 'start', behavior: 'instant' }));
  await p.waitForTimeout(700);
  await l.screenshot({ path: out });
}
console.log(JSON.stringify({ ok: true, errors, overflow: await p.evaluate(() => document.documentElement.scrollWidth - innerWidth) }));
await b.close();
