// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.

$(document).ready(function(){

    var genericNumberArray = [];
    while(genericNumberArray.length < 5){
        var randomNumber = Math.floor(Math.random() * 5) + 1;
        if (genericNumberArray.indexOf(randomNumber) === -1) {
            genericNumberArray.push(randomNumber)
        }
    }
    alert(genericNumberArray);

    
    var userValue = [];
    while(userValue.length < 5){
        var newValue = prompt("inserisci i numeri che hai appena visto");
        if (newValue === 0) {
            alert('il numero zero non è ammesso, scegline uno nuovo');
        } else if (userValue.indexOf(newValue) === -1) {
            userValue.push(newValue)
        }
    }

    var genericValue = [];
    function checkerTypeOne(randomArray, genericValue) {
        var index = 0;
        while (index < randomArray.length) {
            if (genericValue === randomArray[index]) {
                return true;
            }
            index++;
        }
    }

    checkerTypeOne(genericNumberArray, userValue);
});