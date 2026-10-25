import { chromium } from 'playwright-core';
const BASE = 'http://localhost:4321';
const ok = [], ko = [];
const t = (label, cond, detail='') => (cond ? ok : ko).push(label + (detail ? ` — ${detail}` : ''));

const browser = await chromium.launch({ channel: 'chromium' });

/* ---------- 1. Navigation clavier desktop ---------- */
let ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
let page = await ctx.newPage();
await page.goto(BASE + '/');

// Lien d'évitement = premier élément focusable
await page.keyboard.press('Tab');
let first = await page.evaluate(() => document.activeElement.className);
t('Lien d’évitement en premier focus', first.includes('skip-link'), first);

// Contour de focus visible
let outline = await page.evaluate(() => {
  const s = getComputedStyle(document.activeElement);
  return { w: s.outlineWidth, style: s.outlineStyle };
});
t('Focus visible (contour ≥ 2px)', parseFloat(outline.w) >= 2 && outline.style !== 'none', JSON.stringify(outline));

// Ouverture d'un sous-menu au clavier
await page.locator('.nav__toggle').first().focus();
await page.keyboard.press('Enter');
let open = await page.evaluate(() => {
  const b = document.querySelector('.nav__toggle');
  return { exp: b.getAttribute('aria-expanded'), hidden: document.getElementById(b.getAttribute('aria-controls')).hidden };
});
t('Sous-menu s’ouvre à Entrée', open.exp === 'true' && open.hidden === false, JSON.stringify(open));

// Échap referme et rend le focus
await page.keyboard.press('Escape');
let closed = await page.evaluate(() => {
  const b = document.querySelector('.nav__toggle');
  return { exp: b.getAttribute('aria-expanded'), focused: document.activeElement === b };
});
t('Échap referme et restitue le focus', closed.exp === 'false' && closed.focused, JSON.stringify(closed));

/* ---------- 2. Accordéon FAQ ---------- */
await page.goto(BASE + '/');
const scrollTo = async (loc) => { await loc.evaluate(e => e.scrollIntoView({ block: "center", behavior: "instant" })); await page.waitForTimeout(120); };
const faqBtn = page.locator(".faq__button").first();
await scrollTo(faqBtn);
await faqBtn.click();
let faq1 = await page.evaluate(() => {
  const b = document.querySelector('.faq__button');
  return { exp: b.getAttribute('aria-expanded'), visible: !document.getElementById(b.getAttribute('aria-controls')).hidden };
});
t('FAQ s’ouvre au clic', faq1.exp === 'true' && faq1.visible, JSON.stringify(faq1));

// Ouverture indépendante : la 2e n'referme pas la 1re
const faq2btn = page.locator('.faq__button').nth(1); await scrollTo(faq2btn); await faq2btn.click();
let faq2 = await page.evaluate(() => {
  const bs = document.querySelectorAll('.faq__button');
  return [...bs].slice(0,2).map(b => b.getAttribute('aria-expanded'));
});
t('FAQ : ouverture indépendante', faq2[0] === 'true' && faq2[1] === 'true', JSON.stringify(faq2));

// Contenu présent dans le DOM même replié (indexable)
await faqBtn.click();
let inDom = await page.evaluate(() => document.querySelector('.faq__panel').textContent.trim().length > 50);
t('FAQ : réponse présente dans le DOM même repliée', inDom);

/* ---------- 3. Menu mobile ---------- */
await ctx.close();
ctx = await browser.newContext({ viewport: { width: 375, height: 800 } });
page = await ctx.newPage();
await page.goto(BASE + '/');
await page.locator('.nav-toggle').first().click();
await page.waitForTimeout(400);
let mob = await page.evaluate(() => ({
  hidden: document.getElementById('mobile-nav').hidden,
  exp: document.querySelector('.nav-toggle').getAttribute('aria-expanded'),
  bodyLock: document.body.style.position === 'fixed',
  focusInside: document.getElementById('mobile-nav').contains(document.activeElement)
}));
t('Menu mobile s’ouvre', mob.hidden === false && mob.exp === 'true', JSON.stringify(mob));
t('Défilement de page bloqué', mob.bodyLock === true);
t('Focus déplacé dans le panneau', mob.focusInside);

