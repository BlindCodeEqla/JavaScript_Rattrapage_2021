let asbl="EQLA" // Les chaines de caractères on les met entre ""
let prefix = 32 // Les chiffres vont sans "" 
let pi = 3.14   // Pour les chiffres décimaux on utilise . et pas ,
const NOEL2021 = new Date(2021, 12, 25); // On utilise const pour sauvegarder une valeur qui ne va jamais changer. Date est un Object JavaScript (On en parelera plus tard). En géneral en MAJUSCULES
let ajourdhui = new Date() // Ici on sauvegarde dans la variable aujourdhui la date de maintenant
let voiture = {marque:"Renault", model:"Clio", vitesse: 130} // On peut créer notre propre objet pour sauvegarder des données complexes
let tableau = ["fourchette","couteau","cuillere","serviette"] // On peut utiliser des tableaux (Arrays) pour sauvegarder plusieurs valeurs. Chaque valeur est séparée par ,
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]

asbl = "ONA" // on change le contenu de la variable asbl. Dès maintenant il contient la valeur ONA
voiture.marque = "Fiat"
voiture.vitesse = 120
tableau[1] = "Spatule"

// Operators Mathematics + - * / ++ --
prefix = prefix + 10 // 42
prefix = prefix / 2 // 21
prefix -- // 20 
prefix += 10 // 30
prefix = prefix % 7 //2  
console.log(prefix)

// Operator Strings ++
asbl = "Bonjour " + asbl + prefix // On peut concaténer les chaines de caractères avec +

// Functions
function plusDeux(num) { 
    let resultat = num + 2
    return resultat
}
let temp = plusDeux(54)
console.log(temp)