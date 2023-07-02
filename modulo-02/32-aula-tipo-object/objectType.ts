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
interface Pessoa05 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
};


function onBoarding05(pessoa: Pessoa05) {
    return `Seja bem vindo(a) ${pessoa.nome}, sua função é ${pessoa.funcao} com ${pessoa.linguagem}! \nVerifique seu e-mail: ${pessoa.email}`;
};

console.log(onBoarding05(
    {
        nome: 'Carlos', 
        funcao: 'Programador', 
        linguagem: 'Java',
        email: 'carlosalexandredev@contato.com'
    }
));

// ==> Exemplo 07 -> tipos de extensões (heranças)
interface Mae {
    nome: string
}

interface Pai {
    sobrenome: string
}
interface Filho extends Mae, Pai {
    idade: number;
}

const filha: Filho = {
    nome: 'Carlos',
    sobrenome: 'Alexandre',
    idade: 22
};

console.log(filha);
  
// ==> Exemplo 08 -> Tipos de Interseções
type Animal = Cachorro & Gato;

interface Cachorro {
    tipo: string;
}

interface Gato {
    tipo: string;
}
  
// Exemplo 09 -> Generic Objects
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario: Usuario = { 
    nome:  'Carlos Alexandre',
    email: 'carlosalexandredev@contato.com'
}

const admin: Admin = { 
    nome:  'Carlos Alexandre',
    email: 'carlosalexandredev@contato.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario))
console.log(acessarSistema<Admin>(admin))

/*
function acessarSistema(usuario: Usuario): Usuario {
    return usuario;
}

console.log(acessarSistema(usuario))
*/