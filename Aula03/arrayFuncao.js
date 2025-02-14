let numeros = [10, 20, 30, 50, 80, 100];

// MAP - Transformando cada elemento da array
let numerosMaisUm = numeros.map((i) => i + 1);
// Como se fosse um FOR
console.log(numerosMaisUm);

// FIND - Encontrar o primeiro elemento que satisfaz uma condição
let numeroMenorQue50 = numeros.find((i) => i < 50);
console.log(numeroMenorQue50);

// INCLUDES - Verifica se um elemento existe
const nomes = ["Ana", "Maria", "João", "Wesley"];
let existeKaio = nomes.includes("Kaio");

console.log(existeKaio);

// FILTER - Filtrar o array a partir de uma condição
let nomesSemALetraA = nomes.filter((i) => !i.toLowerCase().includes("a"));
console.log(nomesSemALetraA);

// SOME - Verifica se pelo menos um elemento atende a condição
let existeAlgumNumeroMaiorQue100 = numeros.some((i) => i > 100);
let existeAlgumNumeroDivisivelPorDois = numeros.some((i) => i % 2 == 0); // Para verificar se tem um número
console.log(existeAlgumNumeroMaiorQue100);

// EVERY - Verifica se todos atendem a condição
let todosOsNumerosSaoMaioresQue9 = numeros.every((i) => i > 9);
console.log(todosOsNumerosSaoMaioresQue9);

// Exercicio 1
let exercicio1 = [1, 2, 3, 4, 5];
console.log(exercicio1.map((i) => i * 2));

// Exercicio 2
let exercicio2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(exercicio2.filter((i) => i > 5));

// Exercicio 3
let exercicio3 = [10, 25, 47, 58, 62, 79];
console.log(exercicio3.find((i) => i > 50));

// Exercicio 4
let exercicio4 = [10, -5, 7, 0, -3];
console.log(exercicio4.some((i) => i < 0));

// Exercicio 5
let exercicio5 = [1, 2, 3, 4, 5];
console.log(exercicio5.every((i) => i > 2));

// Exercicio 6
let exercicio6 = [1, 3, 5, 7, 9, 10];
console.log(exercicio6.includes(7));
