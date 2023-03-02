//Esse método permite que uma função seja chamada com parâmetros e valor de this específicos

function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`);
}

const cliente1 = {
    nome: 'Ashtar',
    email: 'ash@email.com'
}

const cliente2 = {
    nome: 'Kruash',
    email: 'kruash@email.com'
}

imprimeNomeEmail.call(cliente1, 'Premium');

imprimeNomeEmail.call(cliente2,'Master');

// O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.