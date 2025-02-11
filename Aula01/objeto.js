let usuario = {
    nome: "Maria",
    cpf: "000.111.222-33",
    idade: 25,
    casada: false
};

console.log(usuario);

delete usuario.cpf;

console.log(usuario);

// Alternando o valor
usuario.nome = "Mariah";

console.log(usuario.nome);

// Adicionando uma propriedade nova
usuario.sobrenome = "Carey";

console.log(usuario);


usuario.cpf = "123.456.789-10";

for(let propriedade in usuario) {
    if(propriedade != "cpf") {
        console.log(`${propriedade}: ${usuario[propriedade]}`);
    }
    
}

let carro = {
    modelo: "Miata M5",
    marca: "Mazda",
    ano: 1995
}

let carros = [
    {
        modelo: "Honda fit",
        ano: 2018,
        marca: 30
    },
    {
        modelo: "New Fiesta",
        ano: 2014,
        marca: "Ford"
    },
    {
        modelo: "C3",
        ano: 2020,
        marca: "Citroen"
    }
]

console.log(carros[2].marca);


