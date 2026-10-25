/* Serveur de connexion GitHub pour Decap CMS — Cloudflare Worker (gratuit).
   Deux routes : /auth redirige vers GitHub ; /callback échange le code contre
   un jeton et le renvoie à la fenêtre d'administration, comme Decap l'attend.
   Secrets : GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET (wrangler secret put …). */
export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === '/auth') {
      const to = new URL('https://github.com/login/oauth/authorize');
      to.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      to.searchParams.set('scope', 'repo,user');
      to.searchParams.set('redirect_uri', `${url.origin}/callback`);
      return Response.redirect(to.toString(), 302);
    }
    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code');
      const r = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code })
      });
      const data = await r.json();
      const status = data.access_token ? 'success' : 'error';
      const payload = JSON.stringify(data.access_token ? { token: data.access_token, provider: 'github' } : data);
      const html = `<!doctype html><script>
        (function () {
          function send(e) {
            window.opener.postMessage('authorization:github:${status}:${payload.replace(/'/g, "\\'")}', e.origin);
          }
          window.addEventListener('message', send, false);
          window.opener.postMessage('authorizing:github', '*');
        })();
      </script>Connexion en cours…`;
      return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    }
    return new Response('Serveur de connexion Decap CMS', { status: 200 });
  }
};
