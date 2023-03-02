function soma(numero1, numero2) {
    return numero1 + numero2;
}
console.log(soma(20, 22));


// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(24, 'Nico'))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica());

function teste(param) {
    console.log(param);
}

teste();