// Uso de Colchetes:
let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// Array Object (Objeto Array):
let frutasNome: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[3]); 

// Adicionando mais strings com método 'push'
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol'];
idiomas.push('Francês');
idiomas.push('Arábe');
console.log(idiomas);
idiomas.filter(idm => idm.includes('b')).forEach(console.log);

// Identificar tamanho do array - método 'length'
console.log(`Quantidade de idiomas: ${idiomas.length}.`);

// Exemplo de Array com Spread Operator
let listaNumeros = [1,2,3,4,5];
listaNumeros = [...listaNumeros, 6,7,8,9,10]
console.log(listaNumeros);

// Exemplo de Array com laço de iteração
let linguagensArray:string[] = new Array('JavaScript', 'Java', 'Python', 'Go', 'C#');
percorreLinguagens(linguagensArray);

function percorreLinguagens(linguagens:String[]) {
    for(let i = 0; i < linguagens.length; i++) {
       console.log(`${i+1}°:  ${linguagens[i]}`);
    }
}


