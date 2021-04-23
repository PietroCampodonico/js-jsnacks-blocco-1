//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

var lista = [];

for (var i = 0; i < 6; i++) {
    var input = parseInt(prompt("Inserisci un numero"));

    if ((input % 2) !== 0) {
        lista.push(input)
    }
}    
console.log(lista);

