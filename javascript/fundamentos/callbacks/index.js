const numeros = [43, 50, 65, 12];
const soma = numeros.reduce((acumulador, atual) => atual + acumulador, 0);
console.log(soma);

// const soma = numeros.reduce(function (acumulador, atual){
//     return atual + acumulador;
// }, 0);

// console.log(soma);