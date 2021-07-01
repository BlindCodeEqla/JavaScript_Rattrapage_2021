# Rattrapage Jour 3 (29/06/2021)
1. Correction des exercices (devoir)
2. Les fonctions (Part 2)
3. les opérateurs de comparaison et les opérateurs logiques. L'instruction if...else
4. Exercices
   
## 1. Correction des exercices (devoir)
**Rappel** : La seule définition d'une fonction ne permet pas d'exécuter la fonction. Cela permet de lui donner un nom et de définir ce qui doit être fait lorsque la fonction est appelée. Appeler la fonction permet d'effectuer les actions des instructions avec les paramètres indiqués. 

## 2. Les fonctions (Part 2) 
- C'est le développeur qui décide le nom de la fonction et ses paramètres (arguments). Le nom n'a aucune influence. Les paramètres donnés lors de l'appel d'une fonction sont appelés les arguments de la fonction.
- Normalment le nom est en anglais et il doit suivre le "naming convention" de JavaScript
- Dans une fonction on peut réféerencer des variables globales si elles ont été définies précédemment. Une variable locale ne peut pas être référencée en dehors de la fonction.
- il est recommandé de toujours déclarer les variables au début de leurs portées (le début du code global ou le début du corps de la fonction) afin de mieux (sa)voir quelles variables font partie de la fonction et lesquelles proviennent de la chaîne de portées.
- Quand on appelle une fonction, on peut donner comme paramètres (argument) le résultat d'une autre fonction. Exemple: 
```
function plusDeux(parametreNumerique) {      
    let resultat = parametreNumerique + 2
    return resultat
}
function multiplyPar4(chiffre) { 
    let resultat = chiffre * 4
    return resultat
}
// D'abord on appelle multiplyPar4 et après plusDeux
let val1 = plusDeux(multiplyPar4(5)) // val1 = 22. 

// D'abord on appelle plusDeux et après multiplyPar4
let val2 = multiplyPar4(plusDeux(5)) // val2 = 28
```
- Il n'y a pas une solution unique pour écrire une fonction. Si on demande à deux développeurs d'écrire une fonction, on aura deux codes differents. Ci-dessous on a un example de la fonction "isAdult" qui peut être écrite de plusieurs façons différentes:
```
// Version initial
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
// Une version sans {}
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
```

## 3.  Les opérateurs de comparaison et les opérateurs logiques
Les opérateurs de comparaison sont: == === != !== > < >= <=
*Rappel*: toujours utiliser le triple égal ou équivalent (===, !==)

Les opérateurs logiques sont: && || !
- Opérateur logique || : renvoie true si au moins l’une des comparaisons est évaluée à true ou false sinon
- Opérateur logique && : renvoie true si toutes les comparaisons sont évaluées à true ou false sinon
- Opérateur logic ! : Renvoie false si une comparaison est évaluée à true ou renvoie true dans le cas contraire 

Exemple:  Dans une usine il faut calculer le salaire journalier en sachant qu'il y a une prime journalière qui dépend de l'heure où la personne a commencé à travailler et sa categorie.
- Si l'employé est ouvrier (O) et qu'il a commencé à travailler avant 8 heures, la prime est de 50 Euros
- Si l'employé est ouvrier (O) et qu'il a commencé à travailler après 8 heures, la prime est de 20 Euros
- Si l'employé est superviseur (S) et qu'il a commencé à travailler avant 11 heures, la prime est de 60 Euros
- Sinon... pas de prime


```
function calculerSalaireJournee(salaireBase, heure, category) { 
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
```
# 4.Exercises
1. Écrire une fonction equal(val1, val2): Qui reçoit deux valeurs val1 et val2. La fonction renvoit "EQUAL" si les deux valeurs sont égales et "UNEQUAL" si le deux valeurs sont différentes.
2. Écrire une fonction calculerTaxFixe(montant): Qui reçoit un montant de base comme paramètre et qui calcule le montant total avec la taxe. Si le montant < 1000, la taxe fixe à ajouter est 200. Si le montant est >= 1000 la taxe fixe est de 300.
3. Écrire une fonction calculerTaxPorcentage(montant): Qui reçoit le montant de base comme paramètre et qui calcule le montant total avec la taxe. Si le montant < 1000, la taxe fixe à ajouter est 10% du montant de base. Si le montant est >= 1000 la taxe fixe est de 12% du montant de base.
4. Exercices (Martin) auCarre(n) -> renvoie n au carré
5. Exercices (Martin) max(a, b) -> renvoie le plus grand nombre entre a & b
6. Exercices (Martin) calcul(a, op, b) -> en supposant que a & b sont des nombre et que "op" est une chaine de caractère avec "*", "-", "+" ou "/", renvoyer le résultat de a op b (ex: calcul(3, "*", 5) -> 15)

## 5. Le code JavaScript du Cours 
Partie 1
```
function plusDeux(parametreNumerique) {      
    let resultat = parametreNumerique + 2
    return resultat
}

let temp = plusDeux(54)

function plusTrois(p) { 
    let resultat = p + 3
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
```
Partie 2
```
function isAdult(age) { 
    let message // optional
    if (age > 18 ) {
        message = "Vous êtes un adult"
    }
    else {   
        message = "Vous êtes un baby"
    }
    return message
}

// les opérateurs de comparaison == === != !== > < >= <=
function isAdultSimpliefie(age) { 
    if (age > 18 )
        return "Vous êtes un adult"
    else   
        return "Vous êtes un baby"    
}

// L'opérateur (ternaire) conditionnel 
function isAdultTernaire(age) {
    return age > 18 ? "Vous êtes un adult" : "Vous êtes un baby"
}

// L'operateur flèche
let isAdultFleche = age => (age > 18) ? "Vous êtes un adult": "Vous êtes un baby";
console.log("flechea " + isAdultTernaire(isAdultTernaire(20)))


//console.log(isAdultSimplifie(33))

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
```
