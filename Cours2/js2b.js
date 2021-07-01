function isAdult(age) { 
    let message // optional
    if (age > 18 ) {
        message = "Vous êtes un adulte"
    }
    else {   
        message = "Vous êtes un baby"
    }
    return message
}


// les opérateurs de comparaison == === != !== > < >= <=
function isAdultSimpliefie(age) { 
    if (age > 18 )
        return "Vous êtes un adulte"
    else   
        return "Vous êtes un baby"    
}

// L'opérateur (ternaire) conditionnel 
function isAdultTernaire(age) {
    return age > 18 ? "Vous êtes un adulte" : "Vous êtes un baby"
}

// L'operateur flèche
let isAdultFleche = age => (age > 18) ? "Vous êtes un adulte": "Vous êtes un baby";
console.log("flechea " + isAdultTernaire(isAdultTernaire(20)))

function calculerSalaireJournee(salaireBase, heure, category) { // conditional plusier
    let total = salaireBase
    if (heure < 8 && category === "O")
        total = salaireBase + 50
    else if (heure >= 8 && category === "O") 
        total = salaireBase + 20
    else if (heure < 11 && category === "S")
        total = salaireBase + 60
    
    return total
}

console.log(calculerSalaireJournee(100,6,'O'))
