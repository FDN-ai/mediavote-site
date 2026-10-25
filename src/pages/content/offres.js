/* ==========================================================================
   Pages produit et offre — ProVote®, Fonctionnalités, Licence, Accompagnement
   Règle : ces pages ciblent le MODÈLE D'ACHAT et le PRODUIT, jamais un type
   de scrutin. Aucun tarif publié (décision D4).
   ========================================================================== */

const C = require('../../components');

/* Visuel du hero : un écran ProVote® réel (données de démonstration),
   détouré, posé sur le fond sombre. Chargé sans priorité : c'est le titre
   et la plaque de fond qui constituent le premier affichage. */
const HERO_VISUALS = {
  'provote-mobile': 'ProVote® sur smartphone : écran de vote d’une résolution avec les choix Pour, Contre et Abstention',
  'provote-tablette': 'ProVote® sur tablette : vote d’une résolution avec application du choix aux pouvoirs reçus'
};

const hero = ({ eyebrow, h1, lead, cta, ctaUrl = '/demonstration/', img = 'hero-accueil', visual = 'provote-mobile' }) => `
<section class="hero hero--page">
  ${C.heroPlate(img, { eager: true })}
  <div class="hero__title-wrap">
    <div class="container hero__inner" style="padding-inline:0">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h1 style="margin-top:var(--mv-space-4)">${h1}</h1>
        <p class="lead" style="margin-top:var(--mv-space-5)">${lead}</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="${ctaUrl}">${cta}${C.icons.arrow}</a>
          <a class="btn btn--secondary" href="/contact/">Parler de votre projet</a>
        </div>
      </div>
      <div class="hero__visual">${C.picture(visual, { alt: HERO_VISUALS[visual], sizes: '(min-width: 1024px) 26vw, 60vw', lazy: false })}</div>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------------- /provote/ */
const provoteFaq = [
  { q: 'ProVote® est-il une société distincte de Mediavote ?', a: 'Non. Mediavote est la société ; ProVote® est la plateforme de vote électronique qu’elle développe et exploite. Vous contractez avec Mediavote, et l’équipe qui vous accompagne est celle qui connaît la plateforme.' },
  { q: 'Faut-il installer un logiciel ?', a: 'Non. ProVote® est une application web : vos votants comme vos administrateurs y accèdent depuis un navigateur, sur ordinateur, tablette ou smartphone. Il n’y a rien à télécharger, rien à mettre à jour, et les évolutions sont disponibles sans intervention de votre part.' },
  { q: 'La plateforme s’adapte-t-elle vraiment à nos statuts ?', a: 'C’est son principe de conception. Quorum, pouvoirs et leur limitation, collèges, pondération des voix, majorités, exclusions ponctuelles : ce sont des paramètres, pas des contraintes. Votre chef de projet les règle à partir de vos textes.' },
  { q: 'Peut-on suivre le scrutin sans pouvoir le modifier ?', a: 'Oui : c’est l’accès Pilotage. En lecture seule, multi-utilisateur, il permet à vos scrutateurs, à un huissier ou à un avocat de suivre l’émargement, le quorum et les résultats sans aucun risque d’erreur de manipulation.' },
  { q: 'Que devient l’accès après le scrutin ?', a: 'L’accès Pilotage reste ouvert à l’issue de la session. Vous pouvez y consulter et télécharger à nouveau les rapports d’émargement et les procès-verbaux.' }
];

const provote = {
  page: {
    url: '/provote/', heroImage: 'hero-vote',
    title: 'ProVote®, la plateforme de vote de Mediavote | Mediavote',
    description: 'ProVote® gère résolutions, élections, émargement, quorum et pouvoirs selon les statuts de votre organisation. Accessible sans téléchargement, sur tout terminal.',
    priority: 'P0',
    schema: ['SoftwareApplication', 'FAQPage', 'BreadcrumbList'],
    faqItems: provoteFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'ProVote®', url: '/provote/' }]
  },
  body: `
