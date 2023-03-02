const clientes = [
    {
        nome: "André",
        cpf: "12345654321",
        dependentes: [{
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2011"
        },
    {
        nome: "Samia",
        parentesco: "filha",
        dataNascimento: "04/01/2014"
    }],
    },
    {
        nome: "Juliana",
        cpf: "435654321",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNascimento: "30/08/2020"
        }],
    }
]

//Spread operator
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);