class Cliente {
    nome;
    cpf;
    rg;    
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor) {
            this.sacar -= valor;
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = 'Lucas';
cliente1.cpf = '12345678900';
cliente1.rg = '11222330';

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 1001;
contaCliente1.saldo = 0;

console.log(
    cliente1, +'\n'+
    contaCliente1
);


const cliente2 = new Cliente();

cliente2.nome = 'Andressa';
cliente2.cpf = '98765432100';
cliente1.rg = '33222110';

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 1001;
contaCliente2.saldo = 0;

console.log(
    cliente2, +'\n'+
    contaCliente2
);
