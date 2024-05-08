# ESERCIZIO: JSnack blocco 2

> [!NOTE]
>
> repo: js-jsnacks-blocco-2

## Snack 4:

Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.

## Snack a:
- scrivere una funzione ``contaElementi()` che, dato un array in input, restituisca il numero di elementi presenti nell'array.

### Svolgimento:
1. definisco una valriabile si arrey `listaElementi`;
2. creo una funzione `contaElementi()`, passandogli come parametro il `nomeArrey`:
```
fuction contaElementi(nomeArrey){ ... }
```
3. all'interno della funzione attraverso attraverso una istruzione di iterazione `while` ciclo la lunghezza dell'arrey fino a che non trovo nessun elemento con un valore diverso da undefied interompendo il ciclo con una condizione:
```
let counter = 0
while (true){
    if (nomeArrey[counter] === undefined){ 
        break;
    }
    counter++;
}
```
4. salvo il risultato su una variabile e stampo il risultato.

##### Fine

## Snack b:
- scrivere una funzione `trovaIndice()` che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; 
- se l'elemento non è presente nell'array, allora la funzione deve restituire -1.

### Svolgimento:
1. definisco le variabili listaElementi e trovaElemento;
2. definisco una funzione trovaIndice, con due parametri:
```
function trovaElemento(nomeArrey, cercaElemento){ ... }
```
3. ciclo fino tutto l'arrey fino ad undefined:
```
while (nomeArrey[counter] !== undefined){ ... }
```
4. scrivo una istruzione condizionale per individuare l'indice dell'elemento da cercare:
```
if (nomeArrey[counter] === cercaElemento) return counter;
```
5. salvo il risultato in var e mando a schermo.

##### Fine

