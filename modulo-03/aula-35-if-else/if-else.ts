export {};
// ==> Exemplo 01 - Uso do if
const numeroMax = 100;
let contador = 100;

if(contador < numeroMax){
    contador++;
};

console.log(contador);

// ==> Exemplo 02 - Uso do if
const permissaoIdadeDirigir = 18;

if(permissaoIdadeDirigir >= 18){
    console.log('Você está habilitado para dirigir!')
};

console.log(permissaoIdadeDirigir);

// ==> Exemplo 03 - Uso do if-else
const permissaoIdadeDirigir2 = 16;

if(permissaoIdadeDirigir2 >= 18){
    console.log('Você está habilitado para dirigir!')
} else {
    console.log('Você não está habilitado para dirigir!')
};

console.log(permissaoIdadeDirigir2);

//==> Exemplo 04 - if... else if
let desconto: number;

let valorCompra = 14;

if(valorCompra > 0 && valorCompra <= 5){
    desconto = 5;
} else if(valorCompra > 6 && valorCompra <= 10){
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Você teve um desconto de ${desconto}%!`);

// ==> Exemplo 05 - Ternário (? :) - if...else
let idadeVotacao = 18;

if(idadeVotacao >= 18){
    console.log('Você é elegível para votar!');
} else {
    console.log('Você não é elegível para votar!');
}

idadeVotacao = 16;

// ==> Ternário
console.log(idadeVotacao >= 18 ? 'Você é elegível para votar!' : 'Você não é elegível para votar!');