${hero({
  img: 'hero-vote',
  eyebrow: 'Notre plateforme',
  h1: 'ProVote®, la plateforme qui s’adapte à vos règles',
  lead: 'ProVote® est la plateforme de vote électronique développée et exploitée par Mediavote. Elle ne vous impose pas un fonctionnement : elle se paramètre à partir de vos statuts.',
  cta: 'Découvrir ProVote® en démonstration'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Principes', title: 'Quatre partis pris de conception' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'enLigne', title: 'Rien à installer', text: 'Une application web. Vos votants ouvrent un lien, depuis le terminal qu’ils ont sous la main. Aucune mise à jour à leur charge.' })}
      ${C.card({ icon: 'competence', title: 'Vos règles, pas un modèle', text: 'Quorum, pouvoirs, collèges, majorités, pondération : ce sont des paramètres. Votre chef de projet les règle à partir de vos textes.' })}
      ${C.card({ icon: 'urnes', title: 'Le secret par construction', text: 'Urne d’émargement et urne des bulletins séparées, clés de dépouillement fragmentées, journaux d’audit horodatés.' })}
      ${C.card({ icon: 'journaux', title: 'Des documents opposables', text: 'Procès-verbaux et rapports d’émargement en PDF et en Excel. La trace de votre scrutin, disponible immédiatement.' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Accès Pilotage', title: 'Faire suivre le scrutin sans risque d’erreur' })}
        <p>
          L’accès Pilotage est un accès <strong>en lecture seule</strong>, multi-utilisateur, que vous
          partagez avec vos scrutateurs, votre huissier ou votre avocat.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Il permet de suivre l’émargement, le quorum et les votes avant, pendant et après la séance,
          et de télécharger à tout moment la liste d’émargement et les résultats. Comme rien n’y est
          modifiable, aucune erreur de manipulation n’est possible.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Il vous est remis à J-5, en même temps que la session de test.
        </p>
      </div>
      <div>${C.shot('pilotage-tableau-de-bord', { alt: 'Accès Pilotage ProVote® sur un écran d’ordinateur : rapport d’émargement avec quorum atteint et rapport de vote d’une résolution adoptée', caption: 'L’accès Pilotage : émargement, quorum et résultats en lecture seule. Données de démonstration.' })}</div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">En vidéo</span>
        <h2 style="margin-top:var(--mv-space-4)">ProVote® en assemblée générale</h2>
        <p class="lead" style="margin-top:var(--mv-space-5)">Vos votes, adaptés à tous vos écrans&nbsp;: voyez comment vos membres votent sur ProVote®.</p>
        <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/demonstration/">Voir ProVote® sur votre propre scrutin</a></p>
      </div>
      ${C.video('provote')}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Deux façons de l’utiliser', title: 'Accompagné, ou en autonomie', lead: 'La plateforme est la même. C’est le modèle de travail qui change.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Avec un chef de projet',
        text: 'Mediavote paramètre, teste et pilote votre scrutin. Vous vous concentrez sur le fond de vos délibérations.',
        meta: 'Pour une à trois sessions par an, ou des statuts complexes.',
        link: '/offres/accompagnement-sur-mesure/', linkLabel: 'L’accompagnement sur mesure' })}
      ${C.card({ title: 'En licence annuelle',
        text: 'Vous créez et pilotez vos sessions vous-même, avec la formation de vos équipes et notre assistance technique.',
        meta: 'Pour plusieurs scrutins par an.',
        link: '/offres/licence-annuelle-provote/', linkLabel: 'La licence annuelle' })}
    </div>
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/provote/fonctionnalites/">Voir le détail des fonctionnalités</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur ProVote®' })}
    ${C.faq(provoteFaq, 'provote-faq')}
  </div>
</section>
`
};

/* --------------------------------------------- /provote/fonctionnalites/ */
const fonctionnalites = {
  page: {
    url: '/provote/fonctionnalites/', heroImage: 'hero-vote',
    title: 'Fonctionnalités de ProVote® : quorum, pouvoirs, émargement',
    description: 'Résolutions, élections, émargement avec signature, calcul du quorum, pouvoirs, collèges, pondération et exports : le détail des fonctionnalités de ProVote®.',
    priority: 'P1',
    schema: ['BreadcrumbList'],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'ProVote®', url: '/provote/' }, { label: 'Fonctionnalités', url: '/provote/fonctionnalites/' }]
  },
  body: `
${hero({
  visual: 'provote-tablette',
  img: 'hero-vote',
  eyebrow: 'Fonctionnalités',
  h1: 'Toutes les fonctionnalités nécessaires à votre scrutin',
  lead: 'Le détail de ce que ProVote® sait faire. Toutes ces fonctionnalités sont des options que vous activez selon vos besoins — aucune ne génère de surcoût.',
  cta: 'Voir les fonctionnalités en action'
})}

${C.prodNote(`<p><strong>Vérification fonctionnelle requise avant publication (réf. V6.1).</strong>
L’ensemble de cette page provient des plaquettes AG et CSE, qui datent. Chaque fonctionnalité doit
être vérifiée en démonstration sur la version en production de ProVote®.</p>`)}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Votes', title: 'Résolutions et motions' })}
    <div class="grid grid--2">
      <div>
        <h3>Paramétrage du vote</h3>
        <ul style="line-height:1.7">
          <li>Libellés des choix personnalisables au-delà de « Pour, Contre, Abstention »</li>
          <li>Quatrième option pour les votants qui ne prennent pas part au vote</li>
          <li>Vote anonyme ou nominatif, choisi vote par vote</li>
          <li>Vote par collèges</li>
          <li>Exclusion de participants sur des votes précis, identifiés en amont</li>
        </ul>
      </div>
      <div>
        <h3>Calcul du résultat</h3>
        <ul style="line-height:1.7">
          <li>Majorité simple, absolue ou qualifiée</li>
          <li>Base de calcul au choix : tous les votants, tous les participants, ou les seuls « pour » et « contre »</li>
          <li>Résolution acceptée ou rejetée calculée automatiquement</li>
          <li>Ajout ou retrait d’un vote en cours de séance</li>
          <li>Affichage graphique des résultats, ou résultat chiffré seul</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Élections', title: 'Tous les types de scrutins' })}
    <div class="grid grid--3">
      ${C.card({ title: 'Scrutin uninominal', text: 'À un tour ou à deux tours, avec majorité absolue, qualifiée ou relative selon votre paramétrage.' })}
      ${C.card({ title: 'Scrutin plurinominal', text: 'Plusieurs sièges à pourvoir, avec le nombre de voix par électeur que vous définissez.' })}
      ${C.card({ title: 'Scrutin de liste', text: 'Vote par liste ou vote par candidat avec possibilité de raturer. Candidature hors liste possible, y compris déclarée en séance.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Émargement', title: 'Une feuille de présence qui se construit seule' })}
    <div class="grid grid--2">
      <div>
        <h3>Modalités</h3>
        <ul style="line-height:1.7">
          <li>Émargement simple, d’un clic</li>
          <li>Émargement avec <strong>signature électronique</strong>, tracée au doigt ou à la souris</li>
          <li>Émargement par case à cocher</li>
          <li>Émargements multiples quand la séance comporte plusieurs assemblées successives</li>
          <li>Signalement de sortie de séance</li>
          <li>En présentiel sur tablette, ou à distance</li>
        </ul>
      </div>
      <div>
        <h3>Restitution</h3>
        <ul style="line-height:1.7">
          <li>Rapport téléchargeable à tout moment, en PDF et en Excel</li>
          <li>Identité, signature, date et heure d’émargement</li>
          <li>Statut : présent, attendu, ou pouvoir délégué</li>
          <li>Poids du vote dans l’export Excel</li>
          <li>Signature du mandataire dupliquée sur la ligne du mandant, pour rendre la chaîne de représentation lisible</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Votants et pouvoirs', title: 'Les règles de représentation, appliquées automatiquement', lead: 'C’est le point où les outils génériques atteignent leur limite.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Pouvoirs et procurations', text: 'Délégation en amont ou en cours de séance. **Limitation du nombre de pouvoirs** par votant si vos statuts la prévoient : les pouvoirs excédentaires sont refusés automatiquement. Pouvoirs applicables à tous les votes ou à certains seulement.' })}
      ${C.card({ title: 'Titulaires et suppléants', text: 'Inscription de l’ensemble des titulaires et des suppléants. Lorsque vos statuts prévoient qu’un titulaire ne peut déléguer qu’à son suppléant désigné, la contrainte est appliquée.' })}
      ${C.card({ title: 'Quorum', text: 'Calcul automatisé en temps réel, en nombre de suffrages ou en pourcentage. Affiché ou masqué aux participants, selon votre choix. Plusieurs quorums simultanés si la séance comporte une AGO et une AGE.' })}
      ${C.card({ title: 'Pondération des voix', text: 'Parts sociales, nombre d’adhérents représentés, collèges de poids différents : le poids de chaque votant est intégré au paramétrage et appliqué au calcul.' })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Documents et restitution', title: 'Ce que vous récupérez' })}
    <div class="grid grid--3">
      ${C.card({ icon: 'journaux', title: 'Procès-verbaux', text: 'Le PV des résultats en PDF, disponible dès la clôture de la séance.' })}
      ${C.card({ icon: 'consultation', title: 'Export détaillé', text: 'Un fichier Excel avec un onglet par nature de résultat : résultats globaux, votes nominatifs et votes anonymes présentés séparément.' })}
      ${C.card({ icon: 'cse', title: 'Espace documents', text: 'Un espace de stockage où vos participants consultent à tout moment les pièces associées à la séance — tous formats acceptés.' })}
    </div>
    <p style="margin-top:var(--mv-space-8)">
      Mediavote peut développer des besoins spécifiques qui ne figurent pas dans cette liste.
      <a href="/contact/">Décrivez-nous votre cas</a>.
    </p>
  </div>
</section>
`
};

/* ------------------------------ /offres/licence-annuelle-provote/ */
const licenceFaq = [
  { q: 'À partir de combien de scrutins la licence devient-elle pertinente ?', a: 'En pratique, au-delà de quatre assemblées générales ou de huit conseils par an. En dessous, une prestation ponctuelle reste généralement plus simple. Nous vous le disons honnêtement lors de la démonstration, y compris si la prestation vous convient mieux.' },
  { q: 'Faut-il des compétences techniques pour piloter la plateforme ?', a: 'Non. ProVote® est conçu pour être utilisé par un secrétariat ou un service administratif, sans compétence informatique particulière. La formation initiale de vos équipes est prévue dans le dispositif.' },
  { q: 'Que se passe-t-il si nous bloquons sur un paramétrage ?', a: 'L’assistance technique Mediavote reste disponible pendant toute la durée de la licence. Sur un scrutin particulièrement sensible, vous pouvez aussi demander ponctuellement l’accompagnement d’un chef de projet.' },
  { q: 'Combien d’utilisateurs peuvent être formés ?', a: 'La formation couvre plusieurs utilisateurs par session, ce qui permet de ne pas dépendre d’une seule personne dans votre organisation. Le nombre exact et les modalités sont précisés lors de l’échange.' },
  { q: 'Quels sont les tarifs ?', a: 'Ils dépendent du nombre de votants et du niveau retenu. Nous ne les publions pas parce qu’ils se construisent avec vous, à partir de votre volumétrie réelle et de votre fréquence de scrutins. Demandez une démonstration : vous repartez avec une proposition chiffrée.' }
];

const licence = {
  page: {
    url: '/offres/licence-annuelle-provote/', heroImage: 'hero-accueil',
    title: 'Licence annuelle ProVote® : vos scrutins en autonomie',
    description: 'Plusieurs AG, CA ou consultations par an ? La licence annuelle ProVote® vous rend autonome, avec formation et assistance technique incluses.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Licence annuelle ProVote®' },
    faqItems: licenceFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'ProVote®', url: '/provote/' }, { label: 'Licence annuelle', url: '/offres/licence-annuelle-provote/' }]
  },
  body: `
${hero({
  img: 'hero-accueil',
  eyebrow: 'Licence annuelle',
  h1: 'La licence ProVote® pour organiser vos scrutins en autonomie',
  lead: 'Si vous organisez plusieurs assemblées, conseils ou consultations dans l’année, il devient plus simple — et plus économique — de piloter vos sessions vous-même.',
  cta: 'Demander une démonstration de la licence'
})}

<section class="section">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Éligibilité', title: 'Cette offre est faite pour vous si…' })}
    <ul style="font-size:var(--mv-text-lg);line-height:1.8">
      <li>Vous tenez <strong>plus de quatre assemblées générales</strong> par an</li>
      <li>Vous réunissez <strong>plus de huit conseils d’administration</strong> par an</li>
      <li>Vous comptez <strong>plus de deux cents votants</strong></li>
      <li>Vos votants sont répartis sur <strong>plusieurs sites géographiques</strong></li>
      <li>Vous souhaitez <strong>rationaliser le budget</strong> de vos réunions plénières</li>
    </ul>
    <p style="margin-top:var(--mv-space-6)">
      Si aucun de ces critères ne vous correspond, une prestation ponctuelle sera probablement plus
      adaptée — et nous vous le dirons.
      <a href="/offres/accompagnement-sur-mesure/">Voir l’accompagnement sur mesure</a>.
    </p>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Contenu', title: 'Ce que comprend la licence' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'consultation', title: 'Sessions de vote illimitées', text: 'Organisez autant de scrutins que nécessaire dans l’année, sans repasser par une prestation à chaque fois.' })}
      ${C.card({ icon: 'competence', title: 'Compte administrateur', text: 'Vous créez et paramétrez vos sessions vous-même, depuis une interface conçue pour un usage administratif, sans compétence technique.' })}
      ${C.card({ icon: 'assemblee', title: 'Formation de vos équipes', text: 'Vos utilisateurs sont formés au démarrage, pour que votre organisation ne dépende pas d’une seule personne.' })}
      ${C.card({ icon: 'canaux', title: 'Assistance technique', text: 'L’équipe Mediavote reste joignable pendant toute la durée de la licence, pour vos questions de paramétrage comme pour vos scrutins.' })}
    </div>
  </div>
</section>

${C.prodNote(`<p><strong>Formation : incluse ou facturée ? (Q-B9, réf. V6.5).</strong>
La fiche commerciale annonce la formation comme un élément inclus, puis mentionne un coût unique en
bas de grille tarifaire. La plaquette AG parle de 1,5 jour, le site actuel de 4 heures.
Formulation prudente retenue ci-dessus. À trancher avant publication.</p>`)}

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Trois niveaux', title: 'Un périmètre fonctionnel qui suit vos besoins', lead: 'La licence existe en trois niveaux. Ils se distinguent par les fonctionnalités activées, pas par la qualité du service.' })}
    <div class="table-scroll" tabindex="0" role="region" aria-label="Comparatif des trois niveaux de licence">
      <table>
        <caption class="visually-hidden">Fonctionnalités incluses selon le niveau de licence</caption>
        <thead><tr><th scope="col">Fonctionnalité</th><th scope="col">Essentielle</th><th scope="col">Avancée</th><th scope="col">Premium</th></tr></thead>
        <tbody>
          <tr><th scope="row">Vote sur résolutions</th><td>Inclus</td><td>Inclus</td><td>Inclus</td></tr>
          <tr><th scope="row">Élections</th><td>Inclus</td><td>Inclus</td><td>Inclus</td></tr>
          <tr><th scope="row">Délégation de pouvoir</th><td>—</td><td>Inclus</td><td>Inclus</td></tr>
          <tr><th scope="row">Émargement</th><td>—</td><td>Inclus</td><td>Inclus</td></tr>
          <tr><th scope="row">Espace documents</th><td>—</td><td>—</td><td>Inclus</td></tr>
          <tr><th scope="row">Assistance administrateur</th><td>—</td><td>—</td><td>Inclus</td></tr>
        </tbody>
      </table>
    </div>
    <p style="margin-top:var(--mv-space-6)">
      <strong>Nous ne publions pas nos tarifs.</strong> Ils dépendent de votre volumétrie de votants
      et du niveau retenu, et se construisent lors de l’échange. Vous repartez de la démonstration
      avec une proposition chiffrée.
    </p>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Comparaison honnête', title: 'Licence ou accompagnement : comment trancher', lead: 'C’est la question la plus fréquente. La réponse dépend surtout de votre fréquence de scrutins.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Prenez la licence si…',
        text: 'Vous votez souvent, vos scrutins se ressemblent d’une fois sur l’autre, et vous avez une personne disponible pour piloter les sessions. Vous gagnez en réactivité et en budget.',
        link: '/demonstration/', linkLabel: 'Voir la licence en démonstration' })}
      ${C.card({ title: 'Prenez l’accompagnement si…',
        text: 'Vous votez une à trois fois par an, vos statuts sont complexes, ou l’enjeu de ce scrutin est important. Un chef de projet prépare, teste et pilote pour vous.',
        link: '/offres/accompagnement-sur-mesure/', linkLabel: 'Voir l’accompagnement' })}
    </div>
    <p style="margin-top:var(--mv-space-8)">
      Les deux ne s’excluent pas : des organisations sous licence demandent ponctuellement
      l’accompagnement d’un chef de projet sur leur assemblée générale annuelle.
    </p>
  </div>
</section>

<section class="section section--blue">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">L’autre voie vers l’autonomie</span>
        <h2 style="margin-top:var(--mv-space-4)">Vous votez en salle&nbsp;? Acquérez vos boîtiers de vote</h2>
        <p class="lead" style="margin-top:var(--mv-space-5)">La licence rend autonome sur ProVote®. Pour les votes en présentiel, Mediavote propose l’achat de boîtiers de vote avec récepteurs, logiciel et formation-action de 3&nbsp;h&nbsp;30.</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)"><a class="btn btn--xl btn--primary" href="/offres/achat-boitiers-de-vote/">L’achat de boîtiers de vote${C.icons.arrow}</a></div>
      </div>
      <figure class="product-shot">${C.picture('emargement-boitier-tablette', { alt: 'Remise d’un boîtier de vote à un participant qui signe la feuille d’émargement sur tablette', sizes: '(min-width: 1024px) 40vw, 90vw' })}</figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur la licence' })}
    ${C.faq(licenceFaq, 'licence-faq')}
  </div>
