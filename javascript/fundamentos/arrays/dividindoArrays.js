const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andrea',
'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'Daisy', 'Camilo'];


// .slice() -> 2 parâmetros, .slice(início e fim);

console.log('tamanho da array: ', nomes.length);
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1 : ${sala1}`);
console.log(`Alunos da sala 2 : ${sala2}`);