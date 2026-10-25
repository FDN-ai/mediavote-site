# Formulaires — fonctionnement et raccordement

**État au 27/09/2026 : aucun formulaire n'envoie de données.** L'interface, la validation, la reprise
des réponses du configurateur et la protection contre les robots sont en place et testées
(`qa/v2-interactions.mjs`). La destination d'envoi reste à choisir (Q-B8). Tant qu'elle ne l'est pas,
le formulaire affiche un message explicite et donne le téléphone et l'e-mail de Media Vote :
aucun envoi n'est simulé.

## Les trois formulaires

| Formulaire | Page | Champs transmis |
|---|---|---|
| Fin du configurateur | Accueil, `/modes-de-vote/` | nom, organisation, email, telephone, echeance, message, **source=configurateur, vote, mode, type_organisation, votants, recommandation**, consentement |
| Démonstration | `/demonstration/` | organisation, nom, email, telephone, scrutin, mode, votants, echeance, message, type_organisation, consentement |
| Contact | `/contact/` | nom, org, mail, msg, consentement |

Les valeurs `vote`, `mode`, `votants` utilisent les mêmes identifiants que `src/data/configurateur.json`
(`ag`, `hybride`, `150-299`…) : l'équipe commerciale reçoit une demande déjà qualifiée.

Un visiteur qui clique sur « Demander une démonstration » depuis le résultat du configurateur arrive sur
`/demonstration/?vote=ag&mode=hybride&organisation=entreprise&votants=150-299` : les listes sont
pré-remplies et une note l'en informe.

## Protection contre les robots (demande « captcha » du To Do)

Mise en place **sans service tiers, sans cookie et sans gêne pour le visiteur** :

1. **Champ leurre** `site_web`, invisible et hors du parcours clavier. Un humain ne le remplit jamais.
2. **Horodatage** `ouvert_a`, posé par le script à l'ouverture de la page. Une soumission en moins de
   3 secondes est refusée.

Ces deux contrôles arrêtent les robots simples côté navigateur. **Ils doivent être refaits par le service
d'envoi**, car un script côté navigateur se contourne : rejeter toute requête où `site_web` n'est pas
vide ou où `maintenant − ouvert_a < 3 s`.

### Si un vrai captcha devient nécessaire

**Cloudflare Turnstile** : gratuit, sans cookie de suivi, le plus souvent invisible pour le visiteur,
plus respectueux que reCAPTCHA. Il demande une clé de site (publique) dans la page et une vérification
de jeton par le service d'envoi (clé secrète). À activer au moment du raccordement, si le spam le justifie.

## Options de raccordement (Q-B8)

| Option | Principe | Coût indicatif | Remarque |
|---|---|---|---|
| Webhook vers le CRM (Zoho, si confirmé) | Le formulaire poste vers une URL fournie par le CRM | Inclus dans l'abonnement CRM | Les leads arrivent directement dans l'outil commercial |
| Service de formulaires (Formspree, Basin, Web3Forms…) | Le formulaire poste vers le service, qui envoie un e-mail | Offres gratuites limitées, puis ~10 à 20 €/mois | Le plus rapide à mettre en place ; données chez un tiers |
| Fonction serverless (Cloudflare Worker, Netlify Function) | Petit script qui valide, filtre les robots et envoie un e-mail ou appelle le CRM | Offres gratuites suffisantes | Contrôle total, aucune donnée stockée par un tiers supplémentaire |

Prix indicatifs, à reconfirmer au moment du choix.

## Captcha — Cloudflare Turnstile (préparé le 24/10/2026)

Le débrief Mediavote demande un captcha sur tous les formulaires. L'intégration est en place,
**désactivée tant que la clé n'est pas renseignée** :

1. Créer un widget Turnstile sur le tableau de bord Cloudflare (gratuit) pour le domaine
   `media-vote.com` ; récupérer la **clé de site** et la **clé secrète**.
2. Renseigner `turnstileSiteKey` dans `src/data/site.js`, puis relancer `node build.js --prod`.
   Le contrôle apparaît alors au-dessus de la case de consentement de chaque formulaire, et
   le script refuse toute soumission sans jeton.
3. Au raccordement de l'envoi (Q-B8), le service d'envoi doit vérifier le jeton
   `cf-turnstile-response` auprès de `https://challenges.cloudflare.com/turnstile/v0/siteverify`
   avec la clé secrète — sans cette vérification serveur, le captcha n'arrête rien.

En attendant, le champ leurre et l'horodatage (ci-dessus) restent actifs.
