/* ==========================================================================
   Zoho CRM — formulaire web « Site web Mediavote — prise de contact »
   Créé le 26/10/2026 dans le CRM de Mediavote (module Prospects), sans
   modification de l'existant. Les trois formulaires du site envoient leurs
   données directement à Zoho (méthode officielle « Web-to-Lead ») : aucun
   serveur intermédiaire, aucune clé secrète.

   Les jetons ci-dessous ne sont pas des secrets : ils identifient le
   formulaire et n'autorisent qu'une chose, créer un prospect. Si le
   formulaire est recréé dans Zoho, les remplacer ici (docs/FORMULAIRES.md).
   ========================================================================== */

const zoho = {
  action: 'https://crm.zoho.eu/crm/WebToLeadForm',
  tokens: {
    xnQsjsdp: '858b5bd9cfcb816685caa77cf9ced8441b79a3b4708329c21b02ce0f3827511f',
    xmIwtLD: '353d6ca532b05ca53b4bbac69a18e23829e5dce4e423f1dda7c9a50c6499fb473b36e3ddabde3e9dc0f709e3b8bc65a2',
    actionType: 'TGVhZHM='           // « Leads », encodé par Zoho
  },
  captcha: {
    url: 'https://crm.zoho.eu/crm/CaptchaServlet',
    formId: '353d6ca532b05ca53b4bbac69a18e23829e5dce4e423f1dda7c9a50c6499fb473b36e3ddabde3e9dc0f709e3b8bc65a2',
    grpid: '858b5bd9cfcb816685caa77cf9ced8441b79a3b4708329c21b02ce0f3827511f'
  },
  /* Noms des champs Zoho (module Prospects) et limites de longueur */
  fields: {
    lastName: 'Last Name',     // 80 — « Nom et prénom » du site
    company: 'Company',        // 200
    email: 'Email',            // 100
    phone: 'Phone',            // 30
    leadSource: 'Lead Source', // liste : valeur « Site Web Mediavote » (existante)
    prestation: 'LEADCF11',    // « Prestation souhaitée » : AG · Autre · Boitiers · CSE · Licence annuelle · ProVote AG
    commentaire: 'LEADCF4',    // « Commentaire », 255 caractères au plus
    dateDemande: 'LEADCF117',  // « Date de la demande sur le site », JJ/MM/AAAA
    titre: 'LEADCF5',          // « Titre de la demande », 255 caractères
    captcha: 'enterdigest',    // réponse au captcha Zoho
    honeypot: 'aG9uZXlwb3Q'    // leurre anti-robots de Zoho : doit rester vide
  },
  leadSourceValue: 'Site Web Mediavote',
  limits: { lastName: 80, company: 200, email: 100, phone: 30, commentaire: 255, titre: 255 }
};

module.exports = { zoho };
