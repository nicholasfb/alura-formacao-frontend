const cliente = {
    nome: 'Melque',
    idade: 32,
    cpf: '1234565432',
    email: 'melquezedec@email.com',
    fones: ['112423-2342', '112423-3224'],
    dependentes: [
        {
            nome: 'Ashtar',
            parentesco: 'filha',
            dataNascimento: '10/06/1991'
        },
        {
            nome: 'Kruashtron',
            parentesco: 'filho',
            dataNascimento: '10/06/1990'
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

// const propsClientes = Object.keys(cliente);
// console.log(propsClientes);

function oferecerSeguro(objeto) {
    const propsClientes = Object.keys(objeto);
    if(propsClientes.includes('dependentes')) {
        console.log(`Oferta de seguro de vida para ${objeto.nome}`);
    }
}

// function verificaDependentes(objeto) {
//     const propsClientes = Object.values(objeto.dependentes);
//     if(propsClientes) {
//         console.log(`O cliente ${objeto.nome} possui dependente(s)`);
//     } else {
//         console.log(`O cliente ${objeto.nome} não possui dependente(s)`);
//     }
// }

// console.log(Object.values(cliente.dependentes));
verificaDependentes(cliente);
oferecerSeguro(cliente);