</section>
`
};

/* --------------------------- /offres/accompagnement-sur-mesure/ */
const accFaq = [
  { q: 'Le chef de projet est-il présent le jour du scrutin ?', a: 'Pour une séance en temps réel, oui — en visioconférence ou sur place selon votre configuration. Il ouvre et ferme chaque vote au rythme du président de séance et gère les aléas. Pour un scrutin asynchrone, il reste joignable pendant toute la durée d’ouverture.' },
  { q: 'Qui peut participer au test de J-5 ?', a: 'Les personnes de votre choix, jusqu’à une vingtaine. En pratique, on y associe le président de séance, le secrétaire, les scrutateurs, et quelques votants représentatifs des profils que vous aurez le jour J.' },
  { q: 'Que contient le kit de gestion de projet ?', a: 'Quatre documents partagés avec vous : le brief qui centralise les informations de la session, la matrice des votants présents et représentés, la matrice des votes avec leur paramétrage, et le rétroplanning. Ils servent de référence commune tout au long du projet.' },
  { q: 'Peut-on organiser un scrutin en moins d’un mois ?', a: 'Oui. Les jalons J-30 à J0 décrivent un projet confortable, pas un minimum incompressible. Mediavote gère les urgences — dites-nous votre échéance, nous vous dirons ce qui est réalisable et ce qui devra être simplifié.' },
  { q: 'Le chef de projet connaît-il les règles applicables à notre organisation ?', a: 'Il a une double compétence : les outils numériques et les règles qui encadrent les assemblées générales, les conseils et les différents statuts. Il vous conseille sur le paramétrage plutôt que d’appliquer sans discuter ce que vous demandez. Il ne se substitue pas à votre conseil juridique.' }
];

const accompagnement = {
  page: {
    url: '/offres/accompagnement-sur-mesure/', heroImage: 'hero-accompagnement',
    title: 'Accompagnement de vos scrutins par un chef de projet | Mediavote',
    description: 'Réunion de lancement, paramétrage, test en conditions réelles, présence le jour J : Mediavote pilote votre scrutin de J-30 à la restitution des résultats.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Accompagnement de scrutin sur mesure' },
    faqItems: accFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'ProVote®', url: '/provote/' }, { label: 'Accompagnement sur mesure', url: '/offres/accompagnement-sur-mesure/' }]
  },
  body: `
