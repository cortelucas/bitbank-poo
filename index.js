import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Lucas';
cliente1.cpf = 11122233344;
cliente1.rg = 112223334;

const cliente2 = new Cliente();

cliente2.nome = 'Andressa';
cliente2.cpf = 98765432100;
cliente2.rg = 33222110;

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 1001;
contaCliente1.cliente = cliente1;
contaCliente1.depositar(500);

const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 1001;
contaCliente2.cliente = cliente2;

let valor = 200;
contaCliente1.transferir(valor, contaCliente2);

console.log(`Valor: R$ ${valor}`);
console.log(contaCliente2);