/* ==========================================================================
   MEDIA VOTE — Articles (rubrique Actualités)
   Chaque article est un fichier Markdown dans content/actualites/, écrit
   depuis l'interface /admin/ (Decap CMS) ou à la main. Ce module les lit,
   convertit le Markdown en HTML et fournit les données aux pages.
   Zéro dépendance : le convertisseur couvre ce que l'éditeur produit
   (titres, paragraphes, gras, italique, liens, listes, citations, images).
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'content', 'actualites');
const PROD = process.argv.includes('--prod');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ------------------------------------------------------------ Frontmatter */
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  m[1].split(/\r?\n/).forEach((line) => {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (!kv) return;
    let v = kv[2].trim();
    if (/^["'].*["']$/.test(v)) v = v.slice(1, -1).replace(/\\"/g, '"');
    else if (v === 'true') v = true;
    else if (v === 'false') v = false;
    data[kv[1]] = v;
  });
  return { data, body: m[2] };
}

/* ----------------------------------------------------------------- Inline */
function inline(t) {
  return esc(t)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy" decoding="async">')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(«])\*([^*]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

/* ----------------------------------------------------------------- Blocks */
function markdown(src) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  const para = [];
  const flush = () => { if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para.length = 0; } };

  while (i < lines.length) {
    const line = lines[i];
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) { flush(); const lvl = Math.max(2, h[1].length); out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`); i++; continue; }
    if (/^\s*$/.test(line)) { flush(); i++; continue; }
    if (/^>\s?/.test(line)) {
      flush(); const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push(`<blockquote><p>${inline(q.join(' '))}</p></blockquote>`); continue;
    }
    if (/^(\s*[-*]\s+|\s*\d+\.\s+)/.test(line)) {
      flush();
      const ordered = /^\s*\d+\./.test(line);
      const items = [];
      while (i < lines.length && /^(\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i])) {
        items.push(lines[i].replace(/^(\s*[-*]\s+|\s*\d+\.\s+)/, '')); i++;
      }
      out.push(`<${ordered ? 'ol' : 'ul'}>${items.map((it) => `<li>${inline(it)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`);
      continue;
    }
    if (/^!\[[^\]]*\]\([^)]+\)\s*$/.test(line)) { flush(); out.push(`<figure class="article__fig">${inline(line)}</figure>`); i++; continue; }
    if (/^(---|\*\*\*)\s*$/.test(line)) { flush(); out.push('<hr>'); i++; continue; }
    if (/^\|.*\|\s*$/.test(line)) {
      flush(); const rows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(rows[0]);
      const body = rows.slice(/^\|\s*:?-+/.test(rows[1] || '') ? 2 : 1);
      out.push(`<div class="table-scroll" tabindex="0"><table><thead><tr>${head.map((c) => `<th scope="col">${inline(c)}</th>`).join('')}</tr></thead><tbody>${
        body.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    para.push(line.trim()); i++;
  }
  flush();
  return out.join('\n');
}

/* ----------------------------------------------------------------- Slug */
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[’']/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/* ----------------------------------------------------------------- Lecture */
function readArticles() {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const { data, body } = parseFrontmatter(fs.readFileSync(path.join(DIR, f), 'utf8'));
      const slug = data.slug || slugify(path.basename(f, '.md').replace(/^\d{4}-\d{2}-\d{2}-/, ''));
      const text = body.trim();
      const words = text.split(/\s+/).filter(Boolean).length;
      return {
        file: f,
        slug,
        url: `/actualites/${slug}/`,
        title: data.title || slug,
        description: data.description || '',
        category: data.category || 'Actualité',
        date: data.date || '',
        image: data.image || '',
        imageAlt: data.image_alt || '',
        draft: data.draft === true,
        html: markdown(text),
        readingMinutes: Math.max(1, Math.round(words / 200)),
        words
      };
    })
    // En production, un brouillon n'existe pas. En aperçu, il est visible mais signalé.
    .filter((a) => !(PROD && a.draft))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

const dateFr = (iso) => {
  if (!iso) return '';
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  const d = m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(iso);
  return isNaN(d) ? iso : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
};

module.exports = { readArticles, markdown, dateFr, slugify };
