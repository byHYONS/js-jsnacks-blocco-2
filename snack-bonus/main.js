// reset
'use strict'


// definisco arrey con degli elementi al suo interno + una variabile con un nuovo elemento da inserire nell'arrey:
const listaElementi = ['soletta', 'fondazioni', 'pareti', 'pavimento', 'soffitto'];
const nuovoElemento = 'tetto';

// definisco funzione con due parametri, nomeArrey e newItem:
function inserisciInTesta(nomeArrey, newItem) {
   
   // aggiungo al nuovo arrei il nuovo elemento:
   let newArrey = [];
   newArrey[newArrey.length] = newItem;

  // itero per la lunghezza dell'arrey:
  for (let i = 0; i<nomeArrey.length; i++) {
    
    // aggiungo al nuovo arrey gli elementi dell'arrey listaElementi:
    console.log(nomeArrey[i])
    console.log(newArrey.length)
    newArrey[newArrey.length] = nomeArrey[i];
    console.log(i)
    console.log({nomeArrey})
    console.log({newArrey})
  }           
   return newArrey;   
}

// selvo il risultato in una variabile e mando a schermo:
const risultato = inserisciInTesta(listaElementi, nuovoElemento);
console.log(typeof risultato);

// FINE
