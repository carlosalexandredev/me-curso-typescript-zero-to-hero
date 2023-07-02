// ==> Exemplo 01: loop for
for ( let i = 0; i < 10; i++){
    console.log(i);
};

// ==> Exemplo 02: for ...of - (retorna uma coleção de matriz, lista ou tupla)
const numeros = [10,20,30,40,50,60];

for(const num1 of numeros){
    console.log(num1);
};

// ==> Exemplo 03: for ...in - (retorna uma coleção de matriz, lista ou tupla)
const numeros02 = [5,4,3,2,1];

for (const i in numeros02) {
    console.log(i);
}

// sort()
const ordenacaoNumero: number[] = numeros02.sort();
console.log(ordenacaoNumero);