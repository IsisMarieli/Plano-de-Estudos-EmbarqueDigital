const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

function encontrarLivroPorId(id) { 
    for (let livro of biblioteca){ // para variavel livro em biblioteca
        if(livro.id === id) // se livro.id for igual a o id 
            return livro; // retorne livro
    }
    return null; // retorna null se livro não for encontrado
} 

const livroEncontrado = encontrarLivroPorId(1);
    if (livroEncontrado) {
        console.log(livroEncontrado);
    } else {
        console.log("Livro não encontrado.");
    }

    const livroInexistente = encontrarLivroPorId(4);
    if (livroInexistente) {
        console.log(livroInexistente);
    } else {
        console.log("Livro não encontrado.");
    }

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]