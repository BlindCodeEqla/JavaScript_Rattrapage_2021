let asbl="EQLA" // Les chaines de characters on les mettre entre ""
let prefix = 32 // Les chifres vont sans "" 
let pi = 3.14   // Pour les chifres decimals on utilise . et pas ,
const NOEL2021 = new Date(2021, 12, 25); // On utilise const pour stoquer une valeur qui va jamais changer. Date est un Object JavaScript (On en parelera plus tarde). En géneral en MAJUSCULES
let ajourdhui = new Date() // Ici on stoque sur la varialbe aujourdhui la date de maintenant
let voiture = {marque:"Renault", model:"Clio", vitesse: 130} // On peut créer notre prôpres objets pour stocker des donnes complexes
let tableau = ["Forchette","Couteau","Cuillere","Serviette"] // On peut utiliser des tableau (Arrays) pour stocker plusiers valeurs. Chaque valeur est séparer de un ,
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]

function monPrenom() {
    return "Andres"
}
console.log(monPrenom())

// Changer la valeur d'un variable (Opérateurs d'affectation)
console.log(asbl)
asbl = "ONA" // on change le contenue de la variable asbl. De maintenant il contienne la valeur ONA
console.log(asbl)

// Changer la propriété d'un Objet
voiture.marque = "Fiat"
voiture.vitesse = 120

// Changer la propiété d'un Tableau (par son index)
tableau[1] = "Spatule"
//console.log(tableau)
console.log(tableau)

// Operators Mathematics + - * / ++ --
prefix = prefix + 10 // 42
prefix = prefix / 2 // 21
prefix -- // 20 
prefix += 10 // 30
console.log(prefix)

prefix = prefix % 7 //2  Renvoie le reste entier de la division entre les deux opérandes.
console.log(prefix)

// Tableau
tableau.push("Râpe")
tableau.push("Tire-bouchon")
index = tableau.indexOf("Tire-bouchodddn")
console.log(index)


// Opérateurs logiques

// Operator Strings ++
asbl = "Bonjour " + asbl // On peut concaténer les chaines de characters avec +
asbl = asbl.concat("aussi assi") // On peut concaténer les chaines de characters avec la method concat





let ca = {}
ca.marque = "SSF"
ca.coco = "dfadsff"
console.log(ca)

// 
// Faire un instruction pour changer la propieté qui stoque l'annee de la chanson par 1970. Et apres afficher en console l'objet

// 
// Dans quel tiroir se trouve le couteau / forchette / cuillere (index)
// Ecrire les fonctionne suivantes:
// equal(val1, val2): Qui reçoit deux valeurs val1 et val2. La fonctionne renvoi "EQUAL" si les deux valeurs sont egals et "UNEQUAL" si le deux valeurs sont differents
// ajouterTaxFix(montant): Qui reçoit un montant comme parametre. Si le montant < 1000, la tax fixe à ajouter est 200. Si le montant est >= 1000 la tax fixe est de 300
// ajouterTaxPorcentage(montant): Qui reçoit le montant. Si le montant < 1000, la tax fixe à ajouter est 10% du monatant. Si le montant est >= 1000 la tax fixe est de 12% du montant.

// Tableau
// .length 
// viderTiroir(tableau): Qui renvoit un string avec la liste des élements qui se trouvent dans "tableau". Ex. "forchette,couteau,cuillere,serviette"
// extraireMoisAnnee:  qui reçoit le tableau "Mois" (ligne 8) et renvoit les noms de mois. Ex. "Janvier, Fevrier, Mars"
// extraireMois31: qui reçoit le tableau "Mois" (ligne 8) et renvoit uniquement les mois qui ont 31 jours. Ex. "Janvier, Mars"

// Srings
// toUpperCase()

/*

function auCarre(nombre) {
    return nombre * nombre
}

function calcul(a,op,b ) {
    if(op==='+') {
        return a + b
    } else if (op === '*') {
        return a * b 
    } else if (op === '/') {
        return a /b
    } else {
        return -1
    }
}

function max(arr) {
    let max = arr[0]
    arr.forEach(element => {
        if (element > max) {
            max = element
        }
    });

    return max
}
function max2(arr) {
    return Math.max(...arr)
}

function maxIndex(arr) {
    let max = arr[0]
    let maxIndex = 0
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element > max ) {
            max = element
            maxIndex = index
        }
        
    }
    return maxIndex
}

function auCarres(arr) {
    let carres=[]
    arr.forEach(element => {
        carres.push(auCarre(element))
    });
    return carres
}
*/

// Ici c'est le code pour tester notres fonctiones
// montrer(maxIndex([1,3,55,5,99,3,8]))
// montrer(maxIndex([1,3,55,5,99,3,8]))
//montrer(pi)

