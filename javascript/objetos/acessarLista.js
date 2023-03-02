const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '1234562345',
    email: 'andrezito@gmail.com'
};

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));