// reset
'use strict'

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const elementoUno = [1, 2, 3, 4, 5];
const elementoDue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log({elementoUno});
console.log({elementoDue});

while (elementoUno.length < elementoDue.length) {
    elementoUno.push(Math.floor(Math.random() * 100));
}

console.log({elementoUno});
console.log({elementoDue});
