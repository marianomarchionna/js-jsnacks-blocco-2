// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var numero;
do {
    numero = parseInt(prompt('Inserisci un numero'));
} while(isNaN(numero));

if(numero % 2 != 0) {
    console.log(numero + 1);
} else {
    console.log(numero);
} 