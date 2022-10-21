let v = 31;

if(v < 18){
    console.log('Insufficiente');
} else if (18 <= v && v < 21){
    console.log('Sufficiente');
} else if (v < 24) {
    console.log('Buono');
} else if (v < 27) {
    console.log('Distinto');
} else if (v <= 29) {
    console.log('Ottimo');
} else if (v === 30) {
    console.log('Eccellente');
} else {
    console.log('Valore non valido');
}