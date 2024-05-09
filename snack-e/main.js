// reset
'use strict'

// definisco arrey con degli elementi al suo interno:
const nomeLista = ['italia', 'svizzera', 'albania', 'spagna', 'scozia'];
console.log(typeof nomeLista);

// definisco funzione con un parametro nomeArrey:
function rimuoviDallaTesta(nomeArrey) {
  let newArrey = [];
	console.log(typeof newArrey)
  // itero per la lunghezza dell'arrey partendo da + 1:
  for (let i = 1; i<nomeArrey.length; i++) {
    // aggiungo al nuovo arrey gli elementi tranne il primo:
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
const risultato = rimuoviDallaTesta(nomeLista );
console.log(typeof risultato);

// FINE

