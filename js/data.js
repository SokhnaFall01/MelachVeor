/* =========================================================
   MELACH VE'OR — Contenus du site
   Ce fichier centralise tous les contenus éditoriaux :
   pour ajouter un livre, un verset ou une sélection,
   il suffit de compléter les listes ci-dessous.
   ========================================================= */

window.MV = window.MV || {};

/* ---------- Réglages généraux ---------- */
MV.SITE = {
  nom: "MELACH VE’OR",
  signature: "Des lectures pour nourrir la pensée, fortifier la foi et éclairer le monde.",
  // Adresse de réception du formulaire de contact (à confirmer).
  emailContact: "contact@melachveor.com",
  // Facultatif : URL d'un service de formulaire (ex. Formspree).
  // Laisser vide pour ouvrir la messagerie du visiteur.
  formulaireEndpoint: ""
};

/* ---------- Thématiques ---------- */
MV.THEMES = [
  {
    id: "chretiens",
    nom: "Livres chrétiens",
    court: "Chrétiens",
    icone: "flamme",
    description: "Pour approfondir la foi, la prière et la vie intérieure.",
    longue: "Foi, Bible, témoignages, théologie, méditation et développement spirituel : des lectures pour enraciner sa foi et la vivre avec profondeur."
  },
  {
    id: "romans",
    nom: "Romans & littérature",
    court: "Romans",
    icone: "livre",
    description: "Des récits qui élargissent le cœur et le regard.",
    longue: "Romans contemporains, grands classiques, biographies et récits inspirants : la fiction comme chemin vers la vérité de l’humain."
  },
  {
    id: "politique",
    nom: "Politique",
    court: "Politique",
    icone: "colonnes",
    description: "Pour penser la cité, les institutions et notre pouvoir d’agir.",
    longue: "Histoire politique, géopolitique, démocratie, citoyenneté et actualité : comprendre les forces qui façonnent nos sociétés."
  },
  {
    id: "culture",
    nom: "Culture",
    court: "Culture",
    icone: "palette",
    description: "Pour élargir son regard sur les idées, les images et les arts.",
    longue: "Philosophie, art, histoire et découvertes culturelles : des ouvrages pour nourrir la curiosité et affiner le regard."
  },
  {
    id: "societe",
    nom: "Société",
    court: "Société",
    icone: "personnes",
    description: "Pour mieux comprendre les liens qui nous relient et nous transforment.",
    longue: "Psychologie, éducation, relations humaines et questions sociales : des clés pour mieux vivre ensemble."
  }
];

/* ---------- Entrées « selon votre envie » ---------- */
MV.ENVIES = [
  { id: "mediter",    nom: "Méditer",    icone: "lune",     description: "Des lectures lentes, pour faire silence et laisser résonner une parole." },
  { id: "comprendre", nom: "Comprendre", icone: "loupe",    description: "Des livres clairs pour saisir une idée, une époque ou une question." },
  { id: "debattre",   nom: "Débattre",   icone: "bulles",   description: "Des ouvrages qui bousculent et nourrissent la discussion." },
  { id: "decouvrir",  nom: "Découvrir",  icone: "boussole", description: "Pour ouvrir une porte vers un univers que l’on connaît peu." },
  { id: "evader",     nom: "S’évader",   icone: "plume",    description: "Des histoires qui emportent loin, et ramènent un peu changé." }
];

