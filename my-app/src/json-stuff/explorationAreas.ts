const areaList = ["carverne", "montagne", "désert", "forêt", "plaine", "ruisseau", "marécage", "ville", "plaine étrange", "toundra"];
const monsterList = ["ours", "fennec", "troll",, "piranha", "fantôme", "cactus", "zombie", "yéti"];
const objectList = ["poêle", "roche", "hameçon", "poisson", "huile", "lampe", "pelle", "VIPI"];
const actionList = ["dormir", "manger", "explorer", "fuir"];

// Action
const actionTextList = {
    quebecois : {
        dormir : {
          tooltiptext : "Tu fais un power nap pour t'remettre sur le piton",
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
          tooltiptext : "Tu bouffes jusqu'à être bourré",
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
          tooltiptext : "T'explores pour trouver de quoi de pas pire",
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
          tooltiptext : "Tu dégages en vitesse à cause du danger",
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
          tooltiptext : "Tu dors pour récupérer de l'énergie",
          caverne : {text: "Tu t'endors dans une caverne humide",},
          montagne : {text: "Tu t'endors à bout de souffle",},
          désert : {text: "Tu t'endors dans le froid",},
          forêt : {text: "Tu t'endors sur une grosse racine",},
          plaine : {text: "Tu t'endors les cheveux plein de foin",},
          ruisseau : {text: "Tu t'endors avec les pieds dans l'eau",},
          marécage : {text: "Tu t'endors en ne sentant pas la rose",},
          ville : {text: "Tu t'endors confortablement",},
          "plaine étrange" : {text: "Tu t'endors...",},
          toundra : {text: "Tu t'endors en grelottant",},
        },
        manger : {
          tooltiptext : "Tu mange pour remplir ta panse",
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
          tooltiptext : "Tu explore les environs",
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
          tooltiptext : "Tu fuis le danger",
          caverne : {text: "Tu décampes hors de la caverne",},
          montagne : {text: "Tu décampes en t'essoufflant",},
          désert : {text: "Tu décampes en transpirant",},
          forêt : {text: "Tu décampes en te prennant des branches dans le visage",},
          plaine : {text: "Tu décampes écrasant l'herbe",},
          ruisseau : {text: "Tu décampes en faisant splash splash",},
          marécage : {text: "Tu décampes en avalant des moustiques"},
          ville : {text: "Tu décampes de la ville"},
          "plaine étrange" : {text: "Tu décampes dans une étrange atmosphère"},
          toundra : {text: "Tu décampes gelé jusqu'aux os"},
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
      attaque : {text : "Un fennec t'mord"},
      fuite : {text : "Tu fuis le fennec"},
      suivi : {text : "L'fennec t'poursuit"}
    }, troll : {
      arrivee : {text : "Un gros troll arrive"},
      attaque : {text : "L'gros troll te balance une taloche"},
      fuite : {text : "Tu fuis le gros troll"},
      suivi : {text : "L'troll t'poursuit"}
    }, piranha : {
      arrivee : {text : "Un piranha aux dents pointues arrive"},
      attaque : {text : "L'pirahna t'mord"},
      fuite : {text : "Tu fuis le pirahna"},
      suivi : {text : "L'pirahna saute hors de l'eau et t'poursuit"}
    } , fantôme : {
      arrivee : {text : "Un fantôme arrive"},
      attaque : {text : "L'fantôme te fout la frousse"},
      fuite : {text : "Tu fuis l'fantôme"},
      suivi : {text : "Le fantôme t'poursuit"}
    }, cactus : {
      arrivee : {text : "Un cactus arrive (enfin...)"},
      attaque : {text : "L'cactus te pique"},
      fuite : {text : "Tu fuis le cactus (ah ouin?)"},
      suivi : {text : "Étonnamment, le cactus t'poursuit..."}
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
      arrivee : {text : "Un ours enragé arrive"},
      attaque : {text : "L'ours te griffe"},
      fuite : {text : "Tu échappes aux pattes griffues de l'ours"},
      suivi : {text : "L'ours te poursuit"}
    }, fennec : {
      arrivee : {text : "Un fennec avec des oreilles géantes arrive"},
      attaque : {text : "Un fennec te mord"},
      fuite : {text : "Tu fuis le fennec"},
      suivi : {text : "Le fennec te poursuit"}
    }, troll : {
      arrivee : {text : "Un gros troll arrive"},
      attaque : {text : "Le gros troll te frappe"},
      fuite : {text : "Tu fuis le gros troll"},
      suivi : {text : "Le troll te poursuit"}
    }, piranha : {
      arrivee : {text : "Un piranha aux dents pointues arrive"},
      attaque : {text : "Le pirahna te mord"},
      fuite : {text : "Tu fuis le pirahna"},
      suivi : {text : "Le pirahna saute hors de l'eau et te poursuit"}
    } , fantôme : {
      arrivee : {text : "Un fantôme arrive"},
      attaque : {text : "Le fantôme te fiche la frousse"},
      fuite : {text : "Tu fuis le fantôme"},
      suivi : {text : "Le fantôme te poursuit"}
    }, cactus : {
      arrivee : {text : "Un cactus arrive (hein...)"},
      attaque : {text : "Le cactus te pique"},
      fuite : {text : "Tu fuis le cactus (sérieux ?)"},
      suivi : {text : "Étonnament, le cactus te poursuit..."}
    }, zombie : {
      arrivee : {text : "Un zombie arrive"},
      attaque : {text : "Le zombie essaye de te manger le cerveau"},
      fuite : {text : "Tu fuis le zombie"},
      suivi : {text : "Le zombie te poursuit"}
    }, yéti : {
      arrivee : {text : "Un yéti arrive"},
      attaque : {text : "Le yéti te saute dessus"},
      fuite : {text : "Tu fuis le yéti"},
      suivi : {text : "Le yéti te poursuit"}
    }
  }
}

