class Programador extends Pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email);
        this.linguagem = linguagem;
    }
}