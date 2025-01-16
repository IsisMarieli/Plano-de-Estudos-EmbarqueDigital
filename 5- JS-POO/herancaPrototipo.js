const user = {
    nome: 'Isis',
    email: 'Isismourx@gmail.com',
    nascimento: '2024-09-09',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: 'lua',
    email: 'lua@gmail.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function(){
        console.log('curso criado');
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()