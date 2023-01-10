/**
 * 1 - Escreva uma função, digaOi(). Sua função não deve ter parâmetros e retornar a string 'Oi, Mundo'.
 * 
 * 2 - A idade mínima mais comum para votar é 18 anos.
 * Escreva uma função possoVotar() que receba um número, representando a
 * idade da pessoa, e retorne o booleano true se ela tiver 18 anos ou 
 * mais e o booleano false se não tiver. 
 * 
 * 3 - Escreva uma função, concordoDiscordo(), que receba duas strings e
 * retorne 'Vocês concordam!'se as duas strings forem iguais e 'Vocês discordam' se
 * forem diferentes.
 * 
 * 4 - Escreva uma função, faseDaVida(), que receba a idade de uma pessoa como um número,
 * e retorne em qual fase da vida ela está.
        Aqui estão as classificações:
        0-3 deve retornar 'bebe'
        4-12 deve retornar 'criança'
        13-19 deve retornar 'adolescente'
        20-64 deve retornar 'adulto'
        65-140 deve retornar 'idoso'
        Se o número for menor que 0 ou maior que 140,
        o programa deve retornar 'Esta não pe uma idade válida'
    5 - Escreva uma função, notaFinal(). 
    Deve:
        -> pegue três argumentos do tipo número
        -> encontre a média desses três números
        -> retornar a nota da letra (como uma string) que a média corresponde
        -> retornar 'Você digitou uma nota inválida.' se qualquer uma das três notas for menor
        que 0 ou maior que 100
        0-59 deve retornar: 'F'
        60-69 deve retornar: 'D'
        70-79 deve retornar: 'C'
        80-89 deve retornar: 'B'
        90-100 deve retornar:'A'
6 - Escreva uma função, seApresente(), que tenha dois parâmetros de string, patente e ultimoNome,
e retorne uma string no seguinte formato: 'patente ultimoNome se apresentando para o serviço!'
 */

//1
function digaOi () {
    return 'Oi, Mundo';
}

console.log (digaOi())

//2
function possoVotar (idade) {

if (idade >= 18) {
    return true;

}else {
    return false;
}

}

console.log(possoVotar());

//3
function concordoDiscordo (primeiraSentença, segundaSentença) {
    if (primeiraSentença === segundaSentença) {
        return 'Vocês concordam!' 

    } else {
        return 'Vocês discordam'
    }
}

console.log (concordoDiscordo ('Gosto de pizza', 'Gosto de pizza'));

//4
function faseDaVida (IdadeP) {

    if (IdadeP >= 0 && IdadeP <= 3) {
        return 'bebe';

    } else if (IdadeP >= 4 && IdadeP <= 12) {
        return 'criança';

    } else if (IdadeP >= 13 && IdadeP <= 19) {
        return 'adolescente';

    } else if (IdadeP >= 20 && IdadeP <= 64) {
        return 'adulto';

    } else if (IdadeP >= 65 && IdadeP <= 140) {
        return 'idoso';

    } else {
        return 'Esta não e uma idade válida';
    }

}

console.log(faseDaVida(19));

//5
function notaFinal (n1, n2, n3) {
  const media = (n1 + n2 + n3) /3

  if (media >= 0 && media <= 59) {
    return 'F';

  } else if (media >= 60 && media <= 69) {
     return 'D';

  } else if (media >= 70 && media <= 79) {
    return 'C';

  } else if (media >= 80 && media <= 89) {
    return 'B';

  } else if (media >= 90 && media <= 100) {
    return 'A';

  } else {
    return 'Voce digitou uma nota invalida';
  }
     
}

console.log (notaFinal(100,100,100));

//6
function seApresente (patente, ultimoNome) {
     
    return `${patente} ${ultimoNome} se apresentando para o serviço!`;
}

console.log (seApresente('General', 'Matheus'));






