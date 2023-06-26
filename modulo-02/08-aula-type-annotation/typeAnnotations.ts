// Variáveis:
let nome: string = 'carlos';
console.log(nome);

// Arrays:
let animais: string[] = ['gato', 'cachorro', 'gato'];
console.log(animais)

// Objeto:
let carro: {
    nome: string,
    cor: string;
    ano: number;
    preco: number;
}

carro = {nome: 'Toyota', cor: 'Prata', ano: 2015, preco: 80000};
console.log(carro);

// Functions;
function multiplicaValor(num01: number, num02: number) {
    return num01 + num02;
}

console.log(multiplicaValor(30, 10))