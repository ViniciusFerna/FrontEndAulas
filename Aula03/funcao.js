// Função com parâmetro e retorno
function dobrar(numero) {
    return numero * 2;
};

console.log(dobrar(20));


// Função sem parâmetro e sem retorno
function dizerOla() {
    console.log("Olá");
};

dizerOla();

// Forma simplificada de criar uma função com retorno (função anonima) - eka não tem nome então ela só existe para a variável em que ela foi criada
const quadrado = (x) => x * 2; 

console.log(quadrado(5));

const dizerOlaPersonalizado = function(nome) {
    return `Olá ${nome}`;
};

console.log(dizerOlaPersonalizado("Vinicius"));
