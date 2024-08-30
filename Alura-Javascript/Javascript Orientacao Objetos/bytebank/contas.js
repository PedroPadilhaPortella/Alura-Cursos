import Cliente from './Cliente.js';
import ContaCorrente from './Contas/ContaCorrente.js';
import ContaPoupanca from './Contas/ContaPoupanca.js';
import ContaSalario from './Contas/ContaSalario.js';

//Cliente 01
const cliente01 = new Cliente('Marcos  Silva', '834.123.341-12')

//Cliente 02
const cliente02 = new Cliente ('Pedro Portella', '423.654.217-09')

//Cliente 03
const cliente03 = new Cliente ('William Juliano', '154.432.093-02')

//Conta Corrente do Cliente 01
const cc01 = new ContaCorrente(cliente01, 1001)
cc01.depositar(2000)
cc01.sacar(500)

//Conta Salario do Cliente 02
const cc02 = new ContaSalario(cliente02)
cc01.transferir(600, cc02);

//Conta Poupança do Cliente 03
const cc03 = new ContaPoupanca(120, cliente01, 1001);

console.log(cc01);
console.log(cc02);
console.log(cc03);
console.log(`Quantidade de Contas Corrente: ${ContaCorrente.numeroDeContas}`);
