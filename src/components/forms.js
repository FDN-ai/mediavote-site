/* ==========================================================================
   MEDIAVOTE — Champs de formulaire partagés
   Démonstration, contact et fin du configurateur utilisent les mêmes champs,
   la même validation et la même protection contre les robots.

   Les formulaires envoient leurs données au Zoho CRM de Mediavote
   (formulaire web « Site web Mediavote — prise de contact »).
   Voir docs/FORMULAIRES.md et src/data/zoho.js.
   ========================================================================== */

const { site } = require('../data/site');
const { zoho } = require('../data/zoho');

function field({ id, name, label, errorName, type = 'text', required, hint, autocomplete, options, value, maxlength }) {
  const req = required ? ' required aria-required="true"' : '';
  // Libellé d'erreur explicite : évite les tournures du type
  // « Merci de renseigner votre votre organisation ».
  const errAttr = errorName ? ` data-error-name="${errorName}"` : '';
  const star = required ? '<span class="form__required" aria-hidden="true">*</span>' : '';
  const describedBy = hint ? ` aria-describedby="${id}-hint ${id}-error"` : ` aria-describedby="${id}-error"`;
  const n = name || id;
  const max = maxlength ? ` maxlength="${maxlength}"` : '';

  let control;
  if (type === 'textarea') {
    control = `<textarea class="form__control" id="${id}" name="${n}"${req}${describedBy}${errAttr}${max}></textarea>`;
  } else if (type === 'select') {
    control = `<select class="form__control" id="${id}" name="${n}"${req}${describedBy}${errAttr}>
        <option value="">Sélectionnez…</option>
        ${options.map((o) => {
          const [v, l] = Array.isArray(o) ? o : [o, o];
          return `<option value="${v}"${value === v ? ' selected' : ''}>${l}</option>`;
        }).join('\n        ')}
      </select>`;
  } else {
    control = `<input class="form__control" type="${type}" id="${id}" name="${n}"${req}${describedBy}${errAttr}${max}${autocomplete ? ` autocomplete="${autocomplete}"` : ''}>`;
  }

  return `<div class="form__row">
      <label class="form__label" for="${id}">${label}${star}</label>
      ${control}
      ${hint ? `<p class="form__hint" id="${id}-hint">${hint}</p>` : ''}
      <p class="form__error" id="${id}-error" role="alert"></p>
    </div>`;
}

/* Attributs de la balise <form> : envoi direct au Zoho CRM de Mediavote */
function formAttrs(kind) {
  return `action="${zoho.action}" method="POST" accept-charset="UTF-8" data-validate data-zoho="${kind}" novalidate`;
}

/* Champs cachés attendus par Zoho. Le script complète à l'envoi : titre de
   la demande, prestation souhaitée, date, et l'adresse de la page de
   remerciement selon l'adresse réelle du site. */
function zohoHidden() {
  const f = zoho.fields;
  return `<input type="hidden" name="xnQsjsdp" value="${zoho.tokens.xnQsjsdp}">
          <input type="hidden" name="zc_gad" value="">
          <input type="hidden" name="xmIwtLD" value="${zoho.tokens.xmIwtLD}">
          <input type="hidden" name="actionType" value="${zoho.tokens.actionType}">
          <input type="hidden" name="returnURL" value="${site.baseUrl}/merci/" data-zoho-return>
          <input type="hidden" name="${f.leadSource}" value="${zoho.leadSourceValue}">
          <input type="hidden" name="${f.prestation}" value="" data-zoho-prestation>
          <input type="hidden" name="${f.titre}" value="" data-zoho-titre>
          <input type="hidden" name="${f.dateDemande}" value="" data-zoho-date>
          <input type="hidden" name="${f.honeypot}" value="">`;
}

/* Captcha Zoho : image générée et vérifiée par Zoho CRM à la réception.
   L'image n'est chargée que lorsque le formulaire est affiché. */
function captcha(prefix) {
  const src = `${zoho.captcha.url}?formId=${zoho.captcha.formId}&grpid=${zoho.captcha.grpid}`;
  return `<div class="form__row form__captcha-row">
      <label class="form__label" for="${prefix}-captcha">Code de sécurité<span class="form__required" aria-hidden="true">*</span></label>
      <div class="captcha">
        <img class="captcha__img" src="${src}" alt="Code de sécurité à recopier" width="150" height="50" loading="lazy" decoding="async" data-captcha-img="${src}">
        <button class="captcha__reload" type="button" data-captcha-reload>Nouveau code</button>
      </div>
      <input class="form__control form__control--short" type="text" id="${prefix}-captcha" name="${zoho.fields.captcha}" required aria-required="true" maxlength="10" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="${prefix}-captcha-hint ${prefix}-captcha-error" data-error-name="le code de sécurité affiché">
      <p class="form__hint" id="${prefix}-captcha-hint">Recopiez les caractères de l’image. Si elle est illisible, demandez un nouveau code.</p>
      <p class="form__error" id="${prefix}-captcha-error" role="alert"></p>
    </div>`;
}

/* Protection contre les robots côté site, en plus du captcha et du leurre
   de Zoho : un champ leurre invisible et l'heure d'ouverture du formulaire
   (une soumission en moins de 3 secondes n'est pas humaine). */
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
            <input type="checkbox" id="${prefix}-consent" name="consentement" value="oui" required aria-required="true" aria-describedby="${prefix}-consent-error">
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

module.exports = { field, formAttrs, zohoHidden, captcha, antiBot, consent, VOTANTS, SCRUTINS, MODES, ECHEANCES, zoho };
