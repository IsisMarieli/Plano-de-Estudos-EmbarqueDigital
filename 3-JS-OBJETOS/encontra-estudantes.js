const estudantes = require('./estudantes.json');

function buscarInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor)); // O find apresenta apenas a primeria ocorrencia encontrada
}

const estutandeEncontrado = buscarInformacao(estudantes, 'nome', 'Juliet');
console.log(estutandeEncontrado);

const telefoneEstudante = buscarInformacao(estudantes, 'telefone', '7919437785');
console.log(telefoneEstudante);