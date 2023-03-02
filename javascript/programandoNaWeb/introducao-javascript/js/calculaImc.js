const titulo = document.querySelector('h1');
// console.log(titulo);
// console.log(titulo.textContent);

// titulo.textContent = "Aparecida Nutricionista";

// Query Selector retorna apenas um elemento
// const pacienteEl = document.querySelector('.paciente');

// querySelectorAll retorna um array de elementos
const pacienteEl = document.querySelectorAll('.paciente');


for(let i = 0; i < pacienteEl.length; i++) {
    const paciente = pacienteEl[i];

    const tdPesoPaciente = paciente.querySelector('.info-peso');
    let peso = tdPesoPaciente.textContent;

    const tdAlturaPaciente = paciente.querySelector('.info-altura');
    let altura = tdAlturaPaciente.textContent;

    const tdImcPaciente = paciente.querySelector('.info-imc');
    
    
    let pesoValido = validaPeso(peso); // true ou false
    let alturaValida = validaAltura(altura);
    
    if(!pesoValido) {
        console.log('peso inválido');
        pesoValido = false;
        tdImcPaciente.textContent = 'Peso inválido';
        paciente.style.backgroundColor = 'lightcoral';
    }
    
    if(altura <= 0 || altura >= 3) {
        console.log('altura inválido');
        alturaValida = false;
        tdImcPaciente.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido');
    }
    
    if(pesoValido && alturaValida) {
        let imc = calculaImc(peso, altura);
        tdImcPaciente.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}