// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
var interi = [];
lunghezza = 10;
var somma = 0;
console.log("Numeri array: ")
for (var i = 0; i < lunghezza; i++){
    interi[i] = Math.floor(Math.random() * 100);
    console.log("Posizione " + i + ": " + interi[i]);
    if(i % 2 != 0){
        somma += interi[i];
    }
}
console.log("La somma dei numeri in posizione dispari è: " + somma);