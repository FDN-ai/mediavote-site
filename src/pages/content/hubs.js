/* ==========================================================================
   Pages hub — Solutions, Modes de vote, Secteurs
   Contenu court et distributeur : un hub oriente, il ne développe pas.
   Règle anti-cannibalisation : aucun hub ne traite un besoin en profondeur,
   sinon il concurrence ses propres pages filles.
   ========================================================================== */

const C = require('../../components');

/* ------------------------------------------------------------ /solutions/ */
const solutions = {
  page: {
    url: '/solutions/', heroImage: 'hero-assemblee',
    title: 'Solutions de vote électronique par type de scrutin | Mediavote',
    description: 'Assemblées générales, conseils d’administration, élections CSE, consultations : chaque scrutin a ses règles. Mediavote adapte la plateforme et l’accompagnement.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Solutions', url: '/solutions/' }]
  },
  body: `
<section class="hero hero--page">
  ${C.heroPlate('hero-assemblee', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Par besoin</span>
      <h1 style="margin-top:var(--mv-space-4)">Des solutions de vote adaptées à chaque type de scrutin</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">
        Un conseil d’administration ne se vote pas comme une élection CSE, et une assemblée générale
        d’association n’obéit pas aux mêmes règles qu’une assemblée de sociétaires. Commencez par
        votre besoin : nous vous orientons vers la page qui lui correspond.
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.numList([
      { title: 'Assemblées générales',
        text: 'Émargement, quorum, pouvoirs, résolutions, élections et procès-verbal. En présentiel, à distance ou en hybride.',
        meta: 'Associations, fédérations, mutuelles, sociétés, organismes publics.',
        link: '/solutions/vote-electronique-assemblee-generale/' },
      { title: 'Conseils d’administration',
        text: 'Votes à bulletin secret, en séance ou en consultation écrite, tout au long de l’année.',
        meta: 'Instances qui se réunissent plusieurs fois par an.',
        link: '/solutions/vote-conseil-administration/' },
      { title: 'Élections CSE',
        text: 'Protocole d’accord préélectoral, convocations, dépouillement par clés chiffrées, CERFA et second tour.',
        meta: 'Employeurs d’au moins 11 salariés.',
        link: '/solutions/elections-cse/' },
      { title: 'Consultations et référendums',
        text: 'Consulter salariés, adhérents ou administrés sans convoquer une assemblée générale.',
        meta: 'Décisions qui n’exigent pas la solennité d’une AG.',
        link: '/solutions/consultations-referendums/' }
    ])}
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Vous hésitez ?',
      title: 'Deux questions suffisent à vous orienter',
      lead: 'La bonne page dépend de ce que vous devez faire voter et de qui vote.'
    })}
    <div class="grid grid--2">
      ${C.card({
        title: 'Que faites-vous voter ?',
        text: 'Des **résolutions** soumises à approbation, ou l’**élection** de personnes ? Les deux relèvent d’une assemblée générale. Un scrutin qui désigne des représentants du personnel relève des élections CSE, avec un cadre juridique propre.'
      })}
      ${C.card({
        title: 'Qui vote, et selon quelles règles ?',
        text: 'Des adhérents avec des pouvoirs et un quorum statutaire ? Des salariés répartis en collèges ? Des administrateurs qui délibèrent plusieurs fois par an ? C’est cette réponse qui détermine le paramétrage — et la page qui vous concerne.'
      })}
    </div>
    <p style="margin-top:var(--mv-space-8)">
      Vous ne savez pas dans quelle catégorie vous situer ?
      <a href="/contact/">Décrivez-nous votre scrutin</a> — nous vous répondons directement.
    </p>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Puis par modalité',
      title: 'Une fois le besoin identifié, reste le mode de vote',
      lead: 'Vos votants sont sur place, à distance, ou les deux. Chaque modalité a ses usages — et nous maîtrisons les trois.'
    })}
    <div class="grid grid--3">
      ${C.card({ icon: 'enLigne', title: 'Vote en ligne', text: 'Depuis un ordinateur, une tablette ou un smartphone, sans rien installer.', link: '/modes-de-vote/vote-en-ligne/', linkLabel: 'Le vote en ligne' })}
      ${C.card({ icon: 'boitier', title: 'Vote par boîtier', text: 'En salle, avec des résultats affichés dès la clôture de chaque vote.', link: '/modes-de-vote/vote-par-boitier/', linkLabel: 'Le vote par boîtier' })}
      ${C.card({ icon: 'hybride', title: 'Vote hybride', text: 'Deux publics, un seul scrutin, un quorum consolidé en temps réel.', link: '/modes-de-vote/vote-hybride/', linkLabel: 'Le vote hybride' })}
    </div>
  </div>
</section>
`
};

