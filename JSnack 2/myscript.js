//Chiedere all'utente di inserire due parole.
//Stampare prima quella più corta, poi quella più lunga

var parola1 = prompt("Inserire la prima parola");

var parola2 = prompt("Inserire la seconda parola");

console.log(parola1 + " ha " +  parola1.length + " lettere");

console.log(parola2 + " ha " +  parola2.length + " lettere");

if (typeof parola1 !== "string" || typeof parola2 !== "string") {
    alert("inserire due parole")
}

if (!Number.isNaN(parseInt(parola1)) || !Number.isNaN(parseInt(parola2))) {
    alert("Inserire due parole")
} else {

    if (parola1.length < parola2.length) {
        console.log(parola1, parola2);
    } else if (parola1.length > parola2.length) {
        console.log(parola2, parola1);
    } else {
        console.log (parola1 + " e " + parola2 + " hanno lo stesso numero di lettere")
    }
}



