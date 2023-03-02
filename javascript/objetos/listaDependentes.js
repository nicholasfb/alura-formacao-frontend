const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1234562345',
    email: 'andrezito@gmail.com',
    fones: ['55912345498', '5521988743124'],
    dependentes: [{
        nome: 'Melque Zedec',
        parentesco: 'afilhado',
        dataNascimento: '20/02/1991'
    }]

};

cliente.dependentes.push({
    nome: 'Ashtar Sheran',
    parentesco: 'sobrinho',
    dataNascimento: '02/02/2000'
});

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === '02/02/2000');

console.log(filhaMaisNova);