class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

const nicholas = new Cliente("Nicholas", "nicholas@email.com", "1235432323", 100);

console.log(nicholas);
console.log(nicholas.depositar(20));
nicholas.exibirSaldo();