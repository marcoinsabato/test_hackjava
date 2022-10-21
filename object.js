let persona = {
    name : 'Marco',
    surname : 'Insabato',
    age : 27,
    hobby : ['musica','cinema','viaggi'],
    patente: true,
    presentati : function(){
        console.log(`Ciao sono ${this.name}`);
    },
    // presentati2 : () => {
    //     console.log(this);
    // }

};

// persona.auto = 'Twingo GT'
// persona.age = 28;

// persona.saluta = function(name){
//     console.log(`Ciao ${name} carissimo come stai?`)
// }

// persona.saluta('Massimo');


// let arr = [2,2,1,4,6 , 5 , 7 ,9];

// let checkIfAllEven = arr.some((el) => {
//     return el % 2 == 0;
// })

// let even = arr.filter((el) => {
//     return el % 2 == 0;
// })

// console.log(arr);
// console.log(even);

let arr = [1,2,3,4,5];
let newArr = [];

// let last = arr.pop();
// arr.push(6)

// arr.forEach(el => {
//     console.log(el);
//     newArr.push(el*2)
// })

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
    
//     console.log(element);
// }

let numbers = [1,2,3,4,5,6,10,20,100,3];

let studenti = ['Michele' , 'Marcello' , 'Davide' , 'Luigi' , 'Gesualdo']

console.log(numbers.sort((a,b) => b - a));



// let frutta = ['🍌','🍏','🍐','🍓','🍍'];

// let sum = numbers.reduce((tot , el) => {
//     console.log(tot, el)
//     return tot + el;
// } , 50)

// let macedonia = frutta.reduce((coppa , frutto) => {
//     coppa += `${frutto} tagliato a fette...\n`;

//     return coppa;
// } , '')

// console.log(sum);