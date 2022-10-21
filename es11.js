function countDigits(num){
    // let str = num.toString();
    // let count = str.length;
    
    // return count;
    if(num < 10){
        return 1;
    } else if (num < 100){
        return 2;
    } else if (num < 1000){
        return 3;
    } else if (num < 10000){
        return 4;
    }
}

console.log(countDigits(10));
console.log(countDigits(100));
console.log(countDigits(1));
console.log(countDigits(9999));

