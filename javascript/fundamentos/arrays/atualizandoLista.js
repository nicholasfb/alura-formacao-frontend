const listaDeChamda = ['João','Ana', 'Caio', 'Lara','Marjorie', 'Leo'];

// .splice -> remover e inserir elementos do array de qualquer índice
// 3 parâmetros, 
// qual índice começa, 
// número de elementos que vai remover, 
// o que vai ser colocado no lugar

// é possível utilizar o .splice sem o 3° parâmetro

// listaDeChamda.splice(1, 2, 'Rodrigo');
listaDeChamda.splice(2, 0, 'Rodrigo');
console.log(`Lista de Chamada: ${listaDeChamda}`);


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)