const estudantes = require('./estudantes.json');

function filtraPorPropiedade(lista, propiedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propiedade);
    })
}

const listaEnderecosImcompletos = filtraPorPropiedade(estudantes, 'cep');
console.log(listaEnderecosImcompletos); 