/* ==========================================================================
   Page d'accueil — implémente content/home.md
   ========================================================================== */

const C = require('../components');

const faqItems = [
  {
    q: 'Le vote électronique est-il légal pour une assemblée générale ?',
    a: 'Oui, sous réserve que vos statuts l’autorisent ou ne l’excluent pas, et que les modalités soient conformes aux textes applicables à votre type d’organisation. Pour les élections CSE, le recours au vote électronique doit être prévu par accord d’entreprise ou, à défaut, par décision unilatérale de l’employeur. Votre chef de projet vérifie ce point avec vous dès la réunion de lancement.'
  },
  {
    q: 'Comment garantissez-vous le secret du vote ?',
    a: 'L’urne d’émargement et l’urne des bulletins sont séparées : savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté. Le dépouillement exige la réunion de plusieurs clés chiffrées, détenues par différents membres du bureau de vote. Aucune personne seule, y compris chez Mediavote, ne peut ouvrir l’urne.'
  },
  {
    q: 'Combien de temps faut-il pour organiser un scrutin ?',
    a: 'Un mois permet de travailler dans de bonnes conditions : paramétrage, test en situation réelle et ajustements. Nous savons aussi organiser un scrutin dans des délais plus courts — dites-nous votre échéance, nous vous dirons ce qui est réalisable.'
  },
  {
    q: 'Le vote en ligne fait-il vraiment progresser la participation ?',
    a: 'Il lève les obstacles matériels : déplacement, disponibilité sur un créneau précis, réception d’un courrier. Un vote ouvert sur plusieurs jours permet à chacun de participer quand il le peut. La progression dépend ensuite de votre organisation et de votre communication — nous vous accompagnons sur ce point, sans promettre un chiffre que nous ne maîtrisons pas.'
  },
  {
    q: 'Peut-on combiner vote en salle et vote à distance ?',
    a: 'Oui. C’est le vote hybride : les votes exprimés sur place et à distance sont comptés ensemble, avec un quorum consolidé en temps réel et un résultat unique par vote. C’est la configuration la plus demandée aujourd’hui pour les assemblées générales.'
  },
  {
    q: 'Combien coûte l’organisation d’un scrutin ?',
    a: 'Cela dépend du nombre de votants, du mode de vote, du niveau d’accompagnement et de la fréquence de vos scrutins. Si vous votez plusieurs fois par an, la licence annuelle est généralement plus avantageuse qu’une prestation ponctuelle. Parlons de votre situation : nous vous répondons précisément.'
  }
];

const page = {
  url: '/',
  title: 'Vote électronique professionnel et vote en ligne | Mediavote',
  description: 'Mediavote organise vos assemblées générales, conseils et élections CSE depuis 1998 : plateforme ProVote®, vote en ligne, boîtier ou hybride, chef de projet dédié.',
  schema: ['Organization', 'WebSite', 'FAQPage'],
  heroImage: 'hero-accueil',
  faqItems,
  ogImage: '/assets/img/og-accueil.jpg'
};

