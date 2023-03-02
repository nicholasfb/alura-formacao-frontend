// A classe define os atributos (características) e os métodos (comportamentos) de um objeto.

class Pessoa {
    // Construtor
    constructor(nome, sobrenome, cpf,email) {
        // Características(propriedades)
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
    }

    // Comportamentos (Métodos)
    exibirNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}