import { chromium } from 'playwright-core';
const BASE='http://localhost:4321';
const PAGES=['/','/solutions/vote-electronique-assemblee-generale/','/solutions/elections-cse/','/modes-de-vote/vote-par-boitier/','/offres/licence-annuelle-provote/','/securite-conformite/','/secteurs/associations-federations/','/a-propos/','/faq/','/contact/','/references/','/plan-du-site/'];
const W=[320,768,1440];
const b=await chromium.launch({channel:'chromium'});
const errs=[];
for(const url of PAGES){
  for(const w of W){
    const c=await b.newContext({viewport:{width:w,height:900}});
    const p=await c.newPage();
    p.on('console',m=>{if(m.type()==='error')errs.push(`${url}@${w} console: ${m.text().slice(0,90)}`)});
    p.on('pageerror',e=>errs.push(`${url}@${w} pageerror: ${e.message.slice(0,90)}`));
    const r=await p.goto(BASE+url,{waitUntil:'networkidle'});
    if(r.status()!==200) errs.push(`${url} → ${r.status()}`);
    await p.waitForTimeout(1200);
    const o=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,iw:window.innerWidth,
      loader:!!document.querySelector('.mv-loader'),
      culprits:[...document.querySelectorAll('*')].filter(e=>e.getBoundingClientRect().right>window.innerWidth+1).slice(0,3).map(e=>e.tagName+'.'+(e.className.toString().split(' ')[0]||'?'))}));
    if(o.sw>o.iw) errs.push(`débordement ${url}@${w}px : ${o.sw} (${o.culprits.join(', ')})`);
    if(o.loader) errs.push(`rideau non retiré ${url}@${w}px`);
    await c.close();
  }
}
// structure
const c=await b.newContext({viewport:{width:1280,height:900}});
const p=await c.newPage();
for(const url of PAGES){
  await p.goto(BASE+url,{waitUntil:'networkidle'}); await p.waitForTimeout(1200);
  const a=await p.evaluate(()=>{const i=[];
    if(document.querySelectorAll('h1').length!==1)i.push('H1≠1');
    if(!document.querySelector('main#main'))i.push('pas de main#main');
    if(document.documentElement.lang!=='fr')i.push('lang≠fr');
    document.querySelectorAll('[aria-controls]').forEach(bt=>{const pa=document.getElementById(bt.getAttribute('aria-controls'));
      if(!pa)i.push('aria-controls orphelin: '+bt.getAttribute('aria-controls'));});
    document.querySelectorAll('input,select,textarea').forEach(f=>{if(f.type==='hidden')return;
      if(!document.querySelector(`label[for="${f.id}"]`))i.push('champ sans label: '+(f.id||f.name));});
    const lv=[...document.querySelectorAll('h1,h2,h3,h4')].map(h=>+h.tagName[1]);
    for(let k=1;k<lv.length;k++)if(lv[k]-lv[k-1]>1){i.push(`saut h${lv[k-1]}→h${lv[k]}`);break;}
    return i;});
  a.forEach(x=>errs.push(`${url} — ${x}`));
}
// liens
const seen=new Set();
for(const url of PAGES){await p.goto(BASE+url);(await p.evaluate(()=>[...document.querySelectorAll('a[href^="/"]')].map(a=>a.getAttribute('href')))).forEach(h=>seen.add(h.split('#')[0]));}
for(const h of seen){if(h.startsWith('/assets/'))continue;const r=await p.goto(BASE+h,{waitUntil:'domcontentloaded'});if(r.status()!==200)errs.push(`lien ${h} → ${r.status()}`);}
await b.close();
console.log(`\n${PAGES.length} pages × ${W.length} largeurs · ${seen.size} liens testés`);
console.log(`\nERREURS (${errs.length})`);
errs.slice(0,25).forEach(e=>console.log('  ✗ '+e));
if(!errs.length)console.log('  ✓ aucune');
