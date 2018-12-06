
const areaList = ["carverne", "montagne", "désert", "forêt", "plaine", "ruisseau", "marécage", "ville", "plaine étrange", "toundra"];
const monsterList = ["ours", "fennec", "troll",, "piranha", "fantôme", "cactus", "zombie", "yéti"];
const objectList = ["poêle", "roche", "hameçon", "poisson", "huile", "lampe", "pelle", "VIPI"];
const actionList = ["dormir", "manger", "explorer", "fuir"];
// Action
const actionTextList = {
    quebecois : {
        dormir : {
          caverne : {text: "Tu t'endors dans une caverne ben weat",},
          montagne : {text: "Tu t'endors full essoufler",},
          désert : {text: "Tu t'endors pis y fait frette",},
          forêt : {text: "Tu t'endors avec une racine dans l'dos ",},
          plaine : {text: "Tu t'endors avec du foin dans cheveux",},
          ruisseau : {text: "Tu t'endors les pieds dans l'eau",},
          marécage : {text: "Tu t'endors en puant",},
          ville : {text: "Tu t'endors pis t'es ben",},
          "plaine étrange" : {text: "Tu t'endors...",},
          toundra : {text: "Tu t'endors pis y fait fretttttteeeeee!",},
        },
        manger : {
          caverne : {text: "Tu trouves des choses pas mal moisies",},
          montagne : {text: "Tu trouves presque inque des roches",},
          désert : {text: "Tu trouves presque inque du sable",},
          forêt : {text: "Tu trouves des fruits sauvages",},
          plaine : {text: "Tu trouves pas mal inque de l'herbe",},
          ruisseau : {text: "Tu catch des poissons",},
          marécage : {text: "Tu trouves des trucs qui puent",},
          ville : {text: "Tu achètes de la bouffe à un marchand",},
          "plaine étrange" : {text: "Tu trouves de la bouffe ... étrange",},
          toundra : {text: "Tu trouves des choses gelés",},
        },
        explorer : {
          caverne : {text: "Tu explores les recoins",},
          montagne : {text: "Tu vires autour des roches",},
          désert : {text: "Tu tasses du sable",},
          forêt : {text: "Tu tasses des feuilles",},
          plaine : {text: "Tu écrapoutilles des brins d'herbe",},
          ruisseau : {text: "Tu passes la tête sous l'eau",},
          marécage : {text: "Tu t'pinces le nez",},
          ville : {text: "Tu marches, ben safe",},
          "plaine étrange" : {text: "Tu explores l'endroit étrange",},
          toundra : {text: "Tu fais un bonhomme de neige",},
        },
        fuir : {
          caverne : {text: "Tu dégages d'la caverne",},
          montagne : {text: "Tu dégages pis tu t'essoufles",},
          désert : {text: "Tu dégages pis tu sues",},
          forêt : {text: "Tu dégages pis en te prennant des branches dans face",},
          plaine : {text: "Tu dégages en écrapoutissant de l'herbe",},
          ruisseau : {text: "Tu dégages en faisant splash splash",},
          marécage : {text: "Tu dégages et tu te prends des moustiques en pleine face",},
          ville : {text: "Tu dégages de la ville",},
          "plaine étrange" : {text: "Tu dégages dans une ambiance étrange",},
          toundra : {text: "Tu dégages en crissant des dents",},
        }
    },
    français : {
        dormir : {
          caverne : {text: "Tu t'endors dans une caverne humide",},
          montagne : {text: "Tu t'endors à bout de souffle",},
          désert : {text: "Tu t'endors dans le froid",},
          forêt : {text: "Tu t'endors sur une grosse racine",},
          plaine : {text: "Tu t'endors les cheveux plein de foin",},
          ruisseau : {text: "Tu t'endors avec les pieds dans l'eau",},
          marécage : {text: "Tu t'endors en ne sentant pas la rose",},
          ville : {text: "Tu t'endors confortablement",},
          "plaine étrange" : {text: "Tu t'endors",},
          toundra : {text: "Tu t'endors en grelottant",},
        },
        manger : {
          caverne : {text: "Tu trouves des trucs tout moisis",},
          montagne : {text: "Tu ne trouves pratiquement que des cailloux",},
          désert : {text: "Tu ne trouves pratiquement que du sable",},
          forêt : {text: "Tu trouves des fruits",},
          plaine : {text: "Tu ne trouves pratiquement que de l'herbe",},
          ruisseau : {text: "Tu attrapes des poissons",},
          marécage : {text: "Tu trouves des choses nauséabondes",},
          ville : {text: "Tu achètes à manger chez un marchand",},
          "plaine étrange" : {text: "Tu trouves de la nourriture... étrange",},
          toundra : {text: "Tu trouves des trucs gelés",},
        },
        explorer : {
          caverne : {text: "Tu explores les environs",},
          montagne : {text: "Tu vadrouilles autour des roches",},
          désert : {text: "Tu creuses dans le sable",},
          forêt : {text: "Tu remues les feuilles au sol",},
          plaine : {text: "Tu écrases l'herbe",},
          ruisseau : {text: "Tu mets la tête dans l'eau",},
          marécage : {text: "Tu te bouches le nez",},
          ville : {text: "Tu marches, en toute sécurité",},
          "plaine étrange" : {text: "Tu explore cet étrange endroit",},
          toundra : {text: "Tu fais un bonhome de neige"},
        },
        fuir : {
          caverne : {text: "Tu décampes hors de la caverne",},
          montagne : {text: "Tu décampes en t'essoufflant",},
          désert : {text: "Tu décampes en transpirant",},
          forêt : {text: "",},
          plaine : {text: "",},
          ruisseau : {text: "",},
          marécage : {text: ""},
          ville : {text: ""},
          "plaine étrange" : {text: ""},
          toundra : {text: ""},
        }
    }
}

