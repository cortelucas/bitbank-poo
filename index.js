import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente('Lucas', 11122233309);
const cliente2 = new Cliente('Andressa', 88822233309);

const contaCliente1 = new ContaCorrente(1001, cliente1);
contaCliente1.depositar(500);

const contaCliente2 = new ContaCorrente(1001, cliente2);

let valor = 200;
contaCliente1.transferir(valor, contaCliente2);

console.log(contaCliente1);
console.log(contaCliente2);