const locationInfo = {
  caverne : {
    monsterList : ["ours","fennec","troll",],
    backgroundColor: "#795548",
    chanceModifier: 90,
    healthMinus: 10,
    sleepMinus: 5,
    hungerMinus: 5,
    quebecois : {
      arrivee : {text : "T'arrives dans une caverne"}
    },
    français : {
      arrivee : {text : "Tu entres dans la caverne"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  montagne : {
    monsterList : ["ours","fennec","troll","yéti"],
    backgroundColor: "#9e9e9e",
    chanceModifier: 10,
    healthMinus: 0,
    sleepMinus: 20,
    hungerMinus: 5,
    quebecois : {
      arrivee : {text : "T'arrives à la montagne"}
    },
    français : {
      arrivee : {text : "Tu arrives à la montagne"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  désert : {
    monsterList : ["fennec","cactus",],
    backgroundColor: "#fff9c4",
    chanceModifier: 80,
    healthMinus: 0,
    sleepMinus: 15,
    hungerMinus: 15,
    quebecois : {
      arrivee : {text : "T'arrives dans l'désert pis y fait chaud"}
    },
    français : {
      arrivee : {text : "Tu arrives dans le désert et il fait chaud"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  forêt : {
    monsterList : ["ours","troll","zombie",],
    backgroundColor: "#388e3c",
    chanceModifier: 100,
    healthMinus: 10,
    sleepMinus: 5,
    hungerMinus: 0,
    quebecois : {
      arrivee : {text : "T'arrives en forêt"}
    },
    français : {
      arrivee : {text : "Tu entres dans la forêt"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  plaine : {
    monsterList : ["fennec","zombie",],
    backgroundColor: "#dce775",
    chanceModifier: 95,
    healthMinus: 5,
    sleepMinus: 10,
    hungerMinus: 5,
    quebecois : {
     arrivee : {text : "T'arrives dans la plaine"}
    },
    français : {
      arrivee : {text : "Tu arrives dans la plaine"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  ruisseau : {
    monsterList : ["ours","piranha","zombie",],
    backgroundColor: "#80deea",
    chanceModifier: 100,
    healthMinus: 0,
    sleepMinus: 5,
    hungerMinus: 0,
    quebecois : {
     arrivee : {text : "T'arrives au ruisseau"}
    },
    français : {
      arrivee : {text : "Tu arrives au ruisseau"}
    }
  },
  marécage : {
    monsterList : ["fantôme","zombie",],
    backgroundColor: "#00897b",
    chanceModifier: 70,
    healthMinus: 5,
    sleepMinus: 10,
    hungerMinus: 0,
    quebecois : {
      arrivee : {text : "T'arrives au marécage, pis ça pue"}
    },
    français : {
      arrivee : {text : "Tu entres dans le marécage, et ça sent mauvais"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  ville : {
    monsterList : ["fantôme","zombie",],
    backgroundColor: "#90a4ae",
    chanceModifier: 35,
    healthMinus: 10,
    sleepMinus: 5,
    hungerMinus: 0,
    quebecois : {
      arrivee : {text : "T'arrives en ville"}
    },
    français : {
      arrivee : {text : "Tu entres dans la ville"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  "plaine étrange" : {
    monsterList : [],
    backgroundColor: "#f48fb1",
    chanceModifier: 5,
    healthMinus: 0,
    sleepMinus: 0,
    hungerMinus: 0,
    quebecois : {
      arrivee : {text : "T'arrives dans une plaine ... étrange"}
    },
    français : {
      arrivee : {text : "Tu arrives dans une plaine... étrange"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
  toundra : {
    monsterList : ["ours","troll","yéti"],
    backgroundColor: "#c5cae9",
    chanceModifier: 50,
    healthMinus: 5,
    sleepMinus: 15,
    hungerMinus: 10,
    quebecois : {
      arrivee : {text : "T'arrives dans la toundra et y fait frette!"}
    },
    français : {
      arrivee : {text : "Tu arrives dans la toundra, et tu as froid"}
    },
    chanceSleeping : 50,
    chanceEating : 50,
    chanceFinding : 50,
    chanceRunning : 50,
  },
}

const objectInfo = {
  poêle : {
    quebecois : {
      récupérer : {text : "Tu récupères une poêle là"},
      utiliser : {
        ours : { text : "Tu garroches la poêle et tu pognes l'ours ben fort en pleine face"}, 
        fennec : { text : "Tu garroches la poêle et tu pognes l'fennec ben fort en pleine face" }, 
        troll : { text : "Tu garroches la poêle et tu pognes l'troll ben fort en pleine face"}, 
        piranha : { text : "Tu garroches la poêle et plouf ton attaque tombe à l'eau"} , 
        fantôme : { text : "Tu garroches la poêle et ... rien"}, 
        cactus : { text : "Tu garroches la poêle et tu pognes l'cactus ben fort en pleine face"}, 
        zombie : { text : "Tu garroches la poêle et tu pognes l'zombie ben fort en pleine face"}, 
        yéti : { text : "Tu garroches la poêle et tu pognes l'yéti ben fort en pleine face"}
      }
    },
    français : {
      récupérer : {text : "Tu récupères une poêle"},
      utiliser : {
        ours : { text : "Tu balances la poêle et tu cognes l'ours en plein visage"}, 
        fennec : { text : "Tu balances la poêle et tu cognes le fennec en plein visage" }, 
        troll : { text : "Tu balances la poêle et tu cognes le troll en plein visage"}, 
        piranha : { text : "Tu balances la poêle et plouf ton attaque tombe à l'eau"} , 
        fantôme : { text : "Tu balances la poêle et ... rien"}, 
        cactus : { text : "Tu balances la poêle et tu cognes le cactus en plein visage"}, 
        zombie : { text : "Tu balances la poêle et tu cognes le zombie en pleine face"}, 
        yéti : { text : "Tu balances la poêle et tu cognes le yéti en plein visage"}
      }
    }
  }, 
  roche : {
    quebecois : {
      récupérer : {text : "Tu pognes une roche"},
      utiliser : {
        ours : { text : "Tu garroches la roche et tu pognes l'ours ben fort en pleine face"}, 
        fennec : { text : "Tu garroches la roche et tu pognes l'fennec ben fort en pleine face" }, 
        troll : { text : "Tu garroches la roche et tu pognes l'troll ben fort en pleine face"}, 
        piranha : { text : "Tu garroches la roche et plouf ton attaque tombe à l'eau"} , 
        fantôme : { text : "Tu garroches la roche et ... rien"}, 
        cactus : { text : "Tu garroches la roche et tu pognes l'cactus ben fort en pleine face"}, 
        zombie : { text : "Tu garroches la roche et tu pognes l'zombie ben fort en pleine face"}, 
        yéti : { text : "Tu garroches la roche et tu pognes l'yéti ben fort en pleine face"}
      }
    },
    français : {
      récupérer : {text : "Tu ramasses une pierre"},
      utiliser : {
        ours : { text : "Tu jettes la pierre et tu cognes l'ours en plein visage"}, 
        fennec : { text : "Tu jettes la pierre et tu cognes le fennec en plein visage" }, 
        troll : { text : "Tu jettes la pierre et tu cognes le troll en plein visage"}, 
        piranha : { text : "Tu jettes la pierre et plouf ton attaque tombe à l'eau"} , 
        fantôme : { text : "Tu jettes la pierre et ... rien"}, 
        cactus : { text : "Tu jettes la pierre et tu cognes le cactus en plein visage"}, 
        zombie : { text : "Tu jettes la pierre et tu cognes le zombie en plein visage"}, 
        yéti : { text : "Tu jettes la pierre et tu cognes le yéti en plein visage"}
      }
    }
  }, 
  hameçon : {
    quebecois : {
      récupérer : {text : "Tu pognes un hameçon"},
      utiliser : {
        ours : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..."}, 
        fennec : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..." }, 
        troll : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..."}, 
        piranha : { text : "Tu accroches les piranha au bout de ton hameçon"} , 
        fantôme : { text : "Tu garroches l'hameçon et ... rien"}, 
        cactus : { text : "Tu garroches l'hameçon et ... rien"}, 
        zombie : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..."}, 
        yéti : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..."}
      }
    },
    français : {
      récupérer : {text : "Tu attrapes un hameçon"},
      utiliser : {
        ours : { text : "Tu jettes l'hameçon et tu l'énerves encore plus..."}, 
        fennec : { text : "Tu jettes l'hameçon et tu l'énerves encore plus..." }, 
        troll : { text : "Tu jettes l'hameçon et tu l'énerves encore plus..."}, 
        piranha : { text : "Tu accroches les piranha au bout de ton hameçon"} , 
        fantôme : { text : "Tu jettes l'hameçon et ... rien"}, 
        cactus : { text : "Tu jettes l'hameçon et ... rien"}, 
        zombie : { text : "Tu jettes l'hameçon et tu l'énerves encore plus..."}, 
        yéti : { text : "Tu jettes l'hameçon et tu l'énerves encore plus..."}
      }
    }
  },
  poisson : {
    quebecois : {
      récupérer : {text : "Tu pognes un poisson"},
      utiliser : {
        ours : { text : "Tu garroches le poisson et l'ours le trouve plus intéressant que toi"}, 
        fennec : { text : "Tu garroches le poisson et l'fennec le trouve plus intéressant que toi" }, 
        troll : { text : "Tu garroches le poisson et tu fais juste l'énerver plus..."}, 
        piranha : { text : "Tu garroches le poisson et tu fais juste l'énerver plus..."} , 
        fantôme : { text : "Tu garroches le poisson et ... rien"}, 
        cactus : { text : "Tu garroches le poisson et ... rien"}, 
        zombie : { text : "Tu garroches l'hameçon et tu fais juste l'énerver plus..."}, 
        yéti : { text : "Tu garroches le poisson et l'yéti le trouve plus intéressant que toi"}
      }
    },
    français : {
      récupérer : {text : "Tu attrapes un poisson"},
      utiliser : {
        ours : { text : "Tu jettes le poisson et l'ours le trouve plus intéressant que toi"}, 
        fennec : { text : "Tu jettes le poisson et le fennec le trouve plus intéressant que toi" }, 
        troll : { text : "Tu jettes le poisson et tu l'énerves encore plus..."}, 
        piranha : { text : "Tu jettes le poisson et tu l'énerves encore plus..."} , 
        fantôme : { text : "Tu jettes le poisson et ... rien"}, 
        cactus : { text : "Tu jettes le poisson et ... rien"}, 
        zombie : { text : "Tu jettes l'hameçon et tu fais juste l'énerver plus..."}, 
        yéti : { text : "Tu jettes le poisson et le yéti le trouve plus intéressant que toi"}
      }
    }
  }, huile : 
  {
    quebecois : {
      récupérer : {text : "Tu pognes une flasque d'huile"},
      utiliser : {
        ours : { text : "Tu garroches l'huile et tu fais juste l'énerver plus..."}, 
        fennec : { text : "Tu garroches l'huile et tu l'fais glisser" }, 
        troll : { text : "Tu garroches l'huile et tu fais juste l'énerver plus..."}, 
        piranha : { text : "Tu garroches l'huile et il ne voit plus rien"} , 
        fantôme : { text : "Tu garroches l'huile et ... rien"}, 
        cactus : { text : "Tu garroches l'huile et ... rien"}, 
        zombie : { text : "Tu garroches l'huile et il glisssseee vers l'infini et plus loin encore"}, 
        yéti : { text : "Tu garroches l'huile et tu fais juste l'énerver plus..."}
      }
    },
    français : {
      récupérer : {text : "Tu prends une flasque d'huile"},
      utiliser : {
        ours : { text : "Tu fais couler l'huile et tu l'énerve encore plus..."}, 
        fennec : { text : "Tu fais couler l'huile et tu le fais glisser" }, 
        troll : { text : "Tu fais couler l'huile et tu l'énerve encore plus..."}, 
        piranha : { text : "Tu fais couler l'huile et il ne voit plus rien"} , 
        fantôme : { text : "Tu fais couler l'huile et ... rien"}, 
        cactus : { text : "Tu fais couler l'huile et ... rien"}, 
        zombie : { text : "Tu fais couler l'huile et il glisssseee vers l'infini et au-delà"}, 
        yéti : { text : "Tu fais couler l'huile et tu l'énerve encore plus..."}
      }
    }
  }, lampe :
  {
    quebecois : {
      récupérer : {text : "Tu pognes une lampe"},
      utiliser : {
        ours : { text : "T'éclaires l'ours et tu fais juste l'énerver plus..."}, 
        fennec : { text : "T'éclaires l'fennec et tu fais juste l'énerver plus..." }, 
        troll : { text : "T'éclaires l'troll et tu fais juste l'énerver plus..."}, 
        piranha : { text : "T'éclaires l'piranha et tu fais juste l'énerver plus..."} , 
        fantôme : { text : "T'éclaires l'fantôme et il s'enfuit"}, 
        cactus : { text : "T'éclaires l'cactus et il s'enfuit!!!(Ah ouin?)"}, 
        zombie : { text : "T'éclaires l'zombie et il s'enfuit"}, 
        yéti : { text : "T'éclaires l'yeti et tu fais juste l'énerver plus..."}
      }
    },
    français : {
      récupérer : {text : "Tu prends une lampe"},
      utiliser : {
        ours : { text : "Tu éclaires l'ours et tu l'énerves encore plus..."}, 
        fennec : { text : "Tu éclaires le fennec et tu l'énerves encore plus..." }, 
        troll : { text : "Tu éclaires le troll et tu l'énerves encore plus..."}, 
        piranha : { text : "Tu éclaires le piranha et tu l'énerves encore plus..."} , 
        fantôme : { text : "Tu éclaires le fantôme et il s'enfuit"}, 
        cactus : { text : "Tu éclaires le cactus et il s'enfuit!!!(Genre ?)"}, 
        zombie : { text : "Tu éclaires le zombie et il s'enfuit"}, 
        yéti : { text : "Tu éclaires le yéti et tu l'énerves encore plus..."}
      }
    }
  }, pelle : 
  {
    quebecois : {
      récupérer : {text : "Tu pognes une pelle"},
      utiliser : {
        ours : { text : "T'assomes l'ours avec un coup de pelle en pleine face"}, 
        fennec : { text : "Le fennec esquive pis te mord" }, 
        troll : { text : "T'assomes l'troll avec un coup de pelle en pleine face"}, 
        piranha : { text : "Tu tombes à l'eau avec la pelle et l'piranha t'mange"} , 
        fantôme : { text : "T'assomes l'fantôme et ... rien"}, 
        cactus : { text : "T'assomes l'cactus et ... rien"}, 
        zombie : { text : "T'assomes l'zombie avec un coup de pelle en pleine face"}, 
        yéti : { text : "T'assomes l'yéti avec un coup de pelle en pleine face"}
      }
    },
    français : {
      récupérer : {text : "Tu ramasses une pelle"},
      utiliser : {
        ours : { text : "Tu assomes l'ours avec un coup de pelle en plein visage"}, 
        fennec : { text : "Le fennec esquive et te mord" }, 
        troll : { text : "Tu assomes le troll avec un coup de pelle en plein visage"}, 
        piranha : { text : "Tu tombes à l'eau avec la pelle et le piranha te grignotte"} , 
        fantôme : { text : "Tu assomes le fantôme et ... rien"}, 
        cactus : { text : "Tu assomes le cactus et ... rien"}, 
        zombie : { text : "Tu assomes le zombie avec un coup de pelle en plein visage"}, 
        yéti : { text : "Tu assomes le yéti avec un coup de pelle en plein visage"}
      }
    }
  }, VIPI : 
  {
    quebecois : {
      récupérer : {text : "VIPI vient t'aider"},
      utiliser : {
        ours : { text : "VIPI s'débarasse de l'ours"}, 
        fennec : { text : "VIPI s'débarasse du fennec"}, 
        troll : { text : "VIPI s'débarasse du troll"}, 
        piranha : { text : "VIPI s'débarasse du piranha"} , 
        fantôme : { text : "VIPI s'débarasse du fantôme"}, 
        cactus : { text : "VIPI s'débarasse de cactus"}, 
        zombie : { text : "VIPI s'débarasse de zombie"}, 
        yéti : { text : "VIPI s'débarasse du yéti"}
      }
    },
    français : {
      récupérer : {text : "VIPI vient t'aider"},
      utiliser : {
        ours : { text : "VIPI se débarasse de l'ours"}, 
        fennec : { text : "VIPI se débarasse du fennec"}, 
        troll : { text : "VIPI se débarasse du troll"}, 
        piranha : { text : "VIPI se débarasse du piranha"} , 
        fantôme : { text : "VIPI se débarasse du fantôme"}, 
        cactus : { text : "VIPI se débarasse de cactus"}, 
        zombie : { text : "VIPI se débarasse de zombie"}, 
        yéti : { text : "VIPI se débarasse du yéti"}
      }
    }
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
  actionTextList,
  areaList,
  monsterList,
  objectList,
  actionList,
  locationInfo,
};

