const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1234562345',
    email: 'andrezito@gmail.com',
    fone: ['55912345498', '5521988743124']
};

cliente.dependente = {
    nome: 'Melquezedec',
    parentesco: 'afilhado',
    dataNascimento: '20/02/2010'
};

console.log(cliente);

cliente.dependente.nome = 'Melquezedec Tra';
console.log(cliente);