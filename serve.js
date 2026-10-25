#!/usr/bin/env node
/* ==========================================================================
   MEDIA VOTE — Serveur statique de développement
   Zéro dépendance. Sert dist/ sur le port fourni par la variable PORT
   (ou 4321 par défaut), pour que l'hôte puisse en attribuer un libre.
   ========================================================================== */

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 4321;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); return res.end('Requête invalide'); }

  // Empêche toute sortie du dossier dist/
  let file = path.normalize(path.join(ROOT, pathname));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('Accès refusé'); }

  if (file.endsWith(path.sep) || !path.extname(file)) file = path.join(file, 'index.html');

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end('<h1>404 — page introuvable</h1><p><a href="/">Retour à l’accueil</a></p>');
    }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Media Vote — http://localhost:${PORT}`);
});