/* ---------- Livres ----------
   appreciation : note éditoriale de 1 à 5
   niveau : « Accessible », « Intermédiaire » ou « Exigeant »
   liens : (à terme) liens vers les librairies, ex.
     [{ nom: "Ma librairie", url: "https://..." }]
*/
MV.LIVRES = [
  {
    id: "les-fondements-du-christianisme",
    titre: "Les Fondements du christianisme",
    auteur: "C. S. Lewis",
    annee: 1952,
    theme: "chretiens",
    envies: ["comprendre", "mediter"],
    appreciation: 5,
    libelle: "Lecture lumineuse",
    niveau: "Accessible",
    une: true,
    resume: "Une présentation limpide et chaleureuse de la foi chrétienne, pensée pour le lecteur curieux comme pour le croyant.",
    presentation: [
      "Issu de causeries radiophoniques données à la BBC pendant la Seconde Guerre mondiale, ce livre expose avec une clarté remarquable ce que les chrétiens ont en commun, au-delà de leurs différences.",
      "Avec humour et rigueur, C. S. Lewis part de l’expérience morale de chacun pour cheminer vers les grandes affirmations de la foi. Un classique qui continue d’accompagner ceux qui cherchent comme ceux qui croient."
    ],
    pourquoi: "Parce qu’il réconcilie l’intelligence et la foi, sans jargon, et qu’il offre des mots simples pour parler de l’essentiel.",
    pourQui: "Celles et ceux qui découvrent la foi, ou qui veulent mieux en rendre compte."
  },
  {
    id: "les-confessions",
    titre: "Les Confessions",
    auteur: "Augustin d’Hippone",
    annee: 400,
    anneeTexte: "vers 400",
    theme: "chretiens",
    envies: ["mediter"],
    appreciation: 5,
    libelle: "Un classique de l’âme",
    niveau: "Exigeant",
    resume: "Le récit intime d’une quête de vérité, écrit comme une longue prière adressée à Dieu.",
    presentation: [
      "Augustin y relit sa jeunesse, ses errances, ses passions et ses recherches intellectuelles jusqu’à sa conversion. Mais le livre est bien plus qu’une autobiographie : c’est une méditation sur le temps, la mémoire et le désir.",
      "Seize siècles plus tard, sa célèbre intuition — « notre cœur est sans repos tant qu’il ne repose en toi » — parle encore à chacun."
    ],
    pourquoi: "Pour découvrir l’une des voix fondatrices de la spiritualité chrétienne, d’une étonnante modernité.",
    pourQui: "Les lecteurs prêts à prendre leur temps, un chapitre à la fois."
  },
  {
    id: "le-prix-de-la-grace",
    titre: "Le Prix de la grâce",
    auteur: "Dietrich Bonhoeffer",
    annee: 1937,
    theme: "chretiens",
    envies: ["mediter", "debattre"],
    appreciation: 5,
    libelle: "À méditer longtemps",
    niveau: "Intermédiaire",
    une: true,
    resume: "Une méditation exigeante sur le Sermon sur la montagne et sur ce que coûte vraiment le fait de suivre le Christ.",
    presentation: [
      "Pasteur et théologien allemand, Dietrich Bonhoeffer écrit ce livre alors que l’Église de son pays est mise à l’épreuve par le régime nazi. Il y oppose la « grâce à bon marché », qui n’engage à rien, à la grâce qui transforme toute une vie.",
      "Son commentaire du Sermon sur la montagne — où résonnent les paroles sur le sel de la terre et la lumière du monde — est un appel à une foi incarnée et courageuse."
    ],
    pourquoi: "Parce que la vie même de son auteur donne un poids unique à chacune de ses pages.",
    pourQui: "Celles et ceux qui veulent relier foi et engagement."
  },
  {
    id: "la-force-d-aimer",
    titre: "La Force d’aimer",
    auteur: "Martin Luther King",
    annee: 1963,
    theme: "chretiens",
    envies: ["mediter", "debattre"],
    appreciation: 4,
    libelle: "Lecture qui relève",
    niveau: "Accessible",
    resume: "Des sermons où la foi devient force de justice, de non-violence et de réconciliation.",
    presentation: [
      "Rassemblés au cœur du combat pour les droits civiques, ces sermons montrent comment l’Évangile nourrit l’engagement de Martin Luther King : aimer ses ennemis, résister sans haïr, espérer contre toute attente.",
      "Une parole à la fois spirituelle et profondément politique, qui garde toute sa force aujourd’hui."
    ],
    pourquoi: "Pour voir comment une foi vivante peut éclairer les combats d’une société.",
    pourQui: "Tous les lecteurs, croyants ou non, sensibles aux questions de justice."
  },
  {
    id: "les-miserables",
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    annee: 1862,
    theme: "romans",
    envies: ["evader", "mediter"],
    appreciation: 5,
    libelle: "Un monument",
    niveau: "Intermédiaire",
    une: true,
    resume: "La rédemption de Jean Valjean, et une immense fresque sur la misère, la justice et la miséricorde.",
    presentation: [
      "Tout commence par un geste de pardon : celui de Mgr Myriel envers un ancien bagnard. Ce geste va bouleverser la vie de Jean Valjean et le lancer sur un chemin de conversion, poursuivi sans relâche par l’inspecteur Javert.",
      "Roman d’aventure, roman social et roman spirituel, Les Misérables interroge la loi et la grâce, la chute et le relèvement."
    ],
    pourquoi: "Parce qu’il montre, mieux que bien des traités, la puissance transformatrice de la bonté.",
    pourQui: "Les lecteurs qui aiment les grandes fresques — et ceux qui n’ont vu que les adaptations."
  },
  {
    id: "pleure-o-pays-bien-aime",
    titre: "Pleure, ô pays bien-aimé",
    auteur: "Alan Paton",
    annee: 1948,
    theme: "romans",
    envies: ["evader", "comprendre"],
    appreciation: 4,
    libelle: "Lecture bouleversante",
    niveau: "Accessible",
    resume: "Un vieux pasteur zoulou part à Johannesburg à la recherche de son fils, dans une Afrique du Sud déchirée.",
    presentation: [
      "Le révérend Stephen Kumalo quitte son village pour retrouver son fils parti à la ville. Ce qu’il découvre va croiser le destin d’un riche propriétaire blanc, et ouvrir un chemin inattendu de compassion.",
      "Écrit dans une langue d’une grande beauté, ce roman est un cri d’amour pour un pays et un appel à la réconciliation."
    ],
    pourquoi: "Pour sa langue poétique et sa foi discrète, qui éclaire sans jamais faire la leçon.",
    pourQui: "Celles et ceux qui aiment les romans où l’intime rejoint l’histoire."
  },
  {
    id: "gilead",
    titre: "Gilead",
    auteur: "Marilynne Robinson",
    annee: 2004,
    theme: "romans",
    envies: ["mediter", "evader"],
    appreciation: 4,
    libelle: "Lecture apaisante",
    niveau: "Intermédiaire",
    resume: "La lettre d’un vieux pasteur à son jeune fils : un roman lumineux sur la grâce de l’ordinaire.",
    presentation: [
      "Dans une petite ville de l’Iowa, le révérend John Ames, se sachant bientôt mourant, écrit à son fils encore enfant. Il lui raconte sa famille, sa foi, ses doutes, et l’émerveillement devant la beauté simple du monde.",
      "Couronné par le prix Pulitzer, ce roman contemplatif se lit comme une prière tranquille."
    ],
    pourquoi: "Parce qu’il apprend à regarder chaque jour comme un don.",
    pourQui: "Les lecteurs qui aiment les livres lents et habités."
  },
  {
    id: "de-la-democratie-en-amerique",
    titre: "De la démocratie en Amérique",
    auteur: "Alexis de Tocqueville",
    annee: 1835,
    anneeTexte: "1835–1840",
    theme: "politique",
    envies: ["comprendre", "debattre"],
    appreciation: 5,
    libelle: "Toujours d’actualité",
    niveau: "Exigeant",
    resume: "Un regard visionnaire sur la démocratie, ses promesses et ses fragilités.",
    presentation: [
      "Envoyé aux États-Unis pour étudier le système pénitentiaire, le jeune Tocqueville en revient avec une analyse d’une ampleur inédite sur la société démocratique : l’égalité, les associations, la religion, la liberté de la presse.",
      "Il y pressent aussi les dangers propres aux démocraties, comme l’individualisme ou la « tyrannie de la majorité »."
    ],
    pourquoi: "Pour comprendre d’où viennent nombre de nos débats contemporains.",
    pourQui: "Celles et ceux qui veulent penser la politique en profondeur."
  },
  {
    id: "un-long-chemin-vers-la-liberte",
    titre: "Un long chemin vers la liberté",
    auteur: "Nelson Mandela",
    annee: 1994,
    theme: "politique",
    envies: ["decouvrir", "comprendre"],
    appreciation: 5,
    libelle: "Lecture qui inspire",
    niveau: "Accessible",
    une: true,
    resume: "L’autobiographie d’un homme qui a traversé vingt-sept ans de prison sans renoncer à la réconciliation.",
    presentation: [
      "De son enfance dans le Transkei à son élection à la présidence de l’Afrique du Sud, Nelson Mandela retrace son combat contre l’apartheid, ses années de détention à Robben Island et la longue maturation de sa pensée politique.",
      "Un témoignage sur le courage, la patience et la force du pardon dans l’histoire d’un peuple."
    ],
    pourquoi: "Parce qu’il rappelle que l’engagement politique peut être porté par une grande hauteur morale.",
    pourQui: "Tous les lecteurs, et particulièrement les plus jeunes."
  },
  {
    id: "1984",
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    theme: "politique",
    envies: ["debattre", "evader"],
    appreciation: 4,
    libelle: "À mettre en discussion",
    niveau: "Accessible",
    resume: "Le roman d’un monde où la vérité elle-même est contrôlée : une alerte toujours vive.",
    presentation: [
      "Winston Smith travaille au ministère de la Vérité, où l’on réécrit sans cesse le passé. Sous l’œil de Big Brother, il tente de préserver un espace de pensée libre.",
      "Plus qu’une dystopie, 1984 est une réflexion sur le langage, la mémoire et la liberté intérieure."
    ],
    pourquoi: "Pour aiguiser son esprit critique face aux manipulations du langage et de l’information.",
    pourQui: "Les lecteurs qui aiment les romans d’idées."
  },
  {
    id: "pensees",
    titre: "Pensées",
    auteur: "Blaise Pascal",
    annee: 1670,
    theme: "culture",
    envies: ["mediter", "debattre"],
    appreciation: 5,
    libelle: "À lire lentement",
    niveau: "Exigeant",
    resume: "Les fragments d’un génie qui voulait défendre la foi chrétienne auprès des esprits sceptiques.",
    presentation: [
      "Publiées après sa mort, les Pensées rassemblent les notes de Pascal pour une apologie du christianisme restée inachevée. On y croise le « roseau pensant », le divertissement, le fameux pari, et des fulgurances sur la grandeur et la misère de l’homme.",
      "Un texte majeur de la philosophie et de la littérature française, qui se lit par petites touches."
    ],
    pourquoi: "Parce que Pascal parle à la raison comme au cœur, et que ses questions sont les nôtres.",
    pourQui: "Les esprits curieux, croyants ou sceptiques."
  },
  {
    id: "voir-le-voir",
    titre: "Voir le voir",
    auteur: "John Berger",
    annee: 1972,
    theme: "culture",
    envies: ["decouvrir", "comprendre"],
    appreciation: 4,
    libelle: "Regard renouvelé",
    niveau: "Accessible",
    resume: "Pour apprendre à voir autrement les images qui façonnent nos imaginaires.",
    presentation: [
      "Né d’une série télévisée de la BBC, ce petit livre a changé la manière de regarder la peinture et la publicité. John Berger montre comment notre regard est toujours façonné par ce que nous savons et croyons.",
      "Un essai court et stimulant, pour ne plus jamais regarder une image de la même façon."
    ],
    pourquoi: "Pour développer un regard plus libre et plus attentif dans un monde saturé d’images.",
    pourQui: "Tous les curieux d’art, sans connaissances préalables."
  },
  {
    id: "histoire-de-l-art",
    titre: "Histoire de l’art",
    auteur: "Ernst Gombrich",
    annee: 1950,
    theme: "culture",
    envies: ["decouvrir"],
    appreciation: 4,
    libelle: "Une porte d’entrée",
    niveau: "Accessible",
    resume: "Le grand récit de l’art, des grottes préhistoriques à l’époque moderne, raconté avec clarté.",
    presentation: [
      "Devenu un classique dans le monde entier, ce livre raconte l’histoire de l’art comme une aventure continue, où chaque génération répond à la précédente.",
      "Gombrich écrit pour être compris de tous : un compagnon idéal pour visiter un musée ou découvrir l’art sacré."
    ],
    pourquoi: "Parce qu’il donne des repères solides et l’envie de regarder les œuvres de près.",
    pourQui: "Les lecteurs qui veulent une vue d’ensemble, sans jargon."
  },
  {
    id: "decouvrir-un-sens-a-sa-vie",
    titre: "Découvrir un sens à sa vie",
    auteur: "Viktor E. Frankl",
    annee: 1946,
    theme: "societe",
    envies: ["mediter", "comprendre"],
    appreciation: 5,
    libelle: "Lecture qui relève",
    niveau: "Accessible",
    resume: "Un psychiatre rescapé des camps témoigne : même au cœur de l’épreuve, l’homme peut trouver un sens.",
    presentation: [
      "Viktor Frankl raconte d’abord son expérience des camps de concentration, puis expose la logothérapie, l’approche qu’il a développée : ce qui nous fait tenir, c’est la recherche d’un sens.",
      "Un livre bref et profond, qui a aidé des millions de lecteurs à traverser leurs propres épreuves."
    ],
    pourquoi: "Parce qu’il ouvre un chemin d’espérance sans jamais minimiser la souffrance.",
    pourQui: "Toute personne en quête de sens, à n’importe quel moment de sa vie."
  },
  {
    id: "resonance",
    titre: "Résonance",
    auteur: "Hartmut Rosa",
    annee: 2016,
    theme: "societe",
    envies: ["comprendre", "debattre"],
    appreciation: 4,
    libelle: "À lire lentement",
    niveau: "Exigeant",
    resume: "Une réflexion sensible sur l’accélération, l’écoute et la qualité de nos relations au monde.",
    presentation: [
      "Après avoir analysé l’accélération de nos sociétés, le sociologue Hartmut Rosa propose une piste : la « résonance », cette relation vivante où le monde nous touche et où nous lui répondons.",
      "Nature, art, travail, amitié, religion : l’auteur explore les lieux où une vie bonne devient possible."
    ],
    pourquoi: "Pour mettre des mots sur le sentiment de saturation de nos vies, et entrevoir une autre manière d’habiter le monde.",
    pourQui: "Les lecteurs prêts pour un essai dense mais éclairant."
  },
  {
    id: "l-enracinement",
    titre: "L’Enracinement",
    auteur: "Simone Weil",
    annee: 1949,
    theme: "societe",
    envies: ["debattre", "mediter"],
    appreciation: 4,
    libelle: "À mettre en discussion",
    niveau: "Exigeant",
    resume: "Une pensée puissante sur les besoins de l’âme et les conditions d’une société juste.",
    presentation: [
      "Écrit à Londres en 1943, peu avant sa mort, ce texte devait aider à penser la reconstruction de la France. Simone Weil y décrit les « besoins de l’âme » — ordre, liberté, responsabilité, vérité — et le mal du déracinement.",
      "Philosophe, militante et mystique, elle livre une réflexion où le spirituel et le politique ne se séparent jamais."
    ],
    pourquoi: "Parce qu’il relie avec audace la vie intérieure et la vie de la cité.",
    pourQui: "Les lecteurs qui aiment les pensées fortes et singulières."
  }
];

