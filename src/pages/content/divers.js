/* ==========================================================================
   Sécurité, secteurs, marque, FAQ, contact, actualités, pages légales
   ========================================================================== */

const C = require('../../components');
const { site } = require('../../data/site');

const hero = ({ eyebrow, h1, lead, cta, ctaUrl = '/demonstration/', narrow = true, visual, img = 'hero-accueil' }) => `
<section class="hero hero--page">
  ${C.heroPlate(img, { eager: true })}
  <div class="hero__title-wrap">
    <div class="container ${narrow ? 'container--narrow' : 'hero__inner'}" style="padding-inline:0">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h1 style="margin-top:var(--mv-space-4)">${h1}</h1>
        <p class="lead" style="margin-top:var(--mv-space-5)">${lead}</p>
        ${cta ? `<div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="${ctaUrl}">${cta}${C.icons.arrow}</a>
          <a class="btn btn--secondary" href="/contact/">Nous contacter</a>
        </div>` : ''}
      </div>
      ${visual ? `<div>${visual}</div>` : ''}
    </div>
  </div>
</section>`;

/* -------------------------------------------------- /securite-conformite/ */
const secuFaq = [
  { q: 'Comment le secret du vote est-il garanti ?', a: 'Par la séparation stricte de l’urne d’émargement et de l’urne des bulletins. Savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté. Sur un vote nominatif, à l’inverse, le lien est conservé volontairement et figure dans l’export détaillé — vous choisissez vote par vote.' },
  { q: 'Qui peut ouvrir l’urne ?', a: 'Personne seul. La clé de dépouillement est fragmentée et répartie entre plusieurs membres du bureau de vote. Il faut réunir un nombre minimum de fragments, que vous définissez, pour la reconstituer. Mediavote ne détient pas de clé permettant de dépouiller à votre place.' },
  { q: 'Comment les votants sont-ils authentifiés ?', a: 'Par des codes personnels envoyés sur deux canaux distincts, au choix : e-mail, SMS, courrier postal ou code remis en main propre. Vous pouvez combiner les canaux votant par votant. Un troisième canal peut être ajouté pour renforcer le dispositif.' },
  { q: 'Que contiennent les journaux d’audit ?', a: 'Les échecs et succès de connexion, les échecs d’accès à des ressources, les actions des administrateurs, les accès aux fonctions sensibles, les modifications de configuration, et les créations, suppressions et modifications de comptes et de droits. Chaque événement porte un identifiant d’utilisateur, une date et une heure. Les journaux n’enregistrent aucune donnée sensible.' },
  { q: 'Où sont hébergées les données ?', a: 'Cette information doit être précisée avec Mediavote avant publication. Nous ne publions pas d’affirmation d’hébergement sans confirmation écrite du nom de l’hébergeur et de la localisation des sites.' }
];

const securite = {
  page: {
    url: '/securite-conformite/', heroImage: 'hero-accueil',
    title: 'Sécurité et conformité du vote électronique | Mediavote',
    description: 'Séparation des urnes, clés de dépouillement fragmentées, authentification à deux canaux et journaux d’audit : comment nous protégeons vos scrutins.',
    priority: 'P0',
    schema: ['FAQPage', 'BreadcrumbList'],
    faqItems: secuFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Sécurité et conformité', url: '/securite-conformite/' }]
  },
  body: `
${hero({
  img: 'hero-accueil',
  eyebrow: 'Sécurité',
  h1: 'Sécurité, confidentialité et conformité de vos scrutins',
  lead: 'Le secret du vote et la sincérité du résultat ne se décrètent pas : ils reposent sur des mécanismes précis. Voici lesquels — et ce que vous pouvez vérifier vous-même en démonstration.',
  cta: 'Échanger avec un expert', ctaUrl: '/contact/'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Mécanismes', title: 'Quatre garanties, vérifiables en démonstration', lead: 'Nous préférons décrire des mécanismes plutôt qu’afficher des logos. Un mécanisme se constate ; un logo se croit.' })}
    <div class="grid grid--2">
      ${C.card({ icon: 'urnes', title: 'Séparation des urnes',
        text: 'L’urne d’émargement et l’urne des bulletins sont strictement séparées. Savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté.',
        meta: 'Exigence de référentiel, appliquée par construction.' })}
      ${C.card({ icon: 'cles', title: 'Clés de dépouillement fragmentées',
        text: 'La clé générale est fragmentée et répartie entre les membres du bureau de vote. Il faut réunir un nombre minimum de fragments — que vous définissez — pour ouvrir l’urne.',
        meta: 'Ni l’organisateur, ni Mediavote ne peuvent dépouiller seuls.' })}
      ${C.card({ icon: 'canaux', title: 'Authentification à deux canaux',
        text: 'Les codes personnels sont transmis par deux canaux distincts au choix : e-mail, SMS, courrier ou code remis en main propre, combinables votant par votant.',
        meta: 'Un troisième canal peut être ajouté.' })}
      ${C.card({ icon: 'journaux', title: 'Journaux d’audit',
        text: 'Connexions, accès aux ressources, actions d’administration, modifications de configuration et de droits sont journalisés, horodatés et rattachés à un identifiant.',
        meta: 'Les journaux n’enregistrent aucune donnée sensible.' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Intégrité', title: 'Ce qui protège le scrutin pendant qu’il se déroule' })}
    <div class="grid grid--3">
      ${C.card({ title: 'Scellement des urnes', text: 'Le bureau de vote vérifie que les urnes sont à zéro avant l’ouverture, puis participe au scellement. À la clôture, le dépouillement scelle définitivement le résultat.' })}
      ${C.card({ title: 'Contrôle d’intégrité périodique', text: 'Par intervalles de cinq minutes, un contrôle vérifie qu’il n’y a pas eu d’atteinte à la confidentialité du scrutin, en comparant l’empreinte des données.' })}
      ${C.card({ title: 'Mots de passe non stockés', text: 'Générés aléatoirement, uniques, non conservés. Chaque utilisateur dispose de cinq tentatives par tranche de trente minutes ; la session expire après vingt minutes d’inactivité.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Certifications et conformité', title: 'Ce que nous pouvons attester, précisément', lead: 'Un référentiel a un périmètre et une date. Nous les indiquons, plutôt que d’afficher un logo qui en dirait plus qu’il ne prouve.' })}
    <div class="grid grid--2">
      ${C.card({ icon: 'competence', variant: 'card--surface', title: 'AFNOR — NF 552',
        text: 'ProVote® a obtenu en 2022 la certification NF Logiciel — Protection des données personnelles (NF&nbsp;552) délivrée par AFNOR Certification.',
        meta: 'Ce référentiel porte sur la protection des données personnelles traitées par le logiciel.' })}
      ${C.card({ icon: 'urnes', variant: 'card--surface', title: 'RGPD',
        text: 'Le traitement des données de vos votants s’inscrit dans le cadre du RGPD. Hébergement, durées de conservation et coordonnées du délégué à la protection des données vous sont transmis lors de l’instruction de votre dossier.',
        meta: 'Les pièces de conformité à jour sont remises par votre chef de projet.' })}
    </div>
    <p style="margin-top:var(--mv-space-8)">
      Nous préférons aussi vous montrer, en démonstration, comment l’urne se sépare, comment les clés se
      fragmentent, et ce que contient un journal d’audit. C’est vérifiable devant vous.
    </p>
    <div class="btn-group" style="margin-top:var(--mv-space-8)">
      <a class="btn btn--xl btn--primary" href="/demonstration/">Voir les mécanismes en démonstration${C.icons.arrow}</a>
    </div>
  </div>
</section>

${C.prodNote(`<p><strong>Certifications — état au 27/09/2026.</strong></p>
<p>— <strong>NF 552</strong> : mention validée par Alexis (arbitrage n° 1), datée « en 2022 », document non publié.
Le certificat n° 552/0003-1 était valable du 20/05/2022 au 20/05/2023 et porte sur « ProVote version 1 ».<br>
— <strong>RGPD</strong> : formulation volontairement générale tant que l’hébergeur, la localisation, les durées
et le DPO ne sont pas confirmés (Q-B5). Seule la mention « conforme au RGPD », validée le 27/09/2026 (arbitrage n° 9), est publiée.<br>
— <strong>Signature électronique européenne</strong> (To Do) : non publiée — niveau eIDAS, prestataire et étape
concernée encore inconnus (arbitrage n° 7).<br>
— <strong>Recommandation CNIL</strong> (Q-A1) : la délibération n° 2019-053 a été abrogée le 19/03/2026 par la
délibération n° 2026-045. Aucune référence publiée.<br>
— <strong>Audit OPPIDA</strong> (Q-B4) et <strong>RGAA</strong> (Q-B6) : toujours en attente de preuves.</p>`)}

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Accessibilité', title: 'Rendre le vote possible pour tous vos votants', lead: 'Un scrutin qui exclut une partie de vos membres n’est pas un scrutin réussi.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Mode accompagné', text: 'Activable, il guide le votant pas à pas dans les actions qu’il doit effectuer. C’est ce qui permet à des publics peu à l’aise avec le numérique de voter seuls.' })}
      ${C.card({ title: 'Mix papier et numérique', text: 'Convocations et bulletins peuvent partir par courrier pour une partie de vos votants. Les votes papier sont dépouillés puis consolidés automatiquement avec les votes numériques.' })}
    </div>
    <p style="margin-top:var(--mv-space-8)">
      L’accessibilité du site que vous consultez fait l’objet d’une <a href="/accessibilite/">déclaration dédiée</a>.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur la sécurité' })}
    ${C.faq(secuFaq, 'secu-faq')}
  </div>
</section>
`
};

