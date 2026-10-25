/* ==========================================================================
   Page pilier Assemblées générales — implémente
   content/solutions/assemblee-generale.md
   ========================================================================== */

const C = require('../components');

const faqItems = [
  { q: 'Nos statuts doivent-ils prévoir le vote électronique ?', a: 'Vos statuts doivent l’autoriser, ou à tout le moins ne pas l’exclure. Beaucoup de statuts restent silencieux sur les modalités de vote, ce qui laisse la voie ouverte — mais certains imposent le vote à main levée ou le vote physique. Votre chef de projet examine ce point avec vous dès la réunion de lancement, et vous indique si une modification statutaire est nécessaire.' },
  { q: 'Comment le quorum est-il calculé pendant l’assemblée ?', a: 'ProVote® le calcule automatiquement à mesure que vos membres émargent, en nombre de suffrages ou en pourcentage selon votre règle statutaire. Il est consultable en temps réel depuis votre accès Pilotage, et peut être affiché ou masqué aux participants. Si votre séance comporte une AGO et une AGE, chaque assemblée dispose de son propre quorum.' },
  { q: 'Peut-on gérer les pouvoirs et limiter leur nombre ?', a: 'Oui. Un membre peut donner pouvoir en amont ou en cours de séance. Si vos statuts limitent le nombre de pouvoirs qu’un votant peut recevoir, la règle est paramétrée et appliquée automatiquement : les pouvoirs excédentaires sont refusés. Les configurations titulaire-suppléant sont également prises en charge.' },
  { q: 'Peut-on voter à bulletin secret ?', a: 'Oui, et vous choisissez vote par vote. Une même assemblée peut comporter des résolutions votées de façon nominative et une élection à bulletin secret. Sur un vote anonyme, l’urne d’émargement et l’urne des bulletins sont séparées : savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté.' },
  { q: 'Peut-on faire voter ensemble des membres présents et à distance ?', a: 'Oui, c’est le vote hybride. Les votes exprimés en salle et à distance sont comptés ensemble, avec un quorum consolidé en temps réel et un résultat unique par résolution. Les membres en salle peuvent voter par boîtier ou depuis leur téléphone, selon la configuration retenue.' },
  { q: 'Nos voix n’ont pas toutes le même poids. Est-ce possible ?', a: 'Oui. Lorsque vos statuts prévoient une pondération — parts sociales, nombre d’adhérents représentés, collèges de poids différents — le poids de chaque votant est intégré au paramétrage et appliqué automatiquement au calcul des résultats.' },
  { q: 'Quels documents obtient-on à l’issue de l’assemblée ?', a: 'Le procès-verbal des résultats en PDF, un export Excel détaillé avec les résultats globaux et le détail des votes nominatifs et anonymes présentés séparément, et le rapport d’émargement complet en PDF et en Excel. Votre accès de consultation reste ouvert après la séance.' },
  { q: 'Le vote en ligne améliore-t-il la participation ?', a: 'Il lève les obstacles matériels : déplacement, créneau imposé, courrier reçu trop tard. Un scrutin ouvert sur plusieurs jours permet à chacun de voter quand il le peut. La progression dépend ensuite de votre communication auprès de vos membres — nous vous conseillons sur les rappels à programmer, sans promettre un chiffre que nous ne maîtrisons pas.' },
  { q: 'Combien de temps faut-il pour préparer une AG ?', a: 'Un mois permet de travailler dans de bonnes conditions : paramétrage, test en situation réelle et ajustements. Nous savons aussi organiser une assemblée dans des délais plus courts. Dites-nous votre échéance, nous vous dirons ce qui est réalisable.' },
  { q: 'Que se passe-t-il si un membre n’arrive pas à voter ?', a: 'Une assistance technique est disponible pendant toute la durée du scrutin, par téléphone et par e-mail. Elle explique comment se connecter, comment voter, et régénère des codes d’accès si le votant a perdu les siens. Un mode accompagné, activable, guide également le votant pas à pas.' }
];