${hero({
  img: 'hero-accompagnement',
  eyebrow: 'Accompagnement',
  h1: 'Un chef de projet dédié, de la préparation aux résultats',
  lead: 'La technologie sécurise le vote. L’équipe Mediavote sécurise le projet. Un interlocuteur unique prépare, paramètre, teste et pilote votre scrutin — et reste joignable jusqu’à la proclamation des résultats.',
  cta: 'Confier mon scrutin à Mediavote'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Notre méthode', title: 'Votre scrutin est répété avant d’être joué', lead: 'Nous ne découvrons pas votre assemblée le jour J. Voici les quatre jalons, et ce que vous recevez à chacun.' })}
    ${C.timeline([
      { step: 'J-30', title: 'Réunion de lancement', text: 'Visioconférence avec votre chef de projet, accompagnée d’une démonstration adaptée à votre cas. Nous formalisons vos besoins et fixons ensemble les dates du rétroplanning.', deliverable: 'le kit de gestion de projet — brief, matrice des votants, matrice des votes, rétroplanning.' },
      { step: 'J-15', title: 'Paramétrage', text: 'À partir de vos matrices, votre chef de projet crée la session : libellés des votes, règles de majorité, gestion des pouvoirs, collèges, quorum, interfaces des votants.', deliverable: 'le mode d’emploi destiné à vos votants.' },
      { step: 'J-5', title: 'Test en conditions réelles', text: 'Vous testez la session avec les personnes de votre choix, jusqu’à vingt. Vous voyez exactement ce que verront vos votants et vérifiez que le paramétrage correspond à vos statuts.', deliverable: 'votre accès Pilotage, en lecture seule, partageable avec vos scrutateurs.' },
      { step: 'Jour J', title: 'Émargement, votes et résultats', text: 'Ouverture du scrutin, suivi du quorum et de la participation en direct, assistance technique pour vos votants, gestion des aléas en séance.', deliverable: 'les rapports d’émargement et les procès-verbaux, en PDF et en Excel.' }
    ])}
    <p class="timeline__note">
      Ces délais sont ceux d’un projet confortable. Nous savons aussi travailler dans l’urgence :
      <a href="/contact/">parlez-nous de votre échéance</a>.
    </p>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Ce qui fait la différence', title: 'Quatre choses que la technologie ne fait pas à notre place' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'interlocuteur', title: 'Un interlocuteur unique', text: 'Vous avez les coordonnées directes de votre chef de projet. Vous ne rappelez pas un standard, et vous ne réexpliquez pas votre dossier à chaque échange.' })}
      ${C.card({ icon: 'competence', title: 'Une double compétence', text: 'Il connaît les outils numériques **et** les règles qui encadrent les assemblées : statuts, quorum, majorités, pouvoirs. Il vous conseille sur le paramétrage.' })}
      ${C.card({ icon: 'test', title: 'Un test systématique', text: 'À J-5, dans les conditions réelles. C’est là que se révèlent les écarts — un libellé ambigu, une majorité mal comprise, un collège oublié.' })}
      ${C.card({ icon: 'assemblee', title: 'Une présence en séance', text: 'Un pouvoir de dernière minute, un libellé à corriger, une candidature déclarée en séance : quelqu’un est là pour le gérer sans interrompre l’assemblée.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Le kit de gestion de projet', title: 'Quatre documents, une référence commune' })}
        <p>Le kit est présenté lors de la réunion de lancement et complété avec vous. Il a un double objectif : faciliter la transmission des informations, et partager des documents uniques plutôt que des versions divergentes.</p>
        <ul style="line-height:1.7;margin-top:var(--mv-space-5)">
          <li><strong>Le brief</strong> — centralise les informations de votre session : dates, heures, quorum, fonctionnalités retenues</li>
          <li><strong>La matrice des votants</strong> — présents et représentés, avec leurs poids et leurs pouvoirs</li>
          <li><strong>La matrice des votes</strong> — chaque résolution ou élection avec son paramétrage : majorité absolue, renforcée, base de calcul</li>
          <li><strong>Le rétroplanning</strong> — les dates butoir, définies avec vous et formalisées</li>
        </ul>
      </div>
      <div><figure class="product-shot product-shot--flush product-shot--tall">${C.picture('hero-accompagnement-scene', { alt: 'Salle de réunion préparée pour une assemblée', sizes: '(min-width: 1024px) 44vw, 92vw' })}</figure></div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Le jour J', title: 'Ce qui se passe quand un imprévu survient', lead: 'C’est là que se juge un prestataire de vote électronique.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'En séance, en temps réel', text: 'Votre chef de projet est présent — en visioconférence ou sur place. Chaque vote est ouvert et fermé à la demande du président. Il gère les pouvoirs de dernière minute, les modifications de libellé, les candidatures déclarées en séance.' })}
      ${C.card({ title: 'Sur un scrutin ouvert plusieurs jours', text: 'Une assistance technique répond à vos votants par téléphone et par e-mail. La liste d’émargement est téléchargeable à tout moment depuis votre accès Pilotage, et vous suivez la participation en direct.' })}
    </div>
  </div>
