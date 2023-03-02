function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoupanca = saldoPoupanca;
}

const ju = new ClientePoupanca("Ju", "1144224433", 'ju@email.com', 100, 200);

console.log(ju);

ClientePoupanca.prototype.depositarPoupanca = function(valor) {
    this.saldoPoupanca += valor;
}

ju.depositarPoupanca(30);
console.log(ju.saldoPoupanca);