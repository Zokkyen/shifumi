// Variables
let victoryUserCount = 0;
let victoryCompCount = 0;
let nbEgalityCount = 0;
let nbGameCount = 0;
let alwaysOne = 0;

// Function of music player
const toggleSound = () => {
    soundChoice.classList.toggle('soundOff');
    soundChoice.classList.toggle('soundOn');
    
    if (soundChoice.classList.contains('soundOff')) {
        saberSound.pause();
        saberSound.currentTime = 0;
    } 
    else{
        saberSound.play();
    }
}

let saberSound = document.getElementById('saberSound');
soundChoice.addEventListener('click', toggleSound);

// Function Random number
let ramdomFct = () => {
    return Math.floor((Math.random() * 3));
}

// Function return all numbers to HTML
let returnAllValueInput = (user, comp, egal, total) => {
    victoryUser.innerHTML = user.toString();
    victoryComp.innerHTML = comp.toString();
    nbEgality.innerHTML = egal.toString();
    nbGame.innerHTML = total.toString();
}

/* Create computer image result 
0:stone 1:paper 2:scissors*/
let createComputerImage = (numb) => {
    switch(numb){
        case 0 :
            botImg.src = 'assets/img/pierre.png';           
            break;
        case 1 :
            botImg.src = 'assets/img/papier.png';
            break;
        case 2 :
            botImg.src = 'assets/img/ciseaux.png';
            break;
    }

    const refreshRate = 20;
    const maxYPosition = 160;
    let speedX = 2;
    let positionX = 290;

    let interLoop = setInterval(() => {
        positionX = positionX - speedX;
        if (positionX < maxYPosition || positionY > 290) {
            speedX = speedX * (-1);
        }
        botImg.style.top = positionX + 'px';
    }, refreshRate);














}

// When the user clicks on the button, open the modal
modBtn.addEventListener('click', () => {
    myModal.style.display = "block";
})

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
span.addEventListener('click', () => {
    myModal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
})

// First return of values
returnAllValueInput(victoryUserCount, victoryCompCount, nbEgalityCount, nbGameCount);

// Event when user clicks on one of image

rock.addEventListener('click', () => {
    let returnRandom = ramdomFct();
    createComputerImage(returnRandom);
    if(returnRandom == 2){
        alert("C'est gagné !");
        victoryUserCount++;
        nbGameCount++;
    }
    else if (returnRandom == 0){
        alert("Egalité !");
        nbEgalityCount++;
        nbGameCount++;
    }
    else {
        alert("C'est perdu...");
        victoryCompCount++;
        nbGameCount++;
    }
    returnAllValueInput(victoryUserCount, victoryCompCount, nbEgalityCount, nbGameCount);
});

paper.addEventListener('click', () => {
    let returnRandom = ramdomFct();
    createComputerImage(returnRandom);
    if(returnRandom == 0){
        alert("C'est gagné !");
        victoryUserCount++;
        nbGameCount++;
    }
    else if (returnRandom == 1){
        alert("Egalité !");
        nbEgalityCount++;
        nbGameCount++;
    }    
    else {
        alert("C'est perdu...");
        victoryCompCount++;
        nbGameCount++;
    }
    returnAllValueInput(victoryUserCount, victoryCompCount, nbEgalityCount, nbGameCount);
});

scissors.addEventListener('click', () => {
    let returnRandom = ramdomFct();
    createComputerImage(returnRandom);
    if(returnRandom == 1){
        alert("C'est gagné !");
        victoryUserCount++;
        nbGameCount++;
    }
    else if (returnRandom == 2){
        alert("Egalité !");
        nbEgalityCount++;
        nbGameCount++;
    }
    else {
        alert("C'est perdu...");
        victoryCompCount++;
        nbGameCount++;
    }
    returnAllValueInput(victoryUserCount, victoryCompCount, nbEgalityCount, nbGameCount);
});