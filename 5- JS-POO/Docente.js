import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = "true"){
        super(nome, email, nascimento, role, ativo)
    }
        aporvarEstuante(estudante, curso) {
            return `Estudante ${estudante} passou no curso de ${curso}, inresponsável ${this.nome}.`
        }        
}

// const novoDocente = new Docente("Ana", "a@a.com","2024-02-02")
// console.log(novoDocente.aporvarEstuante('Juliana','JavaScript'));

