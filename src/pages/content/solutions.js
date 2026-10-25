/* ==========================================================================
   Pages besoin — Élections CSE, Conseils d'administration, Consultations
   Règle : ces pages ciblent un BESOIN. Elles distribuent vers les modes et
   les offres, sans réécrire leur fonctionnement.
   ========================================================================== */

const C = require('../../components');

const hero = ({ eyebrow, h1, lead, cta, img = 'hero-accueil', visual = 'provote-mobile' }) => `
<section class="hero hero--page">
  ${C.heroPlate(img, { eager: true })}
  <div class="hero__title-wrap">
    <div class="container hero__inner" style="padding-inline:0">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h1 style="margin-top:var(--mv-space-4)">${h1}</h1>
        <p class="lead" style="margin-top:var(--mv-space-5)">${lead}</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="/demonstration/">${cta}${C.icons.arrow}</a>
          <a class="btn btn--secondary" href="/contact/">Parler de votre projet</a>
        </div>
      </div>
      ${C.heroVisual(visual)}
    </div>
  </div>
</section>`;

/* --------------------------------------------- /solutions/elections-cse/ */
const cseFaq = [
  { q: 'Faut-il un accord pour recourir au vote électronique ?', a: 'Le recours au vote électronique pour les élections du CSE doit être prévu par un accord d’entreprise ou de groupe. À défaut d’accord, l’employeur peut y recourir par décision unilatérale. Votre chef de projet vérifie ce point avec vous dès la réunion de lancement et vous indique les mentions à faire figurer.' },
  { q: 'Qui détient les clés de dépouillement ?', a: 'Les membres du bureau de vote — président et assesseurs. Chacun reçoit un fragment de la clé générale dans un e-mail sécurisé. Il faut réunir un nombre minimum de fragments, que vous définissez, pour reconstituer la clé et ouvrir l’urne. Ni l’organisateur, ni Mediavote ne peuvent dépouiller seuls.' },
  { q: 'Comment le bureau de vote est-il formé ?', a: 'Mediavote organise une formation dédiée une fois les membres désignés. Elle peut être filmée sur demande. À l’issue, chaque membre reçoit un mode d’emploi illustré en PDF et une vidéo de démonstration, et dispose d’un accès direct au chef de projet pour ses questions.' },
  { q: 'Peut-on combiner vote électronique et vote papier ?', a: 'Oui. Les convocations comme les bulletins peuvent être envoyés par voie postale pour une partie de vos électeurs. Les votes papier sont dépouillés, scannés, puis injectés dans ProVote® une fois les votes numériques scellés. Le décompte final est consolidé automatiquement.' },
  { q: 'Que se passe-t-il s’il faut un second tour ?', a: 'Il est généré automatiquement à partir des résultats du premier. Vos électeurs sont informés des nouvelles dates et réutilisent les codes d’accès reçus initialement — aucun nouvel envoi n’est nécessaire.' },
  { q: 'Le CERFA est-il produit automatiquement ?', a: 'Oui. Les procès-verbaux CERFA sont pré-remplis à partir des résultats, édités et signés depuis la plateforme, puis transmis. Cela supprime la ressaisie et les erreurs de report qui sont un motif fréquent de contestation.' }
];

