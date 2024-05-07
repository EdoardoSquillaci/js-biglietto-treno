'use strict'



const kmDaPercorrere = (Number(prompt ('Inserisci i km da percorrere...'))); 

const etaUtente = parseInt(Number(prompt ('Inserisci la tua età...')));

let prezzoBiglietto = kmDaPercorrere * 0.21;

const scontoMinori = (prezzoBiglietto * 20) / 100

const scontoSenior = (prezzoBiglietto * 40) / 100


if(etaUtente<18){
    prezzoBiglietto = prezzoBiglietto - scontoMinori
    console.log (prezzoBiglietto)
}

else if (etaUtente>65){
    prezzoBiglietto = prezzoBiglietto - scontoSenior
    console.log (prezzoBiglietto)
}

else{
    console.log (prezzoBiglietto)
}


document.getElementById ('km').innerHTML = kmDaPercorrere

document.getElementById ('eta').innerHTML = etaUtente

document.getElementById ('prezzo-biglietto').innerHTML = prezzoBiglietto



