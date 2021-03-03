import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Lucas';
cliente1.cpf = 11122233344;
cliente1.rg = 112223334;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 1001;
contaCliente1.cliente = cliente1;

contaCliente1.depositar(100);
contaCliente1.sacar(150);

const valorSacado = contaCliente1.sacar(50);

console.log(
    
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
