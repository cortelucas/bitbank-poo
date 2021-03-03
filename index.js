class Cliente {
    nome;
    cpf;
    rg;
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = 'Lucas';
cliente1.cpf = '12345678900';
cliente1.rg = '11222330';
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1);

const cliente2 = new Cliente();

cliente2.nome = 'Andressa';
cliente2.cpf = '98765432100';
cliente1.rg = '33222110';
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
