/* Données globales du site — source unique de vérité.
   Voir docs/NAVIGATION.md pour les décisions de structure et de libellés. */

const site = {
  name: 'Mediavote',
  baseUrl: 'https://www.media-vote.com',
  phone: '01 85 09 27 45',
  phoneHref: 'tel:+33185092745',
  email: 'contact@media-vote.com',
  address: {
    street: '9 rue Sédillot',
    postalCode: '75007',
    city: 'Paris',
    country: 'FR'
  },
  foundingDate: '1998',
  /* Cloudflare Turnstile (anti-robots). Vide : seuls le champ leurre et
     l'horodatage protègent les formulaires. Renseigner la clé de site
     fournie par Cloudflare pour afficher le contrôle — voir docs/FORMULAIRES.md */
  turnstileSiteKey: '',
  social: [
    // Liens réels uniquement. Facebook figure sur le site actuel mais reste
    // à confirmer comme actif — voir NAVIGATION.md §7.
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mediavote/', icon: 'linkedin', verified: false },
    { name: 'YouTube', url: 'https://www.youtube.com/@mediavote7787', icon: 'youtube', verified: true }
  ]
};

/* Navigation principale — 5 entrées. */
const nav = [
  {
    label: 'Solutions',
    id: 'nav-solutions',
    children: [
      { label: 'Assemblées générales', url: '/solutions/vote-electronique-assemblee-generale/' },
      { label: 'Conseils d’administration', url: '/solutions/vote-conseil-administration/' },
      { label: 'Élections CSE', url: '/solutions/elections-cse/' },
      { label: 'Consultations et référendums', url: '/solutions/consultations-referendums/' },
      { separator: true },
      { label: 'Voir toutes les solutions', url: '/solutions/', isAll: true }
    ]
  },
  {
    label: 'Modes de vote',
    id: 'nav-modes',
    children: [
      { label: 'Vote en ligne', url: '/modes-de-vote/vote-en-ligne/' },
      { label: 'Vote par boîtier', url: '/modes-de-vote/vote-par-boitier/' },
      { label: 'Vote hybride', url: '/modes-de-vote/vote-hybride/' },
      { label: 'Achat de boîtiers de vote', url: '/offres/achat-boitiers-de-vote/' },
      { separator: true },
      { label: 'Comparer les modes de vote', url: '/modes-de-vote/', isAll: true }
    ]
  },
  {
    label: 'ProVote®',
    id: 'nav-provote',
    children: [
      { label: 'La plateforme ProVote®', url: '/provote/' },
      { label: 'Fonctionnalités', url: '/provote/fonctionnalites/' },
      { label: 'Licence annuelle', url: '/offres/licence-annuelle-provote/' },
      { label: 'Accompagnement sur mesure', url: '/offres/accompagnement-sur-mesure/' },
      { label: 'Sécurité et conformité', url: '/securite-conformite/' }
    ]
  },
  {
    label: 'Ressources',
    id: 'nav-ressources',
    children: [
      { label: 'Références clients', url: '/references/' },
      { label: 'Actualités et conseils', url: '/actualites/' },
      { label: 'Questions fréquentes', url: '/faq/' },
      { label: 'Secteurs d’activité', url: '/secteurs/' }
    ]
  },
  { label: 'Qui sommes-nous', url: '/a-propos/' }
];

/* Footer — 4 colonnes. */
const footerCols = [
  {
    title: 'Solutions',
    links: [
      { label: 'Assemblées générales', url: '/solutions/vote-electronique-assemblee-generale/' },
      { label: 'Conseils d’administration', url: '/solutions/vote-conseil-administration/' },
      { label: 'Élections CSE', url: '/solutions/elections-cse/' },
      { label: 'Consultations et référendums', url: '/solutions/consultations-referendums/' }
    ]
  },
  {
    title: 'Modes et plateforme',
    links: [
      { label: 'Vote en ligne', url: '/modes-de-vote/vote-en-ligne/' },
      { label: 'Vote par boîtier', url: '/modes-de-vote/vote-par-boitier/' },
      { label: 'Vote hybride', url: '/modes-de-vote/vote-hybride/' },
      { label: 'Plateforme ProVote®', url: '/provote/' },
      { label: 'Licence annuelle', url: '/offres/licence-annuelle-provote/' },
      { label: 'Achat de boîtiers de vote', url: '/offres/achat-boitiers-de-vote/' },
      { label: 'Accompagnement sur mesure', url: '/offres/accompagnement-sur-mesure/' }
    ]
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Références clients', url: '/references/' },
      { label: 'Actualités', url: '/actualites/' },
      { label: 'Questions fréquentes', url: '/faq/' },
      { label: 'Secteurs d’activité', url: '/secteurs/' }
    ]
  },
  {
    title: 'Mediavote',
    links: [
      { label: 'Qui sommes-nous', url: '/a-propos/' },
      { label: 'Contact', url: '/contact/' },
      { label: 'Demander une démonstration', url: '/demonstration/' },
      { label: 'Sécurité et conformité', url: '/securite-conformite/' }
    ]
  }
];

const legalLinks = [
  { label: 'Mentions légales', url: '/mentions-legales/' },
  { label: 'Politique de confidentialité', url: '/politique-confidentialite/' },
  { label: 'Accessibilité', url: '/accessibilite/' },
  { label: 'Plan du site', url: '/plan-du-site/' }
];

module.exports = { site, nav, footerCols, legalLinks };