/* ------------------------------------------------------------ Secteurs */
const secteurPage = ({ url, img, eyebrow, h1, title, description, lead, enjeux, scrutins, contraintes, besoin, offre, faq, groupe }) => ({
  page: {
    url, title, description, priority: 'P1',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: h1 },
    faqItems: faq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Secteurs d’activité', url: '/secteurs/' }, { label: eyebrow, url }]
  },
  body: `
${hero({
  img: 'hero-accueil', eyebrow, h1, lead, cta: 'Étudier mon besoin', img })}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Enjeux', title: 'Ce qui rend vos scrutins particuliers' })}
    <div class="grid grid--3">${enjeux.map((e) => C.card(e)).join('')}</div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Scrutins concernés', title: 'Ce que vous faites voter' })}
    ${C.numList(scrutins)}
  </div>
</section>

<section class="section section--overlap">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Contraintes', title: 'Les points de vigilance que nous connaissons' })}
    <ul style="font-size:var(--mv-text-lg);line-height:1.8">${contraintes.map((c) => `<li>${C.rich(c)}</li>`).join('')}</ul>
    <p style="margin-top:var(--mv-space-6)">
      Ces contraintes se règlent au paramétrage, à partir de vos textes.
      <a href="/offres/accompagnement-sur-mesure/">Voir notre méthode</a>.
    </p>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Notre réponse', title: besoin.title })}
        <p>${C.rich(besoin.text)}</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="${offre.url}">${offre.label}${C.icons.arrow}</a>
        </div>
      </div>
      ${C.logoGroup(groupe)}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions' })}
    ${C.faq(faq, url.replace(/\W+/g, '-') + '-faq')}
  </div>
</section>
`
});

const associations = secteurPage({
  groupe: 'professions',
  url: '/secteurs/associations-federations/', heroImage: 'hero-assemblee',
  img: 'hero-assemblee',
  eyebrow: 'Associations et fédérations',
  h1: 'Le vote électronique adapté aux associations et fédérations',
  title: 'Vote électronique pour association et fédération | Mediavote',
  description: 'Adhérents dispersés, pouvoirs nombreux, quorum difficile à atteindre : Mediavote adapte vos scrutins aux contraintes statutaires des associations et fédérations.',
  lead: 'Adhérents dispersés, pouvoirs nombreux, quorum souvent difficile à atteindre : dans le monde associatif, l’enjeu du vote n’est presque jamais technique. Il est de faire participer.',
  enjeux: [
    { icon: 'associations', title: 'Le quorum, chaque année', text: 'C’est le premier motif de report d’assemblée. Quand vos adhérents sont répartis sur tout le territoire, le déplacement décide du quorum plus sûrement que l’ordre du jour.' },
    { icon: 'competence', title: 'Des pouvoirs nombreux et encadrés', text: 'Beaucoup de statuts associatifs limitent le nombre de pouvoirs qu’un adhérent peut recevoir. Une règle simple à écrire, fastidieuse à appliquer à la main.' },
    { icon: 'journaux', title: 'Des bénévoles aux commandes', text: 'L’assemblée est souvent organisée par des bénévoles, entre deux obligations. L’outil doit être utilisable sans formation technique — et quelqu’un doit répondre au téléphone.' }
  ],
  scrutins: [
    { title: 'Assemblée générale ordinaire', text: 'Approbation des comptes, rapport moral, quitus, renouvellement partiel du conseil.', meta: 'Quorum statutaire, pouvoirs, vote des résolutions.', link: '/solutions/vote-electronique-assemblee-generale/' },
    { title: 'Assemblée générale extraordinaire', text: 'Modification des statuts, changement de nom, dissolution : majorités renforcées et quorum spécifique.', meta: 'Deux quorums distincts dans une même séance, si nécessaire.', link: '/solutions/vote-electronique-assemblee-generale/' },
    { title: 'Élection des instances', text: 'Conseil d’administration, bureau, commissions : scrutin uninominal, plurinominal ou de liste.', meta: 'Candidature en séance possible.', link: '/provote/fonctionnalites/' },
    { title: 'Consultation des adhérents', text: 'Orientation stratégique, adhésion à une fédération, changement de projet associatif.', meta: 'Sans convoquer une assemblée générale.', link: '/solutions/consultations-referendums/' }
  ],
  contraintes: [
    '**Collèges d’adhérents** — adhérents individuels, structures affiliées, membres de droit : chacun avec son poids de vote',
    '**Limitation des pouvoirs** — la règle statutaire est paramétrée et les pouvoirs excédentaires refusés automatiquement',
    '**Agréments à préserver** — pour les fédérations sportives et les associations agréées, les conditions statutaires de vote conditionnent l’agrément',
    '**Public hétérogène** — tous vos adhérents n’ont pas d’adresse e-mail. Le courrier postal reste combinable avec les canaux numériques',
    '**Budget contraint** — c’est souvent ce qui décide entre une prestation ponctuelle et la licence annuelle'
  ],
  besoin: {
    title: 'Favoriser la participation de vos adhérents',
    text: 'Nous ne promettons pas un taux de participation : il dépend de votre communication auprès de vos adhérents. Nous supprimons en revanche les raisons matérielles de ne pas voter — le déplacement, le créneau imposé, le courrier reçu trop tard — et nous vous conseillons sur les rappels à programmer. Un scrutin ouvert plusieurs jours change souvent l’issue du quorum.'
  },
  offre: { url: '/offres/accompagnement-sur-mesure/', heroImage: 'hero-accompagnement', label: 'Voir notre accompagnement' },
  faq: [
    { q: 'Nos statuts doivent-ils prévoir le vote électronique ?', a: 'Vos statuts doivent l’autoriser, ou à tout le moins ne pas l’exclure. Beaucoup de statuts associatifs restent silencieux sur les modalités de vote, ce qui laisse la voie ouverte. Certains imposent en revanche le vote à main levée ou la présence physique : votre chef de projet examine ce point avec vous dès la réunion de lancement.' },
    { q: 'Peut-on limiter le nombre de pouvoirs par adhérent ?', a: 'Oui, et c’est automatique. Si vos statuts prévoient qu’un adhérent ne peut recevoir que deux pouvoirs, la règle est paramétrée et les pouvoirs excédentaires sont refusés. Vous n’avez pas à les contrôler à la main le jour de l’assemblée.' },
    { q: 'Tous nos adhérents n’ont pas d’adresse e-mail. Est-ce bloquant ?', a: 'Non. Les codes d’accès peuvent partir par courrier postal, par SMS, ou être remis en main propre, et vous combinez les canaux adhérent par adhérent. Cela permet aussi de maîtriser les coûts d’envoi en ne postant que ce qui est nécessaire.' },
    { q: 'Nos bénévoles peuvent-ils gérer l’outil eux-mêmes ?', a: 'Avec la licence annuelle, oui : ProVote® est conçu pour être utilisé sans compétence technique, et vos équipes sont formées au démarrage. Si vous tenez une seule assemblée par an, une prestation accompagnée reste souvent plus simple.' }
  ]
});

