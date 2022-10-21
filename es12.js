// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Nel controllo scarta gli spazi e i segni di punteggiatura.

// Esempio:
//   Input: i topi non avevano nipoti
//   Output: TRUE


// Consigli:
// Puoi eliminare spazi e segni di punteggiatura usando :

// str.replace(/\W/g, "").

// TO DO
// 1. Eliminare gli spazi 💚
// 2. invertire la stringa
// 3. confrontarla con la stringa originale

Number.prototype.toString = function(num){
    return 'awe';
}


console.log((5).toString());
let str = 'i topi non avevano nipoti';

let clearifiedString = str.replace(/\W/g, "");

let check = true;

for(let i = 0 ; i < parseInt(clearifiedString.length / 2) ; i++){
    let charFromHead = clearifiedString[i];
    let charFromTail = clearifiedString[clearifiedString.length - 1 - i]
    
    if(charFromHead != charFromTail ){
        check = false;
        break;
    }
}

function checkIfPalindrome(str){
    let clearifiedString = str.replace(/\W/g, "");
    let reversedString = '';


    for(let i = clearifiedString.length - 1; i >= 0 ; i--){
        reversedString += clearifiedString[i]
    }

    return reversedString == clearifiedString

    // let check = true;
    
    // for(let i = 0 ; i < parseInt(clearifiedString.length / 2) ; i++){
    //     let charFromHead = clearifiedString[i];
    //     let charFromTail = clearifiedString[clearifiedString.length - 1 - i]
        
    //     if(charFromHead != charFromTail ){
    //         check = false;
    //         break;
    //     }
    // }

    // return check;
}

console.log(checkIfPalindrome('osso'));
console.log(checkIfPalindrome('anna'));
console.log(checkIfPalindrome('marco'));
console.log(checkIfPalindrome('yamamay'));

