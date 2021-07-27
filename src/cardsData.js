export const apiURL = "http://ec2-3-133-134-22.us-east-2.compute.amazonaws.com:3000/"

export function getMinMaxValues(card) {
  const sorted = [...card].sort(function (a, b) {
    return a.value - b.value
  })

  return {
    min: sorted[0].value,
    max: sorted[sorted.length - 1].value
  }
}

const cardsStaticData = [
  {
    id: 1,
    endpoint: 'temperature',
    title: "Température de l'air",
    optimalMinValue: 15, 
    optimalMaxValue: 27,
    dropdown: false,
    off: false, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l’hygrométrie"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
  {
    id: 2,
    title: "Humidité du sol",
    endpoint: 'temperature',
    optimalMinValue: 20, 
    optimalMaxValue: 45, 
    dropdown: false,
    off: true,
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la température"
      }, 
      content: [
        "Rabattre les panneaux de protection en bois.", 
        "Activer le système d’aération de la serre", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
  {
    id: 3,
    title: "Luminosité",
    endpoint: 'temperature',
    optimalMinValue: 20, 
    optimalMaxValue: 45,
    sign: "lx",
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "la luminosité"
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
  {
    id: 4,
    title: "Humidité de l'air",
    endpoint: "temperature",
    optimalMinValue: 20, 
    optimalMaxValue: 45,
    dropdown: ["Capteur 1","Capteur 2","Capteur 3","Capteur 4","Capteur 5"],
    off: false, 
    article: {
      title: {
        firstContent: "Contrôle de", 
        secondContent: "l’humidité de l’air "
      }, 
      content: [
        "Fermer totalement les tunnels pendant la nuit et assurer <strong>une bonne étanchéité</strong> des abris-serre.", 
        "<strong>Ouvrir</strong> tôt le matin afin d’éliminer l’excès d’humidité.", 
        "<strong>Fermer un peu plus tôt</strong> l’après midi pour emmagasiner la chaleur et ce afin de garder une température proche de l’optimum pendant la nuit."
      ]
    }
  },
]

export default cardsStaticData