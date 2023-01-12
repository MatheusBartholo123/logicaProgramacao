//Metodos de Array
// Push
//#region
    // 1 - Adicione dois elementos para a lista de tarefas.

    const tarefas1 = ['lavar pratos', 'lavar roupas', 'botar o lixo para fora'];
    tarefas1.push ('Arumar a cama', 'Limpar a cozinha');
   // console.log (tarefas1);

//#endregion

// Pop
//#region
    // 1 - Remova o ultimo elemento da lista de tarefas.

    const tarefas2 = ['lavar pratos', 'lavar roupas', 'botar o lixo para fora', 'fazer o jantar', 'passar pano na casa'];
    tarefas2.pop();
    //console.log (tarefas2);

//#endregion

// Shift/Unshift/Slice
//#region
//Considere o array abaixo

const listaDeCompras2 = ['suco de laranja', 'bananas', 'café', 'arroz', 'macarrão', 'óleo de soja', 'vegetais', 'macarrão', 'arroz'];

// 1 - Use o método .shift() para remover o primeiro item do array listaDeCompras2.

listaDeCompras2.shift();
//console.log (listaDeCompras2);

// 2 - Exiba o novo array listaDeCompras2 no console.

//console.log (listaDeCompras2);

// 3 - Use o método .unshift() para adicionar 'pipoca' ao início de sua lista de compras.

listaDeCompras2.unshift('Pipoca');
//console.log (listaDeCompras2);

// 4 - Você pode excluir a instrução console.log() da etapa anterior.

// 5 - Você está com pressa, então decide pedir a um amigo para ajudá-lo com suas compras.
//     Você quer que ele pegue as 'bananas', 'café' e 'arroz'.

const listaDoAmigo = listaDeCompras2.slice(1,4);
//console.log (listaDoAmigo);

// 6 - No código que você adicionou na questão, use .slice() para fornecer a seu amigo uma lista
// dessas três coisas.

// 7 - Exiba o valor do  de listaDeCompras2, perceba que a lista original não foi alterada, o que demonstra que o 
// método .slice é non-mutating.

//console.log (listaDeCompras2);

// 8 - Vamos encontrar o índice de um elemento específico em listaDeCompras2 usando o .indexOf()
//  Chame .indexOf() em listaDeCompras2 para encontrar o índice do elemento 'arroz' e
//  salve o valor retornado em uma variável const chamada arrozIndex.

// const result = listaDeCompras2.indexOf('macarrão');
// console.log (result);


// .toString() - retornar strings
console.log (listaDeCompras2);
console.log (listaDeCompras2.toString());

// .join() - separador
const str = ['O', 'curso', 'do', 'senac', 'de', 'programação', 'é', 'otimo!'];
console.log (str);
console.log (str.join(' '));

// .concat() - retorna uma copia da junção dos arrays e guarda em outro espaço da memória
const alfabeto = ['a', 'b', 'c'];
const numerosNaturais = [0, 1, 2];

const strConcat = alfabeto.concat(numerosNaturais);

console.log (strConcat);
console.log (alfabeto);
console.log (numerosNaturais);

// .splice() - permite inserir novos elementos e excluir elementos existentes em um array simultaneamente.

const mesesDoAno = ['Janeiro', 'Março', 'December', 'Março', 'Maio'];
console.log (mesesDoAno.splice(1, 2, 'Fevereiro'));
console.log (mesesDoAno);
mesesDoAno.splice(3, 0, 'Abril');
console.log (mesesDoAno);

const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
arr.splice (0, 20);
console.log (arr);

// .indexOf() - é utilizado para encontrar um valor dentro de uma string ou array, caso o valor não seja encontrado, ele retorna -1. 

const result = listaDeCompras2.indexOf('arroz');
console.log (result);

// .lastIndexOf() - retorna o índice da última ocorrência do valor especificado encontrado na String . Quando fromIndex é especificado, a pesquisa é realizada de trás para frente

console.log (listaDeCompras2.lastIndexOf('arroz'));

// .find() - retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado. 

console.log (arr.find(function(valor) {
    return valor === 'X';
}))

// .findIndex() - retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

console.log (arr.findIndex(function(valor) {
    return valor === 'X';
}))


//#endregion