/* -------------------------------------------------------- /modes-de-vote/ */
const modes = {
  page: {
    url: '/modes-de-vote/', heroImage: 'hero-accueil',
    title: 'ProVote® ou boîtiers de vote : comment choisir | Mediavote',
    description: 'Vote en ligne ProVote® ou boîtiers de vote en salle, en présentiel, à distance ou en hybride : comparez les deux solutions et trouvez la vôtre en 4 questions.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Modes de vote', url: '/modes-de-vote/' }]
  },
  body: `
<section class="hero hero--page">
  ${C.heroPlate('hero-accueil', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Modes de vote</span>
      <h1 style="margin-top:var(--mv-space-4)">Choisissez le mode de vote adapté à votre organisation</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">
        La modalité adaptée dépend de la localisation de vos votants, du lieu de la séance et de votre
        calendrier. Voici les critères qui permettent de trancher.
      </p>
    </div>
  </div>
</section>

<section class="section" id="comparatif">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Comparatif',
      title: 'ProVote® ou boîtiers de vote : deux solutions, deux usages',
      lead: 'Les deux solutions sont opérées par la même équipe, avec le même accompagnement. Ce qui les distingue, c’est l’endroit où se trouvent vos votants.'
    })}
    ${C.compareTable()}
    <div class="split" style="margin-top:var(--mv-space-14);align-items:start">
      <div>
        <h3>Quelle solution pour quel vote&nbsp;?</h3>
        <p style="margin-top:var(--mv-space-4)">ProVote® couvre tous les types de scrutin. Les boîtiers de vote couvrent
        tous les scrutins en salle, à l’exception des élections CSE, qui se déroulent sur ProVote®.</p>
        <p style="margin-top:var(--mv-space-4)">Vous hésitez encore&nbsp;? <a href="#configurateur">Répondez à 4 questions</a>&nbsp;:
        nous vous indiquons la solution adaptée à votre scrutin.</p>
      </div>
      ${C.compatTable()}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Par modalité', title: 'Trois modalités, trois usages' })}
    <div class="table-scroll" tabindex="0" role="region" aria-label="Comparatif des trois modes de vote">
      <table>
        <caption class="visually-hidden">Comparaison du vote en ligne, du vote par boîtier et du vote hybride</caption>
        <thead>
          <tr><th scope="col">Critère</th><th scope="col">Vote en ligne</th><th scope="col">Vote par boîtier</th><th scope="col">Vote hybride</th></tr>
        </thead>
        <tbody>
          <tr><th scope="row">Où sont vos votants</th><td>Dispersés, ou chez eux</td><td>Réunis dans une salle</td><td>Une partie sur place, une partie à distance</td></tr>
          <tr><th scope="row">Durée du scrutin</th><td>En séance, ou sur plusieurs jours</td><td>En séance uniquement</td><td>En séance, avec une fenêtre possible à distance</td></tr>
          <tr><th scope="row">Matériel</th><td>Aucun — le terminal du votant suffit</td><td>Boîtiers fournis et remis à l’entrée</td><td>Boîtiers en salle, terminaux à distance</td></tr>
          <tr><th scope="row">Dépendance au réseau</th><td>Connexion Internet nécessaire</td><td>Fonctionne en salle sans que vos votants aient besoin de réseau</td><td>Réseau nécessaire pour le volet à distance</td></tr>
          <tr><th scope="row">Affichage des résultats</th><td>À la clôture de chaque vote</td><td>À l’écran, immédiatement en séance</td><td>Consolidé, à la clôture de chaque vote</td></tr>
          <tr><th scope="row">Effet sur la participation</th><td>Lève les obstacles de déplacement</td><td>Maximale parmi les présents</td><td>Additionne présents et empêchés</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

${C.configurateur({ headingLevel: 2 })}

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Aide au choix', title: 'Ce que nous vous conseillerions' })}
    ${C.numList([
      { title: 'Vos votants ne peuvent pas se déplacer', text: 'Le vote en ligne, ouvert sur plusieurs jours. C’est la configuration qui fait le plus progresser la participation.', link: '/modes-de-vote/vote-en-ligne/' },
      { title: 'Votre assemblée se tient en salle et vous voulez un vote immédiat', text: 'Le vote par boîtier. Chaque votant reçoit son boîtier à l’entrée, les résultats s’affichent dès la clôture.', link: '/modes-de-vote/vote-par-boitier/' },
      { title: 'Une partie de vos membres ne peut pas venir, mais vous tenez à réunir les autres', text: 'Le vote hybride. Les deux publics votent ensemble, avec un quorum consolidé et un résultat unique.', link: '/modes-de-vote/vote-hybride/' }
    ])}
  </div>
</section>

<section class="section section--overlap">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Précision utile', title: 'Le mode de vote n’est pas le sujet principal' })}
    <p class="lead">
      C’est votre <strong>type de scrutin</strong> qui commande le paramétrage : quorum, pouvoirs,
      collèges, majorités, confidentialité. La modalité ne fait que déterminer par quel canal
      s’exprime le vote.
    </p>
    <p style="margin-top:var(--mv-space-6)">
      Si vous n’avez pas encore identifié votre besoin, commencez par
      <a href="/solutions/">nos solutions par type de scrutin</a>.
    </p>
  </div>
</section>
`
};

