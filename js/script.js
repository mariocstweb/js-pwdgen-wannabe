// TEST JS
// console.log("js is ok");

// Creo una costante con un valore numerico

const myNumber = 21;

// Chiedo il nome all utente
const firstName = prompt("Come ti chiami?", "Mario");
// console.log(firstName);

// Chiedo il cognome all utente
const lastName = prompt("Qual'è il tuo cognome?", "Costa");
// console.log(lastName);

// Chiedo il colore preferito dell utente
const favoriteColor = prompt("Qual'è il tuo colore preferito?", "rosso");
// console.log(favoriteColor);

// Ho tutte le informazioni che mi servono

// Creo una password che abbia come risultato il valore della somma tra la mia prima costante dichiarata e il valore ottenuto dai precedenti tre prompt

const password = firstName + lastName + favoriteColor + myNumber;
// console.log(password);

// Recupero tramite get l id dell elemento al quale voglio aggiungere qualcosa tramite JS

const recupero = document.getElementById("yourPass");
// console.log(recupero);

// Inserisco il risultato della somma delle mie variabili nel punto esatto in cui si trova l id selezionato

recupero.innerHTML = password;
