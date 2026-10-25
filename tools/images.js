#!/usr/bin/env node
/* ==========================================================================
   MEDIA VOTE — Pipeline d'images
   Produit, pour chaque visuel source, un jeu responsive en trois formats :
     AVIF   — le plus léger, servi en priorité
     WebP   — repli pour les navigateurs sans AVIF
     JPEG   — dernier repli
   Les visuels du hero passent sous un voile navy à 42–80 % d'opacité :
   la compression peut donc être franche sans perte perceptible.

   Usage : node tools/images.js
   Requiert cwebp et ffmpeg (installés via Homebrew).
   ========================================================================== */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'assets/sources');
const OUT = path.join(ROOT, 'public/assets/img');

const WIDTHS = [768, 1280, 1920, 2560];
const AVIF_CRF = 38;
const WEBP_Q = 58;
const JPEG_Q = 68;

const run = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'ignore', 'pipe'] });
const kb = (f) => Math.round(fs.statSync(f).size / 1024);

function encode(file) {
  const name = path.basename(file, path.extname(file));
  const rows = [];

  for (const w of WIDTHS) {
    const tmp = path.join('/tmp', `mv-${name}-${w}.png`);
    run('sips', ['-Z', String(w), file, '--out', tmp]);

    const avif = path.join(OUT, `${name}-${w}.avif`);
    run('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-c:v', 'libsvtav1',
      '-crf', String(AVIF_CRF), '-pix_fmt', 'yuv420p', '-frames:v', '1', '-f', 'avif', avif]);

    const webp = path.join(OUT, `${name}-${w}.webp`);
    run('cwebp', ['-q', String(WEBP_Q), '-m', '6', '-quiet', tmp, '-o', webp]);

    const jpg = path.join(OUT, `${name}-${w}.jpg`);
    run('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', String(JPEG_Q), tmp, '--out', jpg]);

    rows.push({ w, avif: kb(avif), webp: kb(webp), jpg: kb(jpg) });
    fs.unlinkSync(tmp);
  }

  console.log(`\n  ${name}`);
  rows.forEach((r) => console.log(
    `    ${String(r.w).padStart(4)} px   avif ${String(r.avif).padStart(4)} Ko   webp ${String(r.webp).padStart(4)} Ko   jpeg ${String(r.jpg).padStart(4)} Ko`
  ));
  return rows;
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`Dossier source introuvable : ${SRC}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT, { recursive: true });

  const files = fs.readdirSync(SRC).filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();
  if (!files.length) { console.error('Aucun visuel source à traiter.'); return; }

  console.log('\n\x1b[1mMEDIA VOTE — encodage des visuels\x1b[0m');
  let total = 0;
  files.forEach((f) => {
    const rows = encode(path.join(SRC, f));
    total += rows.reduce((a, r) => a + r.avif, 0);
  });
  console.log(`\n  ${files.length} visuel(s) · ${WIDTHS.length} largeurs · 3 formats`);
  console.log(`  Poids AVIF cumulé : ${total} Ko (un seul fichier est téléchargé par visite)\n`);
}

main();
