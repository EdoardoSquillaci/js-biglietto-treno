'use strict'


const kmDaPercorrere =  parseInt(Number(prompt ('Inserisci i km da percorrere...'))); 

const etaUtente = parseInt(Number(prompt ('Inserisci la tua età...')));


const prezzoBiglietto = kmDaPercorrere * 0.21;


document.getElementById ('km').innerHTML = kmDaPercorrere

document.getElementById ('eta').innerHTML = etaUtente

document.getElementById ('prezzo-biglietto').innerHTML = prezzoBiglietto

console.log (prezzoBiglietto)