const body = `
<!-- ============================================ Bloc 2 — Hero -->
<section class="hero hero--home">
  ${C.heroPlate('hero-accueil', { eager: true })}

  <div class="hero__title-wrap">
    <span class="eyebrow">Vote électronique professionnel depuis 1998</span>
    <h1 class="hero__display" data-gated>Vote électronique</h1>
  </div>

  <div class="hero__bottom">
    <div>
      <p class="hero__tagline" data-gated data-lines="En toute|confiance"></p>
      <div class="btn-group" style="margin-top:var(--mv-space-6)">
        <a class="btn btn--primary" href="/demonstration/">Demander une démonstration</a>
        <a class="btn btn--secondary" href="/contact/">Parler de votre projet</a>
      </div>
      <p class="btn-note">Démonstration personnalisée sur votre propre scrutin. Sans engagement.</p>
      <p style="margin-top:var(--mv-space-4)"><a class="link-arrow" href="#configurateur">Trouvez votre solution en 4 questions</a></p>
    </div>

    <div class="hero__cluster">
      <div class="slider inview" id="hero-slider" data-gated data-delay="325" data-slides='${C.esc(JSON.stringify([
        { brand: 'Assemblées générales', title: 'Quorum, pouvoirs, résolutions', cta: 'Voir la solution', url: '/solutions/vote-electronique-assemblee-generale/', icon: '<img src="/assets/img/provote-tablette-360.webp" alt="" width="56" height="56" loading="lazy" decoding="async">' },
        { brand: 'Élections CSE', title: 'Dépouillement par clés chiffrées', cta: 'Voir la solution', url: '/solutions/elections-cse/', icon: '<img src="/assets/img/provote-mobile-360.webp" alt="" width="56" height="56" loading="lazy" decoding="async">' },
        { brand: 'Boîtiers de vote HF', title: 'Le vote en salle, sans Internet', cta: 'Découvrir les boîtiers', url: '/modes-de-vote/vote-par-boitier/', icon: '<img src="/assets/img/boitier-main-360.webp" alt="" width="56" height="56" loading="lazy" decoding="async">' }
      ]))}'>
        <div class="glass">
          <div class="slider__card">
            <div class="slider__thumb"></div>
            <div>
              <div class="slider__brand"></div>
              <div class="slider__title"></div>
              <a class="slider__cta" href="/solutions/"></a>
            </div>
          </div>
        </div>
        <div class="dots dots--light" role="tablist" aria-label="Solutions mises en avant"></div>
      </div>

      <article class="glass statcard inview" data-gated data-delay="390">
        <div class="statcard__col">
          <b class="statcard__val">1998</b>
          <div class="statcard__dots" aria-hidden="true">
            <i style="background:#6BB8EE"></i><i style="background:#0A47A8"></i><i style="background:#1F6FB2"></i><i style="background:#ffffff"></i>
          </div>
          <span class="statcard__cap">Année de création</span>
        </div>
        <div class="statcard__fig statcard__fig--picto"><picture><source type="image/webp" srcset="/assets/img/picto-mediavote-320.webp"><img src="/assets/img/picto-mediavote-320.png" alt="" width="320" height="318" decoding="async"></picture></div>
      </article>
    </div>
  </div>
</section>

<!-- ============================================ Bloc 3 — Configurateur
     Outil d'orientation en 4 questions (retour_quizz + maquette
     quiz_entree_tunnel_lead). Il porte le bandeau de réassurance. -->
${C.configurateur()}

${C.prodNote(`<p><strong>Configurateur — règles modifiables sans développement.</strong>
Questions, réponses et recommandations sont décrites dans <code>src/data/configurateur.json</code>.
Règles appliquées : CSE → ProVote® uniquement ; à distance → ProVote® ; hybride → ProVote®, boîtiers en
alternative pour la salle (comme sur la maquette) ; présentiel → boîtiers ou ProVote®. À confirmer par Mediavote :
le <strong>nombre de votants</strong> et le <strong>type d’organisation</strong> ne modifient pas la recommandation,
faute de règle fournie (question « le nombre de votants influence-t-il la recommandation ? » de <code>questions.pdf</code>).</p>
<p>Bandeau de réassurance : « Données hébergées en France » reste retiré tant que l’hébergeur de ProVote®
n’est pas confirmé (Q-B5). Formulation de repli : « Développé en France ».</p>`)}

<!-- ============================================ Bloc 4 — Par besoin -->
<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Par besoin',
      title: 'Quel scrutin devez-vous organiser ?',
      lead: 'Chaque scrutin a ses règles : quorum, pouvoirs, collèges, majorités, confidentialité. Commencez par votre besoin — nous vous orientons vers la solution qui lui correspond.'
    })}
    ${C.numList([
      { title: 'Assemblées générales',
        text: 'Émargement, quorum, pouvoirs, résolutions et procès-verbal. En présentiel, à distance ou en hybride.',
        meta: 'Pour les associations, fédérations, mutuelles, sociétés et organismes publics.',
        link: '/solutions/vote-electronique-assemblee-generale/' },
      { title: 'Conseils d’administration',
        text: 'Des votes rapides et à bulletin secret, en séance comme en consultation écrite, tout au long de l’année.',
        meta: 'Pour les instances qui se réunissent plusieurs fois par an.',
        link: '/solutions/vote-conseil-administration/' },
      { title: 'Élections CSE',
        text: 'Protocole d’accord préélectoral, convocations, dépouillement par clés chiffrées, CERFA et second tour.',
        meta: 'Pour les employeurs d’au moins 11 salariés.',
        link: '/solutions/elections-cse/' },
      { title: 'Consultations et référendums',
        text: 'Consulter salariés, adhérents ou administrés sans convoquer une assemblée générale.',
        meta: 'Pour les décisions qui n’exigent pas la solennité d’une AG.',
        link: '/solutions/consultations-referendums/' }
    ])}
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/solutions/">Voir toutes les solutions</a></p>
  </div>
</section>

<!-- ============================================ Bloc 5 — Deux solutions, à parité -->
<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Nos solutions',
      title: 'Deux solutions de vote, un même accompagnement',
      lead: 'En ligne avec ProVote®, ou en salle avec nos boîtiers de vote : nous maîtrisons les deux depuis 1998, et nous vous disons laquelle convient à votre scrutin — ou pourquoi les deux se valent.'
    })}
    ${C.solutionPair()}
    <div class="grid grid--3" style="margin-top:var(--mv-space-10)">
      <p><strong>À distance&nbsp;?</strong> ProVote®&nbsp;: chacun vote depuis son ordinateur, sa tablette ou son smartphone, en séance ou sur plusieurs jours. <a class="link-arrow" href="/modes-de-vote/vote-en-ligne/">Le vote en ligne</a></p>
      <p><strong>Tous en salle&nbsp;?</strong> Les boîtiers HF&nbsp;: un vote immédiat, sans dépendre du réseau ni des smartphones de vos participants. <a class="link-arrow" href="/modes-de-vote/vote-par-boitier/">Le vote par boîtier</a></p>
      <p><strong>Les deux à la fois&nbsp;?</strong> Le vote hybride&nbsp;: les votes en salle et à distance sont comptés ensemble, avec un quorum consolidé en temps réel. <a class="link-arrow" href="/modes-de-vote/vote-hybride/">Le vote hybride</a></p>
    </div>
    <p style="margin-top:var(--mv-space-8)"><a class="link-arrow" href="/modes-de-vote/#comparatif">Comparer ProVote® et les boîtiers de vote</a></p>
  </div>
</section>

<!-- ============================================ Bloc 6 — Différenciation -->
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Ce qui nous distingue',
      title: 'La technologie sécurise le vote.<br>Notre équipe sécurise le projet.',
      lead: 'Les plateformes de vote présentent des fonctionnalités largement comparables. Ce qui fait la différence, c’est ce qui se passe avant l’ouverture du scrutin — et ce qui se passe quand un imprévu survient en séance.'
    })}
    ${C.ghostHeading(['Préparé', 'Testé', 'Piloté', 'Restitué'], 'Préparé, testé, piloté, restitué')}

    <div class="grid grid--4" style="margin-top:var(--mv-space-14)">
      ${C.card({
        icon: 'interlocuteur',
        variant: 'card--surface',
        title: 'Un interlocuteur unique',
        text: 'Un chef de projet suit votre scrutin du premier échange à la restitution des résultats. Vous avez ses coordonnées directes. Vous ne rappelez pas un standard.'
      })}
      ${C.card({
        icon: 'competence',
        variant: 'card--surface',
        title: 'Une double compétence',
        text: 'Votre chef de projet connaît les outils numériques **et** les règles qui encadrent les assemblées : statuts, quorum, majorités, pouvoirs. Il vous conseille sur le paramétrage, il ne se contente pas de l’exécuter.'
      })}
      ${C.card({
        icon: 'test',
        variant: 'card--surface',
        title: 'Un test avant le jour J',
        text: 'Vous testez votre session dans les conditions réelles, avec les personnes de votre choix. Vous voyez exactement ce que verront vos votants. Vous ajustez si nécessaire.'
      })}
      ${C.card({
        icon: 'assemblee',
        variant: 'card--surface',
        title: 'Une présence en séance',
        text: 'Pour une assemblée en temps réel, votre chef de projet est là — en visioconférence ou sur place. Il ouvre et ferme chaque vote au rythme du président de séance, et gère les aléas.'
      })}
    </div>
    <div class="section--blue" style="margin-top:var(--mv-space-8);padding:var(--mv-space-6);border-radius:var(--mv-radius-lg)">
      <p style="max-width:none;font-size:var(--mv-text-lg);color:var(--mv-ink)">
        Nous sommes une équipe à taille humaine. C’est un choix : il nous permet de connaître vos statuts,
        de vous répondre rapidement, et d’être présents le jour de votre scrutin.
      </p>
      <p style="margin-top:var(--mv-space-4)"><a class="link-arrow" href="/offres/accompagnement-sur-mesure/">Découvrir notre accompagnement</a></p>
    </div>
  </div>
</section>

<!-- ============================================ Bloc 7 — ProVote® -->
<section class="section section--overlap">
  <div class="container">
    <div class="split">
      <div>
        <figure class="product-shot product-shot--flush">
          ${C.picture('pilotage-tableau-de-bord', { alt: 'Accès Pilotage ProVote® : rapport d’émargement avec quorum atteint et rapport de vote d’une résolution adoptée', sizes: '(min-width: 1024px) 40vw, 90vw' })}
          <figcaption>L’accès Pilotage : émargement, quorum et résultats en temps réel — données de démonstration.</figcaption>
        </figure>
      </div>
      <div>
        <span class="eyebrow">Notre plateforme</span>
        <h2 style="margin-top:var(--mv-space-5);line-height:1.02">ProVote®, la plateforme qui s’adapte à vos règles</h2>
        <p class="lead" style="margin-top:var(--mv-space-6)">
          ProVote® est la plateforme de vote électronique développée et exploitée par Mediavote.
          Elle ne vous impose pas un fonctionnement : elle se paramètre selon vos statuts.
        </p>
        <ul style="margin-top:var(--mv-space-8);line-height:1.7">
          <li><strong>Aucune installation.</strong> Vos votants ouvrent un lien, sur ordinateur, tablette ou smartphone</li>
          <li><strong>Résolutions et élections.</strong> Vote pour, contre, abstention, avec libellés personnalisables. Scrutins uninominaux, plurinominaux, de liste</li>
          <li><strong>Quorum calculé automatiquement</strong>, affiché ou masqué selon votre choix</li>
          <li><strong>Pouvoirs et procurations</strong>, y compris la limitation du nombre de pouvoirs par votant et la délégation en cours de séance</li>
          <li><strong>Collèges et pondération des voix</strong>, quand vos statuts l’imposent</li>
          <li><strong>Émargement électronique</strong>, avec signature, case à cocher ou signalement de sortie</li>
          <li><strong>Accès Pilotage</strong> en lecture seule pour vos scrutateurs, votre huissier ou votre avocat</li>
          <li><strong>Résultats et procès-verbaux</strong> exportables en PDF et en Excel</li>
        </ul>
        <div class="btn-group" style="margin-top:var(--mv-space-5)">
          <a class="link-arrow" href="/provote/fonctionnalites/">Voir toutes les fonctionnalités</a>
        </div>
      </div>
    </div>
  </div>
</section>

${C.prodNote(`<p><strong>Fonctionnalités — vérification requise (réf. V6.1).</strong>
Cette liste provient des plaquettes AG et CSE, qui datent. Chaque élément doit être vérifié en démonstration
sur la version en production de ProVote® avant mise en ligne.</p>`)}

<!-- ============================================ Bloc 8 — Accompagnement -->
<section class="section section--dark">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Notre méthode',
      title: 'De la préparation aux résultats, vous savez toujours où vous en êtes',
      lead: 'Un scrutin réussi se joue en amont. Voici comment nous procédons — et ce que nous attendons de vous à chaque étape.'
    })}
    ${C.timeline([
      {
        step: 'J-30',
        title: 'Réunion de lancement',
        text: 'Visioconférence avec votre chef de projet. Démonstration adaptée à votre cas. Nous formalisons vos besoins et fixons ensemble les dates du rétroplanning.',
        deliverable: 'le kit de gestion de projet — brief, matrice des votants, matrice des votes, rétroplanning.'
      },
      {
        step: 'J-15',
        title: 'Paramétrage',
        text: 'Votre chef de projet crée et paramètre votre session : libellés des votes, règles de majorité, gestion des pouvoirs, collèges, quorum, interfaces des votants.',
        deliverable: 'le mode d’emploi destiné à vos votants.'
      },
      {
        step: 'J-5',
        title: 'Test et accès Pilotage',
        text: 'Vous testez la session avec les personnes de votre choix, jusqu’à vingt. Vous voyez exactement ce que verront vos votants. Nous ajustons si nécessaire.',
        deliverable: 'votre accès Pilotage, en lecture seule, partageable avec vos scrutateurs.'
      },
      {
        step: 'Jour J',
        title: 'Émargement, votes et résultats',
        text: 'Ouverture de votre scrutin, en temps réel ou sur une période définie. Suivi du quorum et de la participation en direct. Assistance technique pour vos votants.',
        deliverable: 'les rapports d’émargement et les procès-verbaux de résultats, en PDF et en Excel.'
      }
    ])}
    <p class="timeline__note">
      Ces délais sont ceux d’un projet confortable. Nous savons aussi travailler dans l’urgence :
      <a href="/contact/">parlez-nous de votre échéance</a>.
    </p>
  </div>
</section>

<!-- ============================================ Bloc 9 — Licence annuelle -->
<section class="section">
  <div class="container">
    <div class="licence-band">
      <div class="split">
        <div>
          <span class="eyebrow">Pour les organisations qui votent souvent</span>
          <h2>Plusieurs scrutins par an&nbsp;? Gagnez en autonomie.</h2>
          <p>
            Si vous organisez plusieurs assemblées, conseils ou consultations dans l’année, il devient plus simple —
            et plus économique — de piloter vos sessions vous-même.
          </p>
          <p>
            La <strong>licence annuelle ProVote®</strong> vous donne accès à la plateforme en autonomie, avec la formation
            de vos équipes et l’assistance technique de Mediavote. Vous gardez la main sur votre calendrier,
            sans repasser par une prestation à chaque scrutin.
          </p>
        </div>
        <div>
          <h3>Cette offre est faite pour vous si&nbsp;:</h3>
          <ul>
            <li>Vous tenez plus de quatre assemblées générales par an</li>
            <li>Vous réunissez plus de huit conseils d’administration par an</li>
            <li>Vos votants sont répartis sur plusieurs sites</li>
            <li>Vous souhaitez rationaliser le budget de vos réunions plénières</li>
          </ul>
          <div class="btn-group" style="margin-top:var(--mv-space-8)">
            <a class="btn btn--xl btn--on-dark" href="/offres/licence-annuelle-provote/">
              Découvrir la licence annuelle ${C.icons.arrow}
            </a>
          </div>
          <p style="margin-top:var(--mv-space-5);font-size:var(--mv-text-body)">Vous votez en salle&nbsp;? Nos boîtiers de vote
            s’acquièrent aussi, avec formation et logiciel. <a class="link-arrow" href="/offres/achat-boitiers-de-vote/">L’achat de boîtiers</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================ Bloc 10 — Sécurité -->
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Sécurité',
      title: 'Un scrutin doit être secret, sincère et vérifiable',
      lead: 'La confidentialité du vote et la sincérité du résultat ne se décrètent pas : elles reposent sur des mécanismes précis. Voici les principaux.'
    })}
    <div class="grid grid--4">
      ${C.card({
        icon: 'urnes',
        variant: 'card--proof',
        title: 'Séparation des urnes',
        text: 'L’urne d’émargement et l’urne des bulletins sont strictement séparées. Savoir qu’une personne a voté ne permet pas de savoir ce qu’elle a voté.'
      })}
      ${C.card({
        icon: 'cles',
        variant: 'card--proof',
        title: 'Clés de dépouillement fragmentées',
        text: 'La clé de dépouillement est fragmentée et répartie entre plusieurs membres du bureau de vote. Aucun d’eux ne peut ouvrir l’urne seul : il faut réunir un nombre minimum de clés, que vous définissez.'
      })}
      ${C.card({
        icon: 'canaux',
        variant: 'card--proof',
        title: 'Authentification à deux canaux',
        text: 'Vos votants reçoivent leurs codes par deux canaux distincts, au choix : e-mail, SMS, courrier postal ou code remis en main propre. Vous pouvez combiner les canaux votant par votant.'
      })}
      ${C.card({
        icon: 'journaux',
        variant: 'card--proof',
        title: 'Journaux d’audit',
        text: 'Connexions, accès aux ressources, actions d’administration, modifications de paramétrage et de droits sont journalisés, horodatés et rattachés à un identifiant. Les journaux ne conservent aucune donnée sensible.'
      })}
    </div>
  </div>
</section>

<section class="section section--tight" style="padding-top:0">
  <div class="container">
    <p class="cert-line">
      <strong>Certification.</strong> ProVote® a obtenu en 2022 la certification NF Logiciel — Protection
      des données personnelles (NF&nbsp;552) délivrée par AFNOR Certification.
      <a class="link-arrow" href="/securite-conformite/">Sécurité et conformité</a>
    </p>
  </div>
</section>

${C.prodNote(`<p><strong>Mention AFNOR — formulation validée le 27/09/2026 (arbitrage n° 1).</strong>
Le certificat n° 552/0003-1 (valable du 20/05/2022 au 20/05/2023) n’est pas publié ; la mention est
datée et limite son périmètre à la protection des données personnelles. Restent exclus : la délibération
CNIL 2019-053 <em>(abrogée le 19/03/2026)</em> et l’audit OPPIDA <em>(date et périmètre inconnus)</em>.</p>`)}

<!-- ============================================ Bloc 11 — Références -->
<section class="section section--surface">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Ils nous font confiance',
      title: 'Des organisations de toutes tailles, dans tous les secteurs',
      lead: 'Depuis 1998, Mediavote accompagne des associations, des fédérations, des mutuelles, des entreprises et des organismes publics dans leurs scrutins les plus sensibles.',
      center: true
    })}
    ${C.logoWall({ condensed: true })}
    <p style="margin-top:var(--mv-space-8);text-align:center"><a class="link-arrow" href="/references/">Voir toutes nos références, par secteur</a></p>
  </div>
</section>

<!-- ============================================ Bloc 12 — Typologies -->
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Par type d’organisation',
      title: 'Vos statuts ne ressemblent à aucun autre',
      lead: 'Les règles qui encadrent un vote varient d’une organisation à l’autre. Nous partons de vos textes, pas d’un modèle standard.'
    })}
    <div class="grid grid--3">
      ${C.card({
        icon: 'associations',
        title: 'Associations et fédérations',
        text: 'Adhérents dispersés, pouvoirs nombreux, collèges, quorum difficile à atteindre. L’enjeu est souvent la participation.',
        link: '/secteurs/associations-federations/',
        linkLabel: 'Associations et fédérations'
      })}
      ${C.card({
        icon: 'entreprises',
        title: 'Entreprises et mutuelles',
        text: 'Élections CSE, conseils d’administration, assemblées de sociétaires, pondération des voix. L’enjeu est la conformité et la traçabilité.',
        link: '/secteurs/entreprises-mutuelles/',
        linkLabel: 'Entreprises et mutuelles'
      })}
      ${C.card({
        icon: 'publics',
        title: 'Organismes publics',
        text: 'Instances délibératives, commissions, consultations. L’enjeu est la continuité du service et l’accessibilité à tous les participants.',
        link: '/secteurs/organismes-publics/',
        linkLabel: 'Organismes publics'
      })}
    </div>
  </div>
</section>

<!-- ============================================ Bloc 13 — Témoignage -->
${C.prodNote(`<p><strong>Bloc témoignage retiré (Q-B7, réf. V7.2).</strong>
Aucun témoignage nominatif n’est disponible. Le seul repéré sur le site actuel — « Un outil simple qui fait
gagner du temps », attribué à « Jeunes Agriculteurs » — n’a ni nom, ni fonction, ni date.</p>
<p>Conformément à la règle éditoriale, le bloc est <strong>supprimé plutôt que meublé</strong> par une citation
générique. Besoin : 2 à 4 témoignages nominatifs avec accord écrit. <em>Piste : un article du site actuel cite
nommément Elior au sujet de votes en réunion CSE.</em></p>`)}

<!-- ============================================ Bloc 14 — FAQ -->
<section class="section section--overlap">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Questions fréquentes',
      title: 'Ce que les organisations nous demandent avant de se décider'
    })}
    ${C.faq(faqItems, 'home-faq')}
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/faq/">Toutes nos questions fréquentes</a></p>
  </div>
</section>

<!-- ============================================ Bloc 15 — Actualités
     Les trois derniers articles publiés depuis /admin/ (content/actualites/). -->
${(() => { const A = require('./actualites'); const last = A.articles.filter((x) => !x.draft).slice(0, 3); return last.length ? `
<section class="section">
  <div class="container">
    ${C.sectionHead({
      eyebrow: 'Ressources',
      title: 'Comprendre le vote électronique',
      lead: 'Réglementation, organisation pratique, retours d’expérience : nos analyses pour préparer votre prochain scrutin.'
    })}
    <div class="grid grid--3">${last.map(A.articleCard).join('')}</div>
    <p style="margin-top:var(--mv-space-6)"><a class="link-arrow" href="/actualites/">Toutes nos actualités</a></p>
  </div>
</section>` : ''; })()}

<!-- ============================================ Bloc 16 — CTA final
     Le pied de page porte déjà l'appel à la démonstration : ce bandeau
     renvoie vers le configurateur, pour les visiteurs encore indécis. -->
${C.ctaBand({
  eyebrow: 'Encore un doute ?',
  title: 'Quatre questions suffisent pour trouver votre solution',
  text: 'Type de vote, modalité, organisation, nombre de votants : répondez, et nous vous indiquons la solution adaptée — ProVote®, boîtiers de vote, ou les deux.',
  primary: { label: 'Trouver ma solution', url: '#configurateur' },
  secondary: { label: 'Parler de votre projet', url: '/contact/' },
  note: 'Moins d’une minute. Aucune donnée demandée pour voir le résultat.'
})}
`;

module.exports = { page, body };
