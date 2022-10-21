// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
// simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
// supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore                                                                    


// // Suggerimento 
// // Usiamo questa formula per generare un numero random

// Math.floor(Math.random() * (max - min + 1) + min);



let tiri = 10;

let pG1 = 0;
let pG2 = 0;

for(let i = 0; i < tiri; i++){
    // genero il tiro del giocatore 1
    let tG1 = Math.floor(Math.random() * 6 + 1);
    pG1 = pG1 + tG1; 
    // genero il tiro del giocatore 2
    let tG2 = Math.floor(Math.random() * 6 + 1);
    pG2 = pG2 + tG2; 
}

if(pG1 > pG2){
    console.log(`Il giocatore 1 ha vinto ${pG1} a ${pG2}`);
} else if (pG1 < pG2){
    console.log(`Il giocatore 2 ha vinto ${pG2} a ${pG1}`);
} else {
    console.log(`Pareggio a ${pG1}`);
}