</section>

${C.prodNote(`<p><strong>Périmètre de la présence physique à préciser (réf. V6.9).</strong>
La plaquette AG mentionne une « présence physique pour AG synchrone » dans le pack Prestation,
sans préciser si elle est systématique ou sur demande, ni son périmètre géographique.
Formulation prudente retenue : « en visioconférence ou sur place ».</p>`)}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur l’accompagnement' })}
    ${C.faq(accFaq, 'acc-faq')}
  </div>
</section>
`
};


/* -------------------------------------- /offres/achat-boitiers-de-vote/
   Texte fourni par Mediavote (débrief du 09/10/2026, partie 02), retravaillé.
   Pas de vente en ligne : la page conduit à une demande de devis.           */
const achatFaq = [
  { q: 'Combien de boîtiers et de récepteurs faut-il prévoir ?', a: 'Le nombre de boîtiers correspond à votre capacité d’accueil, et le nombre de récepteurs à la configuration de vos salles — portée courte ou longue selon leurs dimensions. Nous dimensionnons l’ensemble avec vous à partir de vos lieux de réunion et de vos effectifs.' },
  { q: 'Le logiciel de vote est-il limité à un poste ?', a: 'Non. Le logiciel s’installe sur autant de postes informatiques que nécessaire, sans surcoût.' },
  { q: 'En quoi consiste la formation-action ?', a: 'Une session pratique de 3 h 30 au cours de laquelle vous réalisez vous-même les opérations d’une session de vote — paramétrage, import des votants, création des résolutions, connexion des boîtiers, pilotage des scrutins, édition des rapports — accompagné par un formateur Mediavote. Un support de formation vous est remis.' },
  { q: 'Sommes-nous seuls après l’achat ?', a: 'Non. Nos équipes vous accompagnent lors de votre première session, et une assistance technique reste disponible en cas de besoin. Vous pouvez également solliciter Mediavote en prestation pour un scrutin particulier.' }
];

const achat = {
  page: {
    url: '/offres/achat-boitiers-de-vote/', heroImage: 'hero-assemblee',
    title: 'Achat de boîtiers de vote avec formation | Mediavote',
    description: 'Boîtiers de vote électronique, récepteurs, logiciel et formation-action de 3 h 30 : organisez vos assemblées et élections en salle en toute autonomie.',
    priority: 'P1',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Achat de boîtiers de vote électronique avec formation' },
    faqItems: achatFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Vote par boîtier', url: '/modes-de-vote/vote-par-boitier/' }, { label: 'Achat de boîtiers de vote', url: '/offres/achat-boitiers-de-vote/' }]
  },
  body: `
