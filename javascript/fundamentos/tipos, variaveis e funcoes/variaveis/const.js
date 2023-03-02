//const
// constante

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;

// É necessário inicilizar um valor numa const
// const area;
let area;

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}



console.log(area);