const cse = {
  page: {
    url: '/solutions/elections-cse/', heroImage: 'hero-assemblee',
    title: 'Vote électronique pour élections CSE | Mediavote',
    description: 'PAP, convocations, dépouillement par clés chiffrées, CERFA et second tour : Mediavote sécurise vos élections CSE avec un chef de projet dédié.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Vote électronique pour élections CSE' },
    faqItems: cseFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Solutions', url: '/solutions/' }, { label: 'Élections CSE', url: '/solutions/elections-cse/' }]
  },
  body: `
${hero({
  img: 'hero-assemblee',
  eyebrow: 'Élections CSE',
  h1: 'Organisez vos élections CSE en ligne, simplement et sereinement',
  lead: 'Protocole d’accord préélectoral, listes et candidatures, convocations, dépouillement par clés chiffrées, CERFA et second tour : Mediavote pilote votre élection de bout en bout, avec un chef de projet dédié.',
  cta: 'Demander une démonstration CSE'
})}

<section class="section section--tight section--surface">
  <div class="container">
    <h2>Ce que Mediavote prend en charge</h2>
    <div class="grid grid--3" style="margin-top:var(--mv-space-8)">
      <div>
        <h3>Avant le scrutin</h3>
        <p>Accompagnement du protocole d’accord préélectoral, constitution des collèges et des listes, paramétrage du nombre de sièges, définition du bureau de vote, envoi automatisé des convocations et des codes.</p>
      </div>
      <div>
        <h3>Pendant le scrutin</h3>
        <p>Suivi du taux de participation en temps réel, assistance technique pour vos électeurs par téléphone et par e-mail, régénération des codes perdus, mode accompagné activable.</p>
      </div>
      <div>
        <h3>Après le scrutin</h3>
        <p>Dépouillement par activation des clés chiffrées, calcul du quotient électoral, attribution automatisée des sièges, édition des CERFA, génération du second tour si nécessaire.</p>
      </div>
    </div>
    <p style="margin-top:var(--mv-space-8);font-size:var(--mv-text-lg);font-weight:600;color:var(--mv-ink)">
      Vous restez maître du calendrier et des décisions. Nous prenons en charge la mécanique et la conformité.
    </p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Le parcours électoral', title: 'Les étapes d’une élection CSE', lead: 'Chaque étape est datée dans un rétroplanning partagé avec vous dès la réunion de lancement.' })}
    ${C.numList([
      { title: 'Protocole d’accord préélectoral', text: 'Détermination du nombre de sièges par collège, des modalités de vote et du calendrier. Le PAP est le socle juridique de toute l’élection.', meta: 'Votre chef de projet connaît les mentions attendues.', link: '/offres/accompagnement-sur-mesure/' },
      { title: 'Listes et candidatures', text: 'Constitution des listes, saisie des candidats titulaires et suppléants, dépôt des professions de foi et des documents de campagne.', meta: 'Vos électeurs les consultent depuis leur espace de vote.', link: '/provote/fonctionnalites/' },
      { title: 'Convocations et codes d’accès', text: 'Envoi automatisé, avec des codes personnels transmis par deux canaux distincts au choix : e-mail, SMS, courrier ou code remis en main propre.', meta: 'Combinable électeur par électeur, pour maîtriser les coûts.', link: '/modes-de-vote/vote-en-ligne/' },
      { title: 'Vote et suivi', text: 'Scrutin de liste ou vote par candidat avec possibilité de raturer. Suivi du quorum et du taux de participation en temps réel.', meta: 'Assistance technique disponible pendant toute la durée du scrutin.', link: '/modes-de-vote/vote-en-ligne/' },
      { title: 'Dépouillement et attribution des sièges', text: 'Activation des clés chiffrées par le bureau de vote, calcul du quotient électoral et de la plus forte moyenne, attribution automatisée des sièges.', meta: 'Aucun membre ne peut dépouiller seul.', link: '/provote/fonctionnalites/' },
      { title: 'CERFA et second tour', text: 'Procès-verbaux CERFA pré-remplis, édités et signés depuis la plateforme. Le second tour est généré automatiquement si nécessaire.', meta: 'Vos électeurs réutilisent leurs codes du premier tour.', link: '/provote/fonctionnalites/' }
    ])}
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Rôles', title: 'Qui fait quoi, et qui peut quoi', lead: 'Quatre profils, des permissions strictement séparées. C’est cette séparation qui rend le scrutin difficile à contester.' })}
    <div class="grid grid--4">
      ${C.card({ title: 'L’électeur', text: 'Vote, consulte les listes et les documents, télécharge son attestation d’émargement et son certificat de dépôt.' })}
      ${C.card({ title: 'L’organisateur (RH)', text: 'Valide les contenus en amont, suit la participation, édite le CERFA. **Ne détient aucune clé** et ne peut pas dépouiller.' })}
      ${C.card({ title: 'Le bureau de vote', text: 'Président et assesseurs. Détiennent les clés de dépouillement, scellent les urnes, publient les résultats.' })}
      ${C.card({ title: 'L’administrateur', text: 'Le chef de projet Mediavote. Paramètre la session et garantit le bon déroulement technique.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Sécurité du dépouillement', title: 'Personne ne peut ouvrir l’urne seul' })}
        <p>
          La clé générale est <strong>fragmentée</strong> et répartie entre les membres du bureau de vote.
          Chacun reçoit son fragment dans un e-mail sécurisé. Au moment du dépouillement, chaque membre
          saisit sa clé dans la case portant son identité ; le président vérifie l’ensemble des clés,
          ce qui reconstitue la clé générale et ouvre l’urne.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Il est recommandé d’attribuer <strong>plus de trois clés</strong> et de définir un seuil
          inférieur au nombre total : une absence le jour du dépouillement ne bloque alors pas le processus.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          L’urne d’émargement et l’urne des bulletins restent strictement séparées : savoir qu’un
          salarié a voté ne permet pas de savoir pour qui.
        </p>
      </div>
      <div>${C.keySchema()}</div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Cadre juridique', title: 'Les textes qui encadrent votre élection', lead: 'Nous ne nous substituons pas à votre conseil juridique. Nous connaissons en revanche les contraintes opérationnelles qui en découlent.' })}
    <ul style="font-size:var(--mv-text-body);line-height:1.8">
      <li>Articles <strong>L. 2314-4 à L. 2314-37</strong> et <strong>R. 2314-2 à R. 2314-25</strong> du Code du travail</li>
      <li>Arrêté du 25 avril 2007 relatif au vote électronique</li>
      <li>Arrêté du 4 novembre 2019</li>
      <li>Décret n° 2019-1345 du 11 décembre 2019</li>
      <li>Décret n° 2020-1545 du 9 décembre 2020</li>
    </ul>
    <p style="margin-top:var(--mv-space-6)">
      L’obligation d’organiser les élections incombe à l’employeur, tous les quatre ans, dès onze
      salariés. ProVote® couvre également les élections des CSSCT, CSSCTC et CSEC.
    </p>
  </div>
</section>

<section class="section section--blue">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Quelle solution pour ce scrutin ?', title: 'ProVote®, la solution de vos élections CSE', lead: 'Le vote électronique de vos élections professionnelles se déroule sur ProVote®, du protocole préélectoral à la répartition des sièges.' })}
    ${C.scrutinSolutions('cse')}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur les élections CSE' })}
    ${C.faq(cseFaq, 'cse-faq')}
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/faq/">Toutes nos questions fréquentes</a></p>
  </div>
</section>
`
};