await page.keyboard.press('Escape');
await page.waitForTimeout(500);
await page.waitForTimeout(400);
let mobClosed = await page.evaluate(() => ({
  hidden: document.getElementById('mobile-nav').hidden,
  restored: document.activeElement === document.querySelector('.nav-toggle')
}));
t('Échap ferme le menu mobile', mobClosed.hidden === true);
t('Focus restitué au bouton', mobClosed.restored);

/* ---------- 4. Formulaire ---------- */
await ctx.close();
ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
page = await ctx.newPage();
await page.goto(BASE + '/demonstration/');

// Soumission vide → erreurs
{ const sb = page.locator('form[data-validate] button[type=submit]'); await sb.evaluate(e => e.scrollIntoView({block:'center',behavior:'instant'})); await page.waitForTimeout(120); await sb.click(); }
let errs = await page.evaluate(() => ({
  messages: [...document.querySelectorAll('.form__error')].map(e => e.textContent.trim()).filter(Boolean),
  invalides: document.querySelectorAll('[aria-invalid="true"]').length,
  focusSurPremier: document.activeElement.id,
  statut: document.querySelector('[data-form-status]').textContent.trim()
}));
t('Formulaire : erreurs affichées si vide', errs.messages.length >= 4, `${errs.messages.length} messages`);
t('Formulaire : aria-invalid posé', errs.invalides >= 4, String(errs.invalides));
t('Formulaire : focus sur le premier champ en erreur', errs.focusSurPremier === 'organisation', errs.focusSurPremier);
t('Formulaire : messages en français', errs.messages.every(m => /[àâéèêîôûç’]/i.test(m) || /Merci/.test(m)), errs.messages[0]);

// E-mail invalide
await page.fill('#email', 'pasunemail');
await page.locator('#nom').click();
let mail = await page.textContent('#email-error');
t('Formulaire : e-mail invalide détecté', /valide/.test(mail), mail.slice(0, 60));

// Remplissage valide → aucun envoi simulé
await page.fill('#organisation', 'Fédération de test');
await page.fill('#nom', 'Jean Dupont');
await page.fill('#email', 'jean.dupont@example.org');
await page.selectOption('#scrutin', 'Assemblée générale');
await page.locator('#consent').focus(); await page.keyboard.press('Space');  // geste clavier réel, insensible aux décalages de mise en page
{ const sb = page.locator('form[data-validate] button[type=submit]'); await sb.evaluate(e => e.scrollIntoView({block:'center',behavior:'instant'})); await page.waitForTimeout(120); await sb.click(); }
let statut = await page.textContent('[data-form-status]');
t('Formulaire valide : aucun envoi simulé, message explicite',
  /pas encore raccordé/.test(statut) && /contact@media-vote\.com/.test(statut), statut.slice(0, 80));

// Case à cocher : les deux gestes utilisateur
await page.goto(BASE + '/demonstration/');
await page.locator('#consent').focus();
await page.keyboard.press('Space');
t('Case à cocher : Espace au clavier', await page.evaluate(() => document.getElementById('consent').checked));
await page.evaluate(() => { document.getElementById('consent').checked = false; });
await page.locator('label[for="consent"]').click({ position: { x: 10, y: 10 } });
t('Case à cocher : clic sur le libellé', await page.evaluate(() => document.getElementById('consent').checked));

/* ---------- 5. Sans JavaScript ---------- */
await ctx.close();
ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false });
page = await ctx.newPage();
await page.goto(BASE + '/');
let nojs = await page.evaluate(() => 1).catch(() => null);
let nojsCheck = await page.locator('.faq__panel').first().isVisible();
t('Sans JS : réponses FAQ visibles', nojsCheck);
let navVisible = await page.locator('.nav__submenu a').first().isVisible();
t('Sans JS : sous-menus accessibles', navVisible);
let h1 = await page.textContent('h1');
t('Sans JS : contenu principal rendu', /vote électronique/i.test(h1), h1);

await browser.close();

console.log('\n\x1b[1mTESTS D’INTERACTION\x1b[0m\n');
ok.forEach(x => console.log('  \x1b[32m✓\x1b[0m ' + x));
if (ko.length) { console.log(''); ko.forEach(x => console.log('  \x1b[31m✗\x1b[0m ' + x)); }
console.log(`\n  ${ok.length} réussis · ${ko.length} échecs\n`);
process.exit(ko.length ? 1 : 0);
