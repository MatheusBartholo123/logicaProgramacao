// Altere plantaPrecisaDeAgua para usar a sintaxe de arrow function

//Function Expression
// const plantaPrecisaDeAgua = function (dia) {
//     if (dia === 'Quarta-feira') {
//         return true;
//     } else {
//         return false;
//     }
// }

//arrow function
const plantaPrecisaDeAgua = (dia) => {
    if (dia === 'Quarta-feira') {
      return true;
    } else {
      return false;
    }
  }

  console.log(plantaPrecisaDeAgua('Quarta-feira'));