const monsterTextList = {
  quebecois : {
    ours : {
      arrivee : {text : "Un ours enragé arrive"},
      attaque : {text : "L'ours t'griffe"},
      fuite : {text : "Tu fuis les pattes griffues d'l'ours"},
      suivi : {text : "L'ours t'poursuit"}
    }, fennec : {
      arrivee : {text : "Un fennec avec des méga oreilles arrive"},
      attaque : {text : "Un fennec t'mords"},
      fuite : {text : "Tu fuis le fennec"},
      suivi : {text : "L'fennec t'poursuit"}
    }, troll : {
      arrivee : {text : "Un gros troll arrive"},
      attaque : {text : "L'gros troll te balance une taloche"},
      fuite : {text : "Tu fuis le gros troll"},
      suivi : {text : "L'troll t'poursuit"}
    }, piranha : {
      arrivee : {text : "Un piranha aux dents pointues arrive"},
      attaque : {text : "L'pirahna t'mords"},
      fuite : {text : "Tu fuis le pirahna"},
      suivi : {text : "L'pirahna saute hors de l'eau et t'poursuit"}
    } , fantôme : {
      arrivee : {text : "Un fantôme arrive"},
      attaque : {text : "L'fantôme te fou la frousse"},
      fuite : {text : "Tu fuis l'fantôme"},
      suivi : {text : "Le fantôme t'poursuit"}
    }, cactus : {
      arrivee : {text : "Un cactus arrive (enfin...)"},
      attaque : {text : "L'cactus te pique"},
      fuite : {text : "Tu fuis le cactus (ah ouin?)"},
      suivi : {text : "Étonnament, le cactus t'poursuit..."}
    }, zombie : {
      arrivee : {text : "Un zombie arrive"},
      attaque : {text : "L'zombie essaye de manger ton cerveau"},
      fuite : {text : "Tu fuis l'zombie"},
      suivi : {text : "Le zombie t'poursuit"}
    }, yéti : {
      arrivee : {text : "Un yéti arrive"},
      attaque : {text : "L'yéti t'saute dessus"},
      fuite : {text : "Tu fuis l'yéti"},
      suivi : {text : "L'yéti t'poursuit"}
    }
  },
  français : {
    ours : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""},

    }, fennec : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""},
    }, troll : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    }, piranha : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    } , fantôme : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    }, cactus : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    }, zombie : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    }, yéti : {
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""}
    }
  }
}

const locationInfo = {
  caverne : {
    monsterList : ["ours","fennec","troll",],
    backgroundColor: "#795548",
    chanceModifier: 90,
  },
  montagne : {monsterList : ["ours","fennec","troll","yéti"],
    backgroundColor: "#9e9e9e",
    chanceModifier: 10,
  },
  désert : {monsterList : ["fennec","cactus",],
    backgroundColor: "#fff9c4",
    chanceModifier: 80,
  },
  forêt : {monsterList : ["ours","troll","zombie",],
    backgroundColor: "#388e3c",
    chanceModifier: 100,
  },
  plaine : {monsterList : ["fennec","zombie",],
   backgroundColor: "#dce775",
   chanceModifier: 95,
  },
  ruisseau : {monsterList : ["ours","piranha","zombie",],
   backgroundColor: "#80deea",
   chanceModifier: 100,
  },
  marécage : {monsterList : ["fantôme","zombie",],
   backgroundColor: "#00897b",
   chanceModifier: 70,
  },
  ville : {monsterList : ["fantôme","zombie",],
    backgroundColor: "#90a4ae",
    chanceModifier: 35,
  },
  "plaine étrange" : {monsterList : [],
    backgroundColor: "#f48fb1",
    chanceModifier: 5,
  },
  toundra : {monsterList : ["ours","troll","yéti"],
    backgroundColor: "#c5cae9",
    chanceModifier: 50,
  },
}


const monsterAtLocationList = {
  caverne : ["ours","fennec","troll",],
  montagne : ["ours","fennec","troll","yéti"],
  désert : ["fennec","cactus",],
  forêt : ["ours","troll","zombie",],
  plaine : ["fennec","zombie",],
  ruisseau : ["ours","piranha","zombie",],
  marécage : ["fantôme","zombie",],
  ville : ["fantôme","zombie",],
  "plaine étrange" : [],
  toundra : ["ours","troll","yéti"],
}

export default{
  areaList,
  monsterList,
  objectList,
  actionList,
  locationInfo,
};

