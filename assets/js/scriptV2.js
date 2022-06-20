/* Initialize all scores */

let victoryUserCount = 0;
let victoryCompCount = 0;
let nbEgalityCount = 0;
let nbGameCount = 0;

/* Function of fight with user and robot values */

let fightResult = (userChoice, compChoice) => {
    nbGameCount++;
    if((userChoice == "paper") && (compChoice == "paper")) {
        nbEgalityCount++;
        return "equality";
    }
    else if((userChoice == "paper") && (compChoice == "rock")) {
        victoryUserCount++;
        return "win";
    }
    else if((userChoice == "paper") && (compChoice == "scissors")) {
        victoryCompCount++;
        return "loose";
    }
    else if((userChoice == "rock") && (compChoice == "paper")) {
        victoryCompCount++;
        return "loose";
    }
    else if((userChoice == "rock") && (compChoice == "rock")) {
        nbEgalityCount++;
        return "equality";
    }
    else if((userChoice == "rock") && (compChoice == "scissors")) {
        victoryUserCount++;
        return "win";
    }
    else if((userChoice == "scissors") && (compChoice == "paper")) {
        victoryUserCount++;
        return "win";
    }
    else if((userChoice == "scissors") && (compChoice == "rock")) {
        victoryCompCount++;
        return "loose";
    }
    else if((userChoice == "scissors") && (compChoice == "scissors")) {
        nbEgalityCount++;
        return "equality";
    }
    else {
        console.log("Problème dans les choix");
    }
};

/* Robot choice selection random */

let robotRandom = () => {
    switch( Math.floor((Math.random() * 3))) {
        case 0 : 
            return "rock";
        break;
        case 1 : 
            return "paper";
            break;
        case 2 : 
            return "scissors";
            break;      
    }
};

/* Initialize the popover */

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* Animation of player selection */

let pChoice = document.querySelectorAll('.pChoice');
pChoice.forEach(element => {
    element.animate([
        { transform: 'scale(0.9)' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(0.9)' }
    ], {
        duration: 1000,
        iterations: Infinity
    });

    element.addEventListener('click', () => {
        console.log(fightResult(element.id, robotRandom()));
    });
});

/* Display dynamically the score of game */


