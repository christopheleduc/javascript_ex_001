// you can write js here
console.log('exo-2');
var isInscrit = false; // booléen
var age = 25; // Integer

//function inscrit(age, isInscrit) {

    // on genere un nb aléatoire
    var raceNumber = Math.floor(Math.random()*1000);        
    /* conditions, test pour affichage */
    /* si la V est égale à false=> n'est pas incrit */
    if (isInscrit === false) {
        // on affiche le message
        console.log('Vous êtes inscrit sous le N° '+raceNumber);
        //return(raceNumber);
    } else {
        // Sinon on affiche le message
        console.log('Vous êtes déjà inscrit !');
        //return(false);
    }
//}

if(age>18 && isInscrit===true){
    console.log('You will race at 9:30 am');
} else if (isInscrit===true ^ age>18 ){
    console.log('You will race at 11:00 am avec le N° '+raceNumber);
} else if(isInscrit===false || age<18 ){
    console.log('You will race at 12:30 am avec le N° '+raceNumber);
} else {
    console.log('Go to see the registration desk ');
}


