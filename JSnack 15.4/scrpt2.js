//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var primaParola = prompt();
var secondaParola = prompt();

primaParolaL = primaParola.length;
secondaParolaL = secondaParola.length;

if (primaParolaL > secondaParolaL) {
    console.log(secondaParola, primaParola);
} else if (primaParolaL < secondaParolaL) {
    console.log(primaParola, secondaParola);
} else {
    console.log("Le due parole hanno la stessa lunghezza");
}