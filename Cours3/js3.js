let asbl="EQLA" 
let prefix = 32 
let pi = 3.14   
const NOEL2021 = new Date(2021, 12, 25)
let ajourdhui = new Date() 
let voiture = {marque:"Renault", model:"Clio", vitesse: 130} 
let tableau = ["fourchette","couteau","cuillere","serviette"] 
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]

function monPrenom() {
    return "Andres"
}
console.log(monPrenom())

function switchGreeting(langue) {
    switch(langue) {
        case "francais" :
            message = "salut"
            break
        case "nederlands" : 
            message = "dag"
            break
        case "espagnol":
            message = "hola"
            break
        default :
            message = "langue inconnue"       
    }
    return message
  
}
//  L'instruction break est utilisée pour finir l'exécution d'une boucle, d'une instruction switch, ou avec un label.
console.log(switchGreeting("francais"))

// Boucles et itérations 
// for ([initialisation]; [condition]; [expression_finale]) instruction
function repeatCharFor(charactere, fois) {
    let charTotal = "" 
    for (let index = 0; index < fois; index++) {
        charTotal += charactere        
    }
    return charTotal
}

function repeatCharWhile(charactere,fois) {
    let charTotal = ""
    let index = 0
    while (index < fois) {
        charTotal += charactere
        index ++
    }
    return charTotal
}

console.log(repeatCharFor("a",10))

function countWord(list,word) {
    let count = 0
    for (let x = 0; x < list.length; x++){
    if (list[x] === word )
        count ++
    }
    return count
}
console.log(countWord(tableau,"couteau"))


function countWordForOf(list,word) {
    let count = 0
    for (const element of list) {
        if (element === word)
            count ++

    }
      return count
}


function getMonthDays(monthList,monthName) {
    let numberOfDays 
    for (let i =0;i<monthList.length;i++) {
        if (monthList[i].nom === monthName) {
            numberOfDays = monthList[i].jours
            break
        }
                
    }
    return numberOfDays
}

