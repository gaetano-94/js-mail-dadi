'use strict';

/*
1. Mail
   Chiedi all’utente la sua email,
   controlla che sia nella lista di chi può accedere,
   stampa un messaggio appropriato sull’esito del controllo.

1) creare una variabile prompt, dove l'utente potrà inserire la sua email

2) creare un ARRAY con delle ipotetiche email, cosi da poter fare un ciclo e controllare se l'email del utente e presente

3) creare un ciclo con If collegato a un variabile ARRAY, facendo ciò possiamo vedere se l'email ci sia nella lista oppure no
*/

//1)
const emailUtente = prompt('inserisci la tua email');
console.log(emailUtente);

//2)
const varArray = ['gaetano@gmail.com', 'luca@libero.it', 'paolo@hotmail.it'];

//3)
let emailTrovata = false;
for (let i = 0; i < varArray.length; i++) {
  let elemento = varArray[i];

  if (emailUtente === elemento) {
    emailTrovata = true;
  }
}

if (emailTrovata === true) {
  console.log('email trovata');
} else {
  console.log('email non trovata');
}
