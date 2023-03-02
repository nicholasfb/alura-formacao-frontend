// Tipo String -> armazenar caracteres

const texto1 = 'Olá, mundo!';
const texto2 = "Olá, mundo!";
const senha = 'senhaSuperSegura456!';
const StringDeNumeros = '34567';

const citacao = 'O Melquezedeque disse "Olá,"';

console.log(citacao)

// Template String ou Template literal

// Concatenação (+)

const frase = 'Meu nome é ';
const nome = 'Melquezedeque';

console.log(frase + nome);

// Unicode

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Comparação entre Strings

const cidade = 'são paulo';
const input = 'São Paulo';

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);

const senhaMinha = 'minhaSenha123';
console.log(senhaMinha.length)