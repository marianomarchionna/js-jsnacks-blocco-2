// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
var nomi = ['Mariano', 'Andrea', 'Giovanni', 'Alessandro', 'Roberto'];
var cognomi = ['Pizzulli', 'Rossi', 'Marchionna', 'Costantino', 'Bosco'];
var lunghezza = nomi.length;
var random, random2;

for(var i = 0; i < lunghezza; i++){
    random = Math.floor(Math.random() * lunghezza);
    random2 = Math.floor(Math.random() * lunghezza);
    console.log(nomi[random] + ' ' + cognomi[random2]);
}