${hero({
  img: 'hero-assemblee', visual: 'emargement-boitier-tablette',
  eyebrow: 'Achat de boîtiers de vote',
  h1: 'Achat de boîtiers de vote&nbsp;: devenez autonome dans l’organisation de vos votes',
  lead: 'Maîtrisez votre budget, simplifiez l’organisation de vos scrutins et gagnez en autonomie. Boîtiers, récepteurs, logiciel de vote et formation pratique&nbsp;: une solution complète pour préparer, organiser et gérer vos sessions de vote vous-même.',
  cta: 'Demander un devis', ctaUrl: '/contact/'
})}

<section class="section">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Pour qui', title: 'Vous organisez régulièrement des votes en salle&nbsp;?' })}
    <p class="lead">Assemblées générales, élections ou consultations nécessitant des boîtiers de vote électronique&nbsp;: Mediavote vous propose une solution complète d’acquisition de boîtiers de vote, associée à un logiciel de vote et à une formation pratique, pour préparer, organiser et gérer vos sessions de vote en toute autonomie.</p>
    <p style="margin-top:var(--mv-space-5)"><strong>Un investissement durable</strong> pour rationaliser vos coûts et vous affranchir des prestations récurrentes.</p>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Une solution complète', title: 'Ce que comprend notre offre', lead: 'Adaptée à vos effectifs, à vos salles et à la fréquence de vos sessions.' })}
    <ul class="param-list">
      <li><strong>Boîtiers de vote électronique</strong><span>Le nombre de boîtiers de votre choix, selon votre capacité d’accueil et vos besoins</span></li>
      <li><strong>Récepteurs de vote</strong><span>Le nombre de récepteurs souhaité, avec une portée courte ou longue selon la configuration de vos espaces</span></li>
      <li><strong>Logiciel de vote</strong><span>Installation sur autant de postes informatiques que nécessaire, sans surcoût</span></li>
      <li><strong>Formation-action de 3&nbsp;h&nbsp;30</strong><span>Une formation pratique pour apprendre à préparer, paramétrer et piloter vos sessions de vote</span></li>
      <li><strong>Support de formation</strong><span>Une documentation pour vous accompagner dans l’utilisation de votre solution</span></li>
      <li><strong>Accompagnement de votre première session</strong><span>L’assistance de nos équipes pour sécuriser votre prise en main</span></li>
      <li><strong>Assistance technique</strong><span>Un interlocuteur disponible en cas de besoin</span></li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div>
        ${C.sectionHead({ eyebrow: 'La formation-action', title: 'Apprendre en pratiquant', lead: 'Notre objectif&nbsp;: vous rendre véritablement autonome dès vos premières sessions de vote.' })}
        <p>Contrairement à une formation uniquement théorique, la formation-action repose sur une méthode concrète&nbsp;: vous apprenez à utiliser votre solution de vote en réalisant vous-même les opérations essentielles, accompagné par un formateur Mediavote.</p>
        <h3 style="font-size:var(--mv-text-h4);margin-top:var(--mv-space-6)">Pendant 3&nbsp;h&nbsp;30, vous mettez en pratique chaque étape d’une session de vote</h3>
        <ul class="checklist" style="margin-top:var(--mv-space-4)">
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Préparer et paramétrer une session de vote</li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Importer les votants et configurer les droits de vote</li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Créer les résolutions, élections et questions soumises au vote</li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Connecter et utiliser les boîtiers et les récepteurs</li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Ouvrir, piloter et clôturer les scrutins</li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}Consulter les résultats et éditer les rapports de vote</li>
        </ul>
      </div>
      <div class="split__sticky">
        ${C.shot('emargement-rapport-stats', { alt: 'Rapport d’émargement statistique : invités, présents en individus et en pouvoirs, absents, sortis, attendus, délégués et quorum atteint', caption: 'Rapport d’émargement édité à l’issue de la session. Données de démonstration.' })}
        <div class="section--blue" style="padding:var(--mv-space-6);border-radius:var(--mv-radius-lg)">
          <h3 style="font-size:var(--mv-text-h4)">Les bénéfices de cette approche</h3>
          <ul style="margin-top:var(--mv-space-3)">
            <li>Une prise en main plus rapide grâce à la pratique</li>
            <li>Une meilleure maîtrise des fonctionnalités du logiciel</li>
            <li>La capacité à gérer vos prochaines sessions sans intervention systématique d’un prestataire</li>
            <li>Une réduction des risques d’erreur lors de vos scrutins</li>
            <li>Une autonomie opérationnelle, tout en conservant la possibilité de solliciter Mediavote</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Pourquoi acheter', title: 'Quatre raisons d’acquérir vos boîtiers de vote' })}
    <div class="grid grid--4">
      ${C.card({ icon: 'competence', title: '1. Économisez sur le long terme', text: 'Investissez dans votre propre équipement et limitez les frais liés à la location de matériel et aux interventions récurrentes.' })}
      ${C.card({ icon: 'test', title: '2. Gagnez en souplesse', text: 'Organisez vos votes selon votre calendrier, sans dépendre de la disponibilité d’un prestataire ou de matériel de location.' })}
      ${C.card({ icon: 'journaux', title: '3. Conservez la maîtrise de vos scrutins', text: 'Vos équipes assurent directement la préparation, le paramétrage et le déroulement des sessions de vote.' })}
      ${C.card({ icon: 'interlocuteur', title: '4. Bénéficiez de l’expertise Mediavote', text: 'Profitez de notre expérience des solutions de vote électronique et d’un accompagnement adapté à votre organisation.' })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur l’achat de boîtiers' })}
    ${C.faq(achatFaq, 'achat-faq')}
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/modes-de-vote/vote-par-boitier/">Le fonctionnement des boîtiers de vote HF</a></p>
  </div>
</section>

${C.ctaBand({
  eyebrow: 'Prêt à devenir autonome ?',
  title: 'Demandez votre devis pour l’achat de boîtiers de vote',
  text: 'Contactez Mediavote pour obtenir une proposition personnalisée, adaptée au nombre de votants, à la configuration de vos salles et à la fréquence de vos sessions de vote.',
  primary: { label: 'Demander un devis', url: '/contact/' },
  secondary: { label: 'Voir les boîtiers en démonstration', url: '/demonstration/' },
  note: 'Réponse sous 48 heures ouvrées, sans engagement.'
})}
`
};

module.exports = [provote, fonctionnalites, licence, achat, accompagnement];
