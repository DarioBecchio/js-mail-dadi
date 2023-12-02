/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

//Creo una costante dove inserire la mail scritta dall'utente su un form
/*
-AddEventListener
-Const
-Value
*/
const button = document.querySelector('.btn');

//Creo un database dove ci sono un elenco di mail
/*
-Const
-Array
*/
const mails = [ 'federico@libero.it' , 'giorgio@libero.it' , 'dario@libero.it' , 'elisa@libero.it' , 'giorgia@libero.it' , 'giada@libero.it'];

button.addEventListener('click' , function (){
    const insertedMail = (document.getElementById('formGroupExampleInput').value);
    console.log(insertedMail);
    for (let i = 0; i < mails.length; i++) {
        const element = mails[i];
        console.log(element);    
    //Scorro le mail dell'elenco e verifico se la mail inserita è presente nel database
    //Stampo il messaggio
    if (insertedMail == element){
    console.log('true');
    document.getElementById('result').innerHTML = `<p> la tua mail è nell'elenco </p>`
    } /*else {
    console.log('false');
    document.getElementById('result').innerHTML = `<p> la tua mail non è nell'elenco </p>`
    }*/
}

}
)

/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

/*
const user_play = Math.floor((Math.random() * 6) + 1);
const comp_play = Math.floor((Math.random() * 6) + 1);
console.log(user_play , comp_play);

if ( user_play == comp_play){

    console.log('Pari e patta');

} else if(user_play > comp_play){

    console.log('Hai vinto');
} else {

    console.log('Hai perso');
}

