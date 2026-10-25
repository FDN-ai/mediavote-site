/* ==========================================================================
   Pages modalité — Vote en ligne, Vote par boîtier, Vote hybride
   Règle : ces pages ciblent une TECHNOLOGIE. Elles ne réécrivent pas les
   contraintes propres à chaque type de scrutin — elles y renvoient.
   ========================================================================== */

const C = require('../../components');

const hero = ({ eyebrow, h1, lead, ctaLabel, img = 'hero-accueil', visual = 'provote-mobile' }) => `
<section class="hero hero--page">
  ${C.heroPlate(img, { eager: true })}
  <div class="hero__title-wrap">
    <div class="container hero__inner" style="padding-inline:0">
      <div>
        <span class="eyebrow">${eyebrow}</span>
        <h1 style="margin-top:var(--mv-space-4)">${h1}</h1>
        <p class="lead" style="margin-top:var(--mv-space-5)">${lead}</p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--xl btn--primary" href="/demonstration/">${ctaLabel}${C.icons.arrow}</a>
          <a class="btn btn--secondary" href="/contact/">Parler de votre projet</a>
        </div>
      </div>
      ${C.heroVisual(visual)}
    </div>
  </div>
</section>`;

/* ------------------------------------------------- /modes-de-vote/vote-en-ligne/ */
const enLigne = {
  page: {
    url: '/modes-de-vote/vote-en-ligne/', heroImage: 'hero-vote',
    title: 'Vote en ligne sécurisé pour organisations | Mediavote',
    description: 'Vote synchrone ou asynchrone, sur ordinateur, tablette ou smartphone, sans téléchargement. ProVote® s’adapte aux règles de votre organisation.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Vote en ligne sécurisé' },
    faqItems: [
      { q: 'Mes votants doivent-ils installer quelque chose ?', a: 'Non. ProVote® est une application web : vos votants ouvrent un lien reçu par e-mail, SMS ou courrier, et votent depuis le navigateur de leur ordinateur, de leur tablette ou de leur smartphone. Rien à télécharger, rien à mettre à jour.' },
      { q: 'Quelle est la différence entre vote synchrone et asynchrone ?', a: 'En synchrone, tout le monde vote au même moment pendant la séance : chaque vote est ouvert et fermé à la demande du président. En asynchrone, le scrutin reste ouvert sur une période que vous définissez — quelques heures ou plusieurs jours — et chacun vote quand il le peut.' },
      { q: 'Comment un votant reçoit-il ses accès ?', a: 'Par deux canaux distincts, au choix : e-mail, SMS, courrier postal ou code remis en main propre. Vous pouvez combiner les canaux votant par votant, ce qui permet d’adapter le dispositif à un public hétérogène — et de maîtriser les coûts d’envoi.' },
      { q: 'Que se passe-t-il si un votant perd ses codes ?', a: 'Il peut en obtenir de nouveaux : l’assistance technique régénère des accès sécurisés pendant toute la durée du scrutin, par téléphone ou par e-mail. Un mode accompagné, activable, guide également le votant pas à pas.' },
      { q: 'Le vote en ligne convient-il à tous les scrutins ?', a: 'Non, et nous vous le dirons. Si votre assemblée se tient intégralement en salle et que vous voulez un résultat affiché immédiatement, le vote par boîtier est plus fluide. Si une partie seulement de vos membres se déplace, c’est l’hybride qu’il faut envisager.' }
    ],
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Modes de vote', url: '/modes-de-vote/' }, { label: 'Vote en ligne', url: '/modes-de-vote/vote-en-ligne/' }]
  },
  body: `
${hero({
  img: 'hero-vote',
  eyebrow: 'Vote en ligne',
  h1: 'Le vote en ligne sécurisé, accessible partout',
  lead: 'Vos votants participent depuis le terminal qu’ils ont sous la main, sans rien installer. En temps réel pendant la séance, ou sur une période de plusieurs jours.',
  ctaLabel: 'Voir une démonstration'
})}

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Pour qui', title: 'Quand le vote en ligne s’impose', lead: 'Trois situations où il n’y a pas vraiment d’alternative.' })}
    <div class="grid grid--3">
      ${C.card({ title: 'Vos votants sont dispersés', text: 'Adhérents répartis sur tout le territoire, salariés multi-sites, sociétaires que rien ne réunit géographiquement.' })}
      ${C.card({ title: 'Le déplacement fait chuter la participation', text: 'Quand le quorum se joue à quelques voix, supprimer la contrainte de déplacement change l’issue de l’assemblée.' })}
      ${C.card({ title: 'Votre calendrier est contraint', text: 'Un scrutin ouvert plusieurs jours absorbe les indisponibilités sans imposer une date unique à tout le monde.' })}
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Fonctionnement', title: 'Deux régimes de vote, selon votre séance' })}
    <div class="grid grid--2">
      ${C.card({ title: 'En temps réel — synchrone',
        text: 'Tout le monde vote au même moment, pendant la séance, souvent en parallèle d’une visioconférence. Chaque vote est ouvert et fermé à la demande du président. Les résultats sont partagés à la clôture de chaque vote.',
        meta: 'Le chef de projet Mediavote pilote la séance à votre rythme.' })}
      ${C.card({ title: 'Sur une période — asynchrone',
        text: 'Le scrutin reste ouvert plusieurs heures ou plusieurs jours. Chaque électeur vote selon ses disponibilités. Vous suivez le taux de participation en direct et pouvez programmer des rappels.',
        meta: 'C’est le format qui favorise le plus la participation.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Parcours du votant', title: 'Ce que voit la personne qui vote' })}
        <ul style="line-height:1.7">
          <li>Elle reçoit ses <strong>codes personnels par deux canaux distincts</strong></li>
          <li>Elle ouvre un lien, sans installer d’application</li>
          <li>Elle retrouve <strong>les informations du scrutin</strong> : dates d’ouverture et de clôture, temps restant, coordonnées de l’assistance</li>
          <li>Elle consulte <strong>les documents associés</strong> — ordre du jour, rapports, professions de foi</li>
          <li>Elle vote, puis <strong>confirme en s’authentifiant à nouveau</strong></li>
          <li>Elle télécharge son <strong>attestation d’émargement</strong> et son <strong>certificat de dépôt</strong></li>
        </ul>
      </div>
      <div>${C.shot('provote-vote-scene', { alt: 'ProVote® sur smartphone : écran de vote d’une résolution, avec les choix Pour, Contre, Abstention et le suivi de la participation', caption: 'L’écran que voient vos votants, sans rien installer. ' + 'Données de démonstration.' })}</div>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Honnêteté', title: 'Quand le vote en ligne n’est pas la bonne réponse', lead: 'Nous préférons vous le dire avant la démonstration.' })}
    <div class="grid grid--2">
      ${C.card({ title: 'Votre assemblée se tient entièrement en salle',
        text: 'Distribuer des codes à des personnes déjà réunies devant vous ajoute une étape inutile. Le boîtier est plus fluide et affiche les résultats immédiatement.',
        link: '/modes-de-vote/vote-par-boitier/', linkLabel: 'Voir le vote par boîtier' })}
      ${C.card({ title: 'Une partie seulement de vos membres se déplace',
        text: 'Faire voter deux publics séparément complique le décompte et le quorum. L’hybride les réunit dans un seul scrutin.',
        link: '/modes-de-vote/vote-hybride/', linkLabel: 'Voir le vote hybride' })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur le vote en ligne' })}
    ${C.faq([
      { q: 'Mes votants doivent-ils installer quelque chose ?', a: 'Non. ProVote® est une application web : vos votants ouvrent un lien reçu par e-mail, SMS ou courrier, et votent depuis le navigateur de leur ordinateur, de leur tablette ou de leur smartphone. Rien à télécharger, rien à mettre à jour.' },
      { q: 'Quelle est la différence entre vote synchrone et asynchrone ?', a: 'En synchrone, tout le monde vote au même moment pendant la séance : chaque vote est ouvert et fermé à la demande du président. En asynchrone, le scrutin reste ouvert sur une période que vous définissez — quelques heures ou plusieurs jours — et chacun vote quand il le peut.' },
      { q: 'Comment un votant reçoit-il ses accès ?', a: 'Par deux canaux distincts, au choix : e-mail, SMS, courrier postal ou code remis en main propre. Vous pouvez combiner les canaux votant par votant, ce qui permet d’adapter le dispositif à un public hétérogène — et de maîtriser les coûts d’envoi.' },
      { q: 'Que se passe-t-il si un votant perd ses codes ?', a: 'Il peut en obtenir de nouveaux : l’assistance technique régénère des accès sécurisés pendant toute la durée du scrutin, par téléphone ou par e-mail. Un mode accompagné, activable, guide également le votant pas à pas.' },
      { q: 'Le vote en ligne convient-il à tous les scrutins ?', a: 'Non, et nous vous le dirons. Si votre assemblée se tient intégralement en salle et que vous voulez un résultat affiché immédiatement, le vote par boîtier est plus fluide. Si une partie seulement de vos membres se déplace, c’est l’hybride qu’il faut envisager.' }
    ], 'vel-faq')}
    <p style="margin-top:var(--mv-space-8)">
      <a class="link-arrow" href="/solutions/vote-electronique-assemblee-generale/">Appliquer le vote en ligne à votre assemblée générale</a>
    </p>
  </div>
</section>
`
};

