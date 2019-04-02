// you can write js here
console.log('exo-2');
//var kelvin = 294;
var kelvin = prompt('Quelle est la température en Kelvin aujourd\'hui ?');
// stock le résultat de la formule
var celsius = kelvin - 273.15;
// Affiche et concactènne String + Valeur...
console.log('La temperature aujourd\'hui est de '+celsius+' degrés celcius.');
// stock le résultat de la formule
var fahrenheit = celsius * (9/5) + 32;
// Affiche et concactènne String + Valeur...
console.log('La temperature aujourd\'hui est de '+fahrenheit+' degrés fahrenheit.');
// arrondi la valeur de fahrenheit à l'aide de la fonction floor
var fahren_ar = Math.floor(fahrenheit);
// Affiche et concactènne String + Valeur...
console.log('La temperature aujourd\'hui est d\'environ '+fahren_ar+' degrés fahrenheit.');
