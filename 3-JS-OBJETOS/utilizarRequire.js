// // 1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

// const buscarDados = require('./dados.json');

// console.log(buscarDados);
// // 2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.
// console.log(buscarDados.usuarios);


// // 3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
// // // id (number): identificador do produto.
// // nome (string): nome do produto.
// // preco (number): preço do produto.
// // Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.
// const produto = {
//     id: 1,
//     nome: "Camiseta",
//     preco: 25.99
// }

// const converterProduto = JSON.stringify(produto);

// console.log(converterProduto);



// 5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:
// id (number): identificador da pessoa.
// nome (string): nome da pessoa.
// idade (number): idade da pessoa
// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

const objeto = {
    id: 1,
    nome: "Laís",
    idade: 21
}
function copiaObjeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

console.log(copiaObjeto(objeto)); 