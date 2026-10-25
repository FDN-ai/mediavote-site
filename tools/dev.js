#!/usr/bin/env node
/* ==========================================================================
   MEDIA VOTE — Mode rédaction en local
   Lance en même temps :
     1. le serveur Decap (`decap-server`) qui permet à /admin/ d'écrire les
        articles directement dans content/actualites/, sans GitHub ;
     2. une reconstruction automatique du site à chaque enregistrement ;
     3. le serveur d'aperçu sur http://localhost:4400/.
   Usage : npm run cms   (ou node tools/dev.js)
   ========================================================================== */

const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PORT = process.env.PORT || '4400';
const WATCH = ['content', 'src', 'styles', 'scripts', 'public'].map((d) => path.join(ROOT, d));

let building = false, queued = false;
function build() {
  if (building) { queued = true; return; }
  building = true;
  const r = spawnSync('node', ['build.js'], { cwd: ROOT, stdio: 'inherit' });
  building = false;
  if (r.status !== 0) console.log('\x1b[31m  Le site n’a pas été reconstruit : corrigez l’erreur ci-dessus.\x1b[0m');
  if (queued) { queued = false; build(); }
}

build();

let timer = null;
WATCH.forEach((dir) => {
  if (!fs.existsSync(dir)) return;
  fs.watch(dir, { recursive: true }, (_, file) => {
    if (!file || /\.DS_Store|~$/.test(file)) return;
    clearTimeout(timer);
    timer = setTimeout(() => { console.log(`\n  ${file} modifié — reconstruction…`); build(); }, 350);
  });
});

/* Un serveur sert peut-être déjà dist/ sur ce port (aperçu de l'éditeur) :
   on le réutilise au lieu de planter. */
const net = require('net');
const busy = (port) => new Promise((ok) => {
  const s = net.connect(port, '127.0.0.1');
  s.once('connect', () => { s.destroy(); ok(true); });
  s.once('error', () => ok(false));
});
const children = [];
(async () => {
  if (await busy(+PORT)) console.log(`  Un serveur répond déjà sur le port ${PORT} : il est réutilisé.`);
  else children.push(spawn('node', ['serve.js'], { cwd: ROOT, stdio: 'inherit', env: { ...process.env, PORT } }));
  if (await busy(8081)) console.log('  Le serveur Decap répond déjà sur le port 8081 : il est réutilisé.');
  else children.push(spawn('npx', ['--yes', 'decap-server'], { cwd: ROOT, stdio: 'inherit', env: { ...process.env, PORT: '8081' } }));
  console.log(`\n\x1b[1m  Rédaction : http://localhost:${PORT}/admin/   ·   Site : http://localhost:${PORT}/\x1b[0m\n`);
})();

const stop = () => { children.forEach((c) => c.kill()); process.exit(0); };
process.on('SIGINT', stop);
process.on('SIGTERM', stop);
