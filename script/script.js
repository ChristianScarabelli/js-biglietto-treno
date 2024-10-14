// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// 1. PREPARAZIONE E ACQUISIZIONE DEI DATI

// Chiedere all'utente i chilometri da percorrere
const chilometriUtente = parseInt(prompt('Inserire il numero di chilometri da percorrere')) // number
console.log(chilometriUtente)

// Chiedere all'utente la usa età
const etàUtente = parseInt(prompt('Inserire l\'età')) // number
console.log(etàUtente)

// 2. ESECUZIONE DELLA LOGICA / ALGORITMO

// Prezzo base 0.21 € al Km

// SE l'utente < 18 anni si applica lo sconto del 20%
// ALTRIMENTI SE l'utente è > 18 anni E over 65 si applica lo sconto del 40%

// 3. OUTPUT