const page = {
  url: '/solutions/vote-electronique-assemblee-generale/',
  title: 'Vote électronique pour assemblée générale | Mediavote',
  description: 'Émargement, quorum, pouvoirs, résolutions et résultats : Mediavote prépare, teste et pilote votre AG en présentiel, à distance ou en hybride.',
  priority: 'P0',
  schema: ['Service', 'FAQPage', 'BreadcrumbList'],
  service: { name: 'Vote électronique pour assemblées générales' },
  heroImage: 'hero-assemblee',
  faqItems,
  breadcrumb: [
    { label: 'Accueil', url: '/' },
    { label: 'Solutions', url: '/solutions/' },
    { label: 'Assemblées générales', url: '/solutions/vote-electronique-assemblee-generale/' }
  ],
  ogImage: '/assets/img/og-assemblee-generale.jpg'
};

const body = `
<!-- ============================================ Hero -->
<section class="hero hero--page">
  ${C.heroPlate('hero-assemblee', { eager: true })}
  <div class="hero__title-wrap">
    <div class="container hero__inner" style="padding-inline:0">
      <div>
        <span class="eyebrow">Assemblées générales</span>
        <h1 style="margin-top:var(--mv-space-4)">Vote électronique pour vos assemblées générales</h1>
        <p class="lead" style="margin-top:var(--mv-space-5)">
          Une assemblée générale se prépare bien avant l’ouverture de la séance. Émargement, quorum,
          pouvoirs, résolutions, procès-verbal : Mediavote paramètre votre AG selon vos statuts,
          la teste avec vous, et la pilote le jour J — en présentiel, à distance ou en hybride.
        </p>
        <div class="btn-group" style="margin-top:var(--mv-space-8)">
          <a class="btn btn--primary" href="/demonstration/">Demander une démonstration AG</a>
          <a class="btn btn--secondary" href="/contact/">Parler de votre projet d’AG</a>
        </div>
      </div>
      <div>
        <div class="hero__visual">${C.picture('provote-mobile', { alt: 'ProVote® sur smartphone : vote de la résolution « Modification des statuts », avec les choix Pour, Contre et Abstention', sizes: '(min-width: 1024px) 26vw, 60vw', lazy: false })}</div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Réponse rapide -->
<section class="section section--tight section--surface">
  <div class="container">
    <h2>Ce que Mediavote prend en charge</h2>
    <div class="grid grid--3" style="margin-top:var(--mv-space-6)">
      <div>
        <h3 style="font-size:var(--mv-text-h4)">Avant</h3>
        <p>Paramétrage de vos résolutions et de vos élections, import de la liste des votants, règles de quorum et de majorité, gestion des pouvoirs, test en conditions réelles avec vos équipes.</p>
      </div>
      <div>
        <h3 style="font-size:var(--mv-text-h4)">Pendant</h3>
        <p>Émargement, ouverture et clôture de chaque vote au rythme du président de séance, suivi du quorum et de la participation en direct, assistance technique pour vos votants.</p>
      </div>
      <div>
        <h3 style="font-size:var(--mv-text-h4)">Après</h3>
        <p>Résultats consolidés, rapports d’émargement et procès-verbaux exportables en PDF et en Excel, accès de consultation maintenu après la séance.</p>
      </div>
    </div>
    <p style="margin-top:var(--mv-space-6);font-size:var(--mv-text-lg);font-weight:600;color:var(--mv-ink)">
      Vous gardez la main sur les décisions. Nous prenons en charge la technologie.
    </p>
  </div>
</section>

<!-- ============================================ Trois formats -->
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Formats',
      title: 'En présentiel, à distance ou en hybride',
      lead: 'Le format n’est pas un détail d’organisation : il détermine le mode de vote, la façon d’émarger et la manière dont le quorum se construit.'
    })}

    <div class="stack--lg">
      <div>
        <h3>Assemblée générale en présentiel</h3>
        <p>Vos membres se réunissent en salle. Deux options selon votre configuration&nbsp;:</p>
        <ul>
          <li><strong>Le vote par boîtier</strong> — l’émargement digital se fait sur site, sur tablette. Les pouvoirs peuvent être paramétrés en amont ou sur place, lors de l’émargement. Un boîtier est remis à chaque votant à l’entrée et les résultats s’affichent dès la clôture de chaque vote. Cette solution ne dépend pas du réseau Internet</li>
          <li><strong>Le vote en ligne sur place</strong> — l’émargement se fait à la connexion sur ProVote® et vous vérifiez le quorum en temps réel. Vos membres votent depuis leur terminal (smartphone, tablette ou ordinateur), connectés à la plateforme ProVote®. Aucun téléchargement ni installation d’application n’est requis</li>
        </ul>
        <p><a class="link-arrow" href="/modes-de-vote/vote-par-boitier/">En savoir plus sur le vote par boîtier en présentiel</a></p>
      </div>

      <div>
        <h3>Assemblée générale à distance</h3>
        <p>Aucun déplacement. Vos membres se connectent depuis un ordinateur, une tablette ou un smartphone, sans rien installer. Deux méthodes possibles pour voter&nbsp;:</p>
        <ul>
          <li><strong>En temps réel (synchrone)</strong> — tout le monde vote au même moment, pendant la séance, souvent en parallèle d’une visioconférence. Chaque vote est ouvert et fermé à la demande du président. Un chef de projet Mediavote gère l’ensemble des ouvertures et fermetures des votes</li>
          <li><strong>Sur une période (asynchrone)</strong> — le scrutin reste ouvert plusieurs heures ou plusieurs jours. Les participants votent en fonction de leur disponibilité. C’est le format qui augmente le plus la participation et permet d’atteindre le quorum de manière systématique</li>
        </ul>
        <p><a class="link-arrow" href="/modes-de-vote/vote-en-ligne/">En savoir plus sur le vote en ligne pour votre AG</a></p>
      </div>

      <div>
        <h3>Assemblée générale hybride</h3>
        <p>Une partie de vos membres est en salle, l’autre à distance. Le quorum s’incrémente en temps réel et les votes sont consolidés en temps réel, que les votants soient sur site ou à distance.</p>
        <p>C’est aujourd’hui la configuration la plus demandée&nbsp;: elle permet de conserver le moment collectif sans exclure ceux qui ne peuvent pas se déplacer.</p>
        <p><a class="link-arrow" href="/modes-de-vote/vote-hybride/">En savoir plus sur l’organisation d’une AG hybride</a></p>
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Quelle solution pour votre AG -->
<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Nos deux solutions',
      title: 'ProVote® à distance, boîtiers en salle',
      lead: 'Pour une AG, les deux solutions conviennent. Le choix dépend de l’endroit où se trouvent vos membres — et vous pouvez les combiner en hybride.'
    })}
    ${C.scrutinSolutions('ag')}
    <div class="videos" style="margin-top:var(--mv-space-14)">
      ${C.video('provote')}
      ${C.video('boitiers')}
    </div>
    <p class="link-row" style="margin-top:var(--mv-space-10)"><a class="link-arrow" href="/modes-de-vote/#comparatif">Comparer ProVote® et les boîtiers de vote</a>
    <a class="link-arrow" href="/solutions/vote-conseil-administration/">Vous organisez aussi des conseils d’administration&nbsp;?</a></p>
  </div>
</section>

<!-- ============================================ Émargement -->
<section class="section section--surface">
  <div class="container">
    <div class="split">
      <div>
        ${C.sectionHead({ eyebrow: 'Feuille de présence', title: 'L’émargement électronique : sécurisation du quorum et traçabilité des présences' })}
        <p>L’émargement constitue un élément essentiel à la vérification du quorum et, par conséquent, à la régularité des délibérations de l’assemblée, conformément aux dispositions légales, réglementaires ou statutaires applicables.</p>
        <p>Lorsqu’il est réalisé manuellement, il peut présenter plusieurs risques&nbsp;: erreurs de saisie, difficultés de contrôle des présences, défaut de traçabilité ou production complexe des justificatifs en cas de contestation.</p>
        <p>ProVote® automatise et sécurise la procédure d’émargement, que l’assemblée se déroule en présentiel, à distance ou en format hybride.</p>
        <h3 style="font-size:var(--mv-text-h4);margin-top:var(--mv-space-6)">Des modalités d’émargement adaptées aux exigences de chaque assemblée</h3>
        <ul>
          <li><strong>Émargement simple</strong>&nbsp;: validation de la présence par un clic</li>
          <li><strong>Émargement avec signature électronique</strong>&nbsp;: signature manuscrite réalisée sur écran tactile ou à l’aide d’une souris</li>
          <li><strong>Émargement par case à cocher</strong>&nbsp;: confirmation explicite de la présence du participant</li>
          <li><strong>Émargements successifs</strong>&nbsp;: gestion distincte des présences lorsque plusieurs assemblées se tiennent consécutivement, notamment une assemblée générale ordinaire (AGO) suivie d’une assemblée générale extraordinaire (AGE)</li>
          <li><strong>Enregistrement des sorties de séance</strong>&nbsp;: signalement du départ d’un participant afin de faciliter le suivi des présences et la vérification du quorum en cours de séance</li>
        </ul>
        <h3 style="font-size:var(--mv-text-h4);margin-top:var(--mv-space-6)">Une traçabilité documentaire en cas de contrôle ou de contestation</h3>
        <p>ProVote® permet de générer et de télécharger, à tout moment pendant ou après l’assemblée, un rapport d’émargement aux formats PDF et Excel. Ce document centralise notamment&nbsp;:</p>
        <ul>
          <li>L’identité de chaque participant</li>
          <li>La signature recueillie, selon la modalité d’émargement retenue</li>
          <li>La date et l’heure de l’émargement</li>
          <li>Le statut du participant&nbsp;: présent, attendu ou représenté par un mandataire</li>
          <li>Les informations relatives aux pouvoirs et à leur exercice</li>
        </ul>
        <p>En présence d’une représentation par mandat, la signature du mandataire est associée à la ligne du membre représenté, permettant d’identifier le titulaire du droit de vote et la personne ayant exercé ce droit en son nom.</p>
        <p>Cette traçabilité facilite la vérification des conditions de quorum, la justification des présences et la constitution des éléments probatoires susceptibles d’être produits en cas de contrôle ou de contestation de la régularité des délibérations.</p>
      </div>
      <div class="split__sticky">
        ${C.shot('emargement-signature-liste', { alt: 'Liste de présence ProVote® avec, pour chaque membre, sa signature, l’heure d’émargement et son statut, et la fenêtre de signature ouverte', caption: 'Liste de présence et fenêtre de signature. Données de démonstration.' })}
        ${C.shot('emargement-rapport-signatures', { alt: 'Rapport d’émargement : nom et prénom, signature, date et heure, statut présent ou pouvoir délégué', caption: 'Rapport d’émargement exportable en PDF et en Excel. Données de démonstration.' })}
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Quorum -->
<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div>
        ${C.sectionHead({ eyebrow: 'Quorum', title: 'Le quorum calculé en direct, selon votre règle' })}
        <p>Le quorum est le premier point de vigilance d’une assemblée générale — et le premier motif de report. ProVote® le calcule automatiquement, à mesure que vos membres émargent.</p>
        <ul>
          <li><strong>Exprimé selon votre règle</strong> : en nombre de suffrages ou en pourcentage, selon ce que prévoient vos statuts</li>
          <li><strong>Affiché ou masqué</strong> : vous choisissez si les participants voient le quorum en temps réel, ou s’il reste réservé au bureau</li>
          <li><strong>Plusieurs quorums simultanés</strong> : si vous tenez une assemblée générale ordinaire et une assemblée générale extraordinaire dans la même séance, chacune a son quorum, calculé séparément</li>
          <li><strong>Suivi permanent</strong> : votre accès Pilotage affiche le quorum et le taux de participation à tout instant</li>
        </ul>
        <div class="section--blue" style="padding:var(--mv-space-5);border-radius:var(--mv-radius-lg);margin-top:var(--mv-space-5)">
          <p style="max-width:none"><strong>Ce que cela change concrètement.</strong> Le président de séance sait, à la minute, s’il peut ouvrir les votes. Et si le quorum n’est pas atteint, vous le savez assez tôt pour relancer — pas une fois l’assemblée close.</p>
        </div>
      </div>
      <div>
        ${C.shot('emargement-signature-smartphone', { alt: 'Émargement avec signature électronique sur smartphone : le membre signe du doigt dans la fenêtre de signature ProVote®', caption: 'Émargement à distance, avec signature sur smartphone. Données de démonstration.' })}
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Pouvoirs -->
<section class="section section--surface">
  <div class="container">
   <div class="split" style="align-items:start">
    <div>
    ${C.sectionHead({ eyebrow: 'Pouvoirs', title: 'Les pouvoirs gérés selon vos statuts, pas selon un modèle standard' })}
    <p>C’est le point où la plupart des outils génériques atteignent leur limite. Les règles de représentation varient d’une organisation à l’autre, et elles sont rarement simples.</p>
    <h3 style="font-size:var(--mv-text-h4);margin-top:var(--mv-space-6)">Ce que ProVote® prend en charge</h3>
    <ul>
      <li><strong>Délégation en amont ou en cours de séance.</strong> Un membre qui doit s’absenter peut transmettre son pouvoir pendant l’assemblée</li>
      <li><strong>Limitation du nombre de pouvoirs par votant.</strong> Si vos statuts prévoient qu’un membre ne peut recevoir que deux pouvoirs, la règle est appliquée automatiquement — les pouvoirs excédentaires sont refusés</li>
      <li><strong>Pouvoirs sur tous les votes ou sur certains seulement</strong>, selon votre paramétrage</li>
      <li><strong>Titulaires et suppléants.</strong> Quand vos statuts prévoient qu’un titulaire ne peut donner pouvoir qu’à son suppléant désigné, ProVote® applique cette contrainte</li>
      <li><strong>Exclusion de vote ponctuelle.</strong> En cas de conflit d’intérêts sur une résolution précise, un membre peut suivre le débat et le vote sans pouvoir y prendre part</li>
    </ul>
    </div>
    <figure class="product-shot product-shot--flush" style="margin-top:var(--mv-space-8)">
      ${C.picture('provote-pouvoirs-paysage', { alt: 'Écran ProVote® sur tablette : pour la résolution « Report à nouveau », le votant applique son choix à chacun des pouvoirs qu’il a reçus, chacun avec son poids de vote', sizes: '(min-width: 1024px) 44vw, 92vw' })}
    </figure>
   </div>
  </div>
</section>

<!-- ============================================ Résolutions et élections -->
<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Votes', title: 'Résolutions, motions, élections : tous vos votes dans une même séance' })}
    <div class="grid grid--2">
      <div>
        <h3>Résolutions et motions</h3>
        <ul>
          <li>Libellés des choix personnalisables — au-delà de « Pour, Contre, Abstention », vous pouvez adapter le vocabulaire à vos usages, et ajouter un quatrième bouton pour les membres qui ne prennent pas part au vote</li>
          <li><strong>Calcul automatique du résultat</strong> : majorité simple, absolue ou qualifiée, selon ce que vous définissez</li>
          <li><strong>Base de calcul paramétrable</strong> : sur tous les votants, sur tous les participants, ou sur les seuls « pour » et « contre »</li>
          <li>Ajout ou retrait d’un vote <strong>en cours d’assemblée</strong>, si une résolution est amendée ou retirée en séance</li>
          <li>Affichage graphique des résultats, ou résultat chiffré seul</li>
        </ul>
      </div>
      <div>
        <h3>Élections</h3>
        <ul>
          <li>Scrutin uninominal, à un ou deux tours</li>
          <li>Scrutin plurinominal</li>
          <li>Scrutin de liste</li>
          <li>Candidature hors liste, y compris déclarée en séance</li>
          <li>Vote par collèges</li>
        </ul>
        <h3 style="margin-top:var(--mv-space-6)">Vote secret ou nominatif</h3>
        <p>Vous choisissez, <strong>vote par vote</strong>, si le scrutin est anonyme ou nominatif. Une même assemblée peut comporter des résolutions votées à main levée numérique — donc traçables — et une élection à bulletin secret.</p>
        <h3 style="margin-top:var(--mv-space-6)">Pondération des voix</h3>
        <p>Lorsque vos statuts prévoient que toutes les voix ne se valent pas — parts sociales, nombre d’adhérents représentés, collèges à poids différents — le poids de chaque votant est intégré au paramétrage et appliqué automatiquement au calcul.</p>
      </div>
    </div>
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/provote/fonctionnalites/">Voir toutes les fonctionnalités de ProVote®</a></p>
  </div>
</section>

${C.prodNote(`<p><strong>Vérification fonctionnelle requise (réf. V6.1).</strong>
L’ensemble de ce bloc provient de la plaquette <em>ProVote® by Mediavote — AG</em>. Chaque fonctionnalité doit être
vérifiée en démonstration sur la version en production avant publication. Point à confirmer en particulier :
la plaquette mentionne le scrutin uninominal à un et deux tours, mais ne cite pas explicitement le second tour
pour les scrutins de liste en AG.</p>`)}

<!-- ============================================ Préparation -->
<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Méthode',
      title: 'Votre assemblée est répétée avant d’être jouée',
      lead: 'Nous ne découvrons pas votre assemblée le jour J. Voici comment se déroule la préparation.'
    })}
    ${C.timeline([
      { step: 'J-30', title: 'Réunion de lancement', text: 'Visioconférence avec votre chef de projet, accompagnée d’une démonstration adaptée à votre cas. Nous formalisons vos besoins dans un document de brief et fixons ensemble les dates du rétroplanning.', deliverable: 'le kit de gestion de projet, en quatre documents.' },
      { step: 'J-15', title: 'Paramétrage', text: 'À partir de votre ordre du jour et de votre liste de votants, votre chef de projet crée la session : libellés, règles de majorité, quorum, pouvoirs, collèges, interfaces des votants.', deliverable: 'le mode d’emploi destiné à vos membres.' },
      { step: 'J-5', title: 'Test en conditions réelles', text: 'Vous testez votre session avec les personnes de votre choix, jusqu’à vingt. Vous vérifiez que le paramétrage correspond à vos statuts. Nous ajustons si nécessaire.', deliverable: 'votre accès Pilotage, en lecture seule.' },
      { step: 'Jour J', title: 'La séance', text: 'Votre chef de projet ouvre et ferme chaque vote à la demande du président de séance, et gère les imprévus : un pouvoir arrivé en dernière minute, un libellé à corriger, une candidature déclarée en séance.', deliverable: 'les procès-verbaux et rapports d’émargement.' }
    ])}

    <div class="split" style="margin-top:var(--mv-space-10)">
      <div>
        <h3>Pourquoi le test de J-5 compte</h3>
        <p>C’est le moment où les écarts se révèlent — un libellé ambigu, une règle de majorité mal comprise, un collège oublié. <strong>Il vaut mieux les découvrir à J-5 qu’en séance.</strong></p>
        <p>Votre chef de projet connaît les règles applicables aux assemblées générales et les contraintes statutaires. Il vous conseille sur le paramétrage — il ne se contente pas d’appliquer ce que vous demandez.</p>
      </div>
      <div>
        <h3>L’accès Pilotage</h3>
        <p>Un accès en lecture seule, partageable avec vos scrutateurs, votre huissier ou votre avocat. Il permet de suivre l’émargement, le quorum et les votes sans pouvoir rien modifier — aucune erreur n’est donc possible depuis cet accès.</p>
        <p>Pour une assemblée en temps réel, votre chef de projet est présent, en visioconférence ou sur place. Une assistance technique est disponible pour vos votants, par téléphone et par e-mail.</p>
      </div>
    </div>
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Le détail de notre accompagnement</a></p>
  </div>
</section>

${C.prodNote(`<p><strong>Présence physique — périmètre à préciser (réf. V6.9).</strong>
La plaquette AG mentionne une « présence physique pour AG synchrone » dans le pack Prestation, sans préciser
si elle est systématique ou sur demande, ni son périmètre géographique. Formulation prudente retenue :
« en visioconférence ou sur place ».</p>`)}

<!-- ============================================ Résultats -->
<section class="section">
  <div class="container">
    <div class="split split--reverse">
      <div>
        ${C.sectionHead({ eyebrow: 'Résultats', title: 'Des résultats immédiats, des documents opposables' })}
        <p>À la clôture de chaque vote, le résultat est calculé et partagé en séance. À l’issue de l’assemblée, vous disposez de l’ensemble des pièces justificatives.</p>
        <ul>
          <li>Le <strong>procès-verbal des résultats</strong>, en PDF</li>
          <li>L’<strong>export détaillé en Excel</strong>, avec un onglet par nature de résultat : résultats globaux, votes nominatifs et votes anonymes présentés séparément</li>
          <li>Le <strong>rapport d’émargement</strong> complet, en PDF et en Excel</li>
          <li>Un accès de consultation qui <strong>reste ouvert après la séance</strong></li>
        </ul>
        <p>Ces documents constituent la trace de votre assemblée. En cas de contestation, ils permettent d’établir qui a voté, quand, et selon quelles règles le résultat a été calculé — sans jamais révéler le sens d’un vote secret.</p>
      </div>
      <div>
        ${C.shot('pilotage-tableau-quorum', { alt: 'Tableau de bord ProVote® d’une assemblée : présents et attendus en individus et en voix, quorum atteint, téléchargement des rapports PDF et Excel', caption: 'Quorum atteint et rapports téléchargeables depuis l’accès Pilotage. Données de démonstration.' })}
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Deux offres -->
<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Offres',
      title: 'Vous faire accompagner, ou reprendre la main',
      center: true
    })}
    <div class="grid grid--2">
      ${C.card({
        title: 'L’accompagnement sur mesure',
        text: 'Mediavote pilote votre assemblée. Un chef de projet prépare, paramètre, teste et accompagne la séance. Vous vous concentrez sur le fond.',
        meta: '**Pour vous si :** vous tenez une à trois assemblées par an, vos statuts sont complexes, ou l’enjeu de cette AG est important.',
        link: '/offres/accompagnement-sur-mesure/',
        linkLabel: 'Découvrir l’accompagnement'
      })}
      ${C.card({
        title: 'La licence annuelle ProVote®',
        text: 'Vous pilotez vos sessions vous-même, avec la formation de vos équipes et l’assistance technique de Mediavote.',
        meta: '**Pour vous si :** vous organisez plus de quatre assemblées par an, ou vous cumulez AG, conseils d’administration et consultations tout au long de l’année.',
        link: '/offres/licence-annuelle-provote/',
        linkLabel: 'Découvrir la licence annuelle'
      })}
    </div>
    <div class="section--blue" style="margin-top:var(--mv-space-6);padding:var(--mv-space-5);border-radius:var(--mv-radius-lg)">
      <p style="max-width:none"><strong>Vous hésitez ?</strong> C’est la question la plus fréquente, et la réponse dépend surtout de votre fréquence de scrutins. Nous vous orientons honnêtement lors de la démonstration — y compris si la licence vous convient mieux qu’une prestation.</p>
    </div>
  </div>
</section>

<!-- ============================================ Cadres statutaires -->
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Cadres statutaires',
      title: 'Associations, mutuelles, entreprises, organismes publics',
      lead: 'Une assemblée générale d’association loi 1901 ne se déroule pas comme l’assemblée d’une mutuelle ou d’un conseil d’établissement public. Ce sont vos textes qui commandent le paramétrage.'
    })}
    <div class="table-scroll" tabindex="0" role="region" aria-label="Cadres statutaires et règles de vote associées">
      <table>
        <caption class="visually-hidden">Correspondance entre le cadre statutaire et ce qui structure le vote</caption>
        <thead><tr><th scope="col">Cadre</th><th scope="col">Ce qui structure le vote</th></tr></thead>
        <tbody>
          <tr><th scope="row">Associations et fédérations</th><td>Adhérents dispersés, pouvoirs nombreux, quorum souvent difficile à atteindre, collèges d’adhérents. <a href="/secteurs/associations-federations/">Voir la page secteur</a></td></tr>
          <tr><th scope="row">Mutuelles et organismes de gouvernance</th><td>Sociétaires, délégués, pondération des voix, obligations statutaires strictes. <a href="/secteurs/entreprises-mutuelles/">Voir la page secteur</a></td></tr>
          <tr><th scope="row">Sociétés</th><td>Assemblées d’actionnaires ou d’associés, pondération par parts, quorum et majorités renforcées.</td></tr>
          <tr><th scope="row">Organismes publics et institutions</th><td>Instances délibératives, commissions, exigences de continuité et d’accessibilité. <a href="/secteurs/organismes-publics/">Voir la page secteur</a></td></tr>
          <tr><th scope="row">Fédérations professionnelles et sportives</th><td>Collèges, représentation des structures affiliées, agréments à respecter.</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ============================================ Participation -->
<section class="section section--surface">
  <div class="container container--narrow">
    ${C.sectionHead({ eyebrow: 'Participation', title: 'Des dispositifs adaptés pour lever les freins à la participation' })}
    <p>ProVote® intègre plusieurs fonctionnalités destinées à faciliter l’exercice du droit de vote, à simplifier l’accès au scrutin et à limiter les contraintes matérielles ou techniques susceptibles de décourager la participation des électeurs.</p>
    <ul>
      <li><strong>Une période de vote étendue</strong>&nbsp;: possibilité d’organiser un scrutin sur plusieurs jours, permettant à chaque électeur de voter selon ses disponibilités, dans le respect du calendrier électoral défini</li>
      <li><strong>Un accès sans installation préalable</strong>&nbsp;: connexion à la plateforme depuis un simple lien, sur ordinateur, tablette ou smartphone, sans téléchargement de logiciel</li>
      <li><strong>Une interface intuitive et ergonomique</strong>&nbsp;: présentation claire des résolutions ou des candidatures soumises au vote, afin de faciliter la compréhension et l’expression du suffrage</li>
      <li><strong>Un dispositif d’accompagnement personnalisé</strong>&nbsp;: activation d’un mode guidé permettant à l’électeur d’être accompagné étape par étape tout au long du processus de vote</li>
      <li><strong>Une procédure de renouvellement des identifiants</strong>&nbsp;: possibilité de régénérer les codes d’accès en cas de perte, selon une procédure sécurisée, afin de permettre à l’électeur d’exercer son droit de vote</li>
    </ul>
    <h3 style="font-size:var(--mv-text-h4);margin-top:var(--mv-space-6)">Une démarche visant à favoriser la participation électorale</h3>
    <p>Le taux de participation dépend de plusieurs facteurs propres à chaque organisation, notamment la mobilisation des électeurs, les modalités de communication et les enjeux du scrutin.</p>
    <p>ProVote® contribue à réduire les obstacles techniques, matériels et organisationnels à l’exercice du droit de vote, sans préjuger du niveau de participation effectivement atteint.</p>
    <p>Mediavote accompagne également les organisateurs dans la définition d’une stratégie de communication adaptée, notamment par la programmation de rappels destinés à informer les électeurs et à encourager leur participation avant la clôture du scrutin.</p>
  </div>
</section>

<!-- ============================================ FAQ -->
<section class="section">
  <div class="container">
    ${C.sectionHead({ eyebrow: 'Questions fréquentes', title: 'Vos questions sur le vote électronique en assemblée générale' })}
    ${C.faq(faqItems, 'ag-faq')}
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/faq/">Toutes nos questions fréquentes</a></p>
  </div>
</section>

<!-- ============================================ CTA final -->
${C.ctaBand({
  title: 'Voyez votre propre assemblée générale, avant de la tenir',
  text: 'Dites-nous comment se déroule votre AG : vos résolutions, votre règle de quorum, vos pouvoirs. Nous vous montrons comment elle se déroulerait dans ProVote® — sur votre cas réel, pas sur une démonstration générique.',
  primary: { label: 'Demander une démonstration AG', url: '/demonstration/' },
  secondary: { label: 'Parler de votre projet d’AG', url: '/contact/' },
  note: '30 à 45 minutes, en visioconférence. Sans engagement.'
})}

${C.prodNote(`<p><strong>Bloc témoignage retiré (Q-B7, réf. V7.2).</strong> Aucun témoignage nominatif disponible pour une AG.
Emplacement prévu entre « Participation » et « FAQ ». Besoin : nom, fonction, organisation, format d’AG, année, accord écrit.</p>
<p><strong>Lien vers /securite-conformite/ non posé</strong> — page en statut bloqué (Q-A1). Emplacement prévu en fin
de bloc « Résolutions et élections ».</p>`)}
`;

module.exports = { page, body };
