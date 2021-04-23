//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

var primoNumero = parseFloat(prompt());
var secondoNumero = parseFloat(prompt());

if (Number.isNaN(primoNumero) || Number.isNaN(secondoNumero))
    alert("Devi inserire due numeri! Ricarica la pagina");
else {
    if (primoNumero > secondoNumero) {
         console.log(primoNumero);
    } else if (primoNumero < secondoNumero) {
         console.log(secondoNumero);
    } else {
         console.log("I numeri sono uguali");
    }
}



