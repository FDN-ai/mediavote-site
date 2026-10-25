import { chromium } from 'playwright-core';
const BASE='http://localhost:4321', OUT='/Users/alexissuppelnarollemberg/Documents/MEDIA_VOTE/qa/';
const b=await chromium.launch({channel:'chromium'});
const shot=async(url,w,h,name,sel)=>{
  const c=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:2});
  const p=await c.newPage();
  await p.goto(BASE+url,{waitUntil:'networkidle'});
  await p.waitForTimeout(2600);
  await p.addStyleTag({content:'html{scroll-behavior:auto!important}'});
  if(sel){const l=p.locator(sel).first();await l.evaluate(e=>e.scrollIntoView({block:'start',behavior:'instant'}));await p.waitForTimeout(900);await l.screenshot({path:OUT+name});}
  else{await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(200);await p.screenshot({path:OUT+name});}
  await c.close(); console.log('  ✓ '+name);
};
await shot('/',1440,1000,'D1-accueil-hero.png','.hero');
await shot('/',1440,1000,'D2-accueil-besoins.png','.numlist');
await shot('/',1440,1000,'D3-accueil-ghost.png','.ghost-h');
await shot('/',1440,1000,'D4-accueil-methode.png','.section--dark');
await shot('/',1440,1000,'D5-accueil-licence.png','.licence-band');
await shot('/',1440,1000,'D6-accueil-footer.png','.site-footer');
await shot('/',375,812,'D7-accueil-mobile.png','.hero');
await shot('/solutions/vote-electronique-assemblee-generale/',1440,1000,'D8-ag-hero.png','.hero');
await shot('/demonstration/',1440,1200,'D9-demo.png','.hero');
await shot('/faq/',1440,1000,'D10-page-attente.png','.hero');
const c=await b.newContext({viewport:{width:375,height:812},deviceScaleFactor:2});
const p=await c.newPage(); await p.goto(BASE+'/'); await p.waitForTimeout(2600);
await p.locator('.nav-toggle').click(); await p.waitForTimeout(900);
await p.screenshot({path:OUT+'D11-menu-mobile.png'}); console.log('  ✓ D11-menu-mobile.png');
await c.close(); await b.close();
