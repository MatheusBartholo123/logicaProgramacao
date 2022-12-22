//1
const userName = 'Matheus';

//2
userName ? console.log(`Olá, ${userName}`) : console.log('Olá!');

//3
const userQuestion = 'Eu vou ser programador?';

//4
const perguntaCompleta = userName ? `${userName} esta perguntando: ${userQuestion}`
: `Usuario anônimo pergunta: ${userQuestion}`;

console.log(userQuestion);
console.log (perguntaCompleta);

//5
let randomNumber = (Math.floor(Math.random() * 8));
console.log (randomNumber);

//6
let eightBall = '';

//7 //8
// switch (randomNumber) {
//    case 0: {
//     eightBall = 'It is certain (É uma certeza).';
//     break;
//    }

//    case 1: {
//        eightBall = 'It is decidedly so (É decididamente assim.)';
//        break;
//    } 

//    case 2: {
//     eightBall = 'Reply hazy try again (Resposta nebulosa, tente de novo)';
//     break;
//    }

//    case 3: {
//     eightBall = 'Cannot predict now (Não consigo prever agora.)';
//     break;
//    }

//    case 4: {
//     eightBall = 'Do not count on it (Não conte com isso.)';
//     break;
//    }

//    case 5: {
//     eightBall = 'My sources say no (Minhas fontes dizem que não.)';
//     break;
//    }

//    case 6: {
//     eightBall = 'Outlook not so good (Perspectiva não tão boa)';
//     break;
//    }
    
//    case 7: {
//     eightBall = 'Signs point to yes (Os sinais apontam que sim)';
//     break;
//    } 

//    default: {
//          eightBall = 'sei lá, irmão'
//    }
// }

if (randomNumber === 0) {
    eightBall = 'It is certain (É uma certeza).';

}else if (randomNumber === 1) {
    eightBall = 'It is decidedly so (É decididamente assim.)';

}else if (randomNumber === 2) {
    eightBall = 'Reply hazy try again (Resposta nebulosa, tente de novo)';

}else if (randomNumber === 3) {
    eightBall = 'Cannot predict now (Não consigo prever agora.)';

}else if (randomNumber === 4) {
    eightBall = 'Do not count on it (Não conte com isso.)';

}else if (randomNumber === 5) {
    eightBall = 'My sources say no (Minhas fontes dizem que não.)';

}else if (randomNumber === 6) {
    eightBall = 'Outlook not so good (Perspectiva não tão boa)';

}else if (randomNumber === 7) {
    eightBall = 'Signs point to yes (Os sinais apontam que sim)';

}else {
    eightBall = 'Sei la, irmão'
}
































console.log (eightBall)








