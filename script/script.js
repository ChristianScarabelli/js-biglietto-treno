/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// 1. PREPARAZIONE E ACQUISIZIONE DEI DATI

// Chiedere all'utente i chilometri da percorrere
const chilometriUtente = parseFloat(prompt('Inserire il numero di chilometri da percorrere')) 
console.log('chilometri da percorrere:' , chilometriUtente)  // number

// Chiedere all'utente la usa età
const etàUtente = parseInt(prompt('Inserire l\'età')) 
console.log('età:', etàUtente)  // number

// 2. ESECUZIONE DELLA LOGICA / ALGORITMO

// Prezzo base 0.21 € al Km
const prezzoBase = chilometriUtente * 0.21 // number 
console.log('prezzo base:', prezzoBase)

if (!isNaN(chilometriUtente) && !isNaN(etàUtente) && chilometriUtente >= 0 && etàUtente >= 0) {

let prezzoFinale = ''

// SE l'utente < 18 anni si applica lo sconto del 20%
// ALTRIMENTI SE l'utente è over 65 si applica lo sconto del 40%
if (etàUtente < 18) {
    prezzoFinale = (prezzoBase - (prezzoBase * 20 / 100))  // number
    console.log('è stato applicato uno sconto del 20%!')
} else if (etàUtente > 65) {
    prezzoFinale = (prezzoBase - (prezzoBase * 40 / 100))  // number
    console.log('è stato applicato uno sconto del 40%!')
}  else {
    prezzoFinale = prezzoBase // number
    console.log('Spiacenti, ma non è stato applicato alcuno sconto')
}


const prezzoFinFormatted = new Intl.NumberFormat('it-IT', { 
    style: 'currency', 
    currency: 'EUR' 
}) .format(prezzoFinale)

// 3. OUTPUT
console.log(prezzoFinFormatted)  // number

// oppure .toFixed(2)
}  else {
    alert('i dati inseriti non sono corretti!')
}