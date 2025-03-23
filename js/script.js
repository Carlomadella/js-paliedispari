// Numero minimo di push: 7

// PRIMO ESERCIZIO: Palindroma
// 
// Scaletta:
// 1. Chiedere all’utente di inserire una parola:
//  1a. creare una varabile chiamata word che contenga il valore del prompt
//  1b. creare una variabile chiamata reversedWord che utilizza il metodo reverse per contenere il valore
// creare un array chiamato wordArray per contenere i caratteri spezzettati del prompt col metodo text.split("")
// 2. Creare una funzione per capire se la parola inserita è palindroma:
//  2a. creare una funzione chiamata pal con parametro word
//  2b. creare un if per controllare se la variabile è uguale alla parola al contrario
//  2c. stampare il risultato
//  2d. richiamare la funzione

let word = prompt("inserisci una parola per controllare se è palindroma");
console.log(word);

function pal(word) {
    let lowCase = word.toLowerCase();
    let wordArray = word.split("");
    let reversedWord = wordArray.reverse();
    let reverseString = reversedWord.join("");
    if (lowCase === reverseString) {
        console.log("La parola è palindroma");
    } 
    else {
        console.log("La parola non è palindroma");
    }
}
pal(word);

// PARI E DISPARI
// 
// 1. L’utente sceglie pari o dispari
//  1a. creare prompt
// 2. L'utente inserisce un numero da 1 a 5. 
//  2a. creare prompt
//  2b. stampare risultato prompt
// 3. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  3a. creare funzione per generare un numero random in un intervallo tra min e max
//  3b. immagazzinare il contenuto in una variabile dando come parametri min 1 e max 5
//  3c. stampare numero computer
// 4. Sommiamo i due numeri
//  4a. creare una funzione generica per sommare due valori 
//  4b. stampare risultato funzione avente come parametri i numeri dei due giocatori
// 5. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//  5a. Creare funzione contenente if ed else per stabilire chi ha vinto

let userPrompt = prompt("Decidi se pari o dispari se pensi che la somma del tuo numero e di quello del computer sia dispari");

let userNum = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("Hai scelto" + " " + userNum);

function randomNum(min, max) { //funzione per generare un numero da 1 a 5
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
const randomRes = randomNum(1, 5);
console.log("La scelta dell'avversario è", randomRes);