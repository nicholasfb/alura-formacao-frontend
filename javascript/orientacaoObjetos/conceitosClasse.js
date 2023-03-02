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

class Programador extends Pessoa {
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email);
        this.linguagem = linguagem;
    }
}

const novoDev = new Programador("Nicholas", "Barbosa", "48443523423", "nicholas@email.com", "JavaScript");

console.log(novoDev);
console.log(novoDev.exibirNomeCompleto());
