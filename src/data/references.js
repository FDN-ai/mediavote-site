/* Organisations clientes dont le logo est publié.
   Publication autorisée par Alexis Rollemberg le 27/09/2026 (arbitrage n° 5,
   docs/PLAN-V2.md §6). Logos fournis dans assets/a-integrer/03_logos-clients/.

   Classement par grande famille d'organisations : un visiteur y cherche
   d'abord une structure qui lui ressemble. `accueil: true` retient le logo
   dans le bandeau condensé de la page d'accueil. */

const groupes = [
  {
    id: 'entreprises',
    titre: 'Entreprises',
    logos: [
      { slug: 'elior', nom: 'Elior', accueil: true },
      { slug: 'derichebourg', nom: 'Derichebourg Multiservices', accueil: true },
      { slug: 'setec', nom: 'setec', accueil: true },
      { slug: 'stomea', nom: 'Stomea' },
      { slug: 'lucy-finance', nom: 'Lucy Finance' },
      { slug: 'strateys', nom: 'Strateys, avocats et stratégie d’entreprise' }
    ]
  },
  {
    id: 'public',
    titre: 'Secteur public',
    logos: [
      { slug: 'ministere-mer', nom: 'Ministère chargé de la Mer et de la Pêche', accueil: true },
      { slug: 'dreal', nom: 'DREAL — Direction régionale de l’environnement, de l’aménagement et du logement' },
      { slug: 'agence-eau-adour-garonne', nom: 'Agence de l’eau Adour-Garonne', accueil: true },
      { slug: 'agence-eau-loire-bretagne', nom: 'Agence de l’eau Loire-Bretagne' },
      { slug: 'uttop', nom: 'Université de Technologie Tarbes Occitanie Pyrénées', accueil: true }
    ]
  },
  {
    id: 'consulaires',
    titre: 'Chambres consulaires',
    logos: [
      { slug: 'cci-paris', nom: 'CCI Paris Île-de-France', accueil: true },
      { slug: 'cci-occitanie', nom: 'CCI Occitanie', accueil: true },
      { slug: 'cci-toulouse', nom: 'CCI Toulouse Haute-Garonne' },
      { slug: 'cci-lot-et-garonne', nom: 'CCI Lot-et-Garonne' },
      { slug: 'cma-campus-cvl', nom: 'CMA — Campus des métiers et de l’artisanat Centre-Val de Loire' }
    ]
  },
  {
    id: 'professions',
    titre: 'Organisations professionnelles, santé et sport',
    logos: [
      { slug: 'commissaires-de-justice', nom: 'Chambre nationale des commissaires de justice', accueil: true },
      { slug: 'upl', nom: 'UPL', accueil: true },
      { slug: 'urps-infirmiere-paca', nom: 'URPS Infirmière PACA — Union régionale des professionnels de santé' },
      { slug: 'esante-occitanie', nom: 'e-santé Occitanie', accueil: true },
      { slug: 'ffkmda', nom: 'Fédération française de kick boxing, muay thaï et disciplines associées', accueil: true }
    ]
  }
];

module.exports = { groupes };