/* ---------------------------------------------- /modes-de-vote/vote-par-boitier/ */
const boitier = {
  page: {
    url: '/modes-de-vote/vote-par-boitier/', heroImage: 'hero-assemblee',
    title: 'Boîtiers de vote électronique HF pour assemblée | Mediavote',
    description: 'Boîtiers de vote HF sans Internet : résultats affichés dès la clôture de chaque vote, majorités et poids des votes paramétrés, charte à vos couleurs.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Vote par boîtier en assemblée' },
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Modes de vote', url: '/modes-de-vote/' }, { label: 'Vote par boîtier', url: '/modes-de-vote/vote-par-boitier/' }],
    faqItems: [
      { q: 'Comment les boîtiers sont-ils distribués ?', a: 'À l’entrée de la salle, au moment de l’émargement. Chaque boîtier est rattaché à un votant identifié, ce qui permet d’appliquer les pondérations et les pouvoirs. À la sortie, les boîtiers sont récupérés.' },
      { q: 'Les résultats sont-ils visibles immédiatement ?', a: 'Oui. C’est le principal avantage du boîtier : dès que le président clôt un vote, le résultat est calculé et peut être affiché à l’écran devant l’assemblée. Le débat suivant peut reprendre sans attendre.' },
      { q: 'Peut-on gérer les pouvoirs et les pondérations avec des boîtiers ?', a: 'Oui. Le poids de chaque votant et les pouvoirs qu’il détient sont paramétrés en amont et rattachés à son boîtier. Le décompte les applique automatiquement, sans intervention en séance.' },
      { q: 'Que récupère-t-on après la séance ?', a: 'Les mêmes documents qu’avec le vote en ligne : le procès-verbal des résultats en PDF, l’export détaillé en Excel et le rapport d’émargement. Ces pièces constituent la trace de votre assemblée.' },
      { q: 'Les boîtiers conviennent-ils aux élections CSE ?', a: 'Non. Les boîtiers de vote ne sont pas proposés pour les élections CSE : le vote électronique de vos élections professionnelles se déroule sur ProVote®. Les boîtiers servent aux assemblées générales, aux conseils d’administration, aux consultations et aux élections internes tenues en salle.' },
      { q: 'Le boîtier est-il une technologie dépassée ?', a: 'Non — c’est une technologie mature, et c’est différent. En salle, elle reste la plus fluide : rien à distribuer par e-mail, aucun votant bloqué par un téléphone déchargé ou une adresse erronée. Nous continuons de l’opérer parce que nos clients en ont l’usage.' }
    ]
  },
  body: `
${hero({
  visual: 'boitier-main',
  img: 'hero-assemblee',
  eyebrow: 'Vote par boîtier',
  h1: 'Les boîtiers de vote HF, pour vos assemblées en salle',
  lead: 'Un boîtier remis à chaque votant à l’entrée. Les boîtiers communiquent par radio, sans dépendre d’Internet, et les résultats s’affichent devant l’assemblée dès la clôture de chaque vote. Un chef de projet Mediavote pilote la séance sur place.',
  ctaLabel: 'Demander une démonstration'
})}

<section class="section">
  <div class="container">
    <div class="split">
      <figure class="product-shot">
        ${C.picture('boitier-main', { alt: 'Boîtier de vote Mediavote tenu en main : écran affichant « 1,2,3 » et touches de vote 1, 2 et 3 en vert, rouge et jaune', sizes: '(min-width: 1024px) 30vw, 80vw' })}
      </figure>
      <div>
        <span class="eyebrow">Pourquoi voter avec des boîtiers&nbsp;?</span>
        <h2 style="margin-top:var(--mv-space-4)">Un vote immédiat, lisible par toute la salle</h2>
        <ul class="checklist" style="margin-top:var(--mv-space-8)">
          <li>${C.svg(C.ico.coche, 'checklist__ico')}<span><strong>Un gain de temps précieux.</strong> Pas de comptage à main levée ni de bulletins à dépouiller&nbsp;: le résultat tombe à la clôture du vote.</span></li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}<span><strong>Des votes et des résultats précis.</strong> Chaque boîtier est rattaché à un votant, à ses droits de vote et à ses pouvoirs.</span></li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}<span><strong>Un support visuel à vos couleurs.</strong> Logo, couleurs et mise en forme des résolutions reprennent votre charte.</span></li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}<span><strong>Des résultats consolidés en direct</strong>, projetés devant l’assemblée.</span></li>
          <li>${C.svg(C.ico.coche, 'checklist__ico')}<span><strong>Un procès-verbal édité à l’issue de l’AG</strong>, avant que vous ne quittiez la salle.</span></li>
        </ul>
        <div class="grid grid--3" style="margin-top:var(--mv-space-8);gap:var(--mv-space-4)">
          <p><strong>Fiable</strong><br>Fonctionne en onde radio, sans Internet</p>
          <p><strong>Interactif</strong><br>Résolutions, élections, questions</p>
          <p><strong>Ergonomique</strong><br>Prise en main intuitive</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Paramétrages et personnalisation',
      title: 'Un dispositif réglé sur vos statuts, pas l’inverse',
      lead: 'Chaque assemblée a ses règles de calcul et ses habitudes d’affichage. Nous les paramétrons en amont, avec vous.'
    })}
    <ul class="param-list">
      <li><strong>Calcul des majorités</strong><span>Majorité simple, renforcée ou personnalisée, résolution par résolution.</span></li>
      <li><strong>Résultat automatique</strong><span>Prise en compte, ou non, des non-votants, des participants et des votes pour et contre, selon vos statuts.</span></li>
      <li><strong>Droits et poids des votes</strong><span>Vous choisissez quels boîtiers votent, et si le poids de chaque vote est pris en compte.</span></li>
      <li><strong>Vote anonyme ou nominatif</strong><span>Selon la nature de chaque résolution ou de chaque élection.</span></li>
      <li><strong>Votes exprimés en amont</strong><span>Les votes réalisés avant la séance sont consolidés avec ceux de la salle, et les résultats affichés en direct.</span></li>
      <li><strong>Élections</strong><span>Classement des candidats et nombre de voix, pour les scrutins à plusieurs membres.</span></li>
    </ul>

    <h3 style="margin-top:var(--mv-space-14)">Ce que la salle voit à l’écran</h3>
    <p style="margin-top:var(--mv-space-3)">Chaque affichage est une option&nbsp;: vous retenez celles qui servent votre séance.</p>
    <ul class="checklist checklist--2" style="margin-top:var(--mv-space-6)">
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Nombre de votes attendus et de droits de vote enregistrés</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Nombre de votes reçus, en temps réel</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Nombre et pourcentage de boîtiers n’ayant pas voté</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Pouvoirs et poids des votes cumulés</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Chronomètre du temps de vote</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Résultat du vote&nbsp;: résolution adoptée ou rejetée</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Graphes horizontaux, verticaux ou en secteurs</li>
      <li>${C.svg(C.ico.coche, 'checklist__ico')}Résultats en pourcentage ou en nombre de voix</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">En vidéo</span>
        <h2 style="margin-top:var(--mv-space-4)">Le vote électronique en assemblée générale</h2>
        <p class="lead" style="margin-top:var(--mv-space-5)">Deux minutes pour voir comment se déroule une assemblée équipée par Mediavote.</p>
        <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/solutions/vote-electronique-assemblee-generale/">Le vote électronique en assemblée générale</a></p>
      </div>
      ${C.video('boitiers')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Déroulé', title: 'Comment se passe une assemblée équipée' })}
    ${C.timeline([
      { step: 'Avant', title: 'Préparation en salle', text: 'Le chef de projet installe le dispositif et vérifie chaque boîtier. Vos résolutions et vos règles de majorité sont déjà paramétrées.', deliverable: 'un test complet avant l’arrivée des participants.' },
      { step: 'Accueil', title: 'Émargement et remise', text: 'Chaque votant émarge — sur tablette, avec signature si vos statuts l’exigent — et reçoit son boîtier, rattaché à son identité, à ses pouvoirs et à son poids de vote.', deliverable: 'le quorum calculé en temps réel à mesure des arrivées.' },
      { step: 'Séance', title: 'Vote et affichage', text: 'Le président ouvre chaque vote, l’assemblée se prononce, le président clôt. Le résultat est calculé et affiché immédiatement à l’écran.', deliverable: 'le suivi des votes exprimés, vote par vote.' },
      { step: 'Après', title: 'Restitution', text: 'Récupération des boîtiers, édition des documents. Le procès-verbal et le rapport d’émargement sont disponibles avant que vous ne quittiez la salle.', deliverable: 'les PV et rapports en PDF et en Excel.' }
    ])}
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Ce que ça change', title: 'Pourquoi le boîtier reste souvent le meilleur choix en salle' })}
    <div class="grid grid--3">
      ${C.card({ icon: 'boitier', title: 'Aucun votant laissé de côté', text: 'Pas de code perdu, pas d’adresse e-mail erronée, pas de téléphone déchargé. Le boîtier est remis en main propre, il fonctionne.' })}
      ${C.card({ icon: 'journaux', title: 'Un rythme de séance préservé', text: 'Le résultat s’affiche à la clôture du vote. L’assemblée enchaîne sans temps mort — ce que les présidents de séance apprécient le plus.' })}
      ${C.card({ icon: 'competence', title: 'Une présence humaine sur place', text: 'Votre chef de projet est dans la salle. Un pouvoir de dernière minute, un libellé à corriger, une candidature déclarée en séance : il gère.' })}
    </div>
  </div>
</section>

${C.prodNote(`<p><strong>Boîtier radio sans Internet — confirmé par les documents Mediavote (Q-B10 levée).</strong>
Sources : <code>AG_Exemples et paramétrages</code> (« Fonctionne en onde radio »), arborescence
<code>MediaVote_Arbo.png</code> et maquette du configurateur (« sans dépendance Internet »).
Vidéo : intitulé repris du To Do (« Boîtiers de vote pour AG ») ; son contenu n’a pas pu être visionné
lors de l’intégration — à vérifier avant mise en ligne.</p>`)}

<section class="section section--overlap">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Deux façons d’en disposer', title: 'Prestation accompagnée, ou acquisition avec formation' })}
    <p class="lead">
      En <strong>prestation</strong>, Mediavote apporte les boîtiers, les paramètre selon vos statuts, pilote la
      séance et repart avec le matériel en vous laissant les documents. Vous n’avez ni stock à gérer ni
      technicien à former.
    </p>
    <p style="margin-top:var(--mv-space-5)">
      Si vous organisez régulièrement des votes en salle, vous pouvez aussi <strong>acquérir vos boîtiers</strong>,
      avec les récepteurs, le logiciel de vote et une formation-action de 3&nbsp;h&nbsp;30 pour préparer et
      piloter vos sessions en autonomie.
    </p>
    <div class="btn-group" style="margin-top:var(--mv-space-8)">
      <a class="btn btn--xl btn--primary" href="/offres/achat-boitiers-de-vote/">L’achat de boîtiers de vote${C.icons.arrow}</a>
      <a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Le détail de notre accompagnement</a>
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Et si certains ne peuvent pas venir ?', title: 'Le boîtier se combine avec le vote à distance', lead: 'C’est le vote hybride : les votes exprimés en salle et à distance sont comptés ensemble, avec un quorum consolidé et un résultat unique par résolution.' })}
    <p><a class="link-arrow" href="/modes-de-vote/vote-hybride/">Découvrir le vote hybride</a></p>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur le vote par boîtier' })}
    ${C.faq([
      { q: 'Comment les boîtiers sont-ils distribués ?', a: 'À l’entrée de la salle, au moment de l’émargement. Chaque boîtier est rattaché à un votant identifié, ce qui permet d’appliquer les pondérations et les pouvoirs. À la sortie, les boîtiers sont récupérés.' },
      { q: 'Les résultats sont-ils visibles immédiatement ?', a: 'Oui. C’est le principal avantage du boîtier : dès que le président clôt un vote, le résultat est calculé et peut être affiché à l’écran devant l’assemblée. Le débat suivant peut reprendre sans attendre.' },
      { q: 'Peut-on gérer les pouvoirs et les pondérations avec des boîtiers ?', a: 'Oui. Le poids de chaque votant et les pouvoirs qu’il détient sont paramétrés en amont et rattachés à son boîtier. Le décompte les applique automatiquement, sans intervention en séance.' },
      { q: 'Que récupère-t-on après la séance ?', a: 'Les mêmes documents qu’avec le vote en ligne : le procès-verbal des résultats en PDF, l’export détaillé en Excel et le rapport d’émargement. Ces pièces constituent la trace de votre assemblée.' },
      { q: 'Les boîtiers conviennent-ils aux élections CSE ?', a: 'Non. Les boîtiers de vote ne sont pas proposés pour les élections CSE : le vote électronique de vos élections professionnelles se déroule sur ProVote®. Les boîtiers servent aux assemblées générales, aux conseils d’administration, aux consultations et aux élections internes tenues en salle.' },
      { q: 'Le boîtier est-il une technologie dépassée ?', a: 'Non — c’est une technologie mature, et c’est différent. En salle, elle reste la plus fluide : rien à distribuer par e-mail, aucun votant bloqué par un téléphone déchargé ou une adresse erronée. Nous continuons de l’opérer parce que nos clients en ont l’usage.' }
    ], 'boitier-faq')}
  </div>
</section>
`
};

