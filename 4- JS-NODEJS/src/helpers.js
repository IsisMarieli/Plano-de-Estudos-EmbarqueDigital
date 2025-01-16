function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function montaSaidaArquivo(limpaPalavras) {
    let textoFinal = '';
    limpaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `palaveas duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`
    });

    return textoFinal;
}

export { montaSaidaArquivo };