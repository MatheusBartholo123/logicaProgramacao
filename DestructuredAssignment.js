/**
 * 1 - Use a atribuição desestruturada para criar uma variável const denominada
 * funcionalidade que extrai a propriedade de funcionalidade de robot.
Se você precisar de um lembrete sobre como usar a atribuição desestruturada, revise
o exemplo na narrativa ou verifique a dica.
2 - Como a funcionalidade está se referindo a robot.functionality, podemos chamar os
métodos disponíveis para robot.functionality simplesmente por meio da funcionalidade.
Aproveite este atalho e chame o método .beep() na funcionalidade. 
*/

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };

  const secondRobot = {
    speed : 250,
    energyLevel : 400,
  }
  
  const resultRobot = Object.assign(robot, secondRobot);
  console.log (resultRobot === robot);

  const r1 = {
    altura : 5,
    largura : 5,
  }

  const r2 = {
    altura : 5,
    largura : 5,
  }

  const str1 = 'a';
  const str2 = 'a';

  console.log (str1 === str2);
  console.log (r1 === r2);

  console.log ('robot', robot);
  console.log ('resultRobot', resultRobot);
  console.log ('secondRobot', secondRobot);

  //const functionality = robot.functionality

//   const { functionality } = robot;

//   console.log (robot.hasOwnProperty('model'));
//   console.log (robot.functionality.valueOf());
//   console.log (robot);
//   functionality.beep();
//   functionality.fireLaser();

console.log (Object.keys(robot));
console.log (Object.entries(robot));