//import _ from 'lodash';
//import * as _ from 'lodash';
//import sortBy from 'lodash/sortBy';

// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.

// C'est un objet, une instance d'un objet, ou plutot une sorte de "tableau objet" ??? On va dire un objet si vous voulez.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

console.log(joeInfo.name);
console.log(joeInfo.rooms);
console.log(joeInfo.garage);
console.log(joeInfo.bathrooms);
console.log(joeInfo.cars);
// afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
joeInfo.bathrooms=0;
console.log(joeInfo.bathrooms);

// Joe vient d'acquérir un garage changer la structure pour le refléter.
joeInfo.garage=true;
console.log(joeInfo.garage);

// 1) variable 'team' dont la valeur est un object vide.

// let team = {};
// ou
// var team = new Object();

var team = {
    _players : [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    _games : [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }]
};

// 2) Ajouter deux propriétés à votre objet : _players et _games toutes les deux étant des tableaux vides.
//team._players = [];
//team._games = [];

// 3) Remplir le tableau _players avec des données dans le format spécifique :
// team._players = [{
//     firstName: "Pablo",
//     lastName: "Sanchez",
//     age: 11
// }];


// 4) Remplir le tableau _games avec des données dans le format spécifique :
// team._games = [{
//     opponent: "Broncos",
//     teamPoints: 42,
//     opponentPoints: 27
// }];

// 5) ajouter un nouveau joueur à votre équipe. fonction addPlayer qui prends trois arguments : first, last, et age et ajoute à l'objet team un joueur.

// avec push !
function  addPlayer(first, last, age){

    num = team._players.length;
    team._players.push({
        firstName: first,
        lastName: last,
        age: age
    });
}
// Tests:
//addPlayer("foo", "bar", 25);
//console.log(team._players);

// 6) Appeler cette méthode et vérifier son bon fonctionnement.
addPlayer("foo", "bar", 25);
console.log(team._players);

// 7) Faire la même chose pour un match.

// sans push !
function  addMatch(advers, power, oposite_force){
    num = team._games.length;
    team._games[num] = {
        opponent: advers,
        teamPoints: power,
        opponentPoints: oposite_force
    };
}

addMatch("Yankee", 72, 37);
//console.log(team._games);

// 8) Appeler vos fonctions plusieurs fois pour avoir un object avec suffisamment de données.
addPlayer("toto", "tata", 30);
//console.log(team._players);
addMatch("Bloods", 81, 89);
//console.log(team._games);
addPlayer("Tupac", "Shakur", 33);
//console.log(team._players);
addMatch("Creeks", 89, 81);
//console.log(team._games);
addPlayer("Dr", "Dre", 44);
//console.log(team._players);
addMatch("Black Panthers", 81, 89);
//console.log(team._games);
console.log(team);

// 9) Calculer la somme des points de votre équipe sur tous les matchs joués.

function somTeam()
{
   a = 0;
   for (var i = 0; i < team._games.length; i++){
    a = a + team._games[i].teamPoints;
    }
    return(a);
    //console.log(a);
};
// Note: La dernière valeur de i est bien égale au nombre de clé ou d'indexes (pas besoin de i+1) !!!
//somme = team._games.teamPoints
//console.log(team._games[1].teamPoints);
console.log(somTeam());

// 10) Calculer la somme des points de votre équipe sur tous les matchs joués.

function somMoyTeam()
{
   a = 0;
    for (var i = 0; i < team._games.length; i++){
     a = a + team._games[i].teamPoints;
     }
     a = a/team._games.length;
    return(a);
    //console.log(a);
};
console.log(somMoyTeam());

// 11) Ecrire une fonction qui permet de trouver le joueur le plus agé.

function plusVieuxJoueur(tableau){
    let ancien = Math.max.apply(null, tableau.map(vieux => vieux.age)); // retenir: je definie un "CALLBACK", ici "vieux" !!!
    //console.log(ancien);
    return(ancien);

};

console.log(plusVieuxJoueur(team._players));

//console.log(Math.max(team._players.filter(numer =>'age')));
//console.log(team._players.find(vieux => vieux.age === Math.max(team._players.map)));
//console.log(team._players.find(vieux => vieux.age === 'age').map(vieux => vieux.age));
//console.log(team._players.map(vieux => vieux.age));
//'Math.max(team._players.map)));
//var array1 = team._players.map(vieux => vieux.age);
//console.log(Math.max(team._players.map(vieux => vieux.age)));
//console.log(Math.max.apply(null, array1));
//console.log(Math.max.apply(null, team._players.map(vieux => vieux.age)));

// 12) Bonus: Trier les joueurs par ordre alphabétique.
//console.log(team._players.map(noms => noms.lastName));

let tableau = team._players.map(noms => noms.lastName);

// function tri(tab, a,b)
// {
//     let tableau = team._players.map(noms => noms.lastName);
//     if (a.noms < b.noms) return -1;
// 	else if (a.noms == b.noms) return 0;
// 	else return 1;
// };

// tableau.sort(tri);

// ça marche !
console.log(team._players.sort(function(a,b){
    return a.lastName.localeCompare(b.lastName);
}));
// ça marche aussi !!
console.log(team._players.sort((a, b) => a.lastName.localeCompare(b.lastName)));

//import sortBy from 'lodash/sortBy';
//sortBy(team._players,'lastName');
//_.sortBy(team._players, ['lastName']);
