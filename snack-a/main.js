// reset
'use strict'


// arrey in input:
const listaElementi = [1, 2, 3, 4, 5, 'pane', 'pasta', 'birra', true, false];


// funzione per calcolare il numero degli elementi:
function contaElementi(nomeArrey){
    let counter = 0
    while (true){
        if (nomeArrey[counter] === undefined){ 
            break;
        }
        counter++;
    }
    console.log(counter);
}

// salvo il risultato in var e stampo:
const risultato = contaElementi(listaElementi);
console.log({risultato});


// FINE

