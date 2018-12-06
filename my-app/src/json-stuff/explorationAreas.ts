
const areaList = ["carverne", "montagne", "désert", "forêt", "plaine", "ruine", "ruisseau", "marécage", "ville", "plaine étrange", "toundra"];
const ennemiesList = ["ours", "fennec", "troll", "cactus", "fantôme", "piranha", "fantôme", "cactus", "zombie", "yéti"];
const objectList = ["poêle", "roche", "hameçon", "poisson", "huile", "lampe", "pelle", "VIPI"];
const actionList = ["dormir", "manger", "explorer", "fuir", "feu de camp"];
// Action
const actionTextList = {
    quebecois : {
        dormir : {
          caverne : "Tu t'endors dans une caverne ben weat",
          montagne : "Tu t'endors full essoufler",
          désert : "Tu t'endors pis y fait frette",
          forêt : "Tu t'endors avec une racine dans l'dos ",
          plaine : "Tu t'endors avec du foin dans cheveux",
          ruisseau : "Tu t'endors les pieds dans l'eau",
          marécage : "Tu t'endors en puant",
          ville : "Tu t'endors pis t'es ben",
          "plaine étrange" : "tu t'endors...",
          toundra : "Tu t'endors pis y fait fretttttteeeeee!"
        },
        manger : {
          caverne : "Tu trouves des choses pas mal moisies",
          montagne : "Tu trouves presque inque des roches",
          désert : "Tu trouves presque inque du sable",
          forêt : "Tu trouves des fruits sauvages",
          plaine : "Tu trouves pas mal inque de l'herbe",
          ruisseau : "Tu catch des poissons",
          marécage : "Tu trouves des trucs qui puent",
          ville : "Tu achètes de la bouffe à un marchand",
          "plaine étrange" : "Tu trouves de la bouffe ... étrange",
          toundra : "Tu trouves des choses gelés"
        },
        explorer : {
          caverne : "Tu explores les recoins",
          montagne : "Tu vires autour des roches",
          désert : "Tu tasses du sable",
          forêt : "Tu tasses des feuilles",
          plaine : "Tu écrapoutilles des brins d'herbe",
          ruisseau : "Tu passes la tête sous l'eau",
          marécage : "Tu t'pince le nez",
          ville : "Tu marche, ben safe",
          "plaine étrange" : "Tu explore l'endroit étrange",
          toundra : "Tu fais un bonhomme de neige"
        },
        fuir : {
          caverne : "Tu dégages d'la caverne",
          montagne : "Tu dégages pis tu t'essoufles",
          désert : "Tu dégages pis tu sues",
          forêt : "Tu dégages ",
          plaine : "T",
          ruisseau : "",
          marécage : "",
          ville : "",
          "plaine étrange" : "",
          toundra : ""
        }
    },
    français : {
        dormir : {
          caverne : "",
          montagne : "",
          désert : "",
          forêt : "",
          plaine : "",
          ruisseau : "",
          marécage : "",
          ville : "",
          "plaine étrange" : "",
          toundra : ""
        },
        manger : {

        },
        "chercher bouffe" : {
          caverne : "",
          montagne : "",
          désert : "",
          forêt : "",
          plaine : "",
          ruisseau : "",
          marécage : "",
          ville : "",
          "plaine étrange" : "",
          toundra : ""
        },
        explorer : {
          caverne : "",
          montagne : "",
          désert : "",
          forêt : "",
          plaine : "",
          ruisseau : "",
          marécage : "",
          ville : "",
          "plaine étrange" : "",
          toundra : ""
        },
        fuir : {
          caverne : "",
          montagne : "",
          désert : "",
          forêt : "",
          plaine : "",
          ruisseau : "",
          marécage : "",
          ville : "",
          "plaine étrange" : "",
          toundra : ""
        }
    }

export default{
  areaList,
  ennemiesList,
  objectList,
  actionList
};

