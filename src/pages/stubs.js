/* ==========================================================================
   Pages d'attente
   Structure, métadonnées, fil d'Ariane et maillage en place ; contenu à
   rédiger en Phase 3bis. Elles existent pour que l'architecture soit
   navigable et testable, et qu'aucun lien du site ne soit cassé.

   Chaque page porte un titre, une description et un H1 conformes au
   SEO-MAPPING. Aucune n'est publiable en l'état : le build de production
   les rejette tant que `status` reste à 'draft'.
   ========================================================================== */

const C = require('../components');

const stubs = [
  { url: '/solutions/', title: 'Solutions de vote électronique par type de scrutin | Mediavote', description: 'Assemblées générales, conseils d’administration, élections CSE, consultations : chaque scrutin a ses règles. Mediavote adapte la plateforme et l’accompagnement.', h1: 'Des solutions de vote adaptées à chaque type de scrutin', eyebrow: 'Par besoin', priority: 'P1', trail: [['Accueil', '/'], ['Solutions', '/solutions/']] },
  { url: '/solutions/vote-conseil-administration/', title: 'Vote électronique pour conseil d’administration | Mediavote', description: 'Conseils réguliers, votes à bulletin secret, délibérations à distance : ProVote® gère vos CA tout au long de l’année, en séance ou en consultation écrite.', h1: 'Sécurisez les votes de vos conseils d’administration', eyebrow: 'Conseils d’administration', priority: 'P1', trail: [['Accueil', '/'], ['Solutions', '/solutions/'], ['Conseils d’administration', '/solutions/vote-conseil-administration/']] },
  { url: '/solutions/elections-cse/', title: 'Vote électronique pour élections CSE | Mediavote', description: 'PAP, convocations, dépouillement par clés chiffrées, CERFA et second tour : Mediavote sécurise vos élections CSE avec un chef de projet dédié.', h1: 'Organisez vos élections CSE en ligne, simplement et sereinement', eyebrow: 'Élections CSE', priority: 'P0', trail: [['Accueil', '/'], ['Solutions', '/solutions/'], ['Élections CSE', '/solutions/elections-cse/']] },
  { url: '/solutions/consultations-referendums/', title: 'Consultation et référendum en ligne sécurisés | Mediavote', description: 'Consulter salariés, adhérents ou administrés avec un scrutin sécurisé, anonyme et opposable — sans la lourdeur d’une assemblée générale.', h1: 'Consultations et référendums en ligne sécurisés', eyebrow: 'Consultations', priority: 'P1', trail: [['Accueil', '/'], ['Solutions', '/solutions/'], ['Consultations et référendums', '/solutions/consultations-referendums/']] },

  { url: '/modes-de-vote/', title: 'Vote en ligne, boîtier ou hybride : comment choisir | Mediavote', description: 'En ligne, par boîtier ou hybride : trois modalités, trois usages. Comparez selon vos votants, votre lieu, votre calendrier et vos contraintes de réseau.', h1: 'Choisissez le mode de vote adapté à votre organisation', eyebrow: 'Modes de vote', priority: 'P1', trail: [['Accueil', '/'], ['Modes de vote', '/modes-de-vote/']] },
  { url: '/modes-de-vote/vote-en-ligne/', title: 'Vote en ligne sécurisé pour organisations | Mediavote', description: 'Vote synchrone ou asynchrone, sur ordinateur, tablette ou smartphone, sans téléchargement. ProVote® s’adapte aux règles de votre organisation.', h1: 'Le vote en ligne sécurisé, accessible partout', eyebrow: 'Vote en ligne', priority: 'P0', trail: [['Accueil', '/'], ['Modes de vote', '/modes-de-vote/'], ['Vote en ligne', '/modes-de-vote/vote-en-ligne/']] },
  { url: '/modes-de-vote/vote-par-boitier/', title: 'Boîtier de vote électronique pour assemblée | Mediavote', description: 'Boîtiers autonomes, résultats affichés en séance, pondération des voix et chef de projet sur place. Mediavote équipe vos assemblées en présentiel depuis 1998.', h1: 'Le vote par boîtier, pour vos assemblées en présentiel', eyebrow: 'Vote par boîtier', priority: 'P0', trail: [['Accueil', '/'], ['Modes de vote', '/modes-de-vote/'], ['Vote par boîtier', '/modes-de-vote/vote-par-boitier/']] },
  { url: '/modes-de-vote/vote-hybride/', title: 'Vote hybride : AG en présentiel et à distance | Mediavote', description: 'Une seule assemblée, deux publics : votants en salle et à distance comptés ensemble, quorum consolidé en temps réel et résultats unifiés. Étudions votre dispositif.', h1: 'Réunissez tous vos votants, sur place comme à distance', eyebrow: 'Vote hybride', priority: 'P0', trail: [['Accueil', '/'], ['Modes de vote', '/modes-de-vote/'], ['Vote hybride', '/modes-de-vote/vote-hybride/']] },

  { url: '/provote/', title: 'ProVote®, la plateforme de vote de Mediavote | Mediavote', description: 'ProVote® gère résolutions, élections, émargement, quorum et pouvoirs selon les statuts de votre organisation. Accessible sans téléchargement, sur tout terminal.', h1: 'ProVote®, la plateforme qui s’adapte à vos règles', eyebrow: 'Notre plateforme', priority: 'P0', trail: [['Accueil', '/'], ['ProVote®', '/provote/']] },
  { url: '/provote/fonctionnalites/', title: 'Fonctionnalités de ProVote® : quorum, pouvoirs, émargement', description: 'Résolutions, élections, émargement avec signature, calcul du quorum, pouvoirs, collèges, pondération et exports : le détail des fonctionnalités de ProVote®.', h1: 'Toutes les fonctionnalités nécessaires à votre scrutin', eyebrow: 'Fonctionnalités', priority: 'P1', trail: [['Accueil', '/'], ['ProVote®', '/provote/'], ['Fonctionnalités', '/provote/fonctionnalites/']] },

  { url: '/offres/licence-annuelle-provote/', title: 'Licence annuelle ProVote® : vos scrutins en autonomie', description: 'Plusieurs AG, CA ou consultations par an ? La licence annuelle ProVote® vous rend autonome, avec formation et assistance technique incluses.', h1: 'La licence ProVote® pour organiser vos scrutins en autonomie', eyebrow: 'Licence annuelle', priority: 'P0', trail: [['Accueil', '/'], ['ProVote®', '/provote/'], ['Licence annuelle', '/offres/licence-annuelle-provote/']] },
  { url: '/offres/accompagnement-sur-mesure/', title: 'Accompagnement de vos scrutins par un chef de projet | Mediavote', description: 'Réunion de lancement, paramétrage, test en conditions réelles, présence le jour J : Mediavote pilote votre scrutin de J-30 à la restitution des résultats.', h1: 'Un chef de projet dédié, de la préparation aux résultats', eyebrow: 'Accompagnement', priority: 'P0', trail: [['Accueil', '/'], ['ProVote®', '/provote/'], ['Accompagnement sur mesure', '/offres/accompagnement-sur-mesure/']], note: 'Seule page P0 dont l’intégralité du contenu est disponible et vérifiée. Rédigeable immédiatement, sans dépendance de validation.' },

  { url: '/securite-conformite/', title: 'Sécurité et conformité du vote électronique | Mediavote', description: 'Séparation des urnes, clés de dépouillement fragmentées, authentification à deux canaux et journaux d’audit : comment nous protégeons vos scrutins.', h1: 'Sécurité, confidentialité et conformité de vos scrutins', eyebrow: 'Sécurité', priority: 'P0', trail: [['Accueil', '/'], ['Sécurité et conformité', '/securite-conformite/']], note: 'Page bloquée — Q-A1 (recommandation CNIL 2026), Q-B3 (certificat NF 552), Q-B4 (audit OPPIDA), Q-B5 (hébergement), Q-B6 (RGAA). Les mécanismes techniques vérifiés sont rédigeables ; les blocs de preuve restent en emplacement réservé.' },

  { url: '/secteurs/', title: 'Solutions de vote par type d’organisation | Mediavote', description: 'Associations et fédérations, entreprises et mutuelles, organismes publics : chaque statut impose ses règles de vote. Découvrez notre approche par secteur.', h1: 'Le vote électronique adapté à votre type d’organisation', eyebrow: 'Secteurs', priority: 'P1', trail: [['Accueil', '/'], ['Secteurs d’activité', '/secteurs/']] },
  { url: '/secteurs/associations-federations/', title: 'Vote électronique pour association et fédération | Mediavote', description: 'Adhérents dispersés, pouvoirs nombreux, quorum difficile à atteindre : Mediavote adapte vos scrutins aux contraintes statutaires des associations et fédérations.', h1: 'Le vote électronique adapté aux associations et fédérations', eyebrow: 'Associations et fédérations', priority: 'P1', trail: [['Accueil', '/'], ['Secteurs d’activité', '/secteurs/'], ['Associations et fédérations', '/secteurs/associations-federations/']] },
  { url: '/secteurs/entreprises-mutuelles/', title: 'Vote électronique pour entreprises et mutuelles | Mediavote', description: 'Élections CSE, conseils d’administration, assemblées de sociétaires et pondération des voix : des scrutins conformes et traçables pour vos instances.', h1: 'Des votes fiables pour vos instances d’entreprise', eyebrow: 'Entreprises et mutuelles', priority: 'P1', trail: [['Accueil', '/'], ['Secteurs d’activité', '/secteurs/'], ['Entreprises et mutuelles', '/secteurs/entreprises-mutuelles/']] },
  { url: '/secteurs/organismes-publics/', title: 'Vote électronique pour le secteur public | Mediavote', description: 'Instances délibératives, commissions et consultations : Mediavote accompagne les organismes publics sur des scrutins accessibles, tracés et continus.', h1: 'Des scrutins sécurisés pour les organismes publics', eyebrow: 'Organismes publics', priority: 'P1', trail: [['Accueil', '/'], ['Secteurs d’activité', '/secteurs/'], ['Organismes publics', '/secteurs/organismes-publics/']] },

  { url: '/references/', title: 'Références et témoignages clients | Mediavote', description: 'Associations, fédérations, mutuelles, entreprises et organismes publics : découvrez les organisations qui confient leurs scrutins à Mediavote depuis 1998.', h1: 'Ils font confiance à Mediavote pour leurs scrutins', eyebrow: 'Références', priority: 'P1', trail: [['Accueil', '/'], ['Références clients', '/references/']], note: 'Bloquée sur les autorisations d’usage des logos clients (Q-B7). Repli anonymisé disponible.' },
  { url: '/a-propos/', title: 'Mediavote, expert du vote professionnel depuis 1998', description: 'Créée en 1998, Mediavote conçoit ProVote® et accompagne les organisations dans leurs scrutins. Une équipe à taille humaine, joignable et présente le jour J.', h1: 'Mediavote, expert du vote professionnel depuis 1998', eyebrow: 'À propos', priority: 'P1', trail: [['Accueil', '/'], ['À propos', '/a-propos/']] },
  { url: '/faq/', title: 'FAQ : questions fréquentes sur le vote électronique | Mediavote', description: 'Légalité, sécurité, anonymat, procurations, quorum, accessibilité, tarifs : les réponses aux questions que se posent les organisations avant de franchir le pas.', h1: 'Toutes vos questions sur le vote électronique', eyebrow: 'Questions fréquentes', priority: 'P1', trail: [['Accueil', '/'], ['Questions fréquentes', '/faq/']] },
  { url: '/contact/', title: 'Contacter Mediavote | Mediavote', description: 'Une question, un projet de scrutin, une demande de devis : l’équipe Mediavote vous répond. Téléphone, e-mail ou formulaire, au choix.', h1: 'Parlons de votre prochain scrutin', eyebrow: 'Contact', priority: 'P1', trail: [['Accueil', '/'], ['Contact', '/contact/']] },

  { url: '/mentions-legales/', title: 'Mentions légales | Mediavote', description: 'Mentions légales du site Mediavote : éditeur, directeur de la publication, hébergeur et conditions d’utilisation du site.', h1: 'Mentions légales', priority: 'P2', trail: [['Accueil', '/'], ['Mentions légales', '/mentions-legales/']], note: 'À jour ? (Q-C6). Raison sociale, capital, RCS, directeur de publication et hébergeur à confirmer.' },
  { url: '/politique-confidentialite/', title: 'Politique de confidentialité | Mediavote', description: 'Comment Mediavote traite les données personnelles collectées via son site vitrine : finalités, durées de conservation, destinataires et exercice de vos droits.', h1: 'Politique de confidentialité', priority: 'P2', trail: [['Accueil', '/'], ['Politique de confidentialité', '/politique-confidentialite/']], note: 'Dépend de Q-B5 (hébergement, durées de conservation, DPO) et Q-C7 (mesure d’audience).' },
  { url: '/accessibilite/', title: 'Accessibilité du site | Mediavote', description: 'Déclaration d’accessibilité du site Mediavote : niveau de conformité au RGAA, points d’amélioration et moyens de nous signaler une difficulté.', h1: 'Déclaration d’accessibilité', priority: 'P2', trail: [['Accueil', '/'], ['Accessibilité', '/accessibilite/']], note: 'Porte sur le site vitrine uniquement — à ne pas confondre avec l’accessibilité de ProVote® (Q-B6). Le taux de conformité sera renseigné après l’audit final.' },
  { url: '/plan-du-site/', title: 'Plan du site | Mediavote', description: 'L’ensemble des pages du site Mediavote : solutions, modes de vote, plateforme ProVote®, offres, sécurité, secteurs, références et ressources.', h1: 'Plan du site', priority: 'P2', trail: [['Accueil', '/'], ['Plan du site', '/plan-du-site/']] }
];

