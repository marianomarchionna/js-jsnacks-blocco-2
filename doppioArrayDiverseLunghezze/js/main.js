// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
var primoVettore = [];
var secondoVettore = [];
var primaLunghezza = 5;
var secondaLunghezza = 10;
var i;

for (i = 0; i < primaLunghezza; i++){
    primoVettore[i] = Math.floor(Math.random() * 100);
}
console.log("Primo vettore: " + primoVettore);

for (i = 0; i < secondaLunghezza; i++){
    secondoVettore[i] = Math.floor(Math.random() * 100);
}
console.log("Secondo vettore: " + secondoVettore);

while(primoVettore.length != secondoVettore.length){
    if(primoVettore.length > secondoVettore.length){
        secondoVettore.push(Math.floor(Math.random() * 100));
    }else{
        primoVettore.push(Math.floor(Math.random() * 100));
    }
}

console.log("Dopo la modifica: " + primoVettore);
console.log("Dopo la modifica: " + secondoVettore);

console.log("Lunghezza primo vettore: " + primoVettore.length);
console.log("Lunghezza secondo vettore: " + secondoVettore.length);