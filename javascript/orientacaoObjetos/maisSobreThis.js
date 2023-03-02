// const pessoa = {
//     nome: 'Ana',
//     email: 'a@email.com',
//     imprimeNome: function() {
//         console.log(`${pessoa.nome}`);
//     }
// }

// pessoa.imprimeNome();

// const pessoa = {
//     nome: 'Ana',
//     email: 'a@email.com',
//     imprimeNome: function() {
//         console.log(`${this.nome}`);
//     }
// }

// function imprimeNomeEmail() {
//     console.log(`nome: ${this.nome}, email: ${this.email}`)
// }

// pessoa.imprimeNome();

// const pessoa1 = {
//     nome: 'Mari',
//     email: 'a@email.com',
//     imprimeInfo: imprimeNomeEmail
// }

// const pessoa2 = {
//     nome: 'Paula',
//     email: 'p@email.com',
//     imprimeInfo: imprimeNomeEmail
// }

// pessoa1.imprimeInfo();
// pessoa2.imprimeInfo();

function Pessoa(nome, email) {
    this.nome = nome;
    this.email = email;
    this.imprimeNomeEmail = function() {
        console.log(`nome: ${this.nome}, email: ${this.email}`);
    }
}

const individuo1 = new Pessoa('Xerxes', 'xer@email.com');
const individuo2 = new Pessoa('Melque', 'Melchzedeck@email.com');

individuo1.imprimeNomeEmail();
individuo2.imprimeNomeEmail();