const entreprises = secteurPage({
  groupe: 'entreprises',
  url: '/secteurs/entreprises-mutuelles/', heroImage: 'hero-accompagnement',
  img: 'hero-accompagnement',
  eyebrow: 'Entreprises et mutuelles',
  h1: 'Des votes fiables pour vos instances d’entreprise',
  title: 'Vote électronique pour entreprises et mutuelles | Mediavote',
  description: 'Élections CSE, conseils d’administration, assemblées de sociétaires et pondération des voix : des scrutins conformes et traçables pour vos instances.',
  lead: 'Élections professionnelles, conseils d’administration, assemblées de sociétaires : dans l’entreprise, le vote est encadré par des textes et scruté par des parties prenantes. La traçabilité y compte autant que le résultat.',
  enjeux: [
    { icon: 'entreprises', title: 'Un cadre juridique contraignant', text: 'Les élections professionnelles obéissent au Code du travail. Une irrégularité de procédure suffit à faire annuler un scrutin, quel qu’ait été le vote.' },
    { icon: 'journaux', title: 'Des parties prenantes attentives', text: 'Organisations syndicales, direction, salariés : chacun doit pouvoir constater que le scrutin s’est déroulé correctement. C’est le rôle des journaux d’audit et des accès de contrôle.' },
    { icon: 'competence', title: 'Une pondération fréquente', text: 'Parts sociales, nombre de sociétaires représentés, collèges à poids différents : dans les mutuelles et les sociétés, toutes les voix ne pèsent pas le même poids.' }
  ],
  scrutins: [
    { title: 'Élections CSE', text: 'Protocole d’accord préélectoral, collèges, listes, dépouillement par clés chiffrées, CERFA et second tour.', meta: 'Obligatoire tous les quatre ans dès 11 salariés.', link: '/solutions/elections-cse/' },
    { title: 'Conseils d’administration', text: 'Délibérations en séance ou en consultation écrite, à bulletin secret ou nominatif.', meta: 'Plusieurs fois par an : la licence devient pertinente.', link: '/solutions/vote-conseil-administration/' },
    { title: 'Assemblées de sociétaires et d’actionnaires', text: 'Résolutions, quitus, renouvellement des instances, avec pondération des voix.', meta: 'Quorum et majorités renforcées.', link: '/solutions/vote-electronique-assemblee-generale/' },
    { title: 'Consultations et référendums d’entreprise', text: 'Ratification d’un accord, consultation sur un projet d’organisation.', meta: 'Anonymat garanti, résultat opposable.', link: '/solutions/consultations-referendums/' }
  ],
  contraintes: [
    '**Collèges électoraux** — cadres, employés, agents de maîtrise : chaque collège a ses sièges et ses listes',
    '**Titulaires et suppléants** — les règles de délégation entre les deux sont paramétrées et appliquées',
    '**Séparation stricte des rôles** — l’organisateur RH suit le scrutin mais ne peut pas dépouiller. Seul le bureau de vote détient les clés',
    '**Multi-sites et travail à distance** — un dispositif à distance évite d’organiser des bureaux de vote sur chaque site',
    '**Salariés sans e-mail professionnel** — courrier, SMS ou code remis en main propre restent combinables'
  ],
  besoin: {
    title: 'Un scrutin difficile à contester',
    text: 'La contestation d’une élection professionnelle porte rarement sur le décompte : elle porte sur la procédure. Séparation des rôles, clés fragmentées entre les membres du bureau, journaux d’audit horodatés, CERFA pré-remplis sans ressaisie : chaque mécanisme ferme une voie de contestation. Et un chef de projet qui connaît le cadre vous alerte avant l’erreur, pas après.'
  },
  offre: { url: '/solutions/elections-cse/', heroImage: 'hero-assemblee', label: 'Voir les élections CSE' },
  faq: [
    { q: 'Faut-il un accord pour recourir au vote électronique aux élections CSE ?', a: 'Le recours doit être prévu par un accord d’entreprise ou de groupe. À défaut d’accord, l’employeur peut y recourir par décision unilatérale. Votre chef de projet vérifie ce point avec vous et vous indique les mentions attendues.' },
    { q: 'La direction peut-elle voir les résultats avant le bureau de vote ?', a: 'Non. L’organisateur — généralement le service RH — suit la participation et le quorum, mais ne détient aucune clé de dépouillement. Seuls les membres du bureau de vote peuvent ouvrir l’urne, et il leur faut réunir plusieurs clés.' },
    { q: 'Comment gérer des salariés répartis sur plusieurs sites ?', a: 'C’est précisément l’intérêt du vote à distance : vos salariés votent depuis n’importe où, sans que vous ayez à organiser un bureau de vote physique sur chaque site. Le décompte est consolidé automatiquement.' },
    { q: 'Peut-on pondérer les voix en assemblée de sociétaires ?', a: 'Oui. Le poids de chaque votant — parts sociales, nombre de sociétaires représentés, appartenance à un collège — est intégré au paramétrage et appliqué automatiquement au calcul des résultats.' }
  ]
});

