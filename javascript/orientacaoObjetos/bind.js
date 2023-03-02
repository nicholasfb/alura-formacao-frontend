// O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:

const personagem = {
    nome: "Princesa Leia",
    apresentar: function() {
        return `a personagem é ${this.nome}`;
    }
}

// O objeto acima contém uma propriedade nome e um método apresentar que retorna um string com nome; this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, “este objeto”.

const personagemGenerico = personagem.apresentar;

console.log(personagemGenerico());

// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this

// Ressolvemos este problema com bind()

const personagemDefinido = personagemGenerico.bind(personagem);

console.log(personagemDefinido);

