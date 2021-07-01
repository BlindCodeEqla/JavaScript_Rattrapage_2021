
function plusDeux(parametreNumerique) {      // La fonction reçoit un paramètre. On peut le donner
    let resultat = parametreNumerique + 2
    return resultat
}

// On peut donner

let temp = plusDeux(54)

function plusTrois(p) { 
    let resultat = p + 3
    return resultat
}

function plusTrois(p,q) { 
    let resultat = p + 3 + q
    return resultat
}
let a = plusTrois(33)
let b = plusTrois(33,44)
console.log(" " + a + " " +b)

function multiplyPar4(chiffre) { 
    let resultat = chiffre * 4
    return resultat
}

let val1 = plusDeux(multiplyPar4(5))
let val2 = multiplyPar4(plusDeux(5))

console.log(val1)
console.log(val2)
