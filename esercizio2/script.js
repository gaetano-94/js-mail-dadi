'use strict';

/*
2. Gioco dei dadi
   Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
   Stabilire il vincitore, in base a chi fa il punteggio più alto.

1) creare due variabili, uno per il giocatore e una per il computer

2) creare una condizione dove mi generi dei numeri randomici, tra 1 a 6 cosi da poter essere utilizzata dal giocatore e dal computer.E chi dei due avrà il numero piu altro, sarà il vincitore della partita

*/

//1)
const punteggioGiocatore = Math.floor(Math.random() * 6) + 1;
const punteggioComputer = Math.floor(Math.random() * 6) + 1;

console.log('Punteggio del giocatore:' + ' ' + punteggioGiocatore);
console.log('Punteggio del computer:' + ' ' + punteggioComputer);

//2)
if (punteggioGiocatore > punteggioComputer) {
  console.log('Il giocatore vince');
} else if (punteggioComputer > punteggioGiocatore) {
  console.log('Il computer vince');
} else {
  console.log('E un pareggio');
}
