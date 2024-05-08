// reset
'use strict'

// definisco le variabili listaElementi e trovaElemento:
const listaElementi = ['pane', 'pasta', 'riso', 'carne', 'birra', 'gelato'];
const Elemento = 'birra';

// definisco una funzione trovaIndice, 
function trovaElemento(nomeArrey, cercaElemento){
    let counter = 0;

    // ciclo fino tutto l'arrey fino ad undefined:
    while (nomeArrey[counter] !== undefined) {
        console.log({nomeArrey});
        console.log({cercaElemento});
        console.log({counter});
        
        // condizione per estrapolare l'indice:
        if (nomeArrey[counter] === cercaElemento) return counter; 
        
        counter++;        
    }
    // se non trova il valore mi darà risultato -1:
    return -1;  
}

// salvo il risultato in var e mando a schermo:
const risultato = trovaElemento(listaElementi, Elemento);
console.log({risultato});

// FINE

