/* Initialize all scores */

let victoryUserCount = 0;
let victoryCompCount = 0;
let nbEgalityCount = 0;
let nbGameCount = 0;
let playerName = "";

/* Animation of the two selections : user and robot */

let fightAnimation = (player, robot, result) => {

    switch(player) {
        case 'rock' : 
            playerForFight.src = "assets/img/rock.png";
            break;
        case 'paper' : 
            playerForFight.src = "assets/img/paper.png";
            break;
        case 'scissors' :
            playerForFight.src  = "assets/img/scissors.png";
            break;
    }

    switch(robot) {
        case 'rock' :
            robotForFight.src = "assets/img/rock.png";
            break;
        case 'paper' : 
            robotForFight.src = "assets/img/paper.png";
            break;
        case 'scissors' : 
            robotForFight.src = "assets/img/scissors.png";
            break;
    }

    switch(result) {
        case 'win' :
            animContainer.innerText = "Gagné !!!";
            break;
        case 'loose' : 
            animContainer.innerText = "Perdu ..";
            break;
        case 'equality' : 
            animContainer.innerText = "Egalité :)";
            break;
    }

    playerForFight.style.display = "block";
    robotForFight.style.display = "block";

    playerForFight.animate([
        { transform: 'translate(-200px)'},
        { transform: 'translate(-100px)' },
        { transform: 'translate(-50px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(-80px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(-50px)' },
        { transform: 'translate(0px)' },
    ], {
    duration: 1500
    });

    robotForFight.animate([
        { transform: 'translate(200px)'},
        { transform: 'translate(100px)' },
        { transform: 'translate(50px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(80px)' },
        { transform: 'translate(0px)' },
        { transform: 'translate(50px)' },
        { transform: 'translate(0px)' },
    ], {
    duration: 1500
    });

    setTimeout(() => {
        playerForFight.style.display = "none";
        robotForFight.style.display = "none"; 
        animContainer.innerText = "";
    }, "2000");

};

/* Function of fight with user and robot values */

let fightResult = (userChoice, compChoice) => {
    nbGameCount++;
    if((userChoice == "paper") && (compChoice == "paper")) {
        nbEgalityCount++;
        fightAnimation("paper", "paper", "equality");
    }
    else if((userChoice == "paper") && (compChoice == "rock")) {
        victoryUserCount++;
        fightAnimation("paper", "rock", "win");
    }
    else if((userChoice == "paper") && (compChoice == "scissors")) {
        victoryCompCount++;
        fightAnimation("paper", "scissors", "loose");
    }
    else if((userChoice == "rock") && (compChoice == "paper")) {
        victoryCompCount++;
        fightAnimation("rock", "paper", "loose");
    }
    else if((userChoice == "rock") && (compChoice == "rock")) {
        nbEgalityCount++;
        fightAnimation("rock", "rock", "equality");
    }
    else if((userChoice == "rock") && (compChoice == "scissors")) {
        victoryUserCount++;
        fightAnimation("rock", "scissors", "win");
    }
    else if((userChoice == "scissors") && (compChoice == "paper")) {
        victoryUserCount++;
        fightAnimation("scissors", "paper", "win");
    }
    else if((userChoice == "scissors") && (compChoice == "rock")) {
        victoryCompCount++;
        fightAnimation("scissors", "rock", "loose");
    }
    else if((userChoice == "scissors") && (compChoice == "scissors")) {
        nbEgalityCount++;
        fightAnimation("scissors", "scissors", "equality");
    }
    else {
        console.log("Little mistake ?");
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

/* Save score at each displaying */

let saveScoreLocal = () => {
    localStorage.removeItem('victoryUserCount');
    localStorage.removeItem('victoryCompCount');
    localStorage.removeItem('nbEgalityCount');
    localStorage.removeItem('nbGameCount');

    localStorage.setItem('victoryUserCount', victoryUserCount);
    localStorage.setItem('victoryCompCount', victoryCompCount);
    localStorage.setItem('nbEgalityCount', nbEgalityCount);
    localStorage.setItem('nbGameCount', nbGameCount);
}

/* Display dynamically the score at each game */

let displayScore = () => {
    let userScore = document.querySelectorAll('.userScore');
    userScore.forEach(element => {
        element.innerText = victoryUserCount;
    });
    let robotScore = document.querySelectorAll('.robotScore');
    robotScore.forEach(element => {
        element.innerText = victoryCompCount;
    });
    let equalScore = document.querySelectorAll('.equalScore');
    equalScore.forEach(element => {
        element.innerText = nbEgalityCount;
    });
    let totalScore = document.querySelectorAll('.totalScore');
    totalScore.forEach(element => {
        element.innerText = nbGameCount;
    });
}

/* Initialize display at the beginning */

displayScore();

/* Open different modal on the launch in function of existing or new player */
const newPlayerModal = new bootstrap.Modal(newPlayer, focus);
const existPlayerModal = new bootstrap.Modal(existPlayer, focus);

window.addEventListener("DOMContentLoaded", () => {

    /* If there is a new player */
    if(((localStorage.getItem('playerName')) === null) && ((localStorage.getItem('victoryUserCount')) === null) && ((localStorage.getItem('victoryCompCount')) === null) && ((localStorage.getItem('nbEgalityCount')) === null) && ((localStorage.getItem('nbGameCount')) === null)) {     
        newPlayerModal.show();    
    }

    else {
        /* If there is an existing player */
        playerName = localStorage.getItem('playerName');
        victoryUserCount = localStorage.getItem('victoryUserCount');
        victoryCompCount = localStorage.getItem('victoryCompCount');
        nbEgalityCount = localStorage.getItem('nbEgalityCount');
        nbGameCount = localStorage.getItem('nbGameCount');       
        
        /* Refresh display with existing score */
        displayScore();

        currentUserName.innerText = playerName;
        putPlayerName.innerText = `Bon retour ${playerName}, prêt pour de nouvelles parties ?`;
        existPlayerModal.show();

        setTimeout(() => {
            existPlayerModal.hide();
        }, "3000");
    }
});

/* When open modal for new user, save his name and score */
playerValid.addEventListener('click', () => {
    localStorage.setItem('playerName', getPlayerName.value);
    localStorage.setItem('victoryUserCount', 0);
    localStorage.setItem('victoryCompCount', 0);
    localStorage.setItem('nbEgalityCount', 0);
    localStorage.setItem('nbGameCount', 0);
    currentUserName.innerText = getPlayerName.value;
});

/* Initialize the popover */

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

/* Animation of player selection */

let pChoice = document.querySelectorAll('.pChoice');
pChoice.forEach(element => {
    element.animate([
        { transform: 'scale(0.7)' },
        { transform: 'scale(0.9)' },
        { transform: 'scale(0.7)' }
    ], {
        duration: 1000,
        iterations: Infinity
    });

    /* WHen user choose a selection we call fight function, 
    display score and animation of the fight */

    element.addEventListener('click', () => {
        fightResult(element.id, robotRandom());
        displayScore();
        saveScoreLocal();
    });
});

/* Reset data of user when click on reset button */

resetButton.addEventListener('click', () => {
    localStorage.clear();
    victoryUserCount = 0;
    victoryCompCount = 0;
    nbEgalityCount = 0;
    nbGameCount = 0;
    playerName = "";
    currentUserName.innerText = "";
    animContainer.innerText = "";

    displayScore();

    setTimeout(() => {
        newPlayerModal.show(); 
    }, "1000");
});