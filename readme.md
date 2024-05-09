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

## Snack c:
- scrivere una funzione `stampa()` che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola.

### Svolgimento:
1. definisco un arrey di elementi `listaElementi`;
2. adopero la stessa funzione `contaElementi()` fatta nel snack a per contare la lunghezza dell'arrey;
3. definisco la funzione `stampa()` e all'interno itero per la lunghezza dell'arrey con ciclo for:
```
for (let i = 0; i<contaElementi(nomeArrey); i++) { ... }
```
4. scrivo un'istruzione condizionale per evitare di mettere la virgola nell'ultimo elemento.
Per tuttti gli elementi tranne l'ultimo aggiungo l'elemto dell'arrey + la virgola, mentre per l'ultomo solo l'elemento senza la virgola:
```
if (i < contaElementi(nomeArrey) - 1) {
           separatore += nomeArrey[i] + ', ';
        }  else {
            separatore += nomeArrey[i];
        }
```
5. salvo il risultato in una variabile e mando a schermo.

##### Fine

## Snack d:
- scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo.

### Svolgimento:
1. definisco arrey con degli elementi al suo interno;
2. definisco funzione con un parametro nomeArrey;
3. itero per la lunghezza dell'arrey meno uno;
4. aggiungo al nuovo arrey gli elementi tranne l'ultimo:
```
for (let i = 0; i < nomeArrey.length - 1; i++) {
    nuovoArrey.push(nomeArrey[i]);
}
```
5. salvo il risultato in una variabile e mando a schermo.

##### Fine

## Snack e:
- scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione.

### Svolgimento:
1. definisco arrey con degli elementi al suo interno;
2. definisco funzione con un parametro nomeArrey;
3. itero per la lunghezza dell'arrey partendo da + 1:
```
for (let i = 1; i<nomeArrey.length; i++){ ... }
```
4. aggiungo al nuovo arrey gli elementi tranne il primo;
5. selvo il risultato in una variabile e mando a schermo.

##### Fine

## Snack Bonus:
- scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A.

### Svolgimento:
1. definisco funzione con due parametri, nomeArrey e newItem;
2. aggiungo al nuovo arrei il nuovo elemento;
3. itero per la lunghezza dell'arrey:
```
newArrey[newArrey.length] = newItem;
```
4. aggiungo al nuovo arrey gli elementi dell'arrey listaElementi;
5. selvo il risultato in una variabile e mando a schermo.

##### FINE