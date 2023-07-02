export = {};

// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: 'Carlos',
    idade: 22,
    funcao: 'Programador'
};

console.log(pessoa);

// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onBoarding01(funcionario: {nome: string}): string {
    return `Seja bem vindo(a) ${funcionario.nome}!`;
};

console.log(onBoarding01({nome: 'Carlos'}));

// ==> Exemplo 03 -> object nomeados
interface Pessoa {
    nome: string;
    idade: number;
    funcao: string;
};

function onBoarding02(pessoa: Pessoa) {
    return `Seja bem vindo(a) ${pessoa.nome}, sua função é ${pessoa.funcao}!`;
};

console.log(onBoarding02({nome: 'Carlos', idade: 22, funcao: 'Programador'}));
  
// ==> Exemplo 04 -> object como type alias
type Pessoa03 = {
    nome: string;
    funcao: string;
    linguagem: string;
} ;

function onBoarding03(pessoa: Pessoa03) {
    return `Seja bem vindo(a) ${pessoa.nome}, sua função é ${pessoa.funcao} com ${pessoa.linguagem}!`;
};

console.log(onBoarding03({nome: 'Carlos', funcao: 'Programador', linguagem: 'Java'}));
  
// ==> Exemplo 05 -> usando optional no object
interface Pessoa04 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
};


function onBoarding04(pessoa: Pessoa04) {
    return `Seja bem vindo(a) ${pessoa.nome}, sua função é ${pessoa.funcao} com ${pessoa.linguagem}!`;
};

console.log(onBoarding04({nome: 'Carlos', funcao: 'Programador', linguagem: 'Java'}));

// ==> Exemplo 06 -> Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readonly)

// ==> Exemplo 07 -> tipos de extensões (heranças)
  
// ==> Exemplo 08 -> Tipos de Interseções
  
// Exemplo 09 -> Generic Objects

  