// declaração de função
function minhaFuncao(param) {
    //bloco de código
}

minhaFuncao("param");

// expressão de função

// const soma = function(num1, num2) {return num1 + num2};

console.log(soma(1,41));

// diferença principal : HOISTING
// funções e var são "listadas" no topo do arquivo
// console.log(variavel);
// let variavel = 0;


console.log(apresentar());

function apresentar() {
    return "olá";

}
console.log(soma(41,1));

const soma = function(num1, num2) {return num1 + num2};