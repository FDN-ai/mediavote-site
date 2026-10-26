/* ==========================================================================
   Page de remerciement — destination après l'envoi d'un formulaire à Zoho.
   Non indexée (robots.txt et noindex).
   ========================================================================== */

const C = require('../components');
const { site } = require('../data/site');

const page = {
  url: '/merci/',
  title: 'Merci, votre demande est bien reçue | Mediavote',
  description: 'Votre demande a bien été transmise à l’équipe Mediavote. Un chef de projet vous recontacte sous 48 heures ouvrées pour en parler et préparer la suite avec vous.',
  priority: 'P2',
  noindex: true,
  loader: false
};

const body = `
<section class="hero hero--page">
  ${C.heroPlate('hero-accueil', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Demande envoyée</span>
      <h1 style="margin-top:var(--mv-space-4)">Merci, votre demande est bien reçue</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">
        Elle a été transmise à l’équipe Mediavote. Un chef de projet vous recontacte rapidement,
        par e-mail ou par téléphone, pour en parler avec vous.
      </p>
      <div class="btn-group" style="margin-top:var(--mv-space-8)">
        <a class="btn btn--xl btn--primary" href="/">Retour à l’accueil${C.icons.arrow}</a>
        <a class="btn btn--secondary" href="/actualites/">Lire nos actualités</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'En attendant', title: 'Ce qui va se passer' })}
    <ul>
      <li>Votre demande est enregistrée et un membre de l’équipe en est informé immédiatement</li>
      <li>Nous vous répondons sous 48 heures ouvrées, avec une réponse adaptée à votre scrutin</li>
      <li>Une question urgente&nbsp;? Appelez le <a href="${site.phoneHref}">${site.phone}</a>, du lundi au vendredi</li>
    </ul>
  </div>
</section>
`;

module.exports = { page, body };
