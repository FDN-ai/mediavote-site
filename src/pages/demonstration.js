/* ==========================================================================
   Page de conversion — Démonstration
   Le formulaire est complet et validé côté interface. La soumission n'est
   PAS raccordée et ne simule aucun envoi : la destination technique est en
   attente (Q-B8). Voir docs/CONTENT-MODEL.md §11.
   ========================================================================== */

const C = require('../components');

const page = {
  url: '/demonstration/',
  title: 'Demander une démonstration de ProVote® | Mediavote',
  description: 'Une démonstration personnalisée de 30 à 45 minutes, construite sur votre scrutin réel : vos résolutions, vos règles de quorum, vos pouvoirs. Sans engagement.',
  priority: 'P0',
  schema: ['BreadcrumbList'],
  heroImage: 'hero-vote',
  breadcrumb: [
    { label: 'Accueil', url: '/' },
    { label: 'Démonstration', url: '/demonstration/' }
  ]
};

const F = C.forms;
const field = F.field;

const body = `
<section class="hero hero--page">
  ${C.heroPlate('hero-vote', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Démonstration</span>
      <h1 style="margin-top:var(--mv-space-4)">Découvrez ProVote® avec votre propre cas d’usage</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">
        Nous ne faisons pas de démonstration générique. Nous préparons une démonstration en prenant en
        compte votre contexte, vos statuts (quorum, majorité, pouvoirs et mandats…) et vos contraintes
        logistiques.
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <h2>Déroulé de la démonstration</h2>
        <ul>
          <li><strong>30 à 45 minutes</strong>, en visioconférence, à l’horaire qui vous convient</li>
          <li><strong>Sur votre scrutin réel.</strong> Nous préparons la démonstration à partir des informations que vous nous donnez ci-contre</li>
          <li><strong>Avec un chef de projet</strong>, pas seulement un commercial. Vous pouvez poser vos questions de paramétrage, de statuts et de calendrier</li>
          <li><strong>Sans engagement.</strong> Vous repartez avec une réponse claire sur la faisabilité et le déroulé</li>
        </ul>

        <h2 style="margin-top:var(--mv-space-8)">Ce que nous vous montrons</h2>
        <ul>
          <li>L’écran que verront vos votants</li>
          <li>Le paramétrage de vos résolutions ou de vos élections</li>
          <li>Le calcul du quorum et la gestion des pouvoirs selon vos règles</li>
          <li>Les rapports d’émargement et les rapports de vote auxquels vous avez accès</li>
          <li>L’accès Pilotage destiné aux organisateurs, à la direction, aux scrutateurs, à l’huissier ou à l’avocat</li>
        </ul>

        <p style="margin-top:var(--mv-space-6)"><strong>Vous envisagez plutôt des boîtiers de vote&nbsp;?</strong>
        Précisez-le dans le formulaire — mode de vote «&nbsp;En présentiel&nbsp;» — ou
        <a href="/modes-de-vote/vote-par-boitier/">découvrez les boîtiers HF</a>.</p>

        <div style="background:var(--mv-surface-blue);padding:var(--mv-space-5);border-radius:var(--mv-radius-lg);margin-top:var(--mv-space-6)">
          <p style="max-width:none"><strong>Vous préférez appeler ?</strong><br>
          <a href="tel:+33185092745">01 85 09 27 45</a> — du lundi au vendredi.<br>
          Ou écrivez-nous à <a href="mailto:contact@media-vote.com">contact@media-vote.com</a>.</p>
        </div>
      </div>

      <div>
        <h2>Demander une démonstration</h2>

        ${C.prodNote(`<p><strong>Formulaire non raccordé (Q-B8).</strong> L’interface, la validation et les messages
        d’erreur sont complets et fonctionnels. La <strong>soumission n’envoie rien</strong> et ne simule aucun envoi :
        la destination technique — webhook Zoho CRM, service de formulaire tiers ou script d’envoi serveur —
        est en attente de décision. Voir <code>docs/CONTENT-MODEL.md</code> §11.</p>`)}

        <form class="form" data-validate novalidate>
          <p class="prefill-note" data-prefill-note hidden>Vos réponses au configurateur ont été reprises ci-dessous. Vous pouvez les modifier.</p>
          <p class="form__legend">Les champs marqués d’un astérisque (<span class="form__required" aria-hidden="true">*</span>) sont obligatoires.</p>

          ${field({ id: 'organisation', label: 'Votre organisation', errorName: 'le nom de votre organisation', required: true, autocomplete: 'organization' })}
          ${field({ id: 'nom', label: 'Nom et prénom', errorName: 'vos nom et prénom', required: true, autocomplete: 'name' })}
          ${field({ id: 'email', label: 'E-mail professionnel', errorName: 'votre adresse e-mail professionnelle', type: 'email', required: true, autocomplete: 'email' })}
          ${field({ id: 'telephone', label: 'Téléphone', errorName: 'votre numéro de téléphone', type: 'tel', autocomplete: 'tel', hint: 'Facultatif — utile si vous préférez être rappelé.' })}
          ${field({
            id: 'scrutin',
            label: 'Type de scrutin',
            errorName: 'le type de scrutin concerné',
            type: 'select',
            required: true,
            options: F.SCRUTINS
          })}
          ${field({
            id: 'mode',
            label: 'Mode de vote envisagé',
            errorName: 'le mode de vote envisagé',
            type: 'select',
            options: F.MODES
          })}
          ${field({
            id: 'votants',
            label: 'Nombre approximatif de votants',
            errorName: 'le nombre approximatif de votants',
            type: 'select',
            options: F.VOTANTS
          })}
          ${field({
            id: 'echeance',
            label: 'Échéance de votre scrutin',
            errorName: 'l’échéance de votre scrutin',
            type: 'select',
            options: F.ECHEANCES
          })}
          ${field({ id: 'message', label: 'Votre projet en quelques mots', type: 'textarea', hint: 'Vos contraintes statutaires, vos questions, le format envisagé — tout ce qui nous aidera à préparer la démonstration.' })}

          <input type="hidden" name="type_organisation" value="">
          ${F.antiBot('d')}
          ${F.consent('d')}

          <button class="btn btn--xl btn--primary" type="submit" style="width:100%">Planifier ma démonstration</button>

          <p class="form__hint" role="status" aria-live="polite" data-form-status style="margin-top:var(--mv-space-4)"></p>
        </form>
      </div>
    </div>
  </div>
</section>
`;

module.exports = { page, body };
