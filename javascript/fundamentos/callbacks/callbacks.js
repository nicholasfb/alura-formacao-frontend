const nomes = ['Ana', 'Ju', 'Paulo'];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {
    console.log(nome);
}

const mensagem = function () {
    console.log('Essa mensagem é exibida depois de 3 segundos');

}
setTimeout(mensagem, 3000);

setTimeout(function () {
    console.log('Outra mensagem que demora 3 segundos');
}, 3000);