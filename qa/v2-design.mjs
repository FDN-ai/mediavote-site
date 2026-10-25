/* Contrôle de finition — toutes les pages, 1440 et 390 px.
   Contraste réel de chaque bouton et lien (WCAG), boutons noirs,
   images non chargées, logo, débordement. */
import { createRequire } from 'module';
import fs from 'fs';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright/node_modules/playwright-core');
const BASE = (process.env.MV_BASE || 'http://localhost:4321');
const urls = [...fs.readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g)].map(m => m[1]);
const b = await chromium.launch();
let issues = 0;
for (const w of [1440, 390]) {
  for (const u of urls) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    await p.goto(BASE + u, { waitUntil: 'networkidle' });
    await p.waitForTimeout(1600);
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } scrollTo(0, 0); });
    await p.waitForTimeout(400);
    const r = await p.evaluate(() => {
      const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(',').map(Number); return { r, g, b, a }; };
      const lum = ({ r, g, b }) => [r, g, b].map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((s, v, i) => s + v * [.2126, .7152, .0722][i], 0);
      const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + .05) / (y + .05); };
      const bgOf = el => {
        for (let e = el; e; e = e.parentElement) {
          const cs = getComputedStyle(e);
          // Fond photo (hero) : voile navy — on le traite comme navy
          if (e.classList && (e.classList.contains('hero') || e.classList.contains('cta-band') || e.classList.contains('licence-band'))) return { r: 11, g: 30, b: 58, a: 1 };
          const c = parse(cs.backgroundColor); if (c && c.a > .5) return c;
        }
        return { r: 255, g: 255, b: 255, a: 1 };
      };
      const out = { lowContrast: [], black: [], brokenImg: [], logo: null };
      const vis = el => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && !el.closest('[hidden], template, .visually-hidden, .form__hp'); };
      document.querySelectorAll('.btn, .link-arrow, main a, footer a, .cfg__reset').forEach(el => {
        if (!vis(el)) return;
        const cs = getComputedStyle(el);
        const fg = parse(cs.color); const own = parse(cs.backgroundColor);
        const bg = own && own.a > .5 ? own : bgOf(el.parentElement);
        const size = parseFloat(cs.fontSize), weight = +cs.fontWeight;
        const large = size >= 24 || (size >= 18.66 && weight >= 700) || (size >= 18.66 && weight >= 600);
        const cr = ratio(fg, bg);
        if (cr < (large ? 3 : 4.5)) out.lowContrast.push(`${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 40)} (${cr.toFixed(2)})`);
        if (el.classList.contains('btn') && own && own.a > .5 && lum(own) < .02 && (own.r + own.g + own.b) < 90) out.black.push(el.textContent.trim().slice(0, 40));
      });
      document.querySelectorAll('img').forEach(i => { if (i.closest('template')) return; if (i.complete && i.naturalWidth === 0) out.brokenImg.push(i.getAttribute('src')); });
      const lg = document.querySelector('.site-header .site-logo img');
      out.logo = lg ? (lg.currentSrc.split('/').pop() + ' ' + Math.round(lg.getBoundingClientRect().width) + 'x' + Math.round(lg.getBoundingClientRect().height)) : 'absent';
      out.overflow = document.documentElement.scrollWidth - innerWidth;
      out.placeholders = document.querySelectorAll('.placeholder').length;
      return out;
    });
    const bad = r.lowContrast.length || r.black.length || r.brokenImg.length || r.overflow > 0 || r.placeholders || !/blanc/.test(r.logo);
    if (bad) { issues++; console.log(`✗ ${w} ${u}\n   contraste: ${r.lowContrast.join(' | ')}\n   noirs: ${r.black.join(' | ')}\n   images: ${r.brokenImg.join(' | ')}\n   logo: ${r.logo} overflow: ${r.overflow} vides: ${r.placeholders}`); }
    await ctx.close();
  }
}
await b.close();
console.log(`\n${urls.length} pages × 2 largeurs — ${issues} page(s) avec défaut`);