/* ------------------------------- /solutions/vote-conseil-administration/ */
const caFaq = [
  { q: 'Peut-on voter à bulletin secret en conseil d’administration ?', a: 'Oui, et vous choisissez vote par vote. Une même séance peut comporter des délibérations votées de façon nominative — donc traçables — et une élection de bureau à bulletin secret. Sur un vote anonyme, l’urne d’émargement et l’urne des bulletins sont séparées.' },
  { q: 'Peut-on délibérer sans réunir le conseil ?', a: 'Si vos statuts autorisent la consultation écrite, oui. Le scrutin reste ouvert sur une période que vous définissez et chaque administrateur se prononce quand il le peut. Vous obtenez les mêmes procès-verbaux qu’en séance.' },
  { q: 'Comment gérer les pouvoirs entre administrateurs ?', a: 'Comme en assemblée générale : délégation en amont ou en cours de séance, limitation du nombre de pouvoirs par administrateur si vos statuts le prévoient, et configurations titulaire-suppléant lorsque c’est applicable.' },
  { q: 'Faut-il une prestation pour chaque conseil ?', a: 'Pas nécessairement — et c’est souvent le sujet. Au-delà de huit conseils par an, la licence annuelle est généralement plus adaptée : vous pilotez vos sessions vous-même, sans repasser par une prestation à chaque fois.' },
  { q: 'Le procès-verbal est-il exploitable directement ?', a: 'Le PV des résultats est disponible en PDF, accompagné d’un export Excel détaillé et du rapport d’émargement. Ces documents constituent la trace de la séance ; votre secrétaire les intègre au procès-verbal de conseil.' }
];

