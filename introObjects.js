let spaceship = {
    'Fuel Type' : 'diesel',
    color: 'silver'
}

//tipo para acessar 1
console.log (spaceship);


let novaEspaconave = {
    name:'Coração De Ouro',
    'Fuel Type' : 'Luz',
    color : 'azul',
    speed : 300000,
    'Unit Speed' : 'km/s',
    crewMembers : 10,
    isLargerThan100 : true
}

//console.log (novaEspaconave);

//tipo para acessar 2
console.log (novaEspaconave["Fuel Type"]);
console.log (novaEspaconave.color);

const name = novaEspaconave.name;
const speed = novaEspaconave.speed;
const unit = novaEspaconave['Unit Speed'];


console.log (`A velocidade maxima da espaçonave ${name} é ${speed} ${unit}`)
console.log (`A quantidade de tripulantes é ${novaEspaconave.crewMembers}.`)
console.log (novaEspaconave.speed);
console.log (novaEspaconave.crewMembers);
console.log (novaEspaconave.isLargerThan100);

console.log (`O combustivel da espaçonave ${name} é ${novaEspaconave['Fuel Type']}`);
novaEspaconave['Fuel Type'] = 'Óleo Vegetal';
novaEspaconave.crewMembers++
console.log (`O novo combustivel da espaçonave ${name} é ${novaEspaconave['Fuel Type']}`);
console.log (`A quantidade de tripulantes da espaçonave ${name} é ${novaEspaconave.crewMembers}`);

const espaçonave2 = {
    type : 'shuttle',
    //sayHello : function () {
       //console.log ('Olá mundo');
    //}
    sayHello : () => {
        console.log ('Óla mundo 2');
    }
}

//espaçonave2 = {
    //type : 'alien'
//}

//console.log (espaçonave2);

espaçonave2.type = 'alien';
//console.log (espaçonave2.type);
espaçonave2.speed = 100;
espaçonave2.qtdPassageiros = 1000
console.log (espaçonave2);

//deletar

delete espaçonave2.qtdPassageiros;
delete espaçonave2.type;
delete espaçonave2.speed;

console.log (espaçonave2);
espaçonave2.sayHello();







