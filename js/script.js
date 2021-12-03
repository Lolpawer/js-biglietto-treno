let outputHtml = document.getElementById('output');

//prima chiedo all'utente il numero di chilometri che vuole percorrere
//è l'età del passeggero

let chilometriUtente = prompt('Quanti chilometri deve percorrere il passeggero?');
chilometriUtente = parseInt(chilometriUtente);
let etàUtente = prompt('Quanti hanni ha il passeggero?');
etàUtente = parseInt(etàUtente);

//prima calcolo il prezzo base del biglietto, sapendo che costa €0,21 al km

let prezzoDistanza = chilometriUtente * 0.21;

//poi controllo se devo applicare sconti in base all'età e, in caso, calcolo il totale
//sconto minorenni 20%, over 65 40%

let prezzoFinale = prezzoDistanza;

if (etàUtente < 18) {
    prezzoFinale = prezzoDistanza - (prezzoDistanza * 20 / 100);
}

else if (etàUtente > 65) {
    prezzoFinale = prezzoDistanza - (prezzoDistanza * 40 / 100);
}

//poi stampo il risultato

outputHtml.innerHTML += `Il tuo biglietto costa € ${prezzoFinale.toFixed(2)}.`