const ca = {
  page: {
    url: '/solutions/vote-conseil-administration/', heroImage: 'hero-vote',
    title: 'Vote électronique pour conseil d’administration | Mediavote',
    description: 'Conseils réguliers, votes à bulletin secret, délibérations à distance : ProVote® gère vos CA tout au long de l’année, en séance ou en consultation écrite.',
    priority: 'P1',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Vote électronique en conseil d’administration' },
    faqItems: caFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Solutions', url: '/solutions/' }, { label: 'Conseils d’administration', url: '/solutions/vote-conseil-administration/' }]
  },
  body: `
${hero({
  visual: 'provote-tablette',
  img: 'hero-vote',
  eyebrow: 'Conseils d’administration',
  h1: 'Sécurisez les votes de vos conseils d’administration',
  lead: 'Un conseil se réunit plusieurs fois par an, souvent avec peu de participants et des enjeux élevés. ProVote® gère vos délibérations en séance comme en consultation écrite, à bulletin secret ou nominatif.',
  cta: 'Découvrir ProVote® pour vos CA'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Spécificités', title: 'Ce qui distingue un conseil d’une assemblée générale', lead: 'Moins de votants, plus de fréquence, et des règles de représentation souvent plus strictes.' })}
    <div class="grid grid--3">
      ${C.card({ icon: 'conseil', title: 'La fréquence change tout', text: 'Un conseil ne se tient pas une fois par an. Passer par une prestation à chaque séance devient vite lourd — c’est ce qui rend la licence annuelle pertinente.' })}
      ${C.card({ icon: 'journaux', title: 'Le secret est souvent requis', text: 'Nomination d’un dirigeant, décision individuelle, arbitrage sensible : le bulletin secret est fréquent en conseil, alors qu’il reste ponctuel en assemblée.' })}
      ${C.card({ icon: 'competence', title: 'La traçabilité est scrutée', text: 'Un conseil engage la responsabilité de ses membres. Le procès-verbal doit établir précisément qui a délibéré, sur quoi, et selon quelle règle de majorité.' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Deux formats', title: 'En séance, ou sans réunir le conseil' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Vote en séance',
        text: 'Le président ouvre et ferme chaque délibération. Le résultat est calculé et partagé immédiatement. La séance se déroule à votre rythme, en présentiel, en visioconférence ou en hybride.',
        meta: 'Un chef de projet peut piloter la séance avec vous.',
        link: '/modes-de-vote/vote-hybride/', linkLabel: 'Le vote hybride' })}
      ${C.card({ title: 'Consultation écrite',
        text: 'Si vos statuts l’autorisent, le scrutin reste ouvert sur une période définie. Chaque administrateur se prononce quand il le peut, sans mobiliser tout le monde au même moment.',
        meta: 'Utile pour les décisions urgentes entre deux conseils.',
        link: '/modes-de-vote/vote-en-ligne/', linkLabel: 'Le vote en ligne' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Paramétrage', title: 'Vos règles, appliquées automatiquement' })}
    <div class="grid grid--2">
      <div>
        <h3>Délibérations</h3>
        <ul style="line-height:1.7">
          <li>Libellés des choix personnalisables, au-delà de « Pour, Contre, Abstention »</li>
          <li>Quatrième option possible pour les membres qui ne prennent pas part au vote</li>
          <li>Majorité simple, absolue ou qualifiée, au choix</li>
          <li>Base de calcul paramétrable : tous les votants, tous les participants, ou les seuls « pour » et « contre »</li>
          <li>Exclusion ponctuelle d’un administrateur en situation de conflit d’intérêts</li>
        </ul>
      </div>
      <div>
        <h3>Élections internes</h3>
        <ul style="line-height:1.7">
          <li>Scrutin uninominal à un ou deux tours</li>
          <li>Scrutin plurinominal</li>
          <li>Candidature déclarée en séance</li>
          <li>Vote par collèges lorsque la composition du conseil l’impose</li>
          <li>Pondération des voix si vos statuts la prévoient</li>
        </ul>
      </div>
    </div>
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/provote/fonctionnalites/">Voir toutes les fonctionnalités de ProVote®</a></p>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Recommandation', title: 'Au-delà de huit conseils par an, prenez la licence' })}
        <p>
          C’est le conseil que nous donnons le plus souvent. Si votre gouvernance se réunit
          régulièrement — conseils, bureaux, commissions — repasser par une prestation à chaque séance
          coûte du temps et de l’argent.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          La licence annuelle vous rend autonome : vous créez vos sessions vous-même, avec la formation
          de vos équipes et notre assistance technique.
        </p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="/offres/licence-annuelle-provote/">Découvrir la licence annuelle${C.icons.arrow}</a>
        </div>
      </div>
      <div>${C.shot('provote-pouvoirs-paysage', { alt: 'Interface ProVote® sur tablette : vote d’une délibération, avec le poids de vote de chaque administrateur', caption: 'Un vote de conseil sur ProVote®, pondération comprise. ' + 'Données de démonstration.' })}</div>
    </div>
  </div>
</section>

<section class="section section--blue">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Quelle solution pour ce scrutin ?', title: 'En séance, à distance ou les deux', lead: 'Pour vos conseils, les deux solutions conviennent. Le choix dépend de l’endroit où se trouvent vos administrateurs.' })}
    ${C.scrutinSolutions('ca')}
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/solutions/vote-electronique-assemblee-generale/">Vous organisez aussi des assemblées générales&nbsp;?</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur le vote en conseil' })}
    ${C.faq(caFaq, 'ca-faq')}
  </div>
</section>
`
};

