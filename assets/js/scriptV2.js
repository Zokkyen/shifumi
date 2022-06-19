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

pChoice.forEach(element => {
    element.addEventListener('mouseenter', () => {

        /*let arrayChild = element.parentNode.children;
        for (let index = 0; index < arrayChild.length; index++) {
            arrayChild[index].pause();
            console.log(arrayChild[index]);
        }
        arrayChild.forEach(e => {
            e.pause();
            console.log(e);
        });*/

        element.classList.add("shakeAnim");

        //console.log(arrayChild)

    })
});

pChoice.forEach(element => {
    element.addEventListener('mouseleave', () => {
        //element.start();  
        element.classList.remove("shakeAnim");
    })
});