const publics = secteurPage({
  groupe: 'public',
  url: '/secteurs/organismes-publics/', heroImage: 'hero-accueil',
  img: 'hero-accueil',
  eyebrow: 'Organismes publics',
  h1: 'Des scrutins sécurisés pour les organismes publics',
  title: 'Vote électronique pour le secteur public | Mediavote',
  description: 'Instances délibératives, commissions et consultations : Mediavote accompagne les organismes publics sur des scrutins accessibles, tracés et continus.',
  lead: 'Instances délibératives, commissions, consultations d’usagers : dans le secteur public, un scrutin doit être traçable, accessible à tous, et se tenir quoi qu’il arrive.',
  enjeux: [
    { icon: 'publics', title: 'La continuité du service', text: 'Une instance délibérative ne peut pas simplement être reportée. Le dispositif doit permettre de tenir la séance même quand une partie des membres ne peut pas se déplacer.' },
    { icon: 'canaux', title: 'L’accessibilité pour tous', text: 'Les obligations d’accessibilité numérique s’appliquent. Aucun membre ne doit être empêché de voter par l’outil lui-même.' },
    { icon: 'journaux', title: 'Une traçabilité opposable', text: 'Les délibérations d’un organisme public peuvent être contrôlées. Les journaux d’audit et les procès-verbaux doivent établir précisément ce qui s’est passé.' }
  ],
  scrutins: [
    { title: 'Instances délibératives', text: 'Conseils d’administration d’établissements, comités, commissions permanentes : délibérations en séance ou à distance.', meta: 'Quorum, pouvoirs, majorités paramétrables.', link: '/solutions/vote-conseil-administration/' },
    { title: 'Élections de représentants', text: 'Représentants du personnel, représentants d’usagers, membres de commissions : scrutins uninominaux, de liste ou par collèges.', meta: 'Dépouillement par clés fragmentées.', link: '/solutions/elections-cse/' },
    { title: 'Assemblées générales et plénières', text: 'Séances plénières avec émargement, quorum et vote de délibérations.', meta: 'En présentiel, à distance ou en hybride.', link: '/solutions/vote-electronique-assemblee-generale/' },
    { title: 'Consultations d’usagers', text: 'Concertation locale, avis sur un projet, consultation des bénéficiaires d’un service.', meta: 'Anonymat et traçabilité garantis.', link: '/solutions/consultations-referendums/' }
  ],
  contraintes: [
    '**Contraintes d’achat public** — nous fournissons les pièces attendues pour l’instruction de votre dossier',
    '**Accessibilité numérique** — le mode accompagné guide pas à pas les participants les moins à l’aise avec le numérique',
    '**Membres de droit et suppléants** — les règles de composition sont paramétrées, y compris les délégations restreintes',
    '**Publicité des débats** — l’accès Pilotage permet à un tiers de suivre le déroulement sans pouvoir intervenir',
    '**Archivage** — procès-verbaux et rapports d’émargement en PDF et en Excel, disponibles dès la clôture'
  ],
  besoin: {
    title: 'Une séance qui se tient, quoi qu’il arrive',
    text: 'Le vote hybride est la configuration la plus demandée dans le secteur public : elle permet de réunir ceux qui peuvent se déplacer sans exclure les autres, avec un quorum consolidé en temps réel et un résultat unique par délibération. Un chef de projet synchronise les deux publics et gère les aléas — c’est ce qui évite le report de séance.'
  },
  offre: { url: '/modes-de-vote/vote-hybride/', heroImage: 'hero-accueil', label: 'Voir le vote hybride' },
  faq: [
    { q: 'Fournissez-vous les pièces pour un dossier de marché public ?', a: 'Oui. Votre interlocuteur commercial vous transmet les éléments attendus pour l’instruction : présentation de la société, description technique de la solution, et les pièces de conformité à jour au moment de votre consultation.' },
    { q: 'Un tiers peut-il suivre le scrutin sans y participer ?', a: 'Oui, c’est l’accès Pilotage : un accès en lecture seule, multi-utilisateur, qui permet à un huissier, un contrôleur ou un observateur de suivre l’émargement, le quorum et les résultats sans aucune possibilité d’intervention.' },
    { q: 'Comment garantir qu’aucun membre ne soit exclu par l’outil ?', a: 'Par le mode accompagné, qui guide pas à pas ; par la combinaison des canaux d’envoi, y compris postal ; et par une assistance technique joignable par téléphone pendant toute la durée du scrutin. Les questions d’accessibilité de la plateforme sont traitées avec Mediavote lors de l’instruction de votre dossier.' },
    { q: 'Peut-on tenir une séance si une partie des membres est empêchée ?', a: 'C’est l’intérêt du vote hybride : les membres présents et les membres à distance votent dans un scrutin unique, avec un quorum consolidé. La séance se tient à la date prévue.' }
  ]
});

/* ------------------------------------------------------------ /a-propos/
   Page « Qui sommes-nous » (To Do) — URL /a-propos/ conservée, conformément
   à l'arborescence validée. Contenu repris et retravaillé depuis
   media-vote.com/fr/qui-sommes-nous (portraits et parcours inclus).       */
const person = ({ slug, nom, role, bullets, linkedin }) => `
      <article class="person">
        <div class="person__photo">
          <picture>
            <source type="image/webp" srcset="/assets/img/equipe-${slug}.webp">
            <img src="/assets/img/equipe-${slug}.jpg" alt="Portrait de ${nom}" width="400" height="400" loading="lazy" decoding="async">
          </picture>
        </div>
        <div>
          <h3>${nom}</h3>
          <p class="person__role">${role}</p>
          <ul>${bullets.map((b) => `<li>${b}</li>`).join('')}</ul>
          <a class="link-arrow person__link" href="${linkedin}" target="_blank" rel="noopener" aria-label="Profil LinkedIn de ${nom} (nouvel onglet)">Profil LinkedIn de ${nom}</a>
        </div>
      </article>`;

