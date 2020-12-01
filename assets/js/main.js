$(document).ready(function(){
    var genericNumberArray = [];
    while(genericNumberArray.length < 5){
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        if (genericNumberArray.indexOf(randomNumber) === -1) {
            genericNumberArray.push(randomNumber)
        }
    }
    alert(genericNumberArray);

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
                    }
                    index++;
                }
            }
        }
        if (rememberedNumber.length > 0) {
            alert('Questi sono i numeri che hai ricordato => ' + rememberedNumber + '.' + " Questo era l' elenco completo =>" + genericNumberArray);
        } else {
            alert("Non hai ricordato alcun numero. Questo era l'elenco completo =>" + genericNumberArray);
        }
    }

    var seconds = 30;
    var interval = setInterval(function(){
        if (seconds ===0) {
            userMemoryTest();
            clearInterval(interval);
        } else {
            seconds--;
        }
    }, 1000);
});