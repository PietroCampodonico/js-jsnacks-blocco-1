 //il software chiede 10 numeri (prompt) all'utente e ne stampa la somma

var numeriInseriti = []; //necessario per interagire con i numeri inseriti dall'utente
var somma = 0; //necessario per fare la somma


// Ciclo che si ripete 10 volte
for (i = 0; i < 10; i++) {
    //Numero inserito dall'utente
    var numero = parseInt(prompt("Inserisci un numero. Ne mancano " + (10-i)));

    numeriInseriti.push(numero); //inserisco nell'array l'input dell'utente
    //Fa la somma dei numeri inseriti

    somma += numero;

    //Nel caso non sia un numero quello inserito torna indietro di 1
    if (Number.isNaN(numero)) {
        alert("Solo un numero verrà accettato");
        
        i--
    }
}

console.log("la somma dei numeri è " + somma); 

//necessario per interagire con i numeri inseriti dall'utente
console.log("L'utente ha inserito i seguenti numeri: " + numeriInseriti.join(", "));