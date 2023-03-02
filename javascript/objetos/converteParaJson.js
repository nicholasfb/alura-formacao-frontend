const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NODEJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
})

console.log(jsonLivro);

const objetoLivro = JSON.parse(jsonLivro);
console.log(typeof objetoLivro);