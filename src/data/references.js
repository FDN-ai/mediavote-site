/* Organisations clientes dont le logo est publié.
   Publication autorisée par Alexis Rollemberg le 27/09/2026 (arbitrage n° 5, docs/PLAN-V2.md §6) ;
   dossier complet remis par Mediavote le 12/11/2026 (recettage V02, brief : quatre catégories).
   Sources : assets/sources/logos/ (encodage : python3 tools/visuels.py --logos).

   `accueil: true` retient le logo dans le bandeau condensé de la page d'accueil ;
   `sous` garde la sous-famille (syndicats, mutuelles) : non affichée sur la page
   Références, utilisée pour les panneaux des pages secteurs. */

const groupes = [
  {
    id: 'public',
    titre: 'Organismes publics',
    logos: [
      { slug: 'agences-de-l-eau', nom: 'Les Agences de l’eau' },
      { slug: 'agence-eau-adour-garonne', nom: 'Agence de l’eau Adour-Garonne' },
      { slug: 'agence-eau-loire-bretagne', nom: 'Agence de l’eau Loire-Bretagne' },
      { slug: 'cci-france', nom: 'CCI — Chambre de commerce et d’industrie' },
      { slug: 'cci-paris', nom: 'CCI Paris Île-de-France' },
      { slug: 'cci-occitanie', nom: 'CCI Occitanie' },
      { slug: 'cci-toulouse', nom: 'CCI Toulouse Haute-Garonne' },
      { slug: 'cci-lot-et-garonne', nom: 'CCI Lot-et-Garonne' },
      { slug: 'cese', nom: 'CESE — Conseil économique, social et environnemental', accueil: true },
      { slug: 'ceser-auvergne-rhone-alpes', nom: 'CESER Auvergne-Rhône-Alpes' },
      { slug: 'ceser-ile-de-france', nom: 'CESER Île-de-France' },
      { slug: 'ceser-normandie', nom: 'CESER Normandie' },
      { slug: 'ceser-de-france', nom: 'CESER de France' },
      { slug: 'chru-nancy', nom: 'CHRU de Nancy' },
      { slug: 'cma', nom: 'CMA — Chambre de métiers et de l’artisanat' },
      { slug: 'cma-campus-cvl', nom: 'CMA — Campus des métiers et de l’artisanat Centre-Val de Loire' },
      { slug: 'cnas', nom: 'CNAS — Comité national d’action sociale' },
      { slug: 'cpts-aix-sainte-victoire', nom: 'CPTS Aix Sainte-Victoire' },
      { slug: 'agglomeration-cambrai', nom: 'Communauté d’agglomération de Cambrai' },
      { slug: 'chambre-des-notaires', nom: 'Chambre des notaires' },
      { slug: 'commissaires-de-justice', nom: 'Chambre nationale des commissaires de justice', accueil: true },
      { slug: 'convention-citoyenne-climat', nom: 'Convention citoyenne pour le climat' },
      { slug: 'dreal', nom: 'DREAL — Direction régionale de l’environnement, de l’aménagement et du logement' },
      { slug: 'esante-occitanie', nom: 'e-santé Occitanie' },
      { slug: 'fonjep', nom: 'FONJEP' },
      { slug: 'la-french-tech', nom: 'La French Tech' },
      { slug: 'institut-curie', nom: 'Institut Curie', accueil: true },
      { slug: 'ligue-de-l-enseignement', nom: 'La Ligue de l’enseignement' },
      { slug: 'bois-d-arcy', nom: 'Ville de Bois-d’Arcy' },
      { slug: 'ministere-mer', nom: 'Ministère chargé de la Mer et de la Pêche' },
      { slug: 'ministere-sante', nom: 'Ministère de la Santé et de la Prévention' },
      { slug: 'ministere-sports', nom: 'Ministère des Sports et des Jeux olympiques et paralympiques', accueil: true },
      { slug: 'oru-occitanie', nom: 'ORU Occitanie' },
      { slug: 'planning-familial', nom: 'Le Planning familial' },
      { slug: 'region-normandie', nom: 'Région Normandie', accueil: true },
      { slug: 'smicval', nom: 'SMICVAL' },
      { slug: 'unaf', nom: 'UNAF — Union nationale des associations familiales' },
      { slug: 'univpro', nom: 'Univpro' },
      { slug: 'uttop', nom: 'Université de Technologie Tarbes Occitanie Pyrénées' }
    ]
  },
  {
    id: 'entreprises',
    titre: 'Sociétés privées',
    logos: [
      { slug: 'ajup', nom: 'AJUP — Administrateurs judiciaires' },
      { slug: 'air-france', nom: 'Air France', accueil: true },
      { slug: 'credit-mutuel-arkea', nom: 'Crédit Mutuel Arkéa' },
      { slug: 'bouygues-telecom', nom: 'Bouygues Telecom', accueil: true },
      { slug: 'bureau-veritas', nom: 'Bureau Veritas' },
      { slug: 'cerc-congres', nom: 'CERC Congrès' },
      { slug: 'citya-immobilier', nom: 'Citya Immobilier' },
      { slug: 'credit-agricole', nom: 'Crédit Agricole', accueil: true },
      { slug: 'daimler', nom: 'Daimler' },
      { slug: 'derichebourg', nom: 'Derichebourg Multiservices' },
      { slug: 'elior', nom: 'Elior', accueil: true },
      { slug: 'gcc', nom: 'GCC' },
      { slug: 'gl-events', nom: 'GL events' },
      { slug: 'haribo', nom: 'Haribo' },
      { slug: 'lucy-finance', nom: 'Lucy Finance' },
      { slug: 'le-maine-libre', nom: 'Le Maine Libre' },
      { slug: 'nh-hotels', nom: 'NH Hotels & Resorts' },
      { slug: 'orano', nom: 'Orano', accueil: true },
      { slug: 'pierre-fabre', nom: 'Pierre Fabre' },
      { slug: 'scar', nom: 'SCAR' },
      { slug: 'setec', nom: 'setec' },
      { slug: 'spie-batignolles', nom: 'Spie batignolles' },
      { slug: 'stomea', nom: 'Stomea' },
      { slug: 'strateys', nom: 'Strateys, avocats et stratégie d’entreprise' },
      { slug: 'videlio', nom: 'Videlio' }
    ]
  },
  {
    id: 'federations',
    titre: 'Fédérations, syndicats et mutuelles',
    logos: [
      { slug: 'ff-boxe', nom: 'Fédération française de boxe' },
      { slug: 'ffb', nom: 'FFB — Fédération française du bâtiment' },
      { slug: 'cfjjb', nom: 'Confédération française de jiu-jitsu brésilien' },
      { slug: 'cinov', nom: 'Fédération CINOV' },
      { slug: 'ffessm', nom: 'FFESSM — Fédération française d’études et de sports sous-marins' },
      { slug: 'fff', nom: 'Fédération française de football' },
      { slug: 'ffkmda', nom: 'Fédération française de kick boxing, muay thaï et disciplines associées' },
      { slug: 'ffrs', nom: 'Fédération française de la retraite sportive' },
      { slug: 'fhp', nom: 'FHP — Fédération de l’hospitalisation privée' },
      { slug: 'fnb', nom: 'Fédération nationale du bois' },
      { slug: 'fsasptt', nom: 'Fédération sportive des ASPTT' },
      { slug: 'fscf', nom: 'FSCF — Fédération sportive et culturelle de France' },
      { slug: 'icf', nom: 'International Coaching Federation' },
      { slug: 'ligue-bfc-football', nom: 'Ligue Bourgogne-Franche-Comté de football' },
      { slug: 'navsa', nom: 'NAVSA — Fédération nationale de vente et services automatiques' },
      { slug: 'ff-vol-en-planeur', nom: 'Fédération française de vol en planeur' },
      { slug: 'upl', nom: 'UPL — Union des professions libérales' },
      { slug: 'axema', nom: 'Axema — Union des industriels de l’agroéquipement', sous: 'syndicats' },
      { slug: 'chirurgiens-dentistes-de-france', nom: 'Les Chirurgiens-Dentistes de France', sous: 'syndicats' },
      { slug: 'cfdt', nom: 'CFDT', accueil: true, sous: 'syndicats' },
      { slug: 'cfe-cgc', nom: 'CFE-CGC', sous: 'syndicats' },
      { slug: 'cftc', nom: 'CFTC', sous: 'syndicats' },
      { slug: 'enerplan', nom: 'Enerplan — Syndicat des professionnels de l’énergie solaire', sous: 'syndicats' },
      { slug: 'fspf', nom: 'FSPF — Fédération des syndicats pharmaceutiques de France', sous: 'syndicats' },
      { slug: 'jeunes-agriculteurs', nom: 'Jeunes Agriculteurs', sous: 'syndicats' },
      { slug: 'carac', nom: 'Carac', sous: 'mutuelles' },
      { slug: 'kerialis', nom: 'Kerialis', sous: 'mutuelles' },
      { slug: 'mutualite-francaise', nom: 'Mutualité Française', accueil: true, sous: 'mutuelles' },
      { slug: 'presence-verte', nom: 'Présence Verte', sous: 'mutuelles' },
      { slug: 'solimut', nom: 'Solimut Mutuelle de France', sous: 'mutuelles' },
      { slug: 'mutuelle-de-la-corse', nom: 'Mutuelle de la Corse', sous: 'mutuelles' }
    ]
  },
  {
    id: 'associations',
    titre: 'Associations, coopératives et ONG',
    logos: [
      { slug: 'action-catholique-des-femmes', nom: 'Action catholique des femmes' },
      { slug: 'anem', nom: 'ANEM — Les employeurs de la Mutualité' },
      { slug: 'amnesty-international', nom: 'Amnesty International', accueil: true },
      { slug: 'arpejeh', nom: 'Arpejeh' },
      { slug: 'biocoop', nom: 'Biocoop' },
      { slug: 'biomonde', nom: 'Biomonde' },
      { slug: 'cooperation-agricole-sud', nom: 'La Coopération agricole Sud' },
      { slug: 'renaissance', nom: 'Renaissance' },
      { slug: 'le-guerandais', nom: 'Le Guérandais' },
      { slug: 'lh', nom: 'LH' },
      { slug: 'lions-clubs', nom: 'Lions Clubs International' },
      { slug: 'mjc-de-france', nom: 'MJC de France' },
      { slug: 'mouvement-radical', nom: 'Mouvement radical' },
      { slug: 'passion-beaute', nom: 'Passion Beauté' },
      { slug: 'reporters-sans-frontieres', nom: 'Reporters sans frontières' },
      { slug: 'secours-catholique', nom: 'Secours catholique — Caritas France' },
      { slug: 'unicef', nom: 'UNICEF', accueil: true },
      { slug: 'urps', nom: 'URPS — Union régionale des professionnels de santé' },
      { slug: 'vaincre-la-mucoviscidose', nom: 'Vaincre la mucoviscidose' },
      { slug: 'la-voix-du-nord', nom: 'La Voix du Nord' },
      { slug: 'levenement', nom: 'Lévénement — acteurs de la communication événementielle' },
      { slug: 'urps-infirmiere-paca', nom: 'URPS Infirmière PACA — Union régionale des professionnels de santé' }
    ]
  }
];

/* Clients sous licence annuelle ProVote® — page /offres/licence-annuelle-provote/ (recettage V02, diapositives 21-22). */
const licence = [
  'elior',
  'derichebourg',
  'setec',
  'stomea',
  'lucy-finance',
  'strateys',
  'ministere-mer',
  'dreal',
  'agence-eau-adour-garonne',
  'agence-eau-loire-bretagne',
  'uttop',
  'cci-paris',
  'cci-occitanie',
  'cci-toulouse',
  'cci-lot-et-garonne',
  'cma-campus-cvl',
  'commissaires-de-justice',
  'upl',
  'urps-infirmiere-paca',
  'esante-occitanie',
  'ffkmda'
];

const tous = groupes.flatMap((g) => g.logos);
const logosLicence = licence.map((slug) => tous.find((l) => l.slug === slug));

module.exports = { groupes, licence: logosLicence };
