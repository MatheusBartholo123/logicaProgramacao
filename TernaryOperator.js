/**
 * Refatore ou edite cada um dos blocos if...else para usar um operador ternário.
 */


// if (isLocked) {
//     console.log('Você vai precisar de uma chave para abrir a porta.');
// }else {
//     console.log('Você não vai precisar de uma chave para abrir a porta.');
// }

// if (isCorrect) {
//     console.log('Correto!');
// }else {
//     console.log('Incorreto!');
// }

// if (favoritePhrase) {
//     console.log('Eu gostei disso!');
// }else {
//     console.log("Eu não gostei disso.");
// }


//operador ternário 
let isLocked = false;

isLocked ? console.log('Você vai precisar de uma chave para abrir a porta.') : console.log('Você não vai precisar de uma chave para abrir a porta.');


let isCorrect = true;

isCorrect ? console.log('Correto!') : console.log('Incorreto!');


let favoritePhrase = 'Gostei!';

favoritePhrase === 'Gostei!' ? console.log('Eu gostei disso!') : console.log("Eu não gostei disso.");
