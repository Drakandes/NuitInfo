
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
      suivi : {text : ""}

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
};

