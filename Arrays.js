// Criando Arrays
    //#region 
    // 1. Declare uma variável usando const chamada hobbies e defina como um array com tres strings dentro.
    // Use console.log() para imprimir no console.

    const hobbies = ['Jogar Bola', 'Assistir Um Jogo De Basquete', 'Praticar Karaté']
    console.log(hobbies)
    console.log(hobbies[2])

   //#endregion
      
// Acessando elementos
   //#region 

   
   
   // Considere o array abaixo para as próximas 3 atividades:

   const citacoesFamosas = ['Você não pode ensinar nada a ninguém, mas pode ajudar as pessoas a descobrirem por si mesmas.',
   'Em algum lugar, alguma coisa incrível está esperando para ser descoberta.',
   'Nós somos o que fazemos repetidamente. A excelência, então, não é um ato, mas um hábito.'];

    //   1 - Elementos individuais em arrays também podem ser armazenados em variáveis.
    //       Crie uma variável nomeada listItem e defina-a igual ao primeiro item no
    //       array citacoesFamosas usando a notação de colchetes ([]).
    //       Em seguida, use console.log() para imprimir a variável listItem no console.

       const listItem = citacoesFamosas [0]
          console.log(listItem);

    //   2 - Agora, use o console.log() no terceiro elemento no array citacoesFamosas usando a notação de colchetes para acessar o elemento.
    //       Não salve o elemento em uma nova variável antes de exibir na tela.

    console.log (citacoesFamosas[2]);

    //   3 - Você pode acessar cada elemento em um array usando o índice. Mas o que acontece se você
    //       tentar acessar um índice que está além do último elemento? Tente exibir no console o
    //       item no índice [3] de citacoesFamosas. O que aparece?

    console.log (citacoesFamosas[3]);

   //#endregion

// Atualizando elementos
    //#region 
// Considere o seguinte array:

        let listaDeCompras = ['pão', 'tomates', 'leite'];

// 1. Altere o segundo elemento do array listaDeCompras para 'abacates'
//#endregion

listaDeCompras [1] = 'abacates';
console.log (listaDeCompras);

// Arrays com let e const
//#region 
// Considere os seguintes Arrays

let condimentos = ['Ketchup',
                   'Mostarda',
                   'Molho de Soja',
                   'Maionese'];

const utensilios = ['Garfo',
                    'Faca',
                    'Pauzinhos',
                    'Garfo'];

        // 1 - Abaixo dos dois arrays existentes,
        // reatribua o elemento de condimentos no índice 0 para 'Pimenta'.                    
        // Exiba o array condimentos atualizado no console.

        condimentos [0] = 'Pimenta';
        console.log (condimentos);

        // 2 - Abaixo do seu código da Etapa 1, reatribua condimentos para ser um novo array que contém uma única string['Pimenta']

        condimentos = ['Pimenta']
        console.log (condimentos);

        // 3 - Abaixo do código da Etapa 2, reatribua o último item do array utensílios para 'Colher'.

        utensilios [3] = 'Colher';
        console.log (utensilios);
        utensilios [4] = 'Colher de pau';
        console.log (utensilios);

//#endregion

//Tamanho/Length
//#region 

    // Encontre o tamanho do array objetivos e exiba no console.
    const objetivos = ['Aprender um novo idioma', 'Ler 52 livros', 'Correr uma maratona'];
    console.log (objetivos.length);
//#endregion




