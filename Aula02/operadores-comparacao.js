let x = 10;
let z = 15;

console.log(x > 10); // Maior que
console.log(x < z); // Menor que
console.log(x >= z); // Maior ou igual que
console.log(x <= z); // Menor ou igual que
console.log(10 == '10'); // Igualdade no valor (true)
console.log(10 === '10'); // Igualdade estrita (false)
console.log(x !== z); // Diferente de

/* Operador Ternario */
let idade = 12;
let msg = idade >= 18 ? "Voce é maior de idade" : "Voce é menor de idade";
// condicao ? valor_se_verdade : valor_se_falso
console.log(msg);

// Exercicio 1

let idadePessoa = 31;
let dataNascimento = 2025 - idadePessoa;

if (dataNascimento > 2025 && dataNascimento < 2039) {
    console.log("Geração Beta");
} else if(dataNascimento > 2010 && dataNascimento < 2024) {
    console.log("Geração Alpha");
} else if(dataNascimento > 1997 && dataNascimento < 2009) {
    console.log("Geração Z");
} else if(dataNascimento > 1981 && dataNascimento < 1996) {
    console.log("Millenial");
} else if(dataNascimento > 1965 && dataNascimento < 1980) {
    console.log("Geração X");
} else if(dataNascimento > 1946 && dataNascimento < 1964) {
    console.log("Baby Boomer");
} else {
    console.log("Erro");
}

// Exercicio 3

let valorCompra = 100;
let idadeCliente = 17;
let desconto;

if (idadeCliente > 60 && valorCompra > 500) { 
    let desconto = 0.35;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
} else if (idadeCliente > 60) {
    let desconto = 0.20;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
} else if (idadeCliente < 18 && valorCompra > 500) {
    let desconto = 0.25;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
} else if (idadeCliente < 18) {
    let desconto = 0.10;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
} else if (valorCompra > 500) {
    let desconto = 0.15;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
} else {
    let desconto = 0.05;
    let valorFinal = valorCompra - (valorCompra * desconto);
    console.log(valorFinal);
}