/* Rendu d'une page d'attente */
stubs.render = function (s) {
  const page = {
    url: s.url,
    title: s.title,
    description: s.description,
    priority: s.priority,
    schema: ['BreadcrumbList'],
    heroImage: 'hero-accueil',
    breadcrumb: (s.trail || []).map(([label, url]) => ({ label, url }))
  };

  const body = `
<section class="hero hero--page">
  ${C.heroPlate('hero-accueil', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      ${s.eyebrow ? `<span class="eyebrow">${s.eyebrow}</span>` : ''}
      <h1 style="margin-top:var(--mv-space-4)">${s.h1}</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">${s.description}</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    ${C.prodNote(`
      <p><strong>Page en attente de rédaction.</strong> L’URL, le fil d’Ariane, le title, la meta description
      et le H1 sont figés et conformes à <code>docs/SEO-MAPPING.md</code>. Le contenu sera produit en Phase&nbsp;3bis,
      après validation des deux pages prioritaires.</p>
      ${s.note ? `<p><strong>Note :</strong> ${s.note}</p>` : ''}
      <p>Cette page existe pour rendre l’architecture navigable et testable, et pour qu’aucun lien du site
      ne soit cassé. <strong>Le build de production la rejette</strong> tant qu’elle n’est pas rédigée.</p>
    `)}
    <p><a class="link-arrow" href="/">Retour à l’accueil</a></p>
  </div>
</section>

${C.ctaBand({
  title: 'Parlons de votre projet',
  text: 'En attendant la mise en ligne de cette page, l’équipe Mediavote répond directement à vos questions.',
  primary: { label: 'Demander une démonstration', url: '/demonstration/' },
  secondary: { label: 'Nous contacter', url: '/contact/' }
})}
`;

  return { page, body };
};

module.exports = stubs;
