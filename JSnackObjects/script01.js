var basketball_player = {
    codice_giocatore: undefined,
    nome: "Magic",
    cognome: "Mike",
    eta: 54,
    media_punti_partita: undefined,
    percentuale_successo_tiri_3punti: undefined,
}

var lettere = "abcdefghijklmnopqrstuvwxyz";

var letteraRandom = Math.ceil(Math.random() * 26);

var randomPlayerCodeNumber = Math.floor(Math.random() * 9);

var sequenzaLettere = lettere.charAt(letteraRandom).toUpperCase() //lo esegue 3 volte

basketball_player.codice_giocatore = sequenzaLettere + sequenzaLettere +  sequenzaLettere +  randomPlayerCodeNumber + "" + randomPlayerCodeNumber + "" + randomPlayerCodeNumber;

basketball_player.media_punti_partita = Math.floor(Math.random() * 50);

basketball_player.percentuale_successo_tiri_3punti = Math.floor(Math.random() * 100) + "%";

console.log(basketball_player)