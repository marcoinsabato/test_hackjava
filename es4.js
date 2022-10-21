let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 40;
let f = -6;
let g = 7;

let min = Math.min(a,b,c,d,e,f,g);
let max = Math.max(a,b,c,d,e,f,g);

let max1 = a;

if(max1 < b) {
    max1 = b;
} 
if(max1 < c) {
    max1 = c;
} 
if(max1 < d) {
    max1 = d;
} 
if(max1 < e) {
    max1 = e;
} 
if(max1 < f) {
    max1 = f;
} 
if(max1 < g) {
    max1 = g;
}

console.log(max1);