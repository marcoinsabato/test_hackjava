let day = prompt('Inserisci un numero da 1 a 7');

console.log(typeof day);

switch (day) {
    case '1':
        console.log('Lunedi');
        break;
    case '2':
        console.log('Mar');
        break;
    case '3':
        console.log('Mer');
        break;
    case '4':
        console.log('Gio');
        break;
    case '5':
        console.log('Ven');
        break;
    case '6':
        console.log('Sab');
        break;
    case '7':
        console.log('Dom');
        break;
    default:
        console.log('non ho trovato valori validi');
}