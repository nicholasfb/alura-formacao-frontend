const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}

const equipamentoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}

// const guerreiro = {fichaGuerreiro, equipamentoGuerreiro};
// console.log(guerreiro);

                    // Spread Operator(...)
const guerreiro = { ...fichaGuerreiro, ...equipamentoGuerreiro};
console.log(guerreiro);