# Rattrapage Jour 1 (25/06/2021)
Ceci n’est pas un cours de JavaScript, c’est une révision des concepts que vous avez déjà vus. Aujourd’hui on a parlé des sujets suivants:
1. Correction des exercices (devoir)
2. Changer les valeurs des variables et des objets
3. Les opérateurs mathématiques et chaines de caractères
4. Les fonctions (Part 1)
5. Le code JavaScript du cours
   
## 1. Correction des exercices (devoir)
Les notes de chaque jour de rattrapage seront disponibles toujours sur le même répo GitHub mais dans un dossier différent.

*Rappel*: N'oubliez pas que les noms des variables sont sensibles aux majuscules et minuscules. Pour JavaScript la variable *A*  majuscule et *a* minuscule sont deux variables differentes

## 2. Changer les valeurs des variables et des objets 
On utilise des variables pour sauvegarder des valeurs. Quand on écrit un programme on doit souvent changer les valeurs des variables. La façon de changer la valeur depend du type de variable.
``` 
asbl = "ONA" //Pour les chaînes des caractères on utilise les guillemets ""
prefix = 33 // Pour les chiffres on n'utilise pas les guillemets
voiture.marque = "Fiat" // Pour changer les propriétés d'un objet, on fait Objet.propriété
ustensiles[1] = "Spatule" // Pour les tableaux (arrays) on spécifie la position de la valeur à changer
```
*Rappel*: On n'utilise pas let pour changer la valeur d'une variable. On utilise let uniquement la première fois quand on définit la variable.

## 3. Les Opérateurs Mathematics et Opérateur + pour le chaines de caractères
```
prefix = prefix + 10 // On additionne 10 à la valeur originale de prefix. Maintenant prefix=42.
prefix = prefix / 2 // On divise prefix par deux. Maintenant prefix=21
prefix -- // On soustrait 1 à la valeur de prefix. Maintenant prefix=20
prefix += 10 // On additionne 10 à la valeur de prefix. Maintenant prefix=30
prefix = prefix % 7 // On divise prefix par 7 et on prend le reste (opération module). Maintenant prefix=2
asbl = "Bonjour " + asbl + prefix // On peut concaténer les chaines de caractères avec +
```

## 4. Les Fonctions (Part 1)
Une fonction JavaScript est un bloque de code qui fait une tâche spécifique. La fonction tourne uniquement quand elle est appellée/invoquée dans le programme. Si la fonction n’est jamais appelée/invoquée, elle ne va jamais tourner.

La fonction est définie avec le mot clé “function” suivi de un nom. Les paramètres sont listés dans des parenthèses ().

Ci-dessous un exemple de fonction avec les caractèristiques suivantes:
- la fonction s'appelle plusDeux, 
- la fonction reçoit un paramètre appellé num
- la fonction utilise une variable locale appellée result
- la fonction retourne le valeur de la variable result
```
function plusDeux(num) { 
    let result = num + 2
    return result
}
```
# 3.Exercises
1. Écrire une fonction sommeTrio qui reçoit les paramètres num1, num2, num3 et retourne la somme de num1, num2, num3. Exemple: Si j'envoie comme paramètre 3, 6, 2, la fonction retourne 10
2. Écrire une fonction concatTrio qui reçoit les paramètres chaine1, chaine2, chaine3 et retourne la concaténation des trois chaines de caractères en mettant un espace entre chaque chaine. Exemple: si j'envoie comme paramètre soleil, lune, étoile, la fonction retour "soleil lune étoile" et pas "soleiluneetoile"

## 5. Le code JavaScript du Cours 
 
```
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

```

