/* Recette V2 — configurateur, formulaires, vidéo, sans JavaScript.
   node qa/v2-interactions.mjs   (serveur local sur 4321) */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('/opt/homebrew/lib/node_modules/playwright/node_modules/playwright-core');
const BASE = (process.env.MV_BASE || 'http://localhost:4321');
const b = await chromium.launch();
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`  ${ok ? '✓' : '✗'} ${name}${detail ? ' — ' + detail : ''}`); };

async function page(w = 1440, opts = {}) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, ...opts });
  const p = await ctx.newPage();
  p._errors = [];
  p.on('pageerror', e => p._errors.push(e.message));
  p.on('console', m => { if (m.type() === 'error') p._errors.push(m.text()); });
  return p;
}
const answer = async (p, vals) => {
  for (const [n, v] of Object.entries(vals)) await p.locator(`.cfg__opt input[name="${n}"][value="${v}"]`).check({ force: true });
};

/* 1. Parcours desktop, cas hybride */
{
  const p = await page();
  await p.goto(BASE + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1700);
  check('Résultat masqué au chargement', await p.locator('[data-cfg-result]').isHidden());
  check('Formulaire de fin masqué au chargement', await p.locator('[data-cfg-lead]').isHidden());
  await p.locator('form[data-cfg] button[type=submit]').click();
  const err = await p.locator('[data-cfg-error]').textContent();
  check('Soumission incomplète signalée', /question 1/.test(err), err.trim());
  await answer(p, { vote: 'ag', mode: 'hybride', organisation: 'entreprise', votants: '150-299' });
  await p.locator('form[data-cfg] button[type=submit]').click(); await p.waitForTimeout(400);
  check('Résultat affiché', await p.locator('[data-cfg-result]').isVisible());
  const kicker = await p.locator('.cfg-res__kicker').textContent();
  check('AG hybride → ProVote® + boîtiers en alternative', /ProVote®.*ou Boîtiers/.test(kicker), kicker.trim());
  check('Focus sur le titre du résultat', await p.evaluate(() => document.activeElement.id === 'cfg-need-title'));
  check('Hash de partage', (await p.evaluate(() => location.hash)) === '#solution=ag.hybride.entreprise.150-299');
  const cta = await p.locator('.cfg-res .solcard__cta').first().textContent();
  check('CTA personnalisé', /pour mon AG/.test(cta), cta.replace(/\s+/g, ' ').trim());
  check('Formulaire de fin visible', await p.locator('[data-cfg-lead]').isVisible());
  const hidden = await p.evaluate(() => [...document.querySelectorAll('[data-cfg-field]')].map(i => i.name + '=' + i.value).join('&'));
  check('Réponses jointes au formulaire', hidden.includes('vote=ag') && hidden.includes('recommandation=provote+boitier'), hidden);
  const demo = await p.locator('.cfg-res a[href^="/demonstration/"]').getAttribute('href');
  check('Lien démo avec réponses', demo.includes('vote=ag') && demo.includes('mode=hybride'), demo);

  /* Mise à jour en direct */
  await answer(p, { mode: 'distance' }); await p.waitForTimeout(200);
  const k2 = await p.locator('.cfg-res__kicker').textContent();
  check('Mise à jour en direct → ProVote® seul', /ProVote®/.test(k2) && !/ou/.test(k2), k2.trim());
  await answer(p, { vote: 'cse', mode: 'presentiel' }); await p.waitForTimeout(200);
  const k3 = await p.locator('.cfg-res__kicker').textContent();
  check('CSE en présentiel → ProVote® uniquement', /ProVote®/.test(k3) && !/Boîtiers/.test(k3), k3.trim());
  await answer(p, { vote: 'ca', mode: 'presentiel' }); await p.waitForTimeout(200);
  const k4 = await p.locator('.cfg-res__kicker').textContent();
  check('CA en présentiel → boîtiers ou ProVote®', /Boîtiers de vote HF.*ou ProVote®/.test(k4), k4.trim());
  check('Deux cartes affichées', (await p.locator('.cfg-res .solcard').count()) === 2);

  /* Formulaire de fin : validation, anti-robots, puis envoi vers Zoho — intercepté
     avant de quitter le site : aucun prospect n'est créé pendant la recette. */
  let zohoPost = null;
  await p.route('**/crm/WebToLeadForm', async route => { zohoPost = route.request().postData(); await route.fulfill({ status: 200, contentType: 'text/html', body: '<title>intercepté</title>' }); });
  await p.locator('#l-nom').fill('Test Recette'); await p.locator('#l-org').fill('Organisation test');
  await p.locator('#l-mail').fill('recette@example.org'); await p.locator('#l-consent').check();
  await p.locator('.cfg__lead-form button[type=submit]').click();
  const st = await p.locator('.cfg__lead-form [data-form-status]').textContent();
  check('Captcha obligatoire avant envoi', /code de sécurité/.test(st + (await p.locator('#l-captcha-error').textContent())), st.slice(0, 60));
  await p.locator('#l-captcha').fill('abc12');
  await p.locator('#l-captcha').blur(); await p.waitForTimeout(400); // le message d'erreur disparaît et décale le bouton
  await p.evaluate(() => { document.querySelector('.cfg__lead-form [data-form-opened]').value = String(Date.now()); });
  await p.locator('.cfg__lead-form button[type=submit]').click();
  const st2 = await p.locator('.cfg__lead-form [data-form-status]').textContent();
  check('Soumission trop rapide bloquée', /patienter/.test(st2), st2);
  await p.evaluate(() => { document.querySelector('.cfg__lead-form [data-form-opened]').value = '1'; document.querySelector('#l-site').value = 'spam'; });
  await p.locator('.cfg__lead-form button[type=submit]').click();
  check('Champ leurre rempli bloqué', /patienter/.test(await p.locator('.cfg__lead-form [data-form-status]').textContent()));
  await p.evaluate(() => { document.querySelector('#l-site').value = ''; });
  await p.locator('.cfg__lead-form button[type=submit]').click();
  await p.waitForTimeout(1200);
  const body = decodeURIComponent((zohoPost || '').replace(/\+/g, ' '));
  check('Envoi POST vers Zoho (intercepté)', !!zohoPost, (zohoPost || '').slice(0, 40));
  check('Jetons Zoho présents', /xnQsjsdp=858b5bd9/.test(body) && /actionType=TGVhZHM=/.test(body));
  check('Champs Zoho renseignés', /Last Name=Test Recette/.test(body) && /Company=Organisation test/.test(body) && /Lead Source=Site Web Mediavote/.test(body));
  check('Titre de la demande composé', /LEADCF5=Configurateur du site · Conseil d’administration · présentiel/.test(body), (body.match(/LEADCF5=[^&]*/) || [''])[0]);
  check('Prestation souhaitée déduite', /LEADCF11=Boitiers/.test(body), (body.match(/LEADCF11=[^&]*/) || [''])[0]);
  check('Date du jour et page de retour', /LEADCF117=\d{2}\/\d{2}\/\d{4}/.test(body) && /returnURL=http:\/\/localhost:\d+\/merci\//.test(body));
  await p.goto(BASE + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);

  /* Réinitialisation */
  await answer(p, { vote: 'ag', mode: 'hybride', organisation: 'entreprise', votants: '150-299' });
  await p.locator('form[data-cfg] button[type=submit]').click(); await p.waitForTimeout(400);
  await p.locator('.cfg__reset').click(); await p.waitForTimeout(200);
  check('Réinitialisation', await p.locator('[data-cfg-result]').isHidden() && (await p.evaluate(() => location.hash)) === '');
  check('Aucune erreur JavaScript (accueil)', p._errors.length === 0, p._errors.join(' | '));
  await p.context().close();
}

/* 2. Lien partagé */
{
  const p = await page();
  await p.goto(BASE + '/#solution=referendum.presentiel.association.moins-50', { waitUntil: 'networkidle' }); await p.waitForTimeout(1800);
  const k = await p.locator('.cfg-res__kicker').textContent().catch(() => '');
  check('Lien partagé restauré', /Boîtiers de vote HF/.test(k), k.trim());
  await p.context().close();
}

/* 3. Mobile : repli des questions */
{
  const p = await page(390, { isMobile: true, hasTouch: true });
  await p.goto(BASE + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1700);
  await p.locator('.cfg__opt input[name="vote"][value="ag"]').check({ force: true }); await p.waitForTimeout(300);
  const collapsed = await p.evaluate(() => document.querySelector('.cfg__step[data-step="vote"]').classList.contains('is-collapsed'));
  check('Mobile : question répondue repliée', collapsed);
  const val = await p.locator('.cfg__step[data-step="vote"] .cfg__value-text').textContent();
  check('Mobile : valeur affichée', /Assemblée générale/.test(val), val);
  await p.locator('.cfg__step[data-step="vote"] .cfg__value').click();
  check('Mobile : réouverture au toucher', !(await p.evaluate(() => document.querySelector('.cfg__step[data-step="vote"]').classList.contains('is-collapsed'))));
  check('Mobile : pas de débordement', (await p.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 0);
  await p.context().close();
}

/* 4. Démo pré-remplie */
{
  const p = await page();
  await p.goto(BASE + '/demonstration/?vote=ag&mode=hybride&organisation=entreprise&votants=150-299', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  const v = await p.evaluate(() => ['scrutin', 'mode', 'votants'].map(n => document.querySelector(`select[name=${n}]`).value).join(','));
  check('Démo : sélections reprises', v === 'ag,hybride,150-299', v);
  check('Démo : note de reprise visible', await p.locator('[data-prefill-note]').isVisible());
  await p.context().close();
}

/* 5. Vidéo façade */
{
  const p = await page();
  await p.goto(BASE + '/provote/', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
  const ytBefore = await p.evaluate(() => performance.getEntriesByType('resource').filter(r => /youtube|ytimg/.test(r.name)).length);
  check('Aucune requête YouTube avant le clic', ytBefore === 0, String(ytBefore));
  await p.locator('a[data-video]').first().click(); await p.waitForTimeout(300);
  const src = await p.locator('iframe.video__frame').getAttribute('src');
  check('Clic → lecteur youtube-nocookie', /youtube-nocookie\.com\/embed\/LYcZGKb4SE0/.test(src), src);
  await p.context().close();
}

/* 6. Sans JavaScript */
{
  const p = await page(1440, { javaScriptEnabled: false });
  await p.goto(BASE + '/', { waitUntil: 'networkidle' });
  check('Sans JS : tableau de repli visible', await p.locator('.cfg__nojs').isVisible());
  check('Sans JS : questions lisibles', (await p.locator('.cfg__opt').count()) === 24);
  check('Sans JS : bouton de calcul masqué', await p.locator('.cfg__actions').isHidden());
  await p.context().close();
}

await b.close();
const ko = results.filter(r => !r.ok);
console.log(`\n  ${results.length - ko.length}/${results.length} contrôles réussis`);
process.exit(ko.length ? 1 : 0);
