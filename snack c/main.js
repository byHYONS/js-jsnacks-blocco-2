// reset
'use strict'

// definisco un arrey di elementi:
const listaElementi = ['motore', 'friziona', 'cambio', 'differenziale', 'semiasse', 'telaio', 'ruote', 'freni', 'portiere'];
const punteggiatura = ', ';

// funzione conta elementi (snack a), per contare l'unghezza arrey:
function contaElementi(nomeArrey){
    let counter = 0;
    while (true){
        if (nomeArrey[counter] === undefined){ 
            break;
        }
        counter++;
    }
    console.log({counter});
    return counter
}

// definisco una finzione stampa():
function stampa(nomeArrey, typeface){
    let separatore = '';
    // ciclo per la lunghezza dell'arrey con il for:
    for (let i = 0; i<contaElementi(nomeArrey); i++) {
        console.log(i);
        
        // istruzione condizionale per evitare di mettere la virgola nell'ultimo elemento.
        //per tutti gli elementi tranne l'ultimo aggiungo un elemento + la virgola:
        if (i < contaElementi(nomeArrey) - 1) separatore += nomeArrey[i] + typeface;
         
        // ultimo elemento aggiungo solo l'elemento:
        else separatore += nomeArrey[i];
               
    }
    return separatore;
}

// salvo il risultato in una variabile e mando a schermo:
const risultato = stampa(listaElementi, punteggiatura);
console.log(risultato);

// FINE

