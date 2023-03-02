// O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:

function imprimeNomeEmail(tipoCliente, agencia) {
    console.log(`${tipoCliente} da agência ${agencia}: - nome: ${this.nome}, email: ${this.email}`);
}

const cliente1 = {
    nome: 'Carlos',
    email: 'zuckado@email.com'
}

const cliente2 = {
    nome: 'Fred',
    email: 'srK@email.com'
}

// Chamando imprimeNomeEmail com o método apply() e passando um array de dados como segundo parâmetro (lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call()

const clienteEspecial = ['Cliente especial', 'São Paulo']

const clienteEstudante = ['cliente estudante', 'Minas Gerais']

imprimeNomeEmail.apply(cliente1, clienteEspecial);

imprimeNomeEmail.apply(cliente2, clienteEstudante);

// Utilize o método apply() caso você tenha um array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.
