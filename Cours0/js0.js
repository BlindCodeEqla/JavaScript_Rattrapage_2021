let asbl="EQLA" // Les chaines de caractères (string)vont entre guillemets.
let prefix = 32 // Les chifres vont sans guillemets. 
let pi = 3.14   // Pour les  chiffres décimaux on utilise point et pas virugle.
const NOEL2021 = new Date(2021, 12, 25); // On utilise const pour sauvegarder une valeur qui va jamais changer. Date est un Object JavaScript (On en parelera plus tard). En géneral en MAJUSCULES
let ajourdhui = new Date() // Ici on sauvegarde sur la varialbe aujourdhui la date de maintenant
let voiture = {marque:"Renault", model:"Clio", vitesse: 130} // On peut créer notre propres objets pour sauvegarder des données complexes
let tableau = ["Forchette","Couteau","Cuillere","Serviette"] // On peut utiliser des tableaux (Arrays) pour sauvegarder plusieurs valeurs. Chaque valeur est séparée par une virgule 
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]

function monPrenom() {
    return "Andres"
}
console.log(monPrenom())