/* ------------------------------------------------------------- /secteurs/ */
const secteurs = {
  page: {
    url: '/secteurs/', heroImage: 'hero-assemblee',
    title: 'Solutions de vote par type d’organisation | Mediavote',
    description: 'Associations et fédérations, entreprises et mutuelles, organismes publics : chaque statut impose ses règles de vote. Découvrez notre approche par secteur.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Secteurs d’activité', url: '/secteurs/' }]
  },
  body: `
<section class="hero hero--page">
  ${C.heroPlate('hero-assemblee', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container container--narrow" style="padding-inline:0">
      <span class="eyebrow">Secteurs</span>
      <h1 style="margin-top:var(--mv-space-4)">Le vote électronique adapté à votre type d’organisation</h1>
      <p class="lead" style="margin-top:var(--mv-space-5)">
        Les règles qui encadrent un vote ne viennent pas de la technologie : elles viennent de vos
        textes. Statuts d’association, règlement intérieur, code du travail, textes fondateurs d’un
        établissement public — c’est de là que part le paramétrage.
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--3">
      ${C.card({ icon: 'associations', title: 'Associations et fédérations',
        text: 'Adhérents dispersés, pouvoirs nombreux, collèges d’adhérents, quorum difficile à atteindre. L’enjeu est souvent la participation.',
        link: '/secteurs/associations-federations/', linkLabel: 'Associations et fédérations' })}
      ${C.card({ icon: 'entreprises', title: 'Entreprises et mutuelles',
        text: 'Élections CSE, conseils d’administration, assemblées de sociétaires, pondération des voix. L’enjeu est la conformité et la traçabilité.',
        link: '/secteurs/entreprises-mutuelles/', linkLabel: 'Entreprises et mutuelles' })}
      ${C.card({ icon: 'publics', title: 'Organismes publics',
        text: 'Instances délibératives, commissions, consultations. L’enjeu est la continuité du service et l’accessibilité à tous les participants.',
        link: '/secteurs/organismes-publics/', linkLabel: 'Organismes publics' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Notre méthode', title: 'Nous partons de vos textes, pas d’un modèle standard' })}
    <p class="lead">
      Lors de la réunion de lancement, votre chef de projet examine avec vous les dispositions qui
      encadrent votre scrutin : ce que prévoient vos statuts sur le quorum, sur les pouvoirs et leur
      limitation, sur les majorités, sur le caractère secret ou nominatif du vote.
    </p>
    <p style="margin-top:var(--mv-space-5)">
      C’est ce travail préalable qui évite les contestations. Une plateforme mal paramétrée produit
      un résultat juste techniquement et faux statutairement.
    </p>
    <p style="margin-top:var(--mv-space-6)">
      <a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Le détail de notre accompagnement</a>
    </p>
  </div>
</section>
`
};

module.exports = [solutions, modes, secteurs];
