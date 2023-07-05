export {};

// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa: number, nome: string, email?: string){
    console.log('Id Funcionário...: ', idPessoa, 'Nome ...:', nome);
    if(email !== undefined) console.log('E-mail ...: ', email);
};

informarDadosPessoa(4445, 'Fernandinho', 'nando@gmail.com');
informarDadosPessoa(4447, 'Carlos');

// ==> Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number){
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
};

mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso', 778811);


// ==> Exemplo 03
type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 124454,
    nome: 'Carlos A.',
};

console.log(pessoa);