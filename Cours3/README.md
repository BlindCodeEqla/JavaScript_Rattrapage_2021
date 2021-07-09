# Rattrapage Jour 4 (06/07/2021)
1. L'opérateur de comparaison switch
2. Boucles et itérations 
3. Exercices
   
## 1. L'opérateur de comparaison switch
L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
L'instruction **break** est utilisée pour finir l'exécution d'une boucle, d'une instruction switch, ou avec un label.
Exemple:
```
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
```

## 2.  Boucles et itérations
Les boucles permettent de répéter des actions. Une boucle peut être vue comme une version informatique de « faire X fois quelque chose.
Il y a différents types de boucles. Les différents types de boucles permettent d'utiliser différentes façon de commencer et de terminer une boucle.

**L'instruction for**
```
// La fonction retourne x fois la chaîne de charactères
function repeatCharFor(charactere, fois) {
    let charTotal = ""  // qu'est-ce qu'il passe si on ne fait pas ça?
    for (let index = 0; index < fois; index++) {
        charTotal += charactere        
    }
    return charTotal
}
```
**L'instruction while**
La même fonction avec l'instruction while
```
function repeatCharWhile(charactere,fois) {
    let charTotal = ""
    let index = 0
    while (index < fois) {
        charTotal += charactere
        index ++
    }
    return charTotal
}
```

**Boucles pour iterer sur un tableau (array)**
On peut itérer sur un tableau (array) de plusieurs façons
```
function countWord(list,word) {
    let count = 0
    for (let x = 0; x < list.length; x++){
    if (list[x] === word )
        count ++
    }
    return count
}
function countWordForOf(list,word) {
    let count = 0
    for (const element of list) {
        if (element === word)
            count ++
    }
      return count
}
```

On peut itérer sur un tableau (array) avec des objets.
La fonction getMonthDays reçoit comme paramètres une liste des objets "mois" (monthList) et le nom du mois (monthName); La fonction renvoie le nombre de jours qu’il y a dans monthName. Pour rappel, l'objet "Mois" a deux attributs: nom et jours
````
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]
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
````

# 4.Exercises
1. Écrire une fonction sommerPaire(val1): Qui calcule la somme de tous les nombres paires de 0 jusqu'au val1.
2. Écrire une fonction maxInList(list): Qui reçoit une liste avec des chiffres et renvoie le nombre plus élevé de la liste. Exemple: Si j'appelle la fonction avec la liste [55,21,87,2,11], la fonction renvoie 87.
3. Écrire une fonction maxPosInList(list): Qui reçoit une liste avec des chiffres et renvoie la position où se trouve le nombre plus élevé de la liste. Exemple: Si j'appelle la fonction avec la liste [55,21,87,2,11], la fonction renvoie 2.
4. En utilisant la liste d'objet "mois": Écrire une fonction getMonthNames(mois) qui reçoit "mois" comme paramètre et renvoie une chaîne de caractères avec les noms de tous les mois. Exemple: "Janvier, Fevrier, Mars..."
5. En utilisant la liste d'objet "mois": Écrire une fonction getMonthNames31(mois) qui reçoit "mois" comme paramètre et renvoie une chaîne de caractères avec les noms de tous les mois qui ont 31 jours. Exemple: "Janvier, Mars, Mai..."

## 5. Le code JavaScript du Cours 
```
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
```
