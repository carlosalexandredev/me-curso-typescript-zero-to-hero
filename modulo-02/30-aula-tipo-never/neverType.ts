// ==> Exemplo 01: Never - Throw Exception
function error(message: string): never {
    throw new Error(message);
};

console.log(error('Erro de mensagem - 01'));
  
// ==> Exemplo 02: Never inferido automaticamente
function reject(){
    return error('Error de Mensagem - 02');
};

console.log(reject())

  
// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'
const loopInfinito = function loop(){
    while(true){
        console.log('Oi, Developers')
    };
};

//console.log(loopInfinito());

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'
const algoVoid: void = null;
//const algoNever: never = null;

console.log(algoVoid);
//console.log(algoNever);