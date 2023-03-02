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

let relatorio = '';

for (let info in cliente) {
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `;
    }
}
console.log(relatorio);