const apropos = {
  page: {
    url: '/a-propos/', heroImage: 'hero-accompagnement',
    title: 'Qui sommes-nous : Mediavote, le vote depuis 1998',
    description: 'Créée en 1998, Mediavote conçoit ProVote® et opère des boîtiers de vote pour les AG, conseils et élections. Découvrez notre équipe, nos valeurs, notre méthode.',
    priority: 'P1',
    schema: ['Organization', 'BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Qui sommes-nous', url: '/a-propos/' }]
  },
  body: `
${hero({
  img: 'hero-accompagnement',
  eyebrow: 'Qui sommes-nous',
  h1: 'Mediavote, spécialiste du vote professionnel depuis 1998',
  lead: 'Nous organisons des scrutins. C’est notre seul métier depuis plus d’un quart de siècle — en salle avec nos boîtiers, en ligne avec ProVote®, et le plus souvent avec une équipe qui connaît vos statuts.',
  cta: 'Parler de votre projet', ctaUrl: '/contact/'
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div>
        ${C.sectionHead({ eyebrow: 'Notre histoire', title: 'Ce qui n’a pas changé depuis 1998' })}
        <p class="lead">
          Mediavote a été créée en 1998, à une époque où le vote électronique se pratiquait surtout
          en salle, avec des boîtiers. Nous n’avons cessé d’évoluer avec les exigences de nos clients et
          les évolutions technologiques&nbsp;: nous avons accompagné la transition vers le vote en ligne
          sans abandonner le présentiel — parce que nos clients avaient besoin des deux.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Ce qui n’a pas changé, c’est l’exigence de <strong>qualité et de fiabilité</strong>, et la conviction
          qui structure notre façon de travailler&nbsp;: <strong>un scrutin ne se joue pas le jour du vote, il se
          joue à la préparation</strong>. Les incidents que nous voyons chez les organisations qui nous rejoignent
          viennent presque toujours d’un paramétrage fait trop vite, jamais testé.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          C’est pourquoi nous imposons un test en conditions réelles avant chaque scrutin accompagné,
          y compris quand le client trouve que ce n’est pas nécessaire.
        </p>
      </div>
      <div>
        ${C.sectionHead({ eyebrow: 'Pour qui', title: 'Au service des organisations publiques et privées' })}
        <p>Conseils départementaux, communautés de communes, fédérations, associations, CSE, ONG, sociétés,
        cabinets d’avocats ou d’experts-comptables&nbsp;: Mediavote accompagne leurs assemblées générales,
        leurs conseils d’administration et leurs élections, partout en France et en Europe.</p>
        <p style="margin-top:var(--mv-space-5)">Notre rôle commence avant le choix de l’outil&nbsp;: nous vous
        orientons vers la solution — ou les solutions — adaptée à votre scrutin.</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--accent" href="/#configurateur">Trouver ma solution${C.icons.arrow}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'L’équipe', title: 'Vous saurez à qui vous parlez', lead: 'Une équipe à taille humaine, joignable, et présente le jour où cela compte.' })}
    <div class="team">
      ${person({
        slug: 'fanny-damon', nom: 'Fanny Damon', role: 'Responsable des opérations',
        bullets: [
          'Pilote la partie opérationnelle des projets et encadre les chefs de projet Mediavote',
          'Spécialiste des interfaces numériques&nbsp;: ergonomie et parcours des votants',
          'Formation en communication numérique et en psychologie cognitive appliquée aux interfaces multimédia',
          'Connaissance fine des particularités des statuts, dans le privé comme dans le public',
          'Gestion de projet&nbsp;: processus, matrices types, rétroplanning'
        ],
        linkedin: 'https://fr.linkedin.com/in/fanny-damon'
      })}
      ${person({
        slug: 'jean-pierre-leclercq', nom: 'Jean-Pierre Leclercq', role: 'Directeur commercial',
        bullets: [
          'Plus de vingt-cinq ans dans l’audiovisuel et les outils de communication à distance',
          'Spécialiste des outils numériques de transmission sécurisée&nbsp;: captation, vote, RGPD',
          'Familier des appels d’offres et des accords-cadres, dans le secteur public comme privé',
          'À l’écoute de vos besoins, il recherche la solution adaptée — en présentiel, à distance ou en hybride'
        ],
        linkedin: 'https://www.linkedin.com/in/jean-pierre-leclercq-mediavote-sp%C3%A9cialiste-du-vote-en-ag/'
      })}
    </div>
    ${C.prodNote(`<p><strong>Équipe à compléter.</strong> Les deux profils proviennent de la page
    « Qui sommes-nous » du site actuel, portraits compris. Le nom du ou des chefs de projet, ainsi que l’effectif réel,
    restent à confirmer avec Mediavote.</p>`)}
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Nos valeurs', title: 'Quatre engagements, tenus scrutin après scrutin' })}
    <div class="values">
      ${C.card({ icon: 'interlocuteur', title: 'Réactivité et disponibilité', text: 'Vous avez les coordonnées directes de votre chef de projet. Vous le joignez directement, à chaque étape de votre projet.' })}
      ${C.card({ icon: 'competence', title: 'Accompagnement et relation de confiance', text: 'Nous vous conseillons sur le paramétrage au lieu de l’exécuter sans poser de question, et nous vous disons quand une solution ne convient pas à votre cas.' })}
      ${C.card({ icon: 'boitier', title: 'Innovation technique et fiabilité des équipements', text: 'La plateforme ProVote® et nos boîtiers de vote évoluent avec vos usages, sans jamais sacrifier la fiabilité le jour du vote.' })}
      ${C.card({ icon: 'urnes', title: 'Service sur mesure et confidentialité des données', text: 'Chaque scrutin est paramétré selon vos textes, et la confidentialité des données de vos votants guide nos choix techniques.' })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Nos partis pris', title: 'Quatre choix que nous assumons' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'interlocuteur', title: 'Rester à taille humaine', text: 'C’est un choix, pas une limite. Il nous permet de connaître vos statuts, de vous répondre vite, et d’être présents le jour où cela compte.' })}
      ${C.card({ icon: 'boitier', title: 'Ne pas abandonner le boîtier', text: 'Beaucoup d’acteurs l’ont abandonné. En salle, il reste la solution la plus fluide — nous continuons de l’opérer parce que nos clients en ont l’usage.' })}
      ${C.card({ icon: 'test', title: 'Imposer le test', text: 'Nous ne livrons pas une session sans qu’elle ait été testée avec vous, dans les conditions réelles, avec les personnes de votre choix.' })}
      ${C.card({ icon: 'journaux', title: 'Ne pas surpromettre', text: 'Nous préférons décrire des mécanismes vérifiables plutôt qu’afficher des superlatifs. Vous constaterez en démonstration ce que nous affirmons ici.' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Ils nous font confiance', title: 'Entreprises, secteur public, chambres consulaires, organisations professionnelles', center: true })}
    ${C.logoWall({ condensed: true })}
    <p style="margin-top:var(--mv-space-8);text-align:center"><a class="link-arrow" href="/references/">Toutes nos références</a></p>
  </div>
</section>

<section class="section section--dark">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Notre position', title: 'La technologie sécurise le vote. Notre équipe sécurise le projet.' })}
    <p class="lead">
      Les plateformes de vote présentent des fonctionnalités largement comparables. Ce qui fait la différence, c’est
      ce qui se passe avant l’ouverture du scrutin — et ce qui se passe quand un imprévu survient
      en séance.
    </p>
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Découvrir notre méthode</a></p>
  </div>
</section>
`
};

