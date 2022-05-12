// Variables
let victoryUserCount = 0;
let victoryCompCount = 0;
let nbEgalityCount = 0;
let nbGameCount = 0;
let alwaysOne = 0;

// Function of music player
let play = () => {
    const audio = document.querySelector("#audio");
    if(soundAmbiance.src == 'http://127.0.0.1:5500/assets/img/volumeoff.png' || soundAmbiance.src == 'assets/img/volumeoff.png'){
        soundAmbiance.src = 'assets/img/volume.png';
        audio.volume = 1; // 0.5 = 50% 1 = 100%
        audio.play();
    }
    else{
        soundAmbiance.src = 'assets/img/volumeoff.png';
        audio.pause();
        audio.currentTime = 0;
    }
}

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
    if(alwaysOne == 0){
        compShiFuMi.id = 'comp' + alwaysOne;
        alwaysOne++;
    }
    else {
        gameContent.removeChild(compShiFuMi);
        compShiFuMi = document.createElement("img");
        compShiFuMi.className = 'imgGame';
        compShiFuMi.id = 'comp' + alwaysOne;
        alwaysOne--;
    }
    switch(numb){
        case 0 :
            compShiFuMi.src = 'assets/img/pierre.png';           
            break;
        case 1 :
            compShiFuMi.src = 'assets/img/papier.png';
            break;
        case 2 :
            compShiFuMi.src = 'assets/img/ciseaux.png';
            break;
    }
    gameContent.appendChild(compShiFuMi);
}

// Set audio or not when the user click on the sound button
let soundAmbiance = document.getElementById('soundAmbiance');
soundAmbiance.addEventListener('click', play);

// Set a predifine img for the Computer
let compShiFuMi = document.createElement("img");
compShiFuMi.className = 'imgGame';

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