/* ---------- Sélections éditoriales ---------- */
MV.SELECTIONS = [
  {
    id: "sel-et-lumiere",
    titre: "Sel et lumière : habiter le monde avec espérance",
    citation: "« Lire, c’est prêter son regard à une autre conscience, puis revenir au monde un peu plus vaste. »",
    texte: "Quatre lectures pour celles et ceux qui veulent tenir ensemble la vie intérieure et l’attention au monde : être sel qui donne du goût, lumière qui éclaire sans éblouir.",
    livres: ["gilead", "decouvrir-un-sens-a-sa-vie", "resonance", "la-force-d-aimer"],
    une: true
  },
  {
    id: "foi-et-engagement",
    titre: "Foi et engagement",
    citation: "« Que votre lumière luise ainsi devant les hommes. » — Matthieu 5:16",
    texte: "Des femmes et des hommes dont la conviction a façonné l’action : quand croire devient une manière de se tenir debout dans l’histoire.",
    livres: ["le-prix-de-la-grace", "un-long-chemin-vers-la-liberte", "la-force-d-aimer", "l-enracinement"]
  },
  {
    id: "grands-classiques",
    titre: "Les grands classiques à (re)découvrir",
    citation: "« Un classique est un livre qui n’a jamais fini de dire ce qu’il a à dire. » — Italo Calvino",
    texte: "Ils ont traversé les siècles et continuent de parler à notre époque. Une invitation à revenir aux sources.",
    livres: ["les-miserables", "les-confessions", "pensees", "de-la-democratie-en-amerique"]
  }
];