/* ---------------------------------------------------------------- /faq/ */
const faqAll = [
  { t: 'Cadre légal', items: [
    { q: 'Le vote électronique est-il légal pour une assemblée générale ?', a: 'Oui, sous réserve que vos statuts l’autorisent ou ne l’excluent pas, et que les modalités soient conformes aux textes applicables à votre type d’organisation. Votre chef de projet vérifie ce point avec vous dès la réunion de lancement et vous indique si une modification statutaire est nécessaire.' },
    { q: 'Faut-il un accord pour les élections CSE ?', a: 'Le recours au vote électronique pour les élections du CSE doit être prévu par un accord d’entreprise ou de groupe. À défaut d’accord, l’employeur peut y recourir par décision unilatérale. Les textes de référence sont les articles L. 2314-4 et suivants du Code du travail, ainsi que les arrêtés de 2007 et 2019 et les décrets de 2019 et 2020.' },
    { q: 'Les procès-verbaux sont-ils opposables ?', a: 'Les documents produits — procès-verbal des résultats, rapport d’émargement, export détaillé — constituent la trace de votre scrutin. En cas de contestation, ils permettent d’établir qui a voté, quand, et selon quelles règles le résultat a été calculé, sans jamais révéler le sens d’un vote secret.' }
  ]},
  { t: 'Sécurité et anonymat', items: [
    { q: 'Comment garantissez-vous le secret du vote ?', a: 'L’urne d’émargement et l’urne des bulletins sont séparées : savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté. Le dépouillement exige la réunion de plusieurs clés chiffrées détenues par différents membres du bureau de vote. Aucune personne seule, y compris chez Mediavote, ne peut ouvrir l’urne.' },
    { q: 'Comment les votants sont-ils authentifiés ?', a: 'Par des codes personnels transmis sur deux canaux distincts au choix : e-mail, SMS, courrier postal ou code remis en main propre. Vous pouvez combiner les canaux votant par votant, ce qui permet d’adapter le dispositif à un public hétérogène.' },
    { q: 'Peut-on voter deux fois ?', a: 'Non. Chaque votant dispose d’un accès unique. Si vous activez l’option correspondante, il peut en revanche modifier son vote tant que le scrutin reste ouvert — seul le dernier vote est alors pris en compte.' }
  ]},
  { t: 'Organisation pratique', items: [
    { q: 'Combien de temps faut-il pour organiser un scrutin ?', a: 'Un mois permet de travailler dans de bonnes conditions : paramétrage, test en situation réelle et ajustements. Nous savons aussi organiser un scrutin dans des délais plus courts — dites-nous votre échéance, nous vous dirons ce qui est réalisable.' },
    { q: 'Que se passe-t-il si un votant n’arrive pas à voter ?', a: 'Une assistance technique est disponible pendant toute la durée du scrutin, par téléphone et par e-mail. Elle explique comment se connecter et comment voter, et régénère des codes d’accès si le votant a perdu les siens. Un mode accompagné, activable, guide également le votant pas à pas.' },
    { q: 'Peut-on combiner vote en salle et vote à distance ?', a: 'Oui, c’est le vote hybride : les votes exprimés sur place et à distance sont comptés ensemble, avec un quorum consolidé en temps réel et un résultat unique par vote. C’est la configuration la plus demandée aujourd’hui pour les assemblées générales.' },
    { q: 'Le vote en ligne améliore-t-il la participation ?', a: 'Il lève les obstacles matériels : déplacement, créneau imposé, courrier reçu trop tard. Un scrutin ouvert sur plusieurs jours permet à chacun de voter quand il le peut. La progression dépend ensuite de votre communication — nous vous conseillons sur les rappels à programmer, sans promettre un chiffre que nous ne maîtrisons pas.' }
  ]},
  { t: 'Fonctionnalités', items: [
    { q: 'Comment le quorum est-il calculé ?', a: 'Automatiquement, à mesure que vos membres émargent, en nombre de suffrages ou en pourcentage selon votre règle statutaire. Il est consultable en temps réel depuis l’accès Pilotage et peut être affiché ou masqué aux participants. Si votre séance comporte une AGO et une AGE, chacune dispose de son propre quorum.' },
    { q: 'Peut-on limiter le nombre de pouvoirs par votant ?', a: 'Oui. Si vos statuts prévoient qu’un votant ne peut recevoir que deux pouvoirs, la règle est paramétrée et appliquée automatiquement : les pouvoirs excédentaires sont refusés. Les configurations titulaire-suppléant sont également prises en charge.' },
    { q: 'Nos voix n’ont pas toutes le même poids. Est-ce possible ?', a: 'Oui. Parts sociales, nombre d’adhérents représentés, collèges de poids différents : le poids de chaque votant est intégré au paramétrage et appliqué automatiquement au calcul des résultats.' }
  ]},
  { t: 'Offres et accompagnement', items: [
    { q: 'Combien coûte l’organisation d’un scrutin ?', a: 'Cela dépend du nombre de votants, du mode de vote, du niveau d’accompagnement et de la fréquence de vos scrutins. Si vous votez plusieurs fois par an, la licence annuelle est généralement plus avantageuse qu’une prestation ponctuelle. Parlons de votre situation : nous vous répondons précisément.' },
    { q: 'Licence ou accompagnement : comment choisir ?', a: 'La réponse dépend surtout de votre fréquence de scrutins. Au-delà de quatre assemblées ou huit conseils par an, la licence devient pertinente. En dessous, une prestation accompagnée reste plus simple. Nous vous orientons honnêtement lors de la démonstration, y compris si la licence vous convient mieux qu’une prestation.' },
    { q: 'Le chef de projet est-il présent le jour du scrutin ?', a: 'Pour une séance en temps réel, oui — en visioconférence ou sur place selon votre configuration. Il ouvre et ferme chaque vote au rythme du président de séance et gère les aléas. Pour un scrutin asynchrone, il reste joignable pendant toute la durée d’ouverture.' }
  ]}
];

const faqPage = {
  page: {
    url: '/faq/', heroImage: 'hero-accueil',
    title: 'FAQ : questions fréquentes sur le vote électronique | Mediavote',
    description: 'Légalité, sécurité, anonymat, procurations, quorum, accessibilité, tarifs : les réponses aux questions que se posent les organisations avant de franchir le pas.',
    priority: 'P1',
    schema: ['FAQPage', 'BreadcrumbList'],
    faqItems: faqAll.flatMap((g) => g.items),
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Questions fréquentes', url: '/faq/' }]
  },
  body: `
${hero({
  img: 'hero-accueil',
  eyebrow: 'Questions fréquentes',
  h1: 'Toutes vos questions sur le vote électronique',
  lead: 'Les questions que les organisations nous posent réellement avant de se décider — et nos réponses, y compris quand elles ne vont pas dans notre sens.',
  cta: 'Poser une autre question', ctaUrl: '/contact/'
})}

${faqAll.map((g, i) => `
<section class="section${i % 2 ? ' section--surface' : ''}">
  <div class="container">
    ${C.sectionHead({ eyebrow: `Thème ${i + 1}`, title: g.t })}
    ${C.faq(g.items, 'faq-g' + i)}
  </div>
</section>`).join('')}
`
};

