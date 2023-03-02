const objPersonagem = {
    nome: 'Mormunuk',
    class: 'ranger',
    nivel: '5',
    aliado: {
        nome: 'Lurfrick',
        class: 'rogue'
    },
    alignment: 'Chaotic Neutral'
};

console.log(objPersonagem);

// remover a propriedade -> delete objPersonagem.aliado
delete objPersonagem.aliado;
console.log(objPersonagem);

// é possível utilizar []
delete objPersonagem['alignment'];

console.log(objPersonagem);
console.log(objPersonagem.alignment);

// delete retorna boolean, ele não retorna false se tentarmos remover uma propriedade que não existe no objeto
