let frutas = ["Banana", "Maçã", "Uva", "Pitanga", "Kiwi", "Morango", "Laranja", "Mexirica"];
            //   0         1      2        3        4        5           6          7
let numeros = [1, 4, 7, 8, 10, 22];
let misturada = [1, "Pitaya", false, "Pitaya"];

console.log(frutas);
console.log(frutas[3]);

frutas[7] = "Manga";

console.log(frutas);


// Push - adiciona no final
frutas.push("Imbu", "Umbu");
console.log(frutas);

// Pop - Remove o ultimo elemento
frutas.pop();
console.log(frutas);

// Shift - Remove o primeiro elemento
frutas.shift();
console.log(frutas);

// Reverse - Inverte a ordem da lista
frutas.reverse()
console.log(frutas);

numeros.pop();
numeros.pop();
numeros.push(50);
numeros.push(33);
numeros.reverse();
numeros.pop();

console.log(numeros);