/* ------------------------ /solutions/consultations-referendums/ */
const consultFaq = [
  { q: 'Une consultation a-t-elle la même valeur qu’un vote en assemblée ?', a: 'Cela dépend de ce que prévoient vos textes. Une consultation peut être décisionnelle si vos statuts ou un accord lui donnent cette portée, ou purement consultative. La technique est la même ; c’est le cadre juridique que vous fixez qui détermine la portée.' },
  { q: 'Les réponses sont-elles anonymes ?', a: 'Vous choisissez. Sur une consultation anonyme, l’urne d’émargement et l’urne des réponses sont séparées : on sait qui a participé, jamais ce qu’il a répondu. Sur une consultation nominative, les réponses sont rattachées à leur auteur et traçables.' },
  { q: 'Peut-on poser plusieurs questions dans une même consultation ?', a: 'Oui. Vous pouvez enchaîner autant de questions que nécessaire, avec des règles de majorité différentes pour chacune, et exclure certains participants de questions précises identifiées en amont.' },
  { q: 'Combien de temps peut rester ouverte une consultation ?', a: 'La durée que vous définissez — de quelques heures à plusieurs jours. Vous suivez le taux de participation en temps réel et pouvez programmer des rappels aux personnes qui n’ont pas encore répondu.' },
  { q: 'Quelle différence avec un simple sondage en ligne ?', a: 'L’authentification et la traçabilité. Un outil de sondage ne garantit ni l’identité du répondant, ni l’unicité de sa réponse, ni la conservation d’une preuve opposable. Sur une décision qui engage votre organisation, cette différence est décisive.' }
];

