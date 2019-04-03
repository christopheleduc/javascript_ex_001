// you can write js here

console.log('exo-5');


// 1) Créer une variable nommée input qui prends pour valeur n'importe quelle phrase ou mot à traduire.
var input = prompt('Convertir en langue Baleines: ');
//var input = "mon chant des baleines"
// 2) variable vowels de type tableau contenant toutes les voyelles.
var vowels = ["a", "e", "i", "o", "u", "y"];

// 3) variable resultArray dont la valeur est un tableau vide.
resultArray = [];

//resultArray.push(input.substring(0));

// 4) boucle qui parcours toutes les lettres de notre chaine de caractères. A l'intérieur de la boucle afficher simplement la lettre courante.

// Fonction qui convertie ma string en minuscules, inscrit chaque characteres dans un élément du tableau "resultArray", 
// affiche chaque élément du tableau, et retourne le dit tableau:
/* function findVowels(chainChars, input){

    lowersChars = input.toLowerCase(); // tout en minuscules.
    // Boucle qui push chaque chars comme element du tableau.
    for (var i = 0; i < lowersChars.length; i++){
        resultArray.push(lowersChars.substring(i,i+1));   
    }
    // Affiche chaque element du tableau.
    chainChars.forEach(function(item, index, array) {
         console.log(item, index);
        });
    // retourne le tableau.
    return(resultArray);
} */

// j'appel ma fonction avec les paramètres (le tableau et string):
/* findVowels(resultArray, input); */

// 5) Compare lettre courante est une lettre du tableau voyels. Utiliser la méthode indexOf des tableaux.

function findVowels(chainChars, input, reference){

    let lowersChars = input.toLowerCase() ; // tout en minuscules.
    //console.log(lowersChars)
    //console.log(reference)
    //console.log(reference.indexOf('o'))
    // Boucle qui push chaque chars (si voyelle) comme element du tableau.
    for (var i = 0; i < lowersChars.length; i++){
        //console.log("index=" + i + " caractère="+lowersChars[i]+" indexOf=" + reference.indexOf(lowersChars[i]))
        if(reference.indexOf(lowersChars[i]) != -1){
            resultArray.push(lowersChars[i]);
        }  
    }
    //console.log(resultArray);
    // Affiche chaque element du tableau.
    chainChars.forEach(function(item, index, array) {
         console.log(item, index);
        });
    // retourne le tableau.
    return(resultArray);
}

findVowels(resultArray, input, vowels);
//allReplace(resultArray, input, vowels);

// 6) Bonus: A la place de indexOf, écrire une seconde boucle.

// 7) utiliser la méthode .push() sur le tableau resultArray afin d'y ajouter la lettre courante
// input[i]. Vérifier que le tableau resultArray contient que des voyelles.

// Déjà fait plus haut !

// 8) afficher resultArray, vous observerez qu'il y a des virgules entre chaque élément. 
//Pourquoi ? Utiliser les méthodes join('') et toUpperCase() pour un bon formattage.

console.log(resultArray.join(''));

//console.log(resultArray.toUpperCase());


// 9) Lancer votre programme et chanter la traduction !
