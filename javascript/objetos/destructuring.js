const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [...numerosPares, ...numerosImpares];

// const num1 = 1;
// const num2 = 2;

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5];
console.log(num1, num2, outrosNumeros);

const [nome1 = 'Ju'] = [];
console.log(nome1);

const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: 1122334455
};

console.log(pessoa, pessoaComTelefone);

// const nome = pessoa.nome;
// console.log(nome);

const { nome } = pessoa;
console.log(nome);

function imprimeDados({ nome, idade

}) {
    console.log(nome, idade);
    // const { nome, idade } = dados;
    // console.log(nome, idade);
}

imprimeDados(pessoa);