// reset
'use strict'

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const elemento1 = [1, 2, 3, 4, 5];
const elemento2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log({elemento1});
console.log({elemento2});

while (elemento1.length < elemento2.length) {
    
    elemento1.push(Math.floor(Math.random() * 100));
}

console.log({elemento1});
console.log({elemento2});


// soluzione 2
const elementoUno = [1, 2, 3, 4, 5];
const elementoDue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log({elementoUno});
console.log({elementoDue});
let contatore1 = elementoDue.length - elementoUno.length;
let conatatore2 = elementoUno.length - elementoDue.length;

if (elementoUno.length <= elementoDue.length) {
    for (let i = 0; i<contatore1; i++){
        elementoUno.push(Math.floor(Math.random() * 100));
    }
} else if (elementoDue.length <= elementoUno.length){
    for (let i = 0; i<conatatore2; i++)
        elementoDue.push(Math.floor(Math.random() * 100));
}

console.log({elementoUno});
console.log({elementoDue});

// FINE
