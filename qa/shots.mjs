import { chromium } from 'playwright-core';
const BASE='http://localhost:4321', OUT='/Users/alexissuppelnarollemberg/Documents/MEDIA_VOTE/qa/';
const b = await chromium.launch({ channel: 'chromium' });

const shot = async (url, w, h, name, sel) => {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:2 });
  const p = await ctx.newPage();
  await p.goto(BASE+url, { waitUntil:'networkidle' });
  await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
  if (sel) { const l = p.locator(sel).first(); await l.evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'})); await p.waitForTimeout(200); await l.screenshot({ path: OUT+name }); }
  else { await p.evaluate(()=>window.scrollTo(0,0)); await p.waitForTimeout(150); await p.screenshot({ path: OUT+name }); }
  await ctx.close();
  console.log('  ✓ ' + name);
};

await shot('/', 1440, 1000, '01-accueil-desktop-hero.png', '.hero');
await shot('/', 1440, 1000, '02-accueil-desktop-besoins.png', '.grid--4');
await shot('/', 1440, 1000, '03-accueil-desktop-modes.png', '.grid--3');
await shot('/', 1440, 1000, '04-accueil-desktop-methode.png', '.timeline');
await shot('/', 1440, 1000, '05-accueil-desktop-licence.png', '.licence-band');
await shot('/', 1440, 1000, '06-accueil-desktop-securite.png', '.card--proof');
await shot('/', 1440, 1000, '07-accueil-desktop-footer.png', '.site-footer');
await shot('/', 375, 812, '08-accueil-mobile-hero.png', '.hero');
await shot('/', 375, 812, '09-accueil-mobile-cartes.png', '.grid--4');
await shot('/solutions/vote-electronique-assemblee-generale/', 1440, 1000, '10-ag-desktop-hero.png', '.hero');
await shot('/solutions/vote-electronique-assemblee-generale/', 1440, 1000, '11-ag-desktop-emargement.png', '.split');
await shot('/solutions/vote-electronique-assemblee-generale/', 375, 812, '12-ag-mobile-hero.png', '.hero');
await shot('/demonstration/', 1440, 1200, '13-demonstration-desktop.png', '.split');
await shot('/demonstration/', 375, 812, '14-demonstration-mobile.png', 'form');

// menu mobile ouvert
const ctx = await b.newContext({ viewport:{width:375,height:812}, deviceScaleFactor:2 });
const p = await ctx.newPage();
await p.goto(BASE+'/');
await p.locator('.nav-toggle').first().click();
await p.waitForTimeout(250);
await p.screenshot({ path: OUT+'15-menu-mobile.png' });
console.log('  ✓ 15-menu-mobile.png');
await ctx.close();
await b.close();