/* ------------------------------------------------- /modes-de-vote/vote-hybride/ */
const hybride = {
  page: {
    url: '/modes-de-vote/vote-hybride/', heroImage: 'hero-accueil',
    title: 'Vote hybride : AG en présentiel et à distance | Mediavote',
    description: 'Une seule assemblée, deux publics : votants en salle et à distance comptés ensemble, quorum consolidé en temps réel et résultats unifiés. Étudions votre dispositif.',
    priority: 'P0',
    schema: ['Service', 'FAQPage', 'BreadcrumbList'],
    service: { name: 'Vote hybride en assemblée' },
    breadcrumb: [{ label: 'Accueil', url: '/' }, { label: 'Modes de vote', url: '/modes-de-vote/' }, { label: 'Vote hybride', url: '/modes-de-vote/vote-hybride/' }],
    faqItems: [
      { q: 'Les votes des deux publics sont-ils vraiment comptés ensemble ?', a: 'Oui. Il n’y a pas deux scrutins qu’on additionnerait après coup : il y a un seul scrutin, alimenté par deux canaux. Le quorum est consolidé en temps réel et chaque résolution produit un résultat unique.' },
      { q: 'Comment émargent les membres à distance ?', a: 'Ils émargent en ligne, avec les mêmes options que vos membres en salle : émargement simple, signature électronique ou case à cocher. Le rapport d’émargement final réunit les deux publics dans un seul document.' },
      { q: 'Et si le réseau tombe pendant la séance ?', a: 'Les votants en salle ne dépendent pas de la connexion des participants distants. Votre chef de projet, présent sur place ou en visioconférence, gère la situation avec vous — reprise du vote, bascule vers un régime asynchrone, ou report d’une résolution.' },
      { q: 'L’hybride coûte-t-il plus cher que les autres modalités ?', a: 'Il mobilise deux dispositifs, donc plus de préparation. En contrepartie, il évite souvent un report d’assemblée pour quorum insuffisant — ce qui coûte bien davantage. Nous chiffrons votre cas précis lors de l’échange.' },
      { q: 'Faut-il une visioconférence ?', a: 'Ce n’est pas obligatoire, mais c’est presque toujours souhaitable : les membres à distance doivent pouvoir suivre les débats avant de voter. Nous nous articulons avec l’outil de visioconférence que vous utilisez déjà.' }
    ]
  },
  body: `
${hero({
  visual: 'provote-tablette',
  img: 'hero-accueil',
  eyebrow: 'Vote hybride',
  h1: 'Réunissez tous vos votants, sur place comme à distance',
  lead: 'Une même assemblée, deux publics. Les votes exprimés en salle et à distance sont comptés ensemble, avec un quorum consolidé en temps réel et un résultat unique par résolution.',
  ctaLabel: 'Étudier mon dispositif hybride'
})}

<section class="section">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Définition', title: 'Ce que l’hybride est — et ce qu’il n’est pas' })}
    <p class="lead">
      L’hybride n’est pas une assemblée en salle à laquelle on ajoute une visioconférence.
      C’est <strong>un seul scrutin alimenté par deux canaux</strong>.
    </p>
    <p style="margin-top:var(--mv-space-5)">
      La différence est décisive au moment du décompte. Deux scrutins séparés produisent deux
      quorums, deux résultats, et une consolidation manuelle contestable. Un scrutin unique produit
      un quorum consolidé, un résultat par résolution, et un procès-verbal opposable.
    </p>
  </div>
</section>

<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Mécanique', title: 'Comment les deux publics se rejoignent' })}
    <div class="grid grid--3">
      ${C.card({ icon: 'boitier', title: 'En salle', text: 'Émargement à l’entrée, boîtier remis en main propre — ou vote depuis le téléphone du participant, selon la configuration retenue.' })}
      ${C.card({ icon: 'enLigne', title: 'À distance', text: 'Codes reçus par deux canaux, émargement en ligne, vote depuis n’importe quel terminal, en parallèle de la séance.' })}
      ${C.card({ icon: 'hybride', title: 'Consolidé', text: 'Un quorum unique qui monte à mesure des émargements des deux côtés. Un résultat unique à la clôture de chaque vote.' })}
    </div>
  </div>
</section>

<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Scénarios', title: 'Ce que l’hybride permet de sauver', lead: 'Quatre situations réelles où il évite un report d’assemblée.' })}
    ${C.numList([
      { title: 'Le quorum se joue à quelques voix', text: 'Les membres empêchés votent depuis chez eux. Le quorum est atteint sans convoquer une seconde assemblée.', link: '/solutions/vote-electronique-assemblee-generale/' },
      { title: 'Une grève ou des intempéries bloquent une partie des participants', text: 'Le dispositif à distance absorbe les absents de dernière minute. L’assemblée se tient à la date prévue.', link: '/solutions/vote-electronique-assemblee-generale/' },
      { title: 'Vos membres sont répartis sur tout le territoire', text: 'Vous réunissez ceux qui peuvent venir, sans exclure les autres. Le moment collectif est préservé.', link: '/secteurs/associations-federations/' },
      { title: 'Un imprévu retient des participants pendant la séance', text: 'La délégation de pouvoir en cours de séance, ou la bascule vers un régime asynchrone, permet à chaque voix de compter.', link: '/provote/fonctionnalites/' }
    ])}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Le rôle du chef de projet', title: 'Coordonner deux publics ne s’improvise pas' })}
        <p>
          C’est la configuration qui demande le plus de préparation, et celle où la présence humaine
          compte le plus. Votre chef de projet synchronise l’ouverture et la clôture de chaque vote
          entre la salle et les participants distants, suit le quorum consolidé, et gère les aléas
          des deux côtés.
        </p>
        <p style="margin-top:var(--mv-space-5)">
          Le test à J-5 se fait avec les deux dispositifs, dans les conditions réelles.
        </p>
        <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Le détail de notre accompagnement</a></p>
      </div>
      <div><figure class="product-shot product-shot--flush product-shot--tall">${C.picture('hero-assemblee-scene', { alt: 'Salle d’assemblée équipée pour une séance', sizes: '(min-width: 1024px) 44vw, 92vw' })}</figure></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur le vote hybride' })}
    ${C.faq([
      { q: 'Les votes des deux publics sont-ils vraiment comptés ensemble ?', a: 'Oui. Il n’y a pas deux scrutins qu’on additionnerait après coup : il y a un seul scrutin, alimenté par deux canaux. Le quorum est consolidé en temps réel et chaque résolution produit un résultat unique.' },
      { q: 'Comment émargent les membres à distance ?', a: 'Ils émargent en ligne, avec les mêmes options que vos membres en salle : émargement simple, signature électronique ou case à cocher. Le rapport d’émargement final réunit les deux publics dans un seul document.' },
      { q: 'Et si le réseau tombe pendant la séance ?', a: 'Les votants en salle ne dépendent pas de la connexion des participants distants. Votre chef de projet, présent sur place ou en visioconférence, gère la situation avec vous — reprise du vote, bascule vers un régime asynchrone, ou report d’une résolution.' },
      { q: 'L’hybride coûte-t-il plus cher que les autres modalités ?', a: 'Il mobilise deux dispositifs, donc plus de préparation. En contrepartie, il évite souvent un report d’assemblée pour quorum insuffisant — ce qui coûte bien davantage. Nous chiffrons votre cas précis lors de l’échange.' },
      { q: 'Faut-il une visioconférence ?', a: 'Ce n’est pas obligatoire, mais c’est presque toujours souhaitable : les membres à distance doivent pouvoir suivre les débats avant de voter. Nous nous articulons avec l’outil de visioconférence que vous utilisez déjà.' }
    ], 'hybride-faq')}
  </div>
</section>
`
};

module.exports = [enLigne, boitier, hybride];
