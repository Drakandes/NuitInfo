
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
          "plaine étrange" : {text: "tu t'endors...",},
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
          marécage : {text: "Tu t'pince le nez",},
          ville : {text: "Tu marche, ben safe",},
          "plaine étrange" : {text: "Tu explore l'endroit étrange",},
          toundra : {text: "Tu fais un bonhomme de neige",},
        },
        fuir : {
          caverne : {text: "Tu dégages d'la caverne",},
          montagne : {text: "Tu dégages pis tu t'essoufles",},
          désert : {text: "Tu dégages pis tu sues",},
          forêt : {text: "Tu dégages ",},
          plaine : {text: "T",},
          ruisseau : {text: "",},
          marécage : {text: "",},
          ville : {text: "",},
          "plaine étrange" : {text: "",},
          toundra : {text: "",},
        }
    },
    français : {
        dormir : {
          caverne : {text: "",},
          montagne : {text: "",},
          désert : {text: "",},
          forêt : {text: "",},
          plaine : {text: "",},
          ruisseau : {text: "",},
          marécage : {text: "",},
          ville : {text: "",},
          "plaine étrange" : {text: "",},
          toundra : {text: "",},
        },
        manger : {
          caverne : {text: "",},
          montagne : {text: "",},
          désert : {text: "",},
          forêt : {text: "",},
          plaine : {text: "",},
          ruisseau : {text: "",},
          marécage : {text: "",},
          ville : {text: "",},
          "plaine étrange" : {text: "",},
          toundra : {text: "",},
        },
        explorer : {
          caverne : {text: "",},
          montagne : {text: "",},
          désert : {text: "",},
          forêt : {text: "",},
          plaine : {text: "",},
          ruisseau : {text: "",},
          marécage : {text: "",},
          ville : {text: "",},
          "plaine étrange" : {text: "",},
          toundra : {text: ""},
        },
        fuir : {
          caverne : {text: "",},
          montagne : {text: "",},
          désert : {text: "",},
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
      arrivee : {text : ""},
      attaque : {text : ""},
      fuite : {text : ""},
      suivi : {text : ""},

    }, fennec : {

    }, troll : {

    }, piranha : {

    } , fantôme : {

    }, cactus : {

    }, zombie : {

    }, yéti : {

    }
  },
  français : {

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

export default{
  areaList,
  monsterList,
  objectList,
  actionList,
  locationInfo,
};

