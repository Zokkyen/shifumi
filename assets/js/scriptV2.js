/* Initialize all scores */

let victoryUserCount = 0;
let victoryCompCount = 0;
let nbEgalityCount = 0;
let nbGameCount = 0;
let alwaysOne = 0;

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
});

/* Player choose one of three */

pChoice.forEach((key, element) => {

    //console.log(key)
    //console.log(element)


    //key.addEventListener('click', (element) => {

        //element.parentNode.children[key]

        //console.log(element.parentNode.children[key])


        //console.log(element.parentNode.children.)
    //});
});
