const nome = 'Nico';
const idade = 2022 - 1998;
const cidadeDeNascimento = 'São Paulo'
let apresentacao = 'meu nome é ' + nome + ', minha idade é ' + idade + ', e nasci na cidade de ' + cidadeDeNascimento;

console.log(apresentacao)


// Template String
// Ao invés de concatenar as variáveis em uma String, coloca-se o ${} para cada variável e a String é envolta por `` ao invés de ''

apresentacao = `Meu nome é ${nome}, minha idade é ${idade} anos, e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);