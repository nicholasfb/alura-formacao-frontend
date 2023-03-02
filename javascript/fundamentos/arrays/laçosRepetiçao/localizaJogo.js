const jogos = ['Baldurs Gate 1', 'Baldurs Gate 2', 'World of Warcraft', 'Divinity Original Sin 2'];
const notaDosJogos = [9.4, 9.8, 9.5, 9.3];

let listaDeJogosENotaDosJogos = [jogos, notaDosJogos];

let localizaJogo = (nomeDoJogo) => {
    if(listaDeJogosENotaDosJogos[0].includes(nomeDoJogo)) {

        let indice = listaDeJogosENotaDosJogos[0].indexOf(nomeDoJogo);

        return listaDeJogosENotaDosJogos[0][indice] + `, a nota do jogo é ${listaDeJogosENotaDosJogos[1][indice]}`;
    } else {
        return 'Jogo não localizado';
    }
}

console.log(localizaJogo('Baldurs Gate 1'));