/* ------------------------------------------------------------- /contact/ */
const contact = {
  page: {
    url: '/contact/', heroImage: 'hero-vote',
    title: 'Contacter Mediavote | Mediavote',
    description: 'Une question, un projet de scrutin, une demande de devis : l’équipe Mediavote vous répond. Téléphone, e-mail ou formulaire, au choix.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Contact', url: '/contact/' }]
  },
  body: `
${hero({
  img: 'hero-vote',
  eyebrow: 'Contact',
  h1: 'Parlons de votre prochain scrutin',
  lead: 'Décrivez-nous le scrutin que vous devez organiser. Nous vous apportons une réponse précise, adaptée à votre situation.'
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <h2>Nous joindre directement</h2>
        <p style="margin-top:var(--mv-space-5)">
          Beaucoup de nos clients préfèrent appeler. C’est souvent le plus rapide pour savoir si
          votre projet est réalisable dans le délai que vous avez.
        </p>
        <div style="background:var(--mv-surface-blue);padding:var(--mv-space-6);border-radius:var(--mv-radius-lg);margin-top:var(--mv-space-6)">
          <p style="max-width:none;font-size:var(--mv-text-lg)">
            <strong>Téléphone</strong><br>
            <a href="${site.phoneHref}">${site.phone}</a> — du lundi au vendredi
          </p>
          <p style="max-width:none;font-size:var(--mv-text-lg);margin-top:var(--mv-space-5)">
            <strong>E-mail</strong><br>
            <a href="mailto:${site.email}">${site.email}</a>
          </p>
          <p style="max-width:none;font-size:var(--mv-text-lg);margin-top:var(--mv-space-5)">
            <strong>Adresse</strong><br>
            ${site.address.street}<br>${site.address.postalCode} ${site.address.city}
          </p>
        </div>

        <h2 style="margin-top:var(--mv-space-12)">Votre besoin</h2>
        <ul style="line-height:1.8;margin-top:var(--mv-space-5)">
          <li>Une démonstration adaptée à votre contexte&nbsp;? <a href="/demonstration/">Demandez une démonstration</a></li>
          <li>Une réponse rapide à une question précise&nbsp;? <a href="/faq/">Consultez notre FAQ</a></li>
          <li>Des éléments pour un dossier de marché&nbsp;? Téléphonez-nous au <a href="${site.phoneHref}">${site.phone}</a></li>
        </ul>
      </div>

      <div>
        <h2>Nous écrire</h2>
        ${C.prodNote(`<p><strong>Formulaire non raccordé (Q-B8).</strong> L’interface, la validation et les
        messages d’erreur sont fonctionnels. La soumission n’envoie rien et ne simule aucun envoi :
        la destination technique est en attente de décision.</p>`)}
        <form class="form" data-validate novalidate style="margin-top:var(--mv-space-6)">
          <p class="form__legend">Les champs marqués d’un astérisque (<span class="form__required" aria-hidden="true">*</span>) sont obligatoires.</p>
          <div class="form__row">
            <label class="form__label" for="c-nom">Nom et prénom<span class="form__required" aria-hidden="true">*</span></label>
            <input class="form__control" type="text" id="c-nom" name="nom" required aria-required="true" aria-describedby="c-nom-error" data-error-name="vos nom et prénom" autocomplete="name">
            <p class="form__error" id="c-nom-error" role="alert"></p>
          </div>
          <div class="form__row">
            <label class="form__label" for="c-org">Votre organisation<span class="form__required" aria-hidden="true">*</span></label>
            <input class="form__control" type="text" id="c-org" name="org" required aria-required="true" aria-describedby="c-org-error" data-error-name="le nom de votre organisation" autocomplete="organization">
            <p class="form__error" id="c-org-error" role="alert"></p>
          </div>
          <div class="form__row">
            <label class="form__label" for="c-mail">E-mail professionnel<span class="form__required" aria-hidden="true">*</span></label>
            <input class="form__control" type="email" id="c-mail" name="mail" required aria-required="true" aria-describedby="c-mail-error" data-error-name="votre adresse e-mail professionnelle" autocomplete="email">
            <p class="form__error" id="c-mail-error" role="alert"></p>
          </div>
          <div class="form__row">
            <label class="form__label" for="c-msg">Votre message<span class="form__required" aria-hidden="true">*</span></label>
            <textarea class="form__control" id="c-msg" name="msg" required aria-required="true" aria-describedby="c-msg-error" data-error-name="votre message"></textarea>
            <p class="form__error" id="c-msg-error" role="alert"></p>
          </div>
          ${C.forms.antiBot('c')}
          ${C.forms.consent('c')}
          <button class="btn btn--xl btn--primary" type="submit">Envoyer ma demande${C.icons.arrow}</button>
          <p class="form__hint" role="status" aria-live="polite" data-form-status style="margin-top:var(--mv-space-4)"></p>
        </form>
      </div>
    </div>
  </div>
</section>
`
};

/* ------------------------------------------------------- Pages légales */
const legalPage = ({ url, h1, title, description, eyebrow, body }) => ({
  page: { url, title, description, priority: 'P2', schema: ['BreadcrumbList'], breadcrumb: [{ label: 'Accueil', url: '/' }, { label: h1, url }] },
  body: `
${hero({
  img: 'hero-accueil', eyebrow, h1, lead: description, cta: null })}
<section class="section">
  <div class="container container--narrow">${body}</div>
</section>`
});

const mentions = legalPage({
  url: '/mentions-legales/', heroImage: 'hero-accueil', eyebrow: 'Mentions légales', h1: 'Mentions légales',
  title: 'Mentions légales | Mediavote',
  description: 'Éditeur, directeur de la publication, hébergeur et conditions d’utilisation du site Mediavote, spécialiste du vote électronique professionnel depuis 1998.',
  body: `
    <h2>Éditeur du site</h2>
    <p><strong>Mediavote</strong><br>${site.address.street}, ${site.address.postalCode} ${site.address.city}<br>
    Téléphone : <a href="${site.phoneHref}">${site.phone}</a><br>
    E-mail : <a href="mailto:${site.email}">${site.email}</a></p>
    ${C.prodNote(`<p><strong>À compléter avant mise en production (Q-C6).</strong> Forme juridique,
    capital social, numéro RCS, numéro de TVA intracommunautaire, nom du directeur de la publication
    et coordonnées de l’hébergeur du site restent à confirmer avec Mediavote.</p>`)}
    <h2 style="margin-top:var(--mv-space-10)">Propriété intellectuelle</h2>
    <p>L’ensemble des contenus de ce site — textes, schémas, éléments graphiques et structure — est la propriété de Mediavote, sauf mention contraire. ProVote® est une marque de Mediavote.</p>
    <h2 style="margin-top:var(--mv-space-10)">Données personnelles</h2>
    <p>Les traitements de données réalisés depuis ce site sont décrits dans la <a href="/politique-confidentialite/">politique de confidentialité</a>.</p>`
});

const confidentialite = legalPage({
  url: '/politique-confidentialite/', heroImage: 'hero-accueil', eyebrow: 'Confidentialité', h1: 'Politique de confidentialité',
  title: 'Politique de confidentialité | Mediavote',
  description: 'Comment Mediavote traite les données personnelles collectées via son site vitrine : finalités, durées de conservation, destinataires et exercice de vos droits.',
  body: `
    <h2>Ce que ce site collecte</h2>
    <p>Ce site est un site vitrine. Il ne comporte ni espace client, ni compte utilisateur, ni paiement en ligne. Les seules données collectées sont celles que vous saisissez volontairement dans les formulaires de contact et de demande de démonstration.</p>
    <h2 style="margin-top:var(--mv-space-10)">Cookies</h2>
    <p>Ce site ne dépose <strong>aucun cookie</strong> de mesure d’audience ni de traçage. C’est pourquoi aucun bandeau de consentement ne vous est présenté.</p>
    <h2 style="margin-top:var(--mv-space-10)">Vos droits</h2>
    <p>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur les données vous concernant. Pour l’exercer, écrivez à <a href="mailto:${site.email}">${site.email}</a>.</p>
    ${C.prodNote(`<p><strong>À compléter avant mise en production (Q-B5).</strong> Restent à confirmer :
    l’identité du responsable de traitement, les coordonnées du DPO ou du référent données, les durées
    de conservation des données de formulaire, la liste des sous-traitants, la base légale retenue,
    et l’hébergeur du site.</p>
    <p>Cette page doit également distinguer clairement les données du <strong>site vitrine</strong> de
    celles traitées par la plateforme <strong>ProVote®</strong>, qui relèvent d’un autre cadre
    contractuel et d’un DPA distinct.</p>`)}`
});