/* ---------- Versets (Louis Segond 1910) ---------- */
MV.VERSETS = [
  { ref: "Matthieu 5:13-14", texte: "Vous êtes le sel de la terre. […] Vous êtes la lumière du monde. Une ville située sur une montagne ne peut être cachée.", reflexion: "Le verset fondateur de MELACH VE’OR : une vocation à donner du goût et de la clarté là où nous sommes." },
  { ref: "Psaume 46:11", texte: "Arrêtez, et sachez que je suis Dieu.", reflexion: "Un rappel doux pour ralentir et accueillir le silence." },
  { ref: "Psaume 119:105", texte: "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier.", reflexion: "Une lumière suffisante pour le pas suivant, même quand le chemin entier reste dans l’ombre." },
  { ref: "Jean 8:12", texte: "Je suis la lumière du monde ; celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie.", reflexion: "La lumière n’est pas d’abord une idée, mais une présence que l’on suit." },
  { ref: "Proverbes 4:7", texte: "Voici le commencement de la sagesse : acquiers la sagesse, et avec tout ce que tu possèdes acquiers l’intelligence.", reflexion: "Chercher à comprendre est déjà un acte de sagesse." },
  { ref: "Philippiens 4:8", texte: "Que tout ce qui est vrai, tout ce qui est honorable, tout ce qui est juste, tout ce qui est pur, tout ce qui est aimable, tout ce qui mérite l’approbation, ce qui est vertueux et digne de louange, soit l’objet de vos pensées.", reflexion: "Une belle boussole pour choisir ce qui nourrit nos pensées… et nos lectures." },
  { ref: "Romains 12:2", texte: "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l’intelligence.", reflexion: "La foi n’éteint pas la pensée : elle la renouvelle." },
  { ref: "Ésaïe 40:31", texte: "Mais ceux qui se confient en l’Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; ils courent, et ne se lassent point, ils marchent, et ne se fatiguent point.", reflexion: "Une promesse pour les jours où l’élan manque." },
  { ref: "Psaume 23:1", texte: "L’Éternel est mon berger : je ne manquerai de rien.", reflexion: "Quelques mots simples qui portent une paix immense." },
  { ref: "Colossiens 4:6", texte: "Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel, afin que vous sachiez comment il faut répondre à chacun.", reflexion: "Le sel, encore : une parole qui a du goût et de la douceur, même dans le débat." },
  { ref: "Jacques 1:5", texte: "Si quelqu’un d’entre vous manque de sagesse, qu’il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.", reflexion: "La sagesse se reçoit autant qu’elle se cherche." },
  { ref: "Michée 6:8", texte: "On t’a fait connaître, ô homme, ce qui est bien ; et ce que l’Éternel demande de toi, c’est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu.", reflexion: "Justice, miséricorde, humilité : trois mots pour toute une vie." },
  { ref: "Ecclésiaste 3:1", texte: "Il y a un temps pour tout, un temps pour toute chose sous les cieux.", reflexion: "Il y a aussi un temps pour lire, et pour laisser une lecture mûrir." },
  { ref: "Matthieu 5:16", texte: "Que votre lumière luise ainsi devant les hommes, afin qu’ils voient vos bonnes œuvres, et qu’ils glorifient votre Père qui est dans les cieux.", reflexion: "Une lumière qui ne se garde pas pour soi, mais se partage." }
];
