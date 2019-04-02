// you can write js here
console.log('exo-3');

//var userInput = prompt('Quel est votre choix ?');
//var userInput = 'paper';
//console.log(getUserChoice(userInput));
//console.log(getComputerChoice());

function getUserChoice (userInput) {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
        
        return userInput;

    } else {

        console.log('Ho, ho ! J\'ai un petit problème ! (Ref: Robocop!)');
        
    }
    
}

function getComputerChoice() {

    var loterie = ['rock', 'paper', 'scissors'];
    i = (Math.random() * 3 | 0) + 0;
    return(loterie[i]);

}

function determineWinner(userChoice, computerChoice) {
    
    if (userChoice === 'bomb') {

        return ('Cheat Code... Bad Gy !!!');

    } else if (userChoice === computerChoice) {

        return ('Tied');

        } else if (userChoice === 'rock') {

            if (computerChoice === 'scissors') {
                return ('Won');
            } else {
                return ('Lost');
            }

        } else if (userChoice === 'paper') {

            if (computerChoice === 'scissors') {
                return ('Lost');
            } else {
                return ('Won');
            }

        } else if (userChoice === 'scissors') {

        if (computerChoice === 'rock') {
            return ('Lost');

        } else {

            return ('Won');
        }
    }
}

// Plus simple en une ligne de code:
//determineWinner(getUserChoice(userInput), getComputerChoice());

function playGame(){
    var userInput = prompt('Quel est votre choix ?');
    var uChoice = getUserChoice(userInput);
    console.log('Votre choix: ' + uChoice);
    var computerChoice = getComputerChoice();
    console.log('Celui de la stupide machine: ' + computerChoice);
    console.log('You have: ' + determineWinner(uChoice, computerChoice));

}