const accessibilite = legalPage({
  url: '/accessibilite/', heroImage: 'hero-accueil', eyebrow: 'Accessibilité', h1: 'Déclaration d’accessibilité',
  title: 'Accessibilité du site | Mediavote',
  description: 'Niveau de conformité au RGAA du site Mediavote, points d’amélioration connus et moyen de nous signaler une difficulté d’accès.',
  body: `
    <h2>Périmètre de cette déclaration</h2>
    <p>Cette déclaration concerne <strong>le site media-vote.com</strong>. Elle ne porte pas sur la plateforme de vote ProVote®, qui relève d’une évaluation distincte.</p>
    <h2 style="margin-top:var(--mv-space-10)">Ce qui a été mis en œuvre</h2>
    <ul style="line-height:1.8">
      <li>Structure sémantique et hiérarchie de titres sans saut de niveau</li>
      <li>Navigation complète au clavier, avec contours de focus visibles</li>
      <li>Lien d’évitement vers le contenu principal</li>
      <li>Contrastes vérifiés par calcul, au minimum au niveau AA</li>
      <li>Information jamais portée par la couleur seule</li>
      <li>Respect de la préférence système <code>prefers-reduced-motion</code></li>
      <li>Formulaires étiquetés, avec messages d’erreur explicites annoncés aux lecteurs d’écran</li>
      <li>Contenu et navigation restant utilisables sans JavaScript</li>
    </ul>
    ${C.prodNote(`<p><strong>Taux de conformité à renseigner.</strong> Un audit RGAA complet doit être
    réalisé avant publication de cette page : la déclaration doit mentionner un taux de conformité issu
    d’un audit, la date de celui-ci, les contenus non accessibles et les dérogations éventuelles.</p>`)}
    <h2 style="margin-top:var(--mv-space-10)">Signaler une difficulté</h2>
    <p>Si vous rencontrez un obstacle pour accéder à un contenu de ce site, écrivez à <a href="mailto:${site.email}">${site.email}</a>. Nous vous répondrons et vous proposerons une alternative.</p>`
});

const planDuSite = {
  page: {
    url: '/plan-du-site/', heroImage: 'hero-accueil', title: 'Plan du site | Mediavote',
    description: 'L’ensemble des pages du site Mediavote : solutions, modes de vote, plateforme ProVote®, offres, sécurité, secteurs, références et ressources.',
    priority: 'P2', schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Plan du site', url: '/plan-du-site/' }]
  },
  body: `
${hero({
  img: 'hero-accueil', eyebrow: 'Plan du site', h1: 'Plan du site', lead: 'Toutes les pages du site, organisées par section.', cta: null })}
<section class="section">
  <div class="container">
    <div class="grid grid--3">
      ${[
        { t: 'Solutions', l: [['Toutes les solutions', '/solutions/'], ['Assemblées générales', '/solutions/vote-electronique-assemblee-generale/'], ['Conseils d’administration', '/solutions/vote-conseil-administration/'], ['Élections CSE', '/solutions/elections-cse/'], ['Consultations et référendums', '/solutions/consultations-referendums/']] },
        { t: 'Modes de vote', l: [['Comparer les modes', '/modes-de-vote/'], ['Vote en ligne', '/modes-de-vote/vote-en-ligne/'], ['Vote par boîtier', '/modes-de-vote/vote-par-boitier/'], ['Vote hybride', '/modes-de-vote/vote-hybride/']] },
        { t: 'Plateforme et offres', l: [['La plateforme ProVote®', '/provote/'], ['Fonctionnalités', '/provote/fonctionnalites/'], ['Licence annuelle', '/offres/licence-annuelle-provote/'], ['Achat de boîtiers de vote', '/offres/achat-boitiers-de-vote/'], ['Accompagnement sur mesure', '/offres/accompagnement-sur-mesure/'], ['Sécurité et conformité', '/securite-conformite/']] },
        { t: 'Secteurs', l: [['Tous les secteurs', '/secteurs/'], ['Associations et fédérations', '/secteurs/associations-federations/'], ['Entreprises et mutuelles', '/secteurs/entreprises-mutuelles/'], ['Organismes publics', '/secteurs/organismes-publics/']] },
        { t: 'Ressources', l: [['Références clients', '/references/'], ['Actualités', '/actualites/'], ['Questions fréquentes', '/faq/']] },
        { t: 'Mediavote', l: [['Qui sommes-nous', '/a-propos/'], ['Contact', '/contact/'], ['Demander une démonstration', '/demonstration/'], ['Mentions légales', '/mentions-legales/'], ['Politique de confidentialité', '/politique-confidentialite/'], ['Accessibilité', '/accessibilite/']] }
      ].map((g) => `<div><h2 style="font-size:var(--mv-text-h4)">${g.t}</h2><ul style="margin-top:var(--mv-space-4);line-height:1.9">${g.l.map(([n, u]) => `<li><a href="${u}">${n}</a></li>`).join('')}</ul></div>`).join('')}
    </div>
  </div>
</section>`
};

/* --------------------------------------------------------- /references/ */
const references = {
  page: {
    url: '/references/', heroImage: 'hero-assemblee',
    title: 'Références et témoignages clients | Mediavote',
    description: 'Associations, fédérations, mutuelles, entreprises et organismes publics : les organisations qui confient leurs scrutins à Mediavote depuis 1998.',
    priority: 'P1', schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Références clients', url: '/references/' }]
  },
  body: `
${hero({
  img: 'hero-assemblee',
  eyebrow: 'Références',
  h1: 'Ils font confiance à Mediavote pour leurs scrutins',
  lead: 'Depuis 1998, Mediavote accompagne des associations, des fédérations, des mutuelles, des entreprises et des organismes publics dans leurs scrutins les plus sensibles.',
  cta: 'Organiser ma démonstration'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Ils nous font confiance', title: 'Des organisations de toutes tailles, dans tous les secteurs', lead: 'Entreprises, services de l’État, chambres consulaires, organisations professionnelles, acteurs de la santé et du sport&nbsp;: une sélection des organisations qui votent avec Mediavote.', center: true })}
    ${C.logoWall()}
  </div>
</section>

${C.prodNote(`<p><strong>Logos publiés sur décision d’Alexis Rollemberg (27/09/2026, arbitrage n° 5).</strong>
Logos fournis dans <code>03_logos-clients/Licence ProVote</code>, classés en quatre familles dans
<code>src/data/references.js</code>. Témoignages nominatifs toujours attendus (Q-B7) : aucune citation n’est fabriquée.</p>`)}

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Au-delà des logos', title: 'Ce qui est constant d’un client à l’autre' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'competence', title: 'Depuis 1998', text: 'Mediavote est spécialisée sur les assemblées générales, les conseils et les votes professionnels depuis sa création.' })}
      ${C.card({ icon: 'hybride', title: 'Trois modalités', text: 'Vote en ligne, vote par boîtier et vote hybride, opérés par la même équipe avec la même plateforme.' })}
      ${C.card({ icon: 'test', title: 'Un test systématique', text: 'Chaque scrutin accompagné est testé en conditions réelles, avec jusqu’à vingt personnes de votre choix.' })}
      ${C.card({ icon: 'journaux', title: 'Quatre documents de suivi', text: 'Brief, matrice des votants, matrice des votes et rétroplanning : partagés avec vous dès le lancement.' })}
    </div>
  </div>
</section>
`
};

module.exports = [securite, associations, entreprises, publics, apropos, faqPage, contact, references, mentions, confidentialite, accessibilite, planDuSite];
