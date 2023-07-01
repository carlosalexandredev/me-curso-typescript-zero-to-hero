// ==> Exemplo 01 - funções:
function logError(errorMessage: string): void {
    console.log(errorMessage);
};

console.log('Required field - Name!');

// ==> Exemplo 02 - funções:

const logErrorExample2  = (errotMessage: string): void => {
    console.log(errotMessage);
};

logErrorExample2('Required field - Surname!');

// ==> Exemplo void: variáveis
let variavelExemploVoid: void;
//variavelExemploVoid = 1;
variavelExemploVoid = null;
variavelExemploVoid = undefined;

console.log(variavelExemploVoid);
