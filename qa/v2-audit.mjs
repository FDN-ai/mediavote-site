/* Audit V2 — toutes les pages du sitemap, trois largeurs.
   Débordement horizontal, erreurs JS, images cassées, liens internes, poids transféré. */
import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright/node_modules/playwright-core');
const BASE = (process.env.MV_BASE || 'http://localhost:4321');
const urls = [...fs.readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map(m => m[1]);
const b = await chromium.launch();
let problems = 0;
const weights = [];
for (const w of [390, 1024, 1440]) {
  for (const u of urls) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    const errs = []; let bytes = 0;
    p.on('pageerror', e => errs.push(e.message));
    p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    p.on('response', async r => { try { const h = await r.headerValue('content-length'); bytes += h ? +h : (await r.body()).length; } catch {} });
    const res = await p.goto(BASE + u, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1600);
    // Défilement complet pour déclencher le chargement différé
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } scrollTo(0, 0); });
    await p.waitForTimeout(500);
    const r = await p.evaluate(() => ({
      overflow: document.documentElement.scrollWidth - innerWidth,
      broken: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && !i.closest('template')).map(i => i.currentSrc || i.src),
      h1: document.querySelectorAll('h1').length
    }));
    const bad = res.status() !== 200 || r.overflow > 0 || r.broken.length || errs.length || r.h1 !== 1;
    if (bad) { problems++; console.log(`  ✗ ${w} ${u} status=${res.status()} overflow=${r.overflow} h1=${r.h1} broken=${r.broken.join(',')} errs=${errs.join(' | ')}`); }
    if (w === 1440) weights.push([u, Math.round(bytes / 1024)]);
    await ctx.close();
  }
}
await b.close();
console.log(`\n  ${urls.length} pages × 3 largeurs — ${problems} problème(s)`);
console.log('\n  Poids total transféré après défilement complet (1440 px) :');
weights.sort((a, b) => b[1] - a[1]).slice(0, 12).forEach(([u, k]) => console.log(`    ${String(k).padStart(5)} Ko  ${u}`));
