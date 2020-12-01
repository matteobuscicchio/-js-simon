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
    // alert(genericNumberArray);
    console.log(genericNumberArray);

    function userMemoryTest() {

        var rememberedNumber = [];
        var userValue = [];
        while(userValue.length < 5){
            var newValue = Number(prompt("inserisci i numeri che hai appena visto"));
            if (userValue.indexOf(newValue) === -1) {
                userValue.push(newValue);
                index = 0;
                while (index < 5) {
                    if (newValue === genericNumberArray[index]){
                        rememberedNumber.push(newValue);
                    } else if (newValue !== genericNumberArray[index]){
                        console.log('mancato');
                    }
                    index++;
                }
            }
        }
        console.log(userValue);
        console.log('complimenti hai ricordato questi numeri = ' + rememberedNumber);
    }
    userMemoryTest();
});