const consultations = {
  page: {
    url: '/solutions/consultations-referendums/', heroImage: 'hero-vote',
    title: 'Consultation et référendum en ligne sécurisés | Mediavote',
    description: 'Consulter salariés, adhérents ou administrés avec un scrutin sécurisé, anonyme et opposable — sans la lourdeur d’une assemblée générale.',
    priority: 'P1',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Consultations et référendums en ligne' },
    faqItems: consultFaq,
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Solutions', url: '/solutions/' }, { label: 'Consultations et référendums', url: '/solutions/consultations-referendums/' }]
  },
  body: `
${hero({
  img: 'hero-vote',
  eyebrow: 'Consultations et référendums',
  h1: 'Consultations et référendums en ligne sécurisés',
  lead: 'Toutes les décisions ne justifient pas de convoquer une assemblée générale. Consultez vos salariés, vos adhérents ou vos administrés avec un scrutin authentifié, anonyme si nécessaire, et dont la trace est opposable.',
  cta: 'Parler de votre projet'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Cas d’usage', title: 'Quand une consultation suffit', lead: 'Quatre situations où l’assemblée générale serait disproportionnée.' })}
    ${C.numList([
      { title: 'Consulter les salariés sur un accord', text: 'Ratification d’un accord d’entreprise, consultation sur un projet d’organisation, référendum d’entreprise.', meta: 'Authentification par deux canaux, anonymat garanti.', link: '/modes-de-vote/vote-en-ligne/' },
      { title: 'Recueillir l’avis des adhérents', text: 'Orientation stratégique, changement de nom, adhésion à une fédération : consulter sans attendre l’assemblée annuelle.', meta: 'Scrutin ouvert plusieurs jours, participation maximisée.', link: '/secteurs/associations-federations/' },
      { title: 'Trancher une décision urgente', text: 'Une décision ne peut pas attendre la prochaine réunion statutaire, mais engage l’organisation.', meta: 'Mise en place possible en quelques jours.', link: '/offres/accompagnement-sur-mesure/' },
      { title: 'Consulter des administrés ou des usagers', text: 'Concertation locale, consultation d’usagers, avis sur un projet d’équipement.', meta: 'Accessibilité et continuité du service.', link: '/secteurs/organismes-publics/' }
    ])}
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Ce qui fait la différence', title: 'Une consultation n’est pas un sondage' })}
        <p>
          Un formulaire en ligne ne garantit ni l’identité du répondant, ni l’unicité de sa réponse,
          ni la conservation d’une preuve. Sur une décision qui engage votre organisation, ces trois
          points sont exactement ceux qui seront contestés.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Une consultation menée avec ProVote® produit les mêmes garanties qu’un vote d’assemblée :
          authentification par deux canaux, séparation des urnes, journaux d’audit horodatés,
          et documents de restitution opposables.
        </p>
        <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/securite-conformite/">Les mécanismes de sécurité en détail</a></p>
      </div>
      <div>${C.shot('provote-vote-scene', { alt: 'ProVote® sur smartphone : écran de vote d’une question avec les choix proposés et la participation en direct', caption: 'Chacun vote depuis son téléphone, quand il le peut. ' + 'Données de démonstration.' })}</div>
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Paramétrage', title: 'Anonyme ou nominatif, à vous de décider' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Consultation anonyme',
        text: 'L’urne d’émargement et l’urne des réponses sont séparées. Vous savez qui a participé — donc vous pouvez relancer les autres — sans jamais pouvoir relier une réponse à une personne.',
        meta: 'Recommandé dès que le sujet est sensible.' })}
      ${C.card({ title: 'Consultation nominative',
        text: 'Chaque réponse est rattachée à son auteur et figure dans l’export détaillé. Utile lorsque la position de chacun doit être tracée, par exemple entre représentants mandatés.',
        meta: 'Le choix se fait question par question.' })}
    </div>
  </div>
</section>

<section class="section section--blue">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Quelle solution pour ce scrutin ?', title: 'Une consultation à distance ou en salle', lead: 'Consulter à distance, sur plusieurs jours, se fait sur ProVote®. Si vos votants sont réunis, les boîtiers donnent un résultat immédiat.' })}
    ${C.scrutinSolutions('referendum')}
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur les consultations' })}
    ${C.faq(consultFaq, 'consult-faq')}
  </div>
</section>
`
};

module.exports = [cse, ca, consultations];
