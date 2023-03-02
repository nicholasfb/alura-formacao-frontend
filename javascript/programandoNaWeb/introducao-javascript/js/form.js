const botaoAdicionarPaciente = document.querySelector('#adicionar-paciente');
botaoAdicionarPaciente.addEventListener('click', function(event){
    event.preventDefault();

    
    const form = document.querySelector('#form-adiciona');
    

    // Extraindo informacoes do paciente do form

    let paciente = obtemPacienteDoFormulario(form);
    
    // cria a tr a td do paciente
    let pacienteTr = montaTr(paciente);
    
    const erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    // adicionando o paciente na tabela
    let tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    form.reset();
    
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
    
});

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro');

    ul.innerHTML = '';

    erros.forEach(function(erro) {
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
     // Acessa os valores dos campos do formulário pelo name

    // Extraindo informacoes do paciente do form
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    // cria a tr do paciente
    let pacienteTr = document.createElement('tr');

    // adicionando classe no elemento
    pacienteTr.classList.add('paciente');

     // cria a td do paciente
  
     pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
     pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
     pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
     pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
     pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));



    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    let erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push('Peso é inválido')
    }

    if(!validaAltura(paciente.altura)) {
        erros.push('Altura é inválida!');
    }

    if(paciente.gordura.length == 0) {
        erros.push('A gordura não pode ser em branco');
    }

    if(paciente.altura.length == 0) {
        erros.push('A altura não pode ser em branco');
    }

    if(paciente.peso.length == 0) {
        erros.push('A peso não pode ser em branco');
    }
    
    return erros;
}