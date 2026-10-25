/* ==========================================================================
   MEDIAVOTE — Champs de formulaire partagés
   Démonstration, contact et fin du configurateur utilisent les mêmes champs,
   la même validation et la même protection contre les robots.

   Aucun envoi n'est raccordé (Q-B8) : voir docs/FORMULAIRES.md.
   ========================================================================== */

function field({ id, name, label, errorName, type = 'text', required, hint, autocomplete, options, value }) {
  const req = required ? ' required aria-required="true"' : '';
  // Libellé d'erreur explicite : évite les tournures du type
  // « Merci de renseigner votre votre organisation ».
  const errAttr = errorName ? ` data-error-name="${errorName}"` : '';
  const star = required ? '<span class="form__required" aria-hidden="true">*</span>' : '';
  const describedBy = hint ? ` aria-describedby="${id}-hint ${id}-error"` : ` aria-describedby="${id}-error"`;
  const n = name || id;

  let control;
  if (type === 'textarea') {
    control = `<textarea class="form__control" id="${id}" name="${n}"${req}${describedBy}${errAttr}></textarea>`;
  } else if (type === 'select') {
    control = `<select class="form__control" id="${id}" name="${n}"${req}${describedBy}${errAttr}>
        <option value="">Sélectionnez…</option>
        ${options.map((o) => {
          const [v, l] = Array.isArray(o) ? o : [o, o];
          return `<option value="${v}"${value === v ? ' selected' : ''}>${l}</option>`;
        }).join('\n        ')}
      </select>`;
  } else {
    control = `<input class="form__control" type="${type}" id="${id}" name="${n}"${req}${describedBy}${errAttr}${autocomplete ? ` autocomplete="${autocomplete}"` : ''}>`;
  }

  return `<div class="form__row">
      <label class="form__label" for="${id}">${label}${star}</label>
      ${control}
      ${hint ? `<p class="form__hint" id="${id}-hint">${hint}</p>` : ''}
      <p class="form__error" id="${id}-error" role="alert"></p>
    </div>`;
}

/* Protection contre les robots, sans service tiers ni cookie :
   1. un champ leurre, invisible et hors du parcours clavier, qu'un humain
      ne remplit jamais ;
   2. l'heure d'ouverture du formulaire, posée par le script : une
      soumission en moins de 3 secondes n'est pas humaine.
   Le script refuse ces soumissions côté navigateur. Le serveur d'envoi,
   une fois raccordé, devra refaire les deux contrôles (docs/FORMULAIRES.md). */
const { site } = require('../data/site');
function antiBot(prefix) {
  return `${site.turnstileSiteKey ? `<div class="cf-turnstile form__captcha" data-sitekey="${site.turnstileSiteKey}" data-language="fr" data-theme="light"></div>` : ''}
          <div class="form__hp" aria-hidden="true">
            <label for="${prefix}-site">Ne pas remplir ce champ</label>
            <input type="text" id="${prefix}-site" name="site_web" tabindex="-1" autocomplete="off">
          </div>
          <input type="hidden" name="ouvert_a" value="" data-form-opened>`;
}

function consent(prefix) {
  return `<div class="form__consent">
            <input type="checkbox" id="${prefix}-consent" name="consentement" required aria-required="true" aria-describedby="${prefix}-consent-error">
            <label for="${prefix}-consent">
              J’accepte que Mediavote utilise ces informations pour me recontacter au sujet de ma demande.
              <a href="/politique-confidentialite/">Politique de confidentialité</a>.
            </label>
          </div>
          <p class="form__error" id="${prefix}-consent-error" role="alert"></p>`;
}

/* Tranches de votants — identiques au configurateur, pour que les réponses
   se reportent d'un formulaire à l'autre sans conversion. */
const VOTANTS = [
  ['moins-50', 'Moins de 50'], ['50-149', 'De 50 à 149'], ['150-299', 'De 150 à 299'],
  ['300-499', 'De 300 à 499'], ['500-999', 'De 500 à 999'], ['1000-plus', '1 000 et plus']
];

const SCRUTINS = [
  ['ag', 'Assemblée générale'], ['ca', 'Conseil d’administration'], ['cse', 'Élections CSE'],
  ['referendum', 'Consultation ou référendum'], ['election', 'Autre élection'],
  ['plusieurs', 'Plusieurs types de scrutins'], ['autre', 'Autre / je ne sais pas encore']
];

const MODES = [
  ['presentiel', 'En présentiel'], ['hybride', 'En hybride'], ['distance', 'À distance'], ['nsp', 'Je ne sais pas encore']
];

const ECHEANCES = ['Dans moins d’un mois', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', 'Dans plus de 6 mois', 'Pas encore fixée'];

module.exports = { field, antiBot, consent, VOTANTS, SCRUTINS, MODES, ECHEANCES };
