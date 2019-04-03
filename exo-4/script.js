// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

console.log([secretMessage]);

secretMessage.forEach(function(item, index, array) {
    console.log(item, index);
  });

//  1) méthode pour enlever le dernier éléments du tableau)
secretMessage.pop();

// 2) méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau
secretMessage.push("to","program");

// 3) Changer le mot 'easily' par 'right' en accédant au bon index du tableau
// on recup la clef
var i = secretMessage.indexOf('easily');
// et on remplace
secretMessage[i] = "right";
// autre méthode:
secretMessage[secretMessage.indexOf("easily")] = "right";
//secretMessage[secretMessage.indexOf("right")] = "easily";

// 4) méthode pour supprimer le premier éléments du tableau.
secretMessage.shift();

// 5) méthode pour ajouter la chaine "Programming" en début de tableau.
secretMessage.unshift("Programming");

// 6) méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
// avec une fonction:
function arrayFindReplace(array, findValue, replaceValue){
    
        while(array.indexOf(findValue) !== -1){
            let index = array.indexOf(findValue);
            array[index] = replaceValue;
        }
}
//findValue.length
//arrayFindReplace(secretMessage, "get", "know");
//arrayFindReplace(secretMessage, find, replace);
//arrayFindReplace(secretMessage, "know", "get");

// On les remplace tous d'un coup, et pas seulement le premier. Ho mince!!! J'avais po complis l'sens du ploblem...
function allReplace(array, find, replace){
    find.forEach(function (item){
        for (var i = 0; i < array.length; i++){
        arrayFindReplace(array, item, replace); //J'appel la fonction plus haut.
        }
    })
}

var find = ["get", "right", "the", "first", "time"];
var replace = "know";
allReplace(secretMessage, find, replace);

// Une seule fonction ?
function allReplace(array, find, replace){
    find.forEach(function (item){
        for (var i = 0; i < array.length; i++){
            while(array.indexOf(item) !== -1){
                let index = array.indexOf(item);
                array[index] = replace;
            }
        }
    })
}

// 6bis) On recommence, en comprenant ce qui est demandé cette fois:
// Je redefini mes variables:
var find = "get";
var replace = "know";
var others = ["right", "the", "first", "time,"];
// je remplace get par know
arrayFindReplace(secretMessage, find, replace);
// puis je supprime les autres avec cette fonction:
function delOthers(array, find){
    find.forEach(function (item){
        //for (var i = 0; i < find.length; i++){
            while(array.indexOf(item) !== -1){
                let index = array.indexOf(item);
                array.splice(index, 1);
            }
        //}
    })
}
// que j'appel ici:
delOthers(secretMessage, others);

// 7) Utiliser la méthode .join pour afficher le message secret à la console.
console.log(secretMessage.join());
console.log(secretMessage.join(''));
console.log(secretMessage.join(':'));
// Sinon on peut faire ça aussi:
secretMessage.forEach(function(item, index, array) {
    console.log(item, index);
  });
// That's All Folk's !!!