//while
// let letraCerta = prompt('Digite a letra a');

// while(letraCerta !== 'a') {
//     letraCerta = prompt('por favor, digite a letra a');
// }

// alert('obrigado!');

// let total = 0;

// while (total < 5) {
//     console.log(total);
//     total++;
// }

// console.log(`saiu do while ${total}`);

//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let listaNumeros = [2,3,4,6,8];

for (let i = 0; i < listaNumeros.length;i++) {
    if(listaNumeros[i] === 3) {
        console.log(`O número ${listaNumeros[i]} foi encontrado`);
    }
    
}