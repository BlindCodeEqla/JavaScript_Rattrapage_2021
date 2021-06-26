# Rattrapage Jour 0 (22/06/2021)
Ceci n’est pas un cours de JavaScript, c’est une révision des concepts que vous avez déjà vus. Aujourd’hui on a parlé de deux sujets:
1. Les variables
2. Les Fonctions

## 1. Les Variables 
On utilise var, let ou const pour définir les variables. Si la variable est définie comme const, on ne peut pas changer sa valeur. De manière générale: Si la variable est constante: “const”, si elle n'est pas constante: “let”.

Dans le cours d’aujourd’hui on a utilisé les variables de type:
* String: Pour sauvegarder des chaines de caractère.
* Number: Pour sauvegarder des chiffres (entiers ou décimaux).
* Arrays: (ou Tableau) pour sauvegarder une liste de valeurs.
* Object: Pour sauvegarder des données plus complexes.

**Remarques**
* Les noms des variables sont sensibles aux majuscules et minuscules. Pour JavaScript la variable *A* majuscule et *a* minuscule sont deux variables differentes
* Ce n’est pas obligatoire mais par convention, les variables, objets et fonctions suivent la convention **camelCase**. C’est une notation consistant à écrire un ensemble de mots en les liant sans espace ni ponctuation, et en mettant en capitale la première lettre de chaque mot. La première lettre du premier mot peut être en majuscule ou en minuscule, selon la convention.

## 2. Les Fonctions
Une fonction JavaScript est un bloque de code qui fait une tâche spécifique. La fonction tourne uniquement quand elle est appellée/invoquée dans le programme. Si la fonction n’est jamais appelée/invoquée, elle ne va jamais tourner.

La fonction est définie avec le mot clé “function” suivi de un nom. Les paramètres sont listés dans des parenthèses ().

```
function monPrenom() {
    return "Andres"
}
```
# 3.Exercises
1. Définir un tableau “joursSemaine” avec tous les jours de la semaine “Lundi, Mardi, etc.”.
2. Définir un object “chansonPreferee” avec 3 propriétés qui contient: le nom de la chanson, l’année de diffusion et l’auteur de la chanson.
3. Définir un tableau “mesChansonsPreferees” avec vos deux chansons preferées.
4. Afficher en console le tableau “joursSemaine”.
5. Afficher en console l'object “chansonPreferee”.
6. Afficher en console le tableau “mesChansonsPreferees”.

# Les code JavaScript
Le code JavaScript se trouve aussi dans ce dossier sur le nom de js0.js.


```
let asbl="EQLA" // Les chaines de caractères on les met entre ""
let prefix = 32 // Les chiffres vont sans "" 
let pi = 3.14   // Pour les chiffres décimaux on utilise . et pas ,
const NOEL2021 = new Date(2021, 12, 25); // On utilise const pour sauvegarder une valeur qui ne va jamais changer. Date est un Object JavaScript (On en parelera plus tard). En géneral en MAJUSCULES
let ajourdhui = new Date() // Ici on sauvegarde dans la variable aujourdhui la date de maintenant
let voiture = {marque:"Renault", model:"Clio", vitesse: 130} // On peut créer notre propre objet pour sauvegarder des données complexes
let tableau = ["fourchette","couteau","cuillere","serviette"] // On peut utiliser des tableaux (Arrays) pour sauvegarder plusieurs valeurs. Chaque valeur est séparée par ,
let mois = [ {nom: "Janvier", jours:31}, {nom: "Fevrier", jours:28}, {nom:"Mars", jours:31}, {nom:"Avril", jours:30}]

function monPrenom() {
    return "Andres"
}
console.log(monPrenom())
```
