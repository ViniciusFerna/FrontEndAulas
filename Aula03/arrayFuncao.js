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
